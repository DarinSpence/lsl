const roadmapSource = "https://raw.githubusercontent.com/DarinSpence/lsl/main/docs/ROADMAP.md?v=stage-zero";
const roadmapContent = document.querySelector("#roadmap-content");

function textNode(value) {
  return document.createTextNode(value);
}

function phaseBadge(title) {
  const badge = document.createElement("span");
  badge.className = "week-badge";
  const match = title.match(/(?:Weeks?|Lawns?)\s+#?([\d–-]+)/i) || title.match(/\b(\d+)\b/);
  badge.textContent = match ? match[1].replace("–", "–") : "→";
  return badge;
}

function addParagraph(container, className, label, value) {
  const paragraph = document.createElement("p");
  paragraph.className = className;
  if (label) {
    const strong = document.createElement("strong");
    strong.textContent = label;
    paragraph.append(strong, textNode(" "));
  }
  paragraph.append(textNode(value));
  container.append(paragraph);
}

function createPhase(title, isOpen) {
  const details = document.createElement("details");
  details.className = "phase";
  details.open = isOpen;

  const summary = document.createElement("summary");
  const [time = "The next step", name = title] = title.split(" - ");
  const label = document.createElement("span");
  label.className = "phase-label";
  const timeLabel = document.createElement("span");
  timeLabel.className = "phase-time";
  timeLabel.textContent = time;
  const titleLabel = document.createElement("span");
  titleLabel.className = "phase-title";
  titleLabel.textContent = name;
  label.append(timeLabel, titleLabel);
  summary.append(phaseBadge(title), label);

  const body = document.createElement("div");
  body.className = "phase-body";
  details.append(summary, body);
  return { details, body, list: null };
}

function createPlanStart(title) {
  const section = document.createElement("section");
  section.className = "plan-start";
  const [name, timing] = title.split(" - ");
  const label = document.createElement("p");
  label.className = "plan-start-timing";
  label.textContent = timing || "After the First 20 Lawns";
  const heading = document.createElement("h3");
  heading.textContent = name;
  section.append(label, heading);
  return { section, body: section, list: null, isPlanStart: true };
}

function renderRoadmap(markdown) {
  const fragment = document.createDocumentFragment();
  const lines = markdown.split("\n");
  let phase = null;
  let showingObjectives = false;

  for (const rawLine of lines) {
    const line = rawLine.trim();
    if (!line || line.startsWith("# Logan Lawns") || line.startsWith("---")) continue;

    if (line.startsWith("## ")) {
      const title = line.slice(3);
      phase = title === "The Operating Plan Starts Here - After Lawn #20"
        ? createPlanStart(title)
        : createPhase(title, fragment.childElementCount === 0);
      fragment.append(phase.section || phase.details);
      showingObjectives = false;
      continue;
    }

    if (!phase) continue;

    if (phase.isPlanStart && line.startsWith("**The rule:**")) {
      addParagraph(phase.body, "plan-start-rule", "The rule:", line.replace("**The rule:**", "").trim());
      continue;
    }

    if (line.startsWith("**Why this now:**")) {
      addParagraph(phase.body, "why", "Why this now:", line.replace("**Why this now:**", "").trim());
      continue;
    }

    if (line === "Objectives:") {
      const label = document.createElement("p");
      label.className = "objective-label";
      label.textContent = "This phase";
      phase.body.append(label);
      phase.list = document.createElement("ul");
      phase.body.append(phase.list);
      showingObjectives = true;
      continue;
    }

    if (showingObjectives && line.startsWith("- ")) {
      const item = document.createElement("li");
      const taskMatch = line.match(/^- \[ \] (.+)$/);
      if (taskMatch) {
        const label = document.createElement("label");
        label.className = "checklist-item";
        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.setAttribute("aria-label", taskMatch[1]);
        const copy = document.createElement("span");
        copy.textContent = taskMatch[1].replace(/`/g, "");
        label.append(checkbox, copy);
        item.append(label);
        phase.list.classList.add("checklist");
      } else {
        item.textContent = line.slice(2).replace(/`/g, "");
      }
      phase.list.append(item);
      continue;
    }

    if (line.startsWith("**Goal:**")) {
      addParagraph(phase.body, "goal", "Goal:", line.replace("**Goal:**", "").trim());
      showingObjectives = false;
    }
  }

  roadmapContent.replaceChildren(fragment);
}

fetch(roadmapSource)
  .then((response) => {
    if (!response.ok) throw new Error("The roadmap could not be loaded.");
    return response.text();
  })
  .then(renderRoadmap)
  .catch(() => {
    roadmapContent.replaceChildren();
    const message = document.createElement("p");
    message.className = "load-error";
    message.textContent = "The plan is temporarily unavailable. Use the GitHub link above to open it.";
    roadmapContent.append(message);
  });

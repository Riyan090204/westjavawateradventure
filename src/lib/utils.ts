export function cn(...inputs: (string | boolean | undefined | null | { [key: string]: boolean })[]): string {
  const classes: string[] = [];

  for (const input of inputs) {
    if (!input) continue;
    if (typeof input === "string") {
      classes.push(input);
    } else if (typeof input === "object") {
      for (const [key, value] of Object.entries(input)) {
        if (value) classes.push(key);
      }
    }
  }

  return classes.join(" ");
}

export function formatActivityName(activity: string): string {
  switch (activity) {
    case "spearfishing":
      return "Spearfishing";
    case "freediving":
      return "Freediving";
    case "scuba-diving":
      return "Scuba Diving";
    default:
      return activity;
  }
}

export function formatTripFormat(format: string): string {
  switch (format) {
    case "join-trip":
      return "Join Trip";
    case "private":
      return "Private Trip";
    case "custom":
      return "Custom Expedition";
    default:
      return format;
  }
}

export function formatSkillLevel(level: string): string {
  switch (level) {
    case "beginner":
      return "Beginner";
    case "intermediate":
      return "Intermediate";
    case "advanced":
      return "Advanced";
    case "all-levels":
      return "All Levels";
    default:
      return level;
  }
}

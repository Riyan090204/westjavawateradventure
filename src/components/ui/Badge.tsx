import React from "react";
import { formatActivityName, formatTripFormat, formatSkillLevel } from "@/lib/utils";

interface BadgeProps {
  children?: React.ReactNode;
  variant?: "activity" | "format" | "level" | "outline" | "highlight";
  value?: string;
  className?: string;
}

export function Badge({ children, variant = "outline", value, className = "" }: BadgeProps) {
  let colorStyle = "bg-slate-800/80 text-slate-200 border-slate-700";
  let content = children || value;

  if (variant === "activity" && value) {
    content = formatActivityName(value);
    switch (value) {
      case "spearfishing":
        colorStyle = "bg-amber-500/10 text-amber-400 border-amber-500/30";
        break;
      case "freediving":
        colorStyle = "bg-cyan-500/10 text-cyan-400 border-cyan-500/30";
        break;
      case "scuba-diving":
        colorStyle = "bg-blue-500/10 text-blue-400 border-blue-500/30";
        break;
    }
  } else if (variant === "format" && value) {
    content = formatTripFormat(value);
    switch (value) {
      case "private":
        colorStyle = "bg-emerald-500/10 text-emerald-400 border-emerald-500/30";
        break;
      case "join-trip":
        colorStyle = "bg-sky-500/10 text-sky-400 border-sky-500/30";
        break;
      case "custom":
        colorStyle = "bg-purple-500/10 text-purple-400 border-purple-500/30";
        break;
    }
  } else if (variant === "level" && value) {
    content = formatSkillLevel(value);
    switch (value) {
      case "beginner":
        colorStyle = "bg-teal-500/10 text-teal-400 border-teal-500/30";
        break;
      case "intermediate":
        colorStyle = "bg-indigo-500/10 text-indigo-400 border-indigo-500/30";
        break;
      case "advanced":
        colorStyle = "bg-rose-500/10 text-rose-400 border-rose-500/30";
        break;
      case "all-levels":
        colorStyle = "bg-slate-700/50 text-slate-300 border-slate-600";
        break;
    }
  } else if (variant === "highlight") {
    colorStyle = "bg-cyan-500/20 text-cyan-300 border-cyan-400/40";
  }

  return (
    <span
      className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium border tracking-wide uppercase ${colorStyle} ${className}`}
    >
      {content}
    </span>
  );
}

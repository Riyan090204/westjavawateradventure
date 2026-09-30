import React from "react";
import { ItineraryItem } from "@/types/package";

interface ItineraryTimelineProps {
  itinerary: ItineraryItem[];
}

export function ItineraryTimeline({ itinerary }: ItineraryTimelineProps) {
  return (
    <div className="relative pl-6 sm:pl-8 space-y-8 before:absolute before:left-2.5 sm:before:left-3 before:top-3 before:bottom-3 before:w-0.5 before:bg-gradient-to-b before:from-cyan-500 before:via-blue-600 before:to-slate-800">
      {itinerary.map((item, index) => (
        <div key={index} className="relative group">
          {/* Timeline Node Dot */}
          <div className="absolute -left-6 sm:-left-8 top-1 w-6 h-6 rounded-full bg-slate-950 border-2 border-cyan-400 flex items-center justify-center text-cyan-400 shadow-md shadow-cyan-950">
            <span className="w-2 h-2 rounded-full bg-cyan-400" />
          </div>

          <div className="p-5 sm:p-6 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-3">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-800/80 pb-3">
              <span className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-wider bg-cyan-950/80 border border-cyan-800/60 px-2.5 py-1 rounded-lg">
                {item.dayOrTime}
              </span>
              <h3 className="text-base sm:text-lg font-bold text-white flex-1 min-w-[200px]">
                {item.title}
              </h3>
            </div>

            <ul className="space-y-2 text-xs sm:text-sm text-slate-300">
              {item.activities.map((act, actIdx) => (
                <li key={actIdx} className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2 flex-shrink-0" />
                  <span className="leading-relaxed">{act}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
}

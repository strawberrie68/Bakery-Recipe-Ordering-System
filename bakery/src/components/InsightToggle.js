import React from "react";

export default function InsightToggle(props) {
  console.log("insight toggled");
  return (
    <div className="insight-container mt-2">
      <div>
        <p className="text-slate-400 text-xs">
          last time made: Tues Jan 34 2026
        </p>
        <p className="text-slate-400 text-xs">quantity made: 225</p>
      </div>
      <div className="mt-5">
        <p className="text-slate-400 text-xs">insights</p>
        <p className="text-slate-400 text-xs">
          typically high demand on mondays
        </p>
        <p className="text-slate-400 text-xs">sold 200 last week</p>
      </div>
    </div>
  );
}

"use client";

import { motion } from "framer-motion";

interface FilterTabsProps {
  tabs: { label: string; value: string }[];
  active: string;
  onChange: (value: string) => void;
}

export function FilterTabs({ tabs, active, onChange }: FilterTabsProps) {
  return (
    <div className="flex flex-wrap gap-2 justify-center">
      {tabs.map((tab) => (
        <button
          key={tab.value}
          onClick={() => onChange(tab.value)}
          className="relative px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
        >
          {active === tab.value && (
            <motion.span
              layoutId="activeTab"
              className="absolute inset-0 rounded-full bg-indigo-600"
              transition={{ type: "spring", bounce: 0.2, duration: 0.4 }}
            />
          )}
          <span
            className={
              "relative z-10 " +
              (active === tab.value
                ? "text-white"
                : "text-slate-400 hover:text-slate-200")
            }
          >
            {tab.label}
          </span>
        </button>
      ))}
    </div>
  );
}

"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Skill } from "@/lib/data";

interface SkillBarProps {
  skill: Skill;
  delay?: number;
}

export function SkillBar({ skill, delay = 0 }: SkillBarProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <div ref={ref} className="group">
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm font-medium text-slate-300 group-hover:text-slate-100 transition-colors">
          {skill.name}
        </span>
        <span className="text-xs font-semibold text-indigo-400">{skill.level}%</span>
      </div>
      <div className="h-2 rounded-full bg-slate-700/60 overflow-hidden">
        <motion.div
          className="h-full rounded-full bg-gradient-to-r from-indigo-500 to-violet-500"
          initial={{ width: "0%" }}
          animate={isInView ? { width: skill.level + "%" } : { width: "0%" }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: delay + 0.2 }}
        />
      </div>
    </div>
  );
}

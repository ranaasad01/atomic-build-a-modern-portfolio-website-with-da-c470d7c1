"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Github, ArrowRight, ExternalLink } from "lucide-react";
import { Project } from "@/lib/data";
import { TechBadge } from "./TechBadge";
import { scaleIn } from "@/lib/animations";

const categoryColors: Record<string, string> = {
  frontend: "bg-sky-500/20 text-sky-300 border-sky-500/30",
  fullstack: "bg-violet-500/20 text-violet-300 border-violet-500/30",
  backend: "bg-emerald-500/20 text-emerald-300 border-emerald-500/30",
  mobile: "bg-orange-500/20 text-orange-300 border-orange-500/30",
};

const projectGradients: Record<string, string> = {
  "nexus-dashboard": "from-indigo-600/30 via-violet-600/20 to-purple-600/30",
  "aurora-ecommerce": "from-pink-600/30 via-rose-600/20 to-orange-600/30",
  "mindflow-app": "from-cyan-600/30 via-teal-600/20 to-emerald-600/30",
  "velocity-api": "from-amber-600/30 via-yellow-600/20 to-orange-600/30",
  "prism-ui": "from-violet-600/30 via-purple-600/20 to-fuchsia-600/30",
  cloudvault: "from-sky-600/30 via-blue-600/20 to-indigo-600/30",
};

interface ProjectCardProps {
  project: Project;
  index?: number;
}

export function ProjectCard({ project, index = 0 }: ProjectCardProps) {
  const gradient = projectGradients[project.slug] ?? "from-indigo-600/30 via-violet-600/20 to-purple-600/30";
  const catColor = categoryColors[project.category] ?? "bg-slate-500/20 text-slate-300 border-slate-500/30";

  return (
    <motion.div
      variants={scaleIn}
      whileHover={{ y: -6, transition: { duration: 0.2 } }}
      className="group relative flex flex-col rounded-2xl border border-slate-700/50 bg-slate-900/60 backdrop-blur-sm overflow-hidden hover:border-indigo-500/40 transition-colors duration-300"
    >
      {/* Card image / gradient header */}
      <div className={"relative h-48 overflow-hidden bg-gradient-to-br " + gradient}>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-6xl font-black text-white/10 select-none tracking-tighter">
            {project.title.slice(0, 2).toUpperCase()}
          </div>
        </div>
        {/* Overlay grid pattern */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />
        {/* Year badge */}
        <div className="absolute top-3 right-3 text-xs font-semibold text-white/60 bg-black/30 backdrop-blur-sm rounded-full px-2.5 py-1">
          {project.year}
        </div>
        {/* Category badge */}
        <div className={"absolute top-3 left-3 text-xs font-semibold rounded-full px-2.5 py-1 border " + catColor}>
          {project.category}
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-5">
        <h3 className="text-lg font-bold text-slate-100 mb-2 group-hover:text-indigo-300 transition-colors">
          {project.title}
        </h3>
        <p className="text-sm text-slate-400 leading-relaxed mb-4 flex-1">
          {project.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.tags.slice(0, 4).map((tag) => (
            <TechBadge key={tag} label={tag} size="sm" />
          ))}
          {project.tags.length > 4 && (
            <span className="text-xs text-slate-500 self-center">
              +{project.tags.length - 4} more
            </span>
          )}
        </div>

        {/* Actions */}
        <div className="flex items-center justify-between pt-3 border-t border-slate-700/50">
          <div className="flex items-center gap-3">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-slate-200 transition-colors"
                aria-label="GitHub"
              >
                <Github size={17} />
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-slate-200 transition-colors"
                aria-label="Live demo"
              >
                <ExternalLink size={17} />
              </a>
            )}
          </div>
          <Link
            href={"/projects/" + project.slug}
            className="flex items-center gap-1.5 text-sm font-medium text-indigo-400 hover:text-indigo-300 transition-colors group/link"
          >
            View details
            <ArrowRight size={14} className="group-hover/link:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </motion.div>
  );
}

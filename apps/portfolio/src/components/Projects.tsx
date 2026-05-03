"use client";

import { useState } from "react";

import Image from "next/image";

import { Button } from "@repo/ui/components/ui/button";

import { allProjects } from "../data/projects";

const tabs = ["All", "Professional", "Personal"];

export default function Projects() {
  const [activeTab, setActiveTab] = useState("All");
  const [expandedProjects, setExpandedProjects] = useState<Set<number>>(
    new Set(),
  );

  const filtered =
    activeTab === "All"
      ? allProjects
      : allProjects.filter((p) => p.badge === activeTab);

  const toggleExpand = (id: number) => {
    setExpandedProjects((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  return (
    <section className="w-full px-6 lg:px-12 py-16" id="projects">
      {/* Header Row */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 gap-4">
        <h2 className="text-3xl font-bold tracking-tight text-foreground">
          My{" "}
          <span className="underline decoration-[3px] underline-offset-4">
            Projects
          </span>
        </h2>
        <div className="flex items-center gap-3 text-sm text-muted">
          <Button
            className="w-8 h-8 border border-border rounded flex items-center justify-center hover:bg-border/50 transition-colors p-0"
            size="icon"
            type="button"
            variant="outline"
          >
            &lt;
          </Button>
          <span className="w-8 h-8 border border-foreground rounded flex items-center justify-center text-foreground font-semibold bg-background">
            1
          </span>
          <Button
            className="w-8 h-8 border border-border rounded flex items-center justify-center hover:bg-border/50 transition-colors p-0"
            size="icon"
            type="button"
            variant="outline"
          >
            &gt;
          </Button>
          <span className="ml-4 px-3 py-1.5 border border-border rounded text-foreground">
            10 / page
          </span>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex gap-2 mb-10">
        {tabs.map((tab) => (
          <Button
            className={`px-5 py-2 rounded-full text-sm font-semibold transition-colors ${
              activeTab === tab
                ? "bg-accent text-white"
                : "bg-background text-foreground border border-border hover:bg-muted"
            }`}
            key={tab}
            onClick={() => setActiveTab(tab)}
            type="button"
            variant="ghost"
          >
            {tab}
          </Button>
        ))}
      </div>

      {/* Project Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {filtered.map((project) => {
          const isExpanded = expandedProjects.has(project.id);
          const MAX_LENGTH = 150;
          const shouldTruncate = project.description.length > MAX_LENGTH;
          const displayDescription =
            shouldTruncate && !isExpanded
              ? project.description.substring(0, MAX_LENGTH).trim() + "..."
              : project.description;

          return (
            <div
              className="flex flex-col bg-background border border-border rounded-xl overflow-hidden hover:shadow-xl dark:hover:border-muted-foreground/30 hover:border-foreground/20 transition-all duration-300"
              key={project.id}
            >
              {/* Thumbnail Placeholder */}
              {project.badge !== "Professional" && (
                <div className="w-full h-56 bg-background relative overflow-hidden flex items-center justify-center border-b border-border group">
                  <span className="absolute top-4 right-4 px-3 py-1 bg-accent text-white text-xs font-bold rounded-full shadow-sm z-10">
                    {project.badge}
                  </span>
                  {project.image ? (
                    <Image
                      alt={`${project.name} preview`}
                      className="object-cover object-top w-full h-full transition-transform duration-500 group-hover:scale-105"
                      height={500}
                      loading="lazy"
                      src={project.image}
                      width={500}
                    />
                  ) : (
                    <>
                      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4IiBoZWlnaHQ9IjgiPgo8cmVjdCB3aWR0aD0iOCIgaGVpZ2h0PSI4IiBmaWxsPSIjZmJmOWY2Ij48L3JlY3Q+CjxwYXRoIGQ9Ik0wIDBMOCA4Wk04IDBMMCA4WiIgc3Ryb2tlPSIjZTJlOGYwIiBzdHJva2Utd2lkdGg9IjEiPjwvcGF0aD4KPC9zdmc+')] opacity-60" />
                      <div className="text-muted font-mono text-sm tracking-widest z-10">
                        IMAGE_PLACEHOLDER
                      </div>
                    </>
                  )}
                </div>
              )}

              {/* Content */}
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-bold text-foreground">
                    {project.name}
                  </h3>
                  {project.badge === "Professional" && (
                    <span className="px-3 py-1 bg-accent text-white text-xs font-bold rounded-full shadow-sm">
                      {project.badge}
                    </span>
                  )}
                </div>
                <div className="text-muted text-sm leading-relaxed mb-6 flex-grow whitespace-pre-line">
                  {displayDescription}
                  {shouldTruncate && (
                    <button
                      className="text-accent hover:underline ml-2 font-semibold"
                      onClick={() => toggleExpand(project.id)}
                    >
                      {isExpanded ? "Show less" : "Read more"}
                    </button>
                  )}
                </div>
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tech.map((tool) => (
                    <span
                      className="px-3 py-1 text-xs font-medium text-foreground bg-background rounded-full border border-border"
                      key={tool}
                    >
                      {tool}
                    </span>
                  ))}
                </div>

                {/* Footer Actions */}
                {(project.link || project.repo) && (
                  <div className="flex justify-between items-center mt-auto pt-4 border-t border-border/40">
                    <div className="flex gap-2">
                      {project.link && (
                        <a
                          className="flex items-center gap-1.5 text-xs font-bold text-background bg-foreground hover:opacity-80 px-4 py-2 rounded-lg transition-all"
                          href={project.link}
                          rel="noreferrer"
                          target="_blank"
                        >
                          <svg
                            fill="none"
                            height="14"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                            width="14"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <circle cx="12" cy="12" r="10" />
                            <line x1="2" x2="22" y1="12" y2="12" />
                            <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                          </svg>
                          WEB
                        </a>
                      )}
                    </div>
                    {project.link && (
                      <a
                        className="flex items-center gap-1.5 text-xs font-bold text-white bg-accent hover:opacity-90 px-4 py-2 rounded-lg transition-all"
                        href={project.link}
                        rel="noreferrer"
                        target="_blank"
                      >
                        View
                        <svg
                          fill="none"
                          height="14"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          viewBox="0 0 24 24"
                          width="14"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <line x1="7" x2="17" y1="17" y2="7" />
                          <polyline points="7 7 17 7 17 17" />
                        </svg>
                      </a>
                    )}
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

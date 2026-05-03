import Image from "next/image";
import Link from "next/link";

import { allProjects } from "../data/projects";

export default function RecentWork() {
  const projects = allProjects.slice(0, 2);

  return (
    <section className="w-full px-6 lg:px-12 py-16">
      <div className="flex justify-between items-end mb-10">
        <h2 className="text-2xl font-bold tracking-tight text-foreground">
          My{" "}
          <span className="underline decoration-[3px] underline-offset-4">
            Recent
          </span>{" "}
          Work
        </h2>
        <Link
          className="text-sm font-medium text-foreground hover:text-accent transition-colors flex items-center gap-1.5"
          href="/projects"
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
            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
            <polyline points="15 3 21 3 21 9" />
            <line x1="10" x2="21" y1="14" y2="3" />
          </svg>
          View all
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project) => (
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
              <p className="text-muted text-sm leading-relaxed mb-6 flex-grow whitespace-pre-line line-clamp-4">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-8">
                {project.tech.slice(0, 4).map((tool) => (
                  <span
                    className="px-3 py-1 text-xs font-medium text-foreground bg-background rounded-full border border-border"
                    key={tool}
                  >
                    {tool}
                  </span>
                ))}
                {project.tech.length > 4 && (
                  <span className="px-3 py-1 text-xs font-medium text-muted bg-background rounded-full border border-border">
                    +{project.tech.length - 4}
                  </span>
                )}
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
        ))}
      </div>
    </section>
  );
}

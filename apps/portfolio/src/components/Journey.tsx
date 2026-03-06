export default function Journey() {
  const experiences = [
    {
      id: 1,
      role: "Lead project's & Mentor Juniors",
      company: "",
      date: "2026",
      description:
        "Working at Hexalytics has profoundly changed my perspective and personal growth. Today, I'm more confident and results-driven, with an unquenchable thirst to explore, learn, upskill, and continuously grow.",
      current: true,
    },
    {
      id: 2,
      role: "Contributed to CloudQuarks project",
      company: "",
      date: "2025",
      description:
        "Worked on improving UI consistency, feature delivery, and API integration using Next.js, React, Tailwind CSS, and AWS technologies.",
      current: false,
    },
    {
      id: 3,
      role: "Frontend Developer at Hexalytics",
      company: "Hexalytics",
      date: "2025",
      description:
        "Led end-to-end frontend development for enterprise applications using Next.js and React, optimized production readiness with CI/CD and Docker deployments.",
      current: false,
    },
    {
      id: 4,
      role: "Frontend Developer",
      company: "Hexalytics",
      date: "2025",
      description:
        "Led frontend projects with Next.js and React, improved CI/CD pipelines, and contributed to large-scale enterprise solutions.",
      current: false,
      isStart: true,
    },
  ];

  return (
    <section
      className="w-full px-6 lg:px-12 py-24 flex flex-col md:flex-row gap-12 max-w-7xl mx-auto"
      id="journey"
    >
      {/* Left Sidebar Info */}
      <div className="md:w-1/4 flex flex-col">
        <h2 className="text-[#64748b] font-medium text-lg mb-1">I am here</h2>
        <span className="text-[#1e293b] font-bold text-xl">Today</span>

        <div className="mt-auto hidden md:block pt-32">
          <h2 className="text-[#64748b] font-medium text-lg mb-1">
            Started working at
          </h2>
          <span className="text-[#1e293b] font-bold text-xl">Hexalytics</span>
          <br />
          <span className="text-[#1e293b] font-bold text-xl">2025</span>
        </div>
      </div>

      {/* Vertical Timeline */}
      <div className="md:w-3/4 relative border-l-2 border-[#1e293b] pl-8 pb-10">
        {/* Journey in Progress Badge */}
        <div className="absolute -top-4 -left-3 flex items-center gap-4">
          <div className="w-6 h-6 rounded-full border-[3px] border-[#1e293b] bg-white z-10"></div>
          <span className="bg-[#ffedd5] text-[#1e293b] font-bold px-3 py-1 ml-4 relative top-1">
            Journey in Progress...
          </span>
        </div>

        <div className="mt-16 flex flex-col gap-12">
          {experiences.map((exp) => (
            <div className="relative" key={exp.id}>
              {/* Timeline Triangle marker */}
              {!exp.isStart && (
                <div
                  className="absolute -left-[39px] top-6 w-0 h-0 
                              border-l-[6px] border-l-transparent 
                              border-r-[6px] border-r-transparent 
                              border-b-[10px] border-b-[#1e293b]"
                ></div>
              )}

              {/* Bottom circle marker for start point */}
              {exp.isStart && (
                <div className="absolute -left-[43px] top-4 w-6 h-6 rounded-full border-[3px] border-[#1e293b] bg-white z-10"></div>
              )}

              <p className="text-[#1e293b] text-base leading-relaxed mb-4 font-medium max-w-2xl">
                {exp.description}
              </p>

              <div className="flex flex-col gap-1 items-start">
                <button className="text-[#1e293b] font-bold underline decoration-2 underline-offset-4 hover:text-[#f97316] transition-colors text-left cursor-text">
                  {exp.role}
                </button>
                <span className="text-[#1e293b] font-bold text-lg">
                  {exp.date}
                </span>
                {exp.isStart && (
                  <span className="bg-[#ffedd5] text-[#1e293b] font-bold px-2 py-0.5 mt-2 w-max">
                    {exp.company}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

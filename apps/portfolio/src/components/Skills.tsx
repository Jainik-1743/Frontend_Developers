export default function Skills() {
  const services = [
    {
      id: "01",
      title: "Frontend Engineering",
      description:
        "I build clean, scalable, and responsive web interfaces using React.js and Next.js with a strong focus on maintainability and performance.",
    },
    {
      id: "02",
      title: "Reusable Component Systems",
      description:
        "I create reusable UI components and shared patterns that reduce development time, improve consistency, and speed up new feature delivery.",
    },
    {
      id: "03",
      title: "Quality and UX Standards",
      description:
        "I apply accessibility best practices, responsive design, and cross-browser testing to ensure reliable user experiences across all major devices and browsers.",
    },
  ];

  const skillCategories = [
    {
      name: "Frontend",
      skills: [
        "HTML5",
        "CSS3",
        "JavaScript",
        "TypeScript",
        "React",
        "Next.js",
        "Tailwind CSS",
        "Shadcn UI",
      ],
    },
    {
      name: "Data/API",
      skills: ["GraphQL", "SWR"],
    },
    {
      name: "Testing/Tools",
      skills: ["Cypress", "Storybook"],
    },
    {
      name: "Practices",
      skills: [
        "Accessibility",
        "Responsive Design",
        "Component Reusability",
        "Cross-Browser Compatibility",
        "RBAC Integration",
        "Performance Optimization",
      ],
    },
  ];

  return (
    <section
      className="w-full px-6 lg:px-12 py-24 max-w-7xl mx-auto"
      id="skills"
    >
      {/* Top 3 Columns */}
      <h2 className="text-3xl font-bold text-[#1e293b] mb-16">
        <span className="underline decoration-2 underline-offset-4">
          What I bring
        </span>{" "}
        to projects...
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-24 cursor-default">
        {services.map((service, index) => (
          <div
            className={`flex flex-col group ${index !== services.length - 1 ? "md:border-r md:border-[#e2e8f0]/60 md:pr-12" : ""}`}
            key={service.id}
          >
            <span className="text-5xl font-light text-[#64748b] mb-6 group-hover:text-[#f97316] transition-colors">
              {service.id}
            </span>
            <h3 className="text-xl font-bold text-[#1e293b] mb-4 leading-snug">
              {service.title}
            </h3>
            <p className="text-[#1e293b] text-[15px] font-medium leading-relaxed">
              {service.description}
            </p>
          </div>
        ))}
      </div>

      {/* Skills Grid */}
      <h2 className="text-3xl font-bold text-[#1e293b] mb-12">
        <span className="underline decoration-2 underline-offset-4">
          Skills
        </span>{" "}
        from my experience...
      </h2>

      <div className="flex flex-col gap-8">
        {skillCategories.map((category) => (
          <div
            className="flex flex-col md:flex-row md:items-start gap-4 md:gap-12"
            key={category.name}
          >
            <h3 className="md:w-32 text-xl font-bold text-[#1e293b] pt-1">
              {category.name}
            </h3>

            <div className="flex-1 flex flex-wrap gap-2 md:border-l-2 md:border-[#e2e8f0] md:pl-8">
              {category.skills.map((skill) => (
                <span
                  className="px-4 py-1.5 bg-[#1e293b] text-white text-sm font-semibold rounded-sm hover:-translate-y-0.5 hover:shadow-md transition-all cursor-default"
                  key={skill}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

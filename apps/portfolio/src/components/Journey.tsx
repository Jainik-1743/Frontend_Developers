export default function Journey() {
  const journey = [
    {
      id: 1,
      year: "2026",
      role: "Senior Software Engineer",
      orgLabel: "Infynno Solutions LLP",
      date: "Starting March 2026",
      description:
        "Starting my new role focusing on high-level software engineering, scalable architecture, and delivering premium digital solutions.",
      highlights: [
        "Working remotely with strong ownership on end-to-end delivery.",
        "Driving architecture-level decisions for scalable frontend systems.",
      ],
    },
    {
      id: 2,
      year: "2024 - 2026",
      role: "Senior React Developer",
      orgLabel: "Galamela India Private Limited",
      date: "January 2024 - February 2026",
      description:
        "Produced high-quality, clean code resulting in a 20% reduction in bugs. Implemented a secure Role-Based Access Control (RBAC) system for Admin/User permissions and created reusable components that reduced development time by 15%.",
      highlights: [
        "20% reduction in bugs through cleaner component architecture and review discipline.",
        "Implemented RBAC-based access control for protected admin/user pages.",
        "Reusable modules reduced development time by 15%.",
      ],
    },
    {
      id: 3,
      year: "2022 - 2023",
      role: "React Developer",
      orgLabel: "Intellitech Work LLP",
      date: "February 2022 - December 2023",
      description:
        "Developed responsive web layouts and built reusable React.js components, decreasing code redundancy by 15%. Applied accessibility best practices and resolved cross-browser compatibility issues to ensure seamless user experiences.",
      highlights: [
        "Built responsive layouts for desktop, tablet, and mobile devices.",
        "Applied accessibility best practices and improved usability.",
        "Fixed cross-browser issues for consistent behavior across major browsers.",
      ],
    },
    {
      id: 4,
      year: "2017 - 2021",
      role: "Bachelor of Engineering in Information Technology",
      orgLabel:
        "Silver Oak College of Engineering and Technology (Gujarat Technological University)",
      date: "2017 - 2021",
      description:
        "Graduated First Class with Distinction (CGPA: 8.22). Built a strong foundation in computer science, software engineering principles, and modern web technologies.",
      highlights: [
        "CGPA: 8.22 (First Class with Distinction).",
        "Built core fundamentals in software engineering and modern web development.",
      ],
    },
  ];

  return (
    <section
      className="w-full px-6 lg:px-12 py-20 lg:py-24 max-w-7xl mx-auto"
      id="journey"
    >
      <div className="mb-14">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[#1e293b] mb-4">
          Journey in Progress...
        </h2>
        <p className="text-[#64748b] text-base md:text-lg leading-relaxed max-w-4xl">
          My professional journey has been driven by a passion for building
          clean, performant, and user-friendly digital experiences. With over
          3.5 years of expertise in the React ecosystem, I am constantly
          learning, upskilling, and tackling new challenges in web development.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-[250px_minmax(0,1fr)] gap-10 lg:gap-16">
        <aside className="hidden lg:flex flex-col">
          <div className="mb-16">
            <p className="text-[#64748b] text-sm font-medium mb-1">I am here</p>
            <p className="text-[#1e293b] text-3xl font-bold leading-tight">
              Today
            </p>
          </div>

          <div className="mt-auto">
            <p className="text-[#64748b] text-sm font-medium mb-2">
              Started working at
            </p>
            <p className="text-[#1e293b] text-xl font-bold leading-tight">
              Intellitech Work LLP
            </p>
            <p className="text-[#1e293b] text-xl font-bold mt-1">2022</p>
          </div>
        </aside>

        <div className="relative pl-10 lg:pl-12">
          <div className="absolute left-0 top-2 bottom-2 w-[2px] bg-[#1e293b]" />
          {journey.map((item) => (
            <article className="relative pb-14 last:pb-2 pl-8" key={item.id}>
              <div className="absolute left-0 top-2 h-5 w-5 -translate-x-[10px] rounded-full border-[3px] border-[#1e293b] bg-white" />

              <p className="text-[#1e293b] font-extrabold text-2xl mb-3">
                {item.year}
              </p>

              <h3 className="text-[#1e293b] font-bold text-2xl leading-tight mb-3">
                {item.role}
              </h3>

              <p className="text-[#64748b] text-sm font-semibold mb-3">
                {item.date}
              </p>

              <span className="inline-flex bg-[#ffedd5] text-[#1e293b] font-bold text-base px-2 py-0.5 mb-5">
                {item.orgLabel}
              </span>

              <p className="text-[#1e293b] text-lg leading-relaxed max-w-4xl mb-5">
                {item.description}
              </p>

              <div className="space-y-2 max-w-4xl">
                {item.highlights.map((point) => (
                  <p
                    className="text-[#64748b] text-base leading-relaxed"
                    key={point}
                  >
                    {point}
                  </p>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

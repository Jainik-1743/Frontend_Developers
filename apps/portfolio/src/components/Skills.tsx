export default function Skills() {
  const services = [
    {
      id: "01",
      title: "Bringing Your Online Vision to Life",
      description:
        "I transform your ideas into vibrant, interactive websites that captivate your audience and drive results. I create stunning and user-friendly experiences. My backend work with Node.js and Express ensures your site is smooth, reliable, and secure.",
    },
    {
      id: "02",
      title: "Crafting Engaging Mobile Journeys",
      description:
        "I bring your mobile app ideas to life with intuitive and engaging experiences for both iOS and Android. With React Native and Flutter, I design apps that are visually appealing and perform seamlessly. My backend solutions keep your app responsive and reliable.",
    },
    {
      id: "03",
      title: "Revolutionizing Desktop Applications",
      description:
        "I design cross-platform desktop applications that blend functionality with elegance, offering a smooth and productive experience. Using Electron, I develop apps that fit perfectly into the desktop environment. My backend solutions ensure efficient performance and effortless data management.",
    },
  ];

  const skillCategories = [
    {
      name: "Web",
      skills: [
        "JavaScript",
        "TypeScript",
        "Angular",
        "Next",
        "React",
        "API Integration",
        "Axios",
        "GraphQL",
        "Tailwind CSS",
      ],
    },
    {
      name: "Mobile",
      skills: ["React Native", "Flutter", "iOS Development", "Android"],
    },
    {
      name: "Backend/Db",
      skills: [
        "Node.js",
        "Express",
        "NestJS",
        "PostgreSQL",
        "MongoDB",
        "TypeORM",
        "AWS",
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
          I can help
        </span>{" "}
        you with...
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
        i offer...
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

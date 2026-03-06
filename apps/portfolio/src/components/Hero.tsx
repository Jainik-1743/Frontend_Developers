export default function Hero() {
  return (
    <section
      className="w-full flex flex-col justify-center min-h-[50vh] mt-16 px-6 lg:px-12"
      id="home"
    >
      <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-[#1e293b] mb-4">
        Software{" "}
        <span className="relative z-10 mx-1">
          <span className="relative z-10 pb-1 border-b-[3px] border-[#1e293b]">
            Developer
          </span>
        </span>
      </h1>

      <p className="text-2xl md:text-4xl font-medium text-[#1e293b] mt-4 mb-20 max-w-3xl leading-snug">
        focusing on building and designing{" "}
        <span className="bg-[#ffedd5] px-2 py-0.5 text-[#1e293b] font-semibold whitespace-nowrap">
          digital experiences.
        </span>
      </p>
    </section>
  );
}

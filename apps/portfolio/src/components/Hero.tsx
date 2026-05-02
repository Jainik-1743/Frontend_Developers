export default function Hero() {
  return (
    <section
      className="w-full flex flex-col justify-center min-h-[50vh] mt-16 px-6 lg:px-12"
      id="home"
    >
      <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-foreground mb-4">
        React{" "}
        <span className="relative z-10 mx-1">
          <span className="relative z-10 pb-1 border-b-[3px] border-foreground">
            Developer
          </span>
        </span>
      </h1>

      <p className="text-xl md:text-3xl font-medium text-foreground mt-4 mb-20 max-w-4xl leading-snug">
        3.5+ years of experience building responsive web apps with{" "}
        <span className="bg-accent-light px-2 py-0.5 text-foreground font-semibold">
          React.js, Next.js, and Tailwind CSS.
        </span>{" "}
        Focused on clean code, component performance, and user-friendly
        interfaces.
      </p>
    </section>
  );
}

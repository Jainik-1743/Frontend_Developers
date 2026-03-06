import Footer from "@/components/Footer";
import ProjectsComponent from "@/components/Projects";
import Topnav from "@/components/Topnav";

export default function ProjectsPage() {
  return (
    <>
      <Topnav />
      <main className="flex-1 w-full flex flex-col items-center">
        <ProjectsComponent />
      </main>
      <Footer />
    </>
  );
}

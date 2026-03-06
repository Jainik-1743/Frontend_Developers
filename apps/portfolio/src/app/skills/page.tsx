import Footer from "@/components/Footer";
import SkillsComponent from "@/components/Skills";
import Topnav from "@/components/Topnav";

export default function SkillsPage() {
  return (
    <>
      <Topnav />
      <main className="flex-1 w-full flex flex-col items-center">
        <SkillsComponent />
      </main>
      <Footer />
    </>
  );
}

import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import RecentWork from "@/components/RecentWork";
import Topnav from "@/components/Topnav";

export default function Home() {
  return (
    <>
      <Topnav />
      <main className="flex-1 w-full flex flex-col items-center">
        <Hero />
        <RecentWork />
      </main>
      <Footer />
    </>
  );
}

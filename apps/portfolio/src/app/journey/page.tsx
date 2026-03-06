import Footer from "@/components/Footer";
import JourneyComponent from "@/components/Journey";
import Topnav from "@/components/Topnav";

export default function JourneyPage() {
  return (
    <>
      <Topnav />
      <main className="flex-1 w-full flex flex-col items-center">
        <JourneyComponent />
      </main>
      <Footer />
    </>
  );
}

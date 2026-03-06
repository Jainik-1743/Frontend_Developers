import ContactFormComponent from "@/components/ContactForm";
import Footer from "@/components/Footer";
import Topnav from "@/components/Topnav";

export default function ContactPage() {
  return (
    <>
      <Topnav />
      <main className="flex-1 w-full flex flex-col items-center">
        <ContactFormComponent />
      </main>
      <Footer />
    </>
  );
}

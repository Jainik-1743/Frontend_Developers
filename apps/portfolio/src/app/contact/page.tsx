import ContactFormComponent from "@/components/ContactForm";
import Footer from "@/components/Footer";
import RecaptchaProvider from "@/components/RecaptchaProvider";
import Topnav from "@/components/Topnav";

export default function ContactPage() {
  return (
    <>
      <Topnav />
      <main className="flex-1 w-full flex flex-col items-center">
        <RecaptchaProvider>
          <ContactFormComponent />
        </RecaptchaProvider>
      </main>
      <Footer />
    </>
  );
}

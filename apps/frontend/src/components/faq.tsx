import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@repo/ui/components/ui/accordion";

const faqs = [
  {
    question: "What is Vuzec?",
    answer:
      "Vuzec is a decentralized label that allows artists to raise capital and share their royalties with their fans and service providers.",
  },
  {
    question: "How does it work?",
    answer:
      "Artists can their royalties and sell them to fans as digital assets. Fans become part-owners and earn a share of the revenue when the music is streamed.",
  },
  {
    question: "Who can use Vuzec?",
    answer:
      "Both independent and established artists who want to empower their community and raise capital creatively.",
  },
];

export default function FaqSection() {
  return (
    <div className="w-full max-w-5xl mx-auto py-12 px-4">
      <h2 className="text-3xl font-bold text-center text-white mb-8">
        Frequently Asked Questions
      </h2>
      <Accordion
        className="w-full flex flex-col gap-2"
        collapsible
        type="single"
      >
        {faqs.map((faq) => (
          <AccordionItem
            className="group relative border-t-[2px] border-b-0 border-white py-3 px-2"
            key={faq.question}
            value={faq.question}
          >
            {/* Custom Icon Container */}
            <div className="absolute right-4 sm:right-6 top-6 pointer-events-none transition-all duration-700 ease-in-out rotate-180 group-data-[state=open]:rotate-0 group-data-[state=open]:translate-y-[4rem] sm:group-data-[state=open]:translate-y-[5rem]">
              <svg
                fill="none"
                height="17"
                viewBox="0 0 24 17"
                width="24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.9393 0.939339C11.5251 0.353552 12.4749 0.353552 13.0607 0.939339L22.6066 10.4853C23.1924 11.0711 23.1924 12.0208 22.6066 12.6066C22.0208 13.1924 21.0711 13.1924 20.4853 12.6066L12 4.12132L3.51472 12.6066C2.92893 13.1924 1.97918 13.1924 1.3934 12.6066C0.807611 12.0208 0.807611 11.0711 1.3934 10.4853L10.9393 0.939339ZM10.5 17L10.5 2L13.5 2L13.5 17L10.5 17Z"
                  fill="#B71544"
                ></path>
              </svg>
            </div>

            {/* Default chevron hidden via [&>svg]:hidden */}
            <AccordionTrigger className="text-[#B71544] text-[22px] sm:text-[25px] leading-8 font-bold hover:no-underline [&>svg]:hidden">
              <span className="text-left md:text-center w-full pr-12">
                {faq.question}
              </span>
            </AccordionTrigger>

            <AccordionContent className="pt-4 text-left sm:text-center text-white">
              <p className="sm:text-[20px] text-[18px] sm:leading-7 leading-6 pr-10 md:pr-0">
                {faq.answer}
              </p>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}

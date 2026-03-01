import { Metadata } from "next";
import ContactPageContent from "./ContactPageContent";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with LensCraft Studio. Book your photography session or ask any questions.",
};

export default function ContactPage() {
  return <ContactPageContent />;
}

import { Metadata } from "next";
import ServicesPageContent from "./ServicesPageContent";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Professional photography services including wedding, event, commercial, and brand photography.",
};

export default function ServicesPage() {
  return <ServicesPageContent />;
}

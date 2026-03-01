import { Metadata } from "next";
import AboutPageContent from "./AboutPageContent";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about LensCraft Studio - our story, mission, and the talented team behind our award-winning photography.",
};

export default function AboutPage() {
  return <AboutPageContent />;
}

import { Metadata } from "next";
import PortfolioFilterContent from "./PortfolioFilterContent";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "Explore our stunning wedding, fashion, travel, and product photography portfolio.",
};

export default function PortfolioPage() {
  return <PortfolioFilterContent />;
}

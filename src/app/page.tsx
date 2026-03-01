import { Metadata } from "next";
import Hero from "@/components/Hero";
import SectionHeading from "@/components/SectionHeading";
import PortfolioGrid from "@/components/PortfolioGrid";
import ServiceCard from "@/components/ServiceCard";
import Testimonials from "@/components/Testimonials";
import InstagramGallery from "@/components/InstagramGallery";
import Button from "@/components/Button";
import { featuredPortfolio } from "@/lib/data/portfolio";
import { services } from "@/lib/data/services";
import { testimonials } from "@/lib/data/testimonials";

export const metadata: Metadata = {
  title: "LensCraft Studio | Premium Wedding & Commercial Photography",
  description:
    "Award-winning photography studio specializing in weddings, events, commercial, and brand photography. Capturing stories that last forever.",
};

export default function HomePage() {
  return (
    <>
      <Hero />

      <section className="py-20 md:py-30 bg-background-secondary">
        <div className="container-custom">
          <SectionHeading
            subtitle="Featured Work"
            title="Our Portfolio"
            description="Explore our latest captures from weddings, fashion, travel, and commercial projects."
          />
          <PortfolioGrid items={featuredPortfolio} columns={3} />
          <div className="text-center mt-12">
            <Button href="/portfolio" variant="secondary" size="lg">
              View All Work
            </Button>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-30">
        <div className="container-custom">
          <SectionHeading
            subtitle="What We Offer"
            title="Our Services"
            description="Professional photography services tailored to capture your unique story."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {services.map((service, index) => (
              <ServiceCard key={service.id} service={service} index={index} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-30 bg-background-secondary">
        <div className="container-custom">
          <SectionHeading
            subtitle="Client Love"
            title="Testimonials"
            description="Hear from our amazing clients about their experience with LensCraft."
          />
          <Testimonials testimonials={testimonials} />
        </div>
      </section>

      <section className="py-20 md:py-30">
        <div className="container-custom">
          <SectionHeading
            subtitle="Follow Us"
            title="Instagram"
            description="Behind the scenes and daily inspiration on our Instagram."
          />
          <InstagramGallery />
        </div>
      </section>

      <section className="py-20 md:py-30 bg-gradient-to-b from-background to-background-secondary">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-semibold mb-6">
              Ready to Create Something Beautiful?
            </h2>
            <p className="text-foreground-secondary text-lg mb-8">
              Let&apos;s discuss your vision and create timeless images together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/contact" variant="primary" size="lg">
                Get in Touch
              </Button>
              <Button href="/portfolio" variant="outline" size="lg">
                View Portfolio
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

import { Metadata } from "next";
import Hero from "@/components/Hero";
import SectionHeading from "@/components/SectionHeading";
import PortfolioGrid from "@/components/PortfolioGrid";
import ServiceCard from "@/components/ServiceCard";
import Testimonials from "@/components/Testimonials";
import InstagramGallery from "@/components/InstagramGallery";
import Button from "@/components/Button";
import ScrollReveal from "@/components/ScrollReveal";
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

      {/* Featured Portfolio */}
      <section className="section-py bg-background">
        <div className="container-custom">
          <SectionHeading
            subtitle="Featured Work"
            title="Our Portfolio"
            description="A glimpse into our award-winning photography work."
          />
          
          <ScrollReveal>
            <PortfolioGrid items={featuredPortfolio} columns={3} />
          </ScrollReveal>
          
          <div className="text-center mt-16">
            <Button href="/portfolio" variant="secondary" size="lg">
              View All Work
            </Button>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="section-py bg-background-secondary/50">
        <div className="container-custom">
          <SectionHeading
            subtitle="What We Offer"
            title="Our Services"
            description="Professional photography services tailored to your unique vision."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={service.id} service={service} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-py bg-background">
        <div className="container-custom">
          <SectionHeading
            subtitle="Client Love"
            title="Testimonials"
            description="Hear from our cherished clients about their experience."
          />
          
          <ScrollReveal>
            <Testimonials testimonials={testimonials} />
          </ScrollReveal>
        </div>
      </section>

      {/* Instagram Gallery */}
      <section className="section-py bg-background-secondary/50">
        <div className="container-custom">
          <SectionHeading
            subtitle="Follow Us"
            title="Instagram"
            description="Behind the scenes and daily inspiration."
          />
          
          <ScrollReveal>
            <InstagramGallery />
          </ScrollReveal>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-py relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background-secondary to-background" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/5 rounded-full blur-[150px]" />
        
        <div className="container-custom relative">
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto">
              <span className="accent-text text-accent text-lg uppercase tracking-[0.3em] mb-6 inline-block">
                Let&apos;s Create Together
              </span>
              <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light mb-8 leading-tight">
                Ready to Create
                <br />
                <span className="text-gradient">Something Beautiful?</span>
              </h2>
              <p className="text-foreground-secondary text-lg mb-10 max-w-xl mx-auto">
                Let&apos;s discuss your vision and create timeless images together that you&apos;ll cherish forever.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Button href="/contact" variant="primary" size="lg">
                  Get in Touch
                </Button>
                <Button href="/portfolio" variant="outline" size="lg">
                  View Portfolio
                </Button>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}

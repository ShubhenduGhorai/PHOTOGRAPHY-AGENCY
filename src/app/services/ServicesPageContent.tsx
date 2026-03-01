"use client";

import { useState } from "react";
import SectionHeading from "@/components/SectionHeading";
import PricingCard from "@/components/PricingCard";
import { services, serviceFeatures } from "@/lib/data/services";

export default function ServicesPageContent() {
  const [activeService, setActiveService] = useState(services[0].id);

  const currentService = services.find((s) => s.id === activeService) || services[0];

  return (
    <>
      <section className="pt-32 pb-12 md:pt-40 md:pb-16">
        <div className="container-custom">
          <div className="animate-fade-in-up">
            <SectionHeading
              subtitle="What We Do"
              title="Our Services"
              description="Professional photography services tailored to your needs."
            />
          </div>
        </div>
      </section>

      <section className="pb-20 md:pb-30">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            <div>
              <div className="flex flex-wrap gap-3 mb-8">
                {services.map((service) => (
                  <button
                    key={service.id}
                    onClick={() => setActiveService(service.id)}
                    className={`px-6 py-3 text-sm uppercase tracking-wider transition-all duration-300 ${
                      activeService === service.id
                        ? "bg-accent text-background"
                        : "bg-background-secondary text-foreground-secondary hover:text-foreground"
                    }`}
                  >
                    <span className="mr-2">{service.icon}</span>
                    {service.title}
                  </button>
                ))}
              </div>

              <div key={activeService} className="animate-fade-in-up">
                <h3 className="font-heading text-3xl md:text-4xl font-semibold mb-4">
                  {currentService.title}
                </h3>
                <p className="text-foreground-secondary text-lg mb-8">
                  {currentService.description}
                </p>

                <div className="grid grid-cols-2 gap-4">
                  {serviceFeatures
                    .find((f) => f.title === currentService.title.split(" ")[0])
                    ?.items.map((feature, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-3 text-foreground-secondary text-sm"
                      >
                        <svg
                          className="w-5 h-5 text-accent flex-shrink-0"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                        {feature}
                      </div>
                    ))}
                </div>
              </div>
            </div>

            <div>
              <div className="grid gap-6 animate-fade-in-up delay-100">
                {currentService.pricing.map((tier, index) => (
                  <PricingCard key={tier.name} tier={tier} index={index} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-30 bg-background-secondary">
        <div className="container-custom">
          <SectionHeading
            subtitle="FAQ"
            title="Common Questions"
            description="Find answers to frequently asked questions about our services."
          />

          <div className="max-w-3xl mx-auto space-y-4">
            {[
              {
                q: "How far in advance should I book?",
                a: "We recommend booking 2-3 months in advance for wedding photography and 1-2 weeks for other services. However, we sometimes have availability for last-minute bookings.",
              },
              {
                q: "Do you travel for destination weddings?",
                a: "Absolutely! We love traveling for destination weddings. Travel fees vary depending on location, and we're happy to discuss options for your specific needs.",
              },
              {
                q: "How long does it take to receive my photos?",
                a: "Wedding galleries are typically delivered within 4-6 weeks. Commercial and portrait sessions are delivered within 1-2 weeks. Rush delivery is available for an additional fee.",
              },
              {
                q: "Do you offer prints and albums?",
                a: "Yes! We offer a variety of print products including albums, canvases, and framed prints. Your online gallery includes a print store with premium quality options.",
              },
            ].map((faq, index) => (
              <details
                key={index}
                className="glass rounded-lg overflow-hidden"
              >
                <summary className="px-6 py-4 cursor-pointer font-medium hover:text-accent transition-colors duration-300 flex justify-between items-center">
                  {faq.q}
                  <svg
                    className="w-5 h-5 text-foreground-muted"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </summary>
                <div className="px-6 pb-4 text-foreground-secondary">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-30">
        <div className="container-custom text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-semibold mb-6">
            Ready to Book?
          </h2>
          <p className="text-foreground-secondary text-lg mb-8 max-w-2xl mx-auto">
            Contact us today to discuss your photography needs and get a custom quote.
          </p>
          <a
            href="/contact"
            className="inline-flex px-8 py-4 bg-accent hover:bg-accent-hover text-background font-medium uppercase tracking-wider transition-all duration-300"
          >
            Get in Touch
          </a>
        </div>
      </section>
    </>
  );
}

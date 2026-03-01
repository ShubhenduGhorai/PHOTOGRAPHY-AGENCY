"use client";

import Image from "next/image";
import SectionHeading from "@/components/SectionHeading";
import { founder, teamMembers, timeline } from "@/lib/data/team";

export default function AboutPageContent() {
  return (
    <>
      <section className="pt-32 pb-20 md:pt-40 md:pb-30">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="animate-fade-in-left">
              <span className="accent-text text-accent text-lg uppercase tracking-widest mb-4 block">
                Our Story
              </span>
              <h1 className="font-heading text-4xl md:text-5xl font-semibold mb-6">
                Capturing Moments,
                <br />
                Creating Memories
              </h1>
              <div className="space-y-4 text-foreground-secondary leading-relaxed">
                {founder.story.split("\n\n").map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
              <blockquote className="border-l-2 border-accent pl-6 mt-8 italic text-lg text-foreground">
                {founder.quote}
              </blockquote>
            </div>

            <div className="animate-fade-in-right">
              <div className="relative aspect-[4/5] rounded-lg overflow-hidden">
                <Image
                  src={founder.imageUrl}
                  alt={founder.name}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-accent p-6 rounded-lg hidden md:block">
                <div className="font-heading text-4xl font-semibold text-background">
                  15+
                </div>
                <div className="text-background/80 text-sm">Years Experience</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-30 bg-background-secondary">
        <div className="container-custom">
          <SectionHeading
            subtitle="Our Journey"
            title="Timeline"
            description="The key milestones that have shaped LensCraft Studio into what it is today."
          />

          <div className="relative">
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-px" />

            <div className="space-y-12">
              {timeline.map((item, index) => (
                <div
                  key={item.year}
                  className={`relative flex items-start gap-8 animate-fade-in-up ${
                    index % 2 === 0
                      ? "md:flex-row"
                      : "md:flex-row-reverse"
                  }`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex-1 md:text-right pl-12 md:pl-0 md:flex-none md:w-5/12">
                    <div
                      className={`md:pr-12 ${
                        index % 2 === 0 ? "" : "md:text-left"
                      }`}
                    >
                      <span className="text-accent font-heading text-4xl font-semibold">
                        {item.year}
                      </span>
                      <h3 className="font-heading text-xl font-semibold mt-2 mb-2">
                        {item.title}
                      </h3>
                      <p className="text-foreground-secondary text-sm">
                        {item.description}
                      </p>
                    </div>
                  </div>

                  <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-3 h-3 bg-accent rounded-full" />

                  <div className="flex-1 hidden md:block md:w-5/12" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="team" className="py-20 md:py-30">
        <div className="container-custom">
          <SectionHeading
            subtitle="Meet The Team"
            title="Our Talented Photographers"
            description="The creative minds behind LensCraft Studio."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.map((member, index) => (
              <div
                key={member.id}
                className="group animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative aspect-[3/4] rounded-lg overflow-hidden mb-4">
                  <Image
                    src={member.imageUrl}
                    alt={member.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <h3 className="font-heading text-lg font-semibold group-hover:text-accent transition-colors duration-300">
                  {member.name}
                </h3>
                <p className="text-foreground-secondary text-sm">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-30 bg-gradient-to-b from-background to-background-secondary">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="font-heading text-3xl md:text-4xl font-semibold mb-6">
              Want to Join Our Team?
            </h2>
            <p className="text-foreground-secondary text-lg mb-8">
              We&apos;re always looking for talented photographers to join our studio.
            </p>
            <a
              href="mailto:careers@lenscraftstudio.com"
              className="inline-flex px-8 py-4 bg-accent hover:bg-accent-hover text-background font-medium uppercase tracking-wider transition-all duration-300"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

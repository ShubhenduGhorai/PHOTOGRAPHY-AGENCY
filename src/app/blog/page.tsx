import { Metadata } from "next";
import BlogCard from "@/components/BlogCard";
import SectionHeading from "@/components/SectionHeading";
import { blogPosts } from "@/lib/data/blog";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Photography tips, wedding guides, and industry insights from LensCraft Studio.",
};

export default function BlogPage() {
  return (
    <>
      <section className="pt-32 pb-12 md:pt-40 md:pb-16">
        <div className="container-custom">
          <SectionHeading
            subtitle="Our Blog"
            title="Latest Articles"
            description="Tips, guides, and insights from the world of photography."
          />
        </div>
      </section>

      <section className="pb-20 md:pb-30">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <BlogCard key={post.id} post={post} index={index} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-30 bg-background-secondary">
        <div className="container-custom text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-semibold mb-6">
            Subscribe to Our Newsletter
          </h2>
          <p className="text-foreground-secondary text-lg mb-8 max-w-2xl mx-auto">
            Get the latest photography tips and studio updates delivered to your inbox.
          </p>
          <form className="max-w-md mx-auto flex gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:border-accent transition-colors"
            />
            <button
              type="submit"
              className="px-6 py-3 bg-accent hover:bg-accent-hover text-background font-medium uppercase tracking-wider transition-colors duration-300"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </>
  );
}

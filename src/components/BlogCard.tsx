"use client";

import Image from "next/image";
import Link from "next/link";
import { BlogPost } from "@/lib/types";

interface BlogCardProps {
  post: BlogPost;
  index: number;
}

export default function BlogCard({ post, index }: BlogCardProps) {
  return (
    <article
      className="group animate-fade-in-up"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <Link href={`/blog/${post.slug}`} className="block">
        <div className="relative aspect-[16/10] overflow-hidden rounded-lg mb-4">
          <Image
            src={post.imageUrl}
            alt={post.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute top-4 left-4">
            <span className="bg-accent text-background px-3 py-1 text-xs font-medium uppercase tracking-wider">
              {post.category}
            </span>
          </div>
        </div>
        <div className="space-y-2">
          <div className="flex items-center gap-4 text-sm text-foreground-muted">
            <span>{post.date}</span>
            <span>•</span>
            <span>{post.readTime}</span>
          </div>
          <h3 className="font-heading text-xl md:text-2xl font-semibold group-hover:text-accent transition-colors duration-300 line-clamp-2">
            {post.title}
          </h3>
          <p className="text-foreground-secondary text-sm line-clamp-2">
            {post.excerpt}
          </p>
          <div className="flex items-center gap-2 text-accent text-sm font-medium pt-2">
            Read More
            <svg
              className="w-4 h-4 transition-transform group-hover:translate-x-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </div>
        </div>
      </Link>
    </article>
  );
}

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import resourcesData from "../../../data.json";
import ShareButtons from "@/components/ShareButtons";
import { generateArticleSchema } from "@/lib/schema";

export async function generateStaticParams() {
  return resourcesData.resourcesPosts.map((post) => ({
    slug: post.id,
  }));
}

export function generateMetadata({ params }) {
  const { slug } = params;
  const post = resourcesData.resourcesPosts.find((post) => post.id === slug);

  if (!post) {
    return {
      title: "Resource Not Found | Stockey",
      description: "The requested resource could not be found.",
    };
  }

  return {
    title: `${post.title} | Stockey Resources`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.date,
      authors: ["Stockey Expert"],
      tags: [post.category, "Trading", "Investing", "Finance"],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
    },
  };
}

export default function ResourcesPost({ params }) {
  const { slug } = params;
  const post = resourcesData.resourcesPosts.find((post) => post.id === slug);

  const baseUrl = "https://stockey.com";
  const articleUrl = `${baseUrl}/resources/${slug}`;

  if (!post) {
    return (
      <div
        className="min-h-screen flex items-center justify-center px-4"
        style={{
          background: "linear-gradient(180deg, #FFFFFF 0%, #F5F7FA 100%)",
        }}
      >
        <div
          className="text-center p-8 rounded-xl shadow-xl max-w-md"
          style={{ background: "#FFFFFF" }}
        >
          <div
            className="inline-flex items-center justify-center w-16 h-16 mb-6 rounded-full"
            style={{ background: "rgba(255, 100, 100, 0.1)" }}
          >
            <svg
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 9V14M12 19C16.4183 19 20 15.4183 20 11C20 6.58172 16.4183 3 12 3C7.58172 3 4 6.58172 4 11C4 15.4183 7.58172 19 12 19ZM12 17H12.01V17.01H12V17Z"
                stroke="#FF6464"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <h1 className="text-2xl font-bold mb-4" style={{ color: "#1E2B4F" }}>
            Resource Not Found
          </h1>
          <p className="mb-8" style={{ color: "#6A7C99" }}>
            We couldn&apos;t find the resource you&apos;re looking for. It may
            have been moved or deleted.
          </p>
          <Link
            href="/resources"
            className="inline-flex items-center justify-center rounded-full px-6 py-3 font-medium transition-all duration-300 hover:shadow-md"
            style={{
              background: "#4B63FF",
              color: "white",
            }}
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Resources
          </Link>
        </div>
      </div>
    );
  }
  const articleSchema = generateArticleSchema(post, articleUrl);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(articleSchema),
        }}
      />

      <div
        style={{
          background: "linear-gradient(180deg, #FFFFFF 0%, #F5F7FA 100%)",
        }}
      >
        <div className="container mx-auto px-4 py-12">
          <div className="mb-8">
            <Link
              href="/resources"
              className="inline-flex items-center px-4 py-2 rounded-full transition-all duration-300 hover:shadow-md"
              style={{
                background: "rgba(75, 99, 255, 0.1)",
                color: "#4B63FF",
              }}
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Resources
            </Link>
          </div>

          <article className="max-w-3xl mx-auto">
            <div
              className="mb-12 pb-8 border-b"
              style={{ borderColor: "rgba(168, 191, 255, 0.2)" }}
            >
              <div
                className="flex items-center text-sm mb-4"
                style={{ color: "#6A7C99" }}
              >
                <span
                  className="rounded-full px-3 py-1 font-medium"
                  style={{
                    background: "rgba(75, 99, 255, 0.1)",
                    color: "#4B63FF",
                  }}
                >
                  {post.category}
                </span>
                <span className="mx-2">•</span>
                <span>{post.date}</span>
                <span className="mx-2">•</span>
                <span>{post.readTime}</span>
              </div>

              <h1
                className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6"
                style={{ color: "#1E2B4F" }}
              >
                {post.title}
              </h1>

              <div className="flex items-center mt-8">
                <div
                  className="w-12 h-12 rounded-full mr-4"
                  style={{
                    background: "linear-gradient(45deg, #4B63FF, #A8BFFF)",
                  }}
                ></div>
                <div>
                  <p className="font-medium" style={{ color: "#1E2B4F" }}>
                    Stockey Expert
                  </p>
                  <p style={{ color: "#6A7C99" }}>Trading Analyst</p>
                </div>
              </div>
            </div>

            <div
              className="prose prose-lg max-w-none"
              style={{
                "--tw-prose-body": "#6A7C99",
                "--tw-prose-headings": "#1E2B4F",
                "--tw-prose-links": "#4B63FF",
                "--tw-prose-bold": "#1E2B4F",
              }}
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

            <div
              className="mt-12 p-8 rounded-2xl"
              style={{ background: "rgba(75, 99, 255, 0.05)" }}
            >
              <div className="flex flex-col md:flex-row items-center justify-between">
                <h3
                  className="text-xl font-semibold mb-4 md:mb-0"
                  style={{ color: "#1E2B4F" }}
                >
                  Share this article
                </h3>
                <ShareButtons title={post.title} />
              </div>
            </div>

            <div
              className="mt-16 p-8 rounded-2xl text-center"
              style={{
                background: "linear-gradient(135deg, #27336D 0%, #4B63FF 100%)",
              }}
            >
              <h3 className="text-2xl font-bold mb-4 text-white">
                Ready to improve your trading?
              </h3>
              <p className="text-lg mb-8 text-white opacity-90">
                Join thousands of traders who use Stockey to analyze their
                portfolios and make better decisions.
              </p>
              <Button
                className="px-8 py-3 text-base rounded-full hover:scale-105 transition-all duration-300"
                style={{
                  background: "#19C68B",
                  color: "#FFFFFF",
                }}
              >
                Get Started for Free
              </Button>
            </div>

            <div className="mt-20">
              <h3
                className="text-2xl font-bold mb-8"
                style={{ color: "#1E2B4F" }}
              >
                Related Articles
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {resourcesData.resourcesPosts
                  .filter(
                    (relatedPost) =>
                      relatedPost.id !== slug &&
                      relatedPost.category === post.category
                  )
                  .slice(0, 2)
                  .map((relatedPost) => (
                    <Link
                      key={relatedPost.id}
                      href={`/resources/${relatedPost.id}`}
                    >
                      <div
                        className="p-6 rounded-xl hover:translate-y-[-5px] transition-all duration-300 shadow-md hover:shadow-lg"
                        style={{ background: "white" }}
                      >
                        <span
                          className="text-sm rounded-full px-3 py-1 inline-block mb-3"
                          style={{
                            background: "rgba(75, 99, 255, 0.1)",
                            color: "#4B63FF",
                          }}
                        >
                          {relatedPost.category}
                        </span>
                        <h4
                          className="text-lg font-semibold mb-2"
                          style={{ color: "#1E2B4F" }}
                        >
                          {relatedPost.title}
                        </h4>
                        <p style={{ color: "#6A7C99" }}>
                          {relatedPost.excerpt}
                        </p>
                      </div>
                    </Link>
                  ))}
              </div>
            </div>
          </article>
        </div>
      </div>
    </>
  );
}

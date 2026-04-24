import { allPosts } from "content-collections";

import Link from "next/link";

import MDXCustomized from "@/components/MDXCustomized";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendar,
  faClock,
  faUser,
  faArrowLeft,
} from "@fortawesome/free-solid-svg-icons";

export async function generateStaticParams() {
  return allPosts.map((post) => ({
    slug: post._meta.fileName.replace(/\.mdx?$/, ""),
  }));
}

export default async function Post({ params }) {
  const { slug } = await params;

  const post = allPosts.find(
    (p) => p._meta.fileName.replace(/\.mdx?$/, "") === slug,
  );

  if (!post) return <></>;

  return (
    <div className="my-10 mx-5 md:mx-10">
      <Link href="/blog" className="btn btn-primary">
        <FontAwesomeIcon icon={faArrowLeft} />
        <span>Back</span>
      </Link>
      <div className="flex justify-center place-items-center text-4xl md:text-5xl lg:text-6xl tracking-wide font-bold text-overflow-truncate">
        <h1>{post.title}</h1>
      </div>
      <div className="my-3 md:my-5" />
      <div className="flex gap-2 justify-center place-items-center">
        <FontAwesomeIcon icon={faCalendar} className="text-primary" />
        <span className="align-middle">{post.date.toLocaleDateString()}</span>
        <span className="mx-1">&middot;</span>
        <FontAwesomeIcon icon={faClock} className="text-primary" />
        <span className="align-middle">&tilde;{post.minToRead} min</span>
        <span className="mx-1">&middot;</span>
        <FontAwesomeIcon icon={faUser} className="text-primary" />
        <span className="align-middle">{post.author}</span>
      </div>
      <div className="my-5 mx-5 md:mx-32 divider"></div>
      <article className="flex flex-col gap-y-4 md:gap-y-6 md:px-32">
        <MDXCustomized code={post.mdx} />
      </article>
      <div className="divider py-10 text-base-content/50">END OF CONTENT</div>
      <div className="flex flex-col place-items-center pb-10 md:pb-4">
        <Link href="/blog" className="btn btn-primary">
          <FontAwesomeIcon icon={faArrowLeft} />
          <span>Back to Blog</span>
        </Link>
      </div>
    </div>
  );
}

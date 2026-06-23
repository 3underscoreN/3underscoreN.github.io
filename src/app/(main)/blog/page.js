import { allPosts } from "content-collections";

import Link from "next/link";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar, faClock, faUser } from "@fortawesome/free-solid-svg-icons";

export default function Blog() {
  return (
    <div className="my-10 mx-5 md:mx-10">
      <div className="text-4xl md:text-5xl lg:text-6xl tracking-wide font-bold text-overflow-truncate">
        <h1>Blog</h1>
      </div>
      <div className="my-3 md:my-5" />
      <ul className="list rounded-box gap-4">
        {allPosts
          .sort((a, b) => new Date(b.date) - new Date(a.date))
          .map((post, index) => (
            <Link
              href={`/blog/${encodeURI(post._meta.fileName.replace(/\.mdx?$/, ""))}`}
              key={index}
              className="rounded-box bg-base-200 hover:bg-base-300 transition-colors duration-200 shadow-md"
            >
              <li className="list-item p-4">
                <div className="flex flex-col gap-y-1">
                  <h2 className="text-lg md:text-2xl tracking-wide font-semibold text-overflow-truncate">
                    {post.title}
                  </h2>
                  <p className="text-base text-base-content/60">
                    {post.summary}
                  </p>
                  <div className="grid grid-cols-[auto_1fr] gap-x-2 text-sm items-center">
                    <FontAwesomeIcon
                      icon={faCalendar}
                      className="text-primary py-2"
                    />
                    <span className="align-middle">
                      {post.date.toLocaleDateString()}
                    </span>
                    <FontAwesomeIcon
                      icon={faClock}
                      className="text-primary py-2"
                    />
                    <span className="align-middle">
                      &tilde;{post.minToRead} min
                    </span>
                    <FontAwesomeIcon
                      icon={faUser}
                      className="text-primary py-2"
                    />
                    <span className="align-middle">{post.author}</span>
                  </div>
                </div>
              </li>
            </Link>
          ))}
      </ul>
    </div>
  );
}

import Link from "next/link";

export function CustomLink({ href, children, ...props }) {
  return (
    <Link
      href={href}
      className="text-primary hover:underline"
      rel="noreferrer noopener"
      {...props}
    >
      {children}
    </Link>
  );
}

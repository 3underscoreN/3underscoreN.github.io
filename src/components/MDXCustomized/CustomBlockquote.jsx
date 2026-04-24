export function CustomBlockquote({ children }) {
  return (
    <blockquote className="border-l-4 border-primary pl-4 italic">
      {children}
    </blockquote>
  );
}

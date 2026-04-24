export function CustomUnorderedList({ children }) {
  return <ul className="list-disc list-inside">{children}</ul>;
}

export function CustomOrderedList({ children }) {
  return <ol className="list-decimal list-inside">{children}</ol>;
}

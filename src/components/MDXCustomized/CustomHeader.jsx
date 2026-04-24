export function HeaderOne({ children }) {
  return (
    <h1 className="pt-4 md:pt-6 text-3xl tracking-wide font-bold text-overflow-truncate">
      {children}
    </h1>
  );
}

export function HeaderTwo({ children }) {
  return (
    <h2 className="pt-2 md:pt-4 text-2xl tracking-wide font-bold text-overflow-truncate">
      {children}
    </h2>
  );
}

export function HeaderThree({ children }) {
  return (
    <h3 className="pt-2 md:pt-4 text-xl tracking-wide font-bold text-overflow-truncate">
      {children}
    </h3>
  );
}

export function HeaderFour({ children }) {
  return (
    <h4 className="pt-2 text-lg tracking-wide font-bold text-overflow-truncate">
      {children}
    </h4>
  );
}

export function HeaderFive({ children }) {
  return (
    <h5 className="pt-2 text-lg tracking-wide font-bold text-overflow-truncate">
      {children}
    </h5>
  );
}

export function HeaderSix({ children }) {
  return (
    <h6 className="pt-2 text-lg tracking-wide font-bold text-overflow-truncate">
      {children}
    </h6>
  );
}

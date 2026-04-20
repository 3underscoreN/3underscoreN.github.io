import Navbar from "@/components/navigation/navbar";

export const metadata = {
  title: "Kelvin, 3_n",
  description: "3_n's personal website.",
};

export default function RootLayout({ children }) {
  return (
    <>
      <Navbar />
      <div className="pt-28">{children}</div>
    </>
  );
}

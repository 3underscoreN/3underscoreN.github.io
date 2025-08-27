import Image from "next/image";
import { Link } from "next-view-transitions";

const LogoButton = () => {
  return (
    <Link href="/">
      <Image
        src="/static/image/logo_t.png"
        width={80}
        height={80}
        alt="logo"
        priority={true}
      />
    </Link>
  );
};

export default LogoButton;
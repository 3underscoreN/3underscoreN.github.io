/** @type {import('next').NextConfig} */
import { withContentCollections } from "@content-collections/next";

const nextConfig = {
  output: "export",

  images: {
    unoptimized: true,
  },
};

export default withContentCollections(nextConfig);

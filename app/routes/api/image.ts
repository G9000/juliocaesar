import type { LoaderFunction } from "@remix-run/node";
import { imageLoader, DiskCache } from "remix-image/server";

const config = {
  selfUrl:
    process.env.NODE_ENV === "development"
      ? "http://localhost:3000"
      : "https://juliocaesar.co/",
  cache: new DiskCache(),
};

export const loader: LoaderFunction = ({ request }) => {
  return imageLoader(config, request);
};

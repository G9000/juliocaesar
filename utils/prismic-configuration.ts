import Prismic from "@prismicio/client";

export const apiEndpoint = process.env.PRISMIC_URL;
export const accessToken = process.env.PRISMIC_TOKEN;

// Client method to query Prismic
export const client = Prismic.client(apiEndpoint, { accessToken });

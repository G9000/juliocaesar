import { getClient } from "../../libs/sanity/getClient";
import { filterDataToSingleItem } from "../../libs/sanity/filterDataToSingleItem";
import { useState } from "react";
import { useLoaderData } from "@remix-run/react";
import { Preview } from "../../components/Preview";
import { getImageDimensions } from "@sanity/asset-utils";
import imageUrlBuilder from "@sanity/image-url";
import { PortableText } from "@portabletext/react";
import type { PortableTextComponents } from "@portabletext/react";
import { config } from "../../libs/sanity/config";
import { HiOutlineClock } from "react-icons/hi";

export const loader = async ({ request, params }) => {
  const requestUrl = new URL(request?.url);
  const preview =
    requestUrl?.searchParams?.get("preview") ===
    process.env.SANITY_PREVIEW_SECRET;

  // Query for _all_ documents with this slug
  // There could be two: Draft and Published!
  const query = `*[_type == "blogs" && slug.current == $slug]`;
  const queryParams = { slug: params.slug };
  const initialData = await getClient(preview).fetch(query, queryParams);

  return {
    initialData,
    preview,
    // If `preview` mode is active, we'll need these for live updates
    query: preview ? query : null,
    queryParams: preview ? queryParams : null,
  };
};

const SampleImageComponent = ({ value, isInline }) => {
  const { width, height } = getImageDimensions(value);

  return (
    <img
      src={imageUrlBuilder(config)
        .image(value)
        .width(isInline ? 100 : 800)
        .fit("max")
        .auto("format")
        .url()}
      alt={value.alt || " "}
      loading="lazy"
      style={{
        // Display alongside text if image appears inside a block text span
        display: isInline ? "inline-block" : "block",

        // Avoid jumping around with aspect-ratio CSS property
        aspectRatio: width / height,
      }}
    />
  );
};

const Blog = () => {
  let { initialData, preview, query, queryParams } = useLoaderData();

  // If `preview` mode is active, its component update this state for us
  const [data, setData] = useState(initialData);

  // Bonus, a helper function checks the returned documents
  // To show Draft if in preview mode, otherwise Published
  const blog = filterDataToSingleItem(data, preview);
  const builder = imageUrlBuilder(config);
  function urlFor(source) {
    return builder.image(source);
  }

  let dateConfig = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  return (
    <div className="max-w-[1180px] w-full mx-auto py-20 px-[5vw]">
      {preview ? (
        <Preview
          data={data}
          setData={setData}
          query={query}
          queryParams={queryParams}
        />
      ) : null}
      <div>
        <div className="flex flex-col md:flex-row gap-y-6 md:items-center md:justify-between gap-x-4">
          <div className="w-full md:w-2/3">
            <h1 className="text-3xl lg:text-4xl font-bold text-white">
              {blog.title}
            </h1>
            <p className="text-lg text-white mt-2 text-opacity-60">
              {blog.description}
            </p>
          </div>
          <div className="flex gap-x-4 md:flex-col text-slate-400 text-xl font-semibold">
            <span className="">
              {new Date(blog.createdAt).toLocaleDateString("en-US", dateConfig)}
            </span>
            <span className="flex items-center">
              <HiOutlineClock className="mr-2 text-cyan-500" />
              {blog.readTime} min read
            </span>
          </div>
        </div>

        <div className="h-2 mt-6 bg-gradient-spectrum" />
        <img
          src={urlFor(blog.thumbnail).url()}
          alt={blog.thumbnail.caption ? blog.thumbnail.caption : "thumbnail"}
          className="w-full h-[300px] md:h-[550px] object-cover object-center mt-6"
        />
      </div>
      <main className="mt-20 flex flex-col gap-y-4">
        <PortableText
          value={blog?.content}
          components={myPortableTextComponents}
        />
      </main>
    </div>
  );
};

export default Blog;

const myPortableTextComponents: PortableTextComponents = {
  types: {
    image: SampleImageComponent,
  },
  block: {
    h1: ({ children }) => (
      <h1 className="text-4xl text-white px-[5vw]">{children}</h1>
    ),
    h2: ({ children }) => (
      <h1 className="text-4xl text-white px-[5vw]">{children}</h1>
    ),
    h3: ({ children }) => (
      <h1 className="text-4xl text-white px-[5vw]">{children}</h1>
    ),
    h4: ({ children }) => (
      <h1 className="text-4xl text-white px-[5vw]">{children}</h1>
    ),
    h5: ({ children }) => (
      <h1 className="text-4xl text-white px-[5vw]">{children}</h1>
    ),
    h6: ({ children }) => (
      <h1 className="text-4xl text-white px-[5vw]">{children}</h1>
    ),
    normal: ({ children }) => (
      <p className="px-[5vw] text-white text-opacity-80 font-normal text-md tracking-wide">
        {children}
      </p>
    ),
    blockquote: ({ children }) => (
      <blockquote className="border-l-purple-500">{children}</blockquote>
    ),
    customHeading: ({ children }) => (
      <h2 className="text-lg text-primary text-purple-700">{children}</h2>
    ),
  },
  list: {
    bullet: ({ children }) => (
      <ul className="mx-[5vw] bg-sky-900 bg-opacity-40 px-4 py-6 flex flex-col gap-y-4 rounded-lg ul-border">
        {children}
      </ul>
    ),
    number: ({ children }) => <ol className="mt-lg">{children}</ol>,
    checkmarks: ({ children }) => (
      <ol className="m-auto text-lg">{children}</ol>
    ),
  },
  listItem: {
    bullet: ({ children }) => (
      <li style={{ listStyleType: "disc" }} className="ml-10 text-white">
        {children}
      </li>
    ),
    checkmarks: ({ children }) => <li>✅ {children}</li>,
  },
  marks: {
    em: ({ children }) => (
      <em className="text-gray-600 font-semibold">{children}</em>
    ),
    link: ({ children, value }) => {
      const rel = !value?.href.startsWith("/")
        ? "noreferrer noopener"
        : undefined;
      return (
        <a
          href={value?.href}
          rel={rel}
          className="text-cyan-400 hover:underline"
        >
          {children}
        </a>
      );
    },
  },
};

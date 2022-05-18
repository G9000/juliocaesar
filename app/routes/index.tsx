import { useLoaderData } from "@remix-run/react";
import { Link } from "@remix-run/react";
import { FaGithub, FaBehance, FaLinkedinIn } from "react-icons/fa";
import { motion } from "framer-motion";
import { getClient } from "../libs/sanity/getClient";
import imageUrlBuilder from "@sanity/image-url";
import { config } from "../libs/sanity/config";
import { toast } from "react-hot-toast";

export async function loader() {
  const blogs = await getClient().fetch(
    `*[_type == "blogs"]{ _id, slug, createdAt, readTime, title, description,  thumbnail, content }`
  );

  return { blogs };
}

export default function Index() {
  let { blogs } = useLoaderData();

  console.log("blogs", blogs);

  const builder = imageUrlBuilder(config);
  function urlFor(source) {
    return builder.image(source);
  }

  function RouteResolver(url: string) {
    return `/blogs/${url}`;
  }

  return (
    <div>
      <section className="relative mx-auto overflow-hidden">
        <HeroSectionBg />
        <div className="flex py-[40vw] md:py-[260px] max-w-[1440px] items-center w-full mx-auto relative">
          <div className="w-full xl:w-2/3 px-[5vw] md:px-20">
            <h1 className="text-white text-4xl md:text-5xl font-semibold">
              Building beautiful digital landmarks on the net and finding
              meaningful solutions.
            </h1>
            <div className="mt-10 flex flex-row lg:items-center gap-x-10">
              <div className="relative group w-[200px]">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-500 to-teal-500 rounded-lg blur transition duration-1000 opacity-75 group-hover:opacity-100" />
                <button className="h-[70px] inline-flex items-center justify-center rounded-lg text-lg w-full bg-cyan-200 text-black font-semibold relative">
                  Read something
                </button>
              </div>

              <div className="inline-flex items-center px-6 rounded-lg h-[70px] gap-x-6  border-opacity-20 bg-black bg-opacity-40 w-fit shadow-lg">
                <a
                  href="https://github.com/G9000"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub className="text-2xl text-white text-opacity-60 hover:text-opacity-100 hover:text-cyan-200" />
                </a>
                <a
                  href="https://www.behance.net/juliocaesar"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaBehance className="text-2xl text-white text-opacity-60 hover:text-opacity-100 hover:text-cyan-200" />
                </a>
                <a
                  href="https://www.linkedin.com/in/juliocaesar/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedinIn className="text-2xl text-white text-opacity-60 hover:text-opacity-100 hover:text-cyan-200" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <section className="py-[260px] max-w-[1180px] w-full mx-auto relative">
        <h2 className="text-5xl text-white font-semibold">Featured post</h2>

        <div className="mt-10 grid grid-cols-3 gap-x-10">
          {blogs.map((blog, idx) => (
            <Link to={RouteResolver(blog.slug.current)} key={idx} className="">
              <img src={urlFor(blog.thumbnail).width(375).url()} alt="asda" />
              <div className="mt-6">
                <span className="text-xl text-white text-opacity-40">
                  {blog.createdAt}
                </span>
                <h4 className="text-4xl font-bold mt-4 text-white text-opacity-80">
                  {blog.title}
                </h4>
                <p className="text-lg text-white text-opacity-60">
                  {blog.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section> */}
    </div>
  );
}

const HeroSectionBg = () => {
  return (
    <>
      <div className="absolute inset-0 bg-gradient-spectrum" />
      <div className="absolute inset-0 grid-tile top -1px center flex items-center justify-center overflow-hidden">
        <div className="absolute left-[1/2] top-0 h-full">
          <svg
            width="2591"
            height="767"
            viewBox="0 0 2591 767"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <motion.path
              d="M767 672H672V767H767V672Z"
              fill="#ffffffa7"
              animate={{
                opacity: [0, 0.5, 0],
              }}
              transition={{
                duration: Math.floor(Math.random() * 10),
                ease: "easeInOut",
                repeat: Infinity,
                repeatDelay: Math.floor(Math.random() * 10),
              }}
            />
            <motion.path
              d="M863 192H768V287H863V192Z"
              fill="#ffffffa7"
              animate={{
                opacity: [0, 0.5, 0],
              }}
              transition={{
                duration: Math.floor(Math.random() * 10),
                ease: "easeInOut",
                repeat: Infinity,
                repeatDelay: Math.floor(Math.random() * 10),
              }}
            />
            <motion.path
              d="M863 384H768V479H863V384Z"
              fill="#ffffffa7"
              animate={{
                opacity: [0, 0.5, 0],
              }}
              transition={{
                duration: Math.floor(Math.random() * 10),
                ease: "easeInOut",
                repeat: Infinity,
                repeatDelay: Math.floor(Math.random() * 10),
              }}
            />
            <motion.path
              d="M863 672H768V767H863V672Z"
              fill="#ffffffa7"
              animate={{
                opacity: [0, 0.5, 0],
              }}
              transition={{
                duration: Math.floor(Math.random() * 10),
                ease: "easeInOut",
                repeat: Infinity,
                repeatDelay: Math.floor(Math.random() * 10),
              }}
            />
            <motion.path
              d="M1919 96H1824V191H1919V96Z"
              fill="#ffffffa7"
              animate={{
                opacity: [0, 0.5, 0],
              }}
              transition={{
                duration: Math.floor(Math.random() * 10),
                ease: "easeInOut",
                repeat: Infinity,
                repeatDelay: Math.floor(Math.random() * 10),
              }}
            />
            <motion.path
              d="M2303 96H2208V191H2303V96Z"
              fill="#ffffffa7"
              animate={{
                opacity: [0, 0.5, 0],
              }}
              transition={{
                duration: Math.floor(Math.random() * 10),
                ease: "easeInOut",
                repeat: Infinity,
                repeatDelay: Math.floor(Math.random() * 10),
              }}
            />
            <motion.path
              d="M1919 288H1824V383H1919V288Z"
              fill="#ffffffa7"
              animate={{
                opacity: [0, 0.5, 0],
              }}
              transition={{
                duration: Math.floor(Math.random() * 10),
                ease: "easeInOut",
                repeat: Infinity,
                repeatDelay: Math.floor(Math.random() * 10),
              }}
            />
            <motion.path
              d="M1919 576H1824V671H1919V576Z"
              fill="#ffffffa7"
              animate={{
                opacity: [0, 0.5, 0],
              }}
              transition={{
                duration: Math.floor(Math.random() * 10),
                ease: "easeInOut",
                repeat: Infinity,
                repeatDelay: Math.floor(Math.random() * 10),
              }}
            />
            <motion.path
              d="M2303 672H2208V767H2303V672Z"
              fill="#ffffffa7"
              animate={{
                opacity: [0, 0.5, 0],
              }}
              transition={{
                duration: Math.floor(Math.random() * 10),
                ease: "easeInOut",
                repeat: Infinity,
                repeatDelay: Math.floor(Math.random() * 10),
              }}
            />
            <motion.path
              d="M1823 0H1728V95H1823V0Z"
              fill="#ffffffa7"
              animate={{
                opacity: [0, 0.5, 0],
              }}
              transition={{
                duration: Math.floor(Math.random() * 10),
                ease: "easeInOut",
                repeat: Infinity,
                repeatDelay: Math.floor(Math.random() * 10),
              }}
            />
            <motion.path
              d="M2495 192H2400V287H2495V192Z"
              fill="#ffffffa7"
              animate={{
                opacity: [0, 0.5, 0],
              }}
              transition={{
                duration: Math.floor(Math.random() * 10),
                ease: "easeInOut",
                repeat: Infinity,
                repeatDelay: Math.floor(Math.random() * 10),
              }}
            />
            <motion.path
              d="M2207 192H2112V287H2207V192Z"
              fill="#ffffffa7"
              animate={{
                opacity: [0, 0.5, 0],
              }}
              transition={{
                duration: Math.floor(Math.random() * 10),
                ease: "easeInOut",
                repeat: Infinity,
                repeatDelay: Math.floor(Math.random() * 10),
              }}
            />
            <motion.path
              d="M2015 384H1920V479H2015V384Z"
              fill="#ffffffa7"
              animate={{
                opacity: [0, 0.5, 0],
              }}
              transition={{
                duration: Math.floor(Math.random() * 10),
                ease: "easeInOut",
                repeat: Infinity,
                repeatDelay: Math.floor(Math.random() * 10),
              }}
            />
            <motion.path
              d="M2399 384H2304V479H2399V384Z"
              fill="#ffffffa7"
              animate={{
                opacity: [0, 0.5, 0],
              }}
              transition={{
                duration: Math.floor(Math.random() * 10),
                ease: "easeInOut",
                repeat: Infinity,
                repeatDelay: Math.floor(Math.random() * 10),
              }}
            />
            <motion.path
              d="M1823 480H1728V575H1823V480Z"
              fill="#ffffffa7"
              animate={{
                opacity: [0, 0.5, 0],
              }}
              transition={{
                duration: Math.floor(Math.random() * 10),
                ease: "easeInOut",
                repeat: Infinity,
                repeatDelay: Math.floor(Math.random() * 10),
              }}
            />
            <motion.path
              d="M2207 480H2112V575H2207V480Z"
              fill="#ffffffa7"
              animate={{
                opacity: [0, 0.5, 0],
              }}
              transition={{
                duration: Math.floor(Math.random() * 10),
                ease: "easeInOut",
                repeat: Infinity,
                repeatDelay: Math.floor(Math.random() * 10),
              }}
            />
            <motion.path
              d="M2399 576H2304V671H2399V576Z"
              fill="#ffffffa7"
              animate={{
                opacity: [0, 0.5, 0],
              }}
              transition={{
                duration: Math.floor(Math.random() * 10),
                ease: "easeInOut",
                repeat: Infinity,
                repeatDelay: Math.floor(Math.random() * 10),
              }}
            />
          </svg>
        </div>
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-neutral-900 via-[#18181800] to-neutral-900" />
      <div className="absolute inset-0 bg-gradient-to-r from-neutral-900 via-[#18181800] to-neutral-900" />
    </>
  );
};

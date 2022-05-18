import { Link } from "@remix-run/react";
import { useState, useEffect } from "react";
import { Dialog } from "@headlessui/react";
import { HiOutlineSun, HiMenu, HiX } from "react-icons/hi";
import { useMedia } from "react-use";
import { toast } from "react-hot-toast";

export const Layout = ({ children }: { children: React.ReactNode }) => {
  const isMobile = useMedia("(max-width: 848px)", false);
  let [isOpen, setIsOpen] = useState<boolean>(false);

  const NavLinkStyle = "cursor-pointer hover:text-cyan-200";

  function blockUrl() {
    toast.error(
      "🚧 👷🏽 Halt! Still under construction. Last update May 19 2022 👷🏼‍♀️ 🚧"
    );
    console.log("Not ready");
  }

  // clear toast
  useEffect(() => {
    toast.dismiss();
  }, []);

  return (
    <body className="bg-neutral-900">
      <div className="h-4 bg-cyan-200 bg-opacity-5 border-b border-cyan-500" />
      <nav className="flex justify-between items-center max-w-[1640px] w-full mx-auto h-[90px] my-6 z-50 px-[5vw]">
        <Link
          to="/"
          className="text-white text-3xl tracking-wider font-semibold hover:text-cyan-200"
        >
          Julio Caesar
        </Link>

        {!isMobile ? (
          <>
            <ul className="text-white flex gap-x-8 text-xl font-semibold">
              <button onClick={() => blockUrl()} className={NavLinkStyle}>
                Blogs
              </button>
              <button onClick={() => blockUrl()} className={NavLinkStyle}>
                Library
              </button>
              <button onClick={() => blockUrl()} className={NavLinkStyle}>
                Weekend Project
              </button>
              <button onClick={() => blockUrl()} className={NavLinkStyle}>
                About
              </button>
            </ul>
            <div className="flex gap-x-4 items-center">
              <button
                onClick={() => blockUrl()}
                className="p-4 rounded-full text-white group hover:text-cyan-200"
              >
                <HiOutlineSun className="text-2xl" />
              </button>
              {/* <button
                onClick={() => blockUrl()}
                className="py-2 px-4 border border-gray-200 border-opacity-20 text-white rounded-lg hover:bg-cyan-200  hover:ring-4 hover:ring-cyan-200 hover:ring-opacity-20 hover:text-black bg-transparent hover:shadow-xl hover:shadow-blue-400/20"
              >
                Let's have a chat
              </button> */}
              <button
                onClick={() => blockUrl()}
                className="py-4 px-6 bg-black text-white rounded-lg shadow-lg font-bold hover:shadow-xl hover:shadow-blue-400/20"
              >
                Let's have a chat
              </button>
            </div>
          </>
        ) : (
          <div>
            <div className="flex gap-x-4 items-center">
              <button className="p-2 border border-gray-200 border-opacity-20 rounded-full text-white group hover:bg-cyan-200 hover:ring-4 hover:ring-cyan-200 hover:ring-opacity-20">
                <HiOutlineSun className="text-3xl" />
              </button>
              {!isOpen ? (
                <button
                  onClick={() => setIsOpen(true)}
                  className="p-2 border border-gray-200 border-opacity-20 rounded-full text-white group hover:bg-cyan-200 hover:ring-4 hover:ring-cyan-200 hover:ring-opacity-20"
                >
                  <HiMenu className="text-3xl" />
                </button>
              ) : (
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 border border-gray-200 border-opacity-20 rounded-full text-white group hover:bg-cyan-200 hover:ring-4 hover:ring-cyan-200 hover:ring-opacity-20"
                >
                  <HiX className="text-3xl" />
                </button>
              )}
            </div>
            <Dialog
              open={isOpen}
              onClose={() => setIsOpen(false)}
              className="bg-neutral-900 fixed top-[90px] w-full px-4 h-screen"
            >
              <Dialog.Panel>
                <ul className="text-white flex flex-col gap-y-4 text-xl mt-20">
                  <button onClick={() => blockUrl()} className={NavLinkStyle}>
                    Blogs
                  </button>
                  <button onClick={() => blockUrl()} className={NavLinkStyle}>
                    Library
                  </button>
                  <button onClick={() => blockUrl()} className={NavLinkStyle}>
                    Weekend Project
                  </button>
                  <button onClick={() => blockUrl()} className={NavLinkStyle}>
                    About
                  </button>
                </ul>
              </Dialog.Panel>
            </Dialog>
          </div>
        )}
      </nav>

      {children}
    </body>
  );
};

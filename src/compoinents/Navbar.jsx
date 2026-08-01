import React, { useState } from "react";

const Navbar = ({ setToggle, active, setActive }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <div className="h-20 px-8 flex items-center justify-between bg-slate-900/80 rounded-3xl backdrop-blur-xl border border-cyan-400/30 shadow-lg shadow-cyan-500/10">

        <div className="flex items-center gap-3">

          <button
            onClick={() => setMenuOpen(true)}
            className="text-3xl text-cyan-400 md:hidden"
          >
            ☰
          </button>
          <img
            className="h-12 w-12 rounded-full border-2 border-cyan-400 object-cover"
            src="https://png.pngtree.com/png-clipart/20230927/original/pngtree-man-avatar-image-for-profile-png-image_13001882.png"
            alt=""
          />
        </div>

        <div className="hidden md:flex gap-6 font-semibold">

          <p
            onClick={() => setActive("home")}
            className={
              active === "home"
                ? "text-cyan-400 border-b-2 border-cyan-400 cursor-pointer"
                : "cursor-pointer"
            }
          >
            Home
          </p>

          <p
            onClick={() => setActive("about")}
            className={
              active === "about"
                ? "text-cyan-400 border-b-2 border-cyan-400 cursor-pointer"
                : "cursor-pointer"
            }
          >
            About
          </p>

          <p
            onClick={() => setActive("contact")}
            className={
              active === "contact"
                ? "text-cyan-400 border-b-2 border-cyan-400 cursor-pointer"
                : "cursor-pointer"
            }
          >
            Contact Us
          </p>
        </div>

        <button
          onClick={() => setToggle((prev) => !prev)}
          className="hidden md:block px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 via-sky-500 to-blue-600 text-white font-semibold shadow-lg shadow-cyan-500/40 hover:to-blue-500 hover:shadow-cyan-400/70 hover:scale-105 transition-all duration-300 cursor-pointer"
        >
          Create User
        </button>
      </div>

      <div
        className={`fixed top-0 left-0 h-screen w-60 bg-slate-900 z-50 p-6 transform transition-transform duration-300 ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <button
          onClick={() => setMenuOpen(false)}
          className="text-3xl text-red-400 mb-6"
        >
          ✕
        </button>

        <img
          className="h-16 w-16 rounded-full border-2 border-cyan-400 mb-10"
          src="https://png.pngtree.com/png-clipart/20230927/original/pngtree-man-avatar-image-for-profile-png-image_13001882.png"
          alt=""
        />

        <div className="flex flex-col gap-6 text-lg font-semibold">

          <p
            onClick={() => {
              setActive("home");
              setMenuOpen(false);
            }}
            className="cursor-pointer"
          >
            Home
          </p>

          <p
            onClick={() => {
              setActive("about");
              setMenuOpen(false);
            }}
            className="cursor-pointer"
          >
            About
          </p>

          <p
            onClick={() => {
              setActive("contact");
              setMenuOpen(false);
            }}
            className="cursor-pointer"
          >
            Contact Us
          </p>

          <button
            onClick={() => {
              setToggle((prev) => !prev);
              setMenuOpen(false);
            }}
            className="mt-4 px-5 py-3 rounded-xl bg-gradient-to-r from-cyan-500 via-sky-500 to-blue-600 text-white font-semibold"
          >
            Create User
          </button>

        </div>
      </div>
    </>
  );
};

export default Navbar;
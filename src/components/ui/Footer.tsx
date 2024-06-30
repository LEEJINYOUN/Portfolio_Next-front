import React from "react";
import Github from "../icon/Github";

export default function Footer() {
  return (
    <section className="bg-white">
      <div className="max-w-screen-xl px-4 py-12 mx-auto space-y-8 overflow-hidden sm:px-6 lg:px-8">
        <div className="flex justify-center mt-8 space-x-6">
          <a
            href="https://github.com/LEEJINYOUN"
            target="_blank"
            className="text-gray-400 hover:text-gray-500 hover:scale-125 duration-200"
          >
            <span className="sr-only">GitHub</span>
            <Github class="w-10 h-10" />
          </a>
        </div>
        <p className="mt-8 text-base leading-6 text-center text-gray-400">
          © 2024. Lee Jin Young. All right reserved
        </p>
      </div>
    </section>
  );
}

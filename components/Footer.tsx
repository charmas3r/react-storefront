import React from "react";
import Image from "next/image";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="px-4 py-12 mx-auto max-w-7xl" data-theme="garden">
      <div className="grid grid-cols-2 gap-10 mb-3 md:grid-cols-3 lg:grid-cols-12 lg:gap-20">
        <div className="col-span-3">
          <Link href="/">
            <a>
              <div className="mt-px group block h-16 w-28 relative">
                <Image src="/saleor.svg" alt="Saleor logo" layout="fill" />
              </div>
            </a>
          </Link>
          <p className="my-2 text-xs leading-normal text-gray-500">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In
            deleniti eaque aut repudiandae et a id nisi.
          </p>
          <label className="flex w-48">
            <span className="sr-only">Select a language</span>
            <select className="select select-bordered w-full max-w-xs">
              <option>English</option>
              <option>Tamil</option>
            </select>
          </label>
        </div>
        <nav className="col-span-1 md:col-span-1 lg:col-span-2">
          <p className="mb-3 text-xs font-semibold tracking-wider text-gray-400 uppercase">Products</p>
          <a href="#"
             className="flex mb-3 text-sm font-medium text-gray-800 transition md:mb-2 hover:text-primary">Specials</a>
          <a href="#"
             className="flex mb-3 text-sm font-medium text-gray-800 transition md:mb-2 hover:text-primary">Browse All</a>
        </nav>
        <nav className="col-span-1 md:col-span-1 lg:col-span-2">
          <p className="mb-3 text-xs font-semibold tracking-wider text-gray-400 uppercase">About</p>
          <a href="#"
             className="flex mb-3 text-sm font-medium text-gray-800 transition md:mb-2 hover:text-primary">FAQs</a>
          <a href="#"
             className="flex mb-3 text-sm font-medium text-gray-800 transition md:mb-2 hover:text-primary">About Nursery</a>
          <a href="#"
             className="flex mb-3 text-sm font-medium text-gray-800 transition md:mb-2 hover:text-primary">Donate Now</a>
        </nav>
        <nav className="col-span-2 md:col-span-1 lg:col-span-2">
          <p className="mb-3 text-xs font-semibold tracking-wider text-gray-400 uppercase">Contact</p>
          <a href="#"
             className="flex mb-3 text-sm font-medium text-gray-800 transition md:mb-2 hover:text-primary">Facebook</a>
          <a href="#"
             className="flex mb-3 text-sm font-medium text-gray-800 transition md:mb-2 hover:text-primary">Twitter</a>
          <a href="#"
             className="flex mb-3 text-sm font-medium text-gray-800 transition md:mb-2 hover:text-primary">Instagram</a>
          <a href="#"
             className="flex mb-3 text-sm font-medium text-gray-800 transition md:mb-2 hover:text-primary">Email</a>
        </nav>
        <div className="col-span-3">
          <p className="mb-3 text-xs font-semibold tracking-wider text-gray-400 uppercase">SUBSCRIBE TO OUR NEWSLETTER</p>
          <form action="#" className="mb-2">
            <div className="form-append">
              <input className="form-input input-sm input-primary input-bordered text-accent-content" type="email" placeholder="Enter your email"/>
              <button className="btn btn-primary btn-sm mt-2" type="submit">Subscribe</button>
            </div>
          </form>
          <p className="text-xs leading-normal text-gray-500">Get the first crack at great new deals on select cultivars.</p>
        </div>
      </div>
      <div
        className="flex flex-col items-start justify-between pt-10 mt-10 border-t border-gray-100 md:flex-row md:items-center">
        <p className="mb-6 text-sm text-left text-gray-600 md:mb-0">© Copyright 2022 West Coast Plumeria. All Rights
          Reserved.</p>
        <div className="flex items-start justify-start space-x-6 md:items-center md:justify-center">
          <a href="#" className="text-sm text-gray-600 transition hover:text-primary">Terms</a>
          <a href="#" className="text-sm text-gray-600 transition hover:text-primary">Privacy</a>
        </div>
      </div>
    </footer>
  );
};


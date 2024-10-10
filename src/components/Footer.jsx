import React from 'react';
import {
    IconBrandGithub,
    IconBrandX,
    IconBrandLinkedin,
    IconBrandInstagram,
    IconBrandYoutube,
} from "@tabler/icons-react";
const Footer = () => {
  return (
    <footer className="relative bg-blueGray-200 pt-8 pb-6 border-none xs:border-none mt-6 border-slate-400 mx-1 text-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap text-left lg:text-left">
          <div className="w-full lg:w-6/12 px-4">
            <h4 className="text-3xl font-semibold text-blueGray-700">
              Let&apos;s keep in touch!
            </h4>
            <h5 className="text-lg mt-0 mb-2 text-blueGray-600">
              Find us on any of these platforms.
            </h5>
            <div className="mt-16  mb-6 flex">
              <a
                className="bg-white p-2 text-lightBlue-400 shadow-lg font-normal h-10 w-10 flex items-center justify-center rounded-full outline-none focus:outline-none mr-2"
                type="button" href="https://www.linkedin.com/company/codechefadgitm/mycompany/"
              >
                <IconBrandLinkedin className="h-full w-full text-neutral-500 dark:text-neutral-300" />
              </a>
              <a
                className="bg-white p-2 text-lightBlue-600 shadow-lg font-normal h-10 w-10 flex items-center justify-center rounded-full outline-none focus:outline-none mr-2"
                type="button" href='https://x.com/CAdgitm'
              >
                <IconBrandX className="h-full w-full text-neutral-500 dark:text-neutral-300" />
              </a>
              <a
                className="bg-white p-2 text-pink-400 shadow-lg font-normal h-10 w-10 flex items-center justify-center rounded-full outline-none focus:outline-none mr-2"
                type="button" href='https://www.instagram.com/geeksforgeeks_adgips/'
              >
                <IconBrandInstagram className="h-full w-full text-neutral-500 dark:text-neutral-300" />
              </a>
              <a
                className="bg-white p-2 text-blueGray-800 shadow-lg font-normal h-10 w-10 flex items-center justify-center rounded-full outline-none focus:outline-none mr-2"
                type="button" href='https://www.youtube.com/@CodeChefADGITMChapter'
              >
                 <IconBrandYoutube className="h-full w-full text-neutral-500 dark:text-neutral-300" />
              </a>
            </div>
          </div>
          <div className="w-full lg:w-6/12 px-4">
            <div className="flex flex-wrap items-top mb-6">
              <div className="w-full lg:w-4/12 px-4 ml-auto">
                <span className="block uppercase text-blueGray-500 text-sm font-semibold mb-2">
                  Useful Links
                </span>
                <ul className="list-unstyled">
                  <li>
                    <a
                      className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                      href="#about"
                    >
                      About Us
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                      href="#collaborators"
                    >
                      Collaborators
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                      href="#themes"
                    >
                      Themes
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                      href="#sponsors"
                    >
                      Sponsors
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <hr className="my-6 border-blueGray-300" />
        <div className="flex flex-wrap items-center md:justify-between justify-center">
          <div className="w-full md:w-4/12 px-4 mx-auto text-center">
            <div className="text-sm text-blueGray-500 font-semibold py-1">
              Copyright © <span id="get-current-year">2024</span>
              <a
                href=""
                className="text-blueGray-500 hover:text-gray-800"
                target="_blank"
                rel="noopener noreferrer"
              >
                {" "}
                Threaded Tales by
              </a>
              <a
                href="https://www.instagram.com/geeksforgeeks_adgips/"
                className="text-blueGray-500 hover:text-blueGray-800"
              >
                {" "}
                Mavericks
              </a>
              .
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

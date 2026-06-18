"use client";

import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="bg-gradient-to-b from-blue-900 to-blue-950 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <div className=" grid grid-cols-1 md:grid-cols-2 justify-center gap-8 lg:gap-12">
          <div className="space-y-4 justify-center items-center w-full">
            <div className="mb-8 w-full  flex justify-center items-center">
              <Image
                src="/img/logos.png"
                alt="even logo"
                width={30}
                height={30}
                priority
                className="h-32 w-64 object-contain"
              />
            </div>
            <div className="space-y-4 w-full">
              <div className="flex flex-col justify-center items-center gap-3 ">
             <div className="flex items-center justify-start gap-2">
              <Mail className="w-5 h-5 text-blue-300 flex-shrink-0" />
                <a
                  href="mailto:chmairbnb@outlook.com"
                  className="text-blue-100 hover:text-white transition-colors duration-200"
                >
                  chmairbnb@outlook.com
                </a>
              </div>   
              <div className="flex  gap-2 ">
                <Phone className="w-5 h-5 text-blue-300 flex-shrink-0" />
                <a
                  href="tel:+6309890215"
                  className="text-blue-100 hover:text-white transition-colors duration-200"
                >
                  (630) 989-0215
                </a>
              </div>
                 <p className="text-blue-300 font-medium">NMLS: #666953</p>
              </div>
              <div>
               
              </div>
              {/* <div className="mt-4 items-center flex  justify-center gap-4  p-4 rounded-lg">
            <Link
              target="_blank"
              href="https://www.linkedin.com"
              className="flex bg-white p-2 rounded-sm items-center gap-2 transition-transform hover:scale-110 duration-200"
              rel="noopener noreferrer"
            >
              <span className="[&>svg]:h-5 [&>svg]:w-5 text-[#04205D]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 448 512"
                >
                  <path d="M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z" />
                </svg>
              </span>
            </Link>

            <Link
              target="_blank"
              href="https://www.facebook.com"
              className="flex bg-white p-2 rounded-sm items-center gap-2 transition-transform hover:scale-110 duration-200"
              rel="noopener noreferrer"
            >
              <span className="[&>svg]:h-5 [&>svg]:w-5 text-[#04205D]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 320 512"
                >
                  <path d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z" />
                </svg>
              </span>
            </Link>

            <Link
              target="_blank"
              href="https://www.instagram.com/huntingtonbank/?hl=en"
              className="flex bg-white p-2 rounded-sm items-center gap-2 transition-transform hover:scale-110 duration-200"
              rel="noopener noreferrer"
            >
              <span className="[&>svg]:h-5 [&>svg]:w-5 text-[#04205D]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 448 512"
                >
                  <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
                </svg>
              </span>
            </Link>

            <Link
              target="_blank"
              href="https://www.youtube.com/"
              className="flex bg-white p-2 rounded-sm  items-center gap-2 transition-transform hover:scale-110 duration-200"
              rel="noopener noreferrer"
            >
              <span className="[&>svg]:h-5 [&>svg]:w-5 text-[#04205D]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 576 512"
                >
                  <path d="M549.7 124.1c-6.3-23.7-24.8-42.3-48.3-48.6C458.8 64 288 64 288 64S117.2 64 74.6 75.5c-23.5 6.3-42 24.9-48.3 48.6-11.4 42.9-11.4 132.3-11.4 132.3s0 89.4 11.4 132.3c6.3 23.7 24.8 41.5 48.3 47.8C117.2 448 288 448 288 448s170.8 0 213.4-11.5c23.5-6.3 42-24.2 48.3-47.8 11.4-42.9 11.4-132.3 11.4-132.3s0-89.4-11.4-132.3zm-317.5 213.5V175.2l142.7 81.2-142.7 81.2z" />
                </svg>
              </span>
            </Link>

            <Link
              target="_blank"
              href="https://twitter.com"
              className="flex bg-white p-2 rounded-sm items-center gap-2 transition-transform hover:scale-110 duration-200"
              rel="noopener noreferrer"
            >
              <span className="[&>svg]:h-5 [&>svg]:w-5 text-[#04205D]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 512 512"
                >
                  <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" />
                </svg>
              </span>
            </Link>
          </div> */}
            </div>
          </div>

          

          <div className="space-y-4">
            <div className="flex items-center w-full gap-3">
              <div className="mb-8 w-full rounded-lg overflow-hidden border border-blue-400/30">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d190255.33850037026!2d-87.8602826!3d41.8348739!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880e2c3cd0f4cbed%3A0xafe0b3ab5f0a3c1e!2sChicago%2C%20IL!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
                  width="100%"
                  height="250"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Coverage Area Map - Illinois"
                  className="w-full"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-blue-800 mt-8 pt-6 text-center">
          <p className="text-blue-300 text-sm">
            © {new Date().getFullYear()} Loans Direct Funding LLC. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

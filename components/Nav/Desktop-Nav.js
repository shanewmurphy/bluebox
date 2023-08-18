import Image from "next/image";
// import logo from "../../public/Logo.svg";
import logo from "../../public/Logo.svg";
import Link from "next/link";
import DropDownMenu from "./Dropdown-menu";

import { Popover, Transition } from "@headlessui/react";
import { Fragment } from "react";

const solutions = [
  {
    name: "Insights",
    description: "Measure actions your users take",
    href: "##",
    icon: IconOne,
  },
  {
    name: "Automations",
    description: "Create your own targeted content",
    href: "##",
    icon: IconTwo,
  },
  {
    name: "Reports",
    description: "Keep track of your growth",
    href: "##",
    icon: IconThree,
  },
];

export default function DesktopNav() {
  return (
    <div>
      <div className="w-11/12 mx-auto lg:mt-6 antialiased">
        <div className="flex justify-between">
          <div>
            <nav>
              <ul className="inline-flex items-center">
                <Link href="/">
                  <li>
                    <Image src={logo} priority alt="Logo Blue Box Storage" />
                  </li>
                </Link>
                <li className="pl-4 font-semibold text-sm">
                  <DropDownMenu />
                </li>
                <li className="pl-2 font-bold text-base text-black hover:text-blue">
                  <Link href="/Pick-Up-Service">Pick-Up Service</Link>
                </li>
                <Link href="/About-Us">
                  <li className="pl-4 font-bold text-base text-black hover:text-blue">
                    About Us
                  </li>
                </Link>
                <Link href="/Contact-Us">
                  <li className="pl-4 font-bold text-base text-black hover:text-blue">
                    Contact Us
                  </li>
                </Link>
              </ul>
            </nav>
          </div>
          <div className="flex items-center">
            <ul className="flex items-center">
              <li>
                <CallIcon />
              </li>
              <li className="pl-2 text-2xl font-bold text-black">
                0214 450 450
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

function IconOne() {
  return (
    <svg
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="48" height="48" rx="8" fill="#FFEDD5" />
      <path
        d="M24 11L35.2583 17.5V30.5L24 37L12.7417 30.5V17.5L24 11Z"
        stroke="#FB923C"
        strokeWidth="2"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16.7417 19.8094V28.1906L24 32.3812L31.2584 28.1906V19.8094L24 15.6188L16.7417 19.8094Z"
        stroke="#FDBA74"
        strokeWidth="2"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20.7417 22.1196V25.882L24 27.7632L27.2584 25.882V22.1196L24 20.2384L20.7417 22.1196Z"
        stroke="#FDBA74"
        strokeWidth="2"
      />
    </svg>
  );
}

function IconTwo() {
  return (
    <svg
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="48" height="48" rx="8" fill="#FFEDD5" />
      <path
        d="M28.0413 20L23.9998 13L19.9585 20M32.0828 27.0001L36.1242 34H28.0415M19.9585 34H11.8755L15.9171 27"
        stroke="#FB923C"
        strokeWidth="2"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18.804 30H29.1963L24.0001 21L18.804 30Z"
        stroke="#FDBA74"
        strokeWidth="2"
      />
    </svg>
  );
}

function IconThree() {
  return (
    <svg
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="48" height="48" rx="8" fill="#FFEDD5" />
      <rect x="13" y="32" width="2" height="4" fill="#FDBA74" />
      <rect x="17" y="28" width="2" height="8" fill="#FDBA74" />
      <rect x="21" y="24" width="2" height="12" fill="#FDBA74" />
      <rect x="25" y="20" width="2" height="16" fill="#FDBA74" />
      <rect x="29" y="16" width="2" height="20" fill="#FB923C" />
      <rect x="33" y="12" width="2" height="24" fill="#FB923C" />
    </svg>
  );
}

function CallIcon() {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 22 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="11" cy="11" r="11" fill="#393ED0" />
      <path
        d="M11.7312 12.7873C11.6425 12.7288 11.5285 12.7513 11.4638 12.8393C11.2608 13.1161 10.9972 13.2892 10.7402 13.3139C10.5745 13.3299 10.4275 13.2815 10.3152 13.1739C9.71582 12.6004 9.22382 11.687 9.16949 11.5844L9.15816 11.5626L9.14882 11.5455C9.09482 11.4433 8.61549 10.5219 8.46016 9.66879C8.43116 9.50916 8.46616 9.34589 8.56182 9.19716C8.70982 8.96698 8.97882 8.80407 9.30049 8.75061C9.40249 8.73388 9.47716 8.63679 9.47482 8.52407C9.47416 8.48625 9.45249 7.5837 9.01449 6.7557C8.75082 6.25789 8.39216 5.89134 7.94882 5.66698C7.89982 5.64261 7.84349 5.6397 7.79282 5.6597C7.71116 5.69207 5.80216 6.46443 6.01682 8.08952C6.20849 9.54189 7.01382 11.203 7.69382 12.4881C8.37382 13.7732 9.28982 15.3644 10.3472 16.2713C11.5302 17.2866 13.0978 15.8695 13.1635 15.8088C13.2052 15.771 13.2312 15.7161 13.2365 15.6572C13.2802 15.1262 13.1682 14.6044 12.9052 14.1066C12.4665 13.2786 11.7612 12.807 11.7312 12.7873Z"
        fill="white"
      />
      <path
        d="M10.6122 7.22461L10.4702 7.80279C12.2605 8.32606 13.3269 10.341 12.8472 12.2948L13.3775 12.4497C13.9355 10.1773 12.6952 7.83334 10.6122 7.22461Z"
        fill="white"
      />
      <path
        d="M14.858 8.03309C14.0613 6.52764 12.7737 5.45018 11.2327 5L11.0903 5.57818C12.4897 5.98727 13.659 6.96545 14.3823 8.33236C15.106 9.69927 15.2977 11.2931 14.9227 12.8196L15.453 12.9745C15.866 11.2935 15.6547 9.53818 14.858 8.03309Z"
        fill="white"
      />
    </svg>
  );
}

import React, { memo } from "react";
import { Typography } from "@material-tailwind/react";
import classNames from "classnames";

import styles from "@/styles/navigation.module.css";

function NavList() {
  return (
    <div>
      <ul className="my-2 flex flex-col lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6 h-24">
        <Typography
          as="li"
          variant="small"
          color="black"
          className={classNames(
            "p-1 font-medium text-text-2 font-poppins ",
            styles.home,
          )}
        >
          <a
            href="https://github"
            className="flex items-center hover:text-blue-500 transition-colors"
          >
            Home
          </a>
        </Typography>
        <Typography
          as="li"
          variant="small"
          color="black"
          className={classNames(
            "p-1 font-medium text-text-2 font-poppins ",
            styles.contact,
          )}
        >
          <a
            href="https://github"
            className="flex items-center hover:text-blue-500 transition-colors"
          >
            Contact
          </a>
        </Typography>
        <Typography
          as="li"
          variant="small"
          color="black"
          className={classNames(
            "p-1 font-medium text-text-2 font-poppins ",
            styles.about,
          )}
        >
          <a
            href="https://github"
            className="flex items-center hover:text-blue-500 transition-colors"
          >
            About
          </a>
        </Typography>
        <Typography
          as="li"
          variant="small"
          color="black"
          className={classNames(
            "p-1 font-medium text-text-2 font-poppins ",
            styles.signUp,
          )}
        >
          <a
            href="https://github"
            className="flex items-center hover:text-blue-500 transition-colors"
          >
            Sign Up
          </a>
        </Typography>
      </ul>
    </div>
  );
}
export default memo(NavList);

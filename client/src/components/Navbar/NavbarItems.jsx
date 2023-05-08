import PropTypes from "prop-types";

const NavbarItem = ({ title, active, href }) => {
  return (
    <li>
      <a
        href={href}
        className={`block py-2 pl-3 pr-4 rounded md:p-0 ${
          active
            ? "text-white bg-blue-700 md:bg-transparent md:text-blue-700 md:dark:text-blue-500 dark:text-white md:dark:text-blue-500"
            : "text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 md:dark:hover:text-white md:dark:hover:bg-transparent"
        } ${"md:hidden"}`}
        aria-current="page"
      >
        {title}
      </a>
    </li>
  );
};

NavbarItem.propTypes = {
  title: PropTypes.string.isRequired,
  active: PropTypes.bool.isRequired,
  href: PropTypes.string.isRequired,
};

export default NavbarItem;

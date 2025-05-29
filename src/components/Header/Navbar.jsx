import { memo } from "react";
import { NavLink } from "react-router";

const Navbar = ({ navLinks }) => {
  return (
    <div className="flex items-center gap-5 max-lg:hidden">
      {navLinks.map((link) => {
        return (
          <NavLink
            key={link.id}
            to={link.path}
            className="font-semibold py-1 hover:text-teal-600 text-lg"
          >
            {link.link}
          </NavLink>
        );
      })}
    </div>
  );
};

export default memo(Navbar);

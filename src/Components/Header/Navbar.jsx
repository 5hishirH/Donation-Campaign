import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <section className="flex flex-wrap items-center justify-between pt-12 w-11/12 mx-auto">
      <img src="/Logo.png" alt="Logo" className="h-16" />
      <nav className="mt-7 md:mt-0">
        <ul className="flex gap-12 text-lg">
          <li>
            <NavLink
                to="/"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "text-[#FF444A] font-bold underline" : ""
                }
                >
                Home
            </NavLink>
          </li>
          <li>
            <NavLink
                to="/donation"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "text-[#FF444A] font-bold underline" : ""
                }
                >
                Donation
            </NavLink>
          </li>
          <li>
            <NavLink
                to="/statistics"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "text-[#FF444A] font-bold underline" : ""
                }
                >
                Statistics
            </NavLink>
          </li>
        </ul>
      </nav>
    </section>
  );
};

export default Navbar;

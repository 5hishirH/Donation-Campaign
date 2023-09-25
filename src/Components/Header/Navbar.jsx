import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <section className="flex items-center justify-between pt-12 px-32 shadow-md">
      <img src="../../public/Logo.png" alt="Logo" className="h-16" />
      <nav>
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

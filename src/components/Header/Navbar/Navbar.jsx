import { NavLink } from "react-router-dom";
import Logo from "./Logo";

const Navbar = () => {
    return (
        <div>
            <nav className="flex justify-between items-center shadow-md py-6 px-5">
                <Logo></Logo>
                <ul className="flex gap-6">
                    <li>
                        <NavLink to="/" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "text-green-700 underline" : ""} >
                            home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/favorites" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "text-green-700 underline" : ""} >
                            Favorites
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/login" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "text-green-700 underline" : ""} >
                            Login
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Navbar;
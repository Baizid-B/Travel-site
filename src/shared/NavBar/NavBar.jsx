import { useContext, useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { AiOutlineMenu } from "react-icons/ai";
import { IoMdClose } from "react-icons/io";
import logo from "../../assets/logo/logo.png"
import { AuthContext } from "../../providers/AuthProvider/AuthProvider";

const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { user, userLoggedOut } = useContext(AuthContext);


    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const handleLogOut = () => {
        userLoggedOut()
            .then(() => { })
            .catch(error => console.log(error));
    };

    const navLinkClass = ({ isActive }) => isActive ? "relative text-sky-500 font-semibold after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-[2px] after:bg-sky-500 after:scale-x-100 after:origin-left after:transition-transform after:duration-300"
    : "relative text-black hover:text-sky-500 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-[2px] after:bg-sky-500 after:scale-x-0 after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100";

    const link =
        <>
            <li className="py-2 text-black">
                <NavLink className={navLinkClass} to='/' onClick={() => setIsOpen(false)}>home</NavLink>
            </li>
            <li className="py-2 text-black">
                <NavLink className={navLinkClass} to='/community' onClick={() => setIsOpen(false)}>community</NavLink>
            </li>
            <li className="py-2 text-black">
                <NavLink className={navLinkClass} to='/AboutUs' onClick={() => setIsOpen(false)}>about us</NavLink>
            </li>
            <li className="py-2 text-black">
                <NavLink className={navLinkClass} to='/trips' onClick={() => setIsOpen(false)}>trips</NavLink>
            </li>
            <li className="py-2 text-black">
                <NavLink className={navLinkClass} to='/packages' onClick={() => setIsOpen(false)}>Our Packages</NavLink>
            </li>
            <li className="py-2 text-black">
                <NavLink className={navLinkClass} to='/allguides' onClick={() => setIsOpen(false)}>Our Guides</NavLink>
            </li>
            <li className="py-2 text-black">
                <NavLink className={navLinkClass} to='/review' onClick={() => setIsOpen(false)}>Review</NavLink>
            </li>
        </>

    return (
        // <nav>
        //     <div className={`${isHome ? 'navbar fiexd text-red px-4 bg-red w-full transition-all duration-300' : 'navbar fiexd px-4 bg-white w-full transition-all duration-300'}`}>
        //         {/* logo */}
        //         <div className="navbar-start text-white text-2xl font-bold flex flex-row items-center">
        //             <img className="w-12" src={logo} alt="Logo" />
        //             <h1 className="text-black">Travel</h1>
        //         </div>

        //         {/* menu text for desktop */}
        //         <div className="navbar-center">
        //             <ul className="hidden md:flex space-x-4 uppercase">
        //                 {link}
        //             </ul>
        //         </div>

        //         {/* login/logout buttons */}
        //         <div className="navbar-end">
        //             <ul className="items-center gap-4 hidden md:flex uppercase group">
        //                 {
        //                     user ? (
        //                         <li onClick={handleLogOut} className="py-2 text-black">
        //                             <Link to='login'>Log Out</Link>
        //                         </li>
        //                     ) : (
        //                         <>
        //                             <li className="py-2 text-black hover:border-b-2 border-sky-500 hover:transition-transform">
        //                                 <NavLink to='register'>Register</NavLink>
        //                             </li>
        //                             <li className="py-2 text-black hover:border-b-2 border-sky-500 hover:transition-transform">
        //                                 <NavLink to='login'>Login</NavLink>
        //                             </li>
        //                         </>
        //                     )
        //                 }
        //             </ul>
        //         </div>

        //         {/* hamburger icon */}
        //         <div className="md:hidden">
        //             <div onClick={toggleMenu} className="text-black text-2xl cursor-pointer transition-transform duration-400 hover:rotate-[135deg]">
        //                 {
        //                     isOpen ? <IoMdClose /> : <AiOutlineMenu />
        //                 }
        //             </div>
        //         </div>
        //     </div>

        //     {/* Mobile Menu with animation */}
        //     <div className={`fixed top-0 left-0 z-40 bg-white w-full h-full transition-transform duration-700 ease-in-out transform md:hidden ${isOpen ? "translate-y-0" : "translate-y-full"}`}>
        //         <div className="px-5 pt-20">
        //             <ul className="space-y-2">
        //                 {link}
        //             </ul>
        //         </div>
        //     </div>
        // </nav>

        <nav>
            <div className= "navbar px-4 w-full transition-all duration-300">
                {/* logo */}
                <div className="navbar-start text-white text-2xl font-bold flex flex-row items-center">
                    <img className="w-12" src={logo} alt="Logo" />
                    <h1 className="text-black">Travel</h1>
                </div>

                {/* desktop menu */}
                <div className="navbar-center">
                    <ul className="hidden md:flex space-x-4 uppercase">
                        {link}
                    </ul>
                </div>

                {/* auth button */}
                <div className="navbar-end">
                    <ul className="items-center gap-4 hidden md:flex uppercase group">
                        {
                            user ? (
                                <div className="dropdown dropdown-end">
                                    <div tabIndex={0} role="button" className="w-18 h-18 btn bg-red-400 rounded-[100%] p-2">
                                        <img src="" alt="navbar-logo" />
                                    </div>
                                    <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-50 w-52 p-2 shadow-sm">
                                        <li><a>Item 1</a></li>
                                        <li onClick={handleLogOut} className="py-2 text-black">
                                            <Link to='login'>Log Out</Link>
                                        </li>

                                            </ul>
                                </div>
                            ) : (
                                <>
                                    <li className="py-2 text-black hover:border-b-2 border-sky-500 hover:transition-transform">
                                        <NavLink to='register'>Register</NavLink>
                                    </li>
                                    <li className="py-2 text-black hover:border-b-2 border-sky-500 hover:transition-transform">
                                        <NavLink to='login'>Login</NavLink>
                                    </li>
                                </>
                            )
                        }
                    </ul>
                </div>

                {/* mobile menu toggle */}
                <div className="md:hidden">
                    <div onClick={toggleMenu} className="text-black text-2xl cursor-pointer transition-transform duration-300 hover:rotate-90">
                        {
                            isOpen ? <IoMdClose /> : <AiOutlineMenu />
                        }
                    </div>
                </div>
            </div>

            {/* mobile menu */}
            <div className={`fixed top-0 left-0 z-40 bg-white w-full h-full transition-transform duration-500 ease-in-out transform md:hidden ${isOpen ? "translate-x-0" : "translate-x-full"}`}>
                <div className="px-5 pt-20">
                    <ul className="space-y-2 uppercase">
                        {link}
                    </ul>
                </div>
            </div>
        </nav>

    );
};

export default NavBar;

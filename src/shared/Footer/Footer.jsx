import { FaFacebook, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
    return (
        <>
        <footer className="footer bg-base-300 text-base-content p-10">
            <nav>
                <h6 className="footer-title">Services</h6>
                <a className="link link-hover">Branding</a>
                <a className="link link-hover">Design</a>
                <a className="link link-hover">Marketing</a>
                <a className="link link-hover">Advertisement</a>
            </nav>
            <nav>
                <h6 className="footer-title">Company</h6>
                <a className="link link-hover">About us</a>
                <a className="link link-hover">Contact</a>
                <a className="link link-hover">Jobs</a>
                <a className="link link-hover">Press kit</a>
            </nav>

            <nav>
                <h6 className="footer-title">Social</h6>
                <div className="grid grid-flow-col gap-4">
                <div className="text-2xl"><a href="https://github.com/Baizid-B" target="block" className=""><FaGithub /></a></div>
                <div className="text-2xl"><a href="https://www.facebook.com/baizidbr" target="block" className=""><FaFacebook /></a></div>
                <div className="text-2xl"><a href="https://x.com/Baizid_2003" target="block" className=""><FaTwitter /></a></div>
                <div className="text-2xl"><a href="https://www.linkedin.com/in/baizid-bostami-36962b292/" target="block" className=""><FaLinkedin /></a></div>
                </div>
            </nav>
        </footer>


        <footer className="footer footer-center bg-base-300 text-base-content p-4">
            <aside>
                <p>Copyright © {new Date().getFullYear()} - All right reserved by Travel Ltd.</p>
            </aside>
        </footer>
        </>
    );
};

export default Footer;
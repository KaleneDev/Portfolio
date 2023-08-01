import { React, useState, useRef, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import Icon from "./IconT.jsx";
import "./Nav.scss";
import ThemeToggle from "./themeToggle.jsx";
import {
    SlideInFromRight,
    SlideInFromTop,
} from "../utils/Animations/AnimationText";
function Nav() {
    const iconLinks = [
        {
            label: "Twitter",
            href: "https://twitter.com/me",
            icon: "twitter-logo",
        },
        { label: "GitHub", href: "https://github.com/me", icon: "github-logo" },
        {
            label: "Linkedin",
            href: "https://www.linkedin.com/in/kal%C3%A8ne-a-piou-8ba68826a/",
            icon: "linkedin-logo",
        },
        {
            label: "YouTube",
            href: "https://www.youtube.com/@me/",
            icon: "youtube-logo",
        },
    ];
    const [showMenu, setShowMenu] = useState(false);
    const navContaienrRef = useRef(null);
    const closeRef = useRef(null);
    const openRef = useRef(null);
    const toggleMenu = () => {
        const menuContentRef = navContaienrRef.current.children[1];
        menuContentRef.classList.toggle("active");
        setShowMenu(!showMenu);
    };
    const location = useLocation();
    useEffect(() => {
        const currentURL = location.pathname;
        const navItems = document.querySelector(".nav-items");
        const navItemsChild = navItems.childNodes;
        navItemsChild.forEach((item) => item.classList.remove("activeDesktop"));

        if (currentURL === "/") {
            console.log(currentURL);

            const navItems = document.querySelector(".nav-items");
            const navItemsChild = navItems.childNodes;
            navItemsChild[0].classList.add("activeDesktop");

            const width = navItemsChild[0].clientWidth;
            navItemsChild[0].childNodes[0].style.setProperty(
                "--width",
                `${width}px`
            );
            navItemsChild[0].childNodes[0].style.setProperty(
                "--translateX",
                `0px`
            );
        }

        if (
            currentURL === "/work" ||
            currentURL === "/work/discovermostsuitableproperty" ||
            currentURL === "/work/gymwebsite" ||
            currentURL === "/work/socialnetwork" ||
            currentURL === "/work/slider" ||
            currentURL === "/work/animationtext" ||
            currentURL === "/work/portfolio"
        ) {
            const navItems = document.querySelector(".nav-items");
            const navItemsChild = navItems.childNodes;
            navItemsChild[1].classList.add("activeDesktop");

            const width = navItemsChild[1].clientWidth;
            const prevWidth = navItemsChild[0].clientWidth;
            navItemsChild[0].childNodes[0].style.setProperty(
                "--width",
                `${width}px`
            );
            navItemsChild[0].childNodes[0].style.setProperty(
                "--translateX",
                `${prevWidth + 16}px`
            );
        }

        if (currentURL === "/about") {
            const navItems = document.querySelector(".nav-items");
            const navItemsChild = navItems.childNodes;
            navItemsChild[2].classList.add("activeDesktop");
            const width = navItemsChild[2].clientWidth;
            const prevWidth = navItemsChild[0].clientWidth;
            const prevWidth2 = navItemsChild[1].clientWidth;
            navItemsChild[0].childNodes[0].style.setProperty(
                "--width",
                `${width}px`
            );
            navItemsChild[0].childNodes[0].style.setProperty(
                "--translateX",
                `${prevWidth + prevWidth2 + 32}px`
            );
        }
        if (currentURL === "/contact") {
            const navItems = document.querySelector(".nav-items");
            const navItemsChild = navItems.childNodes;
            console.log(navItemsChild);
            navItemsChild[3].classList.add("activeDesktop");
            const width = navItemsChild[3].clientWidth;
            const prevWidth = navItemsChild[0].clientWidth;
            const prevWidth2 = navItemsChild[1].clientWidth;
            const prevWidth3 = navItemsChild[2].clientWidth;
            navItemsChild[0].childNodes[0].style.setProperty(
                "--width",
                `${width}px`
            );
            navItemsChild[0].childNodes[0].style.setProperty(
                "--translateX",
                `${prevWidth + prevWidth2 + prevWidth3 + 32 + 16}px`
            );
        }
    }, [location]);

    return (
        <>
            <SlideInFromTop scroll="on">
                <nav className="nav-container desktop wrapper">
                    <div className="menu-header">
                        <Link className="site-title" to="/">
                            <Icon name="terminal-window" />
                            Kalène A PIOU
                        </Link>
                    </div>
                    <div className="menu-content">
                        <ul className="nav-items">
                            <li>
                                <Link className="link" to="/">
                                    <span>Accueil</span>
                                </Link>
                            </li>
                            <li>
                                <Link className="link" to="/work">
                                    <span>Travaux</span>
                                </Link>
                            </li>
                            <li>
                                <Link className="link" to="/about">
                                    <span>À propos</span>
                                </Link>
                            </li>
                            <li>
                                <Link className="link" to="/contact">
                                    <span>Contact</span>
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="menu-footer">
                        <ThemeToggle />
                    </div>
                </nav>
            </SlideInFromTop>

            <nav className="nav-container mobile" ref={navContaienrRef}>
                <div className="menu-header">
                    <Link className="site-title" to="/">
                        <Icon name="terminal-window" />
                        Kalène A PIOU
                    </Link>
                </div>
                <div className="menu-content">
                    <ul className="nav-items">
                        <SlideInFromRight scroll="on">
                            <li>
                                <Link className="link" to="/">
                                    Accueil
                                </Link>
                            </li>
                        </SlideInFromRight>
                        <li>
                            <Link className="link" to="/work">
                                Travaux
                            </Link>
                        </li>
                        <li>
                            <Link className="link" to="/about">
                                À propos
                            </Link>
                        </li>
                        <li>
                            <Link className="link" to="/contact">
                                <span>Contact</span>
                            </Link>
                        </li>
                    </ul>
                    <div className="menu-footer">
                        <div className="socials">
                            {iconLinks.map(({ href, icon, label }, i) => (
                                <a key={i} className="social" href={href}>
                                    <span>{label}</span>
                                    <Icon name={icon} />
                                </a>
                            ))}
                        </div>

                        <ThemeToggle />
                    </div>
                </div>
            </nav>
            {showMenu && (
                <div className="btn close" onClick={toggleMenu} ref={openRef}>
                    <Icon className="btn" name="close-circle-fill" />
                </div>
            )}
            {!showMenu && (
                <div className="btn" onClick={toggleMenu} ref={closeRef}>
                    <Icon className="btn" name="menu-line" />
                </div>
            )}
        </>
    );
}

export default Nav;

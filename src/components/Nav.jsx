import { React, useState, useRef } from "react";
import { Link } from "react-router-dom";
import Icon from "./IconT.jsx";
import "./Nav.scss";

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

    // useEffect(() => {
    //     if (showMenu) {
    //         navContaienrRef.current.classList.add("show");
    //     }
    //     if (!showMenu) {
    //         navContaienrRef.current.classList.remove("show");
    //     }
    // }, [showMenu]);
    const toggleMenu = () => {
        const menuContentRef = navContaienrRef.current.children[1];
        menuContentRef.classList.toggle("active");
        setShowMenu(!showMenu);
    };
    return (
        <>
            <nav className="nav-container desktop">
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
                                Accueil
                            </Link>
                        </li>
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
                    </ul>
                </div>
                <div className="menu-footer">
                    <div className="socials">
                        {iconLinks.map(({ href, icon, label }, i) => (
                            <a key={i} className="social" href={href}>
                                <span>{label}</span>
                                <Icon name={icon} />
                            </a>
                        ))}
                    </div>
                </div>
            </nav>

            <nav className="nav-container mobile" ref={navContaienrRef}>
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
                                Accueil
                            </Link>
                        </li>
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
                    </div>
                </div>
            </nav>
            {showMenu && (
                // <button className="btn" onClick={toggleMenu} ref={openRef}>
                //     close
                // </button>

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

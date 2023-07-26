import { React, useRef, useEffect } from "react";
import Icon from "./IconT.jsx";

function themeToggle() {
    const buttonRef = useRef(null);

    const toggleTheme = (e) => {
        const checked = buttonRef.current.getAttribute("aria-pressed");
        if (checked === "true") {
            const buttonDark = buttonRef.current.children[1];
            buttonDark.classList.add("active");
            const buttonLight = buttonRef.current.children[2];
            buttonLight.classList.remove("active");
        }
        if (checked === "false") {
            const buttonDark = buttonRef.current.children[1];
            buttonDark.classList.remove("active");
            const buttonLight = buttonRef.current.children[2];
            buttonLight.classList.add("active");
        }
        const root = document.documentElement;
        const currentTheme = root.getAttribute("data-theme");
        const targetTheme = currentTheme === "dark" ? "light" : "dark";
        root.setAttribute("data-theme", targetTheme);
        localStorage.setItem("theme", targetTheme);

        buttonRef.current.setAttribute("aria-pressed", targetTheme === "dark");
    };
    const selectedTheme = localStorage.getItem("theme");
    useEffect(() => {
       

        if (selectedTheme) {
            const root = document.documentElement;
            root.setAttribute("data-theme", selectedTheme);
            buttonRef.current.setAttribute(
                "aria-pressed",
                selectedTheme === "dark"
            );
            buttonRef.current.setAttribute(
                "aria-pressed",
                selectedTheme === "dark"
            );
        }
        if (selectedTheme === "light") {
            const button = buttonRef.current.children[1];
            button.classList.add("active");
        } 
        if (selectedTheme === "dark") {
            const button = buttonRef.current.children[2];
            button.classList.add("active");
        }
    }, [selectedTheme, buttonRef]);
    return (
        <div className="theme-toggle">
            <button
                onClick={(e) => toggleTheme(e)}
                aria-pressed="true"
                ref={buttonRef}
            >
                <span className="sr-only">Dark theme</span>
                <span className="icon light">
                    <Icon name="light" />
                </span>
                <span className="icon dark active">
                    <Icon name="dark" />
                </span>
            </button>
        </div>
    );
}

export default themeToggle;

import React from "react";
import "./styles/index.css";

const DarkMode = () => {
  let clickedClass = "clicked";
  const body = document.body;
  let theme;

  if (localStorage) {
    theme = localStorage.getItem("theme");
  }

  if (theme === 'dark') {
    body.classList.add(theme)
  } else {
    body.classList.add('light')
  }

  const switchTheme = (e) => {
    if (theme === 'dark') {
      body.classList.replace('dark', 'light');
      e.target.classList.remove(clickedClass);
      localStorage.setItem("theme", "light");
      theme = 'light';
    } else {
      body.classList.replace('light', 'dark');
      e.target.classList.add(clickedClass);
      localStorage.setItem("theme", "dark");
      theme = 'dark';
    }
  }

  return (
    <label className="switch">
      <button
      className={theme === "dark" ? clickedClass : ""}
      id="darkMode"
      onClick={(e) => switchTheme(e)}>
      </button>
      <span className="slider"></span>
    </label>

  )
}

export default DarkMode;
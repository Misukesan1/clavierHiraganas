import React from "react";
import BtnToggleDarkMode from "./BtnToggleDarkMode";

export default function Header() {
  return (
    <>
      <header>
        <div className="navbar bg-base-200 shadow-sm">
          <div className="navbar-start"></div>
          <div className="navbar-end">
            <BtnToggleDarkMode />
          </div>
        </div>
      </header>
    </>
  );
}

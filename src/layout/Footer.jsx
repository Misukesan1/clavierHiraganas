import React from "react";

export default function Footer() {
  return (
    <>
      <footer className="footer sm:footer-horizontal footer-center bg-base-300 text-base-content p-4">
        <aside>
          <p>
            Copyright © {new Date().getFullYear()} - Quentin Van den Ende
          </p>
        </aside>
      </footer>
    </>
  );
}

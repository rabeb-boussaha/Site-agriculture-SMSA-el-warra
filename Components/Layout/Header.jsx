import React from "react";
import Link from "next/link";

const Header = () => {
  return (
    <div className="w100  header">
      <div className="bg-light headerContainer d-flex  justify-content-center  alignC  ">
        <div className="d-flex align-items-center h100">
          {" "}
          <div className=" f13 nav pointer bold  headerBorderRight h100 px-4 alignC  ">
            <Link href="/">ACCUEIL</Link>
          </div>{" "}
          <div className="f13 nav   pointer bold  headerBorderRight h100 px-4 alignC ">
            <Link href="/about">A PROPOS</Link>
          </div>
          <div className="f13 nav  bold  pointer  headerBorderRight h100 px-4 alignC">
            <Link href="/products">NOTRE APPROCHE BIOLOGIQUE</Link>
          </div>
          <div class="">
            <ul class="navigation">
              <li>
                <p className=" f13   bold  pointer  headerBorderRight h100 px-4 alignC ">
                  <Link href="">NOS PRODUITS BIOLOGIQUES</Link>
                </p>
                <ul>
                  <li>
                    <p
                      className=" f13   bold  pointer  headerBorderRight h100 px-4 alignC  "
                      title="olive">
                      <Link href="/huile">HUILE D&apos;OLIVE BIOLOGIQUE</Link>
                    </p>
                  </li>
                  <li>
                    <p
                      className="f13   bold  pointer  headerBorderRight h100 px-4 alignC  "
                      title="amonde">
                      <Link href="/Amonds">AMANDES BIOLOGIQUES</Link>
                    </p>
                  </li>
                  <li>
                    <p
                      className="f13   bold  pointer  headerBorderRight h100 px-4 alignC "
                      title="pistache">
                      <Link href="/pistache">PISTACHES BIOLOGIQUES</Link>
                    </p>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>

        <div className="d-flex h100">
          <div className="bold nav  f13 pointer h100 px-4 alignC headerBorderRight">
            <svg
              width="11"
              height="11"
              viewBox="0 0 11 11"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="me-2">
              <path
                d="M0.34698 9.35427C-0.00964546 9.71493 -0.00637989 10.2964 0.354273 10.653C0.714927 11.0096 1.2964 11.0064 1.65302 10.6457L0.34698 9.35427ZM10.3558 1.46204C10.353 0.954849 9.93953 0.545998 9.43234 0.548847L1.16716 0.595264C0.659968 0.598113 0.251117 1.01158 0.253966 1.51877C0.256814 2.02597 0.670283 2.43482 1.17748 2.43197L8.5243 2.39071L8.56556 9.73753C8.56841 10.2447 8.98188 10.6536 9.48907 10.6507C9.99626 10.6479 10.4051 10.2344 10.4023 9.72722L10.3558 1.46204ZM1.65302 10.6457L10.0905 2.11293L8.78447 0.821473L0.34698 9.35427L1.65302 10.6457Z"
                fill="#EECE38"
              />
            </svg>
            <Link href="/Contacte">CONTACT</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;

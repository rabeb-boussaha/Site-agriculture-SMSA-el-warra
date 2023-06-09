import React from "react";
import Location from "../Commun/Icons/Location";
import Mail from "../Commun/Icons/Mail";
import Phone from "../Commun/Icons/Phone";

function Phones() {
  return (
    <div className="w100 ">
      <div className="w100 d-flex justifiy-content-center alignC gap-3 mx-auto ">
        <div className="w40 info-items  text-center">
          <svg
            stroke="#000"
            fill="#eece38"
            stroke-width="0"
            viewBox="0 0 12 16"
            height="4em"
            width="4em"
            xmlns="http://www.w3.org/2000/svg">
            <path
              fill-rule="evenoded"
              d="M6 0C2.69 0 0 2.5 0 5.5 0 10.02 6 16 6 16s6-5.98 6-10.5C12 2.5 9.31 0 6 0zm0 14.55C4.14 12.52 1 8.44 1 5.5 1 3.02 3.25 1 6 1c1.34 0 2.61.48 3.56 1.36.92.86 1.44 1.97 1.44 3.14 0 2.94-3.14 7.02-5 9.05zM8 5.5c0 1.11-.89 2-2 2-1.11 0-2-.89-2-2 0-1.11.89-2 2-2 1.11 0 2 .89 2 2z"></path>
          </svg>

          <h5 className="bold f20 pointer   pt-2 alignC ">Adresse</h5>
          <p className="sous-street text-center">
            EL Waraa Sidi Ali Ben Aoun, Sidi Bouzid, Tunisie{" "}
          </p>
        </div>
        <div className="w40 info-items  text-center">
          {" "}
          <svg
            stroke="currentColor"
            fill="#eece38"
            stroke-width="0"
            viewBox="0 0 1024 1024"
            height="4em"
            width="4em"
            xmlns="http://www.w3.org/2000/svg">
            <path d="M928 160H96c-17.7 0-32 14.3-32 32v640c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32zm-40 110.8V792H136V270.8l-27.6-21.5 39.3-50.5 42.8 33.3h643.1l42.8-33.3 39.3 50.5-27.7 21.5zM833.6 232L512 482 190.4 232l-42.8-33.3-39.3 50.5 27.6 21.5 341.6 265.6a55.99 55.99 0 0 0 68.7 0L888 270.8l27.6-21.5-39.3-50.5-42.7 33.2z"></path>
          </svg>
          <h5 className="bold f20 pointer   pt-2 alignC "> Email</h5>
          <p className="sous-street">info@smsa-waara.com</p>
        </div>
        <div className="w40 info-items text-center ">
          <svg
            stroke="currentColor"
            fill="#eece38"
            stroke-width="0"
            viewBox="0 0 16 16"
            height="4em"
            width="4em"
            xmlns="http://www.w3.org/2000/svg">
            <path d="M15.854.146a.5.5 0 0 1 0 .708L11.707 5H14.5a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5v-4a.5.5 0 0 1 1 0v2.793L15.146.146a.5.5 0 0 1 .708 0zm-12.2 1.182a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"></path>
          </svg>
          <h5 className="bold f20 pointer   pt-2 alignC "> Télèphone</h5>
          <p className="sous-street ms-4">+216 24245963</p>
        </div>
      </div>
    </div>
  );
}

export default Phones;

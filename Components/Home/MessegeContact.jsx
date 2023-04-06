import React from "react";
import CustomButton from "../Commun/CustomButton";

function MessegeContact() {
  return (
    <div className="w100">
      <div className="w100  wm100   align-items-center  mx-auto  container mt30 gap2 flex-column flex-lg-row  ">
        {" "}
        <div className="w100 wm100">
          <input type="text" placeholder="Nom" className="input f14 medium " />
        </div>
        <div className="w100 wm100">
          <input
            type="text"
            placeholder="Email Adress"
            className="input f10 medium "
          />
        </div>
        <div className="w100 wm100 ">
          <textarea
            type="text"
            placeholder="Write Message"
            className="textarea f10 medium "></textarea>
        </div>
        <CustomButton
          text="Send my request"
          variant="orange"
          className="text-uppercase wm100"
        />
      </div>
    </div>
  );
}

export default MessegeContact;

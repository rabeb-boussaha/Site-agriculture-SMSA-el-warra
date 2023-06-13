import React from "react";
import CustomButton from "../Commun/CustomButton";

export default function FeedBack() {
  return (
    <div className="w100 mx-auto FeedBack ">
      <h3 className="Reviews ">Donnez nous un Feedback</h3>
      <div className="Feed ">
        <form>
          <div className="w100">
            <div className="w100  wm100   align-items-center  mx-auto  container mt30 gap2 flex-column flex-lg-row  ">
              {" "}
              <div className="w100 wm100 d-flex gap-3">
                <div className="w34">
                  <input
                    type="text"
                    placeholder="Nom et prénom"
                    className="input f14 medium "
                  />
                </div>
                <div className="w34">
                  <input
                    type="text"
                    placeholder="Email"
                    className="input f14 medium "
                  />
                </div>
                <div className="w34">
                  <input
                    type="text"
                    placeholder="Télèphone"
                    className="input f14 medium "
                  />
                </div>
              </div>
              <div className="w100 wm100">
                <input
                  type="text"
                  placeholder="Sujet"
                  className="input f10 medium "
                />
              </div>
              <div className="w100 wm100 ">
                <textarea
                  type="text"
                  placeholder="Votre Message"
                  className="textarea f10 medium "></textarea>
              </div>
              <CustomButton
                text="Envoyer"
                variant="orange"
                className="text-uppercase wm100 w30"
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

import React from "react";
import { Link } from "react-router-dom";
import Inputs from "./Inputs";
function REGISTER() {
  return (
    <div>
        <div className="container p-4 mt-4">
          <div className="row justify-content-evenly mt-4">
            <div className="col-lg-6 col-md-12 mt-4">
              <div className="d-flex">
                <i className="fa-solid fa-right-to-bracket fs-1 mx-2"></i>{" "}
                <h2>Register</h2>
              </div>
              <div
                className="p-6 shadow-lg p-3 mb-5 bg-body rounded"
                style={{ backgroundColor: "white" }}
              >
                <form>
                <Inputs VALUE={'Name'}  ICON={'fa-user'} TYPE={'text'}/>
                <Inputs VALUE={'Email address'}  ICON={'fa-at'} TYPE={'email'}/>
                <Inputs VALUE={'Password'}  ICON={'fa-key'} TYPE={'password'}/>            

                  <div className="d-flex justify-content-between">
                    <button type="submit" className="btn btn-outline-primary">
                      Save <i className="fa-solid fa-floppy-disk"></i>
                    </button>
                    <Link to='/login'>I have account</Link>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
}
export default REGISTER;

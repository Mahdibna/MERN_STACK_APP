import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Inputs from "./Inputs";
import { useDispatch, useSelector } from "react-redux";
import {Registration} from "../Redux/actions/authActions";
function REGISTER() {
  const errors = useSelector((state) => state.error);
  const [Form, setForm] = useState({});
  const dispatch = useDispatch();
  const onChangeHundler = (e) => {
    setForm({
      ...Form,
      [e.target.name]: e.target.value,
    });
  };
  const Navigate=useNavigate()
  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(Registration(Form , Navigate));
  };
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
              <form onSubmit={onSubmit}>
                <Inputs
                  VALUE={"Name"}
                  NAME={"name"}
                  ICON={"fa-user"}
                  TYPE={"text"}
                  onChangeHundler={onChangeHundler}
                  ERROR={errors.name}
                />
                <Inputs
                  VALUE={"Email address"}
                  NAME={"email"}
                  ICON={"fa-at"}
                  TYPE={"email"}
                  onChangeHundler={onChangeHundler}
                  ERROR={errors.email}

                />
                <Inputs
                  VALUE={"Password"}
                  NAME={"password"}
                  ICON={"fa-key"}
                  TYPE={"password"}
                  onChangeHundler={onChangeHundler}
                  ERROR={errors.password}

                />
                <Inputs
                  VALUE={"Confirm password"}
                  NAME={"confirm"}
                  ICON={"fa-key"}
                  TYPE={"password"}
                  onChangeHundler={onChangeHundler}
                  ERROR={errors.confirm}

                />
                <div className="d-flex justify-content-between">
                  <button type="submit" className="btn btn-outline-primary">
                    Save <i className="fa-solid fa-floppy-disk"></i>
                  </button>
                  <Link to="/login">I have account</Link>
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

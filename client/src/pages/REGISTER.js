import React from "react";
import { Link } from "react-router-dom";
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
                  <div className="mb-3">
                    <label className="form-label">Name</label>
                    <div className="input-group">
                      <span className="input-group-text" id="basic-addon1">
                        <i className="fa-solid fa-user"></i>
                      </span>
                      <input type="password" className="form-control" />
                    </div>
                  </div>
                  <div className=" mb-3">
                    <label className="form-label">Email address</label>
                    <div className="input-group">
                      <span className="input-group-text" id="basic-addon1">
                        <i className="fa-solid fa-at"></i>
                      </span>
                      <input type="text" className="form-control" />
                    </div>
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Password</label>
                    <div className="input-group">
                      <span className="input-group-text" id="basic-addon1">
                        <i className="fa-solid fa-key"></i>
                      </span>
                      <input type="password" className="form-control" />
                    </div>
                  </div>
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

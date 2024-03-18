import React from 'react';
function PROFILE() {
  return (
    <div>
        <div className="container p-4 mt-4">
          <div className="row justify-content-evenly mt-4">
            <div className="col-lg-6 col-md-12 mt-4">
              <div className="d-flex">
                <i className="fa-solid fa-user fs-1 mx-2"></i> <h2>Profile</h2>
              </div>
              <div className="p-6 shadow-lg p-3 mb-5 bg-body rounded" style={{ backgroundColor: "white" }}>
                <form>
                  <div className="mb-3">
                    <label className="form-label">Telephone</label>
                    <div className="input-group">
                      <input type="text" className="form-control" name="tel" />
                    </div>
                  </div>
                  <div className="mb-3">
                    <label className="form-label">City</label>
                    <div className="input-group">
                      <input type="text" className="form-control" name="city" />
                    </div>
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Country</label>
                    <div className="input-group">
                      <input type="text" className="form-control" name="country" />
                    </div>
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Bio</label>
                    <div className="input-group">
                      <input type="text" className="form-control" name="bio" />
                    </div>
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Address</label>
                    <div className="input-group">
                      <textarea type="text" className="form-control" name="address"></textarea>
                    </div>
                  </div>
                  <div className="d-flex justify-content-between">
                    <button type="submit" className="btn btn-outline-primary">Update <i className="fa-solid fa-floppy-disk"></i></button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
}

export default PROFILE;

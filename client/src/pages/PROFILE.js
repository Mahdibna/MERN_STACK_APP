import React, { useState } from 'react';
import Inputs from './Inputs';
function PROFILE() {
  const [Form, setForm] = useState({});
  const onChangeHundler = (e) => {
    setForm({
      ...Form,
      [e.target.name]:[e.target.value]
    });
  };
  const onSubmit=(e)=>{
    e.preventDefault();
    console.log(Form)
  }
  return (
    <div>
        <div className="container p-4 mt-4">
          <div className="row justify-content-evenly mt-4">
            <div className="col-lg-6 col-md-12 mt-4">
              <div className="d-flex">
                <i className="fa-solid fa-user fs-1 mx-2"></i> <h2>Profile</h2>
              </div>
              <div className="p-6 shadow-lg p-3 mb-5 bg-body rounded" style={{ backgroundColor: "white" }}>
                <form onSubmit={onSubmit}>
                <Inputs VALUE="Telephone" NAME={'Telephone'} TYPE="text" ICON="fa-phone" onChangeHundler={onChangeHundler}/>
                <Inputs VALUE="City" NAME={'City'} TYPE="text" ICON="fa-city" onChangeHundler={onChangeHundler}/>
                <Inputs VALUE="Country"  NAME={'Country'} TYPE="text" ICON="fa-globe" onChangeHundler={onChangeHundler}/>
                <Inputs VALUE="Bio"  NAME={'Bio'} TYPE="text" ICON="fa-user" onChangeHundler={onChangeHundler}/>
                <Inputs VALUE="Address" NAME={'Adress'} TYPE="text" ICON="fa-map-marker" onChangeHundler={onChangeHundler}/>
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

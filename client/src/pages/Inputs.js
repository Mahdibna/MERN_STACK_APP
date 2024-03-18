import React from 'react'

function Inputs({VALUE , ICON , TYPE}) {
  return (
    <div className="mb-3">
            <label className="form-label">{VALUE}</label>
            <div className="input-group">
            <span className="input-group-text" id="basic-addon1">
                <i className={`fa-solid ${ICON}`}></i>
            </span>
            <input type={TYPE} className="form-control" />
        </div>
    </div>
  )
}

export default Inputs
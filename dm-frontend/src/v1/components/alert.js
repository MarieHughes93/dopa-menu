import React from 'react'

const AlertComponent = (props)=>{
    const alert = props.alert
    return(
        <div className={`alert ${alert.type} alert-dismissible fade show`} role="alert">
            <h4 className="alert-heading">{`${alert.heading}`}</h4>
            <p>{`${alert.message}`}</p>
            <button type="button"  className="close" onClick={() => props.closeAlert()}>
                x
            </button>
        </div>
    )
}
export default AlertComponent
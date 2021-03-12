import React from 'react'
import {Button} from 'react-bootstrap'

const AlertComponent = ({alert, closeAlert})=>{
    return(
        <div className={`alert ${alert.type} alert-dismissible fade show`} role="alert">
            <h4 className="alert-heading">{`${alert.heading}`}</h4>
            <p>{`${alert.message}`}</p>
            <Button
            className={`close btn ${alert.type} btn-closeAlert`}
            onClick={() => closeAlert()}
            type="button"
            variant="dark"
            size="sm"
            >
                x
            </Button>
        </div>
    )
}
export default AlertComponent
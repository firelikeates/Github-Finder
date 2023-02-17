import React, { Fragment } from 'react'
import loading from "./loading.gif"

const Loading = (props) => {
    return (
        <Fragment>
            <img src={loading} alt="...loading" style={{ width: "90px", color:"blue" , backgroundColor:"black", margin: "auto", display: "block", marginTop: "210px"}} />
        </Fragment>
    )
}

export default Loading

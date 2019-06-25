import React from "react";
import {connect} from "react-redux";

const ShowArrayItem = ({listNum, item}) => {
    return (
        <div>
            <p>{listNum}</p>
            <p>{item}</p>
        </div>
    )
}
export default ShowArrayItem
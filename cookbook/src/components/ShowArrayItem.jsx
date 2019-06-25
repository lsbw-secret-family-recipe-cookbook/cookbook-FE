import React from "react";


const ShowArrayItem = ({listNum, item}) => {
    return (
        <div>
            <p>{listNum}</p>
            <p>{item}</p>
        </div>
    )
}
export default ShowArrayItem
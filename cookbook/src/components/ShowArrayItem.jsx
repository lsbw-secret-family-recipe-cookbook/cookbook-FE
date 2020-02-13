import React from "react";


const ShowArrayItem = ({listNum, item}) => {
    return (
        <div class="array-item-wrapper">
            <p class= "array-listnum">{listNum}. </p>
            <p class="array-item">{item}</p>
        </div>
    )
}
export default ShowArrayItem
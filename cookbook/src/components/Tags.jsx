import React from "react";

//To change common tags, add/remove to state with "is" before tag name and "-" for whitespace
//Regex for capital letters: /([A-Z])/g
class Tags extends React.Component {
    state={
        commonTags:{
        isBreakfast: false,
        isLunch: false,
        isDinner: false,
        isDessert: false,
        isSideDish: false,
        isVegetable: false,
        isChicken: false,
        isPork: false,
        isBeef: false,
        isQuick: false,
        isAppetizer: false}
    }
    
    selectTag=e=> {
        e.preventDefault();

    }
    render(){
    return(
        
        {this.state.commonTags.forEach( tag=> {
            <div className={`tag ${tag}`}>
            <button>`${tag}`</button>
            </div>
        })}
    )
    }
}

export default Tags;

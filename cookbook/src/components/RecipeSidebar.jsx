import React from "react";
import {connect} from "react-redux";
import{Link} from "react-router-dom";
import {fetchTitles} from "../actions";
 
class RecipeSideBar extends React.Component {

    componentDidMount(){
        this.props.fetchTitles();
    }
    render(){
    return(
        // {this.props.titles.map(title => {
        //     <Link to=`/recipes/${title.id}` key={title.id} >
        //     <p>{title.title}</p>
        //     </Link>
        // })}
        <p>Recipe Sidebar</p>
    )
}
}

const mapStateToProps = state => ({
    titles: state.titles
})

export default connect(
    mapStateToProps, {fetchTitles}
)(RecipeSideBar);

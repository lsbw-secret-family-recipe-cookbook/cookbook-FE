import React from "react";
import {connect} from "react-redux";
import {getRecipe} from "../actions";

class TagSearch extends React.Component {
    state={
        customTag: '',
        currentRecipes: [],
        tagsArray:[]
    }
    componentDidMount(){
        getRecipe()
    }

    recipes.map(recipe=> {
        recipe.tags.map(tag=>{
        tagsArray.includes(tag)
    }))
    
    handleChanges = e => {
        this.setState({[e.target.name]: e.target.value.toLowerCase()})
    }

    render(){
    return (
        <div className="search-wrapper">
        <input 
        type="text" 
        placeholder="Custom Tag" 
        name="search" 
        onChange={this.handleChanges}
        value={this.customTag}
        />
        </div>
    );

}
}

const mapStateToProps=state=> ({
    recipes: state.recipes,
    fetchingRecipes: state.fetchingRecipes,
})

export default connect(
    mapStateToProps,
    {getRecipe}
)(TagSearch);


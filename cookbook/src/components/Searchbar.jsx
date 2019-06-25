import React from "react";

class SearchBar extends React.Component {
    state={
        searchInput: '',
        currentRecipes: this.props.recipes
    }
    handleChanges = e => {
        this.setState({[e.target.name]: e.target.value.toLowerCase()})
    }

    render(){
    return (
        <div className="search-wrapper">
        <input 
        type="text" 
        placeholder="Search" 
        name="search" 
        onChange={this.handleChanges}
        value={this.searchInput}
        />
        </div>
    );

}
}


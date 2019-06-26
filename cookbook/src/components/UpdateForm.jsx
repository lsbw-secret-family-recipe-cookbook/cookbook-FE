import React from "React";
import {connect } from "react-redux";

class UpdateForm extends React.component {
    state={
        recipe:{
            title: "",
            source: "",
            ingredients:{},
            directions: {},
            note: "",
            tags: {}
        }

    }
}

const mapStateToProps = state => ({
    recipe: state.recipe,
})

export default connect(
    mapStateToProps,
    {updateRecipe}
)(UpdateForm);
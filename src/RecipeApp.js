import React, { Component } from 'react';
import {connect} from 'react-redux';
import Navbar from './component/Navbar';
import RecipeList from './component/RecipeList';
import RecipeInput from './component/RecipeInput';
import './RecipeApp.css';

class RecipeApp extends Component {

  render() {
    const {shouldShowForm, recipes, saveRecipe, deleteRecipe, showForm, hideForm} = this.props;
    return (
      <div className="App">
        <Navbar onNewRecipe={showForm}/>
        {shouldShowForm ? <RecipeInput onSave={saveRecipe} onClose={hideForm}/> : null}  
        <RecipeList onDelete={deleteRecipe} recipes={recipes}/>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  recipes: state.recipes,
  shouldShowForm: state.shouldShowForm
});

const mapDispatchProps = dispatch => ({
  saveRecipe(recipe) {
    dispatch({
      type: "SAVE_RECIPE",
      recipe
    })
  },
  deleteRecipe(recipeId) {
    dispatch({
      type: "DELETE_RECIPE",
      recipeId
    })
  }, 
  showForm() {
    dispatch({
      type: "SHOW_FORM",
    })
  }, 
  hideForm() {
    dispatch({
      type: "HIDE_FORM",
    })
  }
})

export default connect(mapStateToProps, mapDispatchProps)(RecipeApp);

import React, { Component } from 'react';
import "./css/Navbar.css";
import PropTypes from 'prop-types';

class Navbar extends Component {
  static defaultProps = {
    onNewRecipe(){}
  }

  static propsType = {
    onNewRecipe: PropTypes.func
  }

  render() {
    return (
      <header>
        <h2><a>Recipe App</a></h2>
        <nav>
          <li><a onClick={this.props.onNewRecipe}>New Recipe</a></li> 
          <li><a>Home</a></li>        
          <li><a>About</a></li>        
          <li><a>Contact</a></li>                       
        </nav>  
      </header>  
    );
  }
}

export default Navbar;
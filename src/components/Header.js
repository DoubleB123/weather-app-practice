import React from 'react';
import './styles/Header.css' 
import PropTypes from 'prop-types';

class Header extends React.Component{ 
  render() { 
    return  (
      <div>
        <header className="main-header">
          <h1 className="main-title">{this.props.displayText}</h1>
          {this.props.children}
        </header>
      </div>
    );
  }
}

Header.propTypes = {
  displayText: PropTypes.string.isRequired
}

export default Header;
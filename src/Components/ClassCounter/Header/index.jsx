import React from "react";
import PropTypes from "prop-types"; 

import "./index.css";

/** 
 * @typedef HeaderProps
 * @property {string} header
*/

/**
 * Header display
 * @param {HeaderProps} props 
 * @returns 
 */

class Header extends React.Component{
    
    componentDidMount() {
        console.log("componentDidMount(\"HeadingClassCounter\")");
    }
  
    componentWillUnmount() {
        console.log("componentWillUnmount(\"HeadingClassCounter\")");
    }

    render(){
        return (
            <h2 className = "header">{this.props.header}</h2>
        );
    }
}

Header.propTypes = {
    header: PropTypes.string
}

Header.defaultProps = {
    header: "Header Text"
}

export default Header;
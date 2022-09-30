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

const Header = (props) => {
    return(
        <h2 className = "header">{props.header}</h2>
    );
};

Header.propTypes = {
    header: PropTypes.string
}


export default Header;
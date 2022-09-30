import React from "react";
import PropTypes from "prop-types"; 

import "./index.css";

/** 
 * @typedef ContentProps
 * @property {string} value
*/

/**
 * Adding a description
 * @param {ContentProps} props 
 * @returns 
 */

const Content = (props) => {

    return (
        <div className = "controlled-counter__content">{props.value}</div>
    )
};

Content.propTypes = {
    value: PropTypes.string
}

Content.defaultProps = {
    value: "Description of the counter"
}

export default Content;
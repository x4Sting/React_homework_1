import React from "react";
import PropTypes from "prop-types"; 

import "./index.css";

/** 
 * @typedef DisplayingInputProps
 * @property {number} value
 * @property {function} handle
*/

/**
 * Adding input
 * @param {ContentProps} props 
 * @returns 
 */

const DisplayingInput = (props) => {

    return (
        <input className = "controlled-counter__input" type="number" value = { props.value } onChange = { props.handle } min="0"/>
    )
};

DisplayingInput.propTypes = {
    value: PropTypes.number,
    handle: PropTypes.func
}

DisplayingInput.defaultProps = {
    value: 0
}

export default DisplayingInput;
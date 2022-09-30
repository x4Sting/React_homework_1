import React from "react";
import PropTypes from "prop-types"; 

import "./index.css";

/** 
 * @typedef DisplayingProps
 * @property {number} counter
*/

/**
 * Counter display
 * @param {DisplayingProps} props 
 * @returns 
 */

class Displaying extends React.Component{
    
    componentDidMount() {
        console.log("componentDidMount(\"DisplayClassCounter\")");
    }
  
    componentWillUnmount() {
        console.log("componentWillUnmount(\"DisplayClassCounter\")");
    }

    render(){
        return (
            <div className ="class-display">
                {this.props.counter}
            </div>
        );
    }
};

Displaying.propTypes = {
    counter: PropTypes.number
}

Displaying.defaultProps = {
    counter: 0
}

export default Displaying;
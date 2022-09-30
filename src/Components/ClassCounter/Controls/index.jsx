import React from "react";
import PropTypes from "prop-types"; 

import "./index.css";

/** 
 * @typedef ControlsProps
 * @property {element} counter
*/

/**
 * Adding buttons
 * @param {ControlsProps} props 
 * @returns 
 */

class Controls extends React.Component{

    componentDidMount() {
        console.log("componentDidMount(\"ControlClassCounter\")");
    }
  
    componentWillUnmount() {
        console.log("componentWillUnmount(\"ControlClassCounter\")");
    }

    render(){
        return (
            <div className = "control">
                <button className = "control__button" onClick = { ()=>{ this.props.counter.setState({counter: this.props.counter.state.counter + 1}) } } >Increment</button>
                <button className = "control__button" onClick = { ()=>{ this.props.counter.setState({counter: this.props.counter.state.counter - 1}) } } >Decrement</button>
            </div>
        );
    }
}

Controls.propTypes = {
    counter: PropTypes.element
}

export default Controls;
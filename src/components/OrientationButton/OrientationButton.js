import React, { Component } from "react";

class OrientationButton extends Component {
    constructor(){
        super();

        this.state = {
            row: true
        }
    }

    changeOrientation(){
        this.setState({
            row: !this.state.row
        })
    }

    render(){
        let container_class = this.state.row ? "object-container-row" : "object-container-column"

        return (
            <React.Fragment>
                <div className="button-container">
                    <button 
                        className="orientation-button"
                        onClick={this.changeOrientation.bind(this)}
                    >
                        Change Flex Direction
                    </button>
                </div>
                <div className={container_class}>
                    <div className="object-one">Object 1</div>
                    <div className="object-two">Object 2</div>
                </div>
            </React.Fragment>
        )
    }
}

export default OrientationButton;
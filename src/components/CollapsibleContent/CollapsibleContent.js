import React, { Component } from 'react';
import './CollapsibleContent.scss';

class CollapsibleContent extends Component {
    constructor(props) {
      super(props)
      this.state = {
          active: false,
      }
      
      this.getWrapperStyle = this.getWrapperStyle.bind(this);
      this.toggle = this.toggle.bind(this);
    }
    
    
    getWrapperStyle() {
        return this.state.active ? { height: '200px'} : { height: 0 };
    }
    
    toggle() {
        const currentState = this.state.active;
        this.setState({ active: !currentState })
    }
    
    render() {
      return (
            <div className="collapsible-container">
                <button 
                    onClick={this.toggle}
                    className="collapsible-container__button"
                >
                    {this.state.active ? 'See Less': 'See More'}
                </button>
                <div className="collapsible-container__wrapper" style={this.getWrapperStyle()}>
                <div className="collapsible-container__element">Hidden Element 1</div>
                <div className="collapsible-container__element">Hidden Element 2</div>
                <div className="collapsible-container__element">Hidden Element 3</div>
                <div className="collapsible-container__element">Hidden Element 4</div>
                <div className="collapsible-container__element">Hidden Element 5</div>
                </div>
            </div>
      )
    }
  }

export default CollapsibleContent;
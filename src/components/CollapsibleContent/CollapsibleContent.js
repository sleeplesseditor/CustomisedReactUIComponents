import React, { Component } from 'react';
import './CollapsibleContent.scss';

class CollapsibleContent extends Component {
    constructor(props) {
        super(props)
        this.tab = React.createRef();
        this.state = {
            active: false,
        }

        this.setTab = this.setTab.bind(this);
        this.getWrapperStyle = this.getWrapperStyle.bind(this);
        this.toggle = this.toggle.bind(this);
    }
    
    setTab(ele) {
        this.tab = ele;
    }

    getWrapperStyle() {
        console.log(this.state, this.tab)
  	    return this.state.active && this.tab ? { height: this.tab.current.scrollHeight + 10} : { height: 0 };
    }
    
    toggle() {
        const currentState = this.state.active;
        this.setState({ active: !currentState })
    }
    
    render() {
      return (
            <div className="collapsible-container">
                <div className="collapsible-container__button-area">
                    <button 
                        onClick={this.toggle}
                        className="collapsible-container__button"
                    >
                        {this.state.active ? 'See Less': 'See More'}
                    </button>
                </div>
                <div className="collapsible-container__wrapper" style={this.getWrapperStyle()}>
                    <div ref={this.tab}>
                        {this.props.content}
                    </div>
                </div>
                <div className="collapsible-container__external-object">
                    <p>External Object</p>
                </div>
            </div>
      )
    }
  }

CollapsibleContent.defaultProps = {
    content: []
}

export default CollapsibleContent;
import React, { Component } from 'react';
import './StickyProperties.scss';

class StickyProperties extends Component {
    constructor(props){
        super(props);
        this.state = {
            objectNumber: ['item', 'item', 'item']
        }
    }

    render(){
        const { objectNumber} = this.state;
        return (
            <div className="sticky__container">
                {objectNumber.map(item => (
                    <div
                        className="sticky__item"
                        key={item}
                    >
                        <div
                            className="sticky__item-head"
                        >
                            HEAD
                        </div>
                        <div className="sticky__item-body"></div>
                    </div>
                ))}
            </div>
        )
    }
}

export default StickyProperties;
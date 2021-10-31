import React from 'react';

import './slider.scss'
import counter from '../../index';

class Slider extends React.Component{
    constructor(props){
        super(props);
        this.state = {isBodyVisible: this.props.isBodyVisible};
        this.onToggleBody = this.onToggleBody.bind(this);
    }

    onToggleBody(e){
        let drawStart = Date.now();
        e.preventDefault()
        e.stopPropagation();
        this.setState({isBodyVisible: !this.state.isBodyVisible});
        requestAnimationFrame(function() {
            counter.send('draw', Date.now() - drawStart);
        });
    }
    
    render(){
        return (
            <div>
                <div className="header" onClick={this.onToggleBody}> {this.props.header}</div>
                {this.state.isBodyVisible? <div className="body">{this.props.body}</div>: ""}
            </div>
        )
    }
}

export default Slider;
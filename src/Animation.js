import React, { Component } from 'react'
import { CSSTransition } from 'react-transition-group'

class Animation extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            isShow: true
        }
        this.handleClick = this.handleClick.bind(this)
    }
    render() { 
        return ( 
            <div>
                <CSSTransition
                    in={this.state.isShow}
                    timeout={2000}
                    classNames="animation-txt"
                    unmountOnExit
                >
                <div>lvhan</div>
                </CSSTransition>
                <button onClick={this.handleClick}>召唤lvhan</button>
            </div>
         );
    }

    handleClick() {
        this.setState({
            isShow: this.state.isShow ? false : true
        })
    }
}
 
export default Animation;
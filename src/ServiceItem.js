import React, { Component } from 'react'
import PropTypes from 'prop-types'

class ServiceItem extends Component {
    constructor(props) {
        super(props)
        this.handleClick = this.handleClick.bind(this)
    }
    state = {}

    //组件第一次存在于dom中,函数不会被执行
    //如果已经存在于dom中,函数才会执行
    // componentWillReceiveProps() {
    //     console.log('child- componentWillReceiveProps')
    // }

    // componentWillUnmount() {
    //     console.log('child- componentWillUnmount')
    // }

    //组件优化
    shouldComponentUpdate(nextProps, nextState) {
        if (nextProps.content !== this.props.content) {
            return true
        } else {
            return false
        }
    }

    render() { 
        console.log('child-render')
        return ( 
            <li
                onClick={this.handleClick}>
                {this.props.name} test - {this.props.content}
            </li>
         );
    }

    handleClick() {
        this.props.deleteItem(this.props.index)
    }
}

/* 校验父组件传递给子组件的类型 */
ServiceItem.propTypes = {
    name: PropTypes.string.isRequired,
    content: PropTypes.string,
    index: PropTypes.number,
    deleteItem: PropTypes.func
}

/* 默认值 */
ServiceItem.defaultProps = {
    name:'111'
}
 
export default ServiceItem;
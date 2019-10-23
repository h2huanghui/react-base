import React, { Component, Fragment } from 'react'
import axios from 'axios'
import './style.css'
import ServiceItem from './ServiceItem'
import Animation from './Animation'
import { CSSTransition,TransitionGroup } from 'react-transition-group'

class Service extends Component {
    //在某一时刻,可以自动执行的函数,属于ES6语法,不算react特有的生命周期。
    //但可以当做初始阶段
    constructor(props) {
        super(props)
        this.state = {
            inputValue: '',
            list:[]
        }
    }

    //页面渲染之前,打印日志,查询数据库
    // componentWillMount() {
    //     console.log('componentWillMount----组件将要挂载到页面的时刻')
    // }

    // //挂载完之后,也可以进行打印日志,查询数据库
    componentDidMount() {
        // console.log('componentDidMount----组件挂载完成')
        axios.get('https://www.easy-mock.com/mock/5dafce96374f867d204a1b8b/getStateList')
            .then((res) => {
                console.log('success' + JSON.stringify(res))
                this.setState({
                    list:res.data.data
                })
            })
            .catch((error) => {
                console.log('error' + error)
            })
    }

    /* 返回false不会向下执行,返回true向下执行*/
    //用作优化组件性能
    // shouldComponentUpdate() {
    //     console.log('1-shouldComponentUpdate')
    //     return true
    // }

    // componentWillUpdate() {
    //     console.log('2-componentWillUpdate')
    // }

    // componentDidUpdate() {
    //     console.log('4-componentDidUpdate')
    // }

    render() {
        console.log('3-render----组件挂载中')
        return (
            <Fragment>
                <div>
                    <label htmlFor="service">Add Service</label>
                    <input
                        type="text"
                        id="service"
                        value={this.state.inputValue}
                        onChange={this.inputChange.bind(this)}
                        className="inputValue"
                        ref={(input)=>{this.input = input}}
                    />
                    <button onClick={this.addList.bind(this)}>Add</button>
                </div>
           
                <ul ref={(ul) => { this.ul = ul }}>
                <TransitionGroup>
                    {
                        this.state.list.map((item,index) => {
                            return (
                                /* 
                                   <li
                                        key={index + item}
                                        onClick={this.deleteItem.bind(this, index)}
                                        dangerouslySetInnerHTML={{__html:item}} //解析html标签
                                    >
                                    </li> 
                                 */
                                <CSSTransition
                                    timeout={1000}
                                    classNames='animation-txt'
                                    unmountOnExit
                                    appear={true}
                                    key={index+item}
                                >
                                <ServiceItem
                                    content={item}
                                    key={index + item}
                                    index={index}
                                    list={this.state.list}
                                    deleteItem={this.deleteItem.bind(this)}
                                    />
                                </CSSTransition>
                           
                            )
                        })
                        }
                    </TransitionGroup>
                </ul>
             
                <Animation />
            </Fragment>
        )
    }

    inputChange(e) {
        // console.log(this) //this指向当前这个组件
        // this.state.inputValue = e.target.value
        this.setState({
            // inputValue: e.target.value
            inputValue: this.input.value
        })
    }
    //增加列表
    addList() {
    /* this.setState是一个异步的方法,还没有执行完,就执行了下面的console代码 */
    /* 解决方案,this.setState提供了回调函数,把要执行的代码放在回调函数里面 */
        this.setState({
            list: [...this.state.list, this.state.inputValue],
            //等价于 list:['头部1','腰部1',this.state.inputValue]
            inputValue:''
        }, () => {
            console.log(this.ul.querySelectorAll('li').length)    
        })
        // console.log(this.ul.querySelectorAll('li').length)
    }

    //删除列表项
    deleteItem(index) {
        // console.log(index)
        let list = this.state.list //先声明变量,把state里面的数据赋给变量,对变量进行操作
        list.splice(index, 1) //改变原始数组
        this.setState({
            list
        })
    }
}

export default Service
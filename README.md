## 父->子 
父组件通过属性传值,子组件通过this.props获取

## 子-> 父
子组件不可以直接修改父组件,但是可以通过事件的方式,父组件把事件传递给子组件,子组件想更新时,告诉父组件执行方法

## 子组件中校验父组件传值的类型 PropTypes[func,String,number]
```
ServiceItem.propTypes = {
    name: PropTypes.string.isRequired,
    content: PropTypes.string,
    index: PropTypes.number,
    deleteItem: PropTypes.func
}
```

## 子组件设置必填以及默认值
```
ServiceItem.defaultProps = {
    name:'111'
}
```

## ref绑定
坑:this.setState是一个异步方法,把要计算的代码放在回调函数中执行不会出错

## 生命周期
Initialization(setup props and state) |Mounting(componentWillMount,render,componentDidMount)|
Updation(componentWillReceiveProps--props独有,其他是props和state都有|shouldComponentUpdate|componentWillUpdate|componentDidUpdate)

## 组件优化 父组件值发生变化,还未影响到子组件的值。
可以在子组件中使用shouldComponentUpdate,通过返回true或false来控制子组件render。
```
    shouldComponentUpdate(nextProps, nextState) {
        if (nextProps.content !== this.props.content) {
            return true
        } else {
            return false
        }
    }
```

## react-transition-group动画库

unmountOnExit 动画结束删除dom元素

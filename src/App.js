import React, { Component } from 'react'

class App extends Component {
    render() {
        return (
            <ul className="my-list">
                <li>{false ? 'SmartHui.com' : '美慧'}</li>
                <li>Study React</li>
            </ul>
        )
        // var child1 = React.createElement('li', null, 'SmartHui.com')
        // var child2 = React.createElement('li',null,'Study React')
        // var root = React.createElement('ul', {className:'my-list'},child1,child2)        
    }
}

export default App
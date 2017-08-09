import React,{Component} from 'react'
import ReactDOM from 'react-dom'
import TimerComponent from './components/Timer'
class App extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return <TimerComponent></TimerComponent>
    }
}
ReactDOM.render(<App/>,document.getElementById('app-container'))

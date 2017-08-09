import React,{Component} from 'react'
import ReactDOM from 'react-dom'
import TimerComponent from './components/Timer'
import DetailsFormComponent from './components/DetailsFormComponent'
class App extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return <DetailsFormComponent inputs={['Name','Email','Phone']}></DetailsFormComponent>
    }
}
ReactDOM.render(<App/>,document.getElementById('app-container'))

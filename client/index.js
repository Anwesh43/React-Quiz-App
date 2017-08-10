import React,{Component} from 'react'
import ReactDOM from 'react-dom'
import TimerComponent from './components/Timer'
import DetailsFormComponent from './components/DetailsFormComponent'
import QuestionComponent from './components/QuestionComponent'
class App extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        const detailsHTML =  <DetailsFormComponent inputs={['Name','Email','Phone']}></DetailsFormComponent>
        const questionHTML = <QuestionComponent onanswer={(answer)=>{console.log(answer)}} question={{id:1,text:'Question',options:['A1','A2','A3','A4']}}/>
        return <div>{questionHTML}</div>
    }
}
ReactDOM.render(<App/>,document.getElementById('app-container'))

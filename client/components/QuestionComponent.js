import React,{Component} from 'react'
import Timer from './Timer'
import Button from './Button'
import Radio from './Radio'
export default class QuestionComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {btnState:false,answer:"",stopTimer:false}
    }
    componentDidMount(){
    }
    handleRadioClick(event) {
        this.setState({answer:event.target.value})
        if(!this.state.btnState) {
            this.setState({btnState:true})
        }
    }
    handleNextClick(event) {
      event.preventDefault()
      this.setState({btnState:false,stopTimer:true})
      setTimeout(()=>{
          if(this.props.onanswer) {
              this.props.onanswer(this.state.answer)
          }
      },10)

    }
    handleTimerComplete() {
        this.setState({answer:"",btnState:false,stopTimer:true})
        if(this.props.onanswer) {
            this.props.onanswer(this.state.answer)
        }
    }
    render() {
        const question = this.props.question
        const questionText = <tr><td><th>{question.id}. {question.text}</th></td></tr>
        const questionOptionsJSX =   this.props.question.options.map((option,index)=>(
            <Radio key={`input_${question.id}_${index}`} value={option} name={`input_${question.id}`} onClick={this.handleRadioClick.bind(this)}/>
        ))
        return (<div className="question-container">
                    <table>
                        <thead>
                            {questionText}
                        </thead>
                        <tbody>
                              {questionOptionsJSX}
                              <tr>
                                  <Button text="Next" onClick={this.handleNextClick.bind(this)} active={this.state.btnState}/>
                                  <td>
                                      <div className="timer-container"><Timer stop={this.state.stopTimer} oncomplete={this.handleTimerComplete.bind(this)}/></div>
                                  </td>
                              </tr>
                        </tbody>
                    </table>

              </div>)
    }
}

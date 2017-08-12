import React,{Component} from 'react'
import Timer from './Timer'
import StringUtil from '../StringUtil'
import Button from './Button'
export default class QuestionComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {btnState:false,answer:"",stopTimer:false}
    }
    componentDidMount(){
        this.props.question.options.forEach((option,index)=>{
            this.refs[`radio_${index}`].onclick = (event) => {
                this.setState({answer:option})
                if(!this.state.btnState) {
                    this.setState({btnState:true})
                }
            }
        })
        // this.refs["next"].onclick = (event) => {
        //     event.preventDefault()
        //     this.setState({btnState:false,stopTimer:true})
        //     if(this.props.onanswer) {
        //         this.props.onanswer(this.state.answer)
        //     }
        // }
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
        const questionText = <h3>{question.id}. {question.text}</h3>
        const questionOptions = this.props.question.options.map((option,index)=>(
          <tr key={`radio_row_${index}`}>
              <td>
                  <input value={option} type="radio"  name={`option_${this.props.question.id}`} ref={`radio_${index}`}/>
                  <span>{option}</span>
              </td>
          </tr>))
        return (<div className="question-container">
                    <table>
                        <thead>
                            {questionText}
                        </thead>
                        <tbody>
                              {questionOptions}
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

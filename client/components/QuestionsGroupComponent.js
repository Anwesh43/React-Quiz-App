import React,{Component} from 'react'
import ArrayUtil from '../ArrayUtil'
import QuestionComponent from './QuestionComponent'
export default class QuestionsGroupComponent extends Component  {
    constructor(props) {
        super(props)
        this.state = this.getInitialState()
    }
    getInitialState() {
        //Modifying the question json. As we need to pass options to a QuestionComponent
        //The correct_answer must be inserted to the array containing incorrect_answers at random position.
        const stateObj = {curr_question_index:0,correct_answers:0,answers:[],questions:[]}
        const questions = this.props.questions.map((questionObj,index)=>{
            var options = questionObj.incorrect_answers
            const text = questionObj.question
            const id = index+1
            ArrayUtil.addAtRandomPosition(options,questionObj.correct_answer)
            stateObj.answers.push(questionObj.correct_answer)
            return {options,text,id}
        })
        stateObj.questions = questions
        return stateObj
    }
    handleAnswerForCurrQuestion(answer) {
        var {curr_question_index,correct_answers} = this.state
        const curr_correct_answer = this.state.answers[curr_question_index]
        if(answer.trim() != "" && answer == curr_correct_answer) {
            correct_answers++
        }
        curr_question_index++
        this.setState({curr_question_index,correct_answers})
    }
    render() {
        const questionsHTML = this.state.questions.map((question,index)=>(
            <QuestionComponent key={`question_${index+1}`} question={question} onanswer={this.handleAnswerForCurrQuestion.bind(this)}/>
        ))
        var currQuestionHTML = questionsHTML[this.state.curr_question_index]
        return (<div className="question-group-container">
                    {currQuestionHTML}
                </div>)
    }
}

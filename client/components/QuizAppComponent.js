import React,{Component} from 'react'
import DetailsFormComponent from './DetailsFormComponent'
import QuestionsGroupComponent from './QuestionsGroupComponent'
import ResultComponent from './ResultComponent'
import RouterComponent from './RouterComponent'
import JsonFetcher from '../JsonFetcher'
import LoadingQuestionsComponent from './LoadingQuestionsComponent'
export default class QuizAppComponent extends Component {
    constructor(props) {
        super(props)
        this.state = this.getInitialState()
    }
    getInitialState() {
        return {questions:[],page_id:0,score:0,user_details:{},stop_loader:false}
    }
    handleDetailsFormSubmission(componentState) {
        var page_id = this.state.page_id+1
        this.setState({page_id})
        JsonFetcher.fetchJsonFromURL('https://opentdb.com/api.php?amount=10&type=multiple',(questions)=>{
            var user_details = componentState.user_details
            const stop_loader = true
            page_id += 1
            this.setState({stop_loader})
            this.setState({user_details,page_id,questions})
        })
    }
    handleQuizOver(componentState) {
        var score = componentState.correct_answers
        var page_id = this.state.page_id+1
        this.setState({page_id,score})
    }
    render() {
        console.log(this.state)
        return (<RouterComponent active={this.state.page_id}>
                    <DetailsFormComponent inputs={["Name","Phone","Email"]} ondeactivate={this.handleDetailsFormSubmission.bind(this)}/>
                    <LoadingQuestionsComponent stop={this.state.stop_loader}/>
                    <QuestionsGroupComponent questions={this.state.questions} ondeactivate={this.handleQuizOver.bind(this)}/>
                    <ResultComponent name={this.state.user_details.name} score={this.state.score} total={this.state.questions.length}/>
                </RouterComponent>)
    }
}

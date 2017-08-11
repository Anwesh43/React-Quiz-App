import React,{Component} from 'react'
import DetailsFormComponent from './DetailsFormComponent'
import QuestionsGroupComponent from './QuestionsGroupComponent'
import ResultComponent from './ResultComponent'
import RouterComponent from './RouterComponent'
export default class QuizAppComponent extends Component {
    constructor(props) {
        super(props)
        this.state = this.getInitialState()
    }
    getInitialState() {
        return {questions:[{"category":"Entertainment: Video Games","type":"multiple","difficulty":"easy","question":"What&#039;s the name of the main protagonist in the &quot;Legend of Zelda&quot; franchise?","correct_answer":"Link","incorrect_answers":["Mario","Zelda","Pit"]},{"category":"Entertainment: Video Games","type":"multiple","difficulty":"hard","question":"How many people can you recruit in the game Suikoden in a single playthrough?","correct_answer":"107","incorrect_answers":["108","93","96"]},{"category":"Entertainment: Books","type":"multiple","difficulty":"hard","question":"What is Hermione Granger&#039;s middle name?","correct_answer":"Jean","incorrect_answers":["Jane","Emma","Jo"]},{"category":"Entertainment: Music","type":"multiple","difficulty":"medium","question":"Which one of these artists appears in the album Deltron 3030?","correct_answer":"Dan the Automater","incorrect_answers":["Lamarr Kendrick","Danger Mouse","CeeLo Green"]},{"category":"Entertainment: Video Games","type":"multiple","difficulty":"medium","question":"When was &quot;Garry&#039;s Mod&quot; released?","correct_answer":"December 24, 2004","incorrect_answers":["November 13, 2004","December 13, 2004","November 12, 2004"]},{"category":"General Knowledge","type":"multiple","difficulty":"easy","question":"Which of these colours is NOT featured in the logo for Google?","correct_answer":"Pink","incorrect_answers":["Yellow","Blue","Green"]},{"category":"Entertainment: Film","type":"multiple","difficulty":"medium","question":"The 1939 movie &quot;The Wizard of Oz&quot; contained a horse that changed color, what material did they use to achieve this effect?","correct_answer":"Gelatin","incorrect_answers":["Dye","Paint","CGI Effect"]},{"category":"Entertainment: Music","type":"multiple","difficulty":"easy","question":"Kanye West&#039;s &quot;Gold Digger&quot; featured which Oscar-winning actor?","correct_answer":"Jamie Foxx","incorrect_answers":["Alec Baldwin","Dwayne Johnson"," Bruce Willis"]},{"category":"Science & Nature","type":"multiple","difficulty":"hard","question":"What is the same in Celsius and Fahrenheit?","correct_answer":"-40","incorrect_answers":["32","-39","-42"]},{"category":"Entertainment: Video Games","type":"multiple","difficulty":"hard","question":"How many aces can be shot down through the entirety of &quot;Ace Combat Zero: The Belkan War&quot;?","correct_answer":"169","incorrect_answers":["100","132","245"]}],page_id:0,score:0,user_details:{}}
    }
    handleDetailsFormSubmission(componentState) {
        var user_details = componentState.user_details
        var page_id = this.state.page_id+1
        this.setState({user_details,page_id})
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
                    <QuestionsGroupComponent questions={this.state.questions} ondeactivate={this.handleQuizOver.bind(this)}/>
                    <ResultComponent name={this.state.user_details.name} score={this.state.score} total={this.state.questions.length}/>
                </RouterComponent>)
    }
}

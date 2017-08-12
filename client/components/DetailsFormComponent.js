import React,{Component} from 'react'
import AnimationUtil from '../AnimationUtil'
import TextInput from './TextInput'
export default class DetailsFormComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {btnActive:false,opacity:1,user_details:{}}
    }
    handleKeyUp() {
      const emptyTextBoxes = this.props.inputs.filter((input)=>(this.refs[input.toLowerCase()].refs["input"].value.trim().length == 0))
      if(emptyTextBoxes.length == 0) {
          this.setState({btnActive:true})
      }
      else if(this.state.btnActive){
          this.setState({btnActive:false})
      }
    }
    getValueFromInput(input) {
        return this.refs[input].refs["input"].value
    }
    handleSubmit(event) {
        event.preventDefault()
        var user_details = {}
        for(let input of this.props.inputs) {
            user_details[input.toLowerCase()] = this.getValueFromInput(input.toLowerCase())
        }
        console.log(user_details)
        this.setState({btnActive:false,user_details})
        this.disableInputs()
        AnimationUtil.fadeOutComponent(this)
    }
    disableInputs() {
        this.props.inputs.forEach((input)=>{
            this.refs[input.toLowerCase()].refs["input"].setAttribute('readonly',true)
        })
    }
    render() {
        const inputs = this.props.inputs || []
        const inputJSX = inputs.map((input)=>(
          <TextInput key={input+"_input"} placeholder={input} keyup={this.handleKeyUp.bind(this)} ref={input.toLowerCase()}/>
        ))
        var buttonJSX = <button ref="submit" disabled onClick={this.handleSubmit.bind(this)}>Submit</button>
        if(this.state.btnActive) {
            buttonJSX = <button ref="submit" onClick={this.handleSubmit.bind(this)}>Submit</button>
        }
        return (<div style={{opacity:this.state.opacity}}>
                    <form>
                        <table>
                            <thead>
                                <h2>Welcome to trivia quiz</h2>
                            </thead>
                            <tbody>
                            {inputJSX}
                            <tr>
                                <td><h4>You have 60 minutes to answer all questions</h4></td>
                            </tr>
                            <tr>
                                <td>{buttonJSX}</td>
                            </tr>
                            </tbody>
                        </table>
                    </form>
                </div>)
    }
}

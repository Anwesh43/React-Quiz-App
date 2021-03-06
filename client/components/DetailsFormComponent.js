import React,{Component} from 'react'
import AnimationUtil from '../AnimationUtil'
import TextInput from './TextInput'
import Button from './Button'
import Select from './Select'
import categories from '../category_data'
export default class DetailsFormComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {btnActive:false,opacity:1,user_details:{},category:""}
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
    handleCategoryChange(event) {
        var category = event.target.value
        this.setState({category})
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
        return (<div style={{opacity:this.state.opacity}}>
                    <form>
                        <table>
                            <thead>
                                <tr><td><th>Welcome to trivia quiz</th></td></tr>
                            </thead>
                            <tbody>
                            {inputJSX}
                            <tr>
                                <td></td>
                            </tr>
                            <tr>
                                <Select options={categories} onChange={this.handleCategoryChange.bind(this)} keytext="category"/>
                            </tr>
                            <tr>
                                <td><h4>You have 60 minutes to answer all questions</h4></td>
                            </tr>
                            <tr>
                                <Button text="Submit" onClick={this.handleSubmit.bind(this)} active={this.state.btnActive}></Button>
                            </tr>
                            </tbody>
                        </table>
                    </form>
                </div>)
    }
}

import React,{Component} from 'react'
import AnimationUtil from '../AnimationUtil'
export default class DetailsFormComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {btnActive:false,opacity:1}
    }
    componentDidMount() {
        this.refs.submit.onclick = (event) => {
            this.handleSubmit(event)
        }
        this.props.inputs.forEach((input)=>{
            var textField = this.refs[input.toLowerCase()]
            textField.onkeyup = ()=>{
                if(!textField.getAttribute('readonly')) {
                    const emptyTextBoxes = this.props.inputs.filter((input)=>(this.refs[input.toLowerCase()].value.trim().length == 0))
                    console.log(emptyTextBoxes.length)
                    if(emptyTextBoxes.length == 0) {
                        this.setState({btnActive:true})
                    }
                    else if(this.state.btnActive){
                        this.setState({btnActive:false})
                    }
                }
            }
        })
    }
    handleSubmit(event) {
        event.preventDefault()
        this.setState({btnActive:false})
        this.disableInputs()
        AnimationUtil.fadeOutComponent(this)
    }
    disableInputs() {
        this.props.inputs.forEach((input)=>{
            this.refs[input.toLowerCase()].setAttribute('readonly',true)
        })
    }
    render() {
        const inputs = this.props.inputs || []
        const inputJSX = inputs.map((input)=>(
          <tr>
              <td>
                  <input type="text" placeholder={input} ref={input.toLowerCase()} key={input+"_input"}/>
              </td>
          </tr>
        ))
        var buttonJSX = <button ref="submit" disabled onClick={this.handleSubmit.bind(this)}>Submit</button>
        if(this.state.btnActive) {
            buttonJSX = <button ref="submit">Submit</button>
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

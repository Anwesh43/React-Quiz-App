import React,{Component} from 'react'
export default class DetailsFormComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {btnActive:false}
    }
    componentDidMount() {
        this.props.inputs.forEach((input)=>{
            this.refs[input.toLowerCase()].onkeyup = ()=>{
                const emptyTextBoxes = this.props.inputs.filter((input)=>(this.refs[input.toLowerCase()].value.trim().length == 0))
                console.log(emptyTextBoxes.length)
                if(emptyTextBoxes.length == 0) {
                    this.setState({btnActive:true})
                }
                else if(this.state.btnActive){
                    this.setState({btnActive:false})
                }
            }
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
        var buttonJSX = <button disabled>Submit</button>
        if(this.state.btnActive) {
            buttonJSX = <button>Submit</button>
        }
        return (<div>
                    <h2>Welcome to trivia quiz</h2>
                    <form>
                        <table>
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

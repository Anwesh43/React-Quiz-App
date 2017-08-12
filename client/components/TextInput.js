import React,{Component} from 'react'
export default class TextInput extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (<tr>
                  <td>
                    <input type="text" placeholder={this.props.placeholder} onKeyUp={this.props.keyup} ref="input"/>
                  </td>
                  <td></td>
               </tr>)
    }
}

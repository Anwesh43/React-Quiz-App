import React,{Component} from 'react'
import StringUtil from '../StringUtil'
export default class Radio extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return <tr>
                    <td>
                        <input value={this.props.value} type="radio"  name={this.props.name} ref="radio" onClick={this.props.onClick}/>
                        <span>{StringUtil.unescape(this.props.value)}</span>
                    </td>
                </tr>
    }
}

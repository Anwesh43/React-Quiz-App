import React,{Component} from 'react'
import StringUtil from '../StringUtil'
export default class Select extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        var optionJSX = this.props.options.map((opt,index)=>(<option key={`${this.props.keytext}_${index}`} value={opt["value"]}>{StringUtil.unescape(opt["text"])}</option>))
        return (<select onChange={this.props.onChange}>
              {optionJSX}
          </select>)
    }
}

import React,{Component} from 'react'
export default class Button extends Component {
    render() {
        var btnJsx = <button disabled>{this.props.text}</button>
        if(this.props.active) {
            btnJsx = <button onClick={this.props.onClick}>{this.props.text}</button>
        }
        return (<td>{btnJsx}</td>)
    }
}

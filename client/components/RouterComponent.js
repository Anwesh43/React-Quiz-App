import React,{Component} from 'react'
export default class RouterComponent extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        var activeComponentId = this.props.active
        return (<div className="component-container">
                    {this.props.children[activeComponentId]}
                </div>)
    }
}

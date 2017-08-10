import React,{Component} from 'react'
export default class ResultComponent extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (<div className="result-container">
                    <div className="result-text-container">
                        <h2>Quiz is over!</h2>
                        <h4>Hello {this.props.name}</h4>
                        <h4>You have got {this.props.score}/{this.props.total} correct</h4>
                    </div>
            </div>)
    }

}

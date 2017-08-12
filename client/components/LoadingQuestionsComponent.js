import React,{Component} from 'react'
export default class LoadingQuestionsComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {loadingCounter:0}
    }
    componentDidMount() {
        const interval = setInterval(()=>{
            if(this.props.stop) {
                console.log("stopped loader")
                clearInterval(interval)
            }
            else {
                var loadingCounter = (this.state.loadingCounter+1)%3
                this.setState({loadingCounter})
            }

        },150)
    }
    render() {
        var loadingIndicator = "."
        for(var i=0;i<this.state.loadingCounter;i++) {
            loadingIndicator += "."
        }
        return (<div className="loading-container">Loading Questions{loadingIndicator}</div>)
    }
}

import React,{Component} from 'react'
import  dimension from '../Dimensions'
export default class TimerComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {w:dimension.w/12,h:dimension.w/12}
    }
    componentDidMount() {
        window.onresize = (event) => {
            this.setState({w:window.innerWidth/12,h:window.innerWidth/12})
        }
        var deg = 0
        const canvas = this.refs.timerCanvas
        const context = canvas.getContext('2d')
        var w = canvas.width
        var h = canvas.height
        var drawTimer = (deg)=> {
            context.clearRect(0,0,w,h)
            context.globalAlpha = 0
            context.fillStyle = 'white'
            context.fillRect(0,0,w,h)
            context.globalAlpha = 1
            context.strokeStyle = '#9E9E9E'
            var r = Math.min(w,h)/3
            context.lineWidth = r/10
            context.font = context.font.replace(/\d{2}/,4*r/3)
            context.save()
            context.translate(w/2,h/2)
            context.beginPath()
            context.arc(0,0,5*r/4,-Math.PI/2,2*Math.PI)
            context.stroke()
            context.strokeStyle = '#01579B'
            context.beginPath()
            context.arc(0,0,5*r/4,-Math.PI/2,-Math.PI/2+deg*Math.PI/180)
            context.stroke()
            context.fillStyle = 'black'
            var text = `${deg/6}`
            var tw = context.measureText(text).width
            context.fillText(text,-tw/2,r/2)
            context.restore()
        }
        const interval = setInterval(()=>{
            deg += 6
            drawTimer(deg)
            if(deg == 360) {
                clearInterval(interval)
                if(this.props.oncomplete) {
                    this.props.oncomplete()
                }
            }
        },1000)
    }
    render() {
        return <canvas width={this.state.w} height={this.state.h} ref="timerCanvas">
        </canvas>
    }
}

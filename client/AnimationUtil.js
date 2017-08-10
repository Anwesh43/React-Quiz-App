export default class AnimationUtil {
    static fadeOutComponent(component) {
        if(component.state.opacity) {
          const interval = setInterval(()=>{
              var opacity = component.state.opacity - 0.1
              component.setState({opacity})
              if(opacity <= 0) {
                  clearInterval(interval)
              }
          },50)
        }
    }
}

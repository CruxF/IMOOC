import React from 'react'
const D = (WrappedComponent) => class NewComponent extends WrappedComponent {
  static displayName = `NewComponent(${getDisplayName(WrappedComponent)})`
  componentDidMount() {
    console.log('我是修改后的生命周期')
  }
  render() {
    const element = super.render();
    const newStyle = {
      color: element.type==='div'?'red':'green'
    }
    const newProps = {...this.props, style: newStyle}
    return React.cloneElement(element, newProps, element.props.children)
  }
}
function getDisplayName(WrappedComponent) {
  return WrappedComponent.displayName || WrappedComponent.name || 'Component'
}
export default D;
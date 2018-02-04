import React from 'react'
import ReactDOM from 'react-dom'

import App from './App'

/** Nee babel polyfill to execute async function from react component**/

// class App extends Component {
//   state = {
//     answer: 42
//   }
//
//   asyncFunc = () => {
//     return Promise.resolve(33)
//   }
//
//   async componentDidMount () {
//       this.setState({answer: await this.asyncFunc()})
//   }
//
//   render () {
//     return (
//       <h2>Hello react : {this.state.answer}</h2>
//     )
//   }
// }
//
// export default App

ReactDOM.render(
  <App />,
  document.getElementById('root')
)

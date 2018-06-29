import React from 'react'
import ReactDOM from 'react-dom'
import RandomHanzi from './RandomHanzi'
import ListDemo from './ListDemo'

function App(props) {
  return <div>
    <RandomHanzi/>
    <hr/>
    <ListDemo/>
  </div>
}

ReactDOM.render(<App/>, document.getElementById('main'))

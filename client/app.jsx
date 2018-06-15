import React from 'react'
import ReactDOM from 'react-dom'
// const List = require('@material-ui/core/List')
// const ListItem = require('@material-ui/core/ListItem')

import RandomHanzi from './RandomHanzi'

function App(props) {
  return <RandomHanzi/>
}

ReactDOM.render(<App/>, document.getElementById('main'))

const React = require('react')
const ReactDOM = require('react-dom')

class HelloWorld extends React.Component {
  render() {
    return <div>
      <h1>你好世界！</h1>
      <button className='btn btn-primary'>Change</button>
    </div>
  }
}

ReactDOM.render(<HelloWorld/>, document.getElementById('main'))

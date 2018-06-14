const React = require('react')
const ReactDOM = require('react-dom')
const axios = require('axios')

class HelloWorld extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      hanzi: '囧'
    }

    this.retrieveHanzi = this.retrieveHanzi.bind(this);
  }

  componentDidMount() {
    this.retrieveHanzi()
  }

  async retrieveHanzi() {
    let data = (await axios.get('/hanzi')).data
    console.log(data)
    this.setState({hanzi: data.text})
  }

  render() {
    return <div>
      <h1>随机汉字产生器</h1>
      <div class='hanzi'>{this.state.hanzi}</div>
      <button className='btn btn-primary' onClick={this.retrieveHanzi}>Generate</button>
    </div>
  }
}

ReactDOM.render(<HelloWorld/>, document.getElementById('main'))

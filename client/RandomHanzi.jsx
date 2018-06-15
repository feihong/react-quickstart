import axios from 'axios'
import React from 'react'
import Button from '@material-ui/core/Button'

export default class RandomHanzi extends React.Component {
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
      <div>Random Hanzi Generator</div>
      <div className='hanzi'>{this.state.hanzi}</div>
      <Button variant='contained' color='primary'
              onClick={this.retrieveHanzi}>Generate</Button>
    </div>
  }
}

import axios from 'axios'
import React from 'react'
import Button from '@material-ui/core/Button'
import { withStyles } from '@material-ui/core/styles'

const styles = theme => ({
  hanzi: {
    fontSize: 3.5 * theme.typography.fontSize
  },
  title: theme.typography.subheading,
})

class RandomHanzi extends React.Component {
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
    const {classes} = this.props
    return <div>
      <div className={classes.title}>Random Hanzi Generator</div>
      <div className={classes.hanzi}>{this.state.hanzi}</div>
      <Button variant='contained' color='primary'
              onClick={this.retrieveHanzi}>Generate</Button>
    </div>
  }
}

export default withStyles(styles)(RandomHanzi)

import React from 'react'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Button from '@material-ui/core/Button'

export default class ListDemo extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      items: ['朱元璋', '朱允炆', '朱棣', '朱高炽', '朱瞻基']
    }
    this.removeOne = this.removeOne.bind(this)
  }

  removeOne() {
    this.setState({items: this.state.items.slice(1)})
  }

  render() {
    const items = this.state.items.map(name =>
      <ListItem key={name} button>
        <ListItemText primary={name} />
        <ListItemSecondaryAction>
          <IconButton>
            <ExpandMoreIcon />
          </IconButton>
        </ListItemSecondaryAction>
      </ListItem>)
    return <div>
      <Button onClick={this.removeOne}>Remove one</Button>
      <List>
        {items}
      </List>
    </div>
  }
}

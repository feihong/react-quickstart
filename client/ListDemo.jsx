import React from 'react'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Button from '@material-ui/core/Button'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'

const options = [
  'Kowtow',
  'Send Tribute',
  'Overthrow',
  'Assassinate',
]

export default class ListDemo extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      items: ['朱元璋', '朱允炆', '朱棣', '朱高炽', '朱瞻基'],
      anchorEl: null,
    }
    this.removeOne = this.removeOne.bind(this)
    this.openMenu = this.openMenu.bind(this)
    this.closeMenu = this.closeMenu.bind(this)
  }

  openMenu(evt) {
    this.setState({anchorEl: evt.currentTarget})
  }

  closeMenu() {
    this.setState({anchorEl: null})
  }

  removeOne() {
    this.setState({items: this.state.items.slice(1)})
  }

  render() {
    const {anchorEl} = this.state

    const items = this.state.items.map(name =>
      <ListItem key={name} button>
        <ListItemText primary={name} />
        <ListItemSecondaryAction onClick={this.openMenu}>
          <IconButton>
            <ExpandMoreIcon />
          </IconButton>
        </ListItemSecondaryAction>
      </ListItem>)

    return <div>
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={this.closeMenu}>
        {options.map(option =>
          <MenuItem key={option} onClick={this.closeMenu}>
            {option}
          </MenuItem>
        )}
      </Menu>
      <Button onClick={this.removeOne}>Remove one</Button>
      <List>
        {items}
      </List>
    </div>
  }
}

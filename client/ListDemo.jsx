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
import FlipMove from 'react-flip-move'
import { withStyles } from '@material-ui/core/styles'

const styles = theme => ({
  button: {
    marginRight: theme.spacing.unit
  }
})

const options = [
  'Kneel',
  'Send Tribute',
  'Overthrow',
  'Assassinate',
]

class ListDemo extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      items: ['King Arther', 'Napoleon', 'Bowser', 'The Burger King'],
      anchorEl: null,
      addIndex: 1,
    }
    this.removeOne = this.removeOne.bind(this)
    this.addOne = this.addOne.bind(this)
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

  addOne() {
    let newItem = `Henry ${this.state.addIndex}`
    this.setState({
      items: [...this.state.items, newItem],
      addIndex: this.state.addIndex + 1,
    })
  }

  render() {
    const {anchorEl} = this.state
    const {classes} = this.props

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
      <Button variant='outlined' color='primary' className={classes.button}
              onClick={this.addOne}>Add one</Button>
      <Button variant='outlined' color='secondary'
              onClick={this.removeOne}>Remove one</Button>
      <List>
        <FlipMove>
          {items}
        </FlipMove>
      </List>
    </div>
  }
}

export default withStyles(styles)(ListDemo)

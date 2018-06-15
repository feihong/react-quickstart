import React from 'react'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'

export default class ListDemo extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      items: ['朱元璋', '朱允炆', '朱棣', '朱高炽', '朱瞻基']
    }
  }

  render() {
    const items = this.state.items.map(name =>
      <ListItem key={name} button>
        {name}
      </ListItem>)
    return <List>
      {items}
    </List>
  }
}

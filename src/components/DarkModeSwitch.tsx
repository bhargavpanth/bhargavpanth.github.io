import React from 'react'
import Switch from '@material-ui/core/Switch'

export function DarkModeSwitch() {
    const [state, setState] = React.useState({
      checked: true
    })
  
    const handleChange = (event: { target: { name: any, checked: any } }) => {
      setState({ ...state, [event.target.name]: event.target.checked })
    }
  
    return (
      <div>
        <Switch
          checked={state.checked}
          onChange={handleChange}
          color='secondary'
          name='checked'
          inputProps={{ 'aria-label': 'Dark mode' }}
        />
      </div>
    )
  }

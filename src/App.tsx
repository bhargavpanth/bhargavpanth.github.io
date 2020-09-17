import React from 'react'
import Grid from '@material-ui/core/Grid'
import Divider from '@material-ui/core/Divider'
import { makeStyles } from '@material-ui/core/styles'
import { Header } from './components/Header'
import { ProfileCard } from './components/ProfileCard'
import { ProfilePaper } from './components/ProfilePaper'
import './App.css'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  }
}))

function App() {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Grid container spacing={3} direction='column'>
        {/* Header */}
        <Grid item xs={12} container> <Header /> </Grid>

        <Grid item xs={12} container direction='row'>
          <Grid item xs={2}/>

          <Grid item xs={8} spacing={2} container>
            <Grid item xs={5}> <ProfileCard /> </Grid>
            <Grid item xs={2}> <Divider orientation='vertical' variant='inset' /> </Grid>
            <Grid item xs={5}> <ProfilePaper /> </Grid>
          </Grid>

          <Grid item xs={2}/>
        </Grid>

      </Grid>
    </div>
  )
}

export default App

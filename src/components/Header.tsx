import React from 'react'
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import { DarkModeSwitch } from './DarkModeSwitch'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    //   fontFamily: 'Ranchers'
    },
    button: {
        // fontFamily: 'Ranchers',
        // fontSize: 15
    },
    sectionDesktop: {
        // display: 'none',
        [theme.breakpoints.up('sm')]: {
          display: 'flex',
        },
      }
  }),
)

export function Header() {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <AppBar position='static'>
        <Toolbar>
            <Typography className={classes.title}>
                Bhargav Panth
            </Typography>
            <div className={classes.sectionDesktop}>
                <Button className={classes.button} color='inherit'>Blog</Button>
                <Button className={classes.button} color='inherit'>About</Button>
                <DarkModeSwitch/>
            </div>
        </Toolbar>
      </AppBar>
    </div>
  )
}
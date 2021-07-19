import React from "react"
import PropTypes from "prop-types"

// MaterialUI
import {
  Box, Typography, Button
} from '@material-ui/core'

import { makeStyles } from '@material-ui/core/styles'

// Fonts & assets
import '@fontsource/roboto'
import './styles/app.scss'

// Styles
const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(2),
    color: theme.palette.text.primary,
    textAlign: 'center',
  },
}))

// Main
function LocationUpdate() {
  const classes = useStyles()

  return (
    <>
      <Box className={classes.root}>
        <Typography>Update location</Typography>
      </Box>
    </>
  )
}

export default LocationUpdate

import React from "react"
import PropTypes from "prop-types"

// MaterialUI
import {
  CssBaseline, Box, Typography
} from '@material-ui/core'

import { makeStyles } from '@material-ui/core/styles'

// MaterialUI icons
import ImageIcon from '@material-ui/icons/Image'

// Fonts & assets
import '@fontsource/roboto'
import './styles/app.scss'

// Styles
const useStyles = makeStyles((theme) => ({
  listbox: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(2),
    color: theme.palette.text.secondary,
  },
}))

// Main
function FavoritesRestaurants() {
  const classes = useStyles()

  return (
    <>
      <Box display="flex" mb={1} justifyContent="flex-start" alignItems="center" className={classes.listbox}>
        <Box mr={1}><ImageIcon /></Box>
        <Typography color="textSecondary">Fav</Typography>
      </Box>

      <Box display="flex" mb={1} justifyContent="flex-start" alignItems="center" className={classes.listbox}>
        <Box mr={1}><ImageIcon /></Box>
        <Typography color="textSecondary">Fav</Typography>
      </Box>

      <Box display="flex" mb={1} justifyContent="flex-start" alignItems="center" className={classes.listbox}>
        <Box mr={1}><ImageIcon /></Box>
        <Typography color="textSecondary">Fav</Typography>
      </Box>

      <Box display="flex" mb={1} justifyContent="flex-start" alignItems="center" className={classes.listbox}>
        <Box mr={1}><ImageIcon /></Box>
        <Typography color="textSecondary">Fav</Typography>
      </Box>
    </>
  )
}

export default FavoritesRestaurants

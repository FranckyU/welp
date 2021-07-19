import React from "react"
import PropTypes from "prop-types"

// MaterialUI
import {
  CssBaseline, Container, Box, BottomNavigation, BottomNavigationAction
} from '@material-ui/core'

import { makeStyles } from '@material-ui/core/styles'

// MaterialUI icons
import HomeIcon from '@material-ui/icons/Home'
import FavoriteIcon from '@material-ui/icons/Favorite'
import EditLocationIcon from '@material-ui/icons/EditLocation'

// Fonts & assets
import '@fontsource/roboto'
import logo from './assets/logo/vector/default-monochrome.svg'
import './styles/app.scss'

// Child components
import Restaurants from './Restaurants.js'
import FavoritesRestaurants from './FavoritesRestaurants.js'
import LocationUpdate from './LocationUpdate.js'

// Styles
const useStyles = makeStyles((theme) => ({
  stickToBottom: {
    width: '100%',
    position: 'fixed',
    bottom: 0,
  },
}))

// Main
function App() {
  const classes = useStyles()
  const [screen, setScreen] = React.useState('home')

  const navigateTo = (event, newScreen) => {
    setScreen(newScreen)
  }

  let currentScreen

  if (screen == 'home') {
    currentScreen = <Restaurants />
  } else if(screen == 'favorites') {
    currentScreen = <FavoritesRestaurants />
  } else {
    currentScreen = <LocationUpdate />
  }

  return (
    <>
      <CssBaseline />
      <Container fixed>
        <Box textAlign="center" my={4}>
          <img src={logo} width={130}/>
        </Box>

        {currentScreen}
      </Container>

      <BottomNavigation
        value={screen}
        onChange={navigateTo}
        className={classes.stickToBottom}
      >
        <BottomNavigationAction label="Home" value="home" icon={<HomeIcon />} />
        <BottomNavigationAction label="Favorites" value="favorites" icon={<FavoriteIcon />} />
        <BottomNavigationAction label="My location" value="location" icon={<EditLocationIcon />} />
      </BottomNavigation>
    </>
  )
}

export default App

import React from 'react'
import { connect } from 'react-redux'
import {
  addToFavoritesAction,
  removeCharacterAction,
} from '../../redux/charsDuck'
import Card from '../card/Card'
import styles from './home.module.css'

function Home({ chars, removeCharacterAction, addToFavoritesAction }) {
  function renderCharacter() {
    let char = chars[0]
    return <Card leftClick={nextCharacter} rightClick={addFav} {...char} />
  }

  function nextCharacter() {
    removeCharacterAction()
  }

  function addFav() {
    addToFavoritesAction()
  }

  return (
    <div className={styles.container}>
      <h2>Personajes de Rick y Morty</h2>
      <div>{renderCharacter()}</div>
    </div>
  )
}

// get the state (store) from redux and add it to the props of this (Home) component
function mapState(state) {
  return {
    chars: state.characters.array,
  }
}

export default connect(mapState, {
  removeCharacterAction,
  addToFavoritesAction,
})(Home)

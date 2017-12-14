import React, { Component } from 'react'
import styles from './styles.scss'

export default class App extends Component {
  render () {
    return (
      <div className={styles.main}>
        <div className={styles.topic} />
      </div>
    )
  }
}

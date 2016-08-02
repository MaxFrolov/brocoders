import React, { Component } from 'react'
import Helmet from 'react-helmet'
import styles from './Portfolio.scss'

export default class Portfolio extends Component {

  render() {
    return (
      <div className={styles['portfolio-wrapper']}>
        <h1>Portfolio</h1>
        <Helmet title="Widgets"/>
      </div>
    )
  }
}


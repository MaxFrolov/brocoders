import React, { Component } from 'react'
// components
import Helmet from 'react-helmet'
import { asyncConnect } from 'redux-async-connect'
// styles
import styles from './Home.scss'

@asyncConnect([
  {key: 'projects', promise: ({ helpers }) => {
    return helpers.client.get('/projects')
      .then((projects) => {
        return projects
      })
  }}
])

export default class Home extends Component {
  render() {
    return (
      <div className={styles['home-wrapper']}>
        <Helmet title="Home"/>
        <div className={styles['home-main-section']}>
          <h1 className="text-center">Brocoders</h1>
        </div>
      </div>
    )
  }
}

import React, { Component, PropTypes } from 'react'
// components
import Helmet from 'react-helmet'
import { MainLayoutHeader } from 'components'
import { routerActions } from 'react-router-redux'
import { asyncConnect } from 'redux-async-connect'
// utils
import config from '../../config'
import { connect } from 'react-redux'
// styles
import styles from './App.scss'

@asyncConnect([{
  promise: () => Promise.resolve()
}])

@connect(state => ({loaded: state.reduxAsyncConnect.loaded}),
  {pushState: routerActions.push})
export default class App extends Component {
  static propTypes = {
    children: PropTypes.object.isRequired
  }

  render() {
    return (
      <div className={styles['app']}>
        <Helmet {...config.app.head}/>
        <MainLayoutHeader />
        <div>
          {this.props.children}
        </div>
      </div>
    )
  }
}

import React from 'react'
import styles from './styles.module.css'
import { EffectScreen } from './components/index'

export const ExampleComponent = ({ text }) => {
  return <div className={styles.test}>Example Component: {text}</div>
}

export { EffectScreen }

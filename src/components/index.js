import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import styles from './styles.scss'

const EffectScreen = (props) => {
  const [show, setShow] = useState(true)

  const [iconEffect, setIconEffect] = useState({})

  const { number, icon, delayTime } = props

  useEffect(() => {
    setShow(true)
    const backgroundId = document.getElementById('background-effect-library')
    let timer = null
    backgroundId.addEventListener(
      'mousemove',
      (event) => {
        setShow(false)
        timer = setTimeout(() => {
          setShow(true)
        }, delayTime)
      },
      false
    )
    const icons = {}
    for (let index = 0; index < number; index++) {
      icons[index] = { id: index, icon }
    }
    setIconEffect(icons)

    return () => {
      clearTimeout(timer)
    }
  }, [number, icon, delayTime])
  return (
    <div id='background-effect-library'>
      <div className={styles.backgroundEffectLibrary}>
        <snowfall>
          {show &&
            Object.values(iconEffect).map((item) => (
              <snowflake key={item.id}>
                <span role='img' aria-label='peach-blossom'>
                  {item.icon}
                </span>
              </snowflake>
            ))}
        </snowfall>
      </div>
    </div>
  )
}

EffectScreen.propTypes = {
  icon: PropTypes.string,
  number: PropTypes.number,
  delayTime: PropTypes.number
}

EffectScreen.defaultProps = {
  icon: '🌸',
  number: 10,
  delayTime: 5000
}

export { EffectScreen }

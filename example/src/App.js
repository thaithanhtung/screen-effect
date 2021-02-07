import React from 'react'
import './styles.css'
import { EffectScreen } from 'screen-effect'
import 'screen-effect/dist/index.css'

const App = () => {
  return (
    <div>
      <div className='image-background'>
        <img
          alt=''
          src='https://images.wallpapersden.com/image/download/background-of-fortnite-chapter-2_a2xlbGWUmZqaraWkpJRsa21lrWloZ2U.jpg'
        />
      </div>
      <EffectScreen />
    </div>
  )
}

export default App

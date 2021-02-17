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
          src='https://firebasestorage.googleapis.com/v0/b/grand-team.appspot.com/o/wallpapersden.com_background-of-fortnite-chapter-2_7680x4320.jpg?alt=media&token=f0995da0-c822-4e65-a15d-793dc1c29e3e'
        />
      </div>
      <EffectScreen />
    </div>
  )
}

export default App

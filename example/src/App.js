import React from 'react'

import { ExampleComponent, EffectScreen } from 'screen-effect'
import 'screen-effect/dist/index.css'

const App = () => {
  return (
    <div>
      <ExampleComponent text='Create React Library Example 😄' />
      <EffectScreen icon='😆' />
    </div>
  )
}

export default App

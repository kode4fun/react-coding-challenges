import React from 'react'
import CountDown2 from './Countdown2'

const App = () => {
  return (
    <div className="container">
      <h1>React coding challenges</h1>
      <div className="flex-row">
        <div className="flex-large">
          <h2>Hello</h2>
        </div>
        <div className="flex-large">
          <h2>World</h2>
        </div>
        <div className="flex-large">
          <CountDown2 countStart={5} />
        </div>

      </div>
    </div>
  )
}

export default App
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
		<h1>Welcome!</h1>
		<p>This page is currently a work in progress, so sorry! Come back at a later time while I
			continue to work on my site in private until I decide it's in a state where it's ready to publish.
		</p>
      </div>
    </>
  )
}

export default App

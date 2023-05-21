import Nav from "./components/Nav.jsx"
import Card from "./components/Card.jsx"

import data from "./destinations.js"

export default function App() {
  const cards = data.map(card => {
    return <Card 
              key={card.id}
              {...card}
           />
  })

  return (
    <div className="container">
      <Nav />
      <main>
          {cards}
      </main>
    </div>
  )
}
import { Button } from './components/Button.jsx'

function App() {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '20px',
        flexWrap: 'wrap',
      }}
    >
      <Button>Normal</Button>
      <Button outline>Outline</Button>
      <Button
        className="extra-class"
        onClick={() => {
          console.log('Button clicked')
        }}
      >
        Customizable
      </Button>
    </div>
  )
}

export default App

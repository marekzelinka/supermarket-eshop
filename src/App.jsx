import { Button } from './components/Button.jsx'
import { Input } from './components/Input.jsx'

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
      <Input placeholder="First name" />
      <Input
        placeholder="Last name"
        onInput={() => {
          console.log('Last name changed')
        }}
      />
      <Input placeholder="Email" type="email" required />
    </div>
  )
}

export default App

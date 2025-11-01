import './App.css'
import { useState, type ChangeEvent } from 'react'
import { Input } from './components/Input.tsx'
import { ZoneTable } from './components/table/ZoneTable.tsx'
import { PercentageTable } from './components/table/PercentageTable.tsx'

function App() {
  const [inputValue, setInputValue] = useState('1500') // valor inicial del input

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value)
  }

  const meters = Number.isFinite(Number(inputValue)) ? Number(inputValue) : 0

  return (
    <>
      <h1>Calculadora VAM</h1>
      <p style={{ textWrap: 'balance', maxWidth: '600px', marginInline: 'auto' }}>
        Introduce la <strong>distancia (en metros)</strong> que corriste en <strong>5 minutos</strong> para calcular tus ritmos de entrenamiento.
      </p>
      <div style={{ 
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem',
        marginTop: '1rem'
        }}>
        <Input 
          type='number'
          placeholder='Ejemplo: 1500'
          value={inputValue}
          onChange={handleInputChange}
          min={1}
          step={1}
        />
      </div>

      <ZoneTable testMeters={meters} />
      <PercentageTable testMeters={meters} />
    </>
  )
}

export default App

import { useState } from 'react'
import './App.css'

function App() {
  const [catA, setCatA] = useState<number | string>('')
  const [catB, setCatB] = useState<number | string>('')
  const [kValue, setKValue] = useState<number | string>('')
  const [knowsK, setKnowsK] = useState(false)
  const [hypotenuse, setHypotenuse] = useState<number | null>(null)
  const [k, setK] = useState<number | null>(null)
  const [showFormula, setShowFormula] = useState(false)

  // Calcula K baseado na fórmula: K = ((a/b)^2 + 1)^0.5 - a/b
  const calcularK = (a: number, b: number): number => {
    const div = a / b
    const k = Math.sqrt(div * div + 1) - div
    return k
  }

  // Calcula C usando a fórmula: C = K * B + A
  const calcularC = (a: number, b: number, k: number): number => {
    const c = k * b + a
    return c
  }

  const handleCalculate = () => {
    const a = parseFloat(catA as string)
    const b = parseFloat(catB as string)

    if (isNaN(a) || isNaN(b) || a <= 0 || b <= 0) {
      alert('Por favor, insira valores válidos maiores que zero')
      return
    }

    let calculatedK: number
    if (knowsK) {
      const kInput = parseFloat(kValue as string)
      if (isNaN(kInput) || kInput <= 0) {
        alert('Por favor, insira um valor válido para K')
        return
      }
      calculatedK = kInput
    } else {
      calculatedK = calcularK(a, b)
    }

    const c = calcularC(a, b, calculatedK)
    setK(parseFloat(calculatedK.toFixed(4)))
    setHypotenuse(parseFloat(c.toFixed(2)))
  }

  const handleClear = () => {
    setCatA('')
    setCatB('')
    setKValue('')
    setKnowsK(false)
    setHypotenuse(null)
    setK(null)
    setShowFormula(false)
  }

  return (
    <div className="container">
      <div className="calculator-wrapper">
        <h1>Calculadora de Hipotenusa</h1>
        <p className="subtitle">Fórmula personalizada: C = K × B + A</p>

        <div className="formula">
          <p>C = K × B + A</p>
          <p className="formula-k">K = √((A/B)² + 1) - A/B</p>
        </div>

        <div className="input-group">
          <div className="input-field">
            <label htmlFor="catA">Cateto A (menor):</label>
            <input
              id="catA"
              type="number"
              value={catA}
              onChange={(e) => setCatA(e.target.value)}
              placeholder="Digite o valor"
              step="0.01"
            />
          </div>

          <div className="input-field">
            <label htmlFor="catB">Cateto B (maior):</label>
            <input
              id="catB"
              type="number"
              value={catB}
              onChange={(e) => setCatB(e.target.value)}
              placeholder="Digite o valor"
              step="0.01"
            />
          </div>

          <div className="toggle-k">
            <label>
              <input
                type="checkbox"
                checked={knowsK}
                onChange={(e) => setKnowsK(e.target.checked)}
              />
              Você já sabe o valor de K?
            </label>
          </div>

          {knowsK && (
            <div className="input-field">
              <label htmlFor="kValue">Valor de K:</label>
              <input
                id="kValue"
                type="number"
                value={kValue}
                onChange={(e) => setKValue(e.target.value)}
                placeholder="Digite o valor de K"
                step="0.0001"
              />
            </div>
          )}
        </div>

        <div className="button-group">
          <button className="btn btn-primary" onClick={handleCalculate}>
            Calcular
          </button>
          <button className="btn btn-secondary" onClick={handleClear}>
            Limpar
          </button>
        </div>

        {hypotenuse !== null && (
          <div className="result">
            <h2>Resultado</h2>
            <div className="result-box">
              <div className="result-item">
                <p className="result-label">Coeficiente K:</p>
                <p className="result-value-k">{k}</p>
              </div>
              <div className="result-item">
                <p className="result-label">Hipotenusa (C):</p>
                <p className="result-value">{hypotenuse}</p>
              </div>
            </div>
          </div>
        )}

        <div className="formula-toggle">
          <button
            className="toggle-btn"
            onClick={() => setShowFormula(!showFormula)}
          >
            {showFormula ? '▼' : '▶'} Ver explicação da fórmula
          </button>
          {showFormula && (
            <div className="formula-explanation">
              <p>
                <strong>Fórmula Personalizada:</strong> C = K × B + A
              </p>
              <p>
                Onde K é calculado como:
              </p>
              <p className="formula-code">
                K = √((A/B)² + 1) - A/B
              </p>
              <p>
                Esta fórmula foi criada para calcular a hipotenusa de forma alternativa ao Teorema de Pitágoras tradicional.
              </p>
            </div>
          )}
        </div>

        <div className="triangle-visualization">
          <svg viewBox="0 0 300 250" width="300" height="250">
            {/* Triângulo retângulo */}
            <polygon
              points="50,200 250,200 250,50"
              fill="rgba(199, 160, 0, 0.1)"
              stroke="var(--gold)"
              strokeWidth="2"
            />

            {/* Ângulo reto */}
            <rect x="235" y="185" width="15" height="15" fill="none" stroke="var(--gold)" strokeWidth="2" />

            {/* Rótulos dos lados */}
            <text x="150" y="225" textAnchor="middle" className="label">
              A = {catA || '?'}
            </text>
            <text x="270" y="130" textAnchor="start" className="label">
              B = {catB || '?'}
            </text>
            <text x="140" y="110" textAnchor="middle" className="label hypotenuse-label">
              C = {hypotenuse || '?'}
            </text>
          </svg>
        </div>

        <div className="info">
          <h3>Como usar:</h3>
          <ol>
            <li>Insira o valor do cateto A (menor)</li>
            <li>Insira o valor do cateto B (maior)</li>
            <li>Escolha se você sabe o valor de K ou deixe calcular automaticamente</li>
            <li>Clique em "Calcular"</li>
            <li>O resultado será exibido automaticamente</li>
          </ol>
        </div>

        <div className="footer">
          <p>✨ Saindo da magia de Gabriel ✨</p>
        </div>
      </div>
    </div>
  )
}

export default App

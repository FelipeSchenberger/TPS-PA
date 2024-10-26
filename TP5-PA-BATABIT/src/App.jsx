import { Header } from './components/Header'
import { Caracteristicas } from './components/Caracteristicas'
import { ApiPart } from './components/ApiPart'
import { Pago } from './components/Pago'
import { Footer } from './components/Footer'
import './index.css'

function App() {
 
  return (
    <div>
      <Header />
      <ApiPart />
      <Caracteristicas />
      <Pago />
      <Footer />
    </div>
    
  )
}

export default App

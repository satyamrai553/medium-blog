import { Outlet } from 'react-router-dom'
import Appbar from './components/Appbar'
import Footer from './components/Footer'

function App() {

  return (
    <div className="flex flex-col min-h-screen">
    <Appbar />
    <main className="flex-grow">
      <Outlet />
    </main>
    <Footer />
  </div>
  )
}

export default App
import { RouterProvider } from 'react-router-dom'
import './App.css'
import { router } from './routes/Router'

function App() {

  return (
    <div className='bg-black text-white'>
      <RouterProvider router={router} />
    </div>
  )
}

export default App

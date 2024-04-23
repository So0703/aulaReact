import { createBrowserRouter } from 'react-router-dom'
import Home from './pages/home'
import Sobre from './pages/sobre'
import NotFound from './pages/404'
import Tarefas from './pages/tarefas'
import Contato from './pages/contato'

const router = createBrowserRouter([
  {path: '/', element: <Home />, errorElement: <NotFound />},
  {path: '/sobre', element: <Sobre />},
  {path: '/tarefas', element: <Tarefas />},
  {path: '/contato', element: <Contato />}
])

export default router
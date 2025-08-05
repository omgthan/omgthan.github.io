import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './Pages/App.tsx'
import NotFound from './Pages/NotFound.tsx'
import About from './Pages/About.tsx'
import Projects from './Pages/Projects.tsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([
	{path: "/", element: <App />},
	{path: "/about", element: <About />},
	{path: "/projects", element: <Projects />},
	{path: "*", element: <NotFound />}
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
	<RouterProvider router = {router} />
  </StrictMode>,
)

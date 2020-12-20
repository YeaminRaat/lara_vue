import About from './components/about'
import Test from './components/test'
import Layout from './components/layouts/admin'

export const routes = [
  { 
  	path: '/about', 
  	component: About
  },
  { 
  	path: '/test', 
  	component: Test
  },
  { 
  	path: '/admin-dashboard', 
  	component: Layout
  },
]
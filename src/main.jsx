import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, createRoutesFromElements, RouterProvider,Route } from 'react-router-dom'
import Layout from './Layout.jsx'
// import Home from './components/Home/Home.jsx'
// import About from './components/About/About.jsx'
// import Contact from './components/Contact/Contact.jsx'

import {About,Contact,Footer,Header,Home,User,Github} from './components';
import { githubInfoLoader } from './components/Github/Github.jsx'
import Text from './components/Text.jsx'


// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Layout/>,
//     children:[
//       {
//         path:"",
//         element:<Home/>
//       },
//       {
//         path:"about",
//         element:<About/>
//       },
//       {
//         path:"contact",
//         element:<Contact/>
//       }
//     ]
//   }
// ])

// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route path='/' element={<Layout/>}>
//        <Route path="" element={<Home/>}/>
//        <Route path="about" element={<About/>}>
//         <Route path="test" element={<Github/>}/> 
//         </Route>
//        <Route path="contact" element={<Contact/>}/>
//        <Route path="user/:userid" element={<User/>}/>
//        <Route 
//        loader={githubInfoLoader}
//        path="github"
//         element={<Github/>}/>
//     </Route>
//   )
// )


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
       <Route path="" element={<Home/>} />
       <Route path="about" element={<About/>}/>
       <Route path="contact" element={<Contact/>} />
       <Route path="user/:userid" element={<User/>} />
       <Route 
         path="github"
         loader={githubInfoLoader}
         element={<Github />} 
       />
        
    </Route>
  )
);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/> 
  
  </StrictMode>,
)

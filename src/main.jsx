import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
// routes 
import Root from './routes/root.jsx';
import Login from './components/Login.jsx';
import Signup from './components/Signup.jsx';
import PostPage from './components/PostPage.jsx';
import PostsView from './components/PostsView.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: ':postId',
        element: <PostPage /> 
      },
      {
        path: '',
        element: <PostsView />
      }
    ]
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/signup',
    element: <Signup/>
  }
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

import '../styles/App.css';

import { createBrowserRouter, RouterProvider } from 'react-router-dom'

/** import components */
import Main from './Main';
import Quiz from './Quiz';
import Result from './Result';
import { CheckUserExist } from '../helper/helper';
import Select from './Select';


/** react routes */
const router = createBrowserRouter([
  {
    path : '/',
    element : <Main></Main>
  },
  {
    path : '/quiz',
    element : <CheckUserExist><Quiz /></CheckUserExist>
  },
  {
    path : '/result',
    element : <CheckUserExist><Result /></CheckUserExist>
  },
  {
    path : '/select',
    element : <Select></Select>
  }
])

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;

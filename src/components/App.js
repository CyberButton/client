import '../styles/App.css';
import { createBrowserRouter, RouterProvider} from "react-router-dom"

/**import components */
import Main from './Main';

/**react routers */
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>
  },
  {
    path: "/quiz",
    element: <div>Quiz Element</div>
  },
  {
    path: "/result",
    element: <div>Result Element</div>
  }
])

function App() {
  return (
    <>
      <RouterProvider router={router}/>
    </>
  );
}

export default App;

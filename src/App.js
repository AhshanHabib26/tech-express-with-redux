import {RouterProvider}  from 'react-router-dom'
import routes from './routers/Routes';


function App() {
  return (
    <div>
      <RouterProvider router={routes}/>
    </div>
  );
}

export default App;

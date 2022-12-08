import { RouterProvider } from 'react-router-dom';
import routes from './routers/Routes';
import { Provider } from 'react-redux';
import store from './redux/store/store';

function App() {
  return (
    <div>
      <Provider store={store}>
        <RouterProvider router={routes} />
      </Provider>
    </div>
  );
}

export default App;

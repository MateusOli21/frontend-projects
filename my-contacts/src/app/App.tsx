import { ToastContainer } from 'react-toastify';

import { AppRoutes } from '@app/infra/routes';
import { makeServer } from './infra/services/mirage';

import 'react-toastify/dist/ReactToastify.min.css';

if (process.env.NODE_ENV === 'development') {
  makeServer();
}

function App() {
  return (
    <>
      <AppRoutes />
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        newestOnTop={false}
        rtl={false}
        closeOnClick
        hideProgressBar
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  );
}

export default App;

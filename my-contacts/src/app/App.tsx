import { AppRoutes } from '@app/infra/routes';
import { makeServer } from './infra/services/mirage';

if (process.env.NODE_ENV === 'development') {
  makeServer();
}

function App() {
  return <AppRoutes />;
}

export default App;

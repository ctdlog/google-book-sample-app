import TanstackQueryProvider from './components/tanstack-query-provider';
import HomePage from './features/home/home.page';

import './styles/reset.css';

function App() {
  return (
    <TanstackQueryProvider>
      <HomePage />
    </TanstackQueryProvider>
  );
}

export default App;

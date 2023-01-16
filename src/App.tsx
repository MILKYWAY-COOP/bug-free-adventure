import { Navbar, Footer } from './Components';
import { AppRoutes } from './Routes';

function App() {
  return (
    <div className='all'>
      <Navbar />
      <AppRoutes />
      <Footer />
    </div>
  );
}

export default App;

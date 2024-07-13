import './App.css';
import FirstPage from './Pages/FirstPage';
import SecondPage from './Pages/SecondPage';
import ThirdPage from './Pages/ThirdPage';
import Header from './Componets/Header';
import Footer from './Componets/Footer';

function App() {
  return (
    <div>
      <Header />
      <FirstPage />
      <SecondPage />
      <ThirdPage />
      <Footer/>
    </div>
  );
}

export default App;

import Footer from './components/Footer';
import NavComponent from './components/NavComponent';
import MainBody from './components/MainBody';
import WordContextProvider, { wordContext } from './components/WordContext';

function App() {
  return (
    <WordContextProvider>
      <div className="App">
        <NavComponent />
        <MainBody />
        <Footer />
      </div>
    </WordContextProvider>
  );
}

export default App;

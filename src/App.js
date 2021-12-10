import './App.css';
import Title from './components/title/Title';
import ContentModalButtons from './components/contentModal/ContentModal';


function App() {
  return (
    <div className="App">
      <div className="App-header">
        <Title
          title="Próxima mente"
          fontSizeTitle="5.6"
          subTitle="¡Vamos a celebrar el lanzamiento de mi nuevo sitio web!"
          fontSizeSubtitle="1.8"
        />
        <ContentModalButtons />
      </div>
    </div>
  );
}

export default App;

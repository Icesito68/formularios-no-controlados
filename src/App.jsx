import './App.css';
import FormularioPregunta from './components/FormularioPregunta.jsx';
import PreguntasCreadas from './components/PreguntasCreadas.jsx';
import { QuestionsProvider } from './providers/QuestionsProvider';

function App() {
  return (
    <QuestionsProvider>
      <FormularioPregunta />
      <PreguntasCreadas />
    </QuestionsProvider>
  );
}

export default App;

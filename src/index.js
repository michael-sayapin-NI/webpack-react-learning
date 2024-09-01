import ReactDOM from 'react-dom';

function App() {
  return <h1>Rick and Morty API</h1>
}

const rootElement = document.getElementById('root');
const container = ReactDOM.createRoot(rootElement);
container.render(<App />);

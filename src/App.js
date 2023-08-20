import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navigation from './components/Navigation';
function App() {
  return (
    <div className="App">
      <header className="App-header">
       <Navigation/>
       <h1 className='mt-5'>Framework Bootstrap with React</h1>
      </header>
    </div>
  );
}

export default App;

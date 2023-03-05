import logo from './logo.svg';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Badge from 'react-bootstrap/Badge';
import BasicExample from './components/example';
function App() {
  return (
      <div className='one'>
        <div>
            <BasicExample/>
        </div>
      </div>
    );
  }

export default App;

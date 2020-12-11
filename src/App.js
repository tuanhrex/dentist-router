import { BrowserRouter, Route} from 'react-router-dom'

import Home from './components/Home'
import Contact from './components/Contact'
import Procedures from './components/Procedures'
import ProcedureDetails from './components/ProcedureDetails'
import Nav from './components/Nav'

import './App.css';

function App() {
  const proceduresList = [
    {
      name: 'Root Canal',
      id: 1,
      description: "Very Painful"
    }, {
      name:'Cleaning',
      id: 2,
      description: "Not Painnful"
    }, {
      name: 'Crown',
      id: 3,
      description: "Not as painful as you expect"
    }]


  return (
    <BrowserRouter>
      <div className="App">
        <nav>
          
        <Nav />
        </nav>
        <Route path="/" exact component={Home} />
        <Route path="/contact" component={Contact} />
        <Route 
          path="/procedures" 
          exact
          render= {() => {return <Procedures proceduresList={proceduresList} />}}
          
        />
        <Route 
          path="/procedures/:id" 
          render={(routeInfo) => {
            const id = routeInfo.match.params.id
            const targetProcedure = proceduresList.find((p) => p.id === parseInt(id))
            return <ProcedureDetails procedure={targetProcedure}/>
          }} 
          />
        
        
      </div>
    </BrowserRouter>
  );
}

export default App;

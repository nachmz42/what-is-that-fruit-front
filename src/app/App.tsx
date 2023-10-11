
import Front from '@pages/Front';
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';

function App() {

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Front/>}></Route>
      </Routes>
    </Router>
  )
}

export default App

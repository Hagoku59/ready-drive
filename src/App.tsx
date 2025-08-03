import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import './App.css'
import Rent from './components/Rent';
import Management from './components/Management';
import Layout from './components/Layout';

const App = (): React.JSX.Element => {
  

  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route index path="/" Component={Rent} />
          <Route path="management" Component={Management} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App;

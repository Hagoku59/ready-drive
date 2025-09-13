import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import './App.css'
import Rent from './components/Rent';
import Management from './components/Management';
import Layout from './components/Layout';
import SignIn from './components/SignIn';

const App = (): React.JSX.Element => {
  

  return (
    <Router>
      <Routes>
        <Route index path="/" Component={SignIn} />
        <Route element={<Layout />}>
        
          <Route path="/rentandbooking" Component={Rent} />
          <Route path="management" Component={Management} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App;

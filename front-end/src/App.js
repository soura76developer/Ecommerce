import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import ProductListing from './components/ProductListing.js';
import './css/global.css';

function App() {
  return (

   <>
    <Router>
      <Routes>
        <Route index element={<ProductListing />} />
      </Routes>
    </Router>
   </>
   
   //In React, we have to import the router; it is not built with React. Routing is basically to redirect the pages from one page to another. I have used the index attribute to display that component inside the element attribute by default.
  );
}

export default App;

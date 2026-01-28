import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import YerihoLandingPage from './components/yerihoLandingPage';

// Placeholder components for internal pages
const PageOne = () => <h1 style={{ textAlign: 'center' }}>Welcome to Page One!</h1>;
const PageTwo = () => <h1 style={{ textAlign: 'center' }}>Welcome to Page Two!</h1>;

function App() {
  return (
    <Router>
      <div className="App">
      
        
        <Routes>
          <Route path="/" element={<YerihoLandingPage />} />
          <Route path="/page-one" element={<PageOne />} />
          <Route path="/page-two" element={<PageTwo />} />
        </Routes>

        
      </div>
    </Router>
  );
}

export default App;
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './screens/Home';
import PropertyServices from './screens/PropertyServices';
import HomeLoans from './screens/HomeLoans';
import LoginPage from './screens/LoginPage';
import Help from './screens/Help';
import { ThemeProvider } from '@mui/material';
import { theme } from './styles/root';

const App = () => {

  return (
    <ThemeProvider theme={theme}>
      <Router >
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />}  />
          <Route path="/propertyServices" element={<PropertyServices />} />
          <Route path="/homeLoans" element={<HomeLoans />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/help" element={<Help />} />
          {/* Add more routes as needed */}
        </Routes>
      </Router>
    </ThemeProvider>
  );
};

export default App;
import Login from './Login';
import Home from './components/Home';
import Editor from './components/Editor';
import Register from './Register';
import Unauthorized from './components/Unauthorized';
import LinkPage from './components/LinkPage';
import Layout from './components/Layout';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        {/* public routes */}
        <Route path='login' element={<Login />} />
        <Route path='register' element={<Register />} />
        <Route path='linkpage' element={<LinkPage />} />
        <Route path='unauthorized' element={<Unauthorized />} />

        {/* private routes */}
        <Route path='/' element={<Home />} />
        <Route path='editor' element={<Editor />} />
      </Route>
    </Routes>
  );
}

export default App;

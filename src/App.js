import Register from './Register';
import Login from './Login';
import Home from './components/Home';
import Layout from './components/Layout';
import Editor from './components/Editor';
import Admin from './components/Admin';
import Missing from './components/Missing';
import Unauthorized from './components/Unauthorized';
import Lounge from './components/Lounge';
import LinkPage from './components/LinkPage';
import { Routes, Route } from 'react-router-dom';
import RequireAuth from './components/RequireAuth';

const ROLES = { editor: 2, admin: 3, user: 1 };

function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        {/* public routes */}
        <Route path='login' element={<Login />} />
        <Route path='register' element={<Register />} />
        <Route path='linkpage' element={<LinkPage />} />
        <Route path='unauthorized' element={<Unauthorized />} />

        {/* private (protected) routes */}
        <Route element={<RequireAuth allowedRoles={[ROLES.user]} />}>
          <Route path='/' element={<Home />} />
          <Route path='lounge' element={<Lounge />} />
        </Route>
        <Route element={<RequireAuth allowedRoles={[ROLES.editor]} />}>
          <Route path='editor' element={<Editor />} />
        </Route>
        <Route element={<RequireAuth allowedRoles={[ROLES.admin]} />}>
          <Route path='admin' element={<Admin />} />
        </Route>

        {/* catch all */}
        <Route path='*' element={<Missing />} />
      </Route>
    </Routes>
  );
}

export default App;

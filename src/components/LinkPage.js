import { Link } from 'react-router-dom';

const LinkPage = () => {
  return (
    <section>
      <h1>Links Page</h1>
      <br />
      <div className='flexGrow'>
        <h2>Public</h2>
        <Link to='/login'>Login</Link>
        <br />
        <Link to='/register'>Register</Link>
        <br />

        <h2>Private</h2>
        <Link to='/'>Home</Link>
        <br />
        <Link to='/editor'>Editor's Page</Link>
        <br />
        <Link to='/admin'>Admin Page</Link>
      </div>
    </section>
  );
};

export default LinkPage;

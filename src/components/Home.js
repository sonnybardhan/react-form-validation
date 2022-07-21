import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <section>
      <h1>Home Page</h1>
      <br />
      <p>You are logged in!</p>
      <div className='flexGrow'>
        <div className='flexGrow'>
          <br />
          <Link to='/register'>Register</Link>
          <br />
          <Link to='/lounge'>Go to the Lounge</Link>
          <br />
          <Link to='/editor'>Go to the Editor's Page</Link>
          <br />
          <Link to='/admin'>Go to the Admin Page</Link>
          <br />
          <Link to='/linkpage'>Go to the Links Page</Link>
        </div>
      </div>
    </section>
  );
};

export default Home;

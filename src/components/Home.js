import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <section>
      <h1>Home Page</h1>
      <br />
      <p>You must have been assigned a role.</p>
      <div className='flexGrow'>
        <Link to='/'>Home</Link>
      </div>
    </section>
  );
};

export default Home;

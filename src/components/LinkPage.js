import { Link } from 'react-router-dom';

const LinkPage = () => {
  return (
    <section>
      <h1>Links Page</h1>
      <br />
      <div className='flexGrow'>
        <Link to='/login'>Login</Link>
      </div>
    </section>
  );
};

export default LinkPage;

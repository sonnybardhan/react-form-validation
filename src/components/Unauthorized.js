import { Link } from 'react-router-dom';

const Unauthorized = () => {
  return (
    <section>
      <h1>Unauthorized</h1>
      <br />
      <p>You must not have been assigned a role.</p>
      <div className='flexGrow'>
        <Link to='/login'>Login</Link>
      </div>
    </section>
  );
};

export default Unauthorized;

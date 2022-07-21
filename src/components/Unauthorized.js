import { Link, useNavigate } from 'react-router-dom';

const Unauthorized = () => {
  const navigate = useNavigate();
  const goBack = () => navigate(-1);

  return (
    <section>
      <h1>Unauthorized</h1>
      <br />
      <p>You must not have been assigned a role.</p>
      <div className='flexGrow'>
        <Link to='/login'>Login</Link>
        <br />
        <Link to='/'>Home</Link>
        <button onClick={goBack}>Go back</button>
      </div>
    </section>
  );
};

export default Unauthorized;

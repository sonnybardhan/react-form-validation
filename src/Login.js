import React, { useContext, useEffect, useRef, useState } from 'react';
import AuthContext from './context/AuthProvider';

const USERS_DB = {
  sonny: 'abc123',
  tommy: 'xyz123',
};

const ROLES = ['editor', 'admin', 'user'];

const Login = () => {
  const { auth, setAuth } = useContext(AuthContext);
  const userRef = useRef();
  const errRef = useRef();

  const [user, setUser] = useState('');
  const [pwd, setPwd] = useState('');
  const [errMsg, setErrMsg] = useState('');
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    setErrMsg('');
  }, [user, pwd]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(user, pwd);

    let response = {};

    setTimeout(() => {
      if (pwd === USERS_DB[user]) {
        response.roles = ['user', 'admin'];
        response.accessToken = 'abcxyz123';
        setAuth({
          user,
          pwd,
          roles: response.roles,
          accessToken: response.accessToken,
        });

        setUser('');
        setPwd('');
        setSuccess(true);
      } else {
        setErrMsg('Something went wrong');
        errRef.current.focus();
      }
    }, 1500);
  };

  useEffect(() => {
    console.log('auth: ', auth);
  }, [auth]);

  return (
    <>
      {success ? (
        <section>
          <h1>You are logged in!</h1>
          <br />
          <p>
            <a href='#'>Go to Home</a>
          </p>
        </section>
      ) : (
        <section>
          <p
            ref={errRef}
            className={errMsg ? 'errmsg' : 'offscreen'}
            aria-live='assertive'
          >
            {errMsg}
          </p>
          <form onSubmit={handleSubmit}>
            <label htmlFor='username'>Username: </label>
            <input
              type='text'
              id='username'
              ref={userRef}
              autoComplete='off'
              onChange={(e) => setUser(e.target.value)}
              value={user}
              required
            />
            <label htmlFor='password'>Password: </label>
            <input
              type='password'
              id='password'
              onChange={(e) => setPwd(e.target.value)}
              value={pwd}
              required
            />
            <button>Sign In</button>
            <p>
              Already registered?
              <br />
              <span className='line'>
                <a href=''>Sign In</a>
              </span>
            </p>
          </form>
        </section>
      )}
    </>
  );
};

export default Login;

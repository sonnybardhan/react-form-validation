import React, { useEffect, useRef, useState } from 'react';
import useAuth from './hooks/useAuth';
import { Link, useNavigate, useLocation } from 'react-router-dom';

const USERS_DB = {
  sonny: 'abc123',
  tommy: 'xyz123',
};

const ROLES = { editor: 2, admin: 3, user: 1 };

const Login = () => {
  const { auth, setAuth } = useAuth();
  const userRef = useRef();
  const errRef = useRef();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state?.from?.pathname || '/';

  const [user, setUser] = useState('');
  const [pwd, setPwd] = useState('');
  const [errMsg, setErrMsg] = useState('');

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
        if (user === 'tommy') {
          response.roles = [1];
          response.accessToken = 'xxx';
        } else {
          response.accessToken = 'abcxyz123';
          response.roles = [1, 2, 3];
        }
        setAuth({
          user,
          pwd,
          roles: response.roles,
          accessToken: response.accessToken,
        });

        setUser('');
        setPwd('');
        navigate(from, { replace: true });
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
    </>
  );
};

export default Login;

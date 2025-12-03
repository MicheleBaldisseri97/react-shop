import { type FormEvent, useEffect } from 'react';
import { useLogin } from './hooks/useLogin.ts';
import { selectAuthIsLogged, useAuth } from '../../services/auth';
import { useNavigate } from 'react-router-dom';

export const LoginPage = () => {
  const navigate = useNavigate();
  const { formData, isValid, changeHandler } = useLogin();
  const login = useAuth((state) => state.login);
  const isLogged = useAuth(selectAuthIsLogged);

  useEffect(() => {
    if (isLogged) {
      navigate('/cms');
    }
  }, [isLogged, navigate]);

  async function doLogin(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    login(formData.username, formData.password);
  }

  return (
    <div className="page-sm">
      <h1 className="title">LOGIN</h1>

      <form onSubmit={doLogin} className=" flex flex-col gap-3">
        <input
          type="text"
          placeholder="username"
          name="username"
          value={formData.username}
          onChange={changeHandler}
        />
        <input
          type="password"
          placeholder="password"
          name="password"
          value={formData.password}
          onChange={changeHandler}
        />
        <button className="btn primary" type="submit" disabled={!isValid}>
          SIGN IN
        </button>
      </form>
    </div>
  );
};

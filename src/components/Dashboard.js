import { useState } from 'react';
import { useFormik } from 'formik';
import axios from 'axios';

function Dashboard() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoginForm, setIsLoginForm] = useState(true);

  const formTypeHandler = (e) => {
    if (e.target.value === 'Login') {
      setIsLoginForm(true);
    }
    if (e.target.value === 'Signup') {
      setIsLoginForm(false);
    }
  };

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit: (values) => {
      if (isLoginForm) {
        axios
          .post('http://127.0.0.1:3000/api/login', {
            email: values.email,
            password: values.password,
          })
          .then((response) => setIsLoggedIn(true))
          .catch((error) => console.log(error));
      } else {
        axios
          .post('http://127.0.0.1:3000/api/signup', {
            email: values.email,
            password: values.password,
          })
          .then((response) => {
            alert('New User Created. Please log in.');
            setIsLoginForm(true);
          })
          .catch((error) => console.log(error));
      }
    },
  });

  if (isLoggedIn) {
    return (
      <main className="main">
        <h1>Logged In</h1>
      </main>
    );
  } else {
    return (
      <main className="main">
        <div className="form-type">
          <input
            type="button"
            disabled={isLoginForm ? true : false}
            onClick={formTypeHandler}
            value="Login"
          />
          <input
            type="button"
            disabled={isLoginForm ? false : true}
            onClick={formTypeHandler}
            value="Signup"
          />
        </div>
        <form onSubmit={formik.handleSubmit}>
          <input
            id="email"
            name="email"
            type="email"
            onChange={formik.handleChange}
            value={formik.values.email}
            placeholder="E-MAIL"
          />
          <input
            id="password"
            name="password"
            type="password"
            onChange={formik.handleChange}
            value={formik.values.password}
            placeholder="PASSWORD"
          />
          <button type="submit">Submit</button>
        </form>
      </main>
    );
  }
}

export default Dashboard;

import { Formik, Field, Form, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import { Link, useNavigate } from 'react-router-dom'
import { currentSession, getUser } from '../utils/localStorage'
import '../Style/Login.css'

const validationSchema = Yup.object({
  email: Yup.string().email('Invalid').required('Required'),
  password: Yup.string().required('Required')
})

const initialValues = {
  email: '',
  password: ''
}

const Login = () => {
  const navigate = useNavigate();

  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values, { resetForm }) => {
          const users = getUser() || [];

          for (let i = 0; i < users.length; i++) {
            if (
              users[i].email === values.email &&
              users[i].password === values.password
            ) {
              currentSession(values)
              console.log('Submitted', values)
              navigate('/home')
              return
            }
          }

          alert("Invalid email or password")
          resetForm()
        }}
      >
        <div className="login-wrapper">
          <div className="login-card">
            <h1 className="login-title">Welcome Back 👋</h1>
            <p className="login-subtitle">Please login to your account</p>

            <div className="instruction-banner">
              <span className="instruction-icon">📝</span>
              <div className="instruction-content">
                <p className="instruction-title">New User?</p>
                <p className="instruction-text">
                  Please <Link to="/signup" className="instruction-link">sign up first</Link> before logging in
                </p>
              </div>
            </div>

            <Form className="login-form">
              <div className="form-group">
                <label>Email</label>
                <Field
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                />
                <ErrorMessage name="email" component="small" />
              </div>

              <div className="form-group">
                <label>Password</label>
                <Field
                  type="password"
                  name="password"
                  placeholder="Enter your password"
                />
                <ErrorMessage name="password" component="small" />
              </div>

              <button type="submit" className="login-btn">
                Login
              </button>

              <p className="signup-text">
                Don’t have an account?{" "}
                <Link to="/signup">Signup</Link>
              </p>
            </Form>
          </div>
        </div>
      </Formik>
    </>
  )
}

export default Login

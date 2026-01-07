import {Formik, Field, Form, ErrorMessage} from 'formik'
import * as Yup from 'yup'
import { Link } from 'react-router-dom'
import { currentSession, getUser } from '../utils/localStorage'
import { useNavigate } from 'react-router-dom'
import '../Style/Login.css'

const validationSchema=Yup.object({
  email:Yup.string().email('Invalid').required('Required'),
  password:Yup.string().required('Required')
})

const initialValues={
  email:'',
  password:''
}

const Login = ()=>{
  const navigate = useNavigate();  
  
  return(
    <>
      <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={(values,{resetForm})=>{
        for (let i = 0; i < getUser().length; i++) {
          let user = getUser(i)
          if (user[i].email === values.email && user[i].password === values.password) {
            currentSession(values) 
            console.log('Submitted',values)
            navigate('/home')
          }
        } 
        resetForm();
      }}
      >
        <div className="login-wrapper">
      <div className="login-card">
        <h1 className="login-title">Welcome Back 👋</h1>
        <p className="login-subtitle">Please login to your account</p>

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
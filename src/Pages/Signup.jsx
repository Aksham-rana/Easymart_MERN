import { Formik, Form, Field, ErrorMessage} from "formik"
import * as Yup from 'yup'
import { Link } from "react-router-dom";
import { setUser, getUser } from "../utils/localStorage";
import '../Style/Signup.css'

const validationSchema=Yup.object({
    name:Yup.string().required('Required'),
    email:Yup.string().email('Invalid').required('Required'),
    password:Yup.string().required('Required').min(6),
    confirm_pass:Yup.string()
                .required('Required')
                .oneOf([Yup.ref('password')],'Passwords must match')
});

const initialValues={
    name:'',
    email:'',
    password:'',
    confirm_pass:'',
};

const Signup = () => {
  return (
    <>
    <Formik
    initialValues={initialValues}
    validationSchema={validationSchema}
    onSubmit={(values,{resetForm})=>{
        setUser(values)
        for (let i=0; i < getUser().length; i++) {
            let user = getUser(i)
            console.log(user[i].email);
        }    
        alert('Form Submitted')
        resetForm();
    }}
    >
        <div className="signup-wrapper">
        <div className="signup-card">
            <Form>
                <h1>Signup Page</h1>
                <div>
                    <label>Name: </label>
                    <Field name='name' type='text' placeholder='Enter name'/>
                    <ErrorMessage name="name" />
                </div>
                
                <div>
                    <label>Email: </label>
                    <Field name='email' type='text' placeholder='Enter email'/>
                    <ErrorMessage name="email"/>
                </div>

                <div>
                    <label>Password: </label>
                    <Field name='password' type='password' placeholder='Enter password'/>
                    <ErrorMessage name="password"/>
                </div>

                <div>
                    <label>Confirm Password: </label>
                    <Field name='confirm_pass' type='password' placeholder='confirm password' />
                    <ErrorMessage name="confirm_pass" />
                </div>

                <button type="submit"
                style={{backgroundColor:'blue' , color:'white'}}
                >Signup</button>

                <p>
                    “Already have an account? →
                    <Link to='/'>Login”</Link>
                </p>
            </Form>
        </div>
        </div>
    </Formik>
    </>
  )
}

export default Signup
import { Formik, Form, Field, ErrorMessage} from "formik"
import * as Yup from 'yup'
import { Link } from "react-router-dom";
import { setUser, getUser } from "../utils/localStorage";
import '../Style/Signup.css'

const validationSchema=Yup.object({
    name:Yup.string().required('Required'),
    email:Yup.string().email('Invalid').required('Required'),
    password:Yup.string().required('Required').min(6),
    confirm_pass:Yup.string()
                .required('Required')
                .oneOf([Yup.ref('password')],'Passwords must match')
});

const initialValues={
    name:'',
    email:'',
    password:'',
    confirm_pass:'',
};

const Signup = () => {
  return (
    <>
    <Formik
    initialValues={initialValues}
    validationSchema={validationSchema}
    onSubmit={(values,{resetForm})=>{
        setUser(values)
        for (let i=0; i < getUser().length; i++) {
            let user = getUser(i)
            console.log(user[i].email);
        }    
        alert('Form Submitted')
        resetForm();
    }}
    >
        <div className="signup-wrapper">
        <div className="signup-card">
            <Form>
                <h1>Signup Page</h1>
                <div>
                    <label>Name: </label>
                    <Field name='name' type='text' placeholder='Enter name'/>
                    <ErrorMessage name="name" />
                </div>
                
                <div>
                    <label>Email: </label>
                    <Field name='email' type='text' placeholder='Enter email'/>
                    <ErrorMessage name="email"/>
                </div>

                <div>
                    <label>Password: </label>
                    <Field name='password' type='password' placeholder='Enter password'/>
                    <ErrorMessage name="password"/>
                </div>

                <div>
                    <label>Confirm Password: </label>
                    <Field name='confirm_pass' type='password' placeholder='confirm password' />
                    <ErrorMessage name="confirm_pass" />
                </div>

                <button type="submit"
                style={{backgroundColor:'blue' , color:'white'}}
                >Signup</button>

                <p>
                    “Already have an account? →
                    <Link to='/'>Login”</Link>
                </p>
            </Form>
        </div>
        </div>
    </Formik>
    </>
  )
}

export default Signup


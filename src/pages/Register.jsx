import React from 'react'
import { useFormik } from 'formik'
import axios from 'axios';
import { useNavigate } from 'react-router-dom'
import * as Yup from 'yup';


export default function Register() {


    let navigate = useNavigate()

    async function registerData(values) {

        axios.post('http://localhost:4500/api/auth/register', values).then(({ data }) => {


            console.log(data);


            if (data.message == "User registered successfully") {
                navigate('/login')
                console.log("User registered successfully");

            }

        }).catch(err => {
            console.log(err);

        })

    }


    function validationSchema() {

        let errors = Yup.object({
            username: Yup.string("").max(20).required("username is requird"),
            email: Yup.string().email("email is not valid").required('email is requird'),
            password: Yup.string().required("password is requird").matches(/^[a-zA-Z0-9]{3,}$/, "password must start with Capitalize & at lest 4 carr "),

        })

        return errors
    }


    let register = useFormik({

        initialValues: {

            "username": "",
            "email": "",
            "password": ""

        },
        validationSchema,

        onSubmit: (values) => {

            console.log(values);

            registerData(values)
        }

    })


    return (

        <>

            <div className='container w-full h-screen  flex justify-center items-center'>

                <div className='  w-[400px]'>
                    <h4 className='text-4xl mb-8'> Register </h4>

                    <form onSubmit={register.handleSubmit} className='flex flex-col w-full gap-4' action="">

                        <input onBlur={register.handleBlur} onChange={register.handleChange} id='username' name='username' className='w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-blue-500 hover:border-blue-300 shadow-sm focus:shadow' type="text" placeholder='Full Name' />
                        <input onBlur={register.handleBlur} onChange={register.handleChange} id='email' name='email' className='w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-blue-500 hover:border-blue-300 shadow-sm focus:shadow' type="text" placeholder='Email' />
                        <input onBlur={register.handleBlur} onChange={register.handleChange} id='password' name='password' className='w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-blue-500 hover:border-blue-300 shadow-sm focus:shadow' type="text" placeholder='Password' />

                        <button type='submit' className='focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800'>Register</button>
                        {/* <button className='focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800'> Have account? Login </button> */}

                    </form>
                </div>

            </div>

        </>
    )
}

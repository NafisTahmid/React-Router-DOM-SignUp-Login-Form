import React from 'react';
import '../styles/login.css'
import logo from '../images/logo.png'
import login from '../images/login.jpg'
import { useForm } from "react-hook-form"
import { Link } from 'react-router-dom';
import rightArrow from '../images/right-arrow.png'
import { useState } from 'react';

const Signup = () => {

    // eslint-disable-next-line
    const [firstName, setFirstName] = useState('')
    // eslint-disable-next-line
    const [lastName, setLastName] = useState('')
    // eslint-disable-next-line
    const [email, setEmail] = useState('')
    // eslint-disable-next-line
    const [phone, setPhone] = useState('')
    // eslint-disable-next-line
    const [password, setPassword] = useState('')

    const {register,handleSubmit, formState: { errors },} = useForm();
    const onSubmit = data => signUp(data)
    // console.log(firstName, lastName);

    const signUp = async data => {
        
        const signUpDetails = {
            "first_name": data.firstName,
            "last_name": data.last_name,
            "phone_number": data.phone_number,
            "email": data.email,
            "password": data.password
        }
        console.log(signUpDetails);
        fetch('https://test.nexisltd.com/signup', {
            method:"POST",
            body: JSON.stringify(signUpDetails)
        })
        .then(res => res.json())
        .then(data => console.log(data))

    }
    
    return (
        <div className="container mt-3">
        <img src={logo} className="img-fluid" width={70} alt="brand logo" />
        <div className="row">
            <div className="col-md-6 ">
                <img src={login} className="img-fluid mx-auto d-block"alt="brand people" />
            </div>
            <div style={{minHeight:"80vh"}} className="col-md-6 right-container-login p-5">
                <h2 className="text-center fw-bold mt-2">SignUp</h2>
                <div className="mt-5">
                    <form onSubmit={handleSubmit(onSubmit)}>

                        {/* FIRST STEP */}
                        <div id='first-step'>
                            <div className="my-5">
                                <input id="first_name" className="w-100 custom-form" placeholder='Enter First Name' {...register("first_name", { required: true })} />
                                {errors.first_name && <span>First Name is required</span>}
                            </div>

                            <div className="mt-5">
                                <input id="last_name" className="w-100 custom-form" placeholder='Enter Last Name'{...register("last_name", { required: true })} />
                                {errors.last_name && <span>Last Name is required</span>}
                            </div>
                            <button  onClick={() => {
                                document.getElementById("first-step").style.display = "none"
                                document.getElementById("second-step").style.display = "block"
                                setFirstName(document.getElementById('first_name').value)
                                setLastName(document.getElementById('last_name').value)
                            }}
                           
                            className="mx-auto d-block login-btn w-25 my-5">Next Step <img width={20} className="img-fluid "src={rightArrow} alt="right-arrow" /></button>
                        </div>

                        
                        {/* SECOND STEP */}
                        <div style={{display:"none"}} id='second-step'>
                            <div className="my-5 d-flex">
                                <label style={{borderBottom: "1px solid lightgrey"}} className="text-muted text-center" htmlFor="">+880</label>
                                <input id="phone_number" className="w-100 custom-form ps-3" placeholder='1xxxxxxxxxx' {...register("phone_number", { required: true })} />
                            </div>
                            {errors.phone_number && <span>Phone Number is required</span>}

                            <div className="mt-5">
                                <input id="email" type="email" className="w-100 custom-form" placeholder='Enter Email'{...register("email", { required: true })} />
                                {errors.email && <span>Email is required</span>}
                            </div>
                            <button onClick={() => {
                                document.getElementById("second-step").style.display = "none"
                                document.getElementById("last-step").style.display = "block"
                                setPhone(document.getElementById('phone_number').value)
                                setEmail(document.getElementById('email').value)
                            }}
                           className="mx-auto d-block login-btn w-25 my-5">Next Step <img width={20} className="img-fluid "src={rightArrow} alt="right-arrow" /></button>
                        </div>


                        {/* LAST STEP */}
                        <div style={{display:"none"}} id="last-step">
                            <div className="my-5">
                                    <input className="w-100 custom-form" type="password" placeholder='Enter Password' {...register("password", { required: true, min:8})} />
                                    {errors.password && <span>Password is required</span>}
                            </div>

                            <div className="mt-5">
                                <input type="submit" className="mx-auto d-block login-btn" value="Sign Up"/>
                            </div>
                        </div>

                       
                        {/* <small>Your password must be 8 characters.</small> */}
                       

                    </form>

                </div>
                <p className="text-center"> <Link to="/login" className="text-decoration-none text-muted float-right mt-5">Already have an account? <span className="ps-3 fw-bold" style={{color: '#1678CB', textDecoration: "Underline"}}>LOGIN!</span></Link></p>

             
            </div>
        </div>
    </div>
    );
};

export default Signup;
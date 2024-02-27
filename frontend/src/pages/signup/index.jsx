import React, { useState } from 'react'
import GenderCheckbox from './genderCheckbox'
import { Link } from 'react-router-dom'
import useSignup from '../../hooks/useSignup'
const SignUp = () => {
    const [inputs, setInputs] = useState({
        fullName: '',
        userName: '',
        password: '',
        confirmPassword: '',
        gender: ''
    })
    const { loading, signUp } = useSignup();
    function handelCheckboxChange(gender) {
        setInputs({ ...inputs, gender })
    }
    async function handelSubmit(event) {
        event.preventDefault();
        await signUp(inputs)
    }
    return (
        <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
            <div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
                <h1 className='text-2xl font-semibold text-center text-gray-300'>
                    Sign up
                    <span className='text-blue-400'> Express Chating</span>
                </h1>
                <form onSubmit={handelSubmit}>
                    <div>
                        <label htmlFor="fullname" className='label p-2'>
                            <span className='text-base-100 label-text'>
                                Full Name
                            </span>
                        </label>
                        <input
                            type="text"
                            name="fullname"
                            id="fullname"
                            placeholder="Enter Fullname"
                            value={inputs.fullName}
                            onChange={(e) => setInputs({ ...inputs, fullName: e.target.value })}
                            className='w-full input input-bordered max-w-xs' />
                    </div>
                    <div>
                        <label htmlFor="username" className='label p-2'>
                            <span className='text-base-100 label-text'>
                                Username
                            </span>
                        </label>
                        <input
                            type="text"
                            name="username"
                            id="username"
                            placeholder="Enter username"
                            value={inputs.userName}
                            onChange={(e) => setInputs({ ...inputs, userName: e.target.value })}
                            className='w-full input input-bordered max-w-xs' />
                    </div>
                    {/* Gender check box */}
                    <div>
                        <label htmlFor="password" className='label p-2'>
                            <span className='text-base-100 label-text'>Password</span>
                        </label>
                        <input
                            type="password"
                            placeholder='Enter password'
                            className="w-full input input-bordered max-w-xs"
                            value={inputs.password}
                            onChange={(e) => setInputs({ ...inputs, password: e.target.value })}

                        />
                    </div>
                    <div>
                        <label htmlFor="confirmpassword" className='label p-2'>
                            <span className='text-base-100 label-text'>Confirm Password</span>
                        </label>
                        <input
                            type="password"
                            placeholder='Enter Confirm Password'
                            className="w-full input input-bordered max-w-xs"
                            value={inputs.confirmPassword}
                            onChange={(e) => setInputs({ ...inputs, confirmPassword: e.target.value })}

                        />
                    </div>
                    <GenderCheckbox onCheckboxChange={handelCheckboxChange} selectedgender={inputs.gender} />
                    <Link to="/login" className='text-blue-200 text-sm hover:underline hover:text-blue-600 mt-2 inline-block'>
                        Already have an account?
                    </Link>
                    <div>
                        <button className="btn btn-sm sm:btn-sm md:btn-md btn-block mt-2"
                            disabled={loading}
                        >
                            {loading ? <span className='loading loading-spinner'></span> : "Sign Up"}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default SignUp

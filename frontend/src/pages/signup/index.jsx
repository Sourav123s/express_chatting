import React from 'react'
import GenderCheckbox from './genderCheckbox'
const SignUp = () => {
    return (
        <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
            <div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
                <h1 className='text-2xl font-semibold text-center text-gray-300'>
                    Sign up
                    <span className='text-blue-400'> Express Chating</span>
                </h1>
                <form >
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
                        />
                    </div>
                    <GenderCheckbox />
                    <a href="#" className='text-blue-200 text-sm hover:underline hover:text-blue-600 mt-2 inline-block'>
                        Already have an account?
                    </a>
                    <div>
                        <button className="btn btn-sm sm:btn-sm md:btn-md btn-block mt-2">Sign Up</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default SignUp

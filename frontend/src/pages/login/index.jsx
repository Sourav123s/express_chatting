import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import useLogin from '../../hooks/useLogin';

const Login = () => {
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const { loading, login } = useLogin()
    async function handelSubmit(e) {
        e.preventDefault();
        await login(userName, password)
    }
    return (
        <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
            <div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
                <h1 className='text-2xl font-semibold text-center text-gray-300'>
                    Login
                    <span className='text-red-400'> Express Chating</span>
                </h1>
                <form onSubmit={handelSubmit} >
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
                            value={userName}
                            onChange={(e) => setUserName(e.target.value)}
                            className='w-full input input-bordered max-w-xs' />
                    </div>
                    <div>
                        <label htmlFor="password" className='label p-2'>
                            <span className='text-base-100 label-text'>Password</span>
                        </label>
                        <input
                            type="password"
                            placeholder='Enter password'
                            className="w-full input input-bordered max-w-xs"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <div className="form-control">
                        <label className="label cursor-pointer">
                            <span className="label-text text-base-100">Remember me</span>
                            <input type="checkbox" defaultChecked className="checkbox border-orange-400 checked:border-indigo-800 [--chkbg:theme(colors.indigo.600)] [--chkfg:orange]" />
                        </label>
                    </div>
                    <Link to="/signup" className='text-blue-200 text-sm hover:underline hover:text-red-400 mt-2 inline-block'>
                        Don't have an account yet?
                    </Link>
                    <div>
                        <button className="btn btn-sm sm:btn-sm md:btn-md btn-block mt-2"
                            disabled={loading}
                        >
                            {loading ? <span className='loading loading-spinner'></span> : "Login"}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login

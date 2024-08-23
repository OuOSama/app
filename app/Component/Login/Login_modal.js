'use client'

import Image from "next/image";
import { useState } from "react";
import { signIn } from "next-auth/react";


export default function Login_modal() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const handleLogin = async (e) => {
        e.preventDefault();
        const response = await fetch('/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ username: username, password: password })
        });
        const { status } = await response.json()
        console.log(status)
    }
    return (
        <div>
            <label htmlFor="my_Login_modal" className="btn hidden">open modal</label>
            <input type="checkbox" id="my_Login_modal" className="modal-toggle" />
            <div className="modal" role="dialog">
                <div className="modal-box flex flex-col justify-center items-center rounded-md w-auto h-auto">
                    <form onSubmit={handleLogin} className="form-control text-center">
                        <h1 className="text-xl font-bold">Sign In</h1>
                        <input className="input input-bordered mt-5 rounded-md" placeholder="username or email" value={username} onChange={(e) => setUsername(e.target.value)} />
                        <input className="input input-bordered mt-3 rounded-md" placeholder="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                        <button type="submit" className="btn mt-3 btn-success rounded-md text-white">Login</button>
                    </form>

                    <div className="mt-2 text-center w-full">
                        <label>OR</label>
                        <ul className="menu w-full">
                            <li className="w-full">
                                <button onClick={() => signIn('google')} className="btn bg-white shadow-slate-500 rounded-md"><Image src='/google.png' alt="google" height={25} width={25} />Continue With Google</button>
                            </li>
                        </ul>
                    </div>

                </div>
                <label className="modal-backdrop" htmlFor="my_Login_modal">Close</label>
            </div>
        </div>
    )
};

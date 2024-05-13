import React, { useState } from 'react';
import useChangePassword from '../../hooks/useChangePassword';
import { useNavigate } from 'react-router-dom';
import Footer from './footer';

const ChangePassword = () => {
    const [inputs, setInputs] = useState({
        oldPassword: "",
        newPassword: "",
        confirmPassword: ""
    });

    const navigate = useNavigate();

    const { loading,isChange, changePassword } = useChangePassword();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const lol =  await changePassword(inputs);
        if(lol == true)
         {
                navigate('/');
         }
    };

    const handleGoBack = () => {
        navigate(-1);
    };

    return (
        <div className="flex flex-col min-h-screen">
            <div className="flex-grow flex justify-center items-center">
                <div className="min-w-96 p-6 bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-30 border border-gray-100">
                    <h1 className="font-semibold text-3xl text-gray-300 text-center">
                        Change Password
                    </h1>

                    <form onSubmit={handleSubmit}>

                        <label className="label font-semibold">Old Password</label>
                        <input
                            type="password"
                            className="input input-bordered w-full"
                            placeholder="Password"
                            value={inputs.oldPassword}
                            onChange={(e) => {
                                setInputs({ ...inputs, oldPassword: e.target.value });
                            }}
                        />
                        <label className="label font-semibold">New Password</label>
                        <input
                            type="password"
                            className="input input-bordered w-full"
                            placeholder="New Password"
                            value={inputs.newPassword}
                            onChange={(e) => setInputs({ ...inputs, newPassword: e.target.value })}
                        />
                        <label className="label font-semibold">Confirm Password</label>
                        <input
                            type="password"
                            className="input input-bordered w-full"
                            placeholder="Confirm Password"
                            value={inputs.confirmPassword}
                            onChange={(e) => setInputs({ ...inputs, confirmPassword: e.target.value })}
                        />
                        <div onClick={handleGoBack} className="link link-info mt-2 block">
                            ← Go Back
                        </div>
                        <button className="btn btn-primary w-full mt-4" disabled={loading}>
                            {loading ? <span className="loading loading-spinner"></span> : "Change Password"}
                        </button>
                    </form>
                </div>
            </div>

            {/* Footer */}
            <Footer />
        </div>
    );
};

export default ChangePassword;

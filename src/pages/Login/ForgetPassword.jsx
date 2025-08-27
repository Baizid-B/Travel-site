
import React, { useContext, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider/AuthProvider";


const ForgetPassword = () => {
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [error, setError] = useState("");
    const { passwordReset } = useContext(AuthContext)

    const handlePasswordReset = async (e) => {
        e.preventDefault();
        
        if (!email || !email.includes('@')) {
            setError("Please enter a valid email address.");
            return;
        }

        // passwordReset(email)
        // .then(() => {
        //     setMessage("Password reset email sent! Check your inbox.");
        // })
        // .catch((err) =>{
        //     setError(err.message);
        //     console.log(err.message);
            
        // })

        // setMessage("");
        // setError("");

        try {
            await passwordReset(email);
            setMessage("Password reset email sent! Check your inbox.");
            setError(""); // Clear error if successful
        } catch (err) {
            setError(err.message);
            setMessage(""); // Clear message if error occurs
        }
    };

    return (
        <div className="flex items-center justify-center h-screen bg-gray-100">
            <div className="bg-white p-6 rounded-lg shadow-md w-96">
                <h2 className="text-2xl font-bold text-center mb-4">Reset Password</h2>
                <form onSubmit={handlePasswordReset} className="space-y-4">
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                            Email Address
                        </label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                            placeholder="Enter your email"
                            required
                        />
                    </div>
                    {message && <p className="text-green-600 text-sm">{message}</p>}
                    {error && <p className="text-red-600 text-sm">{error}</p>}
                    <button
                        type="submit"
                        className="w-full py-2 px-4 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                    >
                        Send Reset Email
                    </button>
                </form>
            </div>
        </div>
    );
};

export default ForgetPassword;

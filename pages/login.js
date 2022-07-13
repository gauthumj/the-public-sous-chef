import React, { useState, createRef } from "react";
import { auth } from "../firebase-info";
import ReCAPTCHA from "react-google-recaptcha";
import {
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
} from "firebase/auth";
import { useRouter } from "next/router";

const Login = () => {
    const router = useRouter();
    const recaptchaRef = createRef();
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");

    const handleLogin = () => {
        signInWithEmailAndPassword(auth, email, password)
            .then((auth) => {
                router.push("/");
            })
            .catch((e) => alert(e.message));
    };

    const handleSignup = () => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((auth) => {
                router.push("/");
            })
            .catch((e) => alert(e.message));
    };

    return (
        <div className="h-screen flex bg-gray-300">
            <div className="w-3/4 sm:w-full sm:max-w-md m-auto bg-white rounded-lg border border-primaryBorder shadow-md shadow-black py-10 px-16">
                <h1 className="text-2xl font-medium text-primary mt-4 mb-12 text-center">
                    Log in to your account 🔐
                </h1>

                <div>
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        className={`w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4`}
                        id="email"
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Your Email"
                    />
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        className={`w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4`}
                        id="password"
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Your Password"
                    />
                </div>

                <div className="flex justify-between items-center">
                    <ReCAPTCHA
                        sitekey={process.env.NEXT_PUBLIC_RECAP}
                        size="invisible"
                        ref={recaptchaRef}
                    />
                </div>

                <div className="flex justify-center items-center mt-6">
                    <button
                        onClick={() => {
                            recaptchaRef.current.execute();
                            handleLogin();
                        }}
                        className={`bg-green-600 py-2 px-4 text-sm text-white rounded border border-green focus:outline-none focus:border-green-dark`}
                    >
                        Login
                    </button>
                    <button
                        onClick={() => {
                            recaptcharef.current.execute();
                            handleSignup();
                        }}
                        className={`bg-black py-2 px-4 text-sm text-white rounded border border-green focus:outline-none focus:border-green-dark`}
                    >
                        Sign up
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Login;

import React, { useState } from "react";
// import "./textbox.css";

const Textbox = ({ input, setInput }) => {
    return (
        <>
            <div className=" mt-5 w-screen flex flex-col items-center justify-center">
                <h1 className="self-center justify-center font-bold text-4xl">
                    Welcome, chef!
                </h1>
            </div>
            <div className=" mt-20 w-screen flex items-center justify-center">
                <input
                    type="text"
                    onChange={(e) => setInput(e.target.value)}
                    value={input}
                    className=" rounded-full p-2 border-2 border-black lg:w-1/3 md:w-1/2 sm:w-3/4"
                    placeholder="Please enter the ingredients in comma-seperated form"
                />
            </div>
        </>
    );
};

export default Textbox;

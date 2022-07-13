import React from "react";
import Image from "next/image";

const RecipeCard = (props) => {
    const { title, image, steps } = props;
    return (
        <div
            className=" mt-5 mx-4 w-62 sm:w-1/5 h-64 flex-grow-2 flex-col items-center justify-center shadow-2xl 
                shadow-black-900 border-black p-6 text-center bg-white rounded-md overflow-auto 
                  "
        >
            <text className=" font-bold text-xl">{title}</text>
            <br />
            <img
                src={image}
                alt="recipe"
                className="w-2/3 h-auto mx-auto rounded-md"
            />
            <br />
            <text className=" font-bold">Steps</text>
            <ol className="list-decimal text-left mx-2">
                {steps
                    ? steps.map((step, index) => <li key={index}>{step}</li>)
                    : null}
            </ol>
        </div>
    );
};

export default RecipeCard;

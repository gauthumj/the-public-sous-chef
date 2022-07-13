import Head from "next/head";
import Navbar from "../components/navbar";
import Textbox from "../components/textbox";
import RecipeCard from "../components/recipecard";
import axios from "axios";
import { useState, useEffect } from "react";
import { useStateValue } from "../state/StateProvider";
import { auth } from "../firebase-info";

export default function Home() {
    const [{ user }, dispatch] = useStateValue();
    const [input, setInput] = useState("");
    const [arr, setArr] = useState([]);

    const handleClick = async () => {
        await axios
            .get(
                `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.NEXT_PUBLIC_SPOONACULAR}&includeIngredients=${input}&number=10&addRecipeInformation=true`
            )
            .then((response) => {
                setArr(response.data["results"]);
            })
            .catch((e) => alert(e));
    };

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((authUser) => {
            if (authUser) {
                dispatch({
                    type: "SET_USER",
                    user: authUser,
                });
            } else {
                dispatch({
                    type: "SET_USER",
                    user: null,
                });
            }
        });
        return () => {
            unsubscribe();
        };
    }, []);

    let temp = [];
    return (
        <div className=" w-screen min-h-screen  bg-gray-200">
            <div className="container">
                <Head>
                    <title>the sous chef</title>
                    <link rel="icon" href="/images/the-sous-chef.png" />
                </Head>
                <Navbar />
                <div className="content-center align-center">
                    <Textbox input={input} setInput={setInput} />
                    <div className="flex w-screen justify-center">
                        <button
                            onClick={handleClick}
                            className=" mt-2 rounded-lg p-2 border-2 border-black bg-green-400 hover:bg-green-500"
                        >
                            Lets go!
                        </button>
                    </div>
                </div>
                <div className="align-center w-screen p-3 px-7 flex flex-wrap flex-col sm:flex sm:flex-row sm:justify-center">
                    {arr
                        ? arr.map(
                              (item) => (
                                  (temp = []),
                                  item.analyzedInstructions.forEach((iteme) => {
                                      return iteme.steps.forEach((step) => {
                                          temp.push(
                                              !step[1] ? step.step : step[1]
                                          );
                                      });
                                  }),
                                  (
                                      <RecipeCard
                                          title={item.title}
                                          image={item.image}
                                          steps={temp}
                                      />
                                  )
                              )
                          )
                        : null}
                </div>
            </div>
        </div>
    );
}

import "../styles/globals.css";
import { useStateValue, StateProvider } from "../state/StateProvider";
import { auth } from "../firebase-info";
import reducer, { initialState } from "../state/reducer";

function MyApp({ Component, pageProps }) {
    return (
        <StateProvider initialState={initialState} reducer={reducer}>
            <Component {...pageProps} />
        </StateProvider>
    );
}

export default MyApp;

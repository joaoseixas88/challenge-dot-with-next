import "../styles/globals.scss";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import { store } from "../store/store";
import { AsideContextProvider } from "../hooks/AsidesContext";
import { MoviesContext } from "../hooks/MoviesContext";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <AsideContextProvider>
        <MoviesContext>
          <Component {...pageProps} />
        </MoviesContext>
      </AsideContextProvider>
    </Provider>
  );
}

export default MyApp;

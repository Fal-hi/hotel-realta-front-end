import "@/styles/globals.css"
import type { AppProps } from "next/app"
import { Provider } from "react-redux"
import store from "../redux/store/index"
import BaseLayout from "./baselayout/baselayout"

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      {/* <BaseLayout> */}
      <Component {...pageProps} />
      {/* </BaseLayout> */}
    </Provider>
  )
}

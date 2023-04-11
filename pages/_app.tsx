import "@/styles/globals.css"
import type { AppProps } from "next/app"
import { Provider } from "react-redux"
import store from "../redux/store/index"
import BaseLayout from "./baselayout/baselayout"
import { useRouter } from "next/router"

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter()
  const Layout =
    router.pathname !== "/" &&
    !router.pathname.startsWith("/booking") &&
    !router.pathname.startsWith("/resto/restomenus")

  return (
    <Provider store={store}>
      {Layout ? (
        <BaseLayout>
          <Component {...pageProps} />
        </BaseLayout>
      ) : (
        <Component {...pageProps} />
      )}
    </Provider>
  )
}

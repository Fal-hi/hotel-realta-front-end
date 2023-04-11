import "@/styles/globals.css"
import type { AppProps } from "next/app"
import { Provider } from "react-redux"
import store from "../redux/store/index"
import BaseLayout from "./baselayout/baselayout"
import { useRouter } from "next/router"
import { useEffect } from "react"

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter()
  const isOneLoginPage =
    router.pathname !== "/" &&
    !router.pathname.startsWith("/users/signupEmployee") &&
    !router.pathname.startsWith("/users/signupGuest") &&
    !router.pathname.startsWith("/users/loginGuest") &&
    !router.pathname.startsWith("/users/loginEmployee") &&
    !router.pathname.startsWith("/booking") &&
    !router.pathname.startsWith("/resto/restomenus")
  router.pathname !== "/_error"

  return (
    <Provider store={store}>
      {isOneLoginPage ? (
        <BaseLayout>
          <Component {...pageProps} />
        </BaseLayout>
      ) : (
        // <BaseLayout>
        <Component {...pageProps} />
        // </BaseLayout>
      )}
    </Provider>
  )
}

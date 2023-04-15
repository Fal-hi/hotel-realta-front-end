import "@/styles/globals.css"
import type { AppProps } from "next/app"
import { Provider } from "react-redux"
import store from "../redux/store/index"
import BaseLayout from "./baselayout/baselayout"
import { useRouter } from "next/router"
import { useEffect } from "react"

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter()
  const Layout =
    router.pathname !== "/" &&
    !router.pathname.startsWith("/booking") &&
    !router.pathname.startsWith("/purchasing/gallery") &&
    
    !router.pathname.startsWith("/resto/orders")&&

    !router.pathname.startsWith("/resto/restomenus")
    && !router.pathname.startsWith("/users/signupEmployee") &&
    !router.pathname.startsWith("/users/signupGuest") &&
    !router.pathname.startsWith("/users/loginGuest") &&
    !router.pathname.startsWith("/users/loginEmployee") &&
    router.pathname !== "/_error"
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

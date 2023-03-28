import Head from "next/head"
import Image from "next/image"
import { Inter } from "next/font/google"
import styles from "@/styles/Home.module.css"
import SearchBooking from "@/components/booking/searchBooking"
import SidebarBooking from "@/components/booking/sidebarBooking"
import Sidebar from "@/components/sidebar"
import HomeBooking from "./booking/home"

export default function App() {
  return (
    // <h1 className="text-3xl font-bold underline">Hello world!</h1>
    <HomeBooking />
  )
}

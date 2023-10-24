import Head from "next/head"
import Header from "../compnents/Header"
import Navbar from "../compnents/Navbar"
import Results from "../compnents/Results"

export default function Home() {
  return (
    <div>
      <Head>
        <title>App</title>
        <meta name="description"></meta>
        <link rel="icon" href="/favicon"></link>
      </Head>

      <Header />

      <Navbar />
      
      <Results />

    </div>
  )
}

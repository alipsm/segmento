import Head from 'next/head'
import Image from 'next/image'
import Script from 'next/script'
// import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <h1 className="text-3xl text-orange-300 font-bold underline">
    Hello world!

    <Script src="https://cdn.tailwindcss.com" />
  </h1>
  )
}

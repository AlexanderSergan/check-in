import Head from 'next/head'
import { useEffect, useState } from 'react'
import styles from '../styles/Home.module.css'

const fetchUsers = async () => {
 const res = await fetch('api/user')
  const data = res.json()
  return data
}
export default function Home() {

  const [people, setPeople] = useState([])

  useEffect(async () => {

    const res = await fetchUsers()
    setPeople(res)

  }, [])

  return (
    <div className='container fade-in'>
      <Head>
        <title>Check In</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className='main'>
        {/* <h1 className='title'>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1> */}

        <p className='description'>
          Checked in people list:
        </p>

        <div className='grid'>

          {
            people.map( ({ name, phone}) => <>
            
            <div className='card'>
              <h3>{name}</h3>
              <p>{phone}</p>
            </div>
            </>)
          }

        </div>
      </main>

      <footer className='footer'>
        <a
          // href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          // target="_blank"
          // rel="noopener noreferrer"
        >
          Made with ❤️ by Alexander@200kph
        </a>
      </footer>
    </div>
  )
}

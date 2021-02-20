import Head from 'next/head'
import { useEffect, useState } from 'react'
import styles from '../styles/Home.module.css'

const fetchUsers = async () => {
  const res = await fetch('api/user')
  const data = res.json()
  return data
}

const dateString = date => ` ${date.toLocaleTimeString()} ${date.toDateString()}`

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

        <p className='description'>
          Checked in people list:
        </p>

        <div className='grid'>

          {
            people.sort((a, b) => new Date(a.date) - new Date(b.date)).map( ({ name, phone, _id,  checkInDate}) => <>
            
            <div className='card' key={_id}>
              <div className='top-bar'>
                  <h3>{name}</h3>
                  <h4>{phone}</h4>
                  <p> { dateString(new Date( checkInDate ))}</p>
              </div>
              <p></p>
            </div>
            </>)
          }

        </div>
      </main>

      <footer className='footer'>
        <a>
          Made with ❤️ by Alexander@200kph
        </a>
      </footer>
    </div>
  )
}

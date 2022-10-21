import '../styles/globals.css'
import {useEffect} from 'react'

function MyApp({ Component, pageProps }) {

  useEffect(() => {
    addKittyHandler();
  })

  async function addKittyHandler(){
        const response = await fetch('/api/getKitty', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const result = await response.json();
        console.log(result)
    }
  return <Component {...pageProps} />
}

export default MyApp

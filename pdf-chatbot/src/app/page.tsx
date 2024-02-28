import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from './page.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>
          Playing around with LangChain and LLMs
        </p>        
      </div>

      <div className={styles.center}>
        <h1>LLM Chatbot</h1>
      </div>
    </main>
  )
}

import Link from 'next/link'
import {MainLayoult} from '../components/navBar/MainLayoult'
import styles from '../styles/error.module.css'

export default function ErrorPages() {
    return (
     <MainLayoult>
        <div className={styles.container}>
          <h1 className={styles.error}>Error 404</h1>
          <p>please <Link href='/'><a className={styles.ErrorPages}>come back </a></Link> home </p>  
        </div>
        </MainLayoult>
    )
}

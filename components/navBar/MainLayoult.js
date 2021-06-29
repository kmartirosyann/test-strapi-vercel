import Link from "next/link";
import { useRouter } from "next/router";

import style from '../../styles/navBar.module.css';


export function MainLayoult(props) {
    const router = useRouter()
    return (
        <>
            <nav>
                <ul className={style.navBox}>
                    <li><Link href={'/'} ><a className={router.pathname === '/' ? style.active : ''}>Home</a></Link></li>
                    <li><Link href={'/posts'} ><a className={router.pathname === '/posts' ? style.active : ''}>Posts</a></Link></li>
                </ul>
            </nav>
            <main>
                {props.children}
            </main>
        </>
    )
}

import React, {useState} from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "@/styles/Home.module.scss"
import Logo from "../../public/logo-color.png"
import Menu from "./Menu";
import Trait from "../../public/baguette.jpg"

const NavBar = () =>{
    return(
        <div className={styles.navbar}>
            <Link href="/">
                <Image src={Logo} alt="logo"  width={120} />
            </Link>
            <div className={styles.navlinks}>
                <Link href="/apropos">A propos</Link>
                <Link href="/menu">Menu</Link>
                <Link href="">Nouveautés</Link>
            </div>
            <div className={styles.navbarMenu}>
                <Menu/>
            </div>
        </div>
    )
}

export default NavBar
import styles from "../styles/Home.module.scss"
import React, {useState} from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "../../public/logo-blanc.png"

const Footer = () =>{
    return(
        <div className={styles.footer}>
            <p className={styles.contactTitle}>On reste en contact</p>
            <span>Abonne-toi afin dêtre le premier informé de nos nouveautés</span>
            <form>
                <input type="email"
                name="email"
                placeholder="Ex. cookielover@gmail.com"
                id="email"
                className={styles.input}
                required/>
                <button
                type="submit"
                value="submit"
                className={styles.submit}>Submit</button>
            </form>
            <div className={styles.mentions}>
                <Image src={logo} alt="logo" width={150}/>
                <div className={styles.footerLinks}>
                    <div className={styles.links}>
                        <Link href="/">Home</Link>
                        <Link href="/menu">Menu</Link>
                        <Link href="/apropos">A propos</Link> 
                    </div>
                    <br></br>
                    <br></br>
                    <div className={styles.adress}>
                        <span> 1205 Croissant Street</span>
                        <span>+33 7 89 56 24 58</span>
                        <span> All Rights Reserved.</span>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default Footer
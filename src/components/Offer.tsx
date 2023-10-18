import React, {useState} from "react";
import styles from "../styles/Home.module.scss"
import Image from "next/image";
import Link from "next/link";
import Portrait from "../../public/pastrychefportrait.jpg"

const Offer = () =>{
    return(
        <div className={styles.OfferContainer}>
            <div className={styles.picContainer}>
                <Image src={Portrait} alt='chef pic' className={styles.portrait}/>
            </div>
            <div className={styles.aboutContainer}>
                <h2 className={styles.aboutTitle}>About the chef</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </p>
                <Link href="/apropos"className={styles.button}> En savoir plus sur notre Chef</Link>
            </div>
            
        </div>
    )
}

export default Offer
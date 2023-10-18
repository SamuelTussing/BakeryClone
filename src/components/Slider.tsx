import React, {useState} from "react";
import Image from "next/image";
import Link from "next/link";
import Images from "../../public/image-brunch.png"
import styles from "../styles/Home.module.scss"

const Slider = () =>{
    return(
        <div className={styles.slider}>
            {/*  textblock  */}
            <div className={styles.textBlock}>
                <h1 className={styles.SliderTitle}>Pain au Levain, Patisseries & Cafés bien chaud
                </h1>
                <Link href="/menu" className={styles.button}> Voir nos produits</Link>
            </div>
            {/*  imgblock  */}
            <div className={styles.ImgBlock}>
                <Image src={Images} alt="image de brunch"  className={styles.image}/>
            </div>
            
        </div>
    )
}

export default Slider
import React, {useState} from "react";
import styles from "../styles/Home.module.scss"
import Image from "next/image";
import Link from "next/link";
import Cakeimg from "../../public/cakeimg.jpg"
import CinammonRoll from  "../../public/cinnamonrolls.jpg"

const Featured = () =>{
    return(
        <div className={styles.Featured}>
            <h2 className={styles.FeaturedTitle}>Our Favorites</h2>
            <div className={styles.elementContainer}>
                <div className={styles.element}>
                    <div className={styles.ImgBlock1}>
                        <Image src={Cakeimg} alt="favourite cake" className={styles.image1}/>
                    </div>
                    <div className={styles.DescriptionBlock}>
                        <span className={styles.Description}>Plums spices crumble cake</span>
                        <p className={styles.text}>Best season homemade cake. Made with local roasted plums, some spices and a lot of love. Baked every morning just for you</p>  
                        <p className={styles.price}>7.00€</p>
                    </div> 
                </div>

                <div className={styles.element}>
                    <div className={styles.ImgBlock1}>
                        <Image src={CinammonRoll} alt="favourite cake" className={styles.image1}/>
                    </div>
                    <div className={styles.DescriptionBlock}>
                        <span className={styles.Description}>Homemade Cinnamon Rolls</span>
                        <p className={styles.text}>Homemade Cinnamon Rolls. Just like giving a hub to a cloud</p>  
                        <p className={styles.price}>5.00€</p>
                    </div> 
                </div>
            </div>
            
            
            
        </div>
    )
}

export default Featured
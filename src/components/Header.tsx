"use client"

import React, {useState} from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "@/styles/Home.module.scss"

const Header = () =>{
    return(
        <div className={styles.header}>
            <p>Nouvelle boulangerie proche de chez vous !</p>
        </div>
    )
}

export default Header
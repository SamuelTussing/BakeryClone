"use client"

import React, {useState} from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "@/styles/Home.module.scss"

//création d'un tableau avec les différent liens cliquables du menu.
//le tableau sera mappé
const links = [
    {id:1, title:"Homepage", url:"/"},
    {id:2, title:"A propos", url:"/apropos"},
    {id:3, title:"Menu", url:"/menu"},
    {id:4, title:"Nouveautés", url:"/"}
]

const Menu = () => {
    //useState pour changer l'aspect du bouton au clic
    const [open, setOpen] = useState(false)

    const user= false
    return (
        <div>
        {/*on vérifie le state. si l'image est fermée alors on affiche l'image close sinon l'image ouverte. Au clic sur l'image, le state change*/}
        {!open? (
        <Image src="/3traits.png" alt="bouton menu déroulant" width={20} height={20} onClick={()=>setOpen(true)}/>
        ) :(
        <Image src="/croix.png" alt="bouton menu déroulant" width={20} height={20} onClick={()=>setOpen(false)}/>
        )}
        {open &&(
        <div className={styles.menu}>
            {/*on map le tableau pour générer dynamiquement les liens*/}
            {links.map(item=>(
                <Link href={item.url} key={item.id} onClick={()=>setOpen(false)}>{item.title}</Link>
            ))}
            {!user ? (
            <Link href="/login" onClick={()=>setOpen(false)}>Login</Link>
            ) : (
            <Link href="/orders" onClick={()=>setOpen(false)}>Orders</Link>
        )}
        </div>)}
        
    </div>
    )

}

export default Menu
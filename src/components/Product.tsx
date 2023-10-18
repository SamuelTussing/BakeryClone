import styles from "../styles/Home.module.scss"



const Product = ({title,desc,price}:{title:string,desc:string,price:number}) =>{
    return(
        <div className={styles.product}>
            <div className={styles.details}>
               <p className={styles.title}>{title}</p>
                <span className={styles.productdesc}>{desc}</span> 
            </div>
            <span className={styles.price}>${price}</span>
        </div>
    )
}

export default Product
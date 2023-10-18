import Image from 'next/image'
import styles from '../../styles/Home.module.scss'
import Product from '../../components/Product'
import {featuredProducts, pastries, drinks} from '../../data'

export default function MenuPage() {
  return (
    <div className="container">
      <div className={styles.MenuBanner}>
        <h1>THE MENU</h1>
      </div>
      <div className={styles.MenuContainer}>
        <h2 className={styles.productcatName}>Menu</h2>
        <div className={styles.MenuList}>
          {featuredProducts.map(item =>(
            <Product
            title={item.title}
            desc={item.desc}
            price={item.price}
            key={item.id}/>
          ))}
        </div>
        <h2 className={styles.productcatName}>Pastries</h2>
        <div className={styles.MenuList}>
          {pastries.map(item =>(
            <Product
            title={item.title}
            desc={item.desc}
            price={item.price}
            key={item.id}/>
          ))}
        </div>
        <h2 className={styles.productcatName}>Drinks</h2>
        <div className={styles.MenuList}>
          {drinks.map(item =>(
            <Product
            title={item.title}
            desc={item.desc}
            price={item.price}
            key={item.id}/>
          ))}
        </div>
      </div>
    </div>
  )
}


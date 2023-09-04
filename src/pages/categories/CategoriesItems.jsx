import styles from './CategoriesItems.module.css';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { inventory } from '../../data/inventory';
import { Product } from '../../components/product/Product';
import { useEffect, useState } from 'react';


export const CategoriesItems = () => {

    const { category } = useParams();
    const navigate = useNavigate();
    const [filteredInventory, setFilteredInventory] = useState();

    useEffect(() => {
        const filteredProducts = inventory.filter(product => product.category == category);
        setFilteredInventory(filteredProducts);
    }, [inventory])

    return (

        <>
            <div className={styles.categoriesItemsContainer}>
                <button id={styles.backButton} onClick={() => navigate('/store')}>Go Back</button>
                <h1>Shop {category}</h1>
                <div className={styles.products}>
                    {filteredInventory ? filteredInventory.map(product => <Product category={product.category} key={product.category} image={product.image} />) : <p>Loading...</p>}
                </div>
            </div>
        </>
    )
}
import styles from './Product.module.css';

export const Product = ({ category, image }) => {

    return (
        <>
            <img src={image} />
            <h1>{category}</h1>
        </>
    )
}
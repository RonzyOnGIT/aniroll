import styles from './CategoriesPage.module.css';

import { AnimeCategoryCard } from '../../components/animeCategoryCard/AnimeCategoryCard';

export const CategoriesPage = () => {

    return (
        <>
            <div className={styles.categoriesContainer}>
                <div className={styles.categoriesWrapper}>
                    <AnimeCategoryCard category={'Action'} />
                    <AnimeCategoryCard category={'Adventure'} />
                    <AnimeCategoryCard category={'Shonen'} />
                    <AnimeCategoryCard category={'Slice Of Life'} />
                    <AnimeCategoryCard category={'Sci-fi'} />
                    <AnimeCategoryCard category={'Horror'} />
                </div>
            </div>
        </>
    )
}
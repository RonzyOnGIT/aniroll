import styles from './CategoriesPage.module.css';

import baldMan from '../../images/backgrounds/onePunchCat-min.png';
import hxh from '../../images/backgrounds/hxhCat-min.png';
import boku from '../../images/backgrounds/bokuCat-min.png';
import nyo from '../../images/backgrounds/nonCat-min.png';
import darling from '../../images/backgrounds/darlingCat-min.png';
import parasyte from '../../images/backgrounds/parasyteCat-min.png';

import { AnimeCategoryCard } from '../../components/animeCategoryCard/AnimeCategoryCard';

export const CategoriesPage = () => {

    return (
        <>
            <div className={styles.categoriesContainer}>
                <div className={styles.categoriesWrapper}>
                    <AnimeCategoryCard category={'Action'} cover={baldMan} />
                    <AnimeCategoryCard category={'Adventure'} cover={hxh} />
                    <AnimeCategoryCard category={'Shonen'} cover={boku} />
                    <AnimeCategoryCard category={'Slice Of Life'} cover={nyo} />
                    <AnimeCategoryCard category={'Sci-fi'} cover={darling} />
                    <AnimeCategoryCard category={'Horror'} cover={parasyte} />
                </div>
            </div>
        </>
    )
}
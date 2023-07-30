import styles from './LoadingSkeleton.module.css';
import  Skeleton  from 'react-loading-skeleton';
import { SkeletonTheme } from 'react-loading-skeleton';
import "react-loading-skeleton/dist/skeleton.css";

export const LoadingSkeleton = () => {

    return (
        <>
            <SkeletonTheme baseColor="#202020" highlightColor="#444" height='250px'>
                <div className={styles.loadingSkeletonContainer}>
                    <div className={styles.skeleton}><Skeleton /></div>
                    <div className={styles.skeleton}><Skeleton /></div>
                    <div className={styles.skeleton}><Skeleton /></div>
                    <div className={styles.skeleton}><Skeleton /></div>
                    <div className={styles.skeleton}><Skeleton /></div>
                </div>
            </SkeletonTheme>
        </>
    )
}
import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../header/header';
import styles from './pageNotFound.module.css';

const PageNotFound = () => {

    return (
        <>
            <Header />
            <main className={styles.mainwrapper + ' container'} data-testid="Layout">

                <div className={styles.middleContentSec + ' shadow p-3 d-flex align-items-center'}>
                    <div className='mx-auto text-center'>
                        <h1 className='font-bold'>404</h1>
                        <h6>Page Not Found</h6>
                        <Link to={'/'} className='btn btn-primary'>Back</Link>
                    </div>
                </div>

            </main>

        </>
    )
}

export default PageNotFound;

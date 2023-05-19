import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Watch from './Watch';
import './Home.css';

const Home = () => {
    const allWatch = useLoaderData()
    console.log(allWatch);


    return (
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 mx-auto container margintop">

            {

                allWatch.map(watch => <Watch
                    key={watch.id}
                    watch={watch}
                ></Watch>)
            }


        </div>
    );
};

export default Home;
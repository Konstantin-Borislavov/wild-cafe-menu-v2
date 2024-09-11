import React, { useState, useEffect } from 'react';
import { Toggle } from './Toggle';
import menu from '../menu.json';

export const GutInstinct = () => {
    const [gutInstinct, setgutInstinct] = useState([]);

    useEffect(() => {
        setgutInstinct(menu.menu['Gut-Instinct']);
    }, []);

    return (
        <Toggle title={'GUT INSTINCT'}>
            <section className='gut-instinct'>
                {gutInstinct && gutInstinct.map((item, index) => (
                    <div className='food' key={index}>
                        <h3>{item.title + " -" + item.price} </h3>

                        <div>
                            <img src={item.image} loading='lazy' alt={item.title} />
                        </div>

                        <p>{item.descriptionEs}</p>
                        <i>{item.descriptionEn}</i>

                    </div>
                ))}
            </section>
        </Toggle>
    );
};

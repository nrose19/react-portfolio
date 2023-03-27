import React from 'react';

import { HomepagePic } from '../components/Images';

import '../assets/fonts/fonts.css'

const styles = {
    merriweather: {
        fontFamily: 'Merriweather',
    },
    oswald: {
        fontFamily: 'Oswald',
    }
}

export default function MainPage() {
    return(
        <>
            <div style={styles.merriweather} className='flex flex-row justify-center items-center pt-20'>
                <HomepagePic />

                <div className='flex flex-col max-w-sm ml-10'>
                    <h1 className='text-4xl'>Nicole Cohen</h1>
                    <h2 className='text-2xl' style={styles.oswald}>Full Stack Developer</h2>
                    <p className='text-md pt-2'>Hi! My Name is Nicole Cohen and I am Full Stack Web Developer. Welcome to my page!</p>
                </div>
            </div>
        </>
    )
}
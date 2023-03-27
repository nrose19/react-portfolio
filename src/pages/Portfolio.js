import React from 'react';

import { Project1, Project2, Project3, SocialApi, WorkDayPlanner, TeamGenerator } from '../components/Project';

import '../assets/fonts/fonts.css'

const styles = {
    merriweather: {
        fontFamily: 'Merriweather',
    },
    oswald: {
        fontFamily: 'Oswald',
    }
}

export default function PortfolioPage() {
    return(
        <>
            <div style={styles.merriweather}>
                <div className='flex flex-row justify-center pt-6'>
                    <h1 className='text-5xl flex flex-row items-baseline'>
                        Welcome 
                        <h2 style={styles.oswald} className='px-4 text-4xl'>to my</h2>
                        Portfolio
                    </h1>
                </div>

                <div className='flex flex-row md:flex-wrap sm:flex-wrap justify-center pt-20'>
                    <Project3 />
                    <Project2 />
                    <Project1 />
                    <SocialApi />
                    <WorkDayPlanner />
                    <TeamGenerator />
                </div>

            </div>
        
        </>
    )
}
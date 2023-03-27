import React from 'react';

import { HomepagePic } from '../components/Images';
import {BsDownload} from 'react-icons/bs'

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

    const resume = () => {
        // using Java Script method to get PDF file - found method online
        fetch('Resume2023.pdf').then(response => {
            response.blob().then(blob => {
                // Creating new object of PDF file
                const fileURL = window.URL.createObjectURL(blob);
                // Setting various property values
                let alink = document.createElement('a');
                alink.href = fileURL;
                alink.download = 'Resume2023.pdf';
                alink.click();
            })
        })
    }

    return(
        <>
            <div style={styles.merriweather} className='flex flex-row justify-center items-center pt-20'>
                <HomepagePic />

                <div className='flex flex-col max-w-sm ml-10'>
                    <h1 className='text-4xl'>Nicole Cohen</h1>
                    <h2 className='text-2xl' style={styles.oswald}>Full Stack Developer</h2>
                    <p className='text-md pt-2'>Hi! My Name is Nicole Cohen and I am Full Stack Web Developer. Welcome to my page!</p>
                    <button onClick={resume} target='_blank'
                    className='mt-2 text-md flex flex-row items-baseline'
                    >
                        <h1 style={styles.oswald} className="px-1">Resume</h1>
                        <BsDownload />
                    </button> 
                </div>
            </div>
        </>
    )
}
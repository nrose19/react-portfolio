import React from 'react';

import { Link } from 'react-router-dom';
import { BsGithub, BsLinkedin, BsStackOverflow } from "react-icons/bs";

export default function Footer() {
    return(
        <>
            <footer className='bg-gray-200 p-8 flex justify-center'>
                <div className='max-w-sm flex flex-row'>
                    <Link to='https://github.com/nrose19?tab=repositories' target='_blank'
                    className='mx-6'
                    >
                        <BsGithub />
                    </Link>
                    <Link to='https://www.linkedin.com/in/nicole-cohen-841657195/' target='_blank'
                    className='mx-6'
                    >
                        <BsLinkedin />
                    </Link>
                    <Link to='https://stackoverflow.com/users/21496667/nicole' target='_blank'
                    className='mx-6'
                    >
                        <BsStackOverflow />
                    </Link>
                </div>
            </footer>
        </>
    )
}
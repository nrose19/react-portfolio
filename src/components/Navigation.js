import { Link } from 'react-router-dom';

import NavPic from './Images';

import '../assets/fonts/fonts.css'

const styles = {
    merriweather: {
        fontFamily: 'Merriweather',
        marginRight: '5px'
    },
    oswald: {
        fontFamily: 'Oswald',
    }
}

export default function Nav() {

    return(
        <>
            <nav className='bg-blue p-1'>
                <div className='flex flex-row'>
                    <Link to='/nrose19/react-portfolio'>
                        <NavPic />
                    </Link>
                    <div className='text-white2 flex flex-col justify-center'>
                        <h1 style={styles.merriweather} className='text-xl'>Nicole Cohen's</h1>
                        <h2 style={styles.oswald} className='ml-10 text-lg'>P O R T F O L I O</h2>
                    </div>

                <ul
                style={styles.oswald}
                className="flex flex-row justify-end items-center md:flex-shrink-0 space-x-20 xs:space-x-2 sm:space-x-10 ml-auto text-white2 p-3 text-lg"
                >
                    <li >
                        <Link to="/nrose19/react-portfolio/about-me" className='flex flex-row m-6 items-baseline'>
                        <h1 style={styles.merriweather}>About</h1>
                        <h2>Me</h2>
                        </Link>
                    </li>
                    <li>
                        <Link to="/nrose19/react-portfolio/portfolio" className='flex flex-row m-6 items-baseline'>
                        <h1 style={styles.merriweather}>My</h1>
                        Portfolio
                        </Link>
                    </li>
                    <li>
                        <Link to="/nrose19/react-portfolio/contact-me" className='flex flex-row m-6 items-baseline'>
                        <h1 style={styles.merriweather}>Contact</h1>
                        Me
                        </Link>
                    </li>
                </ul>
            </div>
            </nav>
        </>
    )
}
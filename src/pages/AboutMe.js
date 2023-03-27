
import { AboutMePic } from "../components/Images"

import '../assets/fonts/fonts.css'

const styles = {
    merriweather: {
        fontFamily: 'Merriweather',
    },
    oswald: {
        fontFamily: 'Oswald',
    }
}

export default function AboutMe() {

    return(
        <>
        <div className="flex flex-row justify-center items-center">
            <div className="bg-darkGreen bg-cover min-h-screen pl-48 pr-36 -ml-48 flex items-center">
                <AboutMePic />
            </div>
            <div className="max-w-md ml-20 text-blue">
                <h1 style={styles.oswald} className='text-4xl pb-2'>Hi! I'm Nicole Cohen</h1>
                <p style={styles.merriweather}>
                    I 
                    am a recent graduate of UW's Coding Full Stack Development Bootcamp. I have created this web page to showcase the
                    projects I've worked on, as well as my future projects. I have experience with Full Stack projects, but am more interested in Front-End Development, with technologies such as React, CSS, and JavaScript.
                    <br></br>
                    Beyond web development, I 
                    enjoy reading, having new experiences, and traveling the world. I have solo traveled throughout Europe, which is something I am quite passionate about. I believe solo travel is something that every woman should experience at least
                    once in their life, it is empowering. The picture to the left is from the top of Arthur's Seat, a famous mountain 
                    that sits within Edinburgh, Scotland. 
                    <br></br>
                    Please feel free to contact me if you would like to connect further. I look
                    forward to hearing from you!
                </p>
            </div>
        </div>
        </>
    )
}
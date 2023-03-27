import React from 'react';
import { Link } from 'react-router-dom';

import { Wtw, BurnOutBuddy, BookBuddy, SocialApiPic, WorkDayPlannerPic, TeamTrackerPic } from './Images';
import ProjectModal from './ProjectModal';

import '../assets/fonts/fonts.css'
const styles = {
    merriweather: {
        fontFamily: 'Merriweather',
    },
    oswald: {
        fontFamily: 'Oswald',
    }
}

export function Project1() {
    const image = <Wtw/>
    const modalTitle = `What To Watch: Project 1`
    const projectInfo =  `What To Watch (WTW) is a Movie Recommender. A user selects up to 3 genres, then has a movie or TV show recommended to them based on the most popular results within those specified genres.`
    const siteName = `WTW Deployed`

    return(
        <>
            <div className='p-10'>
                <ProjectModal 
                    modalPopUp={image}
                    projectTitle={modalTitle}
                    projectInfo={projectInfo}
                    siteName={siteName}
                    gitLink={"https://github.com/nrose19/Movie-Recs"}
                    siteLink={"https://hayni100.github.io/Movie-Recs/"}
                />
            </div>
        </>
    )
}

export function Project2() {
    return(
        <>
            <div className='p-10'>
                <BurnOutBuddy />
            </div>
        </>
    )
}


export function Project3() {
    return(
        <>
            <div className='p-10'>
                <BookBuddy />
            </div>
        </>
    )
}


export function SocialApi() {
    return(
        <>
            <div className='p-10'>
                <SocialApiPic />
            </div>
        </>
    )
}


export function TeamTracker() {
    return(
        <>
            <div className='p-10'>
                <TeamTrackerPic />
            </div>
        </>
    )
}


export function WorkDayPlanner() {
    return(
        <>
            <div className='p-10'>
                <WorkDayPlannerPic />
            </div>
        </>
    )
}
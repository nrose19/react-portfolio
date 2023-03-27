import React from 'react';
import { Link } from 'react-router-dom';

import { Wtw, BurnOutBuddy, BookBuddy, SocialApiPic, WorkDayPlannerPic, TeamGeneratorPic } from './Images';
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
    const projectInfo =  `What To Watch (WTW) is a Movie Recommender. A user selects up to 3 genres, then has a movie or TV show recommended to them based on the most popular results within those specified genres.`

    return(
        <>
            <div className='p-10 hover:boxShadow'>
                <ProjectModal 
                    modalPopUp={image}
                    projectTitle={`What To Watch: Project 1`}
                    projectInfo={projectInfo}
                    siteName={`WTW Deployed`}
                    gitLink={"https://github.com/nrose19/Movie-Recs"}
                    siteLink={"https://hayni100.github.io/Movie-Recs/"}
                />
            </div>
        </>
    )
}

export function Project2() {
    const image = <BurnOutBuddy/>
    const projectInfo =  `BOB the BurnOut Buddy is an App that is intended to aid those struggling with work or personal "burnout" signs and symptoms. Our targeted user might know their available time, (5, 10, 15, 20, or 30 minutes) and be looking for a wellness activity/article that could lead to an improved quality of life. The journal or "check-in" feature allows the user to record and reflect on their progress and share their completed wellness works with peers also using the application. The sense of accountability and competitiveness we believe aids to our user's progress in their journey of wellness.`
    return(
        <>
            <div className='p-10'>
                <ProjectModal 
                    modalPopUp={image}
                    projectTitle={`BurnOut Buddy: Project 2`}
                    projectInfo={projectInfo}
                    siteName={`BOB Deployed`}
                    gitLink={"https://github.com/nrose19/burnout-buddy"}
                    siteLink={"https://burnout-buddy.herokuapp.com/"}
                />
            </div>
        </>
    )
}


export function Project3() {
    const image = <BookBuddy/>
    const projectInfo =  `BOB makes his return, but he is now a Book Buddy! Book Buddy is a collaberation project that showcases knowledge of REACT, MERN, amd Apollo Servers to create a App that allows users to log in to our Website and search a Open API Library to add books they are interested into their Booklist, and update book reading goals`
    return(
        <>
            <div className='p-10'>
                <ProjectModal 
                    modalPopUp={image}
                    projectTitle={`Book Buddy: Project 3`}
                    projectInfo={projectInfo}
                    siteName={`Book Buddy Deployed`}
                    gitLink={"https://github.com/nrose19/book-buddy"}
                    siteLink={"https://bookbuddy.herokuapp.com/"}
                />
            </div>
        </>
    )
}


export function SocialApi() {
    const image = <SocialApiPic/>
    const projectInfo =  `The Social Network API is an API challenge that is intented for a social network web application where users can share their thoughts, react to friends’ thoughts, and create a friend list.`
    return(
        <>
            <div className='p-10'>
                <ProjectModal 
                    modalPopUp={image}
                    projectTitle={`Social Network Api: Challenge`}
                    projectInfo={projectInfo}
                    siteName={`Walk Through Video`}
                    gitLink={"https://github.com/nrose19/social-network-api"}
                    siteLink={""}
                />
            </div>
        </>
    )
}


export function TeamGenerator() {
    const image = <TeamGeneratorPic/>
    const projectInfo =  `The Team Generator Challenge is a command-line application that takes in information about employees on a software engineering team and generates an HTML webpage that displays summaries for each person`
    return(
        <>
            <div className='p-10'>
                <ProjectModal 
                    modalPopUp={image}
                    projectTitle={`Team Generator: Challenge`}
                    projectInfo={projectInfo}
                    siteName={`None`}
                    gitLink={"https://github.com/nrose19/team-generator"}
                />
            </div>
        </>
    )
}


export function WorkDayPlanner() {
    const image = <WorkDayPlannerPic/>
    const projectInfo =  `The Workday Planner is a simple calendar application that allows a user to save events for each hour of the day. This app will run in the browser and feature dynamically updated HTML and CSS powered by jQuery.`
    return(
        <>
            <div className='p-10'>
                <ProjectModal 
                    modalPopUp={image}
                    projectTitle={`Workday Planner: Challenge`}
                    projectInfo={projectInfo}
                    siteName={`Planner Deployed`}
                    gitLink={"https://github.com/nrose19/workday-planner-challenge"}
                    siteLink={"https://nrose19.github.io/workday-planner-challenge/"}
                />
            </div>
        </>
    )
}
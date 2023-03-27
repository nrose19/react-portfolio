import React from 'react';


export default function NavPic(){
    return(
        <div>
            <img  
                className='w-20 h-20 rounded-full border border-gray-100 shadow-sm object-cover m-3'
                src={require('../assets/images/navPic.JPG')}
                alt='Nicole Cohen Picture'
            />
        </div>
    )
}

export function HomepagePic(){
    return(
        <div>
            <img  
                className='w-80 h-80 rounded-full border border-gray-100 shadow-sm object-cover'
                src={require('../assets/images/navPic.JPG')}
                alt='Nicole Cohen Homepage Picture'
            />
        </div>
    )
}

export function AboutMePic() {
    return(
        <div>
            <img  
                className='w-96 h-96 rounded-full border border-lightGreen border-2 object-cover'
                src={require('../assets/images/homepagePic.jpg')}
                alt='Nicole Cohen about me picture'
            />
        </div>
    )
}

export function Wtw() {
    return(
        <div>
            <img  
                className='w-96 h-96 object-hidden'
                src={require('../assets/images/Movie-Recommender-WTW.png')}
                alt='WTW Project'
            />
        </div>
    )
}

export function BurnOutBuddy() {
    return(
        <div>
            <img  
                className='w-96 h-96 object-hidden'
                src={require('../assets/images/burnoutbuddy-project.png')}
                alt='BurnOut Buddy Project'
            />
        </div>
    )
}

export function BookBuddy() {
    return(
        <div>
            <img  
                className='w-96 h-96 object-hidden'
                src={require('../assets/images/bookBuddy.png')}
                alt='Book Buddy Project'
            />
        </div>
    )
}

export function SocialApiPic() {
    return(
        <div>
            <img  
                className='w-96 h-96 object-hidden'
                src={require('../assets/images/socialApi.png')}
                alt='Social Api Challenge'
            />
        </div>
    )
}

export function WorkDayPlannerPic() {
    return(
        <div>
            <img  
                className='w-96 h-96 object-hidden'
                src={require('../assets/images/workDayPlanner.png')}
                alt='Work Day Planner Challenge'
            />
        </div>
    )
}

export function TeamTrackerPic() {
    return(
        <div>
            <img  
                className='w-96 h-96 object-hidden'
                src={require('../assets/images/teamTracker.png')}
                alt='Team Tracker Challenge'
            />
        </div>
    )
}
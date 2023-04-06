import React from 'react'
import { useContext } from 'react';
import FavContext from '../store/favrouite-contents';
import MeetupList from '../component/meetups/meetuplist';
export default function FavrouiteMeetup() {
  const favctx=useContext(FavContext)
   console.log(favctx.favrouites)

    return (
      <section >
     <h1> FavrouiteMeetups</h1>
     <MeetupList meetuplist={[]}/>
      </section>
    );
  }
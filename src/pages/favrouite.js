import React from 'react'
import { useContext } from 'react';
import FavContext from '../store/favrouite-contents';
export default function FavrouiteMeetup() {
  const favctx=useContext(FavContext)
   console.log(favctx.favrouites)

    return (
      <section >
     <h1> FavrouiteMeetups</h1>
     {/* <MeetupList meetuplist={favctx.favrouites}/> */}
      </section>
    );
  }
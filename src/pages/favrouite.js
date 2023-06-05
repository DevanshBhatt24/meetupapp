import React from 'react'
import { useContext } from 'react';
import FavContext from '../store/favrouite-contents';
import MeetupList from '../component/meetups/meetuplist';
export default function FavrouiteMeetup() {
  const favctx=useContext(FavContext)
  let content;
  if(favctx.totalFavrouites===0)
     content=<p>No Favrouite to show. Try Adding some?</p>
  else
    content=<MeetupList meetuplist={favctx.favrouites}/>


    return (
      <section >
     <h1> FavrouiteMeetups</h1>
      <div>
        {content}
      </div>
      </section>
    );
  }
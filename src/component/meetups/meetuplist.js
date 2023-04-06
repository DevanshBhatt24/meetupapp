import MeetupItems from "./meetupitems";
import classes from "./meetuplist.module.css";
import React from "react";
export default function MeetupList({meetuplist}) {
  console.log(meetuplist)
  return (
    <ul className={classes.list}>
      {meetuplist.map((meetup) => (
        <MeetupItems key={meetup.id} 
          image={meetup.image}
          desc={meetup.description}
          adress={meetup.address}
          title={meetup.title}
          id={meetup.id}
        />
      ))}
    </ul>
  );
}

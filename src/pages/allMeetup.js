import React, { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import LoadingSpineer from '../component/Loader/spineer'
import MeetupList from "../component/meetups/meetuplist";
// const DUMMY_DATA = [
//   {
//     id: "m1",
//     title: "This is a first meetup",
//     image:
//       "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg",
//     address: "Meetupstreet 5, 12345 Meetup City",
//     description:
//       "This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!",
//   },
//   {
//     id: "m2",
//     title: "This is a second meetup",
//     image:
//       "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg",
//     address: "Meetupstreet 5, 12345 Meetup City",
//     description:
//       "This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!",
//   },
// ];
export default function AllMeetup() {
  const [isloading,setisloading]=useState(false);
  const [meetdata,setmeetdata]=useState([])
  async function fetchHandler() {
    setisloading(true)
    await axios
      .get(
        "https://react-meetup-1c8bf-default-rtdb.asia-southeast1.firebasedatabase.app/meetup.json"
      )
      .then((response) =>{
       return response.data
      }).then(data=>{
        const meetup=[]
        for(const key in data){
          const meet={
            id:key,
            ...data[key]
          }
          meetup.push(meet)
        }
        setmeetdata(meetup)  
      setisloading(false)
      });
  }
  useEffect(() => {
    fetchHandler();
  },['']);
  console.log(meetdata)
  return (
    <section>
      <h3>AllMeetup</h3>
     {isloading?<LoadingSpineer /> : <MeetupList meetuplist={meetdata} />}
    </section>
  );
}

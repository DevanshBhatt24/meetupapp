import React from "react";
import NewMeetupForm from "../component/meetups/newmeetupform";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function NewMeetup() {
  const navigate = useNavigate();
  function addMeetupHandler(data) {
    const header = {
      "Content-Type": "application/json",
    };
    axios.post(
      "https://react-meetup-1c8bf-default-rtdb.asia-southeast1.firebasedatabase.app/meetup.json",
      JSON.stringify(data),
      { headers: header }
    ).then(
      navigate('/')
    )
  }
  return (
    <section>
      <h1>Add New Meetup</h1>
      <NewMeetupForm addMeetup={addMeetupHandler} />
    </section>
  );
}

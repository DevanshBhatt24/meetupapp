import React, {  useEffect, useState } from "react";
import { createContext } from "react";
const FavContext = createContext({
  favrouites: [],
  totalFavrouites: 0,
  addFav:(favMeetup)=>{},
  removeFav:(meetupid)=>{},
  isFavrouite:(meetupid)=>{}
});
export  function FavrouiteContent(props) {
  const [userFav, setUserFav] = useState([]);

  function addFavHandler(favMeetup) {
    
    setUserFav((current)=> [...current,favMeetup]
    
    );
    
  }
   function removeFavHandler(meetupid) {
     setUserFav((prevmeetup) =>
      prevmeetup.filter((meetup) => meetup.id !== meetupid)
    );
  }
  function isFavHandler(meetupid) {
    return (
      userFav.some(meetup=>meetup.id===meetupid))
  }

 

  const context = {
    favrouite: userFav,
    totalFavrouites: userFav.length,
    addFav:addFavHandler,
   removeFav: removeFavHandler,
   isFavrouite:isFavHandler
  };

  return <FavContext.Provider value={context}>{props.children}</FavContext.Provider>;
}

export default FavContext;
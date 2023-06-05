import React, { useEffect, useState } from "react";
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
    let updatefav=[...userFav]
    updatefav.push(favMeetup)
    setUserFav(updatefav);
    // console.log(updatefav)
    localStorage.setItem('favourites',JSON.stringify(updatefav))
  }
   function removeFavHandler(meetupid) {
    const delfav=[...userFav]
    // console.log(meetupid,'passed')
   let res= delfav.filter((meetup) => meetup.id !== meetupid) 
      // console.log(res)
    localStorage.setItem('favourites',JSON.stringify(res))
    setUserFav(res);
  }
  function isFavHandler(meetupid) {
    return (
      userFav.some(meetup=>meetup.id===meetupid))
  }
  useEffect(()=>{
    const favsave=JSON.parse( localStorage.getItem('favourites'))
    if(favsave){
      setUserFav(favsave)
    }
  },[])

  const context = {
    favrouites: userFav,
    totalFavrouites: userFav.length,
    addFav:addFavHandler,
   removeFav: removeFavHandler,
   isFavrouite:isFavHandler
  };

  return <FavContext.Provider value={context}>{props.children}</FavContext.Provider>;
}

export default FavContext;
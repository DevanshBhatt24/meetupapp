import classes from "./meetupitems.module.css";
import { useContext, useEffect } from "react";
import Card from "../ui/card";
import FavContext from "../../store/favrouite-contents";



export default function MeetupItems({ image, id, title, adress, desc }) {
  const favctx=useContext(FavContext)

  const isfav=favctx.isFavrouite(id);
   async function toggleAddHandler(){
      if(isfav){
       favctx.removeFav(id)
      }
      else{
        favctx.addFav({id:id,
          title:title,
          description:desc,
          image:image,
          address:adress})
      }
   }

   return (
    <li className={classes.item}>
      <Card>
        <div className={classes.image}>
          <img src={image} alt=" "></img>
        </div>
        <div className={classes.content}>
          <h3>{title}</h3>
          <address>{adress}</address>
          <p>{desc}</p>
        </div>
        <div className={classes.actions}>
          <button onClick={toggleAddHandler}>{ isfav?'Remove from favrouites':'Add To Favrouite'}</button>
        </div>
      </Card>
    </li>
  );
}
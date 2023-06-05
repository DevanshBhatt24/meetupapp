import React, { useContext } from "react";
import { Link } from "react-router-dom";
import classes from "./mainnavigation.module.css";
import FavContext from "../../store/favrouite-contents";

export default function MainNavigation() {
  const favctx=useContext(FavContext)
  return (
    <header className={classes.header}>
      <div className={classes.logo}>React Meetup</div>
        <nav>
          <ul>
            <li>
                <Link to='/'>All Meetups</Link>
            </li>
            <li>
                <Link to='/new-meetup'>New Meetups</Link>
            </li>
            <li>
                <Link to='/favrouites'>Favrouite Meetups
                <span className={classes.badge }>{favctx.totalFavrouites}</span>
                </Link>
            </li>
          </ul>
        </nav>
      
    </header>
  );
}

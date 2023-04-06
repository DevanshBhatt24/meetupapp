import React from "react";
import { Link } from "react-router-dom";
import classes from "./mainnavigation.module.css";

export default function MainNavigation() {
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
                <Link to='/favrouites'>Favrouite Meetups</Link>
            </li>
          </ul>
        </nav>
      
    </header>
  );
}

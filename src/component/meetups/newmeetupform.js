import React, { useRef } from "react";
import classes from './newmeetupform.module.css'
import Card from '../ui/card'
export default function NewMeetupForm(props){
    const titleref=useRef();
    const imageref=useRef();
    const descref=useRef();
    const adressref=useRef();
    
    function submithandler(e){
        e.preventDefault();
        const inputitile=titleref.current.value;
        const inputimage=imageref.current.value;
        const inputdesc=descref.current.value;
        const inputadress=adressref.current.value;
        const metdata={
            title:inputitile,
            image:inputimage,
            description:inputdesc,
            address:inputadress
        }
        console.log(metdata)
        props.addMeetup(metdata);
        
    }
return (
    <Card>
        <form className={classes.form} onSubmit={submithandler}>
        <div className={classes.control}>
            <label htmlFor="title">Meetup Title</label>
            <input ref={titleref} type="text" required id='title' />
        </div>
        <div className={classes.control}>
            <label htmlFor="image">Meetup Image</label>
            <input ref={imageref} type="text" required id='image' />
        </div>
        <div className={classes.control}>
            <label htmlFor="address">Meetup Address</label>
            <input ref={adressref} type="text" required id='address' />
        </div>
        <div className={classes.control}>
            <label htmlFor="description">Description</label>
            <textarea ref={descref} rows='5' required id='description' />
        </div>
        <div className={classes.actions}>
            <button> Add Meetup </button>
        </div>
        </form>
    </Card>
)
}
import React from 'react';
import classes from './Header.module.css';

export default function Header() {
  return (
    <header className={classes.header}>
        <div className='menu-left'>
            <button className='icon'>Left</button>
        </div>
        <div className={classes.title}>Wordle</div>
        <div className='menu-right'>
            <button className='icon'>Right</button>
        </div>
    </header>
  )
}

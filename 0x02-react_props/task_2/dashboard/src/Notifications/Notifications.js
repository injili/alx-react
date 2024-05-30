import React from 'react';
import './Notifications.css';
import NotificationItem from './NotificationItem';
import closeIcon from '../close-icon.png';
import { getLatestNotification } from '../utils';

export default function Notifications() {
    return (
        <div className='Notifications'>
            <button aria-label='Close'
                onClick={() => console.log('Close button has been clicked')}
                style={{border: 'none', background: 'none', cursor: 'pointer', position: 'absolute', right: '2em'}}>
                <img src={closeIcon} alt='Close button' />
            </button>
            <p>Here is the list of notifications</p>
            <ul>
                <NotificationItem type="urgent" value="New course available" />
                <NotificationItem type="urgent" value="New resume available" />
                <NotificationItem type="urgent" html={getLatestNotification()} />
            </ul>
        </div>
    );
}
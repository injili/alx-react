import React from 'react';
import './Notifications.css';
import closeIcon from './close-icon.png';
import { getLatestNotification } from './utils';

export default function Notifications() {
    const notifications = [
        { id: 1, text: 'New course available', priority: 2 },
        { id: 2, text: 'New resume available', priority: 1 },
    ];

    return (
        <div className='Notifications'>
            <button aria-label='Close'
                onClick={() => console.log('Close button has been clicked')}
                style={{border: 'none', background: 'none', cursor: 'pointer', position: 'absolute', right: '2em'}}>
                <img src={closeIcon} alt='Close button' />
            </button>
            <p>Here is the list of notifications</p>
            <ul>{notifications.map((item, index) => (
                <li
                key={item.id}
                data-priority={item.priority}
                >
                    {item.text}
                </li>
                ))}
                <li data-priority='1' dangerouslySetInnerHTML={{ __html: getLatestNotification()}}></li>
            </ul>
        </div>
    );
}
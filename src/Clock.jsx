import React, { useState, useEffect } from 'react';

const DigitalClock = () => {

    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const intervalId = setInterval(() => {
            setTime(new Date());
        }, 1000);
        // cleanup function
        return () => clearInterval(intervalId);
    }, []);

    function formatTime() {
        let hours = time.getHours();
        const minutes = time.getMinutes();
        const seconds = time.getSeconds();
        const meridine = hours >= 12 ? 'PM' : 'AM';

        hours = hours % 12 || 12;

        return `${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)} ${padZero(meridine)}`;
    }

    function padZero(num) {
        return (num < 10 ? `0` : '' )+ num;
    }

    return (
        <div className='clock-container'>
            <div className='clock'>
                <span className='time'>{formatTime()}</span>
            </div>

        </div>
    )
}

export default DigitalClock;
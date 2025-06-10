import React from 'react';

function SiteTime() {
    
    const timeNow = new Date();
    const times = `${timeNow.getHours()}:${timeNow.getMinutes()}:${timeNow.getSeconds()}`;
    return (times);
    
    
}
export default SiteTime;
import React from 'react';

function ModifiedDate() {
    
    const now = new Date();
    const date = `${now.getMonth()+1}-${now.getDate()}-${now.getFullYear()}`;
    return (date);
    
    
}
export default ModifiedDate;
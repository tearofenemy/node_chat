import React from 'react'
import {generateAvatar} from '../../utils/helpers'

import './Avatar.scss'

const Avatar = ({user})  => {
    if(user.avatar) {
        return (
            <img 
                src={user.avatar}
                alt={user.fullName} 
            />
        );
    } else {
        const colors = generateAvatar(user._id);
        const firstCharFromUserFullname = user.fullName.charCodeAt(0);
        return <div></div>
    }
}



export default Avatar
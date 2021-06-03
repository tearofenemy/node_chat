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
        const {color, colorLighten} = generateAvatar(user._id);
        const firstCharFromUserFullname = user.fullName[0].toUpperCase();
        return <div 
                    style={{background: `linear-gradient(135deg, ${color}, ${colorLighten})`}} 
                    className="avatar avatar--symbol">
                    {firstCharFromUserFullname}
                </div>
    }
}

export default Avatar
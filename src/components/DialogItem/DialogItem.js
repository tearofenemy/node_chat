import React from 'react'
import classNames from 'classnames'
import {format, isToday} from 'date-fns'

import {IconReaded, Avatar} from '../../components'

import './DialogItem.scss'


const getMessageTime = created_at => {
    if(isToday(created_at)) {
        return format(created_at, "HH:mm")
    } else {
        return format(created_at, 'dd.mm.yyyy')
    }
}

const DialogItem = ({user, unreaded, created_at, text, isMe}) => (
    <div className={classNames('dialogs__item', {'dialogs__item--online': user.isOnline})}>
        <div className="dialogs__item-avatar">
            
        </div>
        <div className="dialogs__item-info">
            <div className="dialogs__item-info-top">
                <b>{user.fullName}</b>
                <span>
                   {getMessageTime(created_at)}
                </span>
            </div>
            <div className="dialogs__item-info-bottom">
                <p>{text}</p>
                {isMe && <IconReaded isMe={true} isReaded={false}/>}
                {unreaded > 0 && <div className="dialogs__item-info-bottom-count">{unreaded > 9 ? '+9' : unreaded}</div>}
            </div>
        </div>
    </div>    
)

export default DialogItem
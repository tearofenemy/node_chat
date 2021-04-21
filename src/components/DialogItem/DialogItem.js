import React from 'react'
import classNames from 'classnames'

import {Time, IconReaded} from '../../components'

import './DialogItem.scss'

const getAvatar = avatar => {
    if(avatar) {
        return (
            <img 
                src="https://sun9-34.userapi.com/s/v1/ig2/W0ogP05Mpv8gEq5vu111j9JDJCcaslq5HykpCz1FZJBLqVszhGuIkxtxlliUpdfTQ-GOmGTVVqbsflMWaSl4BKZh.jpg?size=100x0&quality=96&crop=24,219,912,912&ava=1"
                alt="Test Avatar" 
            />
        );
    } else {
        //some
    }
}

const DialogItem = ({user, message, unreaded}) => (
    <div className={classNames('dialogs__item', {'dialogs__item--online': user.isOnline})}>
        <div className="dialogs__item-avatar">
            {getAvatar(
                'https://sun9-34.userapi.com/s/v1/ig2/W0ogP05Mpv8gEq5vu111j9JDJCcaslq5HykpCz1FZJBLqVszhGuIkxtxlliUpdfTQ-GOmGTVVqbsflMWaSl4BKZh.jpg?size=100x0&quality=96&crop=24,219,912,912&ava=1'
            )}
        </div>
        <div className="dialogs__item-info">
            <div className="dialogs__item-info-top">
                <b>Федор Достаевский</b>
                <span>
                    {/* <Time date={new Date()}/> */}
                    13:00
                </span>
            </div>
            <div className="dialogs__item-info-bottom">
                <p>Some text for testSome...</p>
                <IconReaded isMe={true} isReaded={false}/>
                {unreaded > 0 && <div className="dialogs__item-info-bottom-count">{unreaded > 9 ? '+9' : unreaded}</div>}
            </div>
        </div>
    </div>    
)

export default DialogItem
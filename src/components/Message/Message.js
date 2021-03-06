import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import {formatDistanceToNow} from 'date-fns'
import ruLocale from 'date-fns/locale/ru'

import './Message.scss'
import readed from '../../assets/readed.svg'
import noreaded from '../../assets/noreaded.svg'

const Message = ({avatar, user, text, date, isMe, isReaded, attachments}) => (
    <div className={classNames('message', {'message--isMe': isMe})}> 
        <div className="message__content">
            {isMe && isReaded ?
             (<img className="message__icon-readed" src={readed} alt="Readed icon"/>)
            :(<img className="message__icon-readed" src={noreaded} alt="Readed icon"/>)}
            <div className="message__avatar">
                <img src={avatar} alt={`Avatar ${user}`}/>
            </div>
            <div className="message__info">
                <div>
                    <div className="message__bubble">
                        <div className="message__text">
                            <p>{text}</p>
                        </div>
                    </div>
                    <div className="message__attachments">
                        {attachments &&
                            attachments.map(item => (
                                <div className="message__attachments-item">
                                    <img src={item.url} alt={item.fileName}/>       
                                </div>
                            ))
                        }
                    </div>
                    <span className="message__date">
                        {formatDistanceToNow(date, {addSuffix: true, locale: ruLocale})}
                    </span>
                </div>
            </div>
        </div> 
    </div>  
)

Message.defaultProp = {
    user: {}
}

Message.propTypes = {
    avatar: PropTypes.string,
    text: PropTypes.string,
    date: PropTypes.string,
    user: PropTypes.object,
    attachments: PropTypes.array
}

export default Message
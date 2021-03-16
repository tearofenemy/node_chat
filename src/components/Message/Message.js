import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import {formatDistanceToNow} from 'date-fns'
import ruLocale from 'date-fns/locale/ru'

import './Message.scss'
import readed from '../../assets/readed.svg'
import noreaded from '../../assets/noreaded.svg'

const Message = ({avatar, user, text, date, isMe, isReaded, attachments, isTyping}) => (

    <div className={classNames('message', {
        'message--isMe': isMe,
        'message--isTyping': isTyping,
        'message--image': attachments && attachments.length === 1
    })}> 
        <div className="message__content">
            {isMe && isReaded ?
             (<img className="message__icon-readed" src={readed} alt="Readed icon"/>)
            :(<img className="message__icon-readed" src={noreaded} alt="Readed icon"/>)}
            <div className="message__avatar">
                <img src={avatar} alt={`Avatar ${user}`}/>
            </div>
            <div className="message__info">
                {(text || isTyping) && (
                    <div className="message__bubble">
                        {text && <p className="message__text">{text}</p>}
                        {isTyping && 
                        <div className="message__typing">
                            <span/>
                            <span/>
                            <span/>
                        </div>}
                    </div>
                )}
                <div className="message__attachments">
                    {attachments &&
                        attachments.map(item => (
                            <div className="message__attachments-item">
                                <img src={item.url} alt={item.fileName}/>       
                            </div>
                        ))
                    }
                </div>
                {date &&
                    <span className="message__date">
                        {formatDistanceToNow(date, {addSuffix: true, locale: ruLocale})}
                    </span>
                }
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
    //attachments: PropTypes.array,
    isTyping: PropTypes.bool,
}

export default Message
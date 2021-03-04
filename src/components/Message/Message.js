import React from 'react'
import PropTypes from 'prop-types'


import './Message.scss'

const Message = ({avatar, user, text, date}) => (
    <div className="message">
        <div className="message__avatar">
            <img src={avatar} alt={`Avatar ${user}`}/>
        </div>
        <div className="message__content">
            <div className="message__bubble">
                <div className="message__text">
                    <p>{text}</p>
                </div>
            </div>
            <span className="message__date">{date}</span>
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
    user: PropTypes.object
}

export default Message
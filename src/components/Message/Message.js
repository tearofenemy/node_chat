import React, {useState, useRef, useEffect} from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import {Time, IconReaded} from '../../components'
import wave from '../../assets/wave.svg'
import play from '../../assets/play.svg'
import pause from '../../assets/pause.svg'

import {convertCurrentTime} from '../../utils/helpers'

import './Message.scss'

const MessageAudio = ({audioSrc}) => {

    const [isPlaying, setPlaying] = useState(false);
    const [progress, setProgress] = useState(0);
    const [currentTime, setCurrentTime] = useState(0);
    const audioEl = useRef(null);

    useEffect(() => {
        audioEl.current.addEventListener('playing', () => {
            setPlaying(true);   
        }, false)

        audioEl.current.addEventListener('ended', () => {
            setPlaying(false);
            setProgress(0);
            setCurrentTime(0);
        }, false)

        audioEl.current.addEventListener('timeupdate', () => {
            const duration = audioEl.current && audioEl.current.duration || 0;
            setCurrentTime(audioEl.current.currentTime);
            setProgress((audioEl.current.currentTime / duration) * 100);
        }, false)
    }, [])

    const handlePlay = () => {
        setPlaying(!isPlaying);
        !isPlaying ? audioEl.current.play() : audioEl.current.pause();
    }

    return (
        <div className="message__audio">
            <audio ref={audioEl} src={audioSrc} preload="auto"/>
            <div className="message__audio-progress" style={{width: progress + '%', height: '100%'}}></div>
            <div className="message__audio-info">
                <div className="message__audio-btn">
                    <button onClick={handlePlay}>
                        {isPlaying ? <img src={pause} alt="Pause"/> : <img src={play} alt="Play"/>}
                    </button>
                </div>
                <div className="message__audio-wave">
                    <img src={wave} alt="Wave"/>
                </div>
                <span className="message__audio-duration">
                    {convertCurrentTime(currentTime)}
                </span>
            </div>
        </div>
    )
}

const Message = ({avatar, user, text, date, isMe, isReaded, attachments, audio, isTyping}) => {   

    return (
        <div className={classNames('message', {
            'message--isMe': isMe,
            'message--isTyping': isTyping,
            'message--image': attachments && attachments.length === 1,
            'message--isAudio': audio
        })}> 
            <div className="message__content">
                {isReaded && <IconReaded isMe={isMe} isReaded={isReaded}/>}
                <div className="message__avatar">
                    <img src={avatar} alt={`Avatar ${user}`}/>
                </div>
                <div className="message__info">
                    {(audio || text || isTyping) && (
                        <div className="message__bubble">
                            {text && <p className="message__text">{text}</p>}
                            {isTyping && (
                                <div className="message__typing">
                                    <span/>
                                    <span/>
                                    <span/>
                                </div>
                            )}
                            {audio && 
                                <MessageAudio audioSrc={audio}/>
                            }
                        </div>
                    )}
                    {attachments && (
                        <div className="message__attachments">
                            {attachments.map(item => (
                                <div className="message__attachments-item">
                                    <img src={item.url} alt={item.fileName}/>       
                                </div>
                            ))}
                        </div>
                    )}
                    {date &&
                        <span className="message__date">
                            <Time date={date}/>
                        </span>
                    }
                </div>
            </div> 
        </div> 
    ) 
}

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
    audio: PropTypes.string,
}

export default Message
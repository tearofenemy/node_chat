import React from 'react'
import PropTypes from 'prop-types'

import readed from '../../assets/readed.svg'
import noreaded from '../../assets/noreaded.svg'

const IconReaded = ({ isMe, isReaded }) => 
    isMe && (isReaded ? (
        <img className="message__icon-readed" src={readed} alt="Readed icon"/>)
       : ( 
        <img className="message__icon-readed" src={noreaded} alt="Readed icon"/>)
    );

// IconReaded.propTypes = {
//     isMe: PropTypes.bool,
//     isReaded: PropTypes.bool,
// }    

export default IconReaded
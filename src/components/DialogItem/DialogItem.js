import React from 'react'
import classNames from 'classnames'

import './DialogItem.scss'

const DialogItem = ({children, className}) => (
    <div className={classNames('block', className)}>{children}</div>    
)

export default DialogItem
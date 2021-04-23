import React from 'react'
import sortBy from 'lodash/orderBy'

import {DialogItem} from '../../components'

import './Dialogs.scss'

const Dialogs = ({items, userId}) => (
    <div className="dialog">
        {sortBy(items, dialog => dialog.created_at).map(item => (
                <DialogItem
                    key={item._id}
                    isMe={item.user._id === userId}
                    {...item}
                />
            )
        )}
    </div>
)

export default Dialogs
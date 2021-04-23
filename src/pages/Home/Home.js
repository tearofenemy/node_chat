import React from 'react'
import {Dialogs, Message} from '../../components'

import './Home.scss'

const Home = () => (
    <section className="home">
        
        <Message
            avatar='https://sun9-34.userapi.com/s/v1/ig2/W0ogP05Mpv8gEq5vu111j9JDJCcaslq5HykpCz1FZJBLqVszhGuIkxtxlliUpdfTQ-GOmGTVVqbsflMWaSl4BKZh.jpg?size=100x0&quality=96&crop=24,219,912,912&ava=1'
            date={new Date()}
            audio="https://notificationsounds.com/storage/sounds/file-sounds-1143-clearly.mp3"
        />


        {/* <Dialogs items={[
            {
                _id: Math.random(),
                user: {
                    _id: 1,
                    fullName: 'Test Username',
                    avatar: null
                },
                text: 'Some text for test application',
                isReaded: false,
                created_at: new Date(2019, 31, 12)
            },
            {
                _id: Math.random(),
                user: {
                    _id: 2,
                    fullName: 'Test Username 2',
                    avatar: null
                },
                text: 'Some text for test applications',
                isReaded: false,
                created_at: new Date()
            }
        ]}/> */}
        
        
        {/* <Message
            avatar='https://sun9-34.userapi.com/s/v1/ig2/W0ogP05Mpv8gEq5vu111j9JDJCcaslq5HykpCz1FZJBLqVszhGuIkxtxlliUpdfTQ-GOmGTVVqbsflMWaSl4BKZh.jpg?size=100x0&quality=96&crop=24,219,912,912&ava=1'
            text='С таких же хуев как и в пятницу перед 23 хуева туча предов'
            date={new Date()}
            isMe={false}
        />
        <Message
            avatar='https://sun9-34.userapi.com/s/v1/ig2/W0ogP05Mpv8gEq5vu111j9JDJCcaslq5HykpCz1FZJBLqVszhGuIkxtxlliUpdfTQ-GOmGTVVqbsflMWaSl4BKZh.jpg?size=100x0&quality=96&crop=24,219,912,912&ava=1'
            text='С таких же хуев как и в пятницу перед 23 хуева туча предов С таких же хуев как и в пятницу перед 23 хуева туча предов С таких же хуев как и в пятницу перед 23 хуева туча предов'
            date={new Date()}
            isMe={true}
            isReaded={true}
        />

        <Message
            avatar='https://sun9-34.userapi.com/s/v1/ig2/W0ogP05Mpv8gEq5vu111j9JDJCcaslq5HykpCz1FZJBLqVszhGuIkxtxlliUpdfTQ-GOmGTVVqbsflMWaSl4BKZh.jpg?size=100x0&quality=96&crop=24,219,912,912&ava=1'
            text='С таких же хуев как и в пятницу перед 23 хуева туча предов С таких же хуев как и в пятницу перед 23 хуева туча предов С таких же хуев как и в пятницу перед 23 хуева туча предов'
            date={new Date()}
            isMe={false}
            attachments={[
                {
                    fileName: 'nature.jpg',
                    url: 'https://source.unsplash.com/100x100/?random=1&nature,water'
                },
                {
                    fileName: 'water.jpg',
                    url: 'https://source.unsplash.com/100x100/?random=2&nature,water'
                }
            ]}
        />
        <Message
            avatar='https://sun9-34.userapi.com/s/v1/ig2/W0ogP05Mpv8gEq5vu111j9JDJCcaslq5HykpCz1FZJBLqVszhGuIkxtxlliUpdfTQ-GOmGTVVqbsflMWaSl4BKZh.jpg?size=100x0&quality=96&crop=24,219,912,912&ava=1'
            isMe={false}
            isTyping={true}
        />
        <Message
            avatar='https://sun9-34.userapi.com/s/v1/ig2/W0ogP05Mpv8gEq5vu111j9JDJCcaslq5HykpCz1FZJBLqVszhGuIkxtxlliUpdfTQ-GOmGTVVqbsflMWaSl4BKZh.jpg?size=100x0&quality=96&crop=24,219,912,912&ava=1'
            attachments={[
                {
                    fileName: 'water.jpg',
                    url: 'https://source.unsplash.com/100x100/?random=2&nature,water'
                }
            ]}
        /> */}
    </section>
)

export default Home
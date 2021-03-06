import React from 'react'
import {Message} from '../../components'

import './Home.scss'

const Home = () => (
    <section className="home">
        <Message
            avatar='https://sun2.6789.userapi.com/s/v1/ig2/chKKCg6j6El2Nx6T0evdhiIpgaJ5HhW5HPCebz8maggZR2ugEA8NowcCspnEa9LqacU3sWoAvfsc2eGdbWhCgu4Y.jpg?size=100x0&quality=96&crop=0,0,1620,1620&ava=1'
            text='С таких же хуев как и в пятницу перед 23 хуева туча предов'
            date={new Date()}
            isMe={false}
        />
        <Message
            avatar='https://sun2.6789.userapi.com/s/v1/ig2/chKKCg6j6El2Nx6T0evdhiIpgaJ5HhW5HPCebz8maggZR2ugEA8NowcCspnEa9LqacU3sWoAvfsc2eGdbWhCgu4Y.jpg?size=100x0&quality=96&crop=0,0,1620,1620&ava=1'
            text='С таких же хуев как и в пятницу перед 23 хуева туча предов С таких же хуев как и в пятницу перед 23 хуева туча предов С таких же хуев как и в пятницу перед 23 хуева туча предов'
            date={new Date()}
            isMe={true}
            isReaded={true}
        />

        <Message
            avatar='https://sun2.6789.userapi.com/s/v1/ig2/chKKCg6j6El2Nx6T0evdhiIpgaJ5HhW5HPCebz8maggZR2ugEA8NowcCspnEa9LqacU3sWoAvfsc2eGdbWhCgu4Y.jpg?size=100x0&quality=96&crop=0,0,1620,1620&ava=1'
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
    </section>
)

export default Home
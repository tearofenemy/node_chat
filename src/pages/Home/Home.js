import React from 'react'
import {Dialogs, Message} from '../../components'
import {TeamOutlined, FormOutlined, SearchOutlined, EllipsisOutlined} from "@ant-design/icons"
import {Input} from 'antd'
import './Home.scss'

const Home = () => (
    <section className="home">
        <div className="chat">

            <div className="chat__sidebar">
                <div className="chat__sidebar--header">
                    <div>
                        <TeamOutlined className="chat__sidebar--header-iTeam"/>
                        <span>Список диалогов</span>
                    </div>
                    <FormOutlined/>
                </div>
                <div className="chat__sidebar--search">
                    <Input
                        allowClear
                        size="large"
                        placeholder="Поиск среди контактов"
                        onSearch={val => console.log(val)}
                        style={{width: '100%'}}
                        prefix={<SearchOutlined />}
                    />
                </div>

                <div className="chat__sidebar-dialogs">
                    <Dialogs items={[
                        {
                            _id: Math.random(),
                            user: {
                                _id: '5e85058357b357ae58bd1f6ca27244f2',
                                fullName: 'Федор Достаевский',
                                avatar: 'https://sun9-34.userapi.com/s/v1/ig2/W0ogP05Mpv8gEq5vu111j9JDJCcaslq5HykpCz1FZJBLqVszhGuIkxtxlliUpdfTQ-GOmGTVVqbsflMWaSl4BKZh.jpg?size=100x0&quality=96&crop=24,219,912,912&ava=1'
                            },
                            text: 'Some text for test application',
                            isReaded: false,
                            created_at: new Date()
                        },
                        {
                            _id: Math.random(),
                            user: {
                                _id: '89ff5c98ebb4259e45a38a40f8d3142a',
                                fullName: 'Башкир',
                                avatar: null
                            },
                            text: 'Some text for test applications',
                            isReaded: false,
                            created_at: new Date()
                        }
                    ]}/>
                </div>
            </div>

            <div className="chat__dialog">
                <div className="chat__dialog-header">
                    <div />
                    <div className="chat__dialog-header--center">
                        <b className="chat__dialog-header--username">
                            Федор Достаевский
                        </b>
                        <div className="chat__dialog-header--status">
                            <div className="status status--online">онлайн</div>
                        </div>
                    </div>
                    <EllipsisOutlined style={{fontSize: '25px'}}/>
                </div>
                <div className="chat__dialog-body">
                    <Message
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
                </div>
            </div>
        </div>
        {/* <Message
            avatar='https://sun9-34.userapi.com/s/v1/ig2/W0ogP05Mpv8gEq5vu111j9JDJCcaslq5HykpCz1FZJBLqVszhGuIkxtxlliUpdfTQ-GOmGTVVqbsflMWaSl4BKZh.jpg?size=100x0&quality=96&crop=24,219,912,912&ava=1'
            date={new Date()}
            audio="https://notificationsounds.com/storage/sounds/file-sounds-1143-clearly.mp3"
        /> 


        <Dialogs items={[
            {
                _id: Math.random(),
                user: {
                    _id: '5e85058357b357ae58bd1f6ca27244f2',
                    fullName: 'Федор Достаевский',
                    avatar: 'https://sun9-34.userapi.com/s/v1/ig2/W0ogP05Mpv8gEq5vu111j9JDJCcaslq5HykpCz1FZJBLqVszhGuIkxtxlliUpdfTQ-GOmGTVVqbsflMWaSl4BKZh.jpg?size=100x0&quality=96&crop=24,219,912,912&ava=1'
                },
                text: 'Some text for test application',
                isReaded: false,
                created_at: new Date()
            },
            {
                _id: Math.random(),
                user: {
                    _id: '89ff5c98ebb4259e45a38a40f8d3142a',
                    fullName: 'Башкир',
                    avatar: null
                },
                text: 'Some text for test applications',
                isReaded: false,
                created_at: new Date()
            }
        ]}/>
        
        
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
import { useState } from 'react';
import { StyledChat, StyledMessage } from './styled';

const Chat = ({ id }) => {
  const [write, setWrite] = useState(false);
  const messages = [
    {
      name: 'Ronnie Brito',
      text: 'Hello world, that message is suposed to be a huge one to test the multiline',
      userId: '123',
      timestamp: '8:00',
    },
    {
      name: 'People One',
      text: 'Heres the first message',
      userId: '321',
      timestamp: '8:35',
    },
  ];
  //
  return (
    <StyledChat
      onPointerOver={() => {
        setWrite(true);
      }}
      onPointerLeave={() => {
        setWrite(false);
      }}
    >
      <div className='messages'>
        {messages.map((message, i) => {
          return <Message message={message} key={i} />;
        })}
      </div>
      <div className='chat-input'>
        {write && (
          <label htmlFor='message-input'>
            <input
              type='text'
              name='message-input'
              id='message-input'
              placeholder='write your message here'
            />{' '}
            <button className='bg-purple-btn hover:bg-purple-btn-hover'>
              Send
            </button>
          </label>
        )}
      </div>
    </StyledChat>
  );
};
//
export default Chat;

const user = {
  name: 'Ronnie Brito',
  id: '123',
};

const Message = ({ message }) => {
  const { name, text, userId, timestamp } = message;
  return (
    <StyledMessage>
      <div className='side'>
        <span className='item'>{name}</span>
        <span className='item time'>{timestamp}</span>
      </div>
      <div className='right'>
        <span className='item'>{text}</span>
      </div>
    </StyledMessage>
  );
};

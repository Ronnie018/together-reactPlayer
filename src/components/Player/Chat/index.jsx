import styled from 'styled-components';

const StyledChat = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 1rem;
  flex: 0 1 240px;
  min-width: 350px;
  height: 350px;
  &:hover {
    outline: 1px solid #00000077;
  }
`;

const StyledMessage = styled.div`
  display: grid;
  grid-template-columns: 1.2fr 3fr;
  grid-column-gap: 0.1rem;
  height: max-content;
  max-width: 100%;
  .item {
    flex: 1 1 20px;
    font-size: 15px;
    font-weight: 500;
  }
  .side {
    display: flex;
    flex-direction: column;
    height: 100%;
    .item {
      color: #505050;
    }
    .time {
      font-size: 13px;
      color: #4e4e4e78;
    }
  }
  .right {
    .item {
      color: #d7d7d7;
      font-weight: 200;
    }
  }
`;

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

const user = {
  name: 'Ronnie Brito',
  id: '123',
};

const Chat = ({ id }) => {
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
  return (
    <StyledChat>
      {messages.map((message, i) => {
        return <Message message={message} key={i} />;
      })}
    </StyledChat>
  );
};

export default Chat;

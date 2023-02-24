import styled from 'styled-components';

const StyledChat = styled.div`
  flex: 0 1 240px;
  min-width: 350px;
  height: 350px;
  &:hover {
    background-color: #1500145b;
  }
`;

const StyledMessage = styled.div`
  display: grid;
  grid-template-columns: 1.2fr 3fr;
  grid-column-gap: 0.2rem;
  min-height: 60px;

  .right,
  .left {
    height: 100%;
    min-height: max-content;
    .text {
      height: 100%;
      display: flex;
      align-items: center;
      font-size: 14px;
    }
  }
  .right {
    display: flex;
    flex-direction: column;
    background-color: #ffffff55;
    .text {
      color: #505050;
    }
    .time {
      min-height: max-content;
    }
  }
  .left {
    .text {
      color: #d7d7d7;
    }
  }
`;

const Message = ({ message }) => {
  const { name, text, userId, timestamp } = message;
  return (
    <StyledMessage>
      <div className='right'>
        <div className='text'>{name}</div>
        <div className='time'>{timestamp}</div>
      </div>
      <div className='left'>
        <div className='text'>{text}</div>
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
      text: 'Hello world',
      userId: '123',
      timestamp: '5',
    },
    {
      name: 'person 2',
      text: 'Hello human',
      userId: '321',
      timestamp: '8',
    },
  ];
  return (
    <StyledChat>
      {messages.map((message, i) => {
        return <Message message={message} />;
      })}
    </StyledChat>
  );
};

export default Chat;

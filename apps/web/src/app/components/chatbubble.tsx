const Conversation = ({ message }: any) => {
  return (
    <div>
      <div className="chat chat-start">
        <div className="chat-bubble">
          Hello How can I help you today?
          <br />
          Hi
        </div>
      </div>
      <div className="chat chat-end">
        <div className="chat-bubble">{message.text}</div>
      </div>
    </div>
  );
};
export default Conversation;

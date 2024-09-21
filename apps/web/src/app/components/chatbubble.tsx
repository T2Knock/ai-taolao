const Conversation = ({ messages }: { messages: string[] }) => {
  return (
    <div>
      {/* <div className="chat chat-start">
        <div className="chat-bubble">
        </div>
      </div> */}

        {messages.map((msg, index) => (
          <div key={index} className="chat primary chat-end">
            <div className="chat-bubble p-2 my-2 rounded-lg">
              {msg}
            </div>
          </div>
        ))
      }
    </div>
  );
};

export default Conversation;


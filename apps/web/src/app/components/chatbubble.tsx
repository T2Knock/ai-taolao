const Conversation = ({ messages }: { messages: string[] }) => {
  return (
    <div>
      <div className="chat chat-start">
        <div className="chat-bubble">
          Hello, how can I help you today?
        </div>
      </div>

      {/* This will display user messages */}
      {messages.length === 0 ? (
        <p className="text-gray-500">No messages yet...</p>
      ) : (
        messages.map((msg, index) => (
          <div key={index} className="chat chat-end">
            <div className="chat-bubble bg-blue-200 p-2 my-2 rounded-lg">
              {msg}
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default Conversation;


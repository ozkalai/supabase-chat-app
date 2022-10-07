import { useState, useEffect } from "react";

const Chat = ({ supabase }) => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const getMessages = async () => {
      const { data: initialMessages, error } = await supabase
        .from("message")
        .select("*")
        .order("id", { ascending: true });
      if (error) {
        console.log(error);
      }
      setMessages(initialMessages);
    };

    getMessages();
  }, []);

  return (
    <div>
      {messages.map((message) => (
        <div key={message.id}>
          <p>{message.content}</p>
        </div>
      ))}
    </div>
  );
};

export default Chat;

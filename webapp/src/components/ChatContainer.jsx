import React, { useState, useEffect, useRef } from "react";

import ChatInput from "./ChatInput";

import { v4 as uuidv4 } from "uuid";
import axios from "axios";
import "./css/ChatContainer.css";
import { sendMessageRoute, recieveMessageRoute } from "../utils/APIRoutes";

export default function ChatContainer({ currentChat, socket, handleClick }) {
  const [messages, setMessages] = useState([]);
  const scrollRef = useRef();
  const [arrivalMessage, setArrivalMessage] = useState(null);

  useEffect(() => {
    const getDataSocket = async () => {
      const data = await JSON.parse(
        localStorage.getItem(process.env.REACT_APP_LOCALHOST_KEY)
      );
      const response = await axios.post(recieveMessageRoute, {
        from: data._id,
        to: currentChat._id,
      });
      setMessages(response.data);
    };
    getDataSocket();
  }, [currentChat]);

  useEffect(() => {
    const getCurrentChat = async () => {
      if (currentChat) {
        await JSON.parse(
          localStorage.getItem(process.env.REACT_APP_LOCALHOST_KEY)
        )._id;
      }
    };
    getCurrentChat();
  }, [currentChat]);

  const handleSendMsg = async (msg) => {
    const data = await JSON.parse(
      localStorage.getItem(process.env.REACT_APP_LOCALHOST_KEY)
    );
    socket.current.emit("send-msg", {
      to: currentChat._id,
      from: data._id,
      msg,
    });
    await axios.post(sendMessageRoute, {
      from: data._id,
      to: currentChat._id,
      message: msg,
    });

    const msgs = [...messages];
    msgs.push({ fromSelf: true, message: msg });
    setMessages(msgs);
  };

  useEffect(() => {
    const getsocket = () => {
      if (socket.current) {
        socket.current.on("msg-recieve", (msg) => {
          setArrivalMessage({ fromSelf: false, message: msg });
        });
      }
    };
    getsocket();
  }, []);

  useEffect(() => {
    const getMessage = () => {
      arrivalMessage && setMessages((prev) => [...prev, arrivalMessage]);
    };
    getMessage();
  }, [arrivalMessage]);

  useEffect(() => {
    const scoll = () => {
      scrollRef.current?.scrollIntoView({ behavior: "smooth" });
    };
    scoll();
  }, [messages]);

  return (
    <div className='chat-container-content'>
      <div className='chat-header'>
        <div className='user-details'>
          <div className='avatar'>
            {/* <img
              src={`data:image/svg+xml;base64,${currentChat.avatarImage}`}
              alt=''
              className='img-avatar'
            /> */}
          </div>
          <div className='username'>
            <h5>{currentChat.username}</h5>
          </div>
        </div>
        <div className='container-btn-chat'>
          <button className='demo-btn-chat'>
            <i className='fa-solid fa-phone'></i>
          </button>
          <button className='demo-btn-chat'>
            <i className='fa-solid fa-video'></i>
          </button>
          <button className='edit-btn' onClick={handleClick}>
            <i className='fa-solid fa-x'></i>
          </button>
        </div>
      </div>
      <div className='chat-messages'>
        {messages.map((message) => {
          return (
            <div ref={scrollRef} key={uuidv4()}>
              <div
                className={`message ${
                  message.fromSelf ? "sended" : "recieved"
                }`}
              >
                <div className='content-message '>
                  <p>{message.message}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <ChatInput handleSendMsg={handleSendMsg} />
    </div>
  );
}

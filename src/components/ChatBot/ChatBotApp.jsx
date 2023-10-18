import React, { useState } from 'react'
import ChatBot from 'react-simple-chatbot'
import { SiChatbot } from 'react-icons/si'
import { ThemeProvider } from 'styled-components'
import { theme } from '../../assets/theme'
import { steps } from '../../assets/steps'
import person from '../../img/user.jpg'

const ChatBotApp = () => {
  const [showChatbot, setShowChatbot] = useState(false)
  const [showButton, setShowButton] = useState(true)

  const toggleChatbot = () => {
    setShowChatbot(!showChatbot)
    setShowButton(false)
  }

  const hideChatbot = () => {
    setShowChatbot(false)
    setShowButton(true)
  }

  return (
    <ThemeProvider theme={theme}>
      <div
        style={{
          position: 'fixed',
          bottom: '20px',
          right: '20px',
          zIndex: 9999
        }}
      >
        {showButton && (
          <button
            className="bg-purple-100 text-primary text-3xl font-semibold mb-2 px-3 py-3 rounded-full mr-2 hover:scale-125"
            onClick={toggleChatbot}
          >
            <SiChatbot />
          </button>
        )}
        {showChatbot && (
          <div style={{ position: 'relative' }}>
            <ChatBot steps={steps} headerTitle="Chatbot" userAvatar={person} />
            <button
              className="text-white hover:text-white-900 text-m mr-5 mt-3"
              onClick={hideChatbot}
              style={{
                position: 'absolute',
                top: '5px',
                right: '5px',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                transition: 'right 1s ease-in-out',
                zIndex: 9999
              }}
            >
              X
            </button>
          </div>
        )}
      </div>
    </ThemeProvider>
  )
}

export default ChatBotApp

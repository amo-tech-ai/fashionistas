'use client'

import React from 'react'
import { FloatingWhatsApp } from 'react-floating-whatsapp'

export default function WhatsAppButton() {
  return (
    <FloatingWhatsApp
      phoneNumber="+573001234567"
      accountName="Fashionistas Support"
      chatMessage="Hello! 👋 How can we help you with your Fashionistas event inquiry?"
      placeholder="Type a message..."
      statusMessage="Typically replies within 1 hour"
      darkMode={true}
      allowClickAway={true}
      allowEsc={true}
      notification={true}
      notificationDelay={30}
      notificationSound={true}
      avatar="/images/fashionistas_icon.jpg"
      styles={{
        // Custom styles for the WhatsApp button
        button: {
          backgroundColor: '#E91E63',
          background: 'linear-gradient(90deg, #E91E63 0%, #9C27B0 100%)',
          boxShadow: '0 4px 20px rgba(233, 30, 99, 0.4)',
        },
      }}
    />
  )
}

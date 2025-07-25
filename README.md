# EventsOS - AI-Powered Event Management Platform

## 🎯 Overview
EventsOS is a comprehensive event lifecycle management platform designed specifically for fashion events, trade shows, and corporate gatherings. Built with AI at its core, it automates and optimizes every phase of event management.

## 🚀 Tech Stack
- **Frontend**: Next.js 14 + TypeScript
- **UI**: Material-UI v6.5.0
- **Admin**: Refine v4.57.10
- **Database**: Supabase (PostgreSQL + Realtime)
- **AI**: CrewAI + CopilotKit
- **Automation**: n8n workflows
- **CRM**: Twenty CRM integration

## 📦 Installation
```bash
# Clone the repository
git clone https://github.com/amo-tech-ai/fashionistas.git
cd fashionistas

# Install dependencies (use pnpm only!)
pnpm install

# Set up environment variables
cp .env.example .env.local

# Run development server
pnpm dev
```

## 🔧 Environment Setup
Create a `.env.local` file with:
```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key
```

## 📋 Features
- Event planning and scheduling
- Attendee registration and ticketing
- Sponsor management
- AI-powered automation
- Real-time analytics
- Multi-channel communication

## 🤝 Contributing
Please read our contributing guidelines before submitting PRs.

## 📄 License
MIT License - see LICENSE file for details
# PLANNING.md

## Project Overview
A conversation dashboard for an n8n-connected chatbot. The dashboard allows users to view, search, filter, and analyze chatbot conversations in real-time, with a modern, responsive UI. It will facilitate monitoring, tagging, and basic analytics for conversations, providing a seamless interface between n8n automations and end-users.

## Tech Stack
- **Frontend Framework:** React
- **Styling:** Tailwind CSS
- **State Management:** Lightweight (React Context or Zustand, as needed)
- **Data Source:** n8n webhook/API integration
- **Bundler:** Vite or Create React App (based on preference)

## Data Flow Architecture
```
n8n (webhook/API) → Dashboard (React App) → Local State (Context/Zustand)
```
- n8n triggers send conversation data to the dashboard via API/webhook.
- Dashboard receives and stores data in local state for fast UI updates.
- User actions (filter, tag, search) update local state and optionally sync with backend/n8n.

## Component Structure
- **App Layout**
  - Sidebar (navigation, filters, tags)
  - Main Content (conversation list/detail)
- **ConversationList**: Displays all conversations with summary info, supports filtering and search.
- **ConversationDetail**: Shows full conversation, tagging, and analytics for a selected conversation.
- **FilterBar**: Controls for filtering by date, tag, status, etc.
- **SearchBar**: Text search across conversations.
- **TagManager**: UI for adding/removing tags.
- **AnalyticsPanel**: Basic stats (volume, response time, etc.)
- **n8nConnection**: Handles API/webhook setup and configuration.

## Vision
A beautiful, performant, and extensible dashboard that makes managing chatbot conversations effortless for teams using n8n. The architecture should support future enhancements like multi-bot support, advanced analytics, and integrations.

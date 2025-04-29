import React, { useState } from 'react';
import { Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import ConversationList from './components/ConversationList';
import ConversationDetail from './components/ConversationDetail';
import FilterPanel from './components/FilterPanel';
import SearchBar from './components/SearchBar';
import './index.css';

const dummyConversations = [
  {
    id: '1',
    customer: 'John Doe',
    lastMessage: 'I need help with my order',
    timestamp: '2025-04-28T10:30:00Z',
    tags: ['support', 'order'],
    read: false
  },
  {
    id: '2',
    customer: 'Jane Smith',
    lastMessage: 'Thank you for your assistance!',
    timestamp: '2025-04-28T11:15:00Z',
    tags: ['feedback'],
    read: true
  },
  {
    id: '3',
    customer: 'Alice Brown',
    lastMessage: 'Can I change my shipping address?',
    timestamp: '2025-04-28T12:45:00Z',
    tags: ['shipping'],
    read: false
  }
];

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [selectedId, setSelectedId] = useState(null);
  const navigate = useNavigate();

  const handleSelectConversation = (id) => {
    setSelectedId(id);
    navigate(`/conversation/${id}`);
    if (sidebarOpen) setSidebarOpen(false);
  };

  return (
    <div className="min-h-screen flex bg-gray-50">
      {/* Mobile sidebar toggle */}
      <button
        className="md:hidden absolute top-4 left-4 z-20 p-2 rounded bg-white border shadow"
        onClick={() => setSidebarOpen((open) => !open)}
        aria-label="Toggle filters"
      >
        <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
      {/* Sidebar */}
      <aside
        className={`fixed z-10 inset-y-0 left-0 w-64 bg-white border-r transform transition-transform duration-200 md:static md:translate-x-0 ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} md:block`}
      >
        <div className="h-full flex flex-col">
          <div className="flex items-center justify-between p-4 border-b md:hidden">
            <span className="font-bold text-lg">Filters</span>
            <button onClick={() => setSidebarOpen(false)} aria-label="Close filters">
              <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <FilterPanel />
        </div>
      </aside>
      {/* Overlay for mobile sidebar */}
      {sidebarOpen && <div className="fixed inset-0 bg-black bg-opacity-30 z-0 md:hidden" onClick={() => setSidebarOpen(false)} />}
      {/* Main content */}
      <main className="flex-1 flex flex-col min-h-screen">
        <header className="p-4 border-b bg-white flex items-center justify-between sticky top-0 z-10">
          <h1 className="text-2xl font-bold">Chatbot Conversations</h1>
          <SearchBar />
        </header>
        <section className="flex-1 overflow-auto">
          <Routes>
            <Route
              path="/"
              element={
                <ConversationList
                  conversations={dummyConversations}
                  onSelect={handleSelectConversation}
                  selectedId={selectedId}
                />
              }
            />
            <Route path="/conversation/:id" element={<ConversationDetail />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </section>
      </main>
    </div>
  );
}

export default App;

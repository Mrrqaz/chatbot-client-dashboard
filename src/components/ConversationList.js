import React from 'react';
import PropTypes from 'prop-types';

/**
 * Displays a list of chatbot conversations for browsing.
 * @param {Object} props
 * @param {Array} props.conversations - List of conversation objects
 * @param {Function} props.onSelect - Handler for selecting a conversation
 * @param {string} props.selectedId - Currently selected conversation id
 */
const ConversationList = ({ conversations = [], onSelect, selectedId }) => {
  return (
    <div className="p-4 max-w-2xl mx-auto">
      <h2 className="text-xl font-semibold mb-4">All Conversations</h2>
      <div className="mb-4">
        {/* Placeholder for filters/search */}
        <div className="text-gray-400 text-sm">(Filters and search coming soon)</div>
      </div>
      <ul className="divide-y divide-gray-200 bg-white rounded shadow">
        {conversations.length === 0 ? (
          <li className="text-gray-500 p-6">No conversations available.</li>
        ) : (
          conversations.map((conv) => {
            const isSelected = conv.id === selectedId;
            return (
              <li
                key={conv.id}
                className={`flex items-start gap-4 p-4 cursor-pointer transition bg-white hover:bg-blue-50 ${isSelected ? 'ring-2 ring-blue-500' : ''}`}
                onClick={() => onSelect && onSelect(conv.id)}
                aria-selected={isSelected}
              >
                <div className="flex-shrink-0 mt-1">
                  {conv.read ? (
                    <span className="inline-block w-3 h-3 rounded-full bg-gray-300" title="Read" />
                  ) : (
                    <span className="inline-block w-3 h-3 rounded-full bg-blue-500" title="Unread" />
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <span className="font-medium text-gray-900">{conv.customer}</span>
                    <span className="text-xs text-gray-500 tabular-nums">{new Date(conv.timestamp).toLocaleString()}</span>
                  </div>
                  <div className="text-gray-700 text-sm mt-1 truncate">{conv.lastMessage}</div>
                  <div className="mt-2 space-x-2">
                    {conv.tags && conv.tags.map((tag) => (
                      <span key={tag} className="inline-block bg-blue-100 text-blue-700 text-xs px-2 py-0.5 rounded-full">{tag}</span>
                    ))}
                  </div>
                </div>
              </li>
            );
          })
        )}
      </ul>
    </div>
  );
};

ConversationList.propTypes = {
  conversations: PropTypes.array,
  onSelect: PropTypes.func,
  selectedId: PropTypes.string,
};

export default ConversationList;

import React, { useState } from 'react';
import { Image, Smile, Calendar } from 'lucide-react';
import { useAuth } from '../Auth/AuthContext';
import { User } from 'lucide-react';

type PostEditorProps = {
  onPostCreated: (post: any) => void;
};

const PostEditor: React.FC<PostEditorProps> = ({ onPostCreated }) => {
  const { user, requireAuth } = useAuth();
  const [content, setContent] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  if (!requireAuth()) return;
  if (!content.trim()) return;

  setIsSubmitting(true);
  await new Promise(resolve => setTimeout(resolve, 500));

  const newPost = {
    id: Date.now(),
    user: {
      name: user!.name,
      username: user!.username,
      avatar: User
    },
     emoji: '😊',
    content: content.trim(),
    timestamp: 'now',
    likes: 0,
    comments: 0,
    shares: 0
  };

  onPostCreated(newPost);
  setContent('');
  setIsSubmitting(false);
};


  const handleFocus = () => {
    requireAuth();
  };

  const handleNotImplemented = () => {
    alert('Function not implemented');
  };

  return (
    <div className="bg-white border border-gray-200 rounded-xl shadow-sm p-4 mb-4">
      <div className="flex gap-3">
        <div className="flex-shrink-0">
          <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-xl">
            {user ? '😊' : '👤'}
          </div>
        </div>
        <div className="flex-1">
          <textarea
            placeholder="How are you feeling today?"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            onFocus={handleFocus}
            className="w-full bg-gray-100 text-sm placeholder-gray-500 rounded-lg p-3 resize-none outline-none border border-gray-300 focus:border-blue-400"
            rows={3}
          />
          <div className="flex items-center justify-between mt-3">
            <div className="flex gap-2">
              {[Image, Smile, Calendar].map((Icon, index) => (
                <button
                  key={index}
                  onClick={handleNotImplemented}
                  className="p-2 rounded-md text-gray-600 hover:text-blue-500 hover:bg-blue-50 transition-colors"
                >
                  <Icon size={18} />
                </button>
              ))}
            </div>
            <button
              onClick={handleSubmit}
              disabled={!content.trim() || isSubmitting || !user}
              className="bg-blue-500 hover:bg-blue-600 disabled:bg-gray-300 text-white text-sm font-medium px-5 py-2 rounded-full transition"
            >
              {isSubmitting ? (
                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
              ) : (
                'Post'
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostEditor;

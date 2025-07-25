import React from 'react';
import { MessageCircle, Share, Heart } from 'lucide-react';

type PostActionsProps = {
  comments: number;
  shares: number;
  likes: number;
  onInteract: (type: string) => void;
};

const PostActions: React.FC<PostActionsProps> = ({ comments, shares, likes, onInteract }) => {
  return (
    <div className="flex gap-4 text-sm text-gray-500">
      <button
        onClick={() => onInteract('like')}
        className="flex items-center gap-1 hover:text-red-500"
      >
        <Heart size={16} />
        {likes}
      </button>
      <button
        onClick={() => onInteract('comment')}
        className="flex items-center gap-1 hover:text-blue-500"
      >
        <MessageCircle size={16} />
        {comments}
      </button>
      <button
        onClick={() => onInteract('share')}
        className="flex items-center gap-1 hover:text-green-500"
      >
        <Share size={16} />
        {shares}
      </button>
    </div>
  );
};

export default PostActions;

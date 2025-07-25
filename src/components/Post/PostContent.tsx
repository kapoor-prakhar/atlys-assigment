import React from 'react';

type PostContentProps = {
  content: string;
  emoji: string;
};

const PostContent: React.FC<PostContentProps> = ({ content, emoji }) => {
  return (
    <div className="p-4 text-sm text-gray-800 flex items-start gap-3">
      <span className="text-xl border border-gray-300 shadow-sm rounded-full px-2 py-1">
        {emoji}
      </span>
      <p className="leading-snug">{content}</p>
    </div>
  );
};

export default PostContent;

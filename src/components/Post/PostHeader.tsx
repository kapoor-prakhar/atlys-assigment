import React from 'react';
import type { LucideIcon } from 'lucide-react';

type PostHeaderProps = {
  user: {
    name: string;
    username: string;
    avatar: LucideIcon; // Accepts an icon component
  };
  timestamp: string;
};

const PostHeader: React.FC<PostHeaderProps> = ({ user, timestamp }) => {
  const AvatarIcon = user.avatar;

  return (
    <div className="p-4 flex items-center">
      <div className="w-9 h-9 rounded-full bg-gray-200 flex items-center justify-center mr-3">
        <AvatarIcon className="w-5 h-5 text-gray-600" />
      </div>
      <div className="text-sm text-gray-800">
        <div className="font-semibold">{user.name}</div>
        <div className="text-xs text-gray-500">
          @{user.username} · {timestamp}
        </div>
      </div>
    </div>
  );
};

export default PostHeader;

import React from 'react';
import { useAuth } from '../Auth/AuthContext';
import PostHeader from './PostHeader';
import PostContent from './PostContent';
import PostActions from './PostActions';

type PostProps = {
  post: any;
};

const Post: React.FC<PostProps> = ({ post }) => {
  const { requireAuth } = useAuth();

  const handleInteraction = (action: string) => {
    if (!requireAuth()) return;
    alert(`${action} function not implemented`);
  };

 return (
  <>
    <div className="bg-white rounded-xl shadow p-4">
      <PostHeader user={post.user} timestamp={post.timestamp} />
      <PostContent content={post.content} emoji={post.emoji}/>
    </div>

    {/* Action section: inheriting parent's bg, no shadow */}
    <div className="mt-2 px-2">
        <PostActions likes={post.likes || 0} comments={post.comments || 0} shares={post.shares || 0} onInteract={handleInteraction}/>
      </div>
  </>
);

};

export default Post;

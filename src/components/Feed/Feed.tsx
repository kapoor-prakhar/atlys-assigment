import React, { useState } from 'react';
import { useAuth } from '../Auth/AuthContext';
import SignIn from '../Auth/SignIn';
import SignUp from '../Auth/SignUp';
import Header from '../Header/Header';
import Modal from '../Modal/Modal';
import Post from '../Post/Post';
import PostEditor from '../PostEditor/PostEditor';
import { INITIAL_POSTS } from '../../constants/initialPosts';


const Feed: React.FC = () => {
  const { showModal, modalType, openModal } = useAuth();
  const [posts, setPosts] = useState(INITIAL_POSTS);

  const handlePostCreated = (newPost: any) => {
    setPosts(prevPosts => [newPost, ...prevPosts]);
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className="max-w-2xl mx-auto p-4 space-y-4">
        {/* Post Editor */}
        <div className="bg-white rounded-xl shadow-sm">
          <PostEditor onPostCreated={handlePostCreated} />
        </div>

        {/* Post List */}
        <div className="space-y-4">
          {posts.map(post => (
            <div key={post.id} className="bg-gray-100 rounded-xl shadow-sm p-4">
              <Post post={post} />
            </div>
          ))}
        </div>
      </main>

      <Modal isOpen={showModal} onClose={() => {}}>
        {modalType === 'signin' ? (
          <SignIn onSwitchToSignUp={() => openModal('signup')} />
        ) : (
          <SignUp onSwitchToSignIn={() => openModal('signin')} />
        )}
      </Modal>
    </div>
  );
};

export default Feed;

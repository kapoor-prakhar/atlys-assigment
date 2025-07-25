import { User, User2, UserCircle2 } from 'lucide-react';

export const INITIAL_POSTS = [
  {
    id: 1,
    user: {
      name: 'Theresa Webb',
      username: 'theresawebb',
      avatar: UserCircle2
    },
    emoji: '😊',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    timestamp: '5 mins ago',
    likes: 12,
    comments: 3,
    shares: 1
  },
  {
    id: 2,
    user: {
      name: 'John Doe',
      username: 'johndoe',
      avatar: User
    },
    emoji: '😎',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    timestamp: '8 mins ago',
    likes: 8,
    comments: 2,
    shares: 0
  },
  {
    id: 3,
    user: {
      name: 'Jane Doe',
      username: 'janedoe',
      avatar: User2
    },
    emoji: '😄',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    timestamp: '15 mins ago',
    likes: 24,
    comments: 7,
    shares: 3
  }
];

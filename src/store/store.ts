import { create } from "zustand";

export type StoreState = {
  token: string | null;
  name: string | null;
  posts: Post[];
  setToken: (token: string) => void;
  setName: (name: string) => void;
  addPost: (post: Post) => void;
};

export type Post = {
  id: number;
  body: string;
};

const store = create<StoreState>((set) => ({
  token: null,
  name: null,
  posts: [{ id: 1, body: "First Post" }],
  setToken: (token: string) => {
    set((_state: StoreState) => ({ token }));
  },
  setName: (name: string) => {
    set((_state: any) => ({ name }));
  },
  addPost: (post: Post) => {
    set((state: StoreState) => ({ posts: [...state.posts, post] }));
  },
}));

export default store;

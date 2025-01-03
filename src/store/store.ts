import { create } from "zustand";

export type StoreState = {
  token: string | null;
  name: string | null;
  posts: Post[];
  setToken: (token: string) => void;
  setName: (name: string) => void;
  addPost: (post: Post) => void;
  deletePost: (id: number) => void;
  resetPost: () => void;
};

export type Post = {
  id: number;
  body: string;
};

const store = create<StoreState>((set) => ({
  token: null,
  name: null,
  posts: [{ id: 1, body: "Post example" }],
  setToken: (token: string) => {
    set((_state: StoreState) => ({ token }));
  },
  setName: (name: string) => {
    set((_state: any) => ({ name }));
  },
  addPost: (post: Post) => {
    set((state: StoreState) => ({ posts: [...state.posts, post] }));
  },

  deletePost: (id: number) => {
    set((state: StoreState) => ({
      posts: [...state.posts.filter((post) => post.id != id)],
    }));
  },

  resetPost: () => {
    set(() => ({ posts: [] }));
  },
}));

export default store;

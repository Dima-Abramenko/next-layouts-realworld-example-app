/* eslint-disable @typescript-eslint/member-ordering */

export type User = {
  username: string;
  bio: string;
  image: string;
  email: string;
  token: string;
};

export type UserResponse = {
  user: User;
};

export type UserLogin = {
  email: string;
  password: string;
};

export type UserRegister = {
  username: string;
  email: string;
  password: string;
};

export type UserProfile = {
  username: string;
  bio: string;
  image: string;
  following: boolean;
};

export type Article = {
  slug: string;
  title: string;
  description: string;
  body: string;
  tagList: string[];
  createdAt: string;
  updatedAt: string;
  favorited: boolean;
  favoritesCount: number;
  author: UserProfile;
};

export type ArticlesResponse = {
  articles: Article[];
  articlesCount: number;
};

export type TagsResponse = {
  tags: string[];
};

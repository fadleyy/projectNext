import { Post, User } from "./models";
import { connectToDb } from "./utils";
import { unstable_noStore as noStore } from "next/cache";
// import { Post, User } from "./models.js";
// import connectToDB from "./utils.js";
// TEMPORARY
// const users = [
//   { id: 1, name: "John" },
//   { id: 2, name: "Jane" },
// ];

// const posts = [
//   { id: 1, title: "Titel 1", body: ".........", userId: 1 },
//   { id: 2, title: "Titel 1", body: ".........", userId: 1 },
//   { id: 3, title: "Titel 2", body: ".........", userId: 2 },
//   { id: 4, title: "Titel 2", body: ".........", userId: 2 },
// ];

// export const getPosts = async () => {
//   try {
//     connectToDB();
//     const posts = await Post.find();
//     return posts;
//   } catch (error) {
//     console.log(error);
//     throw new Error("failed fecth posts");
//   }
// };

// export const getPost = async (slug) => {
//   try {
//     connectToDB();
//     const post = await Post.findOne({ slug });
//     return post;
//   } catch (error) {
//     console.log(error);
//     throw new Error("failed fecth post");
//   }
// };

// export const getUser = async (id) => {
//   try {
//     connectToDB();
//     const user = await User.findById(id);
//     return user;
//   } catch (error) {
//     console.log(error);
//     throw new Error("failed fecth user");
//   }
// };

// export const getUsers = async () => {
//   try {
//     connectToDB();
//     const users = await User.find();
//     return users;
//   } catch (error) {
//     console.log(error);
//     throw new Error("failed fecth users");
//   }
// };

export const getPosts = async () => {
  try {
    connectToDb();
    const posts = await Post.find();
    return posts;
  } catch (error) {
    console.log({ errDataJsposts: error });
    throw new Error("failed fecth post");
  }
};

export const getPost = async (slug) => {
  try {
    connectToDb();
    const post = await Post.findOne({ slug });
    // console.log({ post });
    return post;
  } catch (error) {
    console.log({ error });
    throw new Error(error);
  }
};

export const getUser = async (id) => {
  noStore();
  try {
    connectToDb();
    const user = await User.findById(id);
    return user;
  } catch (error) {
    console.log(error);
    throw new Error("failed fecth user");
  }
};

export const getUsers = async () => {
  try {
    connectToDb();
    const users = await User.find();
    return users;
  } catch (error) {
    console.log({ errDataJsUsers: error });
    throw new Error("failed fecth users");
  }
};

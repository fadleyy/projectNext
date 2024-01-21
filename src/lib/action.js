"use server";
import { revalidatePath } from "next/cache";
import { Post } from "./models";
import { connectToDb } from "./utils";

export const addPost = async (fromData) => {
  //   const title = fromData.get("title");
  //   const desc = fromData.get("desc");
  //   const slug = fromData.get("slug");

  const { title, desc, slug, userId } = Object.fromEntries(fromData);

  try {
    connectToDb();
    const newPost = Post({
      title,
      desc,
      slug,
      userId,
    });
    await newPost.save();
    revalidatePath("/blog");
    console.log("saved to db");
  } catch (err) {
    console.log(err);
    return { error: "something went wrong" };
  }
};

export const delatePost = async (fromData) => {
  const { id } = Object.fromEntries(fromData);

  try {
    connectToDb();
    await Post.findByIdAndDelete(id);
    revalidatePath("/blog");
    console.log("delete from db");
  } catch (err) {
    console.log(err);
    return { error: "something went wrong" };
  }
};

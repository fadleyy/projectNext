import { Post } from "@/lib/models";
import { connectToDb } from "@/lib/utils";
import { NextResponse } from "next/server";

export const GET = async (request, { params }) => {
  const { slug } = params;
  try {
    connectToDb();
    const post = await Post.findOne({ slug });
    return NextResponse.json(post);
  } catch (error) {
    console.log(error);
    return new NextResponse("Failed to fecth post", { status: 500 });
  }
};

export const DELETE = async (request, { params }) => {
  const { slug } = params;
  try {
    connectToDb();
    await Post.deleteOne({ slug });
    return NextResponse.json("post deleted", { status: 200 });
  } catch (error) {
    console.log(error);
    return new NextResponse("failed to Delete post", { status: 500 });
  }
};

import { NextResponse } from "next/server";
import connect from "@/utils/db";
import Post from "@/models/Post";

export const GET = async (request, { params }) => {
  const { id } = params;

  // Fetch all posts from the database
  try {
    await connect();
    const post = await Post.findById(id);

    return new NextResponse(JSON.stringify(post), { status: 200 });
  } catch (err) {
    return new NextResponse("Database connection failed", { status: 500 });
  }
};

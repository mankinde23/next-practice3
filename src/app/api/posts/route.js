import post from "@/models/post";
import { connect } from "mongoose";
import { NextResponse } from "next/server";

export const GET = async (request) => {
  //fetch
  try {
    await  connect();

    const posts = post.find();
    return new NextResponse(posts, { status: 200 });
  } catch (err) {
    return new NextResponse("Error!", { status: 500 });
  }
};

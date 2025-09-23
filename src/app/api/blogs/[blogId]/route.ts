import { NextResponse } from "next/server";
import { blogs } from "../route";


export const GET = async (request: Request, { params }: { params: Promise<{ blogId: string }> }) => {
    const { blogId } = await params;
    const blog = blogs.find((bg) => bg.id === parseInt(blogId));
    return NextResponse.json(blog)
}
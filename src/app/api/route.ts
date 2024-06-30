import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

// GET all posts
export async function GET() {
  const posts = await prisma.post.findMany({
    include: { author: true },
    });
    return NextResponse.json(posts);
}

// POST a new post
export async function POST(req: Request) {
    const { title, content, authorId } = await req.json();
    const newPost = await prisma.post.create({
        data: {
            title,
            content,
            authorId,
        },
    });
    return NextResponse.json(newPost, { status: 201 });
}
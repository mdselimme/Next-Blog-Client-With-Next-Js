import { NextResponse } from "next/server";

export const blogs = [
    {
        "id": 6,
        "title": "Getting Started with Machine Learning",
        "content": "Machine Learning introduces new features for building fast and scalable web applications. Learn how to set up your first project and explore its App Router",
        "thumbnail": "https://png.pngtree.com/png-clipart/20230924/original/pngtree-minimalist-monochromatic-machine-learning-icon-for-infographics-web-design-and-templates-png-image_12747958.png",
        "isFeatured": true,
        "tags": [
            "Machine Learning",
            "ML"
        ],
        "views": 1,
        "authorId": 1,
        "createdAt": "2025-09-23T21:27:03.996Z",
        "updatedAt": "2025-09-23T21:27:07.327Z",
        "author": {
            "id": 1,
            "name": "mahabub",
            "email": "mahabub@gmail.com",
            "password": "1234",
            "role": "USER",
            "phone": "01523645695",
            "picture": null,
            "status": "ACTIVE",
            "isVerified": false,
            "createdAt": "2025-09-21T20:49:16.362Z",
            "updatedAt": "2025-09-21T20:49:16.362Z"
        }
    },
    {
        "id": 5,
        "title": "Getting Started with Go",
        "content": "Go introduces new features for building fast and scalable web applications. Learn how to set up your first project and explore its App Router.",
        "thumbnail": "https://stackify.com/wp-content/uploads/2018/09/Learn-Go_-Tutorials-for-Beginners-Intermediate-and-Advanced-programmers-881x441-1.jpg",
        "isFeatured": true,
        "tags": [
            "Next.js",
            "React",
            "Web Development"
        ],
        "views": 9,
        "authorId": 1,
        "createdAt": "2025-09-22T20:13:34.562Z",
        "updatedAt": "2025-09-23T20:33:37.426Z",
        "author": {
            "id": 1,
            "name": "mahabub",
            "email": "mahabub@gmail.com",
            "password": "1234",
            "role": "USER",
            "phone": "01523645695",
            "picture": null,
            "status": "ACTIVE",
            "isVerified": false,
            "createdAt": "2025-09-21T20:49:16.362Z",
            "updatedAt": "2025-09-21T20:49:16.362Z"
        }
    },
    {
        "id": 4,
        "title": "Getting Started with Javascript",
        "content": "Javascript introduces new features for building fast and scalable web applications. Learn how to set up your first project and explore its App Router.",
        "thumbnail": "https://topdev.vn/blog/wp-content/uploads/2020/07/fetch-api-javascript.jpg",
        "isFeatured": true,
        "tags": [
            "Next.js",
            "React",
            "Web Development"
        ],
        "views": 8,
        "authorId": 1,
        "createdAt": "2025-09-22T20:10:51.655Z",
        "updatedAt": "2025-09-23T20:25:38.755Z",
        "author": {
            "id": 1,
            "name": "mahabub",
            "email": "mahabub@gmail.com",
            "password": "1234",
            "role": "USER",
            "phone": "01523645695",
            "picture": null,
            "status": "ACTIVE",
            "isVerified": false,
            "createdAt": "2025-09-21T20:49:16.362Z",
            "updatedAt": "2025-09-21T20:49:16.362Z"
        }
    },
    {
        "id": 3,
        "title": "Getting Started with TalwindCss",
        "content": "Next.js introduces new features for building fast and scalable web applications. Learn how to set up your first project and explore its App Router.",
        "thumbnail": "https://teamraft.com/wp-content/uploads/nextjs.jpg",
        "isFeatured": true,
        "tags": [
            "Next.js",
            "React",
            "Web Development"
        ],
        "views": 9,
        "authorId": 1,
        "createdAt": "2025-09-21T21:35:51.731Z",
        "updatedAt": "2025-09-23T20:26:19.441Z",
        "author": {
            "id": 1,
            "name": "mahabub",
            "email": "mahabub@gmail.com",
            "password": "1234",
            "role": "USER",
            "phone": "01523645695",
            "picture": null,
            "status": "ACTIVE",
            "isVerified": false,
            "createdAt": "2025-09-21T20:49:16.362Z",
            "updatedAt": "2025-09-21T20:49:16.362Z"
        }
    },
    {
        "id": 2,
        "title": "Getting Started with Next.js",
        "content": "Next.js introduces new features for building fast and scalable web applications. Learn how to set up your first project and explore its App Router.",
        "thumbnail": "https://teamraft.com/wp-content/uploads/nextjs.jpg",
        "isFeatured": true,
        "tags": [
            "Next.js",
            "React",
            "Web Development"
        ],
        "views": 4,
        "authorId": 1,
        "createdAt": "2025-09-21T21:35:27.233Z",
        "updatedAt": "2025-09-23T20:26:19.477Z",
        "author": {
            "id": 1,
            "name": "mahabub",
            "email": "mahabub@gmail.com",
            "password": "1234",
            "role": "USER",
            "phone": "01523645695",
            "picture": null,
            "status": "ACTIVE",
            "isVerified": false,
            "createdAt": "2025-09-21T20:49:16.362Z",
            "updatedAt": "2025-09-21T20:49:16.362Z"
        }
    }
]

export const GET = async () => {
    return Response.json(blogs)
}

export const POST = async (request: Request) => {
    const blog = await request.json();
    const newBlog = {
        ...blog,
        id: blogs.length + 1
    };
    blogs.push(newBlog)
    return new NextResponse(JSON.stringify(newBlog), {
        status: 201,
        headers: {
            "Content-type": "application/json"
        }
    })
}
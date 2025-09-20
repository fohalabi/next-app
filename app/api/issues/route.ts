import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
// import prisma from '@/lib/prisma'; // commented out temporarily

const createIssueSchema = z.object({
    title: z.string().min(1).max(255),
    description: z.string().min(1)
});

export async function POST(request: NextRequest) {
    const body = await request.json();
    const validation = createIssueSchema.safeParse(body);
    
    if (!validation.success) {
        return NextResponse.json(validation.error.issues, {status: 400});
    }

    // commented out the Prisma code temporarily
    // const newIssue = await prisma.issue.create({
    //     data: { title: body.title, description: body.description}
    // });

    // Return a test response
    return NextResponse.json({ 
        message: "API is working without database!",
        receivedData: {
            title: body.title,
            description: body.description
        },
        timestamp: new Date().toISOString()
    }, {status: 201});
}
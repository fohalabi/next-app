import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { PrismaClient } from '@prisma/client'; // Direct import

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
    
    // Try direct Prisma instantiation
    const prisma = new PrismaClient();
    
    try {
        const newIssue = await prisma.issue.create({
            data: { title: body.title, description: body.description}
        });

        await prisma.$disconnect();
        return NextResponse.json(newIssue, {status: 201});
    } catch (error) {
        console.error('Prisma error:', error);
        await prisma.$disconnect();
    
        const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred';
        return NextResponse.json({ error: errorMessage }, {status: 500});
    }
}
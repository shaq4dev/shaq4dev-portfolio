import {projects} from '@/lib/projects'
import {NextRequest, NextResponse} from "next/server";

export async function GET(){
    return NextResponse.json(projects)
}

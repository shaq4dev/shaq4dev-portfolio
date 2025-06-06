import { projects } from '@/lib/projects'
import { NextResponse } from 'next/server'

export async function GET(
    request: Request,
    { params }: { params: { id: string } }
) {
    const id = await params // no await here
    // const num = parseInt(id)
    console.log(id)
    // const project = projects.find(p => p.id === id)
    // console.log(project)
    // console.log(projects[num].id)

    if (!project) {
        return NextResponse.json({ error: 'Project not found' }, { status: 404 })
    }

    return NextResponse.json(project)
}

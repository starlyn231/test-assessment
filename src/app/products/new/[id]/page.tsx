import { notFound } from 'next/navigation'
import { db } from "@/app/lib/db"
import Link from 'next/link';
import * as actions from '@/app/action';
interface SnippetShowPageProps {
    params: {
        id: string;
    }
}


export default async function SnippetShow(props: SnippetShowPageProps) {
    await new Promise((r) => setTimeout(r, 2000))
    const snippet = await db.products.findFirst({
        where: {
            id: parseInt(props.params.id)
        }
    })
    if (!snippet) {
        notFound()
    }
    const deleteSnippetAction = actions.deleteSnippet.bind(null, snippet.id)
    return (
        <div>
            <div className="flex m-4 justify-between items-center">
                <h1 className="text-xl font-bold">{snippet.title}</h1>
                <div className="flex gap-4">
                    <Link
                        href={`/products/new/${snippet.id}/edit`}
                        className="p-2 border rounded"
                    >
                        Edit
                    </Link>
                    <form action={deleteSnippetAction}>

                        <button className="p-2 border rounded">Delete</button>
                    </form>
                </div>
            </div>
            <pre className="p-3 border rounded bg-gray-200 border-gray-200">
                <code>{snippet.code}</code>
            </pre>
        </div>
    )
}

// Return a list of `params` to populate the [slug] dynamic segment
export async function generateStaticParams() {
    const snippets = await db.products.findMany()

    return snippets.map((snippet: any) => ({
        id: snippet.id.toString(),
    }))
}
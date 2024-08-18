'use server';
import { redirect } from "next/navigation";
import { db } from "../lib/db";
//  const snippet = await db.products.create({
export async function createSnippet(
    formState: { message: string },
    formData: FormData
) {
    try {
        // Check the user's inputs and make sure they're valid
        const title = formData.get('title');
        const code = formData.get('code');

        if (typeof title !== 'string' || title.length < 3) {
            return {
                message: 'Title must be longer',
            };
        }
        if (typeof code !== 'string' || code.length < 10) {
            return {
                message: 'Code must be longer',
            };
        }

        // Create a new record in the database
        await db.products.create({
            data: {
                title,
                code,
            },
        });
    } catch (err: unknown) {
        if (err instanceof Error) {
            return {
                message: err.message,
            };
        } else {
            return {
                message: 'Something went wrong...',
            };
        }
    }

    // Redirect the user back to the root route
    redirect('/');
}


export async function editSnippet(id: number, code: string) {
    await db.products.update({
        where: { id },
        data: { code }
    })
    redirect(`/products/new/${id}`);
}

export async function deleteSnippet(id: number,) {
    await db.products.delete({
        where: { id },
    })
    redirect(`/`);
}
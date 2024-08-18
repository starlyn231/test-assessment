"use client"
import { FC } from 'react'
import { useFormState } from 'react-dom';
import * as actions from '@/app/action'
interface pageProps {

}
const initialState = {
    message: '',
}


const SnippetCreatePage: FC<pageProps> = ({ }) => {
    const [formState, action] = useFormState(actions.createSnippet, initialState)

    return (
        <div className="flex w-full justify-center">


            <form action={action} className="flex w-full flex-col justify-center items-center ">
                <h3 className="font-bold m-3 flex-col">Create a Snippet</h3>
                <div className="flex flex-col gap-4 w-[80%] p-2">
                    <div className="flex gap-4">
                        <label className="w-12" htmlFor="title">
                            Title
                        </label>
                        <input
                            name="title"
                            className="border rounded p-2 w-full"
                            id="title"
                        />
                    </div>
                    <div>

                    </div>
                    <div className="flex gap-4">
                        <label className="w-12" htmlFor="code">
                            Code
                        </label>
                        <input
                            name="code"
                            className="border rounded p-2 w-full"
                            id="code"
                        />
                    </div>
                    {formState.message ? (
                        <div className="my-2 p-2 bg-red-200 border rounded border-red-400">
                            {formState.message}
                        </div>
                    ) : null}
                    <button type="submit" className="rounded p-2 bg-blue-200">
                        Create
                    </button>
                </div>
            </form>
        </div>
    )
}

export default SnippetCreatePage;

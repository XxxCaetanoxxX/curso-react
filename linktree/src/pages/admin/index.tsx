import { Header } from "../../components/header";
import { Input } from "../../components/input";
import { useState } from 'react'

export function Admin() {
    const [nameInput, setNameInput] = useState<string>('');
    const [urlInput, setUrlInput] = useState<string>('');
    const [textColorInput, setTextColorInput] = useState<string>('#f1f1f1');
    const [backgroundColorInput, setBackgroundColorInput] = useState<string>('#121212');


    return (
        <div className="flex flex-col items-center min-h-screen pb-7 px-2">
            <Header />
            <form className="flex flex-col mt-8 mb-3 w-full max-w-xl">
                <label className="text-white font-medium mt-2 mb-2">Nome do link</label>
                <Input
                    placeholder="Digite o nome do link"
                    value={nameInput}
                    onChange={(e) => setNameInput(e.target.value)}
                />

                <label className="text-white font-medium mt-2 mb-2">Url do link</label>
                <Input
                    type="url"
                    placeholder="Digite a url do link"
                    value={urlInput}
                    onChange={(e) => setUrlInput(e.target.value)}
                />

                <section className="flex my-4 gap-5">

                    <div className="flex gap-2">
                        <label className="text-white font-medium mt-2 mb-2">Cor do link</label>
                        <input
                            type="color"
                            value={textColorInput}
                            onChange={(e) => setTextColorInput(e.target.value)}
                        />
                    </div>

                    <div className="flex gap-2">
                        <label className="text-white font-medium mt-2 mb-2">Fundo do link</label>
                        <input
                            type="color"
                            value={backgroundColorInput}
                            onChange={(e) => setBackgroundColorInput(e.target.value)}
                        />
                    </div>

                </section>

                <div className="flex items-center justify-center flex-col mb-7 p-1 border-gray-100/25 border rounded-md">
                    <label className="text-white font-medium mt-2 mb-3">Veja como esta ficando:</label>
                    <article
                        className="w-11/12 max-w-lg flex flex-col items-center justify-between bg-zinc-900 rounded px-1 py-3"
                        style={{ marginBottom: 8, marginTop: 8, backgroundColor: backgroundColorInput, color: textColorInput }}
                    >
                        <p>Canal do Youtube</p>
                    </article>
                </div>
            </form>
        </div>
    )
}
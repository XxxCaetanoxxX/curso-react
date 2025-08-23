import { Header } from "../../components/header";
import { Input } from "../../components/input";
import { useState, type FormEvent, useEffect } from 'react'
import { FiTrash } from "react-icons/fi";

import { db } from '../../services/firebaseConnection'
import { addDoc, collection, onSnapshot, query, orderBy, doc, deleteDoc } from 'firebase/firestore'

interface LinkProps {
    id: string,
    name: string,
    url: string,
    bg: string,
    color: string
}

export function Admin() {
    const [nameInput, setNameInput] = useState<string>('');
    const [urlInput, setUrlInput] = useState<string>('');
    const [textColorInput, setTextColorInput] = useState<string>('#f1f1f1');
    const [backgroundColorInput, setBackgroundColorInput] = useState<string>('#121212');
    const [links, setLinks] = useState<LinkProps[]>([]);

    useEffect(() => {
        const linksRef = collection(db, 'links');
        const queryRef = query(linksRef, orderBy("created", "asc"));

        const unsub = onSnapshot(queryRef, (snapshot) => {
            let lista: LinkProps[] = [];

            snapshot.forEach((doc) => {
                lista.push({
                    id: doc.id,
                    name: doc.data().name,
                    url: doc.data().url,
                    bg: doc.data().bg,
                    color: doc.data().color
                })
            })

            setLinks(lista);
        })

        //para de monitorar o banco quando sai da pagina
        return () => {
            unsub();
        }
    }, [])

    function hanldeRegister(e: FormEvent) {
        e.preventDefault();

        if (nameInput === '' || urlInput === '') {
            alert('Preencha todos os campos!');
            return;
        }

        addDoc(collection(db, 'links'), {
            name: nameInput,
            url: urlInput,
            bg: backgroundColorInput,
            color: textColorInput,
            created: new Date()
        }).then(() => {
            setNameInput('');
            setUrlInput('');
            console.log('cadastrado com sucesso')
        }).catch((error) => {
            console.log('ERRO AO CADASTRAR NO BANCO', error);
        })
    }

    async function handleDelete(id: string) {
        const docRef= doc(db, "links", id);
        await deleteDoc(docRef);
    }

    return (
        <div className="flex flex-col items-center min-h-screen pb-7 px-2">
            <Header />
            <form className="flex flex-col mt-8 mb-3 w-full max-w-xl" onSubmit={hanldeRegister}>
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

                {nameInput !== '' && (

                    <div className="flex items-center justify-center flex-col mb-7 p-1 border-gray-100/25 border rounded-md">
                        <label className="text-white font-medium mt-2 mb-3">Veja como esta ficando:</label>
                        <article
                            className="w-11/12 max-w-lg flex flex-col items-center justify-between bg-zinc-900 rounded px-1 py-3"
                            style={{ marginBottom: 8, marginTop: 8, backgroundColor: backgroundColorInput, color: textColorInput }}
                        >
                            <p>{nameInput}</p>
                        </article>
                    </div>
                )}

                <button
                    type="submit"
                    className="bg-blue-600 h-9 rounded-md text-white font-medium gap-4 flex justify-center items-center mb-7">
                    Cadastrar
                </button>
            </form>

            <h2 className="font-bold text-white text-2xl mb-4">
                Meus links
            </h2>

            {links.map((link) => (
                <article
                    key={link.id}
                    className="flex items-center justify-between w-11/12 max-w-xl rounded py-3 px-2 mb-2 select-none"
                    style={{ backgroundColor: link.bg, color: link.color }}>
                    <p>{link.name}</p>
                    <div>
                        <button
                            className="border border-dashed py-1 p-1 rounded bg-transparent cursor-pointer"
                            onClick={() => handleDelete(link.id)}
                        >
                            <FiTrash size={18} color="#FFF" />
                        </button>
                    </div>
                </article>
            ))}
        </div>
    )
}
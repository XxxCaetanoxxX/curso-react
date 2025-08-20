import { Social } from "../../components/social"
import { FaYoutube } from "react-icons/fa"
import { FaInstagram } from "react-icons/fa6"
import { LiaLinkedinIn } from "react-icons/lia"

export function Home() {
    return (
        <div className="flex flex-col w-full py-4 items-center justify-center">
            <h1 className="md:text-4xl text-3xl font-bold text-white mt-20">Caetano César</h1>
            <span className="text-gray-50 mb-5 mt-20">Veja meus links ⬇️</span>

            <main className="flex flex-col w-11/12 max-w-xl text-center">
                <section className="bg-white mb-4 w-full py-2 rounded-lg select-none transition-transform hover:scale-105 cursor-pointer">
                    <a>
                        <p className="text-base md:text-lg">
                            Canal no Youtube
                        </p>
                    </a>
                </section>

                <footer className="flex justify-center gap-3 my-4">
                    <Social
                        url="https://www.youtube.com/@caetanocesar5272"
                        icon={<FaYoutube className="w-6 h-6 text-red-600" />}
                    />

                    <Social
                        url="https://www.instagram.com/caet_cesar/"
                        icon={<FaInstagram className="w-6 h-6 text-pink-500" />}
                    />

                    <Social
                        url="https://www.linkedin.com/in/caetanocesar/"
                        icon={<LiaLinkedinIn className="w-6 h-6 text-blue-500" />}
                    />
                </footer>
            </main>
        </div>
    )
}
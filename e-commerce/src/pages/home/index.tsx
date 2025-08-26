import { BsCartPlus } from "react-icons/bs"

export function Home() {
    return (
        <div>
            <main className="w-full max-w-7xl px-4 mx-auto ">
                <h1 className="font-bold text-2xl mb-4 mt-10 text-center">Produtos em alta</h1>

                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-5">

                    <section className="w-full">
                        
                        <img
                            className="w-full rounded-lg max-h-70 mb-2"
                            alt="Logo do produto"
                            src="https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/iphone-card-40-iphone16prohero-202409_FMT_WHH?wid=508&hei=472&fmt=p-jpg&qlt=95&.v=MjUrdW9rK0I3Y0hBcFdUR2pNVTRtUFpIU2c1QXYxN1o5THJsVFdubi8vdU9STS9wYXZTN1hicnBjZ2p3Y1lQVndnZDdrU0tSek5hTHNwZzJKOWwvbnRrb3YwRE90eklmVkIwdHovcEFheWlka3BhTzl6cklqNm1lL21taEZoT3c" />
                        <p className="font-medium mt-1 mb-2"> Iphone 14 pro max</p>

                        <div className="flex gap-3 items-center">
                            <strong className="text-zinc-700/90">R$ 4.500,00</strong>
                            <button className="bg-zinc-900 p-1 rounded">
                                <BsCartPlus size={20} color="#FFF" />
                            </button>
                        </div>

                    </section>

                </div>
            </main>
        </div>
    )
}
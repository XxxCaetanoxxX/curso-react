export function Cart() {
    return (
        <div className="w-full max-w-7xl mx-auto">
            <h1 className="font-medium text-2xl text-center my-4">Meu carrinho</h1>
            <section className="flex items-center justify-between border-b-2 border-gray-300">
                <img 
                alt="Logo do produto"
                src="https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/iphone-card-40-iphone16prohero-202409_FMT_WHH?wid=508&hei=472&fmt=p-jpg&qlt=95&.v=MjUrdW9rK0I3Y0hBcFdUR2pNVTRtUFpIU2c1QXYxN1o5THJsVFdubi8vdU9STS9wYXZTN1hicnBjZ2p3Y1lQVndnZDdrU0tSek5hTHNwZzJKOWwvbnRrb3YwRE90eklmVkIwdHovcEFheWlka3BhTzl6cklqNm1lL21taEZoT3c"
                className="w-28"
                />
                <strong>Preço: R$1.000,00</strong>

                <div className="flex gap-3 items-center justify-center">
                    <button className="bg-slate-600 px-2 rounded text-white font-medium flex items-center justify-center"
                    >
                        -
                    </button>
                    1
                    <button className="bg-slate-600 px-2 rounded text-white font-medium flex items-center justify-center"
                    >
                        +
                    </button>
                </div>

                <strong className="float-right">
                    Subtotal:R$1.000,00
                </strong>
            </section>

            <p className="font-bold mt-4">Total: R$1.000,00</p>
        </div>
    )
}
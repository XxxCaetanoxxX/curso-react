import { useContext } from 'react'
import { CartContext } from '../../contexts/cartContext';
import { Link } from 'react-router-dom';

export function Cart() {
    const { cart } = useContext(CartContext);

    const total = cart.reduce((acc, product) => {
        return acc + product.price * product.amount;
    }, 0);

    return (
        <div className="w-full max-w-7xl mx-auto">
            {cart.length > 0 ? (
                <>
                    <h1 className="font-medium text-2xl text-center my-4">Meu carrinho</h1>

                    {cart.map(product => (
                        <section
                            key={product.id}
                            className="flex items-center justify-between border-b-2 border-gray-300">
                            <img
                                alt="Logo do produto"
                                src={product.cover}
                                className="w-28"
                            />
                            <strong>Preço: {product.price.toLocaleString("pt-BR", {
                                style: "currency",
                                currency: "BRL",
                            })}</strong>

                            <div className="flex gap-3 items-center justify-center">
                                <button className="bg-slate-600 px-2 rounded text-white font-medium flex items-center justify-center"
                                >
                                    -
                                </button>
                                {product.amount}
                                <button className="bg-slate-600 px-2 rounded text-white font-medium flex items-center justify-center"
                                >
                                    +
                                </button>
                            </div>

                            <strong className="float-right">
                                Subtotal: {product.total.toLocaleString("pt-BR", {
                                    style: "currency",
                                    currency: "BRL"
                                })}
                            </strong>
                        </section>
                    ))}

                    <p className="font-bold mt-4">Total: {total.toLocaleString("pt-BR", {
                        style: "currency",
                        currency: "BRL"
                    })}</p>
                </>
            ) : (
                <div className='flex flex-col items-center justify-center'>
                    <p className='font-medium pt-3'>Seu carrinho esta vazio</p>
                    <Link className='bg-slate-600 my-3 p-1 px-3 rounded font-medium text-white' to="/">
                        Acessar Produtos
                    </Link>
                </div>
            )}

        </div>
    )
}
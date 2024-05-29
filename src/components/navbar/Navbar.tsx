﻿import { User, ShoppingCart, MagnifyingGlass } from "@phosphor-icons/react"
import { Link } from "react-router-dom"

function Navbar() {

    return (

        <div className='
            w-full 
            bg-cyan-800  
            text-white 
            flex 
            justify-center 
            py-1
        '>
            <div className="
                container 
                flex 
                justify-between 
                text-lg
            ">
                <Link to='/home'>
                    <img
                        src="https://ik.imagekit.io/mnz3yzqzot/cruz-vermelha.png?updatedAt=1717007308743"
                        alt="Logo"
                        className='w-14'
                    />
                </Link>

                <div className="flex-1 flex justify-center items-center relative w-30 text-black">
                        <form>
                            <input className="h-9 w-90 rounded-lg px-4 py-4 focus:outline-none"
                                type="search"
                                placeholder="Pesquisar produto"
                                id="busca"
                                name="busca"
                                required
                            />
                            <button type="submit" className="h-9 w-9 p-2.5 ms-2 text-sm font-medium text-white bg-red-600 hover:bg-teal-900 rounded-lg border border-teal-700 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-teal-600 dark:hover:bg-teal-700 dark:focus:ring-teal-800">
                                <MagnifyingGlass size={14} weight="bold"/>
                            </button>
                        </form>
                    </div>

                <div className='flex gap-4 py-4'>
                    <Link to='/categorias' className='hover:underline'>Categorias</Link>
                    <Link to='/cadcategoria' className='hover:underline'>Cadastrar Categoria</Link>
                    <User size={32} weight='bold' />
                    <ShoppingCart size={32} weight='bold' />
                </div>
            </div>
        </div>
    )
}

export default Navbar
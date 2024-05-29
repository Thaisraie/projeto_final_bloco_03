

function Home() {
    return (
        <>
            <div className="
                bg-amber-100 
                flex 
                justify-center
                ">
                <div className='
                    container 
                    grid 
                    grid-cols-2 
                    text-cyan-800
                    '>
                    <div className="
                        flex 
                        flex-col 
                        gap-4 
                        items-center 
                        justify-center 
                        py-4
                        ">
                        <h2 className='
                            text-5xl 
                            font-bold
                            '>
                            Seja bem vinde!
                        </h2>
                        <p className='text-xl'>Aqui você encontra Medicamentos e Cosméticos!</p>

                    </div>

                    <div className="flex justify-center ">
                        <img
                            src="https://ik.imagekit.io/mnz3yzqzot/cruz-vermelha.png?updatedAt=1717007308743"
                            alt="Imagem Página Home"
                            className='w-1/2'
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home
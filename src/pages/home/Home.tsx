

function Home() {
    return (
        <>
            <div className="
                bg-neutral-500 
                flex 
                justify-center
                ">
                <div className='
                    container 
                    grid 
                    grid-cols-2 
                    text-white
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
                            src="https://ik.imagekit.io/mnz3yzqzot/oie_transparent%20(1).png?updatedAt=1716994435756"
                            alt="Imagem Página Home"
                            className='w-2/4'
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home
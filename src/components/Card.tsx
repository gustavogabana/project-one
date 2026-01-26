function Card() {
    return (
        <>
            <div className="card bg-base-100 w-96 shadow-xl border border-base-200">

                {/* Carousel inside figure tag */}
                <figure className="h-64 relative">
                    <div className="carousel w-full h-full">
                    
                    {/* Slide 1 */}
                    <div id="item1" className="carousel-item relative w-full">
                        <img
                        src="https://img.daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.webp"
                        className="w-full object-cover" />
                        <div className="absolute left-2 right-2 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#item4" className="btn btn-circle btn-xs">❮</a>
                        <a href="#item2" className="btn btn-circle btn-xs">❯</a>
                        </div>
                    </div>

                    {/* Slide 2 */}
                    <div id="item2" className="carousel-item relative w-full">
                        <img
                        src="https://img.daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.webp"
                        className="w-full object-cover" />
                        <div className="absolute left-2 right-2 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#item1" className="btn btn-circle btn-xs">❮</a>
                        <a href="#item3" className="btn btn-circle btn-xs">❯</a>
                        </div>
                    </div>

                    {/* Slide 3 */}
                    <div id="item3" className="carousel-item relative w-full">
                        <img
                        src="https://img.daisyui.com/images/stock/photo-1414694762283-acccc27bca85.webp"
                        className="w-full object-cover" />
                        <div className="absolute left-2 right-2 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#item2" className="btn btn-circle btn-xs">❮</a>
                        <a href="#item4" className="btn btn-circle btn-xs">❯</a>
                        </div>
                    </div>

                    </div>
                </figure>

                {/* Card body */}
                <div className="card-body">
                    <div className="flex justify-between items-center">
                        <h2 className="card-title text-gray-800">Nome da Profissional</h2>
                        <div className="badge badge-secondary">Novo</div>
                    </div>
                    <p className="text-sm text-base-content/70">
                        Descrição breve que aparece logo abaixo do nome para dar contexto ao usuário.
                    </p>
                    <div className="card-actions justify-end mt-4">
                    <button className="btn btn-primary btn-sm">Ver Perfil</button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Card;
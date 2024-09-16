function Card({ id }) {
    return (
        <div className="container mx-auto border border-black rounded bg-gray-100 shadow-lg">
            <div className="row flex justify-center items-center">
                <h1 className="text-center text-lg font-bold">
                    Título do Card
                </h1>
                <p className="ml-2 border border-black rounded-full px-2">{id+1}</p>
            </div>
            <div className="row text-center">Texto de cima</div>
            <div className="row text-center">Texto de baixo</div>
        </div>
    );
}

const components = {
    Card
}

window.components = components;

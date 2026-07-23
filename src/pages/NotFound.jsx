import { Link } from "react-router-dom";

export default function NotFound() {
    return (
        <>
            <section className="flex flex-col justify-center items-center h-screen w-full relative">
                <div className="max-w-7xl w-full flex flex-col gap-10 px-7 md:px-20">
                    <h1 className="text-[clamp(2.7rem,5vw,5rem)] leading-none font-extrabold">Página no <br /> encontrada.</h1>
                    <p className="text-[clamp(1.2rem,2vw,1.25rem)] max-w-3xl">El sitio que intentas acceder no existe o fue removido de su sitio, verifica nuevamente el enlace de la página o regresa al inicio.</p>
                    <Link to="/" className="dark:bg-white dark:text-black bg-black w-fit h-11 px-6 font-medium rounded flex items-center">
                        Regresar al inicio
                    </Link>
                </div>
            </section>
        </>
    )
}
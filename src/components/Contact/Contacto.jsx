export default function ContactPage() {
    return (
        <div className="container mx-auto max-w-[1170px] px-4 py-8">
          
            <h1 className="text-4xl font-extrabold text-center text-blue-700 mb-6">
                Contacta con Nosotros
            </h1>

         
            <p className="text-xl text-center text-gray-600 mb-12">
                Estamos aquí para ayudarte. ¡Hablemos!
            </p>

           
            <div className="text-lg text-gray-800 leading-relaxed mb-12">
                <p className="mb-6">
                    Si tienes alguna pregunta, inquietud o sugerencia, no dudes en ponerte en contacto con nosotros.
                    Nuestro equipo de atención al cliente está disponible para ayudarte en todo lo que necesites. 
                    Aquí te proporcionamos varias formas para que puedas comunicarte con Pedigree.
                </p>

                <h2 className="text-2xl font-bold text-blue-700 mb-4">
                    Formas de Contacto
                </h2>

                <ul className="list-none space-y-4 mb-8">
                    <li>
                        <strong>Teléfono:</strong> +1 (800) 123-4567
                    </li>
                    <li>
                        <strong>Correo Electrónico:</strong> contacto@pedigree.com
                    </li>
                    <li>
                        <strong>Dirección:</strong> Calle Ficticia #123, Ciudad, País
                    </li>
                    <li>
                        <strong>Redes Sociales:</strong> 
                        <ul className="list-inline space-x-4 mt-2">
                            <li>
                                <a href="https://facebook.com/pedigree" target="_blank" className="text-blue-600 hover:text-blue-800">Facebook</a>
                            </li>
                            <li>
                                <a href="https://twitter.com/pedigree" target="_blank" className="text-blue-600 hover:text-blue-800">Twitter</a>
                            </li>
                            <li>
                                <a href="https://instagram.com/pedigree" target="_blank" className="text-blue-600 hover:text-blue-800">Instagram</a>
                            </li>
                        </ul>
                    </li>
                </ul>

                <h3 className="text-xl font-bold text-blue-700 mb-4">
                    Cómo Comunicarse
                </h3>

                <p>
                    Puedes contactarnos de varias maneras. Si prefieres hablar directamente, llámanos a nuestra línea de atención al cliente al 
                    <strong> +1 (800) 123-4567</strong>. Si tienes alguna consulta más específica, puedes enviarnos un correo a 
                    <strong> contacto@pedigree.com</strong> y nuestro equipo se pondrá en contacto contigo lo antes posible. 
                    También puedes seguirnos y enviarnos un mensaje a través de nuestras redes sociales, donde estaremos encantados de ayudarte. 
                    Recuerda que estamos aquí para brindarte el mejor servicio.
                </p>
            </div>

            <div className="bg-gray-100 p-8 rounded-lg shadow-lg mt-12">
                <h3 className="text-2xl font-bold text-blue-700 mb-4">
                    Envíanos tu Mensaje
                </h3>
                <form>
                    <div className="mb-4">
                        <label htmlFor="name" className="block text-gray-700 mb-2">Nombre</label>
                        <input
                            type="text"
                            id="name"
                            className="w-full p-3 border border-gray-300 rounded-lg"
                            placeholder="Tu nombre"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-gray-700 mb-2">Correo Electrónico</label>
                        <input
                            type="email"
                            id="email"
                            className="w-full p-3 border border-gray-300 rounded-lg"
                            placeholder="Tu correo electrónico"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="message" className="block text-gray-700 mb-2">Mensaje</label>
                        <textarea
                            id="message"
                            className="w-full p-3 border border-gray-300 rounded-lg"
                            placeholder="Escribe tu mensaje"
                            rows="4"
                        ></textarea>
                    </div>
                    <button type="submit" className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
                        Enviar Mensaje
                    </button>
                </form>
            </div>
        </div>
    );
}

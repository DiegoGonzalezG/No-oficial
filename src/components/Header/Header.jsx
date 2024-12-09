import Navbar from "../Navbar/Navbar";

export default function HeaderComponent() {
    const Logo = '/logoP.png';
    
    const handleSearch = (e) => {
        e.preventDefault();
        const query = e.target.search.value;
        console.log("Buscando:", query);
      
    };

    return (
        <div className="bg-[rgb(46,48,187)] py-[10px] w-[100vw]">
            <div className="flex h-[190px] items-center justify-between">
              
                <div><img src={Logo} alt="Logo Pedigree 1°" /></div>

            
                <form onSubmit={handleSearch} className="flex items-center justify-center w-full max-w-4xl mx-auto">
                    <input
                        type="text"
                        name="search"
                        placeholder="Buscar..."
                        className="w-full px-7 py-3 rounded-lg text-black border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <button
                        type="submit"
                        className="bg-blue-600 text-white rounded-lg px-6 py-3 ml-4 hover:bg-blue-700 transition-colors">
                        Buscar
                    </button>
                </form>

                
                <div className="flex items-center space-x-4">
                    <Navbar />
                </div>
            </div>
        </div>
    );
}

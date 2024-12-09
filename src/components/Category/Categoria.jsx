import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { getProductByCategory } from "../../data/asyncMock"; 
import ItemList from "../ItemList/ItemList";
import Loading from "../Loading/Loading";


const foodCategories = ["Snacks", "Comida Húmeda", "Comida Seca", "Suplementos"];

export default function ProductsCategory() {
    const [loading, setLoading] = useState(true);
    const [products, setProducts] = useState([]);
    const [error, setError] = useState(null);
    const { categoryId } = useParams(); 
    const [activeButton, setActiveButton] = useState(categoryId || "Comida Seca"); 

    useEffect(() => {
        const fetchProducts = async () => {
            setLoading(true);
            setError(null);

            try {
                const data = await getProductByCategory(activeButton); 
                if (data.length > 0) {
                    setProducts(data); 
                } else {
                    setProducts([]);
                    setError("No se encontraron productos en esta categoría.");
                }
            } catch (err) {
                setError("Hubo un error al cargar los productos.");
                console.log(err);
            } finally {
                setLoading(false); 
            }
        };

        fetchProducts();
    }, [activeButton]); 

  
    const handleButtonClick = (category) => {
        setActiveButton(category);
    };

    return (
        <div className="container mx-auto max-w-[1170px] py-8">
            
            <div className="categories-list mb-8">
                <ul className="flex justify-center space-x-6">
                    {foodCategories.map((category) => (
                        <li key={category}>
                            <Link
                                to={`/category/${category}`}
                                className={`px-6 py-3 text-lg font-semibold rounded-full transition-all duration-300 ease-in-out 
                                    ${activeButton === category 
                                        ? "bg-yellow-500 text-white shadow-lg transform scale-105" 
                                        : "bg-blue-500 text-white hover:bg-blue-600"} 
                                    hover:scale-105 hover:shadow-xl`}
                                onClick={() => handleButtonClick(category)} 
                            >
                                {category}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>

            {loading ? (
                
                <div className="flex justify-center">
                    <Loading />
                </div>
            ) : error ? (
                
                <div className="text-center text-red-500 mt-6">
                    <p>{error}</p>
                </div>
            ) : (
              
                <ItemList products={products} />
            )}
        </div>
    );
}
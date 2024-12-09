import { Link } from "react-router-dom";
import ItemList from "../ItemList/ItemList";


export default function HomePage() {
    const imgBanner = './perrofachero.png';
    return (
        <div>
            <div 
                className="h-[840px] w-100vw] bg-cover bg-center"
                style={{ backgroundImage: `url(${imgBanner})` }}>    
            </div>

            <div className="container mx-auto max-w-[1170px] my-[80px]">
                <ItemList />
    
            </div>
        </div>
    );
}

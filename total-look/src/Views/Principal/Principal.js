import hotSale from '../../assets/hotsale.jpg';
import ropa from '../../assets/ropa.png';
import zapatos from '../../assets/zapatos.png';
import bolsas from '../../assets/bolsas.png';
import './Principal.css';

const Principal =()=>{
    return(
        <div className='principal'>
            <h2>Ver promociones</h2>
            <img src={hotSale} className="hotSale" alt="oferta" />
            <h2>Ver todo</h2>
            <div className='categories'>
                <img src={ropa} className="categorie" alt="Ropa" />
                <img src={zapatos} className="categorie" alt="Zapatos" />
                <img src={bolsas} className="categorie" alt="Bolsas" />
            </div>
        </div>
    )
}

export default Principal;
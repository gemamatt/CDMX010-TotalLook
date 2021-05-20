import lupa from '../../../assets/lupa.png';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faSearch} from '@fortawesome/free-solid-svg-icons';
import './Searcher.css';

const Searcher =()=>{
    return(
        <div className='searcher'>
            {/* <img src={lupa} className="lupa" alt="lupa" /> */}
            <input
                    type="text"
                    placeholder="Buscar"
                    className="textField"
                    name="busqueda"
                    // value={this.state.busqueda}
                    // onChange={this.onChange}
                />
                <button type="button" className="btnBuscar" FontAwesomeIcon icon={faSearch} >

                </button>
        </div>
    )
}

export default Searcher;
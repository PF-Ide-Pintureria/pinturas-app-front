import style from './Featured.module.css';
import { Link } from 'react-router-dom';

const Featured = ({ id, name, image }) => {
    return (

        <div className={style.container}>
            <h2 className={style.info}>{name}</h2>
            <img src={image} alt={name} className={style.image} />
            <Link to={'/details/${id}' + { id }}> Ver Producto </Link>
        </div>
        
    );
}

export default Featured;
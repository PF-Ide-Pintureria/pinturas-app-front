import { Link } from "react-router-dom";
import React from 'react';

const AboutCard = () => {
    return (
        <div className="flex w-full justify-center ">
            <div className="w-9/12 gap-28">

            <Link className='flex columns-1 w-auto h-auto justify-center align-center mt-11' to='/about'>
                <h1 className='text-primary text-3xl text-center uppercase font-bold'>Sobre Nosotros</h1>
            </Link>
            <p className='text-secondary text-sm mb-11 mt-11 font-semibold font-serif text-center'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad incidunt dolorem, deleniti labore corrupti voluptatibus excepturi culpa aliquam! Impedit cum sit iste reiciendis ducimus earum itaque possimus? Iusto, eveniet sapiente. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id ipsa molestias hic error laudantium veritatis vitae ab ullam cupiditate ea magnam, tempore dolor repudiandae laboriosam amet porro aliquid magni molestiae?<br />
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id optio temporibus dolore maxime repellat! Quaerat eius architecto quisquam laborum, sed accusantium, a id earum expedita, consequatur quibusdam. Ex, laudantium recusandae!.</p>
            </div>
        </div>
    );
}

export default AboutCard;
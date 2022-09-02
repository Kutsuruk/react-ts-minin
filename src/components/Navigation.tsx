import {Link} from "react-router-dom";

const Navigation = () => {
    return(
        <nav className='h-[50px] flex justify-between px-5 bg-gray-500 items-center text-white'>
            <span className='font-bold'>React Product</span>

            <span>
                <Link className='mr-2' to='/'>Products</Link>
                <Link className='mr-2' to='about'>About</Link>
            </span>
        </nav>
    )
}

export default Navigation
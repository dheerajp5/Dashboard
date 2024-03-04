import {Link} from 'react-router-dom'

function ErrorPage() {
    return (
        <div className='h-full flex flex-col justify-center items-center'>
            <h1 className="text-4xl text-[#00337A]/80 font-bold m-2">404 Page Not Found</h1>
            <p className="text-black/60 text-lg font-semibold">The Page you are looking for is avaliable</p>
            <Link className='bg-[#00337A]/80 hover:bg-[#00337A]/70 px-6 py-2 text-white m-3' to='/'>Go to DashBoard </Link>
        </div>
    )
}

export default ErrorPage;
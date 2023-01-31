export default function SecondaryNav() {
    return (
        <div className="flex justify-center w-full bg-black h-8">
            <nav className='flex justify-end w-10/12'>
                <ul className="flex items-center gap-4 pr-4 text-gray-300 underline text-xs">
                    <a className="hover:text-gray-400" href="#">Szállítás és fizetés</a>
                    <a className="hover:text-gray-400" href="#">GYIK</a>
                    <a className="hover:text-gray-400" href="#">Rólunk</a>
                    <a className="hover:text-gray-400" href="#">Elérhetőség</a>
                </ul>
            </nav>
        </div>
    )
  }
 
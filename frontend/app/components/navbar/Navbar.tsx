import Image from "next/image";
import Link from "next/link";
import SearchFilters from './SearchFilters';
import UserNav from './UserNav';
import AddPropertyButton from './AddPropertyButton';
import {getUserId} from '@/app/lib/actions'

const Navbar = async () => {
    const userId = await getUserId()
    return (
    <nav className="w-full fixed top-0 left-0 py-6 border-b bg-white z-10">
        <div className="max-w-[100%] max-auto px-6">
            <div className="flex justify-between items-center">
                <div className="hidden sm:block">
                <Link href="/">
                    <Image src="/logo.png" alt="DjangoBnb logo" width={150} height={38} />
                </Link>
                </div>

                <div className="flex space-x-6">
                    <SearchFilters/>
                </div>

                <div className="flex items-center space-x-6">
                    <AddPropertyButton userId={userId}/>
                    <UserNav
                        userId={userId}
                    />
                </div>
            </div>
        </div>
    </nav>
    )
}

export default Navbar;

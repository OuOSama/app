'use client'
import { useSession } from "next-auth/react"
import Image from "next/image"
import { useRouter } from "next/navigation"

export default function Sidebar() {
    const { data: session } = useSession()
    const router = useRouter();

    const handleNaviagtion = (path) => {
        const drawer = document.getElementById('my-drawer')
        const Login_modal = document.getElementById('my_Login_modal')

        if (session) {
            router.push(path);
            drawer.checked = false;
        } else {
            if (path === '/') {
                router.push(path);
                drawer.checked = false;
            } else {
                drawer.checked = false;
                Login_modal.checked = true;
            }
        }
    }

    return (
        <div className="drawer w-7 mt-5 ml-5 bg-opacity-0 fixed z-50">
            <input id="my-drawer" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
                <label htmlFor="my-drawer" className="drawer-button cursor-pointer"><Image src="/menu.png" alt="menu" width={30} height={30} priority={true} quality={75} /></label>
            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
                <ul className="menu bg-base-200 text-base-content min-h-full w-52 p-4">
                    <li className="btn text-xl" onClick={() => handleNaviagtion('/')}>OShare</li>
                    <li onClick={() => handleNaviagtion('/')}><a><Image src="/home.png" alt="home" width={25} height={25} />Home</a></li>
                    <li onClick={() => handleNaviagtion('/Pages/new')}><a><Image src="/add.png" alt="add" width={25} height={25} />New</a></li>
                    <li onClick={() => handleNaviagtion('/Pages/collections')}><a><Image src="/bookmark.png" alt="bookmark" width={25} height={25} />Collections</a></li>
                    <li onClick={() => handleNaviagtion('/Pages/favorite')}><a><Image src="/favorite.png" alt="favorite" width={25} height={25} />Favorite</a></li>
                    <li onClick={() => handleNaviagtion('/Pages/setting')}><a><Image src="/settings.png" alt="settings" width={25} height={25} />Setting</a></li>
                </ul>
                <ul className="bg-gray-700 w-52 mt-auto h-14 menu text-base-content p-4 justify-center">
                    <li onClick={() => handleNaviagtion('/Pages/profile')}><a className="text-white">{session?.user?.image ? (<Image className="rounded-full" src={session.user.image} alt="user" width={30} height={30} />) : <Image src="/user_white.png" alt="user" width={25} height={25} />} {session?.user?.name ? session.user.name : "Profile"} </a></li>
                </ul>
            </div>
        </div>
    )
}
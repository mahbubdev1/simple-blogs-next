"use client"
import { LoginLink, LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components";
import Link from 'next/link';

const Navbar = ({ user }) => {
    return (
        <div className="bg-blue-600 text-white">
            <div className='container mx-auto navbar p-0'>
                <div className="flex-1">
                    <a className="btn btn-ghost text-xl">BlowViewer</a>
                </div>
                <div className="flex-none">
                    <div className="dropdown dropdown-end">
                        <div className="space-x-4 text-base mr-5 hidden items-center sm:flex">

                            <ul className="flex items-center space-x-1 sm:space-x-3">
                                <li><Link className="hover:underline" href='/'>Home</Link></li>
                                <Link href={`${user ? "/profile" : '/api/auth/login'}`} className="hover:underline">
                                    Profile
                                </Link>
                                {
                                    user ? <>
                                        <li>
                                            <LogoutLink>
                                                <button className="px-5 py-1 bg-pink-600 text-white rounded-lg" >Logout</button>
                                            </LogoutLink>
                                        </li>

                                    </>
                                        :
                                        <>
                                            <li>
                                                <LoginLink>
                                                    <button className="px-5 py-1 bg-pink-600 text-white rounded-lg" >Login</button>
                                                </LoginLink>
                                            </li>
                                        </>
                                }
                            </ul>
                        </div>
                    </div>
                    <div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img
                                    alt='User Profile'
                                    src={user ? user?.picture : 'https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp'} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Navbar;
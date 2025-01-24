
import Link from "next/link";
import React from "react";
import {
  RegisterLink,
  LoginLink,
  LogoutLink,
} from "@kinde-oss/kinde-auth-nextjs/components";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
const Navbar = async () => {
  const { getUser } = getKindeServerSession();
  const user = await getUser();
  return (
    <div className="bg-black/60 backdrop-blur-3xl sticky top-0 shadow-2xl text-white border-b border-gray-400 z-40">
{/* navi */}

<div className="navbar container w-11/12 mx-auto">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
         <ul className="space-y-2">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              {user?.email ? (
                <Link href="/Profile">Profile</Link>
              ) : (
                <Link href="/Profile">My Profile </Link>
              )}
            </li>

            {user ? (
              <>
                <LogoutLink>
                  <li >Log Out</li>
                </LogoutLink>
              </>
            ) : (
              <>
                <LoginLink postLoginRedirectURL="/">
                  <li className=" mb-2">Log In</li>
                </LoginLink>
                <RegisterLink postLoginRedirectURL="/">
                  <li>Sign Up</li>
                </RegisterLink>
              </>
            )}
          </ul>
      </ul>
    </div>
    <h2 className="justify-start text-xl font-bold text-green-500">
          ReadNest
        </h2>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
 {/* main  */}
 <ul className="flex gap-6 justify-center items-center  text-base">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              {user?.email ? (
                <Link href="/Profile">Profile</Link>
              ) : (
                <Link href="/Profile">My Profile </Link>
              )}
            </li>

            {user ? (
              <>
                <LogoutLink>
                  <li>Log Out</li>
                </LogoutLink>
              </>
            ) : (
              <>
                <LoginLink postLoginRedirectURL="/">
                  <li className="px-5 hover:bg-white/10 py-1 rounded-md ">Log In</li>
                </LoginLink>
                <RegisterLink postLoginRedirectURL="/">
                  <li className="px-5 hover:bg-white/10 py-1 rounded-md ">Sign Up</li>
                </RegisterLink>
              </>
            )}
          </ul>
    </ul>
  </div>
  <div className="navbar-end">
   
  </div>
</div>
























      {/* navigatin  */}
      {/* <div className="flex container mx-auto z-50 w-11/12">
        <h2 className="justify-start text-xl font-bold text-green-500">
          ReadNest
        </h2>
        <div className="flex  justify-center  w-full">
          <ul className="flex gap-6 justify-center items-center  text-base">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              {user?.email ? (
                <Link href="/Profile">Profile</Link>
              ) : (
                <Link href="/Profile">My Profile </Link>
              )}
            </li>

            {user ? (
              <>
                <LogoutLink>
                  <li>Log Out</li>
                </LogoutLink>
              </>
            ) : (
              <>
                <LoginLink postLoginRedirectURL="/">
                  <li>Log In</li>
                </LoginLink>
                <RegisterLink postLoginRedirectURL="/">
                  <li>Sign Up</li>
                </RegisterLink>
              </>
            )}
          </ul>
        </div>
      </div> */}
    </div>
  );
};

export default Navbar;






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
    <div className="bg-black/60 backdrop-blur-3xl py-4 sticky top-0 shadow-2xl text-white border-b border-gray-400 z-40">
      <div className="flex container mx-auto z-50">
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
                <Link href="/Profile">Profile</Link>
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
      </div>
    </div>
  );
};

export default Navbar;





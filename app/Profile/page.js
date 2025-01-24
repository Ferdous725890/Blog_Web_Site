import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

import React, { use } from "react";
import { LoginLink } from "@kinde-oss/kinde-auth-nextjs/components";

export const metadata = {
  title: "Read Nest || Profile",
  description: "readnest",
};







const page = async () => {
  const { getUser } = getKindeServerSession();
  const user = await getUser();
  return (
    <div>
      {user?.email ? (
      <>
        <p className="text-white"> Hi = 👋 {user?.given_name}</p>
        <p className="text-white">
          {
            user?.email
          }
        </p>
            </>
      ) : (
        <div className="flex w-56 text-xl pt-5">
          <p className="mr-2 ">Please</p>
          <LoginLink postLoginRedirectURL="/">Log In</LoginLink>
        </div>
      )}
    </div>
  );
};

export default page;

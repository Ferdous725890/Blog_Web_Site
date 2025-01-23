import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

import React from "react";
import { LoginLink } from "@kinde-oss/kinde-auth-nextjs/components";

const page = async () => {
  const { getUser } = getKindeServerSession();
  const user = await getUser();
  return (
    <div>
      {user?.email ? (
        <p className="text-white bg-red-500"> Hi = {user?.given_name}</p>
      ) : (
        <div className="flex w-56 text-xl pt-5">
            <p className="mr-2 ">
                
Please
            </p>
  <LoginLink postLoginRedirectURL="/">
            Log In
          </LoginLink>
        </div>
      )}
    </div>
  );
};

export default page;

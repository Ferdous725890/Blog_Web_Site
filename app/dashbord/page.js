import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/dist/types/server';
import React from 'react';

const Dashbord = async() => {
    const {getUser} =  getKindeServerSession()
    const user = await getUser()
    return (
        <div>
            <p>
               
            </p>
        </div>
    );
};

export default Dashbord;
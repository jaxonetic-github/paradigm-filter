
import react, { useActionState } from 'react'
import {Button , Image, Divider, Link} from "@heroui/react";
//import { Auth0Provider } from "@auth0/auth0-react";
//import { signupAuth } from '@/app/actions/auth';
//import { auth } from "./../../../auth";
import {auth} from "auth";
import SignupForm from './signup.tsx';
import SignOut from './signout.tsx';

 
export default async  function SessionComponent() {
const session = await auth();

if (!session?.user) return ( <p>No Session</p>);


//console.log('export default function SessionComponent', session);
  return (
   <>     <div>
    </div>
    <div className="rounded-t-md bg-gray-200 p-4 font-bold">
          Current Session
        </div>
        <pre className="whitespace-pre-wrap break-all px-4 py-6">
          {JSON.stringify(session, null, 2)}
        </pre>
  

   </>
  )
} 
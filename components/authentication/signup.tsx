
import react, { useActionState } from 'react'
import {Button , Image, Divider, Link} from "@heroui/react";
//import { Auth0Provider } from "@auth0/auth0-react";
//import { signupAuth } from '@/app/actions/auth';
//import { auth } from "@/auth";
//import {handleAuth} from "@auth0/nextjs-auth0";
import { signIn, signOut } from "../../auth.ts";


 
export default function SignupForm() {
  return (
   <> <form
      action={async () => {
        "use server"
        await signIn()
      }}
    >
      
      <button type="submit">Signin</button>
    </form>
        <form
      action={async () => {
        "use server"
        await signOut()
      }}
    >
      <button type="submit" > Sign Out  </button>
    </form></>
  )
} 
//export default function SignupForm() {

 // const session = await auth();

 /*
async function signupform(formData: FormData) {
  //  'use server'
 //  const [state, action, pending] = useActionState(signupAuth, undefined)

    const rawFormData = {
      name: formData.get('name'),
      email: formData.get('email'),
      passwd: formData.get('passwd'),
    }
 
    // mutate data
    // revalidate the cache
  }


 const {
    isLoading, // Loading state, the SDK needs to reach Auth0 on load
    isAuthenticated,
    error,
    loginWithRedirect: login, // Starts the login flow
    logout: auth0Logout, // Starts the logout flow
    user, // User profile
  } = useAuth0();

  const signup = () =>
    login({ authorizationParams: { screen_hint: "signup" } });

  const logout = () =>
    auth0Logout({ logoutParams: { returnTo: window.location.origin } });
    
  return (
       
      <div>
    <form>
      <div>
        <label htmlFor="name">Name</label>
        <input id="name" name="name" placeholder="Name" />
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <input id="email" name="email" type="email" placeholder="Email" />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input id="password" name="password" type="password" />
      </div>

      <Button type="submit">Sign Up</Button>
    </form>
{isAuthenticated ? (
    <>
      <p>Logged in as {user.email}</p>

      <h1>User Profile</h1>

      <pre>{JSON.stringify(user, null, 2)}</pre>

      <button onClick={logout}>Logout</button>
    </>
  ) : (
    <>
      {error && <p>Error: {error.message}</p>}

      <button onClick={handleAuth}>Login</button>
    </>
  )}
    </div>      
 
  )
}*/
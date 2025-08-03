import { signOut } from "../../auth.ts";
import { Button } from "@heroui/react";

export default function SignOut() {
  return (
    <form
      action={async () => {
        "use server"
        await signOut()
      }}
    >
      <button type="submit" > Sign Out  </button>
    </form>
  )
}
import Link from "next/link";
import { TicketIcon } from "@/components/ticketicon";

export const Header = async () => {
  return (
   <header className="navbar bg-indigo-950" >
  <div className="navbar-start">
    <TicketIcon />
    <div className="text-yellow-400 text-2xl font-bold">Eventify</div>
  </div>
  <div className="navbar-end">
    <p>Create event? </p>
    <a className="btn bg-indigo-950 text-yellow-400 p-4" href="/auth/login">Login</a>
    <a className="btn bg-yellow-400" href="/auth/register">Register</a>
  </div>
</header>
  );
};
"use client";
import { TicketIcon } from "@/components/ticketicon";
import { loginAction } from "./action";
import { useActionState } from "react";
import { useEffect } from "react";
import { toast } from "react-hot-toast";

export default function Page() {
  const [state, formAction, pending] = useActionState(loginAction, null);
  useEffect(() => {
    if (state?.status === "error") {
      toast.error(state.message);
    } else if (state?.status === "success") {
      toast.success(state?.message);
    }
  }, [state]);
  return (
    <div className="bg-indigo-950 w-screen h-screen grid md:grid-cols-2">
      <div className="hidden md:grid space-y-32 px-10 py-8">
        <div className="flex items-end">
          <TicketIcon />
          <div className="text-yellow-400 text-2xl font-bold">Eventify</div>
        </div>
        <div className="text-white text-3xl w-4/5">
          Discover tailored events. Sign up for personalized recommendations
          today!
        </div>
      </div>
      <div className="bg-white border-l rounded-s-3xl px-16 space-y-6 py-24">
        <div className="text-indigo-900 text-3xl font-bold">Login</div>
        <form action={formAction} className="space-y-3">
          <div>
            <label className="form-control w-full max-w-sm">
              <div className="label">
                <span className="label-text text-slate-600 text-sm">
                  E-mail Address
                </span>
              </div>
              <input
                name="email"
                defaultValue={state?.data?.email}
                type="email"
                placeholder="Enter your e-mail"
                className="input input-bordered w-full max-w-sm border border-slate-400 rounded-lg h-10 px-4 text-sm text-slate-600"
              />
            </label>
          </div>
          <div>
            <label className="form-control w-full max-w-sm">
              <div className="label">
                <span className="label-text text-slate-600 text-sm">
                  Password
                </span>
              </div>
              <input
                name="password"
                defaultValue={state?.data?.password}
                type="password"
                placeholder="Enter password"
                className="input input-bordered w-full max-w-sm border border-slate-400 rounded-lg h-10 px-4 text-sm text-slate-600"
              />
            </label>
          </div>
          <div>
            <button
              disabled={pending}
              className="w-full bg-indigo-950 max-w-sm py-2 border rounded-full text-white my-4 disabled:opacity-50"
            >
              Login
            </button>
          </div>
        </form>
        <div>
          <p className="text-gray-500">
            Don&apos;t have an account?{" "}
            <a href="/auth/register">
              <span className="text-indigo-900">Sign Up</span>
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

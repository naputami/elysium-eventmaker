"use client";
import { TicketIcon } from "@/components/ticketicon";
import { loginAction } from "./action";
import { useActionState } from "react";

export default function Page() {
  const [state, formAction, pending] = useActionState(loginAction, null);
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
      <div className="bg-white border-l rounded-s-3xl px-16 space-y-8 py-24">
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
          {state?.status === "success" ? (
            <div className="bg-emerald-50 text-emerald-600 text-sm p-2 flex justify-center items-center w-full max-w-sm">
              {state.message}
            </div>
          ) : null}
          {state?.status === "error" ? (
            <div className="bg-rose-50 text-rose-600 text-sm p-2 flex justify-center items-center w-full max-w-sm">
              {state.message}
            </div>
          ) : null}
        </form>
        <div className="flex items-center gap-1">
          <div className="text-indigo-900">Don&apos;t have an account?</div>
          <button className="text-indigo-600 ">Sign up</button>
        </div>
      </div>
    </div>
  );
}

"use client";
import { TicketIcon } from "@/components/ticketicon";
import { registerAction } from "./action";
import { useActionState } from "react";
import { toast } from "react-hot-toast";
import { useEffect } from "react";

export default function Page() {
  const [state, formAction, pending] = useActionState(registerAction, null);
  useEffect(() => {
    if (state?.message) toast.error(state.message);
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
      <div className="bg-white border-l rounded-s-3xl px-16 space-y-8 py-24">
        <div className="text-indigo-900 text-3xl font-bold">Create Account</div>
        <form action={formAction} className="space-y-3">
          <div>
            <label className="form-control w-full max-w-sm">
              <div className="label">
                <span className="label-text text-slate-600 text-sm">
                  Full Name
                </span>
              </div>
              <input
                name="name"
                type="text"
                defaultValue={state?.data?.name}
                placeholder="Enter your full name"
                className="input input-bordered w-full max-w-sm border border-slate-400 rounded-lg h-10 px-4 text-sm text-slate-600 "
              />
            </label>
          </div>
          <div>
            <label className="form-control w-full max-w-sm">
              <div className="label">
                <span className="label-text text-slate-600 text-sm">
                  E-mail Address
                </span>
              </div>
              <input
                name="email"
                type="email"
                defaultValue={state?.data?.email}
                placeholder="Enter your e-mail"
                className="input input-bordered w-full max-w-sm border border-slate-400 rounded-lg h-10 px-4 text-sm text-slate-600 "
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
                type="password"
                defaultValue={state?.data?.password}
                placeholder="Enter password"
                className="input input-bordered w-full max-w-sm border border-slate-400 rounded-lg h-10 px-4 text-sm text-slate-600 "
              />
            </label>
          </div>
          <div>
            <button
              disabled={pending}
              className="w-full bg-indigo-950 max-w-sm py-2 border rounded-full text-white my-4 disabled:opacity-50"
            >
              Create Account
            </button>
          </div>
          {state?.status === "success" ? (
            <div className="bg-emerald-50 text-emerald-600 text-sm p-2 flex justify-center items-center w-full max-w-sm">
              Register success
            </div>
          ) : null}
        </form>
        <div>
          <p className="text-gray-500">
            Already have an account?{" "}
            <a href="/login">
              <span className="text-indigo-900">Login</span>
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

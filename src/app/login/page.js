import { TicketIcon } from "@/components/ticketicon";

export default function page() {
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
        <form className="space-y-3">
          <div>
            <label className="form-control w-full max-w-sm">
              <div className="label">
                <span className="label-text text-slate-600 text-sm">
                  E-mail Address
                </span>
              </div>
              <input
                name="email"
                type="text"
                placeholder="Enter your e-mail"
                className="input input-bordered w-full max-w-sm border border-slate-400 rounded-lg h-10 px-4 text-sm"
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
                type="text"
                placeholder="Enter password"
                className="input input-bordered w-full max-w-sm border border-slate-400 rounded-lg h-10 px-4 text-sm"
              />
            </label>
          </div>
          <div>
            <button className="w-full bg-indigo-950 max-w-sm py-2 border rounded-full text-white my-4">
              Login
            </button>
          </div>
        </form>
        <div className="flex items-center gap-1">
          <div>Don't have an account?</div>
          <button className="text-indigo-600">Sign up</button>
        </div>
      </div>
    </div>
  );
}

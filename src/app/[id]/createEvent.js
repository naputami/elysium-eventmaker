"use client";
import { useActionState } from "react";
import { createEventAction } from "./action";

export const createEvent = ({ eventId }) => {
  const [state, formAction, pending] = useActionState(createEventAction, null);

  return (
    <form action={formAction} className="form-control w-full">
      <h3 className="font-bold text-lg">Create New Event</h3>
      <input name="eventId" value={eventId} type="hidden" />
      <input
        name="name"
        placeholder="Name"
        className="border-slate-800 bg-slate-900"
      />
      <label className="label font-bold">Event Name</label>
      <input
        type="text"
        className="input input-bordered"
        placeholder="Enter the name of your event"
      />
      <label className="label font-bold">Upload Image</label>
      <input
        type="file"
        className="file-input file-input-bordered"
        accept="image/*"
      />
      <label className="label font-bold">Session(s)</label>
      <input type="datetime-local" className="input input-bordered" />
      <label className="label font-bold">Location</label>
      <input
        type="text"
        className="input input-bordered"
        placeholder="Event Location"
      />
      <label className="label font-bold">Additional Description</label>
      <textarea
        className="textarea textarea-bordered"
        placeholder="Additional Description"
      />
      <button disabled={pending} className="w-full bg-white text-black">
        Submit Event
      </button>
      {!state?.success && <p>{state?.message}</p>}
      {state?.success && <p>{state?.message}</p>}
    </form>
  );
};

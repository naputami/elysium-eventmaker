import { prisma } from "@/utils/prisma";
import Link from "next/link";

export default async function Home() {
  const events = await prisma.event.findMany({
    select: {
      id: true,
      title: true,
      date: true,
      location: true,
      description: true,
    },
  });

  return (
    <div className="my-10 mx-10">
      <Link href="/createevent/page">
        <button class="inline-block cursor-pointer rounded-md bg-gray-800 px-4 py-3 text-center text-sm font-semibold uppercase text-white transition duration-200 ease-in-out hover:bg-gray-900 ml-auto">
          Create Event
        </button>
      </Link>
      <table className="table w-full">
        <thead>
          <tr>
            <th>Id</th>
            <th>Title</th>
            <th>Date</th>
            <th>Location</th>
            <th>Description</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {events.map((event) => (
            <tr key={event.id}>
              <td>{event.id}</td>
              <td>{event.title}</td>
              <td>{new Date(event.date).toLocaleDateString()}</td>
              <td>{event.location}</td>
              <td>{event.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

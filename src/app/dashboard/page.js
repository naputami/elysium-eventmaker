import { createEvent } from "../[id]/createEvent";
import { prisma } from "@/utils/prisma";

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
    <div>
      <div className="mb-2">
        <createEvent />
      </div>
      <table className="table w-full">
        <thead>
          <tr>
            <th>Id</th>
            <th>Title</th>
            <th>Date</th>
            <th>Location</th>
            <th>Description</th>
            <th className="text-center">Action</th>
          </tr>
        </thead>
        <tbody>
          {events.map((event) => (
            <tr key={event.id} event={event}>
              <td>{event.title}</td>
              <td>{event.date}</td>
              <td>{event.location}</td>
              <td>{event.description}</td>
              <td></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

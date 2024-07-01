import Image from "next/image";
import Link from "next/link";

const EventCard = ({ event }) => {
  return (
      <Link href={`/${event.id}`}>
      <main className="relative h-72 rounded-xl bg-white transition duration-150 hover:bg-slate-100 hover:shadow-xl">
        <Image
          alt="event image"
          src={`${process.env.R2_PUBLIC_URL}/eventmakers/${event.id}/${event.image}`}
          width={600}
          height={400}
        />
        <div className="absolute right-4 top-4 w-fit rounded-lg bg-white p-2 text-sm font-semibold text-black">
          {event.date}
        </div>
        <div className="absolute bottom-0 left-0 p-6">
          <h1 className="text-lg font-semibold text-black">{event.title}</h1>
          <p className="text-black">{event.location}</p>
          <p className="mt-2 text-sm font-semibold tracking-tight text-slate-700">
            {event.participants.length > 0
              ? `${event.participants.length} has
            joined`
              : "No one has joined yet"}
          </p>
        </div>
      </main>
    </Link>
  );
};

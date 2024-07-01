import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { EventCard } from "@/components/eventCard";
import { prisma } from "@/utils/prisma";
import { auth } from "@/lib/auth"; // Ensure this import is correct
import Link from "next/link";
import { redirect } from "next/navigation";
import React from "react";

export default async function Home() {
  const user = await auth();

  if (!user) {
    return redirect("/"); // Ensure proper redirection if the user is not authenticated
  }

  const events = await prisma.event.findMany({
    include: {
      author: true,
      participants: {
        select: {
          id: true,
        },
      },
    },
  });

  return (
    <div className="m-auto flex min-h-screen max-w-6xl flex-col items-center justify-between py-8">
      <Header />
      <main className="space-y-24">
        <section className="space-y-6 text-balance text-center">
          <h1 className="text-8xl font-semibold tracking-tighter">
            Eventify: Make Every Event Special
          </h1>
          <h3 className="text-lg text-slate-400">
            Find, join, and experience unforgettable events happening around you.
          </h3>
        </section>
        <section className="space-y-12">
          <section className="flex items-center justify-between">
            <h3 className="text-white">Popular events right now</h3>
          </section>
          <section className="grid grid-cols-3 gap-8">
            {events.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </section>
        </section>
      </main>
      <Footer />
    </div>
  );
}

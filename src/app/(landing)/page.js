import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Hero } from "@/components/hero";
import { EventCard } from "@/components/eventCard";
import { prisma } from "@/utils/prisma";
import React from "react";

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
    <div className="m-auto flex min-h-screen max-w-6xl flex-col items-center justify-between py-8">
      <Header />
      <main className="space-y-16">
        <Hero />
        <section className="space-y-16">
          <div className="flex items-center justify-between">
            <h3 className="text-black text-2xl font-semibold">All events</h3>
          </div>
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

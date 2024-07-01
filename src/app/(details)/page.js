import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { useState } from 'react';
import EventModal from '@/components/joinEvent';
import { prisma } from "@/utils/prisma";
import Link from "next/link";

export default async function Home() {
  const event = await prisma.event.findMany({
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
      <Header />
      <main>
        <section>
          <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold text-gray-900">Event Detail</h1>
          </div>
        </section>
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <div className="px-4 py-6 sm:px-0">
            <img src={event.image} alt={event.title} className="w-full h-64 object-cover" />
            <h2 className="text-2xl font-bold mt-4">{event.title}</h2>
            <p className="text-gray-500 mt-2">{new Date(event.date).toLocaleDateString()}</p>
            <p className="mt-4">{event.location}</p>
            <p className="mt-4">{event.description}</p>
            <button
              className="btn btn-primary mt-4">
              Join Event
            </button>
          </div>
        </div>
      </main>
      <Footer />
    </div >
  );
};

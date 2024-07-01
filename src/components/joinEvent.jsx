import React, { useState } from 'react';
import { toast } from 'react-toastify';

const EventModal = ({ eventTitle, eventDate, isOpen,}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleJoinEvent = () => {

    toast.success("Successfully joined");
  };

  return (
    <div className={`modal ${isOpen ? 'modal-open' : ''}`}>
          <div className="modal-box">
        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
        <h3 className="font-bold text-lg">{eventTitle}</h3>
        <p className="py-4">{eventDate}</p>
        <form onSubmit={(e) => e.preventDefault()}>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input 
              type="text" 
              placeholder="Your name" 
              className="input input-bordered" 
              value={name}
              onChange={(e) => setName(e.target.value)}
              required 
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input 
              type="email" 
              placeholder="Your email" 
              className="input input-bordered" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required 
            />
          </div>
          <div className="modal-action">
            <button type="button" className="btn btn-primary" onClick={handleJoinEvent}>Join Event</button>
          </div>
        </form>
      </div>
    </div>
  );
};
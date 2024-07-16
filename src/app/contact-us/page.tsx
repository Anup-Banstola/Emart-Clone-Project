'use client';

import { useState } from 'react';
import Image from 'next/image';
import NipunaMap from '../../ui/Atoms/NipunaMap';

function ContactUs() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [message, setMessage] = useState('');

  return (
    <form className="mx-auto w-[900px] max-w-full px-6 ">
      <div className="my-4 flex flex-col items-center ">
        <Image src="/nipuna-logo.png" alt="NPS Logo" width={200} height={200} />
      </div>
      <h1 className=" text-center text-4xl">Introducing our E-Mart</h1>
      <p className="  my-5 text-justify text-gray-500">
        The ultimate solution for streamlining your order management process.
        Simplify your business operations with a user-friendly interface
        designed exclusively for swiftly capturing and processing small orders.
        Say goodbye to complexity and welcome efficiency as you effortlessly
        record customer requests, track inventory, and manage transactions, all
        in one place. Elevate your customer service and enhance your
        productivity with our focused, single-feature app, making small order
        taking a breeze. Experience the future of seamless order management –
        download the E-Mart today.
      </p>
      <div>
        <NipunaMap />
      </div>
      <h2 className="my-8 text-center text-3xl">Contact Us</h2>
      <div className="flex flex-col gap-5 md:my-4 md:flex-row">
        <div className="flex-1">
          <label htmlFor="firstName">
            First Name*
            <input
              id="firstName"
              type="text"
              name="firstName"
              placeholder="Enter Your First Name"
              required
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className="block w-full rounded-md border border-gray-300 p-2 text-sm outline-none"
            />
          </label>
        </div>
        <div className="flex-1">
          <label htmlFor="lastName">
            Last Name*
            <input
              id="lastName"
              type="text"
              name="lastName"
              placeholder="Enter Your Last Name"
              required
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              className="mb-5 block  w-full rounded-md border border-gray-300 p-2 text-sm outline-none"
            />
          </label>
        </div>
      </div>
      <div className="flex flex-col gap-5 md:flex-row">
        <div className="flex-1">
          <label htmlFor="email">
            Email*
            <input
              id="email"
              type="text"
              name="email"
              placeholder="example@example.com"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="block  w-full rounded-md border border-gray-300 p-2 text-sm outline-none"
            />
          </label>
        </div>
        <div className="flex-1">
          <label htmlFor="phoneNumber">
            Phone Number*
            <input
              id="phoneNumber"
              type="number"
              name="phoneNumber"
              placeholder="98********"
              required
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              className="mb-5 block  w-full rounded-md border border-gray-300 p-2 text-sm outline-none"
            />
          </label>
        </div>
      </div>
      <div className="">
        <label htmlFor="message">
          Message*
          <textarea
            id="message"
            placeholder="Enter message..."
            rows={5}
            required
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="my-1 block  w-full rounded-md border border-gray-300 p-2 text-sm outline-none"
          />
        </label>
      </div>
      <button
        type="button"
        className=" my-4 rounded-md bg-blue-600 px-8  py-3 text-sm text-white shadow-lg"
      >
        Submit
      </button>
      <footer className="my-4 border-t text-center text-sm">
        <span className="mt-4 inline-block">
          &copy; 2024. All rights reserved by
        </span>
        <a href="https://www.nipunasewa.com" target="_blank">
          {' '}
          Nipuna Prabidhik Sewa
          <h3 className="text-center">v1.3.0</h3>
        </a>
      </footer>
    </form>
  );
}

export default ContactUs;

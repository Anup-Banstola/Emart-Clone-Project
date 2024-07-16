'use client';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

function ForgotPassword() {
  const [email, setEmail] = useState('');
  const router = useRouter();

  const handleBack = () => {
    router.back();
  };

  return (
    <form className="mx-auto my-auto flex h-screen w-[450px] flex-col justify-center px-8 ">
      <Image
        src="/nipuna-logo.png"
        alt="NPS Logo"
        className="mx-auto my-4"
        width={200}
        height={200}
      />
      <div className="flex flex-col items-center">
        <h2 className="my-2 text-center text-xl font-medium">
          Forgot Password?
        </h2>
        <span className="mb-4 text-sm text-gray-500 ">
          Please, provide the email with which you created account.
        </span>
      </div>

      <div>
        <label htmlFor="email" className="mb-4 text-sm text-gray-500 ">
          <span>Email*</span>
          <input
            id="email"
            type="text"
            placeholder="example@example.com"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mt-1 block w-full rounded-md border border-gray-300 p-2 outline-none"
          />
        </label>
        <button
          type="submit"
          className={`mt-4 w-full  rounded-md bg-blue-500 p-2 text-center text-white shadow-lg ${
            email ? 'cursor-pointer' : 'cursor-not-allowed'
          }`}
          disabled={!email}
        >
          Submit
        </button>
      </div>

      <span
        className=" absolute left-12 top-12 flex cursor-pointer items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 "
        style={{ height: '2rem', width: '2rem' }}
      >
        <FontAwesomeIcon
          icon={faChevronLeft}
          width={16}
          height={16}
          className="text-gray-700"
          onClick={handleBack}
        />
      </span>
    </form>
  );
}

export default ForgotPassword;

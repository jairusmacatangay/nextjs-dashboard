'use client';

import { useState } from 'react';
import { CreatePatient } from './buttons';
import { useFormState, useFormStatus } from 'react-dom';
import { createPatient } from '@/app/lib/patient-service';
import Modal from '../modal';
import DatePicker from 'react-datepicker';

import 'react-datepicker/dist/react-datepicker.css';

export default function CreateModal() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [contactNo, setContactNo] = useState('');
  const [address, setAddress] = useState('');
  const [emailAddress, setEmailAddress] = useState('');
  const [birthdate, setBirthdate] = useState<Date | null>(null);
  const [gender, setGender] = useState('');

  function validateRequiredInputs() {
    if (
      firstName &&
      lastName &&
      contactNo &&
      address &&
      emailAddress &&
      birthdate &&
      gender
    ) {
      return true;
    }
    return false;
  }

  const initialState = { message: null, errors: {} };
  const [state, dispatch] = useFormState(createPatient, initialState);

  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  return (
    <>
      <CreatePatient onOpen={openModal} />

      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <h1 className="mb-5 text-2xl">Add Patient</h1>

        <form action={dispatch}>
          <div id="message-error" aria-live="polite" aria-atomic="true">
            {state.message && (
              <p className="mt-2 text-sm text-red-500">{state.message}</p>
            )}
          </div>

          <div className="flex">
            {/* First Name */}
            <div className="mb-3 me-1">
              <label htmlFor="firstName">First Name</label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                className="block w-full"
                onChange={(e) => setFirstName(e.target.value)}
                value={firstName}
              />
              <div id="firstName-error" aria-live="polite" aria-atomic="true">
                {state.errors?.firstName &&
                  state.errors.firstName.map((error: string) => (
                    <p className="mt-2 text-sm text-red-500" key={error}>
                      {error}
                    </p>
                  ))}
              </div>
            </div>

            {/* Last Name */}
            <div className="mb-3 ms-1">
              <label htmlFor="lastName">Last Name</label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                className="block w-full"
                onChange={(e) => setLastName(e.target.value)}
                value={lastName}
              />
              <div id="lastName-error" aria-live="polite" aria-atomic="true">
                {state.errors?.lastName &&
                  state.errors.lastName.map((error: string) => (
                    <p className="mt-2 text-sm text-red-500" key={error}>
                      {error}
                    </p>
                  ))}
              </div>
            </div>
          </div>

          {/* Contact Number */}
          <div className="mb-3">
            <label htmlFor="contactNo">Contact Number</label>
            <input
              type="number"
              id="contactNo"
              name="contactNo"
              className="block w-full"
              onChange={(e) => setContactNo(e.target.value)}
              value={contactNo}
            />
            <div id="contactNo-error" aria-live="polite" aria-atomic="true">
              {state.errors?.contactNo &&
                state.errors.contactNo.map((error: string) => (
                  <p className="mt-2 text-sm text-red-500" key={error}>
                    {error}
                  </p>
                ))}
            </div>
          </div>

          {/* Address */}
          <div className="mb-3">
            <label htmlFor="address">Address</label>
            <input
              type="text"
              id="address"
              name="address"
              className="block w-full"
              onChange={(e) => setAddress(e.target.value)}
              value={address}
            />
            <div id="address-error" aria-live="polite" aria-atomic="true">
              {state.errors?.address &&
                state.errors.address.map((error: string) => (
                  <p className="mt-2 text-sm text-red-500" key={error}>
                    {error}
                  </p>
                ))}
            </div>
          </div>

          {/* Email Address */}
          <div className="mb-3">
            <label htmlFor="emailAddress">Email Address</label>
            <input
              type="text"
              id="emailAddress"
              name="emailAddress"
              className="block w-full"
              onChange={(e) => setEmailAddress(e.target.value)}
              value={emailAddress}
            />
            <div id="emailAddress-error" aria-live="polite" aria-atomic="true">
              {state.errors?.emailAddress &&
                state.errors.emailAddress.map((error: string) => (
                  <p className="mt-2 text-sm text-red-500" key={error}>
                    {error}
                  </p>
                ))}
            </div>
          </div>

          <div className="flex">
            {/* Birthdate */}
            <div className="mb-3 me-1">
              <label htmlFor="birthdate">Birthdate</label>
              <DatePicker
                id="birthdate"
                name="birthdate"
                className="block w-full"
                placeholderText="Select birthdate"
                selected={birthdate}
                onChange={(date) => setBirthdate(date)}
                peekNextMonth
                showMonthDropdown
                showYearDropdown
                dropdownMode="select"
              />
              <div id="birthdate-error" aria-live="polite" aria-atomic="true">
                {state.errors?.birthdate &&
                  state.errors.birthdate.map((error: string) => (
                    <p className="mt-2 text-sm text-red-500" key={error}>
                      {error}
                    </p>
                  ))}
              </div>
            </div>

            {/* Gender */}
            <div className="mb-3 ms-1">
              <label htmlFor="gender">Gender</label>
              <select
                name="gender"
                id="gender"
                className="block w-full"
                onChange={(e) => setGender(e.target.value)}
              >
                <option value="" disabled selected hidden>
                  Select Gender
                </option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="prefer not to say">Prefer not to say</option>
              </select>
              <div id="gender-error" aria-live="polite" aria-atomic="true">
                {state.errors?.gender &&
                  state.errors.gender.map((error: string) => (
                    <p className="mt-2 text-sm text-red-500" key={error}>
                      {error}
                    </p>
                  ))}
              </div>
            </div>
          </div>

          <div className="flex justify-between">
            <button
              className="mt-4 rounded bg-gray-500 px-4 py-2 font-bold text-white hover:bg-gray-700"
              onClick={closeModal}
            >
              Cancel
            </button>

            <SubmitButton isDisabled={validateRequiredInputs} />
          </div>
        </form>
      </Modal>
    </>
  );
}

function SubmitButton({ isDisabled }: { isDisabled: () => boolean }) {
  const { pending } = useFormStatus();

  return (
    <>
      {pending ? (
        <button
          className="mt-4 rounded bg-blue-300 px-4 py-2 font-bold text-white"
          disabled
        >
          Submitting...
        </button>
      ) : (
        <button
          type="submit"
          className={
            'mt-4 rounded px-4 py-2 font-bold text-white ' +
            (isDisabled() ? 'bg-blue-500 hover:bg-blue-700' : 'bg-blue-300')
          }
          disabled={!isDisabled()}
        >
          Save Details
        </button>
      )}
    </>
  );
}

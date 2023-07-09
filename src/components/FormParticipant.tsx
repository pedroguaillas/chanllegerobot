import React, { SetStateAction, Dispatch } from 'react';
import { UserCircleIcon } from '@heroicons/react/24/solid';

interface Props {
  name: string;
  robot: string;
  url: string;
  setName: Dispatch<SetStateAction<string>>;
  setRobot: Dispatch<SetStateAction<string>>;
  setUrl: Dispatch<SetStateAction<HTMLInputElement>>;
}

const FormParticipant = ({ name, robot, url, setName, setRobot, setUrl }: Props) => {

  return (
    <form>
      <div className="space-y-4">
        <div >
          <label
            htmlFor="name"
            className="block text-sm font-bold leading-6 text-gray-900"
          >
            Nombre
          </label>
          <div className="mb-3 pt-0">
            <input
              value={name}
              onChange={e => setName(e.target.value)}
              type="text"
              id='name'
              className="block w-full p-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>
        <div>
          <label
            htmlFor="robot"
            className="block text-sm font-bold leading-6 text-gray-900"
          >
            Nombre del robot
          </label>
          <div className="mb-3 pt-0">
            <input
              value={robot}
              onChange={e => setRobot(e.target.value)}
              type="text"
              id='robot'
              className="block w-full p-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>
        <div>
          <label
            htmlFor="image"
            className="block text-sm font-bold leading-6 text-gray-900"
          >
            Foto del robot
          </label>
          <div className="mb-3 pt-0">
            <input
              value={url}
              // onChange={e => setUrl(e.target.files[0])}
              type="file"
              id='image'
              className="block w-full p-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>
        {/* <div className="col-span-full">
          <label htmlFor="photo" className="block text-sm font-medium leading-6 text-gray-900">
            Photo
          </label>
          <div className="mt-2 flex items-center gap-x-3">
            <UserCircleIcon className="h-12 w-12 text-gray-300" aria-hidden="true" />
            <button
              type="button"
              className="rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
            >
              Seleccionar archivo
            </button>
          </div>
        </div> */}
      </div>
    </form>
  );
};

export default FormParticipant;

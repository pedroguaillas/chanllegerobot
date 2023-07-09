import React from 'react';
import createParticipants from '../../functions/createParticipants';
import uploadImage from '../../functions/uploadImage';

interface Props {
  refresh: () => void;
}

function ModalForm({ refresh }: Props) {

  const submit = async e => {
    e.preventDefault();

    const name = e.target.name.value;
    const robot = e.target.robot.value;
    const image = e.target.image.files[0];

    const url = await uploadImage(image);

    createParticipants({ name, robot, url })
      .then(() => {

        refresh();
        const modalForm = document.querySelector('#modal-form') as HTMLDialogElement;
        modalForm?.close();
      })
  }

  return (
    <>
      <button
        className="bg-blue-500 text-white active:bg-blue-600 font-bold text-sm px-5 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
        type="button"
        onClick={() => {
          const modalForm = document.querySelector('#modal-form') as HTMLDialogElement;
          modalForm?.showModal();
        }}
      >
        Registrar
      </button>
      <dialog id="modal-form" className='rounded'>
        {/* Header modal */}
        <div className="flex items-start justify-between p-2 border-b border-solid border-slate-200 rounded-t">
          <h4 className="text-2xl font-semibold text-center">Registro de participante</h4>
        </div>
        {/* Content modal */}
        <form onSubmit={submit} className='my-2'>
          <div className="space-y-4">
            <div >
              <label
                htmlFor="name"
                className="block text-sm font-bold leading-6 text-gray-900"
              >
                Nombre del participante
              </label>
              <div className="mb-3 pt-0">
                <input
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
                  type="file"
                  id='image'
                  className="block w-full p-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
          </div>
          {/* Footer modal */}
          <div className="flex items-center justify-end py-3 border-t border-solid border-slate-200 rounded-b">
            <button
              className="text-red-500 background-transparent font-bold px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
              type="button"
              onClick={() => {
                const modalForm = document.querySelector('#modal-form') as HTMLDialogElement;
                modalForm?.close();
              }}
            >
              Cancelar
            </button>
            <button
              className="bg-blue-500 text-white active:bg-emerald-600 font-bold text-sm px-5 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
              type="submit"
            >
              Guardar
            </button>
          </div>
        </form>
      </dialog>
    </>
  );

}

export default ModalForm;
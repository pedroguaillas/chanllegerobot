import React, { useEffect, useState } from 'react';
import editPart from '../../functions/editParticipant';
import IParticipant from '../../types';

interface Props {
  participant: IParticipant;
  refresh: () => void;
}

function ModalFormEdit({ participant, refresh }: Props) {

  const [editParticipant, setEditParticipant] = useState({ ...participant });

  const onChange = e => {
    setEditParticipant({
      ...editParticipant,
      [e.target.name]: e.target.value
    })
  }

  const submit = e => {
    e.preventDefault();

    editPart(participant.id, editParticipant)
      .then(() => {
        refresh();
        const modalForm = document.querySelector('#modal-edit') as HTMLDialogElement;
        modalForm.close();
      })
  }

  return (
    <>
      <dialog id="modal-edit" className='rounded'>
        {/* Header modal */}
        <div className="flex items-start justify-between p-2 border-b border-solid border-slate-200 rounded-t">
          <h4 className="text-2xl font-semibold text-center">Editar participante</h4>
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
                  value={editParticipant.name}
                  onChange={onChange}
                  type="text"
                  name='name'
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
                  value={editParticipant.robot}
                  onChange={onChange}
                  type="text"
                  name='robot'
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
                <img className='max-w-[200px] mx-auto my-2' src={participant.url} />
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

export default ModalFormEdit;
import * as React from 'react';

interface Props {
    confirm: () => void;
}

const ModalDialogDelete = ({ confirm }: Props) => {
    return (
        <dialog id='confirmation-delete' className='rounded'>
            <div>
                <h2 className='font-bold text-2xl'>Alerta</h2>
            </div>
            <h3 className='py-4 text-xl'>¿Seguro que quiere eliminar el participate?</h3>
            <div className='text-right'>
                <button
                    className="text-red-500 hover:text-white hover:bg-red-200 hover:rounded font-bold px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => {
                        const modalForm = document.querySelector('#confirmation-delete') as HTMLDialogElement;
                        modalForm?.close();
                    }}
                >
                    Cancelar
                </button>
                <button
                    onClick={confirm}
                    className="bg-blue-500 text-white hover:bg-blue-600 font-bold text-sm px-5 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                >
                    Confirmar
                </button>
            </div>
        </dialog>
    );
}

export default ModalDialogDelete;
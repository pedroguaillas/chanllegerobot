import React from 'react';
import TablaParticipantes from '../components/TableParticipants';
import ModalForm from '../components/Layout/ModalForm';

const Participants = () => {
  return (
    <>
      <div className=" flex justify-between flex-grow mt-5">
        <h1 className="text-base font-semibold leading-7 text-gray-900">
          Participantes
        </h1>
        <ModalForm />
      </div>
      <TablaParticipantes nad={'Participantes'} />
     
    </>
  );
};
export default Participants;

import React, { useState, useEffect } from 'react';
import TableParticipants from '../components/TableParticipants';
import ModalForm from '../components/Layout/ModalForm';
import allParticipants from '../functions/allParticipants';
import IParticipant from '../types';

const Participants = () => {

  const [participants, setParticipants] = useState<IParticipant[]>([])

  const refresh = () => {
    allParticipants()
      .then((participants: any) => {
        setParticipants(participants);
      })
  }

  useEffect(() => {

    refresh();

  }, [])

  return (
    <>
      <div className=" flex justify-between flex-grow mt-5">
        <h1 className="text-base font-semibold leading-7 text-gray-900">
          Participantes
        </h1>
        <ModalForm refresh={refresh} />
      </div>
      <TableParticipants nad={'Participantes'} participants={participants} />
    </>
  );
};

export default Participants;

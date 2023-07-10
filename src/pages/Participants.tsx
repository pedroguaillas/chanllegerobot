import React, { useState, useEffect } from 'react';
import TableParticipants from '../components/TableParticipants';
import ModalForm from '../components/Layout/ModalForm';
import allParticipants from '../functions/allParticipants';
import IParticipant from '../types';
import ModalFormEdit from '../components/Layout/ModalFormEdit';

const Participants = () => {

  const [participants, setParticipants] = useState<IParticipant[]>([])
  const [participantEdit, setParticipantEdit] = useState(null)

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
        {participantEdit &&
          <ModalFormEdit participant={participantEdit} refresh={refresh} />}
        <ModalForm refresh={refresh} />
      </div>
      <TableParticipants nad={'Participantes'} participants={participants} refresh={refresh} setParticipantEdit={setParticipantEdit} />
    </>
  );
};

export default Participants;

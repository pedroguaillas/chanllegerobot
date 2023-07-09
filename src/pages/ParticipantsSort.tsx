import React, { useState, useEffect } from "react";
import ModalSorteo from '../components/Layout/ModalSorteo';
import TableParticipants from "../components/TableParticipants";
import allParticipantsSort from "../functions/allParticipantsSort";

const ParticipantsSort = () => {
  const [participants, setParticipants] = useState([])

  useEffect(() => {
    allParticipantsSort()
      .then((participants: any) => {
        setParticipants(participants);
      })
  }, []);

  return (
    <>
      <div className=" flex justify-between flex-grow mt-5">
        <h1 className="text-base font-semibold leading-7 text-gray-900">
          Orden de sorteo
        </h1>
        <ModalSorteo />
      </div>
      <TableParticipants nad={'Sorteo'} participants={participants} />
    </>
  );
};

export default ParticipantsSort;
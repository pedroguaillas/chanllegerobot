import React from "react";
import ModalSorteo from '../components/Layout/ModalSorteo';
import TableParticipants from "../components/TableParticipants";
const ParticipantsSort = ()=>{
    return(
        <>
        <div className=" flex justify-between flex-grow mt-5">
        <h1 className="text-base font-semibold leading-7 text-gray-900">
          Orden de sorteo
        </h1>
        <ModalSorteo/>
      </div>
      <TableParticipants nad={'Sorteo'} />
        </>
    );
};
export default ParticipantsSort;
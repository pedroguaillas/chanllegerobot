import React from 'react';
import TablePacticipants from '../components/TableParticipants';

const Results = () => {
  return (
    <>
      <div className=" flex justify-between flex-grow mt-5">
        <h1 className="text-base font-semibold leading-7 text-gray-900">
          Resultados
        </h1>
      </div>
      <TablePacticipants nad={'Resultado'} />
    </>
  );
};
export default Results;

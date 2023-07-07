import React from 'react';
import TablaParticipantes from '../components/TablaParticipantes';

const Participants = () => {
  return (
    <>
      <div className=" flex justify-between flex-grow mt-5">
        <h1 className="text-base font-semibold leading-7 text-gray-900">
          Orden de sorteo
        </h1>
      </div>
      <TablaParticipantes sort={true} />
    </>
  );
};
export default Participants;

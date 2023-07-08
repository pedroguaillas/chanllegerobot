import React from 'react';

interface Props {
  sort: boolean;
}

const TableResults = ({ sort }: Props) => {
  const participants = [
    {
      id: '1',
      vuelta: 1,
      horaInicio: '12:00 pm',
      horaLlegada: '12:50 pm',
      tiempo: 1.6,
    },
    {
      id: '2',
      vuelta: 2,
      horaInicio: '12:50 pm',
      horaLlegada: '1:50 pm',
      tiempo: 2,
    },
    {
      id: '1',
      vuelta: 3,
      horaInicio: '1:50 pm',
      horaLlegada: '2:50 pm',
      tiempo: 2.6,
    },
   
  ];
  return (
    <>
      <div className=" mt-4 p-4 bg-white rounded-[1.5rem] shadow-lg">
        <table className="w-[100%] text-center ">
          <thead>
            <tr>
              <th>Vuelta</th>
              <th>Hora inicio</th>
              <th>Hora de llegada</th>
              <th>Tiempo</th>
              <th></th>
            </tr>
          </thead>
          <tbody className="text-gray-700 [&>tr]:border-t-2 [&>tr>td]:pb-2 [&>tr>td]:pt-1">
            {participants.map((vuelt) => (
              <tr className=" first:border-none " key={vuelt.id}>
                <td>{vuelt.vuelta}</td>
                <td>{vuelt.horaInicio}</td>
                <td>{vuelt.horaLlegada}</td>
                <td>{vuelt.tiempo}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};
export default TableResults;

import React from 'react';

type Nad = 'Participantes' | 'Sorteo' | 'Resultado';

interface Props {
  nad: Nad;
}

const TableParticipants = ({ nad }: Props) => {
  const participants = [
    {
      id: '1',
      name: 'Manuel',
      robot: 'Rob 1',
      image: '#',
    },
    {
      id: '2',
      name: 'Juan',
      robot: 'Rob 3',
      image: '#',
    },
    {
      id: '3',
      name: 'Carlos',
      robot: 'Rob 3',
      image: '#',
    },
  ];

  return (
    <>
      <div className=" mt-4 p-4 bg-white rounded-[1.5rem] shadow-lg">
        <table className="w-[100%] text-center ">
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Nombre del robot</th>
              <th>Fotofragia</th>
              <th className=' w-20'></th>
            </tr>
          </thead>
          <tbody className={`text-gray-700 [&>tr]:border-t-2 [&>tr>td]:pb-2 [&>tr>td]:pt-1 ` } >
            {participants.map((participant) => (
              <tr className=" first:border-none " key={participant.id}>
                <td>{participant.name}</td>
                <td>{participant.robot}</td>
                <td>{participant.image}</td>
                <td className=' text-right'>
                  {nad === 'Participantes' && (
                    <>
                      <button className=" bg-blue-500 p-1 rounded mr-1 ">
                        <span>
                          <svg
                            fill="#fff"
                            width="1.5rem"
                            height="1.7rem"
                            viewBox="-4 0 32 32"
                            version="1.1"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <g id="SVGRepo_tracerCarrier"></g>
                            <g id="SVGRepo_iconCarrier">
                              <path d="M17.438 22.469v-4.031l2.5-2.5v7.344c0 1.469-1.219 2.688-2.656 2.688h-14.625c-1.469 0-2.656-1.219-2.656-2.688v-14.594c0-1.469 1.188-2.688 2.656-2.688h14.844v0.031l-2.5 2.469h-11.5c-0.531 0-1 0.469-1 1.031v12.938c0 0.563 0.469 1 1 1h12.938c0.531 0 1-0.438 1-1zM19.813 7.219l2.656 2.656 1.219-1.219-2.656-2.656zM10.469 16.594l2.625 2.656 8.469-8.469-2.625-2.656zM8.594 21.094l3.625-0.969-2.656-2.656z"></path>{' '}
                            </g>
                          </svg>
                        </span>
                      </button>
                      <button className=" bg-red-700 p-1 rounded mr-1 ">
                        <span>
                          <svg
                            fill="#fff"
                            width="1.5rem"
                            height="1.7rem"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <g id="SVGRepo_tracerCarrier"></g>
                            <g id="SVGRepo_iconCarrier">
                              <path d="M5.755,20.283,4,8H20L18.245,20.283A2,2,0,0,1,16.265,22H7.735A2,2,0,0,1,5.755,20.283ZM21,4H16V3a1,1,0,0,0-1-1H9A1,1,0,0,0,8,3V4H3A1,1,0,0,0,3,6H21a1,1,0,0,0,0-2Z"></path>
                            </g>
                          </svg>
                        </span>
                      </button>
                    </>
                  )}
                  {nad === 'Resultado' && (
                    <button className=" bg-green-700 p-1 rounded mr-1">
                      <span>
                        <svg
                          className=' fill-white'
                          width="1.7rem"
                          height="1.7rem"
                          viewBox="0 0 19 19"
                          xmlns="http://www.w3.org/2000/svg"
                          // fill="#000000"
                        >
                          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                          <g
                            id="SVGRepo_tracerCarrier"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          ></g>
                          <g id="SVGRepo_iconCarrier">
                            <path
                              // fill="#000000"
                              fill-rule="evenodd"
                              d="M161.960546,159.843246 L164.399107,161.251151 C164.637153,161.388586 164.71416,161.70086 164.580127,161.933013 C164.442056,162.172159 164.144067,162.258604 163.899107,162.117176 L161.419233,160.68542 C161.165323,160.8826 160.846372,161 160.5,161 C159.671573,161 159,160.328427 159,159.5 C159,158.846891 159.417404,158.291271 160,158.085353 L160,153.503423 C160,153.22539 160.231934,153 160.5,153 C160.776142,153 161,153.232903 161,153.503423 L161,158.085353 C161.582596,158.291271 162,158.846891 162,159.5 C162,159.6181 161.986351,159.733013 161.960546,159.843246 Z M160.5,169 C165.746705,169 170,164.746705 170,159.5 C170,154.253295 165.746705,150 160.5,150 C155.253295,150 151,154.253295 151,159.5 C151,164.746705 155.253295,169 160.5,169 Z M160.5,168 C165.19442,168 169,164.19442 169,159.5 C169,154.80558 165.19442,151 160.5,151 C155.80558,151 152,154.80558 152,159.5 C152,164.19442 155.80558,168 160.5,168 Z"
                              transform="translate(-151 -150)"
                            ></path>
                          </g>
                        </svg>
                      </span>
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};
export default TableParticipants;

interface IParticipant {
  id?: string;
  name: string;
  robot: string;
  url?: string;
}

export type Nad = 'Participantes' | 'Sorteo' | 'Resultado';
export type IParticipants = Array<IParticipant>;

export default IParticipant;
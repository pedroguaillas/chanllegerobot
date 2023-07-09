import { db } from '../firebase/credentials';
import { collection, addDoc } from 'firebase/firestore';

async function createParticipants(participant) {
    try {
        const collectionRef = collection(db, 'participants');
        const participantId = await addDoc(collectionRef, participant);

        console.log(participantId);
    } catch (error) {
        console.log(error)
    }
}

export default createParticipants;
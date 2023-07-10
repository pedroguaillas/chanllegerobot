import { db } from '../firebase/credentials';
import { deleteDoc, collection, doc } from 'firebase/firestore';

async function deleteParticipant(id) {
    try {
        const collectionRef = collection(db, 'participants');
        const docuRef = doc(collectionRef, id);
        const confirmation = await deleteDoc(docuRef);

        return confirmation;
    } catch (error) {
        console.log(error)
    }
}

export default deleteParticipant;
import { db } from '../firebase/credentials';
import { collection, doc, setDoc } from 'firebase/firestore';

async function editParticipant(id, data) {
    try {
        const collectionRef = collection(db, 'participants');
        const docuRef = doc(collectionRef, id);

        // Para actualizar varios campos y unir con los campos existente
        const result = await setDoc(docuRef, data, { merge: true });

        // Solo para actualizar un campos especifico
        // const result = await updateDoc(docuRef, { name: 'Peter', age: 21 });

        return result;
    } catch (error) {
        console.log(error);
    }
}

export default editParticipant;
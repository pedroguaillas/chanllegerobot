import { db } from '../firebase/credentials';
import { collection, getDocs } from 'firebase/firestore';

async function allParticipants() {
    try {
        const collectionRef = collection(db, 'participants');
        // getDocs puede lo mismo recibir una query o una collection
        const parsCifrado = await getDocs(collectionRef);

        const docus = parsCifrado.docs.map(d => {
            return {
                id: d.id,
                ...d.data()
            }
        });
        return docus;
    } catch (error) {
        console.log(error)
    }

}

export default allParticipants;
import { db } from '../firebase/credentials';
import { collection, getDocs, query, orderBy } from 'firebase/firestore';

async function allParticipantsSort() {
    try {
        const collectionRef = collection(db, 'participants');

        const querySort = query(
            collectionRef,
            orderBy('name')
        );

        const docusCifrados = await getDocs(querySort);

        const docus = docusCifrados.docs.map(d => {
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

export default allParticipantsSort;
//

import firebase from 'firebase/compat/app';
import { db } from '../firebase.js';
import { collection, getDocs, doc, getDoc, setDoc, deleteDoc, addDoc, updateDoc } from 'firebase/firestore';

const productsRef = collection(db, 'products');


export const getAllProducts = async () => {
  const snapshot = await getDocs(productsRef);
  return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
};

export const getProductById = async (id) => {
  const docSnap = await getDoc(doc(db, 'products', id));
  return docSnap.exists() ? { id: docSnap.id, ...docSnap.data() } : null;
};

export const createProduct = async (data) => {
  const newDoc = doc(collection(db, 'products'));
  await setDoc(newDoc, data);
  return { id: newDoc.id, ...data };
};

export const deleteProduct = async (id) => {
  await deleteDoc(doc(db, 'products', id));
};

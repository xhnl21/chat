import { Storages } from './index';
// Crear una instancia de la clase Storages
const storageInstance = new Storages();
const deleteData = async () => {
  try {
    await storageInstance.delete();
  } catch (error) {
    console.error('Error al insertar datos:', error);
  }
};
export default deleteData;
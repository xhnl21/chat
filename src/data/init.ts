import  { BackGround }  from '../interface/userBackGround';
import { Storages } from '../storage/index';
const backGround: BackGround[] = [
  {
    color: '#ebebeb',
    id: 2,
    bool:false,
    favorito: false,
  },
  {
    color: '#ebebeb',
    id: 1,
    bool:false,
    favorito: false,
  },
];
// Crear una instancia de la clase Storages
const storageInstance = new Storages();

export const getBG = async (id: number) => {
  try {
    let rs = await storageInstance.getBackGroundById(id);
    return rs;
  } catch (error) {
    console.error('Error al obtener mensaje:', error);
  }
};

const insertData = async () => {
  try {
    await storageInstance.insert(false, backGround);
    console.log('Datos insertados correctamente');
  } catch (error) {
    console.error('Error al insertar datos:', error);
  }
};
export default insertData;
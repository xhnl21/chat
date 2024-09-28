import  { User }  from '../interface/users';
import { Storages } from '../storage/index';

// const imgA = import.meta.env.BASE_URL+"assets/img/a.jpg";
// const imgB = import.meta.env.BASE_URL+"assets/img/b.png";
const imgA = "https://upload.wikimedia.org/wikipedia/commons/d/de/Leonardo_DiCaprio_cropped_and_rotated_%28cropped%29.jpg";
const imgB = "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp";

const user: User[] = [
  {
    fromName: 'Matt Chorsey',
    id: 2,
    city: 'New York',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
    date: 37,
    profile:imgA,
  },
  {
    fromName: 'Lauren Ruthford',
    id: 1,
    city: 'Canada',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
    date: 27,
    profile:imgB,
  },
];
// Crear una instancia de la clase Storages
const storageInstance = new Storages();

export const getUser = async (id: number) => {
  try {
    let rs = await storageInstance.getUserById(id);
    return rs;
  } catch (error) {
    console.error('Error al obtener mensaje:', error);
  }
};

const insertData = async () => {
  try {
    await storageInstance.insertUser(user)
    .then(async() => {
      // console.log('hola insertData user');
      await storageInstance.changeStatus(false);
    });
    console.log('Datos insertados correctamente');
  } catch (error) {
    console.error('Error al insertar datos:', error);
  }
};
export default insertData;
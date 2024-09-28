import  { Message }  from '../interface/messages';
import { Storages } from '../storage/index';

const imgA = "https://upload.wikimedia.org/wikipedia/commons/d/de/Leonardo_DiCaprio_cropped_and_rotated_%28cropped%29.jpg";
const imgB = "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp";
const messages: Message[] = [
  {
    fromName: 'Matt Chorsey',
    subject: 'New event: Trip to Vegas, New event: Trip to Vegas',
    date: '9:32 AM',
    bool:true,
    id: 2,
    order:0,
    profile:imgA,
  },
  {
    fromName: 'Matt Chorsey',
    subject: 'New event: Trip to Vegas, New event: Trip to Vegas',
    date: '9:32 AM',
    bool:true,
    id: 2,
    order:1,
    profile:imgA,
  },
  {
    fromName: 'Matt Chorsey',
    subject: 'New event: Trip to Vegas, New event: Trip to Vegas',
    date: '9:32 AM',
    bool:true,
    id: 2,
    order:2,
    profile:imgA,
  },
  {
    fromName: 'Lauren Ruthford',
    subject: 'Long time no chat, Long time no chat',
    date: '6:12 AM',
    bool:false,
    id: 1,
    order:0,
    profile:imgB,
  },
  {
    fromName: 'Matt Chorsey',
    subject: 'Report Results',
    date: '4:55 AM',
    bool:true,
    id: 2,
    order:0,
    profile:imgA,
  },
  {
    fromName: 'Lauren Ruthford',
    subject: 'The situation',
    date: 'Yesterday',
    bool:false,
    id: 1,
    order:0,
    profile:imgB,
  },
  {
    fromName: 'Matt Chorsey',
    subject: 'Updated invitation: Swim lessons',
    date: 'Yesterday',
    bool:true,
    id: 2,
    order:0,
    profile:imgA,
  },
  {
    fromName: 'Lauren Ruthford',
    subject: 'Last minute ask',
    date: 'Yesterday',
    bool:false,
    id: 1,
    order:0,
    profile:imgB,
  },
  {
    fromName: 'Matt Chorsey',
    subject: 'Family Calendar - Version 1',
    date: 'Last Week',
    bool:true,
    id: 2,
    order:0,
    profile:imgA,
  },
  {
    fromName: 'Lauren Ruthford',
    subject: 'Placeholder Headhots',
    date: 'Last Week',
    bool:false,
    id: 1,
    order:0,
    profile:imgB,
  },
  {
    fromName: 'Lauren Ruthford',
    subject: 'Placeholder Headhots',
    date: 'Last Week',
    bool:false,
    id: 1,
    order:1,
    profile:imgB,
  },
  {
    fromName: 'Lauren Ruthford',
    subject: 'Placeholder Headhots',
    date: 'Last Week',
    bool:false,
    id: 1,
    order:2,
    profile:imgB,
  }
];

export type { Message };

// Crear una instancia de la clase Storages
const storageInstance = new Storages();

export const getMessages = async () => {
  try {
    let rs = await storageInstance.get();
    return rs;
  } catch (error) {
    console.error('Error al obtener mensajes:', error);
  }
};

export const getMessage = async (id: number) => {
  try {
    let rs = await storageInstance.getById(id);
    return rs;
  } catch (error) {
    console.error('Error al obtener mensaje:', error);
  }
};

// export const getMessage = (id: number) => messages.find(m => m.id === id);

const insertData = async () => {
  try {
    await storageInstance.insert(true, messages);
    console.log('hola insertData msj');
    console.log('Mensajes almacenados correctamente');
  } catch (error) {
    console.error('Error al almacenador mensajes:', error);
  }
};
export default insertData;
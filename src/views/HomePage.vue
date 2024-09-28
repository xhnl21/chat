<template>
  <ion-page>
    <ion-header :translucent="true" class="ion-no-border">
      <ion-toolbar>
        <ion-title class="title">{{ user }}</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true" class="content-end ion-justify-content-end" :scrollEvents="true" ref="contentRef">
      <ion-refresher slot="fixed" @ionRefresh="refresh($event)">
        <ion-refresher-content></ion-refresher-content>
      </ion-refresher>
      <div class="min-h-full content-end">
        <div>
          <ion-list >
            <MessageListItem v-for="message in messages" :key="message.id" :message="message" />
          </ion-list>
        </div>
      </div>
    </ion-content>
    <ion-footer class="ion-no-padding ion-no-border">
      <div class="chat chat-start ion-text-justify font-regulars inputChat">
        <div class="chat-bubble chat-bubble-white ion-no-padding inputChatSize">
          <input type="text" class="input w-full focus:outline-none" v-on:click="scrollToBottom()"
            placeholder="Write a message..." 
            @keyup.enter="onEnter" 
            v-model="msj">
        </div>
      </div>
    </ion-footer>
  </ion-page>
</template>

<script setup lang="ts">
import {
  IonContent,
  IonHeader,
  IonList,
  IonPage,
  IonRefresher,
  IonRefresherContent,
  IonTitle,
  IonToolbar,
  IonFooter,
} from '@ionic/vue';
import MessageListItem from '@/components/MessageListItem.vue';
import { getMessages, Message } from '@/data/messages';
import { ref, onMounted  } from 'vue';
import { getUser } from '../data/user';
import { Storages } from '../storage/index';

const contentRef = ref();
const scrollToBottom = () => {
    contentRef.value.$el.scrollToPoint(0, 1000, 1000);
    // contentRef.value.$el.scrollToBottom(0, 1000, 1000);
}

const msj = ref<string>('');
const messages = ref<Message[]>([]);
const onEnter = () => {
  if (msj.value.trim() !== '') {
    // const imgB = import.meta.env.BASE_URL+"assets/img/b.png";
    const imgA = "https://upload.wikimedia.org/wikipedia/commons/d/de/Leonardo_DiCaprio_cropped_and_rotated_%28cropped%29.jpg";
    const lastTwoMessages = messages.value.slice(-1);
    let order = 0;
    let id = 2;
    let bool = true;
    if (lastTwoMessages[0].id === 2) {
      if (lastTwoMessages[0].order === 0) {
        order = 1;
      }
      if (lastTwoMessages[0].order > 0) {
        order = lastTwoMessages[0].order + 1
      }
    }
    // if (order >= 5) {
    //   id = 1;
    //   order = 0;
    //   bool = false;
    // }
    let sendDatos = {
          fromName: 'Matt Chorsey',
          subject: msj.value,
          date: '37',
          bool: bool,
          id: id,
          order: order,
          profile: imgA,
      };
    messages.value.push(sendDatos);
    insertData(sendDatos);
    msj.value = '';
  } else {
    console.log('El mensaje está vacío');
  }
  scrollToBottom();
};
const insertData = async (sendDatos:any) => {
  try {
    const storageInstance = new Storages();
    await storageInstance.insertMsj(sendDatos);
    console.log('Mensajes almacenado correctamente');
  } catch (error) {
    console.error('Error al almacenar el mensaje:', error);
  }
};

const getMsg = async () => {
  try {
    let rs = await getMessages();
    messages.value = rs;
    scrollToBottom();
  } catch (error) {
    console.error('Error al almacenador mensajes:', error);
  }
};

const user = ref<[]>();
const getUsers = async (id:number) => {
  try {
    let rs = await getUser(id);
    user.value = rs.fromName;
  } catch (error) {
    console.error('Error al almacenador mensajes:', error);
  }
};

onMounted(() => {
  getMsg();
  getUsers(1);
});

const refresh = (ev: CustomEvent) => {
  setTimeout(() => {
    ev.detail.complete();
  }, 3000);
  scrollToBottom();
};
</script>
<style scoped>
ion-toolbar{
  --background:#3d3d3c;
  --color: white;
}
ion-list{
  background: #ebebeb;
}
ion-content {
  --background: #ebebeb;
}
</style>

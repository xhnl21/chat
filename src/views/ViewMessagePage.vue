<template>
  <ion-page>
    <ion-header :translucent="true" class="ion-no-border">
      <ion-toolbar>
        <ion-buttons slot="start">         
          <ion-button shape="round" v-on:click="getBackButtonText()">
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24">
              <path fill="none" stroke="white" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m14 18l-6-6l6-6l1.4 1.4l-4.6 4.6l4.6 4.6z"/>
            </svg>
          </ion-button>
        </ion-buttons>
        <ion-title v-if="message" class="title font-bold">
          {{ message.fromName }}
        </ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true" v-if="message" class="ion-padding" :style="{'--background': background}" id="back">
      <div>
        <ion-grid class="ion-no-padding">
          <ion-row>
            <ion-col>
              <div class="avatar relative inline-flex items-center contentImgText" v-on:click="getBackButtonText()">
                <div class="absolute inline-flex items-center justify-center rounded-full -top-2 -end-2 circle" v-if="id !== 2">
                  <span class="circleText font-regulars">ONLINE</span>
                </div>
                <div class="w-56 h-56 rounded-full">
                  <img :src="message.profile" />
                </div>
              </div>              
            </ion-col>
          </ion-row>
          <ion-row>
            <ion-col size="10" class="font-regulars">
              <ion-label class="ion-text-wrap">
                <h2 class="titles">
                  {{ message.fromName }}, {{ message.date }}
                </h2>
                <span class="subtitle">{{ message.city }}</span>
              </ion-label>
            </ion-col>
            <ion-col size="2" v-if="id !== 2">
              <svg v-if="actStart" v-on:click="activeStart(false)" stroke="currentColor" class="favorite size-5 cursor-pointer text-yellow-300" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" stroke-width="1.5">
                <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"></path>
              </svg>
              <svg v-else v-on:click="activeStart(true)" stroke="currentColor" class="favorite size-5 cursor-pointer text-white drop-shadow" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" stroke-width="1">
                <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"></path>
              </svg>
            </ion-col>
            <ion-col size="2" v-else></ion-col>
          </ion-row>
          <ion-row>
            <ion-col>
              <p class="ion-text-justify font-regulars parr">
                {{ message.description }}
              </p>
            </ion-col>
          </ion-row>          
        </ion-grid>
      </div>
    </ion-content>
    <ion-footer class="ion-padding ion-no-border" v-if="id !== 2">
        <ion-button expand="full" class="colorBtnB font-regulars" v-if="actBtn" v-on:click="activeBtn(false)">ADD AS FRIEND</ion-button>
        <ion-button expand="full" class="colorBtnA font-regulars" v-else v-on:click="activeBtn(true)">ADD AS FRIEND</ion-button>
    </ion-footer>
    <ion-footer class="ion-padding ion-no-border" v-else></ion-footer>
  </ion-page>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import {
  IonButtons,
  IonContent,
  IonHeader,
  IonLabel,
  IonPage,
  IonToolbar,
  IonButton,
  IonGrid,
  IonRow,
  IonCol,
  IonFooter,
  IonTitle
} from '@ionic/vue';
import { getUser } from '../data/user';
import { getBG } from '@/data/init';
import { Storages } from '../storage/index';

// se ejecuta al iniciar la App
import systemDelete from '../storage/init';
import systemBackGround from '../data/init';
import systemUser from '../data/user';
import systemMsj from '../data/messages';

const router = useRouter();
const route = useRoute();

const getBackButtonText = () => {
  router.push({ path: '/home' });
};

let id = parseInt(route.params.id as string, 10);
if (route.params.id === " ") {
  id = 1;
}
let r = id.toString();
if (r === 'NaN') {
  id = 1;
  router.push({ name: 'message', params: { id: id }  });
}
const message = ref<any>();
const getMsg = async (id: number) => {
  try {
    let rs = await getUser(id);
    message.value = rs;
  } catch (error) {
    console.error('Error al obtener datos:', error);
  }
};

const background = ref<any>();
const actBtn = ref<Boolean>();
const getBGs = async (id: number) => {
  try {
    let rs = await getBG(id);   
    background.value = rs.color;
    actBtn.value = rs.bool;
    actStart.value = rs.favorito;
  } catch (error) {
    console.error('Error al almacenador mensajes:', error);
  }
};

const status = ref<boolean>(false);
// Crear una instancia de la clase Storages
const storageInstance = new Storages();
// const getStatu = async () => {
//   status.value = await storageInstance.getStatus();
// };
onMounted(async () => {
  // getStatu();
  status.value = await storageInstance.getStatus(); 
  if (status.value) {
    await systemDelete()
      .then(async()  => {
        await systemBackGround();
        await systemMsj();
        await systemUser();
      });
  }
  getBGs(id);
  getMsg(id);
});



const actStart = ref<Boolean>();
const activeStart = async (bool: any) => {
  actStart.value = bool;
  const backGround = [
    {
      color: background.value,
      id: id,
      bool: actBtn.value,
      favorito: actStart.value,
    }
  ];
  updateData(backGround); 
};

const activeBtn = async (bool: any) => {
  actBtn.value = bool;
  const content = document.getElementById('back');
  let color;
  if (content) {
    if(bool) {
      content.style.cssText = '--background: aqua; --offset-top: 56px; --offset-bottom: 76px;';
      color = 'aqua';
    } else {
      content.style.cssText = '--background: #ebebeb; --offset-top: 56px; --offset-bottom: 76px;';
      color = '#ebebeb';
    }
  }
  background.value = color;
  const backGround = [
    {
      color: color,
      id: id,
      bool: bool,
      favorito: actStart.value,
    }
  ];
  updateData(backGround); 
};

const updateData = async (data: any) => {
  try {
    let rs = await storageInstance.update(false, data, id);
    return rs;
  } catch (error) {
    console.error('Error al obtener mensajes:', error);
  }
};
</script>

<style scoped>
ion-toolbar{
  --background:#3d3d3c;
  --color: white;
}
</style>

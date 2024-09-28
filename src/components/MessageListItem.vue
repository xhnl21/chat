<template>
  <ion-grid class="ion-no-padding">
    <ion-row>
      <ion-col v-if="message" :detail="false" class="ion-no-padding">
        <div class="chat chat-start ion-text-justify font-regulars chat-bubble-start-ext" v-if="message.bool">
          <div class="chat-image avatar" v-on:click="go(message.id)">
            <div class="w-10 rounded-full">
              <img :src="message.profile" v-if="message.order === 0" />
            </div>
          </div>
          <div class="chat-bubble chat-bubble-white" v-if="message.order === 0">{{ message.subject }}</div>
          <div class="chat-bubble chat-bubble-white chat-bubbles" v-else>{{ message.subject }}</div>
        </div>
        <div class="chat chat-end ion-text-justify ion-justify-content-end font-regulars chat-bubble-end-ext" v-else>
          <div class="chat-image avatar" v-on:click="go(message.id)">
            <div class="avatar online onlines" v-if="message.order === 0">
              <div class="w-10 rounded-full">
                <img :src="message.profile" />
              </div>
            </div>
            <div class="avatar" v-else>
              <div class="w-10 rounded-full">
              </div>
            </div>
          </div>
          <div class="chat-bubble chat-bubble-blue" v-if="message.order === 0">{{ message.subject }}</div>
          <div class="chat-bubble chat-bubble-blue chat-bubbles" v-else>{{ message.subject }}</div>          
        </div>
      </ion-col>
    </ion-row>
  </ion-grid>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';
import { ref  } from 'vue';
defineProps({
  message: Object,
});
const imgA = ref();
imgA.value = import.meta.env.BASE_URL+"assets/img/a.jpg";
const isIos = () => {
  const win = window as any;
  return win && win.Ionic && win.Ionic.mode === 'ios';
};

const router = useRouter();
const go = (id: any) => {
  router.push({ name: 'message', params: { id: id }  });
  // window.location.href = 'message/' + id;
};
</script>
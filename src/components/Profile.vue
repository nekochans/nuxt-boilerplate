<template>
  <div class="card">
    <div class="card-content">
      <div class="media">
        <div class="media-left">
          <figure class="image is-128x128">
            <img :src="profile.imageUrl" alt="Placeholder image" />
          </figure>
        </div>
        <div class="media-content">
          <p class="title is-4">
            {{ profile.name }}
          </p>
          <p class="subtitle is-6">
            @
            {{ profile.id }}
          </p>
        </div>
      </div>
      <div class="content">
        {{ profile.description }}
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  props: {
    qiitaProfile: {
      type: Object,
      required: true,
      default() {
        return {
          id: 'qiita',
          name: 'Qiitaキータ',
          imageUrl:
            'https://qiita-image-store.s3.amazonaws.com/0/88/profile-images/1512392618',
          description:
            'Qiita公式アカウントです。Qiitaに関するお問い合わせに反応したり、お知らせなどを発信しています。'
        };
      }
    }
  },
  data() {
    return {
      profile: this.qiitaProfile
    };
  }
});
</script>

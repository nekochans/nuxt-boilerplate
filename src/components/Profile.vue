<template>
  <div class="card">
    <div class="card-content">
      <div class="media">
        <div class="media-left">
          <figure class="image is-128x128">
            <img :src="profileImageUrl" alt="Placeholder image" />
          </figure>
        </div>
        <div class="media-content">
          <p class="title is-4">
            {{ name }}
          </p>
          <p class="subtitle is-6">
            @
            {{ id }}
          </p>
        </div>
      </div>
      <div class="content">
        {{ description }}
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue';

export default Vue.extend({
  props: {
    qiitaId: {
      type: String,
      required: true
    },
    qiitaName: {
      type: String,
      required: true
    },
    qiitaProfileImageUrl: {
      type: String,
      required: true
    },
    qiitaDescription: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      id: this.qiitaId,
      name: this.qiitaName,
      profileImageUrl: this.qiitaProfileImageUrl,
      description: this.qiitaDescription
    };
  }
});
</script>

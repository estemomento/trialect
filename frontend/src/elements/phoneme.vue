<template>
  <div class="phoneme">
    <h3 class="phoneme-header">{{ sym }}</h3>
    <p v-if="!tone" class="phoneme-intro"><span>/{{ ipa }}/</span> <span>{{ char }}</span></p>
    <p v-else v-for="(v, i) in info" :key="i" class="phoneme-intro">{{v.name}}/{{v.val}} {{v.char}}</p>
  </div>
</template>

<script>
export default {
  props: {
    sym: { type: String, default: 'b' },
    ipa: { type: String, default: 'p' },
    char: { type: String, default: '巴' },
    tone: { type: Boolean, default: false },
    info: { type: Array, default: () => [] }
  }
}
</script>

<style lang="scss" scoped>
.phoneme {
  display: inline-flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 4px 0;
  border: 1px solid transparent;
  padding: 4px;
  user-select: none;

  @media (max-width: 767px) {
    font-size: 80%;
  }

  &:hover {
    border: 1px solid #333;
    box-shadow: 0 0 4px #333;
  }

  &-header {
    font-size: 28px;

    @media (max-width: 767px) {
      font-size: 24px;
    }
  }

  &-intro {
    font-size: 16px;
    color: #333;

    @media (max-width: 767px) {
      font-size: 14px;
    }
  }
}
</style>


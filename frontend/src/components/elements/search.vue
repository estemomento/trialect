<template>
  <div class="search-wrapper">
    <form class="search" @submit.prevent="jump">
      <input v-model="char" type="search" placeholder="请输入要查询的汉字" maxlength="1">
      <button type="submit">查询</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'search',
  data: () => ({
    char: ''
  }),
  methods: {
    jump () {
      // TODO 交互提升
      if (/^[\u4e00-\u9fa5]/i.test(this.char)) {
        this.$router.push('/char/' + this.char)
      } else {
        alert('输入的不是汉字！')
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.search-wrapper {
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;

  .search {
    width: 90%;
    max-width: 400px;
    height: 50px;
    box-shadow: 2px 2px 5px #666;
    border: 0;
    border-radius: 5px;
    background: #fff;
    display: flex;

    input[type=search] {
      width: 80%;
      font-size: 16px;
      height: 50px;
      border: 0;
      border-radius: 5px;
      outline: none;
      padding: 10px;

      @media (min-width:768px) {
        width: 350px;
        font-size: 18px;
      }
    }

    button {
      background: #ddd;
      width: 20%;
      min-width: 60px;
      font-size: 16px;
      height: 50px;
      border: 0;
      border-radius: 5px;
      padding: 10px;
      cursor: pointer;

      &:hover {
        background-color: #ccc;
      }
    }
  }
}
</style>

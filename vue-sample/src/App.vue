<script>
export default {
  data() {
    return {
      title: 'My New Vue Title.',
      msg: 'Welcom to Vue',
      isRed: false,
      textStatus: {
        red: true,
      },
      user: {
        firstName: 'John',
        lastName: 'Smith',
        isMember: true
      },
      users: [
        {
          firstName: 'John',
          lastName: 'Smith',
          isMember: true
        },
        {
          firstName: 'Taro',
          lastName: 'Shinjuku',
          isMember: false
        },
        {
          firstName: 'Hanako',
          lastName: 'Shibuya',
          isMember: true
        },
      ]
    }
  },
  computed: {
    fullName() {
      return this.user.firstName + ' ' + this.user.lastName
    }
  },
  methods: {
    addUser() {
      this.input = {
          firstName: '',
          lastName: '',
          isMember: true
      }
      this.users.push(this.input)
    }
  }
}
</script>

<template>
  <h1 v-bind:title="msg" :class="{ red: isRed }">{{ title }}</h1>
  <h2>{{ user.firstName + " " + user.lastName }}さんのデータ</h2>

  <p>Name: {{ fullName }}</p>
  <p v-if="user.isMember">メンバーです</p>
  <p v-else>メンバーではありません</p>

  <h3 :class="textStatus">{{ 'ようこそ' + 'Vueへ' }}</h3>
  <input type="text" v-model="input.firstName" />
  <input type="text" v-model="input.lastName" />
  <input type="checkbox" v-model="input.isMember" />
  <button v-on:click="addUser">ユーザ追加</button>
  <button @:click="addUser">こっちでもOK</button>

  <div v-for="u in users">
    <p>Name: {{  u.firstName + " " + u.lastName }}</p>
    <p v-if="u.isMember">メンバーです</p>
    <p v-else>メンバーではありません</p>
  </div>
</template>

<style>
.red {
  color: red;
}
</style>
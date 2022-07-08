<template>
  <div>
    <button v-on:click="changeRoute">Chnage Route</button>
  </div>
</template>

<script>
export default {
  name: "MasterLayout",
  methods: {
    changeRoute() {
      this.$router.push({ name: "make_note", params: { type: "abc" } });
    },
  },
  mounted(){
    console.log("ML");
  }
};
</script>

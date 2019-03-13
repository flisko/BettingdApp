<template>
	<div>
 <hello-metamask/>
 <betting-component/>
</div>
</template>
<script>
import HelloMetamask from '@/components/hello-metamask'
import BettingComponent from '@/components/betting-component'
export default {
 name: 'betting-dapp',
 beforeCreate () {
    console.log('registerWeb3 Action dispatched from betting-dapp.vue')
    this.$store.dispatch('registerWeb3')
  },
 components: {
 'hello-metamask': HelloMetamask,
 'betting-component': BettingComponent
 }
}
</script>
<style scoped>
</style>
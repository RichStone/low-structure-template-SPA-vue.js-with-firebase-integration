<template>
    <div id="app">
        <Navigation v-if="user"></Navigation>
        <router-view/>
    </div>
</template>

<script>
    import Navigation from './components/Navigation.vue'
    import {mapState} from 'vuex'
    
    export default {
        components: { Navigation },
        computed: {
            ...mapState(['user'])
        }
    }
</script>
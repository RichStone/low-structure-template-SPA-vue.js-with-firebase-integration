<template>
    <div>
        track
        <button @click='logOut'>Log out</button>
    </div>
</template>

<script>
    import firebase from 'firebase'

    export default {
        methods: {
            logOut() {
                firebase.auth().signOut()
                this.$router.push('login')
            }
        }
    }
</script>
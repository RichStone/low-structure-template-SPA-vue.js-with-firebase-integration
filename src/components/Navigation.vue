<template>
    <header>
        <section>
            <div class="col1">
                <router-link to="tracker"><h3>TrackOMAD</h3></router-link>
                <ul class="inline">
                    <li><router-link to="tracker">Tracker</router-link></li>
                    <li><router-link to="profile">Profile</router-link></li>
                    <li><a @click="logout">Sign Out</a></li>
                </ul>
            </div>
        </section>
    </header>
</template>

<script>
    import firebase from 'firebase'

    export default {
        methods: {
            logout() {
                firebase.auth().signOut().then(() =>{
                    this.$router.go()
                }).catch(err => {
                    console.log(err)
                })
            }
        }
    }
</script>
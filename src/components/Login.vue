<template>
    <div id="login">
        <section>
            <div class="col1">
                <h1>TrackOMAD</h1>
                <p>Get started with One Meal A Day. Or Two Meals.</p>
            </div>
            <div class="col2">
                <h2>Enter the World of OMAD</h2>
                <div id="firebaseui-auth-container"></div>
            </div>
        </section>
    </div>
</template>

<script>
    import firebase from 'firebase'
    import 'firebaseui/dist/firebaseui.css'
    const fb = require('../firebaseConfig.js')

    export default {
        name: 'login',
        mounted() {
            if(firebase.auth().currentUser) {
                this.$router.push('tracker')
            } else {
                var uiConfig = {
                    signInSuccessUrl: '/tracker',
                    signInOptions: [
                        firebase.auth.GoogleAuthProvider.PROVIDER_ID,
                        firebase.auth.EmailAuthProvider.PROVIDER_ID
                    ],
                    // Terms of service url.
                    tosUrl: '<your-tos-url>',
                    // Privacy policy url.
                    privacyPolicyUrl: '<your-privacy-policy-url>'
                }
                fb.ui.start('#firebaseui-auth-container', uiConfig)
            }
        }
    }
</script>
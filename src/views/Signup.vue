<template>
  <div class="vh-100 d-flex justify-content-center align-items-center" style="background: #2b44b4">
        <div class="card text-center w-25">
            <div class="card-body" style="background: #d49fc9">
                <h2>SignUp</h2><br>
                <label for="username" class="form-label">Username</label>
                    <p><input class="form-control" type="text" placeholder="Username" v-model="name" /></p>
                <label for="email" class="form-label">Email</label>
                    <p><input class="form-control" type="text" placeholder="Email" v-model="email" /></p>
                <label for="password" class="form-label">Password</label>
                    <p><input class="form-control" type="password" placeholder="Password" v-model="password" /></p>
                    <p><button class="btn btn-secondary active" @click="register">SignUp</button></p>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from "vue"
import "../firebase";
import { getAuth, createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useRouter } from "vue-router";
const name = ref("")
const email = ref("");
const password = ref("");
const router = useRouter();
const register = () => {
  createUserWithEmailAndPassword(getAuth(), email.value, password.value)
      .then((data) => {
          console.log("Signin Completed");
          router.push("/")
      })
      .catch((error) => {
          console.log(error.code);
          alert(error.message);
      });
};

</script>

<template>
    <div class="vh-auto" style="background: #2b44b4">
      <div class="container">
        <div class="row">
          <div class="mymenu">
            <div>
              <h2>Add Product</h2>
            </div>
            <div>
              <p><input type="text" placeholder="Name brand" class="form-control" ref="t"></p>
              <p><input type="text" placeholder="Product" class="form-control" ref="e"></p>
              <p><input type="number" placeholder="Price" class="form-control" ref="p"></p>
              <p><input type="text" placeholder="details" class="form-control" ref="d"></p>
            </div>
            <button class="btn btn-dark" @click="addMenu">Add Product</button>
          </div>
  
          <div class="add">
            <h2 class="mymenu">Edit & Delete Product</h2>
            <div v-for="menu in allproduct">
              <input v-model="menu.brand" type="text">
              <input v-model="menu.name" type="text">
              <input v-model="menu.price" type="text">
              <input v-model="menu.detial" type="text">
              <button class="btn btn-primary" @click="updateMenu(menu)">Edit</button>
              <button class="btn btn-danger" @click="deleteMenu(menu.id)">Delete</button>
            </div>
          </div>
  
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import { ref } from "vue"
  import "../firebase";
  import {
    addDoc, collection, getFirestore, doc, deleteDoc, query, onSnapshot, setDoc
  } from "firebase/firestore";
  const db = getFirestore();
  export default {
    name: "App",
    methods: {
      addMenu: function () {
        addDoc(collection(db, "allproduct"), {
          brand: this.$refs.t.value,
          name: this.$refs.e.value,
          price: this.$refs.p.value,
          detial: this.$refs.d.value
        });
      },
      updateMenu: function (menu) {
        setDoc(doc(db, "allproduct", menu.id), {
          brand: menu.brand,
          name: menu.name,
          price: menu.price,
          detial: menu.detial,
        })
      },
      deleteMenu: function (id) {
        deleteDoc(doc(db, "allproduct", id))
      }
    },
    data: () => {
      return {
        allproduct: {
          brand: "",
          name: "",
          price: 0,
          detial: "",
          key: "",
        },
        allproduct: ref([])
      }
    },
    mounted() {
      const latestQuery = query(collection(db, "allproduct"));
      onSnapshot(latestQuery, (snapshot) => {
        this.allproduct = snapshot.docs.map((doc) => {
          return {
            id: doc.id,
            brand: doc.data().brand,
            name: doc.data().name,
            price: doc.data().price,
            detial: doc.data().detial,
          }
        });
      });
    }
  }
  </script>
  
  <style>
  #app {
    font-family: 'Kanit', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
  .mymenu {
    margin-top: 20px;
    margin-bottom: 20px;
    color: #FFF;
  }
  
  .add {
    margin-bottom: 50px;
  }
  </style>
  
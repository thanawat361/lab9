<template>
  <div class="vh-auto" style="background: #2b44b4">
    <div class="container">
      <div class="row">
        <h1 class="mymenu">สินค้าทั้งหมด</h1>
        <div class="card" style="width: 20rem;" v-for="menu in allproduct">
          <div class="card-body">
            <h4 class="card-title">{{ menu.brand }}</h4>
            <h5>ชื่อ : {{ menu.name }}</h5>
            <h6>ราคา : {{ menu.price }} บาท</h6>
            <h6>รายละเอียดสินค้า : {{ menu.detial }}</h6>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script >
import { ref } from "vue"
import "../firebase";
import {
  addDoc, collection, getFirestore, doc, deleteDoc, query, onSnapshot, setDoc
} from "firebase/firestore";
const db = getFirestore();
export default {
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
.card {
  margin: 5px;
  background-color: #d49fc9;
}
.add {
  margin-bottom: 50px;
}
</style>

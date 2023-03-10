import "../firebase";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import("../views/Home.vue")
    },
    {
      path: "/login",
      name: "Login",
      component: () => import("../views/Login.vue"),
      
    },
    {
      path: "/register",
      name: "Register",
      component: () => import("../views/Signup.vue"),
    },
    {
      path: "/product",
      name: "Product",
      component: () => import("../views/Product.vue"),
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: "/manage",
      name: "manage",
      component: () => import("../views/manage.vue"),
      meta: {
        requiresAuth: true,
      },
    },
  ],
});
const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const removeListener = onAuthStateChanged(
      getAuth(),
      (user) => {
        removeListener();
        resolve(user);
      },
      reject
    );
  });
};

router.beforeEach(async(to, from, next) =>{
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (await getCurrentUser()) {
      next();
    } else {
      ("You don't have access!");
      next("/");
    }
  } else {
    next();
  }
});
export default router

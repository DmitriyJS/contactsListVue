import { createRouter, createWebHistory } from "vue-router";
import ContactsItem from "@/views/ContactsItem";
import ContactsList from "@/views/ContactsList";

const routes = [
  {
    path: "/",
    name: "home",
    component: ContactsList,
  },
  {
    path: "/",
    name: "contact",
    component: ContactsItem,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;

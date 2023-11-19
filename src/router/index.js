import { createRouter, createWebHistory } from "vue-router";
import FormItem from "@/components/UI/FormItem";
import ContactsList from "@/views/ContactsList";

const routes = [
  {
    path: "/",
    name: "home",
    component: ContactsList,
  },
  {
    path: "/contact",
    name: "contact",
    component: FormItem,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;

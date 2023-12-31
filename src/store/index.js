import { createStore } from "vuex";

export default createStore({
  state: {
    contacts: [],
    sortType: "ВСЕ",
    activeContact: {
      name: "",
      phone: "",
      email: "",
      createdAt: "",
      category: "",
    },
  },
  getters: {
    filteredContatcs(state) {
      if (state.sortType.toLowerCase() === "все") return state.contacts;
      return state.contacts.filter(
        (el) => el.category.toLowerCase() === state.sortType.toLowerCase()
      );
    },
  },
  mutations: {
    setContacts(state, list) {
      state.contacts = list;
    },
    setSortType(state, type) {
      state.sortType = type;
    },
    setActiveContact(state, contact) {
      state.activeContact = { ...contact };
    },
  },
  actions: {
    async getContacts({ state, commit }) {
      const response = await fetch(
        "https://654d1e1377200d6ba85a0172.mockapi.io/contacts"
      );
      const contacts = await response.json();
      if (Array.isArray(contacts) && contacts.length) {
        commit("setContacts", contacts);
      } else {
        console.log(`Контакты не получены. Err status ${response.status}`);
        return new Error(`Контакты не получены. Err status ${response.status}`);
      }
    },
  },
  modules: {},
});

<template>
  <div>
    <header>
      <nav class="bg-white shadow-md">
        <div class="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8">
          <div class="flex justify-between h-16">
            <div class="flex px-2 lg:px-0">
              <div class="flex-shrink-0 flex items-center">
                <a href=""
                  ><img class="h-8 w-auto" src="https://vi.vuejs.org/images/logo.png" alt="Workflow"
                /></a>
              </div>
              <div class="hidden lg:ml-6 lg:flex lg:space-x-8">
                <!-- Current: "border-indigo-500 text-gray-900", Default: "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700" -->
                <router-link
                  to="/"
                  class="border-transparent hover:no-underline text-gray-900 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                >
                  Home
                </router-link>
                <router-link
                  to="/"
                  class="border-transparent hover:no-underline text-gray-900 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                >
                  My Gallery
                </router-link>
                <router-link
                  to="/"
                  class="border-transparent hover:no-underline text-gray-900 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                >
                  Topics
                </router-link>
                <router-link
                  to="/"
                  class="border-transparent hover:no-underline text-gray-900 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                >
                  Popular
                </router-link>
              </div>
            </div>
            <div class="flex-1 flex items-center justify-center px-2 lg:ml-6 lg:justify-end">
              <div class="max-w-lg w-full lg:max-w-xs">
                <label for="search" class="sr-only">Search</label>
                <div class="relative">
                  <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <!-- Heroicon name: solid/search -->
                    <svg
                      class="h-5 w-5 text-gray-400"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </div>
                  <form action="" method="GET">
                    <input
                      id="search"
                      name="q"
                      class="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-900 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      placeholder="Search"
                      type="search"
                    />
                  </form>
                </div>
              </div>
            </div>
            <div class="flex items-center lg:hidden">
              <!-- Mobile menu button -->
              <button
                type="button"
                @click="isMenuOpen = !isMenuOpen"
                class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                aria-controls="mobile-menu"
                aria-expanded="false"
                id="mobile_menu_toggle"
              >
                <span class="sr-only">Open main menu</span>
                <!--
            Icon when menu is closed.

            Heroicon name: outline/menu

            Menu open: "hidden", Menu closed: "block"
          -->
                <svg
                  class="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
                <!--
            Icon when menu is open.

            Heroicon name: outline/x

            Menu open: "block", Menu closed: "hidden"
          -->
                <svg
                  class="hidden h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div class="hidden lg:flex lg:items-center">
              <div class="flex-shrink-0">
                <div>
                  <div v-if="!userInfo" class="flex align-items-center">
                    <router-link
                      to="/login"
                      class="hover:no-underline mr-3 ml-1 text-gray-900 hover:text-gray-500 inline-flex items-center text-sm font-medium"
                      >Login
                    </router-link>
                    <router-link
                      to="/register"
                      class="inline-flex items-center px-2 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 active:outline-none active:ring-2 hover:no-underline active:ring-offset-2 active:ring-indigo-500"
                    >
                      <svg
                        class="-ml-1 mr-1 h-5 w-5"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                          clip-rule="evenodd"
                        />
                      </svg>
                      <span class="hover:no-underline text-sm font-medium">Register</span>
                    </router-link>
                  </div>
                  <div v-else class="relative">
                    <button
                      @click="isDropdownOpen = !isDropdownOpen"
                      id="dropdownInformationButton"
                      data-dropdown-toggle="dropdownInformation"
                      class="text-black font-medium rounded-lg text-sm p-1 text-center inline-flex items-center"
                      type="button"
                    >
                      <img :src="userInfo.user.avatar" width="32" class="rounded-full" alt="" />
                      <svg
                        class="w-4 h-4 ml-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M19 9l-7 7-7-7"
                        ></path>
                      </svg>
                    </button>

                    <!-- Dropdown menu -->
                    <div
                      id="dropdownInformation"
                      :class="{ hidden: isDropdownOpen }"
                      class="z-10 absolute top-full bg-white divide-y divide-gray-100 rounded shadow w-44 dark:bg-gray-700 dark:divide-gray-600"
                    >
                      <div class="px-4 py-3 text-sm text-gray-900 dark:text-white">
                        <div>{{ userInfo.user.name }}</div>
                        <div class="font-medium truncate">{{ userInfo.user.email }}</div>
                      </div>
                      <ul
                        class="py-1 text-sm text-gray-700 dark:text-gray-200"
                        aria-labelledby="dropdownInformationButton"
                      >
                        <li>
                          <a
                            href="#"
                            class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                            >Dashboard</a
                          >
                        </li>
                        <li>
                          <a
                            href="#"
                            class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                            >Settings</a
                          >
                        </li>
                        <li>
                          <a
                            href="#"
                            class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                            >Earnings</a
                          >
                        </li>
                      </ul>
                      <div class="py-1">
                        <a
                          href="#"
                          @click="logoutProcess"
                          class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                          >Sign out</a
                        >
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div :class="{ hidden: isMenuOpen }" class="lg:hidden" id="mobile-menu">
          <div class="pt-2 pb-3 space-y-1">
            <a
              href="#"
              class="bg-indigo-50 border-indigo-500 text-indigo-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
              >Home</a
            >
            <a
              href="#"
              class="border-transparent text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
              >Team</a
            >
            <a
              href="#"
              class="border-transparent text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
              >Projects</a
            >
            <a
              href="#"
              class="border-transparent text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
              >Calendar</a
            >
          </div>
          <div v-if="userInfo" class="pt-4 pb-3 border-t border-gray-200">
            <div class="flex items-center px-4">
              <div class="flex-shrink-0">
                <img class="h-10 w-10 rounded-full" :src="userInfo.user.avatar" alt="" />
              </div>
              <div class="ml-3">
                <div class="text-base font-medium text-gray-800">{{ userInfo.user.name }}</div>
                <div class="text-sm font-medium text-gray-500">{{ userInfo.user.email }}</div>
              </div>
              <button
                type="button"
                class="ml-auto flex-shrink-0 bg-white p-1 text-gray-400 rounded-full hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                <span class="sr-only">View notifications</span>
                <svg
                  class="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                  />
                </svg>
              </button>
            </div>
            <div class="mt-3 space-y-1">
              <a
                href="#"
                class="block px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-100"
                >Your Profile</a
              >
              <a
                href="#"
                class="block px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-100"
                >Settings</a
              >
              <a
                href="#"
                @click="logoutProcess"
                class="block px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-100"
                >Sign out</a
              >
            </div>
          </div>
        </div>
      </nav>
    </header>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
import axios from "axios";

export default {
  data() {
    return {
      isMenuOpen: true,
      isDropdownOpen: true,
    };
  },

  methods: {
    ...mapMutations(["setUserInfo"]),

    logoutProcess: function () {
      const auth = "Bearer ".concat(this.userInfo.authorisation.token);
      axios.get("http://mymemo.local/api/logout", { headers: { Authorization: auth } }).then((res) => {
        if (!res.data.error) {
          localStorage.removeItem("userInfo");
          this.setUserInfo(null);
          this.$router.push("/");
        }
      });
    },
  },

  computed: {
    ...mapGetters(["userInfo"]),
  },
};
</script>

<style scoped></style>

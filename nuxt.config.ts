// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  css: ["~/assets/css/main.css"],
  devtools: { enabled: true },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  plugins: [
    { src: "~/plugins/apexcharts.js", mode: "client" },
    { src: "~/plugins/select2.js", mode: "client" },
    { src: "~/plugins/vue-toastificaton.js", mode: "client" },
    "~/plugins/vue-awesome-paginate.js",
  ],
});

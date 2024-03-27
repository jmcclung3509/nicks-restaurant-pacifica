// https://nuxt.com/docs/api/configuration/nuxt-config
export default {
  head: {
    title: "Nicks Restaurant",
    charset: "utf-8",
    meta: [
      {
        name: "viewport",
        content: "width=device-width, inital-scale=1, viewport-fit=cover",
      },
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      {
        href: "https://fonts.googleapis.com/css2?family=Oswald&display=swap",
        rel: "stylesheet",
      },
      {
        href: "https://fonts.googleapis.com/css2?family=Playfair+Display&display=swap",
        rel: "stylesheet",
      },
      {
        href: "https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200",
        rel: "stylesheet",
      },
      {
        rel: "stylesheet",
        href: "https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.3/font/bootstrap-icons.css",
      },
    ],
  },
  devtools: { enabled: true },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  css: ['~/assets/scss/styles.scss'],
  modules: ["@nuxtjs/tailwindcss"],
  runtimeConfig: {
    public: {
      BASE_API_BROWSER_URL: "https://deft-gingersnap-b9df5d.netlify.app/",
    },
  },
  googleFonts: {
    families: {
      "Playfair+Display": true,
      Oswald: true,
      "Material+Icons": true,
    },
  },
  experimental: {
    payloadExtraction: false,
  },
  
}

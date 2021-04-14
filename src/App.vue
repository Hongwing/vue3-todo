<template>
  <div
    class="md:container md:mx-auto p-4 m-12 bg-white rounded-xl shadow-md flex sm:flex-col md:flex-row"
  >
    <div class="mr-4 w-full flex justify-center flex-col">
      <div id="player"></div>
    </div>
    <div class="w-4/12 sm:w-full text-center">
      <HelloWorld msg="Vue3 App From HenryHe | 当你看到这里，祝你开心。" />
    </div>
  </div>

  <nav>
    <ul class="the-menu">
      <li>
        <a href="henryhe.cn">Home</a>
      </li>
      <li>
        <a href="henryhe.cn">Service</a>
        <ul>
          <li>
            <a href="henryhe.cn">Front End</a>
          </li>
          <li>
            <a href="henryhe.cn">Back End</a>
          </li>
        </ul>
      </li>
      <li>
        <a href="henryhe.cn">About</a>
        <ul>
          <li>
            <a href="henryhe.cn">My Job</a>
          </li>
          <li>
            <a href="henryhe.cn">My GF</a>
          </li>
        </ul>
      </li>
    </ul>
  </nav>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import DPlayer from "dplayer";

export default {
  name: "App",
  components: {
    HelloWorld,
  },
  mounted() {
    const dp = new DPlayer({
      container: document.getElementById("player"),
      live: true,
      video: {
        // url: "http://otttv.bj.chinamobile.com/TVOD/88888888/224/3221226550/1.m3u8",
        url: "http://ivi.neu6.edu.cn/hls/cctv13hd.m3u8",
        type: "hls",
      },
      pluginOptions: {
        hls: {
          // hls config
        },
      },
    });
    console.log(dp.plugins.hls); // Hls instance
  },
};
</script>

<style>
body {
  margin: 0 auto;
  min-height: 100vh;
  /* background: linear-gradient(-37deg, teal, purple, orange) center/cover
    no-repeat; */
  @apply bg-gray-300;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
#player {
  border-radius: 8px;
}
.the-menu {
  display: flex;
  justify-content: stretch;
  align-items: center;
  margin: 0;
  padding: 0;
  background: rgba(0, 0, 0, 0.12);
  display: none;
}
.the-menu a {
  display: block;
  padding: 0.5em 1rem;
  white-space: nowrap;
}
.the-menu a:hover {
  text-decoration: dotted !important;
}
.the-menu a:focus {
  outline: 2px dotted currentColor;
  outline-offset: 3px;
}
/* .the-menu > li + li {
	margin-left: 2em;
} */
.the-menu ul {
  display: none;
  position: absolute;
  top: 100%;
  left: 0;
}
ul {
  list-style: none;
  padding: 0;
}
.the-menu > li {
  list-style: none;
  margin: 0 1.5rem;
  position: relative;
  margin: 8px 16px;
  display: flex;
  justify-content: stretch;
  flex: 1 1 auto;
}

.the-menu li:hover > ul {
  display: block;
}
.the-menu li:focus-within > ul {
  display: blocks;
}
</style>

import { createApp } from "/node_modules/.vite/deps/vue.js?v=8ec97997";
import App from "/resources/vue/app/App.vue";
import router from "/resources/vue/app/routers/index.js";
import store from "/resources/vue/app/store/store.js";
import VueDatePicker from "/node_modules/.vite/deps/@vuepic_vue-datepicker.js?v=8ec97997";
import "/node_modules/@vuepic/vue-datepicker/dist/main.css";

createApp(App)
    .component("VueDatePicker", VueDatePicker)
    .use(router)
    .use(store)
    .mount("#app");

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVBcHAgfSBmcm9tIFwiL25vZGVfbW9kdWxlcy8udml0ZS9kZXBzL3Z1ZS5qcz92PThlYzk3OTk3XCI7XG5pbXBvcnQgQXBwIGZyb20gXCIvcmVzb3VyY2VzL3Z1ZS9hcHAvQXBwLnZ1ZVwiO1xuaW1wb3J0IHJvdXRlciBmcm9tIFwiL3Jlc291cmNlcy92dWUvYXBwL3JvdXRlcnMvaW5kZXguanNcIjtcbmltcG9ydCBzdG9yZSBmcm9tIFwiL3Jlc291cmNlcy92dWUvYXBwL3N0b3JlL3N0b3JlLmpzXCI7XG5pbXBvcnQgVnVlRGF0ZVBpY2tlciBmcm9tIFwiL25vZGVfbW9kdWxlcy8udml0ZS9kZXBzL0B2dWVwaWNfdnVlLWRhdGVwaWNrZXIuanM/dj04ZWM5Nzk5N1wiO1xuaW1wb3J0IFwiL25vZGVfbW9kdWxlcy9AdnVlcGljL3Z1ZS1kYXRlcGlja2VyL2Rpc3QvbWFpbi5jc3NcIjtcblxuY3JlYXRlQXBwKEFwcClcbiAgICAuY29tcG9uZW50KFwiVnVlRGF0ZVBpY2tlclwiLCBWdWVEYXRlUGlja2VyKVxuICAgIC51c2Uocm91dGVyKVxuICAgIC51c2Uoc3RvcmUpXG4gICAgLm1vdW50KFwiI2FwcFwiKTtcbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxNQUFNLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0FBQ3ZFLE1BQU0sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7QUFDN0MsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLENBQUM7QUFDekQsTUFBTSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLENBQUM7QUFDdEQsTUFBTSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUM7QUFDMUYsTUFBTSxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0FBQzVEO0FBQ0EsU0FBUyxDQUFDLEdBQUcsQ0FBQztBQUNkLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLGFBQWEsQ0FBQztBQUM5QyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQztBQUNoQixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQztBQUNmLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7In0=
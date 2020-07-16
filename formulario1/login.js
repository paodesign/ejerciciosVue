new Vue({
  el: "#app2",
  data: {
    user: "",
    mail: "",
    password: "",
    remember: false,
    error: false,
    sent: false,
    form: false

  },
  methods: {
    onSubmit: function () {
      this.sent = true
    }
  }
}
)
const Home = { template: './login.html' };
const Contanct = { template: '<div>contact</div>' };

const routes = [
  { path: '/Home', component: Home },
  { path: '/Contanct', component: Contanct }
]
const router = new VueRouter({
  routes // short for `routes: routes`
})

const app = new Vue({
  router
}).$mount('#app1');



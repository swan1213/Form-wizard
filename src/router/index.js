import { createWebHistory, createRouter } from "vue-router";
import App from "@src/App.vue";
import StepOne from "@src/views/StepOne/index.vue";
import StepTwo from "@src/views/StepTwo/index.vue";
import StepTwoRouterView from "@src/views/StepTwo/StepTwoRouterView.vue";
import StepTwoError from "@src/views/StepTwo/StepTwoError.vue";
import StepThree from "@src/views/StepThree/index.vue";

const routes = [
  {
    path: "/",
    redirect: "/step-1",
    name: "App",
    component: App,
    children: [
      {
        path: "step-1",
        name: "StepOne",
        component: StepOne,
      },
      {
        path: "step-2",
        name: "StepTwoRouterView",
        component: StepTwoRouterView,
        children: [
          {
            path: "",
            name: "StepTwo",
            component: StepTwo,
          },
          {
            path: "error",
            name: "StepTwoError",
            component: StepTwoError,
          },
        ],
      },
      {
        path: "step-3",
        name: "StepThree",
        component: StepThree,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

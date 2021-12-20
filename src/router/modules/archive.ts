import Layout from "/@/layout/index.vue";

const archiveRouter = {
  path: "/archive",
  name: "archive",
  component: Layout,
  redirect: "/archive/index",
  meta: {
    icon: "el-icon-s-home",
    showLink: true,
    rank: 0
  },
  children: [
    {
      path: "/archive/index",
      name: "archive",
      component: () => import("/@/views/archive/index.vue"),
      meta: {
        title: "message.archive",
        showLink: true
      }
    }
  ]
};

export default archiveRouter;

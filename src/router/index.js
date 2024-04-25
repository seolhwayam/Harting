import { createRouter, createWebHistory } from 'vue-router'
import MainHome from '@/components/MainHome.vue';

const routes = [
  {
    path: '/calender',
    name: 'calender',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '@/components/calender.vue')
  },

  {
    path: '/NoticeBoard',
    name: 'NoticeBoard',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '@/components/NoticeBoard.vue')
  },
  {
    path: '/mode',
    name: 'mode',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '@/components/mode.vue')
  },

  {
    path: '/quizNext',
    name: 'quizNext',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '@/components/quizNext.vue')
  },

  {
    path: '/NoteBoard',
    name: 'NoteBoard',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '@/components/NoteBoard.vue')
  },

  {
    path: '/DetailNoteBoard',
    name: 'DetailNoteBoard',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '@/components/DetailNoteBoard.vue')
  },
  {
    path: '/writeNoteBoard',
    name: 'writeNoteBoard',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '@/components/writeNoteBoard.vue')
  },
  {
    path: '/Ranking',
    name: 'Ranking',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '@/components/Ranking.vue')
  },

 {
    path: '/',
    name: 'MainHome',
    component: MainHome
  },
  {
    path: '/admin',
    name: 'admin',
    component: () => import(/* webpackChunkName: "about" */ '@/components/admin.vue')
  },
  {
    path: '/NoticeBoardDetail',
    name: 'NoticeBoardDetail',
    component: () => import(/* webpackChunkName: "about" */ '@/components/NoticeBoardDetail.vue')
  },
  {
    path: '/QuizList',
    name: 'QuizList',
    component: () => import(/* webpackChunkName: "about" */ '@/components/QuizList.vue')
  },
  {
    path: '/QuizPage',
    name: 'QuizPage',
    component: () => import(/* webpackChunkName: "about" */ '@/components/QuizPage.vue')
  },
  
]
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router;

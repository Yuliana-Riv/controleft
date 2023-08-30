import Vue from 'vue'
import Vuex from 'vuex'

import admin from './modules/admin'
import colors from './modules/colors'
import logo from './modules/logo'
import main from './modules/main'
import profile from './modules/profile'
import usuarios from './modules/usuarios'
import project from './modules/project'
import navi from './modules/navi'
import blog from './modules/blog'
import blog_category from './modules/blog_category'
import category from './modules/category'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    admin: admin,
    main: main,
    usuarios: usuarios,
    profile:profile,
    colors:colors,
    logo:logo,
    project:project,
    navi:navi,
    blog:blog,
    blog_category:blog_category,
    category:category
  }
})

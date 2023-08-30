import Vue from 'vue'
import VueRouter from 'vue-router'
import userService from '../services/user.service'
Vue.use(VueRouter)

const routes = [

    {
      path: '/',
      name: 'Home',
      component: () => import('../views/Home'),
      meta :{
        log:false,
        admin : false,
        auth: false,
      }
    },
    {
      path: '/services',
      name: 'Services',
      component: () => import('../views/Services'),
      meta :{
        log:false,
        admin : false,
        auth: false,
      }
    },
    {
      path: '/projects',
      name: 'Projects',
      component: () => import('../views/Projects'),
      meta :{
        log:false,
        admin : false,
        auth: false,
      }
    },
    {
      path: '/social-responsability',
      name: 'SocialResponsability',
      component: () => import('../views/SocialResponsability'),
      meta :{
        log:false,
        admin : false,
        auth: false,
      }
    },
    {
      path: '/blog',
      name: 'Blog',
      component: () => import('../views/blog'),
      meta :{
        log:false,
        admin : false,
        auth: false,
      }
    },
    {
      path: '/blog-content',
      name: 'BlogContent',
      component: () => import('../views/blogContent'),
      meta :{
        log:false,
        admin : false,
        auth: false,
      }
    },
    {
      path: '/about-us',
      name: 'AboutUs',
      component: () => import('../views/AboutUs.vue'),
      meta :{
        log:false,
        admin : false,
        auth: false,
      }
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/Login'),
      meta :{
        log:false,
        admin : false,
        auth: false,
      }
    },
    
  {
    path: '/auth',
    name: 'autentificacion',
    component: () => import('../views/Autentificacion'),
    meta :{
      log:true,
      admin : true,
      auth: false
    }
  },
  {
    path: '/administrador',
    name: 'Dashboard',
    component: () => import('../views/Dashboard'),
    meta :{
      log:true,
      admin : true,
      auth: true, 
    }
  },

  {
    path: '*',
    name: '404',
    component: () => import('../views/Error404'),
    meta :{
     log:false,
     admin : false,
     auth: false
    }
  },


   

]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

router.beforeEach( async (to, from, next) => {

  let meta_admin = to.matched.some(record=>record.meta.admin);
  let meta_log = to.matched.some(record=>record.meta.log);
  let meta_auth = to.matched.some(record=>record.meta.auth);

  let tokenexp = await userService.tokenexp()
  let check =false //comprobar si esta logeado
  let admin =false;
  let type =''


  if(tokenexp){ // ver que el token no este expirado.
    localStorage.removeItem('tkn')
    localStorage.removeItem('ath') //limpiar el localstorage
    next()
  }


  let response = await userService.getData()

  if(response.status =='error'){
    localStorage.removeItem('tkn')
    localStorage.removeItem('ath')
  }


  if(response.status=='success'){ //comprobar que sea un login valido.
    check =true;
    let isAdmin = userService.isAdmin(response.result);
    admin = isAdmin.admin
    type = isAdmin.type
  
  }

  let ath = await userService.getAth();

 
  // borrar el localstorage cada que vayamos a login.
  
  if(to.path==='/login' && check){
    localStorage.removeItem('tkn')
    localStorage.removeItem('ath')
    
    next()
  }

 
  if(meta_log){
    if(check){
      if(meta_admin){
            if(admin){
            
              if(meta_auth){
                if(ath){
                  next();
                }else{
                  localStorage.removeItem('tkn')
                  localStorage.removeItem('ath')
                  next('/login')
                }
              }else{ //...proximamente rutas que no requieran autentificacion
                next()
              }
             
            }else{
              localStorage.removeItem('tkn')
              localStorage.removeItem('ath')
              next('/')
            }
     }else{
        if(admin){ //no requiere admin pero es admin
          next()
         }else{
           next()
         }
      }
    }else{
      next('/login')
    }
    

  }else{
   
    if(check){
      if(admin){
       next()
      }else{
        next();
      }
    }else{
      next();
    }

  }

 
});

const clearLocalStorage =  function(){
    localStorage.removeItem('crt')
    localStorage.removeItem('tkn')
    localStorage.removeItem('ath')
}


export default router


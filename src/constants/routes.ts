const ROUTES_HOME = {
  ROOT: {
    path: '/',
  },
  HOME: {
    path: '',
    name: 'home',
  },
  ABOUT: {
    path: 'about',
    name: 'about',
  },
} as const

const ROUTES_AUTH = {
  LOGIN: {
    path: '/login',
    name: 'login',
  },
  REGISTRATION: {
    path: '/registration',
    name: 'registration',
  },
}

export { ROUTES_HOME, ROUTES_AUTH }

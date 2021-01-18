const strategy = localStorage.getItem('auth.strategy')
const FALLBACK_INTERVAL = 30 * 60 * 1000 * 0.9

async function refreshTokenF($auth, $axios, refreshToken) {
  refreshToken = refreshToken.slice(7)
  //console.log('refreshtoken dau', refreshToken)
  if (refreshToken) {
    try {
      const response = await $axios.post('auth/token/refresh', { 'refresh': refreshToken })
      //console.log(response.data)
      let token = 'Bearer ' + response.data.access
      refreshToken = response.data.refresh

      $auth.setToken(strategy, token)
      $auth.setRefreshToken(strategy, refreshToken)
      $axios.setToken(token)
      console.log('update xong roi ne')
    } catch (error) {
      $auth.logout()
      throw new Error('Error while refreshing token')
    }
  }
}

export default async function ({ app }) {
  const { $axios, $auth } = app

  let token = $auth.getToken(strategy)
  let refreshToken = $auth.getRefreshToken(strategy)

  let refreshInterval = FALLBACK_INTERVAL
  console.log(strategy)
  
  setInterval(async function () {
    refreshToken = $auth.getRefreshToken(strategy)
    await refreshTokenF($auth, $axios, refreshToken)
  }, refreshInterval)
}
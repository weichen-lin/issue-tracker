import axios from 'axios'

const params = new URLSearchParams([
  [
    'client_id',
    process.env.github_oauth_clientID as string,
    'redirect_uri',
    'http://127.0.0.1/github',
    'scope',
    'repo',
  ],
])

export function get_github_token() {
  return axios.get('https://github.com/login/oauth/authorize', { params })
}

export function auth_github() {
  return axios.post(
    'https://github.com/login/oauth/access_token',
    {
      client_id: '',
      client_secret: '',
      code: '',
    },
    {
      headers: {
        Accept: 'application/json',
      },
    }
  )
}

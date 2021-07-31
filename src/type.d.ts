interface ApiData {
  title: string
  html_url: string
  user: User
  userAvatar: string
  repository: string
  repository_url: string
  node_id: string
}

interface Data {
  owner: string
  repo: string
}

interface User {
  login: string
  avatar_url: string
  url: string
}
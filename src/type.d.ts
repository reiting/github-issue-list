interface ApiData {
  title: string
  html_url: string
  user: User
  userAvatar: string
  url: string
  id: number
 }

interface User {
  login: string
  avatar_url: string
  url: string
}
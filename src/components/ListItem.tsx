import './issue-list.css'


const ListItem = ({ title, html_url, user, url }: ApiData) => {
  let repo = url.split('/')
  let repoLink = html_url.split('/issues')[0]

  return (
    <div className='list'>
      <p>Issue: <a href={html_url}>{title}</a></p>
      <p>Username: <a href={user.avatar_url}>{user.login}</a></p>
      <p>User avatar: <a href={user.avatar_url}>{user.avatar_url}</a></p>
      <p>Issue Repository: <a href={repoLink}>{repo[5]}</a></p>
    </div>

  )
}

export default ListItem

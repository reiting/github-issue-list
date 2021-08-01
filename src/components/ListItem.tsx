
const ListItem = ({title, html_url, user, repository, repository_url, node_id}: ApiData) => {

  let repo = repository_url.split('/')
  console.log('REP', repo)
  return (
    <>
   <li>Issue: <a href={html_url}>{title}</a></li>
   <p>Username: <a href={repository}>{user.login}</a></p>
   <p>User avatar: <a href={repository}>{user.avatar_url}</a></p>
   <p>Issue Repository: <a href={repository_url}>{repo[5]}</a></p>
   </>
  )
}

export default ListItem

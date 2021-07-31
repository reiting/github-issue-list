
const ListItem = ({title, html_url, user, repository, repository_url, node_id}: ApiData) => {

  return (
    <>
   <li><a href={html_url}>{title}</a></li>
   <p><a href={repository}>{user.login}</a></p>
   <p><a href={repository}>{user.avatar_url}</a></p>
   <p><a href={repository_url}>REpo Name</a></p>
   </>
  )
}

export default ListItem

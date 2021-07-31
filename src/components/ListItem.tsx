
const ListItem = ({title, html_url, user, repository, repository_url, node_id}: ApiData) => {

  return (
    <>
   <li><a href={html_url}>{title}</a></li>
   <p>{user.login}</p>
   <p>{user.avatar_url}</p>
   <p>{repository}</p>
   <p>{repository_url}</p>
   </>
  )
}

export default ListItem

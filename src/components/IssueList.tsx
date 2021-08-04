import axios from "axios"
import { useEffect, useState } from "react"
import ListItem from "./ListItem"
import './issue-list.css'

const IssueList = () => {
  const [issues, setIssues] = useState<ApiData[]>([])

  useEffect(() => {
    fetchApiData()
  }, [])

  const fetchApiData = async () => {
    try {
      const [typeScriptApiData, reactApiData, graphqlApiData] = await Promise.all([
        axios.get(`https://api.github.com/repos/microsoft/TypeScript/issues`),
        axios.get(`https://api.github.com/repos/facebook/react/issues`),
        axios.get(`https://api.github.com/repos/graphql/graphql-js/issues`),
      ])

      let combinedIssues = [...typeScriptApiData.data, ...reactApiData.data, ...graphqlApiData.data]
      let filteredIssues = combinedIssues.filter(issue => !Boolean(issue.pull_request))
      filteredIssues.sort((a, b) => (a.title > b.title) ? 1 : -1)
      setIssues(filteredIssues)
    }
    catch (err) {
      console.log(err)
    }
  }

  let deletedIssue = (id: number) => {
    let issuesToKeep = issues.filter(issue => issue.id !== id)
    setIssues(issuesToKeep)
  }

  return (
    <div>
      <h1 className='page-title'>Issue List from Github</h1>
      <div className='items'>
        {issues.map(issue => (
          <ul key={issue.id}
          >
            <ListItem
              title={issue.title}
              html_url={issue.html_url}
              user={issue.user}
              userAvatar={issue.user.avatar_url}
              url={issue.url}
              id={issue.id}
            />
            <button className='delete-button' onClick={() => { deletedIssue(issue.id) }}>Delete</button>
          </ul>
        ))}
      </div>
    </div>

  )
}

export default IssueList
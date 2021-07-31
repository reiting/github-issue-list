import axios from "axios"
import { useEffect, useState } from "react"
import ListItem from "./ListItem"

declare module 'axios' {
  export interface AxiosRequestConfig {
    owner: string;
    repo: string;
  }
}

const IssueList = ({ owner, repo }: Data) => {
  const [issues, setIssues] = useState<ApiData[]>([])

  const fetchApiData = async () => {
    try {
      const [typeScriptApiData, reactApiData, graphqlApiData] = await Promise.all([
        axios.get(`https://api.github.com/repos/${owner}/${repo}/issues`, { owner: 'microsoft', repo: 'TypeScript' }),
        axios.get(`https://api.github.com/repos/${owner}/${repo}/issues`, { owner: 'facebook', repo: 'react' }),
        axios.get(`https://api.github.com/repos/${owner}/${repo}/issues`, { owner: 'graphql', repo: 'graphql-js' }),
      ])
      let combinedIssues = [...typeScriptApiData.data, ...reactApiData.data, ...graphqlApiData.data]
      console.log('comined', combinedIssues)
      console.log('issues', issues)
      setIssues(combinedIssues)
    }
    catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
      fetchApiData()
  }, [])

//   const alphabetize = (a: string, b: string) => {
//     if(a.title < b.title) { return -1; }
//     if(a.title > b.title) { return 1; }
//     return 0;
// }

  return (
    <div>
      <h1>Issue List from Github</h1>
        {issues.map(issue => (
      <ul key={issue.node_id}
      >
          <ListItem
            title={issue.title}
            html_url={issue.html_url}
            user={issue.user}
            userAvatar={issue.user.avatar_url}
            repository={issue.user.url}
            repository_url={issue.repository_url}
            node_id={issue.node_id}
          />
      </ul>
        ))}
    </div>
  )
}

export default IssueList
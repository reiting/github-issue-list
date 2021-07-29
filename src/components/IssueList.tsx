import axios from "axios"
import { useEffect } from "react"

interface Props {
  owner: string
  repo: string
}

declare module 'axios' {
  export interface AxiosRequestConfig {
    owner: string;
    repo: string
  }
}

const IssueList: React.FC<Props> = ({owner, repo}) => {
  useEffect(() => {
    const fetchApiData = async () => {
      try {
        const [typeScriptApiData, reactApiData, graphqlApiData] = await Promise.all([
          axios.get(`https://api.github.com/repos/${owner}/${repo}/issues`, {owner: 'microsoft', repo: 'TypeScript'}),
          axios.get(`https://api.github.com/repos/${owner}/${repo}/issues`, {owner: 'facebook', repo: 'react'}),
          axios.get(`https://api.github.com/repos/${owner}/${repo}/issues`, {owner: 'graphql', repo: 'graphql-js'}),
        ])
        console.log('type', typeScriptApiData, 'react', reactApiData, 'graph', graphqlApiData)
      }
      catch (err) {
        console.log(err)
      }
    }
    fetchApiData()
  })
  return (
    <h1>Yo</h1>
  )
}

export default IssueList
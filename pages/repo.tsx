import { get_github_token, auth_github } from '@/pages/api'

interface GithubProps {
  githubToken: string
}

export default function Github(props: GithubProps) {
  return (
    <>
      <div className='bg-red-300 text-2xl'>REPO PAGE</div>
    </>
  )
}

import { get_github_token, auth_github } from '@/pages/api'
import { GetServerSideProps } from 'next'
import Router from 'next/router'
import { useEffect } from 'react'
//http://127.0.0.1:3000/oauth/github?code=43e0d82f403dde967101

interface GithubProps {
  githubToken: string
}

export default function Github(props: GithubProps) {
  const { githubToken } = props

  useEffect(() => {
    if (!githubToken) {
      Router.push('/')
    }
    sessionStorage.setItem('_issueTracker_', githubToken)
    Router.push('/repo')
  }, [])

  return (
    <>
      <div className='bg-red-300 text-2xl'>123123123</div>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { url, headers } = context.req

  if (url && headers) {
    const urlObj = new URL(url, `http://${headers.host}`)
    const githubToken = urlObj.searchParams.get('code')

    return {
      props: {
        githubToken: githubToken,
      },
    }
  }

  return {
    props: {
      githubToken: '',
    },
  }
}

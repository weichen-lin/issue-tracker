export default function Home() {
  console.log(process.env.github_oauth_clientID)
  console.log(process.env.github_oauth_clientSecret)

  return (
    <>
      <div className='bg-red-300 text-2xl'>INDEX PAGE</div>
    </>
  )
}

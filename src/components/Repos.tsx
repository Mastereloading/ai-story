export async function Repos() {
    type repo = {
      full_name?: string
    }
    const response = await fetch('https://api.github.com/users/Mastereloading/repos', {
        cache: 'force-cache'
    })
    const repos = await response.json()

    const repositories = repos.map((repo: Object) => {
        return repo.full_name
    })

    return (
      <ul>
        { repositories.map((repoName: String, key: number) => {
          return <li>{ key + 1 } - { repoName }</li>
        })}
      </ul>
    )
}

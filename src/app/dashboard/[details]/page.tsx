import Link from 'next/link'

export const revalidate = 60 // revalidate page

interface Details {
    params: {
        details: string,
        style: number
    }
}

export default async function Dashboard({params} : Details) {
    console.log('test')
    const response = await fetch('https://api.github.com/users/Mastereloading', {
        next: {
            revalidate: 30 // revalidate request (fetch)
        }
    })
    const user = await response.json()
    return (
        <div>
            <h1>Dashboard</h1>
            <h2>Details: {params.details}</h2>
            <Link href="/">
                <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100px', height: '100px', backgroundColor: 'red'}}>
                    Return
                </div>        
            </Link>
            <p>
                { JSON.stringify(user, null, 2) }
            </p>
        </div>
    )
}
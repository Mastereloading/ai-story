import Link from 'next/link'

interface Details {
    params: {
        details: string,
        style: number
    }
}

export default function Dashboard({params} : Details) {
    return (
        <div>
            <h1>Dashboard</h1>
            <h2>Details: {params.details}</h2>
            <Link href="/">
                <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100px', height: '100px', backgroundColor: 'red'}}>
                    Return
                </div>        
            </Link>
        </div>
    )
}
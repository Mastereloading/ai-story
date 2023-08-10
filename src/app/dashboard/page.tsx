import Link from 'next/link'

export default function Dashboard() {
    return (
        <div>
            <h1>Dashboard</h1>
            <Link href="/">
                <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100px', height: '100px', backgroundColor: 'red'}}>
                    Return
                </div>        
            </Link>
        </div>
    )
}
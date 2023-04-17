import Link from 'next/link'
export default function FirstPage() {
    return (
        <div>
            <Link href="/">Back to home</Link>
            <h1>내가 제일 좋아하는 음식은?</h1>
            <ol>
                <li><h2>피자</h2></li>
                <li><h3>스시</h3></li>
                <li><h4>쌀국수</h4></li>
                <li><h5>치킨</h5></li>
                <li><h6>투움바 파스타</h6></li>
            </ol>
            <h1>갑자기 먹을 거 나열하니까 배고프네요~</h1>
        </div>
    )
}
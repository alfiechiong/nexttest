import {useRouter} from 'next/router'
const About = ({data})=>{
    const { isFallback} = useRouter();

    if(isFallback){
        return <div>...Loading</div>
    }
    return <div>
        About Page
        <ul>
            {data.map((item,k)=>{
                return <li key={k}>{item.title}</li>
            })}
        </ul>
        </div>}

export async function getStaticProps(){
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await res.json()
    return {
        props:{
            data
        },revalidate:60
    }
}

export default About
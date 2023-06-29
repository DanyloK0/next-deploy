import useSWR from 'swr';
export default function Page({ data }:any) {
    return( 
        <div>
            {data}
        </div>
    )
}
const fetcher = (url:string) => fetch(url).then((res) => res.json());
export async function getServerSideProps() {
    const { data, error } = useSWR('https://my-json-server.typicode.com/training-api/next-course-gadgets/gadgets', fetcher);
    if (error) {
        return <div>Error fetching data</div>;
    }
    if (!data) {
        return <div>Loading...</div>;
    }
    // Fetch data from external API
    // Pass data to the page via props
    return { props: { data } }
}
import Image from 'next/image';
import useSWR from 'swr';

const fetcher = (url:string) => fetch(url).then((res) => res.json());

function GadgetListSSR() {
    const { data, error } = useSWR('https://my-json-server.typicode.com/training-api/next-course-gadgets/gadgets', fetcher);
    if (error) {
        return <div>Error fetching data</div>;
    }
    if (!data) {
        return <div>Loading...</div>;
    }

    return (
        <div className="grid md:grid-cols-4 xl:grid-cols-4 gap-6 p-4">
            <h1 className="bg-sky-800 text-white p-4 m-4 rounded-lg">SSR Gadget Example</h1>
        {data.map((item:any) => (
            <div key={item.id} className="bg-sky-800 text-white p-4 m-4 rounded-lg">
            <Image src={item.image} alt={item.title} width={200} height={200} />
            <h2 className="text-xl">{item.title}</h2>
            <p className="text-sm">{item.description}</p>
            {item.title}
            </div>
        ))}
        </div>
    );
}

export default GadgetListSSR;
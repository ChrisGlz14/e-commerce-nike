import {notFound} from "next/navigation";

interface props {
    params : {
        id:string
    }
}

export default function({params}:props) {

    const {id} = params

    if (id !== 'men' && id !== 'women' && id !== 'sales' && id !== 'child') {
        notFound();
    }

    return (
        <main>
            <h1>category page : {id}</h1>
        </main>
    );
}
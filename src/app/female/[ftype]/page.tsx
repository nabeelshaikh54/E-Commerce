import { oneProductType, responseType } from "@/components/utils/ProductsDataArrayAndType";
import CardAll from "@/components/views/CardAll";
import { FC } from "react"

async function fetchAllProductsData() {
    let res = await fetch(`https://${process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}.api.sanity.io/v2023-05-26/data/query/production?query=*%5B_type+%3D%3D+"products"+%26%26+productTypes%5B0%5D%3D%3D"Female"%5D%0A`, {
        next: {
            revalidate: 60
        }
    });

    if (!res.ok) {
        throw new Error("Failed to fetch")
    }

    return res.json();
}


const Female = async ({ params }: { params: { ftype: string } }) => {
    let res: responseType = await fetchAllProductsData();
    return (
        <div
            className="grid grid-cols-2 md:grid-cols-3 py-10 lg:grid-cols-4 gap-4"
        >
            {res.result.map((items: oneProductType, index: number) => (
                <CardAll key={index} singleProductData={items} />
            ))}
        </div>
    )
}

export default Female
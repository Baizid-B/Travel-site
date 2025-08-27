import PackageItem from "./PackageItem";
import useTourPackages from "../../../Hook/TourPackages/useTourPackages";


const OurPackages = () => {

    const [packages] = useTourPackages()
    const popular = packages.filter(item => item.category === 'popular');

    return (
        <>
            <div className="my-20">
                <div className="text-center text-3xl my-10 font-bold">
                    <h1 className="border-b-2 w-1/4 mx-auto">Our Package</h1>
                </div>

                <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-10 w-11/12 mx-auto mb-10">
                    {
                        popular.map(packs => <PackageItem key={packs._id} packs={packs} ></PackageItem>)
                    }
                </div>
            </div>
        </>
    );
};

export default OurPackages;
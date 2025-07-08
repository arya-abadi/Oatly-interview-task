const GridPage = () => {
    return (
        <div className="grid grid-cols-3 text-center gap-x-3 gap-y-2 auto-rows-[minmax(100px,_auto)] grid-item-padding break-words">
            <div className="bg-gray-100">
                lkbnsnkdn kladnadnandnamndnm adnmanmdnm,adnamlorem.lksndndnnkd nadmnadmamndmnadnmanm dnandandnnndmnmsdmnsmndm msmdsdfnsdmsddm
                amdmamdaDMA.MDADN,ADNDMNADNNAD,NAN,D,.ANDN,A,ND,NADNMND lkbnsnkdnkladna dnandnamndnmad nmanmdnm,adnamlorem.
            </div>
            <div className="bg-gray-200 col-span-2 grid grid-cols-3">
                <div className="border border-black">2.1</div>
                <div className="border border-black">2.2</div>
                <div className="border border-black">2.3</div>
            </div>
            <div className="bg-gray-300 col-span-2">3</div>
            <div className="bg-gray-400 row-span-2">4</div>
            <div className="bg-gray-500">5</div>
            <div className="bg-gray-600">6</div>
        </div>
    );
};
export default GridPage;

import up from '@assets/images/coursePagination/up.svg';
import down from '@assets/images/coursePagination/down.svg';
import { useState } from 'react';


const CostRange = ({ min: initialMin, max: initialMax, index }) => {

    const [range, setRange] = useState([initialMin, initialMax]);
    const [openIndexes, setOpenIndexes] = useState(new Set());


    const handleChange = (e) => {
        const newMin = Math.min(Number(e.target.value[0]), range[1]);
        const newMax = Math.max(Number(e.target.value[1]), range[0]);

        setRange([newMin, newMax]);
    };

    const toggleAccordion = (index) => {
        const newOpenIndexes = new Set(openIndexes);
        if (newOpenIndexes.has(index)) {
            newOpenIndexes.delete(index);
        } else {
            newOpenIndexes.add(index);
        }
        setOpenIndexes(newOpenIndexes);
    };


    return (
        <>
            <div className='flex justify-between items-center cursor-pointer p-4 border-b border-gray-200'
                onClick={() => toggleAccordion(index)}>
                <h3 className='text-[16px] text-[#263238]'>قیمت</h3>
                <span>
                    {openIndexes.has(index) ? <img src={up} alt="Collapse" /> : <img src={down} alt="Expand" />}
                </span>
            </div>
            <div className={`overflow-hidden transition-all duration-300 ${openIndexes.has(index) ? 'max-h-40' : 'max-h-0'}`}>
                {openIndexes.has(index) && (
                    <div className='p-2'>
                        <div className="flex flex-col items-center">
                            <div className="flex justify-between w-full">
                                <span>از {range[0]} تومان</span>
                                <span>تا {range[1]} تومان</span>
                            </div>
                            <input type="range" min={initialMin} max={initialMax} value={range[0]} onChange={e => handleChange({ target: { value: [e.target.value, range[1]] } })} className="w-full mt-4" style={{ cursor: 'pointer' }} />
                            <input type="range" min={initialMin} max={initialMax} value={range[1]} onChange={e => handleChange({ target: { value: [range[0], e.target.value] } })} className="w-full mt-2" style={{ cursor: 'pointer' }} />
                        </div>
                    </div>
                )}
            </div>

        </>
    );
};

export default CostRange;
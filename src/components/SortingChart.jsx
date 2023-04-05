import { useContext, useEffect } from "react";

import { SortingContext } from "../contexts/SortingContext";

function SortingChart() {
	const { 
        sortingState, 
        generateSortingArray,
        bubbleSort,
        selectionSort,
        insertionSort
    } = useContext(SortingContext)

    useEffect(() => {
		generateSortingArray()
    }, [])

    return (
        <div>
            <h1 className="font-bold mb-2">Sorting Visualizer</h1>
            <div className="flex gap-4 mb-6">
                <button className="bg-white text-black px-2">Merge Sort</button>
                <button className="bg-white text-black px-2">Radix Sort</button>
                <button className="bg-white text-black px-2">Quick Sort</button>
                <button onClick={insertionSort} className="bg-white text-black px-2">Insertion Sort</button>
                <button onClick={selectionSort} className="bg-white text-black px-2">Selection Sort</button>
                <button onClick={bubbleSort} className="bg-white text-black px-2">Bubble Sort</button>
                <button onClick={generateSortingArray} className="px-2 underline">
                    Reset
                </button>
            </div>
            <div className="max-w-3xl chart-container">
                <div className="base"></div>
                {sortingState.array.map((bar, i) => (
                    <div key={i} className="bar-container">
                        <div
                            className={`bar bar-${bar.state}`}
                            style={{ height: `${Math.floor((bar.value / 1000) * 100)}%` }}
                        >
                            <p className={`pl-1.5 ${bar.state === "idle" ? "text-[#B1D2CF]" : "text-[#D8B7BE]"}`}>{bar.value}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default SortingChart;

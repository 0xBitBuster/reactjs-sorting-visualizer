import { useContext, useEffect } from "react";

import { SortingContext } from "../contexts/SortingContext";
import algorithmInfos from "../data/algorithmInfos";

function SortingChart() {
    const { sortingState, generateSortingArray, startVisualizing, changeSortingSpeed, changeAlgorithm } = useContext(SortingContext);

    useEffect(() => {
        generateSortingArray();
    }, []);

    return (
        <div className="mt-4 mb-4 flex flex-col items-center">
            <img src="/logo.png" className="max-w-lg mb-6 w-full" />
            
            <div className="flex flex-wrap justify-center gap-3 mb-6">
                <button
                    onClick={() => changeAlgorithm("bubble_sort")}
                    className={`bg-carbon text-white px-5 py-3 rounded-3xl ${
                        sortingState.algorithm === "bubble_sort" ? "bg-turquoise-dark" : "hover:bg-carbon-light"
                    } transition-all`}
                >
                    Bubble Sort
                </button>
                <button
                    onClick={() => changeAlgorithm("insertion_sort")}
                    className={`bg-carbon text-white px-5 py-3 rounded-3xl ${
                        sortingState.algorithm === "insertion_sort" ? "bg-turquoise-dark" : "hover:bg-carbon-light"
                    } transition-all`}
                >
                    Insertion Sort
                </button>
                <button
                    onClick={() => changeAlgorithm("selection_sort")}
                    className={`bg-carbon text-white px-5 py-3 rounded-3xl ${
                        sortingState.algorithm === "selection_sort" ? "bg-turquoise-dark" : "hover:bg-carbon-light"
                    } transition-all`}
                >
                    Selection Sort
                </button>
                <button
                    onClick={() => changeAlgorithm("merge_sort")}
                    className={`bg-carbon text-white px-5 py-3 rounded-3xl ${
                        sortingState.algorithm === "merge_sort" ? "bg-turquoise-dark" : "hover:bg-carbon-light"
                    } transition-all`}
                >
                    Merge Sort
                </button>
                <button
                    onClick={() => changeAlgorithm("quick_sort")}
                    className={`bg-carbon text-white px-5 py-3 rounded-3xl ${
                        sortingState.algorithm === "quick_sort" ? "bg-turquoise-dark" : "hover:bg-carbon-light"
                    } transition-all`}
                >
                    Quick Sort
                </button>
                <button
                    onClick={() => changeAlgorithm("radix_sort")}
                    className={`bg-carbon text-white px-5 py-3 rounded-3xl ${
                        sortingState.algorithm === "radix_sort" ? "bg-turquoise-dark" : "hover:bg-carbon-light"
                    } transition-all`}
                >
                    Radix Sort
                </button>
            </div>

            <div className="max-w-3xl w-full">
                <div className="mb-4 chart-container">
                    <div className="base"></div>
                    {sortingState.array.map((bar, i) => (
                        <div key={i} className="bar-container">
                            <div className={`select-none bar bar-${bar.state}`} style={{ height: `${Math.floor((bar.value / 1000) * 100)}%` }}>
                                <p className={`pl-1.5 ${bar.state === "idle" ? "text-[#B1D2CF]" : "text-[#D8B7BE]"}`}>{bar.value}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="flex items-center gap-4 max-w-3xl mb-8">
                    <button disabled={sortingState.sorting} onClick={startVisualizing} className="px-4 py-2 push-btn text-white-light disabled:brightness-75">
                        Start
                    </button>
                    <button disabled={sortingState.sorting} onClick={() => generateSortingArray()} className="text-white-light disabled:brightness-75">
                        New Array
                    </button>
                    <select
                        disabled={sortingState.sorting}
                        onChange={changeSortingSpeed}
                        defaultValue="slow"
                        className="ml-auto bg-carbon px-2 py-2 rounded-md cursor-pointer outline-none focus:ring ring-turquoise-dark disabled:brightness-75 disabled:cursor-default"
                    >
                        <option value="slow">Slow</option>
                        <option value="normal">Normal</option>
                        <option value="fast">Fast</option>
                    </select>
                </div>

                <div className="w-full h-0.5 bg-carbon-light mb-4" />
                <div>
                    <h1 className="font-bold text-2xl md:text-4xl">{algorithmInfos[sortingState.algorithm].name}</h1>
                    <p className="whitespace-pre-line mb-6">{algorithmInfos[sortingState.algorithm].description}</p>
                    <div className="w-full h-0.5 bg-carbon-light mb-6" />
                    
                    <div className="overflow-auto">
                        <table className="w-full text-left">
                            <thead>
                                <tr>
                                    <th className="px-4 border-r border-carbon-light" rowSpan={2}>
                                        Algorithm
                                    </th>
                                    <th className="px-4 border-r border-carbon-light" colSpan={3}>
                                        Time Complexity
                                    </th>
                                    <th className="px-4">Space Complexity</th>
                                </tr>
                                <tr className="border-b border-carbon-light">
                                    <th className="px-4 pb-2">Best</th>
                                    <th className="px-4 pb-2">Average</th>
                                    <th className="px-4 pb-2 border-r border-carbon-light">Worst</th>
                                    <th className="px-4 pb-2">Worst</th>
                                </tr>
                            </thead>
                            <tbody>
                                {Object.keys(algorithmInfos).map((key, i) => (
                                    <tr key={i} className="hover:bg-carbon-light whitespace-nowrap">
                                        <td className={`px-4 py-1 ${i === 0 ? "pt-2" : ""} border-r border-carbon-light`}>{algorithmInfos[key].name}</td>
                                        <td className={`px-4 py-1 ${i === 0 ? "pt-2" : ""}`}><span className={`px-1.5 py-0.5 rounded-md bg-${algorithmInfos[key].time_complexity.best[1]}`}>{algorithmInfos[key].time_complexity.best[0]}</span></td>
                                        <td className={`px-4 py-1 ${i === 0 ? "pt-2" : ""}`}><span className={`px-1.5 py-0.5 rounded-md bg-${algorithmInfos[key].time_complexity.average[1]}`}>{algorithmInfos[key].time_complexity.average[0]}</span></td>
                                        <td className={`px-4 py-1 ${i === 0 ? "pt-2" : ""} border-r border-carbon-light`}><span className={`px-1.5 py-0.5 rounded-md bg-${algorithmInfos[key].time_complexity.worst[1]}`}>{algorithmInfos[key].time_complexity.worst[0]}</span></td>
                                        <td className={`px-4 py-1 ${i === 0 ? "pt-2" : ""}`}><span className={`px-1.5 py-0.5 rounded-md bg-${algorithmInfos[key].space_complexity[1]}`}>{algorithmInfos[key].space_complexity[0]}</span></td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SortingChart;

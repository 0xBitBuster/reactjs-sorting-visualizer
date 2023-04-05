import { createContext, useState } from "react";

import { getRandomNumber } from "../helpers/math";
import { awaitTimeout } from "../helpers/promises";

export const SortingContext = createContext();

function SortingProvider({ children }) {
    const [sortingState, setSortingState] = useState({
        array: [],
        delay: 1000,
        algorithm: "bubble_sort",
    });

    const changeBar = (index, payload) => {
        setSortingState((prev) => ({
            ...prev,
            array: prev.array.map((item, i) => (i === index ? { ...item, ...payload } : item)),
        }));
    };

    const generateSortingArray = () => {
        const randomNumberArray = Array.from({ length: 12 }, () => {
            return {
                value: getRandomNumber(60, 1000),
                state: "idle",
            };
        });

        setSortingState({
            ...sortingState,
            array: randomNumberArray,
        });
    };

    const bubbleSort = async () => {
        const arr = sortingState.array.map((item) => item.value);

        for (let i = 0; i < arr.length; i++) {
            for (let j = 0; j < arr.length - i - 1; j++) {
                changeBar(j, { state: "selected" });
                changeBar(j + 1, { state: "selected" });
                await awaitTimeout(1000);

                if (arr[j] > arr[j + 1]) {
                    let temp = arr[j];
                    arr[j] = arr[j + 1];
                    changeBar(j, { value: arr[j + 1] });
                    arr[j + 1] = temp;
                    changeBar(j + 1, { value: temp });
                    await awaitTimeout(1000);
                }

                changeBar(j, { state: "idle" });
                changeBar(j + 1, { state: "idle" });
            }
        }
    };

    const selectionSort = async () => {
        const arr = sortingState.array.map((item) => item.value);

        for (let i = 0; i < arr.length; i++) {
            let min = i;
            changeBar(min, { state: "selected" });

            for (let j = i + 1; j < arr.length; j++) {
                changeBar(j, { state: "selected" });
                await awaitTimeout(1000);

                if (arr[j] < arr[min]) {
                    changeBar(min, { state: "idle" });
                    min = j;
                    changeBar(min, { state: "selected" });
                } else {
                    changeBar(j, { state: "idle" });
                }
            }

            if (min !== i) {
                let temp = arr[i];
                arr[i] = arr[min];
                changeBar(i, { value: arr[min], state: "idle" });
                arr[min] = temp;
                changeBar(min, { value: temp, state: "idle" });
            } else {
                changeBar(i, { state: "idle" });
                changeBar(min, { state: "idle" });
            }
        }
    };

    const insertionSort = async () => {
        const arr = sortingState.array.map((item) => item.value);

        for (let i = 1; i < arr.length; i++) {
            let current = arr[i];
            let j = i - 1;

            changeBar(i, { state: "selected" })
            if (j > -1) changeBar(j, { state: "selected" })
            await awaitTimeout(500)

            while (j > -1 && current < arr[j]) {
                arr[j + 1] = arr[j];
                changeBar(j + 1, { value: arr[j] })
                j--;
                await awaitTimeout(500)
            }

            arr[j + 1] = current;
            changeBar(j + 1, { value: current })
        }
    };

    return (
        <SortingContext.Provider
            value={{
                sortingState,
                generateSortingArray,
                bubbleSort,
                selectionSort,
                insertionSort,
            }}
        >
            {children}
        </SortingContext.Provider>
    );
}

export default SortingProvider;

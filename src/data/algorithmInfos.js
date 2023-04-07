const algorithmInfos = {
	bubble_sort: {
		name: "Bubble Sort",
		time_complexity: {
			best: ['O(n)', 'yellow-600'],
			average: ['O(n^2)', 'red-800'],
			worst: ['O(n^2)', 'red-800']
		},
		space_complexity: ['O(1)', 'green-800'],
		description: `
			Bubble sort is a simple sorting algorithm that works by repeatedly swapping adjacent elements in an array that are in the wrong order. This process is repeated until the entire array is sorted.
		
			The algorithm starts at the beginning of the array and moves through it, swapping adjacent elements that are out of order. This process is repeated until the end of the array is reached, at which point the algorithm starts again from the beginning. The algorithm continues to iterate through the array and swap adjacent elements until no more swaps are needed.

			Although bubble sort has a time complexity of O(n^2), which makes it less efficient than other sorting algorithms, it can be useful for small arrays or as a simple illustration of how sorting algorithms work.
		`
	},
	insertion_sort: {
		name: "Insertion Sort",
		time_complexity: {
			best: ['O(n)', 'yellow-600'],
			average: ['O(n^2)', 'red-800'],
			worst: ['O(n^2)', 'red-800']
		},
		space_complexity: ['O(1)', 'green-800'],
		description: `
			Insertion sort is a simple sorting algorithm that works by repeatedly inserting elements from an unsorted array into a sorted sub-array at the correct position.

			The algorithm starts by considering the first element of the array as a sorted sub-array. It then picks the next element and compares it to the elements in the sorted sub-array, moving elements to the right until it finds the correct position to insert the new element. This process is repeated for each subsequent element until the entire array is sorted.

			Insertion sort is a stable sorting algorithm, meaning it preserves the relative order of equal elements in the input array. It is also an in-place algorithm, meaning it requires no additional memory space beyond the original array. However, insertion sort has a time complexity of O(n^2) in the worst case, where n is the number of elements in the array. Therefore, it is not recommended for large data sets, but it can be efficient for small or nearly sorted arrays.
		`
	},
	selection_sort: {
		name: "Selection Sort",
		time_complexity: {
			best: ['O(n^2)', 'red-800'],
			average: ['O(n^2)', 'red-800'],
			worst: ['O(n^2)', 'red-800'],
		},
		space_complexity: ['O(1)', 'green-800'],
		description: `
			Selection sort is a sorting algorithm that sorts an array by repeatedly finding the minimum element from the unsorted part of the array and moving it to the beginning of the array. 
		
			The algorithm starts by finding the minimum element from the entire array and swapping it with the first element. It then finds the minimum element from the remaining unsorted part of the array and swaps it with the second element, and so on until the entire array is sorted.

			Although selection sort has a time complexity of O(n^2), it can be useful for small arrays or teaching as it is relatively simple.
		`
	},
	merge_sort: {
		name: "Merge Sort",
		time_complexity: {
			best: ['O(n log(n))', 'orange-700'],
			average: ['O(n log(n))', 'orange-700'],
			worst: ['O(n log(n))', 'orange-700'],
		},
		space_complexity: ["O(n)", "yellow-600"],
		description: `
			Merge sort is a popular sorting algorithm that follows the divide-and-conquer approach. It works by breaking down an unsorted array into smaller, sorted subarrays and then merging those subarrays to produce a fully sorted array.

			The algorithm first divides the unsorted array into two halves, then recursively divides each half into two smaller halves until each subarray contains only one element. Then, the algorithm merges the subarrays back together, comparing the first elements of each subarray and placing them in order. This process continues until the entire array is sorted.

			While merge sort is an efficient and reliable sorting algorithm, it may not be as commonly used as some other sorting algorithms. This is likely due to its additional space requirements and performance drawbacks compared to other sorting algorithms. 
		`
	},
	quick_sort: {
		name: "Quick Sort",
		time_complexity: {
			best: ['O(n log(n))', 'orange-700'],
			average: ['O(n log(n))', 'orange-700'],
			worst: ['O(n^2)', 'red-800']
		},
		space_complexity: ['O(log (n))', 'lime-700'],
		description: `
			Quick sort is a popular sorting algorithm that uses a divide-and-conquer approach to sort an array of elements.
		
			The basic idea behind quick sort is to partition the array into two smaller sub-arrays based on a chosen pivot element. Elements smaller than the pivot are moved to the left sub-array, and elements greater than the pivot are moved to the right sub-array. This process is repeated recursively on each sub-array until the sub-arrays are small enough to be sorted easily. Once the sub-arrays are sorted, they are combined to form the final sorted array.
		
			Quick sort is known for its efficiency and is often used in practice such as in the V8 JavaScript engine. However, it can have poor performance if the pivot element is poorly chosen or if the input data is already sorted or nearly sorted.
		`
	},
	radix_sort: {
		name: "Radix Sort",
		time_complexity: {
			best: ['O(nk)', 'green-800'],
			average: ['O(nk)', 'green-800'],
			worst: ['O(nk)', 'green-800']
		},
		space_complexity: ['O(n+k)', 'yellow-600'],
		description: `
			Radix Sort is a non-comparative sorting algorithm that sorts elements based on their digits or characters. It works by iterating through each digit or character of the elements and sorting them based on their values at that position. The sorting process is repeated for each digit or character until all elements are sorted.

			Radix Sort can be performed using either the Least Significant Digit (LSD) or Most Significant Digit (MSD) approach. LSD Radix Sort starts by sorting the elements based on their least significant digit, and then moves on to the next digit until all digits have been sorted. MSD Radix Sort, on the other hand, starts by sorting the elements based on their most significant digit, and then moves on to the next digit until all digits have been sorted.

			One of the advantages of Radix Sort is that it has a time complexity of O(nk), where n is the number of elements and k is the number of digits or characters in the elements. This makes it an efficient algorithm for sorting large data sets, especially when the number of digits or characters is small. However, Radix Sort may not be as efficient as some other sorting algorithms for smaller data sets, and it requires additional memory space to store the intermediate results during sorting.
		`
	},
}

export default algorithmInfos
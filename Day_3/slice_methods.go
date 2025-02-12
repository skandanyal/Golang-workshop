package main

import "fmt"

func main() {
	slice := []int{10, 20, 30, 40, 50}

	slice = append(slice, 60, 70)

	new_slice := make([]int, len(slice))
	count := copy(new_slice, slice)

	fmt.Println("The existing elements are: ", slice)
	fmt.Println("Newly copied slice elements: ", new_slice)
	fmt.Println("Number of elements copied: ", count)
	new_slice = nil
	fmt.Println("Newly copied slice elements: ", new_slice)
}

package main

import "fmt"

func main() {
	var num int
	fmt.Println("Enter number of array elements: ")
	fmt.Scan(&num)

	even := make([]int, num)
	fmt.Println("Enter even elemets: ")

	for i := 0; i < num; i++ {
		fmt.Scan(&even[i])
	}

	fmt.Println("Even: ", even)
}

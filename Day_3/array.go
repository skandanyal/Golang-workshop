package main

import "fmt"

func main() {
	var arr = [5]int{1, 2, 3, 4, 5}
	for _, value := range arr {
		fmt.Println(value)
	}

	var array = [5]int{1, 2, 3, 4, 5}
	fmt.Println(array)

	var slice = []int{1, 2, 3, 4, 5}
	fmt.Println(slice)
}

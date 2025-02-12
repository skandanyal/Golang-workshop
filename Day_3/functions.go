package main

import (
	"fmt"
	"math"
)

func add(a int, b int) int {
	return a + b
}

func someFunction(a float64, b float64) float64 {
	return math.Pow(a, 2) + math.Pow(b, 2)
}

func cube(a int) int {
	return a * a * a
}

func swap(a string, b string) (string, string) {
	return b, a
}

func main() {
	var a int = 10
	var b int = 20

	fmt.Println(add(a, b))
	fmt.Println(someFunction(float64(a), float64(b)))
	fmt.Println(cube(b))

	first := "hello"
	second := "bye"

	first, second = swap(first, second)
	fmt.Println(first, second)
}

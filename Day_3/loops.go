package main

import (
	"fmt"
)

func main() {
	limit := 1 << 10 // More efficient way to calculate 2^10 (1024)
	for i := 1; i < limit; i *= 2 {
		fmt.Println(10 * i)
	}
}

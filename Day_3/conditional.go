package main

import "fmt"

func main() {
	number := 20

	if number%2 == 0 {
		fmt.Println("Even")
	} else {
		fmt.Println("Odd")
	}

	day := "nday"
	switch day {
	case "Monday":
		fmt.Println("Monday")
	case "Tuesday":
		fmt.Println("Tuesday")
	case "Wednesday":
		fmt.Println("Wednesday")
	case "Thursday":
		fmt.Println("Thursday")
	default:
		fmt.Println("Whatever")
	}
}

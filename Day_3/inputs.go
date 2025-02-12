package main

import "fmt"

func main() {
	var name string
	var age int

	fmt.Println("Enter name and age: ")
	fmt.Scan(&name, &age)
	fmt.Printf("Hello I am %s, am %d years old\n", name, age)
}

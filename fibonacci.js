function fibonacci(n) {
    if (n <= 1) {
        return n;
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
}

// Example usage:
console.log(fibonacci(5)); // 5
console.log(fibonacci(7)); // 13
console.log(fibonacci(10)); // 55

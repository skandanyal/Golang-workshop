async function fetchBalance() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const balance = Math.random() > 0.35 ? 1000 : 0;
            if (balance > 0) {
                resolve(balance);
            } else {
                reject("Insufficient balance.");
            }
        }, 2000);
    });
}

async function withdraw(amount) {
    try {
        console.log("Checking balance....");
        const balance = await fetchBalance();
        console.log("Account Balance: Rs." + balance);

        if (balance >= amount) {
            console.log(`Successfully withdrew Rs.${amount}.`);
        } else {
            console.log("Withdrawal failed: Not enough balance.");
        }
    } catch (error) {
        console.log(error);
    }
}

withdraw(9000);

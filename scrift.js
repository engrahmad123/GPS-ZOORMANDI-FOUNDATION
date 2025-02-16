// Initialize totals
let totalDonations = 0;
let totalSpent = 0;
let totalRemaining = 0;

function showTab(tabName) {
    const tabs = document.querySelectorAll('.tab-content');
    tabs.forEach(tab => {
        tab.classList.remove('active');
    });

    const activeTab = document.getElementById(tabName);
    activeTab.classList.add('active');
}

function addDonation() {
    const donorName = document.getElementById("donorName").value.trim();
    const donationAmount = parseFloat(document.getElementById("donationAmount").value);
    const spentAmount = parseFloat(document.getElementById("spentAmount").value);

    if (!donorName || isNaN(donationAmount) || isNaN(spentAmount) || donationAmount <= 0 || spentAmount < 0) {
        alert("Please fill out all fields correctly.");
        return;
    }

    // Add the donation data to the donation table
    const table = document.getElementById("donationTable").getElementsByTagName('tbody')[0];
    const row = table.insertRow();
    row.insertCell(0).textContent = donorName;
    row.insertCell(1).textContent = donationAmount.toFixed(2);
    row.insertCell(2).textContent = spentAmount.toFixed(2);
    row.insertCell(3).textContent = (donationAmount - spentAmount).toFixed(2);

    // Update total amounts
    totalDonations += donationAmount;
    totalSpent += spentAmount;
    totalRemaining += (donationAmount - spentAmount);

    // Update the displayed totals
    document.getElementById("totalDonations").textContent = totalDonations.toFixed(2);
    document.getElementById("totalSpent").textContent = totalSpent.toFixed(2);
    document.getElementById("totalRemaining").textContent = totalRemaining.toFixed(2);

    // Clear input fields after adding the donation
    document.getElementById("donorName").value = "";
    document.getElementById("donationAmount").value = "";
    document.getElementById("spentAmount").value = "";
}

function addExpenditure() {
    const expenditureName = document.getElementById("expenditureName").value.trim();
    const expenditureAmount = parseFloat(document.getElementById("expenditureAmount").value);
    const expenditureDetails = document.getElementById("expenditureDetails").value.trim();

    if (!expenditureName || isNaN(expenditureAmount) || expenditureAmount <= 0 || !expenditureDetails) {
        alert("Please fill out all fields correctly.");
        return;
    }

    // Add the expenditure data to the expenditure table
    const table = document.getElementById("expenditureTable").getElementsByTagName('tbody')[0];
    const row = table.insertRow();
    row.insertCell(0).textContent = expenditureName;
    row.insertCell(1).textContent = expenditureAmount.toFixed(2);
    row.insertCell(2).textContent = expenditureDetails;

    // Update total spent
    totalSpent += expenditureAmount;
    totalRemaining -= expenditureAmount;

    // Update the displayed totals
    document.getElementById("totalSpent").textContent = totalSpent.toFixed(2);
    document.getElementById("totalRemaining").textContent = totalRemaining.toFixed(2);

    // Clear input fields after adding the expenditure
    document.getElementById("expenditureName").value = "";
    document.getElementById("expenditureAmount").value = "";
    document.getElementById("ex

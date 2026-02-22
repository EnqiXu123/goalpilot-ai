/* ===============================
   GoalPilot - Main Controller
================================= */

document.addEventListener("DOMContentLoaded", function () {

    // -----------------------------
    // Landing Page Control
    // -----------------------------
    const startBtn = document.getElementById("startBtn");
    const landingSection = document.getElementById("landing");
    const appSection = document.getElementById("app");

    startBtn.addEventListener("click", function () {
        landingSection.style.display = "none";
        appSection.style.display = "block";
    });

    // -----------------------------
    // Generate Income Fields (Up to 10)
    // -----------------------------
    const incomeContainer = document.getElementById("incomeFields");

    for (let i = 0; i < 10; i++) {
        const wrapper = document.createElement("div");

        wrapper.innerHTML = `
            <input type="text" placeholder="Income Source (Optional)">
            <input type="number" placeholder="Amount (Monthly)" class="incomeAmount">
        `;

        incomeContainer.appendChild(wrapper);
    }

    // -----------------------------
    // Generate Variable Expense Fields (Up to 10)
    // -----------------------------
    const variableExpenseContainer = document.getElementById("variableExpenseFields");

    for (let i = 0; i < 10; i++) {
        const wrapper = document.createElement("div");

        wrapper.innerHTML = `
            <input type="text" placeholder="Expense Name (Optional)">
            <input type="number" placeholder="Amount (Monthly)" class="variableExpenseAmount">
        `;

        variableExpenseContainer.appendChild(wrapper);
    }

    // -----------------------------
    // Add Financial Goals (Max 10)
    // -----------------------------
    const goalContainer = document.getElementById("goalFields");
    const addGoalBtn = document.getElementById("addGoalBtn");

    let goalCount = 0;

    addGoalBtn.addEventListener("click", function () {
        if (goalCount >= 10) {
            alert("Maximum of 10 goals allowed.");
            return;
        }

        const wrapper = document.createElement("div");

        wrapper.innerHTML = `
            <input type="text" placeholder="Goal Name">
            <input type="number" placeholder="Target Amount">
            <input type="number" placeholder="Timeline (Months)">
        `;

        goalContainer.appendChild(wrapper);
        goalCount++;
    });

    // -----------------------------
    // Emergency Fund Risk Message
    // -----------------------------
    const emergencyInput = document.getElementById("emergencyAmount");
    const riskMessage = document.getElementById("emergencyRiskMessage");

    emergencyInput.addEventListener("input", function () {
        const value = parseInt(emergencyInput.value);

        if (value === 0) {
            riskMessage.style.display = "block";
        } else {
            riskMessage.style.display = "none";
        }
    });

    // -----------------------------
    // Spending Adjustment Recalculate Trigger
    // -----------------------------
    const spendingAdjustment = document.getElementById("spendingAdjustment");
    const scenarioResults = document.getElementById("scenarioResults");

    spendingAdjustment.addEventListener("input", function () {
        scenarioResults.innerHTML = `
            <p>Recalculating projections based on spending adjustment...</p>
        `;
        // Later we will call calculation engine here
    });

    // -----------------------------
    // Recalculate Button
    // -----------------------------
    const recalculateBtn = document.getElementById("recalculateBtn");
    const planSummary = document.getElementById("planSummary");

    recalculateBtn.addEventListener("click", function () {
        planSummary.innerHTML = `
            <p>Calculations updated.</p>
        `;
        // Later connect to calculations.js
    });

    // -----------------------------
    // AI Coaching Button
    // -----------------------------
    const generateInsightBtn = document.getElementById("generateInsightBtn");
    const aiResponse = document.getElementById("aiResponse");

    generateInsightBtn.addEventListener("click", function () {
        aiResponse.innerHTML = `
            <p>Generating AI coaching insight...</p>
        `;

        // Later connect to ai.js
        setTimeout(() => {
            aiResponse.innerHTML = `
                <p>This is where AI coaching insight will appear.</p>
            `;
        }, 1500);
    });

});

document.getElementById("otpForm").addEventListener("submit", function (event) {
    event.preventDefault();
    let enteredOTP = document.getElementById("otp").value;
    let generatedOTP = localStorage.getItem("otp");

    if (enteredOTP === generatedOTP) {
        document.getElementById("otpStatus").textContent = "OTP verified successfully!";
    } else {
        document.getElementById("otpStatus").textContent = "Incorrect OTP. Please try again.";
    }
});

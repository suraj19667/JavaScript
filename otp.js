function generateOTP() {
  let otp = Math.floor(100000 + Math.random() * 900000); // 6-digit OTP
  document.getElementById("otpDisplay").innerText = "Your OTP: " + otp;
}

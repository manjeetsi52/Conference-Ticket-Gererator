export function appendData(user) {
  console.log(user)
  const Tdate = document.querySelector("#date_ticket");
  const headingName = document.querySelector("#username_ticket");
  const headingEmail = document.querySelector("#useremail_ticket");
  const githubUser = document.querySelector("#github-username");
  const username = document.querySelector("#username");
  const name = document.querySelector("#user_info_ticket");
  const ticketNum = document.querySelector("#ticketno");

  name.textContent = user.name || "N/A";
  headingName.textContent = user.name || "N/A";
  headingEmail.textContent = user.email || "N/A";
  githubUser.textContent = user.githubUsername || "N/A";
  Tdate.textContent = user.date + " / Jaipur" || "N/A";
  username.textContent = user.name || "N/A";
  ticketNum.textContent = String(user.ticketNo) || "N/A";
}

// When ticket page loads
window.addEventListener("DOMContentLoaded", () => {
  const storedData = JSON.parse(localStorage.getItem("ticketData"));
  if (storedData) {
    appendData(storedData);
  }
});

const form = document.getElementById("equipmentRequestForm");
const table = document.getElementById("requestTable").querySelector("tbody");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = document.getElementById("employeeName").value;
  const dept = document.getElementById("department").value;
  const item = document.getElementById("equipment").value;
  const reason = document.getElementById("reason").value;

  addRequestRow(name, dept, item, reason);

  form.reset();
});

function addRequestRow(name, dept, item, reason) {
  const row = document.createElement("tr");

  row.innerHTML = `
    <td>${name}</td>
    <td>${dept}</td>
    <td>${item}</td>
    <td>${reason}</td>
    <td><span class="status pending">Pending</span></td>
    <td>
      <button class="approve">Approve</button>
      <button class="reject">Reject</button>
    </td>
  `;

  row.querySelector(".approve").addEventListener("click", () => {
    updateStatus(row, "Approved");
  });

  row.querySelector(".reject").addEventListener("click", () => {
    updateStatus(row, "Rejected");
  });

  table.appendChild(row);
}

function updateStatus(row, status) {
  const statusCell = row.querySelector(".status");
  statusCell.textContent = status;
  statusCell.className = "status " + status.toLowerCase();
}


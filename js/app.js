// helper
function escapeHtml(text) {
  const map = {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#039;'};
  return String(text || '').replace(/[&<>"']/g, m => map[m]);
}

document.getElementById('addStudentBtn').addEventListener('click', () => {
  const id = document.getElementById('studentId').value.trim();
  const firstname = document.getElementById('firstname').value.trim();
  const middlename = document.getElementById('middlename').value.trim();
  const lastname = document.getElementById('lastname').value.trim();

  // validation
  if (!id || !firstname || !lastname) {
    alert('Please fill required fields: ID, Firstname, Lastname.');
    return;
  }

  const tbody = document.getElementById('studentTableBody');

  // check duplicate ID
  const duplicate = Array.from(tbody.querySelectorAll('tr'))
    .some(tr => tr.cells[0].textContent === id);
  if (duplicate) {
    alert('Student ID already exists.');
    return;
  }

  const tr = document.createElement('tr');
  tr.innerHTML = `
    <td>${escapeHtml(id)}</td>
    <td>${escapeHtml(firstname)}</td>
    <td>${escapeHtml(middlename)}</td>
    <td>${escapeHtml(lastname)}</td>
  `;
  tbody.appendChild(tr);

  // reset and focus
  document.getElementById('studentForm').reset();
  document.getElementById('studentId').focus();
});

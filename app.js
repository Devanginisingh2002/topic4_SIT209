
$('#navbar').load('navbar.html');
const API_URL = 'http://localhost:5001/api';
//const devices = JSON.parse(localStorage.getItem('devices')) || [];

const response = $.get('http://localhost:3001/devices');
console.log(response);

$.get('`${API_URL}/devices`')
.then(response => {
  response.forEach(device => {
    $('#devices tbody').append(`
      <tr>
        <td>${device.user}</td>
        <td>${device.name}</td>
      </tr>`
    );
  });
})
.catch(error => {
  console.error(`Error: ${error}`);
});

$('#add-device').on('click', () => {
  const name = $('#name').val();
  const user = $('#user').val();
  const sensorData = [];

  const body = {
    name,
    user,
    sensorData
  };

  $.post('`${API_URL}/devices`', body)
  .then(response => {
    location.href = '/';
  })
  .catch(error => {
    console.error(`Error: ${error}`);
  });
});

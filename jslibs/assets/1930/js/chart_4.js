const foLabels = [
    'Carol I: 1866-1914',
    'Ferdinand: 1914-1927',
    'Carol II: 1930-1940',
    'Mihai: 1940-1947'
  ];

  const foData = {
    labels: foLabels,
    datasets: [{
      label: 'The reigns of the kings of Romania',
      backgroundColor: [
        'rgb(255, 99, 132)',
        'rgb(75, 192, 192)',
        'rgb(255, 205, 86)',
        'rgb(201, 203, 207)'
      ],
      borderColor: 'rgb(0, 0, 0)',
      data: [48, 13, 10, 7],
    }]
  };

  const foConfig = {
    type: 'polarArea',
    data: foData,
    options: {}
  };

  const chart4 = new Chart(
    document.getElementById("chart-4"),
    foConfig
  );
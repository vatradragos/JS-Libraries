const tLabels = [
    'Agriculture',
    'Industry',
    'Trade',
    'Transport',
    'Other categories'
  ];

  const tData = {
    labels: tLabels,
    datasets: [{
      label: 'Division of labor by industry for 1930 [%]',
      backgroundColor: 'rgb(23, 120, 22)',
      borderColor: 'rgb(190, 197, 209)',
      data: [78, 7.2, 3.2, 1.7, 9.7],
    }]
  };

  const tConfig = {
    type: 'bar',
    data: tData,
    options: {
        indexAxis: 'y'
    }
  };

  const chart3 = new Chart(
    document.getElementById("chart-3"),
    tConfig
  );
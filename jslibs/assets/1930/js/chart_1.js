const fLabels = [
    '1912',
    '1930',
    '1941',
    '1948',
    '1956',
    '1966',
  ];
  
  const fData = {
    labels: fLabels,
    datasets: [{
      label: 'The population of Romania between 1912 and 1966', 
      backgroundColor: 'rgb(227, 16, 23)',
      borderColor: 'rgb(255, 255, 255)',
      color: '#fff',
      data: [7234919, 18057028, 13535757, 15872624, 17489450, 19103163],
      pointStyle: 'rectRot',
      pointRadius: 7.5,
      pointHoverRadius: 15
    }]
  };
  
  const fConfig = {
    type: 'line',
    data: fData,
    options: {
      animation: true,
      spanGaps: true,
      showLine: true,
      animations: {
        tension: {
          duration: 3000,
          easing: "easeInOutQuart",
          from: 1,
          to: 0,
          loop: true
        }
      },
      plugins: {
        legend: {
          labels: {
            usePointStyle: true,
          }
        }
      }
    }
  };
  
  Chart.defaults.elements.bar.borderWidth = 2;
  Chart.defaults.font.size = 14;
  const chart1 = new Chart(
    document.getElementById("chart-1"),
    fConfig
  );
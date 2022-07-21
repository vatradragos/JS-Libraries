const sLabels = [
    'Romanians',
    'Hungarians',
    'Germans',
    'Hebrews',
    'Ruthenians and Ukrainians',
    'Russians',
    'Bulgarians',
    'Gypsies',
    'Turkish',
    'Gagauz',
    'Czechs and Slovaks',
    'Serbs, Croats and Slovenes',
    'Polish',
    'Greeks',
    'Tatars',
    'Armenians',
    'Guzuls',
    'Albanian',
    'Others'
  ];
  
  const sData = {
    labels: sLabels,
    datasets: [{
      label: 'Ethnic map of Romania for year 1930',
      backgroundColor: [
        'rgb(16, 23, 227)',
        'rgb(255, 255, 255)',
        'rgb(0, 0, 0)',
        'rgb(71, 150, 173)',
        'rgb(206, 227, 14)',
        'rgb(227, 21, 14)',
        'rgb(227, 131, 14)',
        'rgb(227, 14, 195)',
        'rgb(227, 14, 113)',
        'rgb(14, 181, 227)',
        'rgb(110, 14, 227)',
        'rgb(14, 227, 156)',
        'rgb(120, 44, 44)',
        'rgb(12, 245, 245)',
        'rgb(98, 245, 12)',
        'rgb(92, 56, 29)',
        'rgb(232, 12, 85)',
        'rgb(48, 11, 9)',
        'rgb(12, 9, 48)'
      ],
      borderColor: 'rgb(255, 255, 255)',
      color: '#fff',
      data: [71.9, 7.9, 4.1, 4.0, 3.2, 2.3, 2.0, 1.5, 0.9, 0.6, 0.3, 0.3, 0.3, 0.1, 0.1, 0.0, 0.0, 0.0, 0.3],
    }]
  };
  
  const sConfig = {
    type: 'doughnut',
    data: sData,
    options: {}
  };
  
  const chart2 = new Chart(
    document.getElementById("chart-2"),
    sConfig
  );
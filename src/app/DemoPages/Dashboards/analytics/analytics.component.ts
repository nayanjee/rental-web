import { Component, OnInit } from '@angular/core';
import { Color } from 'ng2-charts/ng2-charts';
import { Router } from '@angular/router';
import { faTh, faCheck, faTrash, faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons';

import { AppServicesService } from './../../../shared/service/app-services.service';

@Component({
  selector: 'app-analytics',
  templateUrl: './analytics.component.html',
})
export class AnalyticsComponent implements OnInit {
  temp: any = [];
  assets: any = [];
  vacantFlats: number = 0;
  occupiedFlats: number = 0;
  commercialAsset: number = 0;
  residentialAsset: number = 0;

  faTh = faTh;
  faCheck = faCheck;
  faTrash = faTrash;
  faAngleDown = faAngleDown;
  faAngleUp = faAngleUp;

  heading = 'Analytics Dashboard';
  subheading = 'This is an example dashboard created using build-in elements and components.';
  icon = 'pe-7s-plane icon-gradient bg-tempting-azure';

  slideConfig6 = {
    className: 'center',
    infinite: true,
    slidesToShow: 1,
    speed: 500,
    adaptiveHeight: true,
    dots: true,
  };

  public datasets = [
    {
      label: 'My First dataset',
      data: [65, 59, 80, 81, 46, 55, 38, 59, 80],
      datalabels: {
        display: false,
      },

    }
  ];

  public datasets2 = [
    {
      label: 'My First dataset',
      data: [46, 55, 59, 80, 81, 38, 65, 59, 80],
      datalabels: {
        display: false,
      },

    }
  ];

  public datasets3 = [
    {
      label: 'My First dataset',
      data: [65, 59, 80, 81, 55, 38, 59, 80, 46],
      datalabels: {
        display: false,
      },

    }
  ];
  public lineChartColors: Color[] = [
    { // dark grey
      backgroundColor: 'rgba(247, 185, 36, 0.2)',
      borderColor: '#f7b924',
      borderCapStyle: 'round',
      borderDash: [],
      borderWidth: 4,
      borderDashOffset: 0.0,
      borderJoinStyle: 'round',
      pointBorderColor: '#f7b924',
      pointBackgroundColor: '#fff',
      pointHoverBorderWidth: 4,
      pointRadius: 6,
      pointBorderWidth: 5,
      pointHoverRadius: 8,
      pointHitRadius: 10,
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: '#f7b924',
    },
  ];

  public lineChartColors2: Color[] = [
    { // dark grey
      backgroundColor: 'rgba(48, 177, 255, 0.2)',
      borderColor: '#30b1ff',
      borderCapStyle: 'round',
      borderDash: [],
      borderWidth: 4,
      borderDashOffset: 0.0,
      borderJoinStyle: 'round',
      pointBorderColor: '#30b1ff',
      pointBackgroundColor: '#ffffff',
      pointHoverBorderWidth: 4,
      pointRadius: 6,
      pointBorderWidth: 5,
      pointHoverRadius: 8,
      pointHitRadius: 10,
      pointHoverBackgroundColor: '#ffffff',
      pointHoverBorderColor: '#30b1ff',
    },
  ];

  public lineChartColors3: Color[] = [
    { // dark grey
      backgroundColor: 'rgba(86, 196, 121, 0.2)',
      borderColor: '#56c479',
      borderCapStyle: 'round',
      borderDash: [],
      borderWidth: 4,
      borderDashOffset: 0.0,
      borderJoinStyle: 'round',
      pointBorderColor: '#56c479',
      pointBackgroundColor: '#fff',
      pointHoverBorderWidth: 4,
      pointRadius: 6,
      pointBorderWidth: 5,
      pointHoverRadius: 8,
      pointHitRadius: 10,
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: '#56c479',
    },
  ];

  public labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August'];

  public options = {
    layout: {
      padding: {
        left: 0,
        right: 8,
        top: 0,
        bottom: 0
      }
    },
    scales: {
      yAxes: [{
        ticks: {
          display: false,
          beginAtZero: true
        },
        gridLines: {
          display: false
        }
      }],
      xAxes: [{
        ticks: {
          display: false
        },
        gridLines: {
          display: false
        }
      }]
    },
    legend: {
      display: false
    },
    responsive: true,
    maintainAspectRatio: false
  };

  constructor(
    private router: Router,
    private apiService: AppServicesService
  ) {
  }

  ngOnInit() {
    this.getAssets();
  }

  getAssets() {
    this.apiService.fetch('/api/asset/all').subscribe((response: any) => {
      if (response.status === 200) {
        if (response.data.length) {
          this.temp = response.data
          this.assets = response.data;
          this.commercialAssets();
          this.residentialAssets();
          this.residentialOccupied();
        }
      }
    });
  }

  commercialAssets() {
    const val = 'commercial';
    const temp = this.temp.filter(function (d) {
      return d.propertyType.toLowerCase().indexOf(val) !== -1 || !val;
    });

    this.commercialAsset = temp.length;
  }

  residentialAssets() {
    const val = 'residential';
    const temp = this.temp.filter(function (d) {
      return d.propertyType.toLowerCase().indexOf(val) !== -1 || !val;
    });

    this.residentialAsset = temp.length;
  }

  residentialOccupied() {
    let total = 0;
    const val = 'residential';
    const temp = this.temp.filter(function (d) {
      return d.propertyType.toLowerCase().indexOf(val) !== -1 || !val;
    });

    temp.forEach(element => {
      if (element.isOccupied) {
        total = total + 1;
      }
    });

    this.occupiedFlats = total;
    this.vacantFlats = this.residentialAsset - this.occupiedFlats;
    if (this.vacantFlats < 0) this.vacantFlats = 0;
  }

}

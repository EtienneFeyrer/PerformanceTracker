import React, { useEffect, useRef, useState } from 'react';
import { Chart, registerables } from 'chart.js';
import { calculateCO2Savings } from '../constants/CO2Calculator'; // Import the JavaScript function

Chart.register(...registerables);

const ChartComponent = ({ kilometers }) => {
    const chartRef = useRef(); // Single ref for the chart instance
    const chartInstance = useRef(null); // To store the chart instance
    const [co2Savings, setCo2Savings] = useState([0, 0, 0]); // State to store CO2 savings

    useEffect(() => {
        const co2Savings = calculateCO2Savings(kilometers);
        setCo2Savings(co2Savings);

        if (chartInstance.current) {
            chartInstance.current.destroy(); // Destroy existing chart instance before re-creating it
        }

        const ctx = chartRef.current.getContext('2d');
        chartInstance.current = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: ['Bus', 'Bahn', 'Auto'],
                datasets: [{
                    label: 'Eingespartes CO₂ (kg)',
                    data: co2Savings,
                    backgroundColor: [
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 99, 132, 0.2)'
                    ],
                    borderColor: [
                        'rgba(75, 192, 192, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 99, 132, 1)'
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true,
                        ticks: {
                            callback: function(value) {
                                return value + ' kg'; // Add the unit to y-axis labels
                            }
                        }
                    }
                }
            }
        });
    }, [kilometers]);

    return (
        <div className="diagram-box">
            <h2>Diagramm der CO₂-Einsparungen dieses Monats</h2>
            <div className="charts">
                <canvas ref={chartRef} />
            </div>
        </div>
    );
};

export default ChartComponent;

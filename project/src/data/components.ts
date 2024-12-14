import { Component, ComponentCategory } from '../types';

export const categories: ComponentCategory[] = [
  { id: '1', name: 'Processor (CPU)', key: 'cpu' },
  { id: '2', name: 'Cooling System (CPU Cooler)', key: 'cooler' },
  { id: '3', name: 'Motherboard', key: 'motherboard' },
  { id: '4', name: 'Memory (RAM)', key: 'ram' },
  { id: '5', name: 'Solid State Drive (M.2 SSD)', key: 'm2ssd' },
  { id: '6', name: 'Solid State Drive (SATA SSD)', key: 'satassd' },
  { id: '7', name: 'Hard Disk Drive (Internal HDD)', key: 'hdd' },
  { id: '8', name: 'Graphics Card (GPU/VGA)', key: 'gpu' },
  { id: '9', name: 'Power Supply Unit (SMPS/PSU)', key: 'psu' },
  { id: '10', name: 'Cabinet (Case)', key: 'case' },
  { id: '11', name: 'Monitor (Display)', key: 'monitor' },
  { id: '12', name: 'Keyboard', key: 'keyboard' },
  { id: '13', name: 'Mouse (Mice)', key: 'mouse' },
  { id: '14', name: 'Mouse Pad (Matz)', key: 'mousepad' },
  { id: '15', name: 'Headset (Headphones)', key: 'headset' }
];

export const sampleComponents: Component[] = [
  {
    id: '1',
    name: 'AMD Ryzen 7 5800X',
    category: 'cpu',
    model: '5800X',
    image: 'https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?auto=format&fit=crop&w=100&h=100&q=80',
    prices: {
      amazon: 28999,
      flipkart: 29499,
      mdcomputer: 28499,
      vedantcomputer: 28799
    },
    inStock: true,
    availability: 'In stock',
    price: 0
  },
  {
    id: '2',
    name: 'NZXT Kraken X53',
    category: 'cooler',
    model: 'X53',
    image: 'https://images.unsplash.com/photo-1587202372775-e229f172b9d7?auto=format&fit=crop&w=100&h=100&q=80',
    prices: {
      amazon: 12999,
      flipkart: 13499,
      mdcomputer: 12799,
      vedantcomputer: 12899
    },
    inStock: true,
    availability: 'In stock',
    price: 0
  },
  // Add sample components for each category as needed
];
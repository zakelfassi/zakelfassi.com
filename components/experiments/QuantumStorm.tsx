'use client'

import React, { useState } from 'react'
import { Cpu, Atom, Dna, Wifi, User, Users, Globe, Earth, Star } from 'lucide-react'
import { motion } from 'framer-motion'
import clsx from 'clsx'

const threatData = [
  {
    scale: 'Sub-Nano',
    threat: 'Quantum Bit Manipulation',
    acronym: 'QBM',
    icon: Cpu,
    description:
      'Direct interference with qubits, potentially hijacking quantum computers controlling medical nanobots.',
    metricRange: 'Planck length (1.6 × 10^-35 m) to 1 nm',
    shortMetricRange: 'Planck to 1 nm',
    color: 'bg-indigo-600',
    textColor: 'text-indigo-300',
  },
  {
    scale: 'Nano',
    threat: 'Atomic-Level Encryption Breach',
    acronym: 'ALEB',
    icon: Atom,
    description:
      'Quantum computers breaking current encryption, exposing personal communications and compromising security.',
    metricRange: '1 nm to 100 nm',
    shortMetricRange: '1 nm to 100 nm',
    color: 'bg-blue-500',
    textColor: 'text-blue-300',
  },
  {
    scale: 'Molecular',
    threat: 'Molecular Data Corruption',
    acronym: 'MDC',
    icon: Dna,
    description:
      'Quantum interference corrupting molecular-level data storage, undermining vast database integrity.',
    metricRange: '100 nm to 1 µm',
    shortMetricRange: '100 nm to 1 µm',
    color: 'bg-teal-500',
    textColor: 'text-teal-300',
  },
  {
    scale: 'Micro',
    threat: 'Quantum Network Erosion',
    acronym: 'QNE',
    icon: Wifi,
    description:
      'Quantum attacks destabilizing internet infrastructure, causing digital isolation of entire regions.',
    metricRange: '1 µm to 1 mm',
    shortMetricRange: '1 µm to 1 mm',
    color: 'bg-green-500',
    textColor: 'text-green-300',
  },
  {
    scale: 'Human',
    threat: 'Subversion through Quantum AI',
    acronym: 'SQuAI',
    icon: User,
    description:
      'Accelerated AI capabilities leading to manipulation of systems managing traffic, utilities, and healthcare.',
    metricRange: '1 mm to 100 m',
    shortMetricRange: '1 mm to 100 m',
    color: 'bg-yellow-500',
    textColor: 'text-yellow-300',
  },
  {
    scale: 'Society',
    threat: 'Quantum-Assisted Surveillance Breach',
    acronym: 'QASB',
    icon: Users,
    description:
      'Quantum computing rendering encryption obsolete, compromising surveillance networks and privacy.',
    metricRange: '100 m to 1000 km',
    shortMetricRange: '100 m to 1000 km',
    color: 'bg-orange-500',
    textColor: 'text-orange-300',
  },
  {
    scale: 'Continent',
    threat: 'Global Quantum Cryptography Collapse',
    acronym: 'GQCC',
    icon: Globe,
    description:
      'Simultaneous failure of cryptographic systems, exposing financial, military, and personal data globally.',
    metricRange: '1000 km to Earth diameter (12,742 km)',
    shortMetricRange: '1000 km to Earth',
    color: 'bg-red-500',
    textColor: 'text-red-300',
  },
  {
    scale: 'Planet',
    threat: 'Planetary Quantum Entanglement Disruption',
    acronym: 'PQED',
    icon: Earth,
    description:
      'Massive-scale quantum entanglement manipulation disrupting GPS and global logistics systems.',
    metricRange: 'Earth diameter to 1 light-year (9.46 trillion km)',
    shortMetricRange: 'Earth to 1 light-year',
    color: 'bg-pink-500',
    textColor: 'text-pink-300',
  },
  {
    scale: 'Universe',
    threat: 'Cosmic Quantum Resonance Anomaly',
    acronym: 'CQRA',
    icon: Star,
    description:
      'Theoretical quantum phenomena affecting cosmic structures and potentially altering fundamental constants.',
    metricRange: '1 light-year to Observable Universe (93 billion light-years)',
    shortMetricRange: '1 light-year to Observable Universe',
    color: 'bg-purple-600',
    textColor: 'text-purple-300',
  },
]

const QuantumStorm: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0)

  return (
    <div className="mx-auto max-w-7xl rounded-3xl bg-gradient-to-br from-gray-900 to-gray-800 p-4 shadow-2xl">
      <h2 className="mb-6 text-center text-2xl font-extrabold text-white sm:text-3xl">
        The Quantum Storm: Sub-Nano to Universe Scale
      </h2>

      <div className="flex flex-col">
        {/* Radial Threat Buttons */}
        <div className="mb-4 w-full">
          <div className="-mx-1 flex flex-wrap justify-center sm:-mx-2">
            {threatData.map((threat, index) => (
              <div
                key={threat.acronym}
                className="flex w-1/3 flex-col items-center px-1 sm:w-auto sm:px-2"
              >
                <motion.button
                  onClick={() => setActiveIndex(index)}
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.05 }}
                  className={clsx(
                    'flex items-center justify-center rounded-full p-1 transition-all sm:p-2',
                    activeIndex === index
                      ? `${threat.color} scale-105`
                      : 'bg-gray-700 hover:bg-primary-600'
                  )}
                >
                  <div
                    className={`flex h-8 w-8 items-center justify-center rounded-full sm:h-10 sm:w-10 ${threat.color}`}
                  >
                    <threat.icon className="h-4 w-4 text-white sm:h-5 sm:w-5" />
                  </div>
                </motion.button>
                <span className="mt-1 text-center text-xs font-semibold text-white sm:text-sm">
                  {threat.scale}
                </span>
                <span className="mt-0.5 text-center text-[8px] text-gray-400 sm:text-[10px]">
                  {threat.shortMetricRange}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Description Panel */}
        <div className="w-full overflow-y-auto rounded-xl bg-gray-800 bg-opacity-70 p-4 backdrop-blur-md">
          <motion.div
            key={threatData[activeIndex].acronym}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="mb-3 flex items-center">
              <motion.div
                className={`mr-3 flex h-12 w-12 items-center justify-center rounded-full shadow-lg sm:h-16 sm:w-16 ${threatData[activeIndex].color}`}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.8 }}
              >
                {React.createElement(threatData[activeIndex].icon, {
                  className: 'animate-pulse-slow h-6 sm:h-8 w-6 sm:w-8 text-white',
                })}
              </motion.div>
              <h3
                className={`text-lg font-semibold sm:text-2xl ${threatData[activeIndex].textColor} text-center sm:text-left`}
              >
                {threatData[activeIndex].threat} ({threatData[activeIndex].acronym})
              </h3>
            </div>
            <p className="mb-3 text-sm text-gray-300 sm:text-base">
              {threatData[activeIndex].description}
            </p>
            <div
              className={`flex items-center ${threatData[activeIndex].textColor} text-xs sm:text-sm`}
            >
              <span className="mr-1 sm:mr-2">Scale Range:</span>
              <span className="font-semibold">{threatData[activeIndex].metricRange}</span>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default QuantumStorm

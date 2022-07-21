export type FullLoadAmpValue = number | null
export type FullLoadAmps = [hp: number, v115: FullLoadAmpValue, v200: FullLoadAmpValue, v208: FullLoadAmpValue, v230: FullLoadAmpValue, v460: FullLoadAmpValue, v575: FullLoadAmpValue, v2300: FullLoadAmpValue]

// Full-Load Amps: Three-Phase AC Motors
// Source: NFPA 70, National Electrical Code, Table 430.250
export const fullLoadAmpsVoltageIndex = [0, 115, 200, 208, 230, 460, 575, 2300]
export const fullLoadAmps: FullLoadAmps[] = [
  [0.5, 4.4, 2.5, 2.4, 2.2, 1.1, 0.9, null],
  [0.75, 6.4, 3.7, 3.5, 3.2, 1.6, 1.3, null],
  [1, 8.4, 4.8, 4.6, 4.2, 2.1, 1.7, null],
  [1.5, 12, 6.9, 6.6, 6, 3, 2.4, null],
  [2, 13.6, 7.8, 7.5, 6.8, 3.4, 2.7, null],
  [3, null, 11, 10.6, 9.6, 4.8, 3.9, null],
  [5, null, 17.5, 16.7, 15.2, 7.6, 6.1, null],
  [7.5, null, 25.3, 24.2, 22, 11, 9, null],
  [10, null, 32.2, 30.8, 28, 14, 11, null],
  [15, null, 48.3, 46.2, 42, 21, 17, null],
  [20, null, 62.1, 59.4, 54, 27, 22, null],
  [25, null, 78.2, 74.8, 68, 34, 27, null],
  [30, null, 92, 88, 80, 40, 32, null],
  [40, null, 120, 114, 104, 52, 41, null],
  [50, null, 150, 143, 130, 65, 52, null],
  [60, null, 177, 169, 154, 77, 62, 16],
  [75, null, 221, 211, 192, 96, 77, 20],
  [100, null, 285, 273, 248, 124, 99, 26],
  [125, null, 359, 343, 312, 156, 125, 31],
  [150, null, 414, 396, 360, 180, 144, 37],
  [200, null, 552, 528, 480, 240, 192, 49],
  [125, null, 359, 343, 312, 156, 125, 31],
  [150, null, 414, 396, 360, 180, 144, 37],
  [200, null, 552, 528, 480, 240, 192, 49],
  [400, null, null, null, null, 477, 382, 95],
  [450, null, null, null, null, 515, 412, 103],
  [500, null, null, null, null, 590, 472, 118],
]

export type GroundingConductors = [amps: number, copper: string, aluminum: string]

// Minimum Size Equipment Grounding Conductors for Grounding Raceway and Equipment
// Table 250.122
export const minimumSizeGroundingConductors: GroundingConductors[] = [
  [15, '14', '12'],
  [20, '12', '10'],
  [60, '10', '8'],
  [100, '8', '6'],
  [200, '6', '4'],
  [300, '4', '2'],
  [400, '3', '1'],
  [500, '2', '1/0'],
  [600, '1', '2/0'],
  [800, '1/0', '3/0'],
  [1000, '2/0', '4/0'],
  [1200, '3/0', '250'],
  [1500, '4/0', '350'],
  [2000, '250', '400'],
  [2500, '350', '600'],
  [3000, '400', '600'],
  [4000, '500', '750'],
]

export type ConductorValue = number | null
export type Conductors = [size: string, copper_60: ConductorValue, copper_75: ConductorValue, copper_90: ConductorValue, aluminum_60: ConductorValue, aluminum_75: ConductorValue, aluminum_90: ConductorValue]

// Allowable Ampacities of Insulated Conductors Rated up to and Including 2000 Volts.
// Table 310.15(B)(16)
export const conductors: Conductors[] = [
  ['18', null, null, 14, null, null, null],
  ['16', null, null, 18, null, null, null],
  ['14', 15, 20, 25, null, null, null],
  ['12', 20, 25, 30, 15, 20, 25],
  ['10', 30, 35, 40, 25, 30, 35],
  ['8', 40, 50, 55, 35, 40, 45],
  ['6', 55, 65, 75, 40, 50, 55],
  ['4', 70, 85, 95, 55, 65, 75],
  ['3', 85, 100, 115, 65, 75, 85],
  ['2', 95, 115, 130, 75, 90, 100],
  ['1', 110, 130, 145, 85, 100, 115],
  ['1/0', 125, 150, 170, 100, 120, 135],
  ['2/0', 145, 175, 195, 115, 135, 150],
  ['3/0', 165, 200, 225, 130, 155, 175],
  ['4/0', 195, 230, 260, 150, 180, 205],
  ['250', 215, 255, 290, 170, 205, 230],
  ['300', 240, 285, 320, 195, 230, 260],
  ['350', 260, 310, 350, 210, 250, 280],
  ['400', 280, 335, 380, 225, 270, 305],
  ['500', 320, 380, 430, 260, 310, 350],
  ['600', 350, 420, 475, 285, 340, 385],
  ['700', 385, 460, 520, 315, 375, 425],
  ['750', 400, 475, 535, 320, 385, 435],
  ['800', 410, 490, 555, 330, 395, 445],
  ['900', 435, 520, 585, 355, 425, 480],
  ['1000', 455, 545, 615, 375, 445, 500],
  ['1250', 495, 590, 665, 405, 485, 545],
  ['1500', 525, 625, 705, 435, 520, 585],
  ['1750', 545, 650, 735, 455, 545, 615],
  ['2000', 555, 665, 750, 470, 560, 630],
]

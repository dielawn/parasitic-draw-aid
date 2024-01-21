const addNumsToArray = (startingNum, incrementNum) => {
    let nums = []
    for(let i = 0.1; i <= 10; i += 0.1) {
        nums.push(i)
    }
    return nums
}
 const calcAmp = (startingNum, incrementNum) => {
    let nums = []
    for(let j = startingNum; j <= 6.4; j += incrementNum) {
        nums.push(j)
    }
    return nums
}
console.log(calcAmp(1, 1.3))
const fuseVoltageDropObj = {
    mv: addNumsToArray(), //.1 to 6.4,
  mini5: [6,12,18,24,30,36,42,48,54,60,66,72,78,84,90,96,102,108,114,120,126,132,138,144,150,156,162,168,174,180,186,192,198,204,210,216,222,228,234,240,246,252,258,264,270,276,282,288,294,300,306,312,318,324,330,336,342,348,354,360,366,372,378,384,390,396,402,408,414,420,426,432,438,444,450,456,462,468,474,480,486,492,498,504,510,516,522,528,534,540,546,552,558,564,570,576,582,588,594,600],
zeroPointOneMV:{
    mini5:6, 
    mini7point5: 10,
    mini10: 14,
    standard5: 7,
    standard10: 13,
    standard15: 23,
    standard20: 30,
    standard25: 47,
    standard30: 62
},
zeroPointTwoMV:{
    mini5:12, 
    mini7point5: 20,
    mini10: 28,
    standard5: 13,
    standard10: 27,
    standard15: 45,
    standard20: 61,
    standard25: 94,
    standard30: 123
},//start here
zeroPointThreeMV:{
    mini5:18, 
    mini7point5: 30,
    mini10: 43,
    standard5: 20,
    standard10: 40,
    standard15: 68,
    standard20: 91,
    standard25: 141,
    standard30: 185
},
zeroPointFourMV:{
    mini5: 24, 
    mini7point5: 40,
    mini10: 57,
    standard5: 26,
    standard10: 54,
    standard15: 91,
    standard20: 122,
    standard25: 188,
    standard30: 246
},
zeroPointFiveMV:{
    mini5: 30, 
    mini7point5: 50,
    mini10: 71,
    standard5: 33,
    standard10: 67,
    standard15: 113,
    standard20: 152,
    standard25: 235,
    standard30: 308
},
zeroPointSixMV:{
    mini5:36, 
    mini7point5: 60,
    mini10: 85,
    standard5: 40,
    standard10: 80,
    standard15: 136,
    standard20: 183,
    standard25: 281,
    standard30: 370
},
zeroPointSevenMV:{
    mini5:42, 
    mini7point5: 70,
    mini10: 99,
    standard5: 46,
    standard10: 94,
    standard15: 158,
    standard20: 213,
    standard25: 328,
    standard30: 431
},
zeroPointEightMV:{
    mini5: 48, 
    mini7point5: 80,
    mini10: 114,
    standard5: 53,
    standard10: 107,
    standard15: 181,
    standard20: 244,
    standard25: 375,
    standard30: 493
},
zeroPointNineMV:{
    mini5: 54, 
    mini7point5: 90,
    mini10: 128,
    standard5: 59,
    standard10: 120,
    standard15: 204,
    standard20: 274,
    standard25: 422,
    standard30: 554
},
oneMV:{
    mini5: 60, 
    mini7point5: 100,
    mini10: 142,
    standard5: 66,
    standard10: 134,
    standard15: 226,
    standard20: 305,
    standard25: 469,
    standard30: 616
},
onePointOneMV:{
    mini5:66, 
    mini7point5: 110,
    mini10: 156,
    standard5: 73,
    standard10: 147,
    standard15: 249,
    standard20: 335,
    standard25: 516,
    standard30: 677
},
onePointTwoMV:{
    mini5:72, 
    mini7point5: 120,
    mini10: 171,
    standard5: 79,
    standard10: 161,
    standard15: 272,
    standard20: 366,
    standard25: 563,
    standard30: 739
},
onePointThreeMV:{
    mini5:78, 
    mini7point5: 130,
    mini10: 185,
    standard5: 86,
    standard10: 174,
    standard15: 294,
    standard20: 396,
    standard25: 610,
    standard30: 801
},
onePointFourMV:{
    mini5: 84, 
    mini7point5: 140,
    mini10: 199,
    standard5: 92,
    standard10: 187,
    standard15: 317,
    standard20: 427,
    standard25: 657,
    standard30: 862
},
onePointFiveMV:{
    mini5: 90, 
    mini7point5: 150,
    mini10: 213,
    standard5: 99,
    standard10: 201,
    standard15: 340,
    standard20: 457,
    standard25: 704,
    standard30: 924
},
onePointSixMV:{
    mini5: 96, 
    mini7point5: 160,
    mini10: 227,
    standard5: 106,
    standard10: 214,
    standard15: 362,
    standard20: 487,
    standard25: 751,
    standard30: 985
},
onePointSevenMV:{
    mini5: 102, 
    mini7point5: 169,
    mini10: 242,
    standard5: 112,
    standard10: 228,
    standard15: 385,
    standard20: 518,
    standard25: 797,
    standard30: 1047
},
onePointEightMV:{
    mini5: 108, 
    mini7point5: 179,
    mini10: 256,
    standard5: 119,
    standard10: 241,
    standard15: 407,
    standard20: 548,
    standard25: 844,
    standard30: 1109
},
onePointNineMV:{
    mini5: 114, 
    mini7point5: 189,
    mini10: 270,
    standard5: 125,
    standard10: 254,
    standard15: 430,
    standard20: 579,
    standard25: 891,
    standard30: 1170
},
twoMV:{
    mini5: 120, 
    mini7point5: 199,
    mini10: 284,
    standard5: 132,
    standard10: 268,
    standard15: 453,
    standard20: 609,
    standard25: 938,
    standard30: 1232
},
twoPointOneMV:{
    mini5: 126, 
    mini7point5: 209,
    mini10: 298,
    standard5: 139,
    standard10: 281,
    standard15: 475,
    standard20: 640,
    standard25: 985,
    standard30: 1293
},
twoPointTwoMV:{
    mini5: 132, 
    mini7point5: 219,
    mini10: 313,
    standard5: 145,
    standard10: 294,
    standard15: 498,
    standard20: 670,
    standard25: 1032,
    standard30: 1355
},
twoPointThreeMV:{
    mini5: 138, 
    mini7point5: 229,
    mini10: 327,
    standard5: 152,
    standard10: 308,
    standard15: 521,
    standard20: 701,
    standard25: 1079,
    standard30: 1417
},
twoPointFourMV:{
    mini5: 144, 
    mini7point5: 239,
    mini10: 341,
    standard5: 158,
    standard10: 321,
    standard15: 543,
    standard20: 731,
    standard25: 1126,
    standard30: 1478
},
twoPointFiveMV:{
    mini5: 150, 
    mini7point5: 249,
    mini10: 355,
    standard5: 165,
    standard10: 335,
    standard15: 566,
    standard20: 762,
    standard25: 1173,
    standard30: 1540
},
twoPointSixMV:{
    mini5: 156, 
    mini7point5: 259,
    mini10: 369,
    standard5: 172,
    standard10: 348,
    standard15: 589,
    standard20: 792,
    standard25: 1220,
    standard30: 1601
},
twoPointSevenMV:{
    mini5: 162, 
    mini7point5: 269,
    mini10: 384,
    standard5: 178,
    standard10: 361,
    standard15: 611,
    standard20: 823,
    standard25: 1267,
    standard30: 1663
},
twoPointEightMV:{
    mini5: 168, 
    mini7point5: 279,
    mini10: 398,
    standard5: 185,
    standard10: 375,
    standard15: 634,
    standard20: 853,
    standard25: 1313,
    standard30: 1725
},
twoPointNineMV:{
    mini5: 174, 
    mini7point5: 289,
    mini10: 412,
    standard5: 192,
    standard10: 388,
    standard15: 656,
    standard20: 884,
    standard25: 1360,
    standard30: 1786
},
threeMV:{
    mini5: 180, 
    mini7point5: 299,
    mini10: 426,
    standard5: 198,
    standard10: 401,
    standard15: 679,
    standard20: 914,
    standard25: 1407,
    standard30: 1848
},
threePointOneMV:{
    mini5: , 
    mini7point5: 10,
    mini10: 14,
    standard5: 7,
    standard10: 13,
    standard15: 23,
    standard20: 30,
    standard25: 47,
    standard30: 62
},
threePointTwoMV:{
    mini5:6, 
    mini7point5: 10,
    mini10: 14,
    standard5: 7,
    standard10: 13,
    standard15: 23,
    standard20: 30,
    standard25: 47,
    standard30: 62
},
threePointThreeMV:{
    mini5:6, 
    mini7point5: 10,
    mini10: 14,
    standard5: 7,
    standard10: 13,
    standard15: 23,
    standard20: 30,
    standard25: 47,
    standard30: 62
},
threePointFourMV:{
    mini5:6, 
    mini7point5: 10,
    mini10: 14,
    standard5: 7,
    standard10: 13,
    standard15: 23,
    standard20: 30,
    standard25: 47,
    standard30: 62
},
threePointFiveMV:{
    mini5:6, 
    mini7point5: 10,
    mini10: 14,
    standard5: 7,
    standard10: 13,
    standard15: 23,
    standard20: 30,
    standard25: 47,
    standard30: 62
},
threePointSixMV:{
    mini5:6, 
    mini7point5: 10,
    mini10: 14,
    standard5: 7,
    standard10: 13,
    standard15: 23,
    standard20: 30,
    standard25: 47,
    standard30: 62
},
threePointSevenMV:{
    mini5:6, 
    mini7point5: 10,
    mini10: 14,
    standard5: 7,
    standard10: 13,
    standard15: 23,
    standard20: 30,
    standard25: 47,
    standard30: 62
},
threePointEightMV:{
    mini5:6, 
    mini7point5: 10,
    mini10: 14,
    standard5: 7,
    standard10: 13,
    standard15: 23,
    standard20: 30,
    standard25: 47,
    standard30: 62
},
threePointNineMV:{
    mini5:6, 
    mini7point5: 10,
    mini10: 14,
    standard5: 7,
    standard10: 13,
    standard15: 23,
    standard20: 30,
    standard25: 47,
    standard30: 62
},
fourMV:{
    mini5:6, 
    mini7point5: 10,
    mini10: 14,
    standard5: 7,
    standard10: 13,
    standard15: 23,
    standard20: 30,
    standard25: 47,
    standard30: 62
},
fourPointOneMV:{
    mini5:6, 
    mini7point5: 10,
    mini10: 14,
    standard5: 7,
    standard10: 13,
    standard15: 23,
    standard20: 30,
    standard25: 47,
    standard30: 62
},
fourPointTwoMV:{
    mini5:6, 
    mini7point5: 10,
    mini10: 14,
    standard5: 7,
    standard10: 13,
    standard15: 23,
    standard20: 30,
    standard25: 47,
    standard30: 62
},
fourPointThreeMV:{
    mini5:6, 
    mini7point5: 10,
    mini10: 14,
    standard5: 7,
    standard10: 13,
    standard15: 23,
    standard20: 30,
    standard25: 47,
    standard30: 62
},
fourPointFourMV:{
    mini5:6, 
    mini7point5: 10,
    mini10: 14,
    standard5: 7,
    standard10: 13,
    standard15: 23,
    standard20: 30,
    standard25: 47,
    standard30: 62
},
fourPointFiveMV:{
    mini5:6, 
    mini7point5: 10,
    mini10: 14,
    standard5: 7,
    standard10: 13,
    standard15: 23,
    standard20: 30,
    standard25: 47,
    standard30: 62
},
fourPointSixMV:{
    mini5:6, 
    mini7point5: 10,
    mini10: 14,
    standard5: 7,
    standard10: 13,
    standard15: 23,
    standard20: 30,
    standard25: 47,
    standard30: 62
},
fourPointSevenMV:{
    mini5:6, 
    mini7point5: 10,
    mini10: 14,
    standard5: 7,
    standard10: 13,
    standard15: 23,
    standard20: 30,
    standard25: 47,
    standard30: 62
},
fourPointEightMV:{
    mini5:6, 
    mini7point5: 10,
    mini10: 14,
    standard5: 7,
    standard10: 13,
    standard15: 23,
    standard20: 30,
    standard25: 47,
    standard30: 62
},
fourPointNineMV:{
    mini5:6, 
    mini7point5: 10,
    mini10: 14,
    standard5: 7,
    standard10: 13,
    standard15: 23,
    standard20: 30,
    standard25: 47,
    standard30: 62
},
fiveMV:{
    mini5:6, 
    mini7point5: 10,
    mini10: 14,
    standard5: 7,
    standard10: 13,
    standard15: 23,
    standard20: 30,
    standard25: 47,
    standard30: 62
},
fivePointOneMV:{
    mini5:6, 
    mini7point5: 10,
    mini10: 14,
    standard5: 7,
    standard10: 13,
    standard15: 23,
    standard20: 30,
    standard25: 47,
    standard30: 62
},
fivePointTwoMV:{
    mini5:6, 
    mini7point5: 10,
    mini10: 14,
    standard5: 7,
    standard10: 13,
    standard15: 23,
    standard20: 30,
    standard25: 47,
    standard30: 62
},
fivePointThreeMV:{
    mini5:6, 
    mini7point5: 10,
    mini10: 14,
    standard5: 7,
    standard10: 13,
    standard15: 23,
    standard20: 30,
    standard25: 47,
    standard30: 62
},
fivePointFourMV:{
    mini5:6, 
    mini7point5: 10,
    mini10: 14,
    standard5: 7,
    standard10: 13,
    standard15: 23,
    standard20: 30,
    standard25: 47,
    standard30: 62
},
fivePointFiveMV:{
    mini5:6, 
    mini7point5: 10,
    mini10: 14,
    standard5: 7,
    standard10: 13,
    standard15: 23,
    standard20: 30,
    standard25: 47,
    standard30: 62
},
fivePointSixMV:{
    mini5:6, 
    mini7point5: 10,
    mini10: 14,
    standard5: 7,
    standard10: 13,
    standard15: 23,
    standard20: 30,
    standard25: 47,
    standard30: 62
},
fivePointSevenMV:{
    mini5:6, 
    mini7point5: 10,
    mini10: 14,
    standard5: 7,
    standard10: 13,
    standard15: 23,
    standard20: 30,
    standard25: 47,
    standard30: 62
},
fivePointEightMV:{
    mini5:6, 
    mini7point5: 10,
    mini10: 14,
    standard5: 7,
    standard10: 13,
    standard15: 23,
    standard20: 30,
    standard25: 47,
    standard30: 62
},
fivePointNineMV:{
    mini5:6, 
    mini7point5: 10,
    mini10: 14,
    standard5: 7,
    standard10: 13,
    standard15: 23,
    standard20: 30,
    standard25: 47,
    standard30: 62
},
sixMV:{
    mini5:6, 
    mini7point5: 10,
    mini10: 14,
    standard5: 7,
    standard10: 13,
    standard15: 23,
    standard20: 30,
    standard25: 47,
    standard30: 62
},
sixPointOneMV:{
    mini5:6, 
    mini7point5: 10,
    mini10: 14,
    standard5: 7,
    standard10: 13,
    standard15: 23,
    standard20: 30,
    standard25: 47,
    standard30: 62
},
sixPointTwoMV:{
    mini5:6, 
    mini7point5: 10,
    mini10: 14,
    standard5: 7,
    standard10: 13,
    standard15: 23,
    standard20: 30,
    standard25: 47,
    standard30: 62
},
sixPointThreeMV:{
    mini5:6, 
    mini7point5: 10,
    mini10: 14,
    standard5: 7,
    standard10: 13,
    standard15: 23,
    standard20: 30,
    standard25: 47,
    standard30: 62
},
sixPointFourMV:{
    mini5:6, 
    mini7point5: 10,
    mini10: 14,
    standard5: 7,
    standard10: 13,
    standard15: 23,
    standard20: 30,
    standard25: 47,
    standard30: 62
},
sixPointFiveMV:{
    mini5:6, 
    mini7point5: 10,
    mini10: 14,
    standard5: 7,
    standard10: 13,
    standard15: 23,
    standard20: 30,
    standard25: 47,
    standard30: 62
},
sixPointSixMV:{
    mini5:6, 
    mini7point5: 10,
    mini10: 14,
    standard5: 7,
    standard10: 13,
    standard15: 23,
    standard20: 30,
    standard25: 47,
    standard30: 62
},
sixPointSevenMV:{
    mini5:6, 
    mini7point5: 10,
    mini10: 14,
    standard5: 7,
    standard10: 13,
    standard15: 23,
    standard20: 30,
    standard25: 47,
    standard30: 62
},
sixPointEightMV:{
    mini5:6, 
    mini7point5: 10,
    mini10: 14,
    standard5: 7,
    standard10: 13,
    standard15: 23,
    standard20: 30,
    standard25: 47,
    standard30: 62
},
sixPointNineMV:{
    mini5:6, 
    mini7point5: 10,
    mini10: 14,
    standard5: 7,
    standard10: 13,
    standard15: 23,
    standard20: 30,
    standard25: 47,
    standard30: 62
},
sevenMV:{
    mini5:6, 
    mini7point5: 10,
    mini10: 14,
    standard5: 7,
    standard10: 13,
    standard15: 23,
    standard20: 30,
    standard25: 47,
    standard30: 62
},
sevenPointOneMV:{
    mini5:6, 
    mini7point5: 10,
    mini10: 14,
    standard5: 7,
    standard10: 13,
    standard15: 23,
    standard20: 30,
    standard25: 47,
    standard30: 62
},
sevenPointTwoMV:{
    mini5:6, 
    mini7point5: 10,
    mini10: 14,
    standard5: 7,
    standard10: 13,
    standard15: 23,
    standard20: 30,
    standard25: 47,
    standard30: 62
},
sevenPointThreeMV:{
    mini5:6, 
    mini7point5: 10,
    mini10: 14,
    standard5: 7,
    standard10: 13,
    standard15: 23,
    standard20: 30,
    standard25: 47,
    standard30: 62
},
sevenPointFourMV:{
    mini5:6, 
    mini7point5: 10,
    mini10: 14,
    standard5: 7,
    standard10: 13,
    standard15: 23,
    standard20: 30,
    standard25: 47,
    standard30: 62
},
sevenPointFiveMV:{
    mini5:6, 
    mini7point5: 10,
    mini10: 14,
    standard5: 7,
    standard10: 13,
    standard15: 23,
    standard20: 30,
    standard25: 47,
    standard30: 62
},
sevenPointSixMV:{
    mini5:6, 
    mini7point5: 10,
    mini10: 14,
    standard5: 7,
    standard10: 13,
    standard15: 23,
    standard20: 30,
    standard25: 47,
    standard30: 62
},
sevenPointSevenMV:{
    mini5:6, 
    mini7point5: 10,
    mini10: 14,
    standard5: 7,
    standard10: 13,
    standard15: 23,
    standard20: 30,
    standard25: 47,
    standard30: 62
},
sevenPointEightMV:{
    mini5:6, 
    mini7point5: 10,
    mini10: 14,
    standard5: 7,
    standard10: 13,
    standard15: 23,
    standard20: 30,
    standard25: 47,
    standard30: 62
},
sevenPointNineMV:{
    mini5:6, 
    mini7point5: 10,
    mini10: 14,
    standard5: 7,
    standard10: 13,
    standard15: 23,
    standard20: 30,
    standard25: 47,
    standard30: 62
},
eightMV:{
    mini5:6, 
    mini7point5: 10,
    mini10: 14,
    standard5: 7,
    standard10: 13,
    standard15: 23,
    standard20: 30,
    standard25: 47,
    standard30: 62
},
eightPointOneMV:{
    mini5:6, 
    mini7point5: 10,
    mini10: 14,
    standard5: 7,
    standard10: 13,
    standard15: 23,
    standard20: 30,
    standard25: 47,
    standard30: 62
},
eightPointTwoMV:{
    mini5:6, 
    mini7point5: 10,
    mini10: 14,
    standard5: 7,
    standard10: 13,
    standard15: 23,
    standard20: 30,
    standard25: 47,
    standard30: 62
},
eightPointThreeMV:{
    mini5:6, 
    mini7point5: 10,
    mini10: 14,
    standard5: 7,
    standard10: 13,
    standard15: 23,
    standard20: 30,
    standard25: 47,
    standard30: 62
},
eightPointFourMV:{
    mini5:6, 
    mini7point5: 10,
    mini10: 14,
    standard5: 7,
    standard10: 13,
    standard15: 23,
    standard20: 30,
    standard25: 47,
    standard30: 62
},
eightPointFiveMV:{
    mini5:6, 
    mini7point5: 10,
    mini10: 14,
    standard5: 7,
    standard10: 13,
    standard15: 23,
    standard20: 30,
    standard25: 47,
    standard30: 62
},
eightPointSixMV:{
    mini5:6, 
    mini7point5: 10,
    mini10: 14,
    standard5: 7,
    standard10: 13,
    standard15: 23,
    standard20: 30,
    standard25: 47,
    standard30: 62
},
eightPointSevenMV:{
    mini5:6, 
    mini7point5: 10,
    mini10: 14,
    standard5: 7,
    standard10: 13,
    standard15: 23,
    standard20: 30,
    standard25: 47,
    standard30: 62
},
eightPointEightMV:{
    mini5:6, 
    mini7point5: 10,
    mini10: 14,
    standard5: 7,
    standard10: 13,
    standard15: 23,
    standard20: 30,
    standard25: 47,
    standard30: 62
},
eightPointNineMV:{
    mini5:6, 
    mini7point5: 10,
    mini10: 14,
    standard5: 7,
    standard10: 13,
    standard15: 23,
    standard20: 30,
    standard25: 47,
    standard30: 62
},
nineMV:{
    mini5:6, 
    mini7point5: 10,
    mini10: 14,
    standard5: 7,
    standard10: 13,
    standard15: 23,
    standard20: 30,
    standard25: 47,
    standard30: 62
},
ninePointOneMV:{
    mini5:6, 
    mini7point5: 10,
    mini10: 14,
    standard5: 7,
    standard10: 13,
    standard15: 23,
    standard20: 30,
    standard25: 47,
    standard30: 62
},
ninePointTwoMV:{
    mini5:6, 
    mini7point5: 10,
    mini10: 14,
    standard5: 7,
    standard10: 13,
    standard15: 23,
    standard20: 30,
    standard25: 47,
    standard30: 62
},
ninePointThreeMV:{
    mini5:6, 
    mini7point5: 10,
    mini10: 14,
    standard5: 7,
    standard10: 13,
    standard15: 23,
    standard20: 30,
    standard25: 47,
    standard30: 62
},
ninePointFourMV:{
    mini5:6, 
    mini7point5: 10,
    mini10: 14,
    standard5: 7,
    standard10: 13,
    standard15: 23,
    standard20: 30,
    standard25: 47,
    standard30: 62
},
ninePointFiveMV:{
    mini5:6, 
    mini7point5: 10,
    mini10: 14,
    standard5: 7,
    standard10: 13,
    standard15: 23,
    standard20: 30,
    standard25: 47,
    standard30: 62
},
ninePointSixMV:{
    mini5:6, 
    mini7point5: 10,
    mini10: 14,
    standard5: 7,
    standard10: 13,
    standard15: 23,
    standard20: 30,
    standard25: 47,
    standard30: 62
},
ninePointSevenMV:{
    mini5:6, 
    mini7point5: 10,
    mini10: 14,
    standard5: 7,
    standard10: 13,
    standard15: 23,
    standard20: 30,
    standard25: 47,
    standard30: 62
},
ninePointEightMV:{
    mini5:6, 
    mini7point5: 10,
    mini10: 14,
    standard5: 7,
    standard10: 13,
    standard15: 23,
    standard20: 30,
    standard25: 47,
    standard30: 62
},
ninePointNineMV:{
    mini5:6, 
    mini7point5: 10,
    mini10: 14,
    standard5: 7,
    standard10: 13,
    standard15: 23,
    standard20: 30,
    standard25: 47,
    standard30: 62
},
tenMV:{
    mini5:6, 
    mini7point5: 10,
    mini10: 14,
    standard5: 7,
    standard10: 13,
    standard15: 23,
    standard20: 30,
    standard25: 47,
    standard30: 62
}
}

console.log(fuseVoltageDropObj.mv)

export {
    addNumsToArray,
    calcAmp
}
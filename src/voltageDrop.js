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
    mini5: 186, 
    mini7point5: 309,
    mini10: 441,
    standard5: 205,
    standard10: 415,
    standard15: 702,
    standard20: 944,
    standard25: 1454,
    standard30: 1909
},
threePointTwoMV:{
    mini5: 192, 
    mini7point5: 319,
    mini10: 455,
    standard5: 211,
    standard10: 428,
    standard15: 724,
    standard20: 975,
    standard25: 1501,
    standard30: 1971
},
threePointThreeMV:{
    mini5: 198, 
    mini7point5: 329,
    mini10: 469,
    standard5: 218,
    standard10: 442,
    standard15: 747,
    standard20: 1005,
    standard25: 1548,
    standard30: 2032
},
threePointFourMV:{
    mini5: 204, 
    mini7point5: 339,
    mini10: 483,
    standard5: 225,
    standard10: 455,
    standard15: 770,
    standard20: 1036,
    standard25: 1595,
    standard30: 2094
},
threePointFiveMV:{
    mini5: 210, 
    mini7point5: 349,
    mini10: 497,
    standard5: 231,
    standard10: 468,
    standard15: 792,
    standard20: 1066,
    standard25: 1642,
    standard30: 2156
},
threePointSixMV:{
    mini5: 216, 
    mini7point5: 359,
    mini10: 512,
    standard5: 238,
    standard10: 482,
    standard15: 815,
    standard20: 1097,
    standard25: 1689,
    standard30: 2217
},
threePointSevenMV:{
    mini5: 222, 
    mini7point5: 369,
    mini10: 526,
    standard5: 244,
    standard10: 495,
    standard15: 837,
    standard20: 1127,
    standard25: 1737,
    standard30: 2279
},
threePointEightMV:{
    mini5: 228, 
    mini7point5: 379,
    mini10: 540,
    standard5: 251,
    standard10: 509,
    standard15: 860,
    standard20: 1158,
    standard25: 1782,
    standard30: 2340
},
threePointNineMV:{
    mini5: 234, 
    mini7point5: 389,
    mini10: 554,
    standard5: 258,
    standard10: 522,
    standard15: 883,
    standard20: 1188,
    standard25: 1829,
    standard30: 2402
},
fourMV:{
    mini5: 240, 
    mini7point5: 399,
    mini10: 568,
    standard5: 264,
    standard10: 535,
    standard15: 905,
    standard20: 1219,
    standard25: 1876,
    standard30: 2464
},
fourPointOneMV:{
    mini5: 246, 
    mini7point5: 409,
    mini10: 583,
    standard5: 271,
    standard10: 549,
    standard15: 928,
    standard20: 1249,
    standard25: 1923,
    standard30: 2525
},
fourPointTwoMV:{
    mini5: 252, 
    mini7point5: 419,
    mini10: 597,
    standard5: 277,
    standard10: 562,
    standard15: 951,
    standard20: 1280,
    standard25: 1970,
    standard30: 2587
},
fourPointThreeMV:{
    mini5: 258, 
    mini7point5: 429,
    mini10: 611,
    standard5: 284,
    standard10: 575,
    standard15: 973,
    standard20: 1310,
    standard25: 2017,
    standard30: 2648
},
fourPointFourMV:{
    mini5: 264, 
    mini7point5: 439,
    mini10: 625,
    standard5: 291,
    standard10: 589,
    standard15: 996,
    standard20: 1341,
    standard25: 2064,
    standard30: 2710
},
fourPointFiveMV:{
    mini5: 270, 
    mini7point5: 449,
    mini10: 639,
    standard5: 297,
    standard10: 602,
    standard15: 1019,
    standard20: 1371,
    standard25: 2111,
    standard30: 2772
},
fourPointSixMV:{
    mini5: 276, 
    mini7point5: 459,
    mini10: 654,
    standard5: 304,
    standard10: 616,
    standard15: 1041,
    standard20: 1401,
    standard25: 2158,
    standard30: 2833
},
fourPointSevenMV:{
    mini5: 282, 
    mini7point5: 469,
    mini10: 668,
    standard5: 310,
    standard10: 629,
    standard15: 1064,
    standard20: 1432,
    standard25: 2205,
    standard30: 2895
},
fourPointEightMV:{
    mini5: 288, 
    mini7point5: 479,
    mini10: 682,
    standard5: 317,
    standard10: 642,
    standard15: 1086,
    standard20: 1462,
    standard25: 2252,
    standard30: 2956
},
fourPointNineMV:{
    mini5: 294, 
    mini7point5: 488,
    mini10: 696,
    standard5: 324,
    standard10: 656,
    standard15: 1109,
    standard20: 1493,
    standard25: 2298,
    standard30: 3018
},
fiveMV:{
    mini5: 300, 
    mini7point5: 498,
    mini10: 711,
    standard5: 330,
    standard10: 669,
    standard15: 1132,
    standard20: 1523,
    standard25: 2345,
    standard30: 3080
},
fivePointOneMV:{
    mini5: 306, 
    mini7point5: 508,
    mini10: 725,
    standard5: 337,
    standard10: 683,
    standard15: 1154,
    standard20: 1554,
    standard25: 2392,
    standard30: 3141
},
fivePointTwoMV:{
    mini5: 312, 
    mini7point5: 518,
    mini10: 739,
    standard5: 343,
    standard10: 696,
    standard15: 1177,
    standard20: 1584,
    standard25: 2439,
    standard30: 3203
},
fivePointThreeMV:{
    mini5: 318, 
    mini7point5: 528,
    mini10: 753,
    standard5: 350,
    standard10: 709,
    standard15: 1200,
    standard20: 1615,
    standard25: 2486,
    standard30: 3264
},
fivePointFourMV:{
    mini5: 324, 
    mini7point5: 538,
    mini10: 767,
    standard5: 357,
    standard10: 723,
    standard15: 1222,
    standard20: 1645,
    standard25: 2533,
    standard30: 3326
},
fivePointFiveMV:{
    mini5: 330, 
    mini7point5: 548,
    mini10: 782,
    standard5: 363,
    standard10: 736,
    standard15: 1245,
    standard20: 1676,
    standard25: 2580,
    standard30: 3387
},
fivePointSixMV:{
    mini5: 336, 
    mini7point5: 558,
    mini10: 796,
    standard5: 370,
    standard10: 749,
    standard15: 1268,
    standard20: 1706,
    standard25: 2627,
    standard30: 3449
},
fivePointSevenMV:{
    mini5: 342, 
    mini7point5: 568,
    mini10: 810,
    standard5: 376,
    standard10: 763,
    standard15: 1290,
    standard20: 1737,
    standard25: 2674,
    standard30: 3511
},
fivePointEightMV:{
    mini5: 348, 
    mini7point5: 578,
    mini10: 824,
    standard5: 383,
    standard10: 776,
    standard15: 1313,
    standard20: 1767,
    standard25: 2721,
    standard30: 3572
},
fivePointNineMV:{
    mini5: 354, 
    mini7point5: 588,
    mini10: 838,
    standard5: 390,
    standard10: 790,
    standard15: 1335,
    standard20: 1798,
    standard25: 2768,
    standard30: 3634
},
sixMV:{
    mini5: 360, 
    mini7point5: 598,
    mini10: 853,
    standard5: 396,
    standard10: 803,
    standard15: 1358,
    standard20: 1828,
    standard25: 2814,
    standard30: 3695
},
sixPointOneMV:{
    mini5: 366, 
    mini7point5: 608,
    mini10: 867,
    standard5: 403,
    standard10: 816,
    standard15: 1381,
    standard20: 1858,
    standard25: 2861,
    standard30: 3757
},
sixPointTwoMV:{
    mini5: 372, 
    mini7point5: 618,
    mini10: 881,
    standard5: 409,
    standard10: 830,
    standard15: 1403,
    standard20: 1889,
    standard25: 2908,
    standard30: 3819
},
sixPointThreeMV:{
    mini5: 378, 
    mini7point5: 628,
    mini10: 895,
    standard5: 416,
    standard10: 843,
    standard15: 1426,
    standard20: 1919,
    standard25: 2955,
    standard30: 3880
},
sixPointFourMV:{
    mini5: 384, 
    mini7point5: 638,
    mini10: 909,
    standard5: 423,
    standard10: 857,
    standard15: 1449,
    standard20: 1950,
    standard25: 3002,
    standard30: 3942
},
sixPointFiveMV:{
    mini5: 390, 
    mini7point5: 648,
    mini10: 924,
    standard5: 429,
    standard10: 870,
    standard15: 1471,
    standard20: 1980,
    standard25: 3049,
    standard30: 4003
},
sixPointSixMV:{
    mini5: 396, 
    mini7point5: 658,
    mini10: 938,
    standard5: 436,
    standard10: 883,
    standard15: 1494,
    standard20: 2011,
    standard25: 3096,
    standard30: 4065
},
sixPointSevenMV:{
    mini5: 402, 
    mini7point5: 668,
    mini10: 952,
    standard5: 442,
    standard10: 897,
    standard15: 1517,
    standard20: 2041,
    standard25: 3143,
    standard30: 4127
},
sixPointEightMV:{
    mini5: 408, 
    mini7point5: 678,
    mini10: 966,
    standard5: 449,
    standard10: 910,
    standard15: 1539,
    standard20: 2072,
    standard25: 3190,
    standard30: 4188
},
sixPointNineMV:{
    mini5: 414, 
    mini7point5: 688,
    mini10: 981,
    standard5: 456,
    standard10: 923,
    standard15: 1562,
    standard20: 2102,
    standard25: 3237,
    standard30: 4250
},
sevenMV:{
    mini5: 420, 
    mini7point5: 698,
    mini10: 995,
    standard5: 462,
    standard10: 937,
    standard15: 1584,
    standard20: 2133,
    standard25: 3284,
    standard30: 4311
},
sevenPointOneMV:{
    mini5: 426, 
    mini7point5: 708,
    mini10: 1009,
    standard5: 469,
    standard10: 950,
    standard15: 1607,
    standard20: 2163,
    standard25: 3330,
    standard30: 4373
},
sevenPointTwoMV:{
    mini5: 432, 
    mini7point5: 718,
    mini10: 1023,
    standard5: 475,
    standard10: 964,
    standard15: 1630,
    standard20: 2194,
    standard25: 3377,
    standard30: 4434
},
sevenPointThreeMV:{
    mini5: 438, 
    mini7point5: 728,
    mini10: 1037,
    standard5: 482,
    standard10: 977,
    standard15: 1652,
    standard20: 2224,
    standard25: 3424,
    standard30: 4496
},
sevenPointFourMV:{
    mini5: 444, 
    mini7point5: 738,
    mini10: 1052,
    standard5: 489,
    standard10: 990,
    standard15: 1675,
    standard20: 2255,
    standard25: 3471,
    standard30: 4558
},
sevenPointFiveMV:{
    mini5: 450, 
    mini7point5: 748,
    mini10: 1066,
    standard5: 495,
    standard10: 1004,
    standard15: 1698,
    standard20: 2285,
    standard25: 3518,
    standard30: 4619
},
sevenPointSixMV:{
    mini5: 456, 
    mini7point5: 758,
    mini10: 1080,
    standard5: 502,
    standard10: 1017,
    standard15: 1720,
    standard20: 2315,
    standard25: 3565,
    standard30: 4681
},
sevenPointSevenMV:{
    mini5: 462, 
    mini7point5: 768,
    mini10: 1094,
    standard5: 508,
    standard10: 1030,
    standard15: 1743,
    standard20: 2346,
    standard25: 3612,
    standard30: 4742
},
sevenPointEightMV:{
    mini5: 468, 
    mini7point5: 778,
    mini10: 1108,
    standard5: 515,
    standard10: 1044,
    standard15: 1766,
    standard20: 2376,
    standard25: 3659,
    standard30: 4804
},
sevenPointNineMV:{
    mini5: 474, 
    mini7point5: 788,
    mini10: 1123,
    standard5: 522,
    standard10: 1057,
    standard15: 1788,
    standard20: 2407,
    standard25: 3706,
    standard30: 4866
},
eightMV:{
    mini5: 480, 
    mini7point5: 798,
    mini10: 1137,
    standard5: 528,
    standard10: 1071,
    standard15: 1811,
    standard20: 2437,
    standard25: 3753,
    standard30: 4927
},
eightPointOneMV:{
    mini5: 486, 
    mini7point5: 807,
    mini10: 1151,
    standard5: 535,
    standard10: 1084,
    standard15: 1833,
    standard20: 2468,
    standard25: 3800,
    standard30: 4989
},
eightPointTwoMV:{
    mini5: 492, 
    mini7point5: 817,
    mini10: 1165,
    standard5: 541,
    standard10: 1097,
    standard15: 1856,
    standard20: 2498,
    standard25: 3846,
    standard30: 5050
},
eightPointThreeMV:{
    mini5: 498, 
    mini7point5: 827,
    mini10: 1179,
    standard5: 548,
    standard10: 1111,
    standard15: 1879,
    standard20: 2529,
    standard25: 3893,
    standard30: 5112
},
eightPointFourMV:{
    mini5: 504, 
    mini7point5: 837,
    mini10: 1194,
    standard5: 555,
    standard10: 1124,
    standard15: 1901,
    standard20: 2559,
    standard25: 3940,
    standard30: 5174
},
eightPointFiveMV:{
    mini5: 510, 
    mini7point5: 847,
    mini10: 1208,
    standard5: 561,
    standard10: 1138,
    standard15: 1924,
    standard20: 2590,
    standard25: 3987,
    standard30: 5235
},
eightPointSixMV:{
    mini5: 516, 
    mini7point5: 857,
    mini10: 1222,
    standard5: 568,
    standard10: 1151,
    standard15: 1947,
    standard20: 2620,
    standard25: 4034,
    standard30: 5297
},
eightPointSevenMV:{
    mini5: 522, 
    mini7point5: 867,
    mini10: 1236,
    standard5: 575,
    standard10: 1164,
    standard15: 1969,
    standard20: 2651,
    standard25: 4081,
    standard30: 5358
},
eightPointEightMV:{
    mini5: 528, 
    mini7point5: 877,
    mini10: 1251,
    standard5: 581,
    standard10: 1178,
    standard15: 1992,
    standard20: 2681,
    standard25: 4128,
    standard30: 5420
},
eightPointNineMV:{
    mini5: 534, 
    mini7point5: 887,
    mini10: 1265,
    standard5: 588,
    standard10: 1191,
    standard15: 2015,
    standard20: 2712,
    standard25: 4175,
    standard30: 5482
},
nineMV:{
    mini5: 540, 
    mini7point5: 897,
    mini10: 1279,
    standard5: 594,
    standard10: 1204,
    standard15: 2037,
    standard20: 2742,
    standard25: 4222,
    standard30: 5543
},
ninePointOneMV:{
    mini5: 546, 
    mini7point5: 907,
    mini10: 1293,
    standard5: 601,
    standard10: 1218,
    standard15: 2060,
    standard20: 2772,
    standard25: 4269,
    standard30: 5605
},
ninePointTwoMV:{
    mini5: 552, 
    mini7point5: 917,
    mini10: 1307,
    standard5: 608,
    standard10: 1231,
    standard15: 2082,
    standard20: 2803,
    standard25: 4316,
    standard30: 5666
},
ninePointThreeMV:{
    mini5: 558, 
    mini7point5: 927,
    mini10: 1322,
    standard5: 614,
    standard10: 1245,
    standard15: 2105,
    standard20: 2833,
    standard25: 4362,
    standard30: 5728
},
ninePointFourMV:{
    mini5: 564, 
    mini7point5: 937,
    mini10: 1336,
    standard5: 621,
    standard10: 1258,
    standard15: 2128,
    standard20: 2864,
    standard25: 4409,
    standard30: 5789
},
ninePointFiveMV:{
    mini5: 570, 
    mini7point5: 947,
    mini10: 1350,
    standard5: 627,
    standard10: 1271,
    standard15: 2150,
    standard20: 2894,
    standard25: 4456,
    standard30: 5851
},
ninePointSixMV:{
    mini5: 576, 
    mini7point5: 957,
    mini10: 1364,
    standard5: 634,
    standard10: 1285,
    standard15: 2173,
    standard20: 2925,
    standard25: 4503,
    standard30: 5913
},
ninePointSevenMV:{
    mini5: 582, 
    mini7point5: 967,
    mini10: 1378,
    standard5: 641,
    standard10: 1298,
    standard15: 2196,
    standard20: 2955,
    standard25: 4550,
    standard30: 5974
},
ninePointEightMV:{
    mini5: 588, 
    mini7point5: 977,
    mini10: 1393,
    standard5: 647,
    standard10: 1312,
    standard15: 2218,
    standard20: 2986,
    standard25: 4597,
    standard30: 6036
},
ninePointNineMV:{
    mini5: 594, 
    mini7point5: 987,
    mini10: 1407,
    standard5: 654,
    standard10: 1324,
    standard15: 2241,
    standard20: 3016,
    standard25: 4644,
    standard30: 6097
},
tenMV:{
    mini5: 600, 
    mini7point5: 997,
    mini10: 1421,
    standard5: 660,
    standard10: 1338,
    standard15: 2263,
    standard20: 3047,
    standard25: 4691,
    standard30: 6159
}
}

console.log(fuseVoltageDropObj.mv)

export {
    addNumsToArray,
    calcAmp
}
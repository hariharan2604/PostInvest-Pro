// seeders/20220716000000-seed-banks.js
'use strict';
const { v4: uuidv4 } = require('uuid');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const banks = [
      {
        "id": uuidv4(),
        "code": "AACX",
        "bank_name": "Akhand Anand Co.op Bank"
      },
      {
        "id": uuidv4(),
        "code": "ABBL",
        "bank_name": "AB Bank"
      },
      {
        "id": uuidv4(),
        "code": "ABCX",
        "bank_name": "Aurangabad District Central Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "ABDX",
        "bank_name": "Dr. Ambedkar Nagrik Sahakari Bank Mydt Gwalior"
      },
      {
        "id": uuidv4(),
        "code": "ABEX",
        "bank_name": "Andhra Bank Employees Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "ABHY",
        "bank_name": "Abhyudaya Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "ABNA",
        "bank_name": "Royal Bank of Scotland N.V."
      },
      {
        "id": uuidv4(),
        "code": "ABPB",
        "bank_name": "Aditya Birla Idea Payments Bank"
      },
      {
        "id": uuidv4(),
        "code": "ABSB",
        "bank_name": "Abhinav Sahakari Bank"
      },
      {
        "id": uuidv4(),
        "code": "ABUX",
        "bank_name": "Abhinandan Urban Co-operative Bank Amravati"
      },
      {
        "id": uuidv4(),
        "code": "ACAX",
        "bank_name": "Assam Co-operative Apex Bank"
      },
      {
        "id": uuidv4(),
        "code": "ACBX",
        "bank_name": "Adarsh Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "ACCX",
        "bank_name": "Ace Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "ACKX",
        "bank_name": "Annasaheb Chougule Urban Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "ACOX",
        "bank_name": "Amarnath Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "ACUB",
        "bank_name": "Aryapuram Co-operative Urban Bank"
      },
      {
        "id": uuidv4(),
        "code": "ACUX",
        "bank_name": "Adarsh Co-operative Urban Bank"
      },
      {
        "id": uuidv4(),
        "code": "ADBX",
        "bank_name": "Ahmedabad District Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "ADCB",
        "bank_name": "Abu Dhabi Commercial Bank"
      },
      {
        "id": uuidv4(),
        "code": "ADCC",
        "bank_name": "Akola District Central Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "ADCX",
        "bank_name": "Shri Adinath Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "ADDX",
        "bank_name": "Adilabad District Co-operative Central Bank"
      },
      {
        "id": uuidv4(),
        "code": "AGCX",
        "bank_name": "Agrasen Co-operative Urban Bank"
      },
      {
        "id": uuidv4(),
        "code": "AGDX",
        "bank_name": "Agra District Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "AGRX",
        "bank_name": "Agroha Co-operative Urban Bank"
      },
      {
        "id": uuidv4(),
        "code": "AGSX",
        "bank_name": "Agrasen Nagari Sahakari Bank"
      },
      {
        "id": uuidv4(),
        "code": "AGUX",
        "bank_name": "Agartala Co-operative Urban Bank"
      },
      {
        "id": uuidv4(),
        "code": "AGVX",
        "bank_name": "Assam Gramin Vikash Bank"
      },
      {
        "id": uuidv4(),
        "code": "AHDC",
        "bank_name": "Ahmednagar District Central Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "AHMX",
        "bank_name": "Ahmednagar District Central Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "AHUX",
        "bank_name": "Ahilyadevi Urban Co-operative Bank Solapur"
      },
      {
        "id": uuidv4(),
        "code": "AIRP",
        "bank_name": "Airtel Payments Bank"
      },
      {
        "id": uuidv4(),
        "code": "AJAR",
        "bank_name": "Ajara Urban Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "AJHC",
        "bank_name": "Ambarnath Jai-hind Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "AJKB",
        "bank_name": "Akola Janata Commercial Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "AJMX",
        "bank_name": "Ajmer Central Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "AJNX",
        "bank_name": "Ajantha Urban Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "AJPX",
        "bank_name": "Ambajogai Peoples Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "AJSX",
        "bank_name": "Ambarnath Jai-hind Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "AJUX",
        "bank_name": "Ajara Urban Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "AKJB",
        "bank_name": "Akola Janata Commercial Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "AKKB",
        "bank_name": "Akkamahadevi Mahila Sahakari Bank Niyamit"
      },
      {
        "id": uuidv4(),
        "code": "AKMX",
        "bank_name": "Akola Merchant Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "AKOX",
        "bank_name": "Akola Urban Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "ALAX",
        "bank_name": "Alavi Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "ALIX",
        "bank_name": "Aligarh District Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "ALLA",
        "bank_name": "Allahabad Bank"
      },
      {
        "id": uuidv4(),
        "code": "ALLX",
        "bank_name": "Allahabad District Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "ALWX",
        "bank_name": "Alwar Central Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "AMAX",
        "bank_name": "Aman Sahakari Bank"
      },
      {
        "id": uuidv4(),
        "code": "AMBX",
        "bank_name": "Ambala Central Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "AMCB",
        "bank_name": "Ahmedabad Mercantile Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "AMCX",
        "bank_name": "Amritsar Central Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "AMDN",
        "bank_name": "Ahmednagar Merchants Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "AMMX",
        "bank_name": "Adarsh Mahila Mercantile Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "AMNX",
        "bank_name": "Astha Mahila Nagrik Sahakari Bank Maryadit"
      },
      {
        "id": uuidv4(),
        "code": "AMRX",
        "bank_name": "Amreli Jilla Madhyastha Sahakari Bank"
      },
      {
        "id": uuidv4(),
        "code": "AMSB",
        "bank_name": "Annasaheb Magar Sahakari Bank"
      },
      {
        "id": uuidv4(),
        "code": "AMSX",
        "bank_name": "Ambika Mahila Sahakari Bank"
      },
      {
        "id": uuidv4(),
        "code": "ANBX",
        "bank_name": "Amreli Nagarik Sahakari Bank"
      },
      {
        "id": uuidv4(),
        "code": "ANDB",
        "bank_name": "Andhra Bank"
      },
      {
        "id": uuidv4(),
        "code": "ANDX",
        "bank_name": "Andarsul Urban Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "ANMX",
        "bank_name": "Ahmednagar Merchant's Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "ANSX",
        "bank_name": "Andaman & Nicobar State Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "ANUX",
        "bank_name": "Anuradha Urban Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "ANZB",
        "bank_name": "Australia and New Zealand Banking Group"
      },
      {
        "id": uuidv4(),
        "code": "APBL",
        "bank_name": "Andhra Pradesh State Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "APCX",
        "bank_name": "Alappuzha District Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "APGB",
        "bank_name": "Andhra Pragathi Grameena Bank"
      },
      {
        "id": uuidv4(),
        "code": "APGV",
        "bank_name": "Andhra Pradesh Grameena Vikas Bank"
      },
      {
        "id": uuidv4(),
        "code": "APGX",
        "bank_name": "Andhra Pradesh Grameena Vikas Bank"
      },
      {
        "id": uuidv4(),
        "code": "APJX",
        "bank_name": "Ap Janata Co-operative Urban Bank"
      },
      {
        "id": uuidv4(),
        "code": "APMC",
        "bank_name": "A.P. Mahesh Co-operative Urban Bank"
      },
      {
        "id": uuidv4(),
        "code": "APMX",
        "bank_name": "Ap Mahajan's Co-operative Urban Bank"
      },
      {
        "id": uuidv4(),
        "code": "APNX",
        "bank_name": "Apani Sahakari Bank"
      },
      {
        "id": uuidv4(),
        "code": "APRR",
        "bank_name": "A.P. Raja Rajeswari Mahila Co-operative Urban Bank"
      },
      {
        "id": uuidv4(),
        "code": "APRX",
        "bank_name": "Arunachal Pradesh Rural Bank"
      },
      {
        "id": uuidv4(),
        "code": "APSX",
        "bank_name": "P. D. Patilsaheb Sahakari Bank"
      },
      {
        "id": uuidv4(),
        "code": "ARBL",
        "bank_name": "Arvind Sahakari Bank"
      },
      {
        "id": uuidv4(),
        "code": "ARCX",
        "bank_name": "Arunachal Pradesh State Co-operative Apex Bank"
      },
      {
        "id": uuidv4(),
        "code": "ARMX",
        "bank_name": "510 Army Base W/s Credit Co-operative Primary Bank"
      },
      {
        "id": uuidv4(),
        "code": "ARYX",
        "bank_name": "Gramin Bank of Aryavart"
      },
      {
        "id": uuidv4(),
        "code": "ASBL",
        "bank_name": "Apna Sahakari Bank"
      },
      {
        "id": uuidv4(),
        "code": "ASBX",
        "bank_name": "Ahmednagar Shahar Sahakari Bank Maryadit"
      },
      {
        "id": uuidv4(),
        "code": "ASHX",
        "bank_name": "Ashta People's Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "ASKX",
        "bank_name": "Arvind Sahakari Bank"
      },
      {
        "id": uuidv4(),
        "code": "ASNX",
        "bank_name": "Ashoknagar Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "ASOX",
        "bank_name": "Associate Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "ASSX",
        "bank_name": "Ashok Sahakari Bank"
      },
      {
        "id": uuidv4(),
        "code": "AUBL",
        "bank_name": "AU Small Finance Bank"
      },
      {
        "id": uuidv4(),
        "code": "AUBX",
        "bank_name": "Angul United Central Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "AUCB",
        "bank_name": "Almora Urban Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "AUCX",
        "bank_name": "Ajara Urban Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "AUGX",
        "bank_name": "Allahabad Up Gramin Bank"
      },
      {
        "id": uuidv4(),
        "code": "AURX",
        "bank_name": "Aurangabad District Central Co-operative Bank. Bihar"
      },
      {
        "id": uuidv4(),
        "code": "AVDX",
        "bank_name": "Amravati District Central Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "AWCX",
        "bank_name": "Alwaye Urban Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "AWUX",
        "bank_name": "Alwar Urban Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "AZAX",
        "bank_name": "Azad Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "AZPX",
        "bank_name": "Amravati Zilla Parishad Shikshak Sahakari Bank"
      },
      {
        "id": uuidv4(),
        "code": "AZSX",
        "bank_name": "Almora Zila d Bank"
      },
      {
        "id": uuidv4(),
        "code": "AZUX",
        "bank_name": "Azad Urban Co-operative Bank Hubli"
      },
      {
        "id": uuidv4(),
        "code": "BACB",
        "bank_name": "Bassein Catholic Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "BACX",
        "bank_name": "Bihar Awami Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "BADX",
        "bank_name": "Bankura District Central Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "BAGX",
        "bank_name": "Balangir District Central Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "BALB",
        "bank_name": "Bally Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "BALX",
        "bank_name": "Balasinor Nagarik Sahakari Bank"
      },
      {
        "id": uuidv4(),
        "code": "BANX",
        "bank_name": "Banaras Mercantile Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "BARA",
        "bank_name": "Baramati Sahakari Bank"
      },
      {
        "id": uuidv4(),
        "code": "BARB",
        "bank_name": "Bank of Baroda"
      },
      {
        "id": uuidv4(),
        "code": "BARC",
        "bank_name": "Barclays Bank"
      },
      {
        "id": uuidv4(),
        "code": "BARX",
        "bank_name": "Baroda City Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "BASX",
        "bank_name": "Shri Basaveshwar Sahakari Bank Nyt.bagalkot"
      },
      {
        "id": uuidv4(),
        "code": "BAUX",
        "bank_name": "Badagara Co-operative Urban Bank"
      },
      {
        "id": uuidv4(),
        "code": "BAVX",
        "bank_name": "Bavla Nagrik Sahakari Bank"
      },
      {
        "id": uuidv4(),
        "code": "BAWX",
        "bank_name": "Bhawanipatna Central Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "BBDX",
        "bank_name": "Birbhum District Central Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "BBKM",
        "bank_name": "Bank of Bahrein and Kuwait"
      },
      {
        "id": uuidv4(),
        "code": "BBLX",
        "bank_name": "Bhingar Urban Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "BBRX",
        "bank_name": "Bangalore  Bangalore Rural&ramanagara Dccb"
      },
      {
        "id": uuidv4(),
        "code": "BBSX",
        "bank_name": "Balasore Bhadrak Central Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "BBUX",
        "bank_name": "Bellad Bagewadi Urban Souharada Sahakari Bank Nyt"
      },
      {
        "id": uuidv4(),
        "code": "BBVX",
        "bank_name": "Bhabhar Vibhag Nagrik Sahakari Bank"
      },
      {
        "id": uuidv4(),
        "code": "BCBM",
        "bank_name": "Bharat Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "BCBX",
        "bank_name": "Bantra Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "BCCB",
        "bank_name": "Bangalore City Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "BCCX",
        "bank_name": "Bathinda Central Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "BCEX",
        "bank_name": "Banswara Central Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "BCEY",
        "bank_name": "Bank of Ceylon"
      },
      {
        "id": uuidv4(),
        "code": "BCOX",
        "bank_name": "Bapuji Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "BCUB",
        "bank_name": "Bicholim Urban Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "BCUX",
        "bank_name": "Baghat Urban Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "BDBB",
        "bank_name": "Bahraich District Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "BDBL",
        "bank_name": "Bandhan Bank"
      },
      {
        "id": uuidv4(),
        "code": "BDBX",
        "bank_name": "Bellary District Co-operative Central Bank"
      },
      {
        "id": uuidv4(),
        "code": "BDCX",
        "bank_name": "Bijapur District Central Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "BDDX",
        "bank_name": "Bhadradri Co-operative Urban Bank"
      },
      {
        "id": uuidv4(),
        "code": "BDIX",
        "bank_name": "Bhandara District Central Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "BDNX",
        "bank_name": "Bhind Nagrik Sahakari Bank Mydt"
      },
      {
        "id": uuidv4(),
        "code": "BDOX",
        "bank_name": "Banda District Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "BDUX",
        "bank_name": "Banda Urban Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "BEDX",
        "bank_name": "Beed District Central Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "BELX",
        "bank_name": "Belgaum District Central Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "BERX",
        "bank_name": "Berhampore Co-operative Central Bank"
      },
      {
        "id": uuidv4(),
        "code": "BFUX",
        "bank_name": "Bhagyodaya Friends Urban Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "BGBX",
        "bank_name": "Dakshin Bihar Gramin Bank"
      },
      {
        "id": uuidv4(),
        "code": "BGCX",
        "bank_name": "Balageria Central Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "BGGX",
        "bank_name": "Baroda Gujarat Gramin Bank"
      },
      {
        "id": uuidv4(),
        "code": "BGUX",
        "bank_name": "Begusarai Central Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "BGVX",
        "bank_name": "Bangiya Gramin Vikash Bank"
      },
      {
        "id": uuidv4(),
        "code": "BHAX",
        "bank_name": "Bhagyodaya Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "BHBX",
        "bank_name": "Bhilai Nagarik Sahakari Bank Maryadit"
      },
      {
        "id": uuidv4(),
        "code": "BHCX",
        "bank_name": "Bhuj Commercial Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "BHDX",
        "bank_name": "Bhadohi Urban Co-operative Bank Gyanpur"
      },
      {
        "id": uuidv4(),
        "code": "BHEX",
        "bank_name": "Bhel Employees Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "BHGX",
        "bank_name": "Bhagalpur Central Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "BHIX",
        "bank_name": "Bhilwara Mahila Urban Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "BHJX",
        "bank_name": "Bhuj Mercentile Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "BHMX",
        "bank_name": "Brahmadeodada Mane Sahakari Bank Solapur"
      },
      {
        "id": uuidv4(),
        "code": "BHOX",
        "bank_name": "Bhopal Co-operative Central Bank"
      },
      {
        "id": uuidv4(),
        "code": "BHRX",
        "bank_name": "Bharatpur Central Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "BHSX",
        "bank_name": "Bharati Sahakari Bank"
      },
      {
        "id": uuidv4(),
        "code": "BHTX",
        "bank_name": "Bhatkal Urban Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "BHUX",
        "bank_name": "Bhilwara Urban Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "BHWX",
        "bank_name": "Bhiwani Central Co-operative Bank Bhiwani"
      },
      {
        "id": uuidv4(),
        "code": "BJUX",
        "bank_name": "Bijnor Urban Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "BKCX",
        "bank_name": "Bhavasara Kshatriya Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "BKDN",
        "bank_name": "Dena Bank"
      },
      {
        "id": uuidv4(),
        "code": "BKDX",
        "bank_name": "Banaskantha District Central Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "BKID",
        "bank_name": "Bank of India"
      },
      {
        "id": uuidv4(),
        "code": "BKSX",
        "bank_name": "Baran Kendriya Sahakari Bank Baran"
      },
      {
        "id": uuidv4(),
        "code": "BLGX",
        "bank_name": "Shree Basaveshwar Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "BMBL",
        "bank_name": "Bharatiya Mahila Bank"
      },
      {
        "id": uuidv4(),
        "code": "BMCB",
        "bank_name": "Bombay Mercantile Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "BMCX",
        "bank_name": "Barmer Central Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "BMPX",
        "bank_name": "Banaskantha Mercantile Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "BMSX",
        "bank_name": "Bhagyalakshmi Mahila Sahakari Bank"
      },
      {
        "id": uuidv4(),
        "code": "BNBX",
        "bank_name": "Betul Nagrik Sahakari Bank Mydt"
      },
      {
        "id": uuidv4(),
        "code": "BNCX",
        "bank_name": "Bhatpara Naihati Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "BNKX",
        "bank_name": "Banki Central Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "BNPA",
        "bank_name": "BNP Paribas Bank"
      },
      {
        "id": uuidv4(),
        "code": "BNSB",
        "bank_name": "Bhagini Nivedita Sahakari Bank Pune"
      },
      {
        "id": uuidv4(),
        "code": "BNSX",
        "bank_name": "Bhagini Nivedita Sahakari Bank"
      },
      {
        "id": uuidv4(),
        "code": "BOCX",
        "bank_name": "Boudh Co-operative Central Bank"
      },
      {
        "id": uuidv4(),
        "code": "BODX",
        "bank_name": "Bagalkot District Central Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "BOFA",
        "bank_name": "Bank of America"
      },
      {
        "id": uuidv4(),
        "code": "BORX",
        "bank_name": "Boral Union Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "BOTM",
        "bank_name": "MUFG Bank"
      },
      {
        "id": uuidv4(),
        "code": "BOTX",
        "bank_name": "Shree Botad Mercantile Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "BPCX",
        "bank_name": "Bhadgaon People's Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "BPSX",
        "bank_name": "Bilagi Pattana Sahakari Bank Niyamit"
      },
      {
        "id": uuidv4(),
        "code": "BRCX",
        "bank_name": "Bhavana Rishi Co-operative Urban Bank"
      },
      {
        "id": uuidv4(),
        "code": "BRDX",
        "bank_name": "Baroda Central Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "BRGX",
        "bank_name": "Baroda Rajasthan Kshetriya Gramin Bank"
      },
      {
        "id": uuidv4(),
        "code": "BRMX",
        "bank_name": "Bramhapuri Urban Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "BRSX",
        "bank_name": "Baran Nagrik Bank"
      },
      {
        "id": uuidv4(),
        "code": "BRUX",
        "bank_name": "Bharuch District Central Co-operative Bank Bharuc"
      },
      {
        "id": uuidv4(),
        "code": "BSBX",
        "bank_name": "Baramati Sahakari Bank"
      },
      {
        "id": uuidv4(),
        "code": "BSCX",
        "bank_name": "Baidyabati Sheoraphuli Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "BTCX",
        "bank_name": "Balitikuri Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "BTUX",
        "bank_name": "Balotra Urban Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "BUBX",
        "bank_name": "Bhandara Urban Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "BUCL",
        "bank_name": "Belur Urban Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "BUCX",
        "bank_name": "Beawar Urban Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "BUGX",
        "bank_name": "Baroda Uttar Pradesh Gramin Bank"
      },
      {
        "id": uuidv4(),
        "code": "BUNX",
        "bank_name": "Bundi Central Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "BURX",
        "bank_name": "Burdwan Central Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "BUSX",
        "bank_name": "Business Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "BUZX",
        "bank_name": "Badaun Zila d Bank"
      },
      {
        "id": uuidv4(),
        "code": "BVNX",
        "bank_name": "Bhavnagar District Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "BVSX",
        "bank_name": "Bhavani Sahakari Bank"
      },
      {
        "id": uuidv4(),
        "code": "BWCX",
        "bank_name": "Brahmawart Commercial Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "CALX",
        "bank_name": "Calicut Co-operative Urban Bank"
      },
      {
        "id": uuidv4(),
        "code": "CBHX",
        "bank_name": "Central Co-operative Bank  Bhilwara"
      },
      {
        "id": uuidv4(),
        "code": "CBIN",
        "bank_name": "Central Bank of India"
      },
      {
        "id": uuidv4(),
        "code": "CCBL",
        "bank_name": "Citizen Credit Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "CCBX",
        "bank_name": "Citizen Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "CCCX",
        "bank_name": "Chennai Central Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "CCMX",
        "bank_name": "Chanasma Commercial Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "CCOB",
        "bank_name": "City Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "CCUX",
        "bank_name": "Chengelpattu Co-operative Urban Bank"
      },
      {
        "id": uuidv4(),
        "code": "CDCX",
        "bank_name": "Cuddalore District Central Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "CEBX",
        "bank_name": "Central Co-operative Bank Bikaner"
      },
      {
        "id": uuidv4(),
        "code": "CGBX",
        "bank_name": "Chhattisgarh Rajya Gramin Bank"
      },
      {
        "id": uuidv4(),
        "code": "CGGX",
        "bank_name": "Chaitanya Godavari Grameena Bank"
      },
      {
        "id": uuidv4(),
        "code": "CHAS",
        "bank_name": "JP Morgan Chase Bank NA"
      },
      {
        "id": uuidv4(),
        "code": "CHAX",
        "bank_name": "Chamoli Zila d Bank"
      },
      {
        "id": uuidv4(),
        "code": "CHBX",
        "bank_name": "Chamba Urban Co-operative Bank Chamba"
      },
      {
        "id": uuidv4(),
        "code": "CHCX",
        "bank_name": "Churu Central Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "CHDX",
        "bank_name": "Chittoor District Co-operative Central Bank"
      },
      {
        "id": uuidv4(),
        "code": "CHIX",
        "bank_name": "Chikhli Urban Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "CHKX",
        "bank_name": "Chittorgarh Kendriya Sahakari Bank"
      },
      {
        "id": uuidv4(),
        "code": "CHPX",
        "bank_name": "Chopda Peoples Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "CHRX",
        "bank_name": "Cherpalcheri Co-operative Urban Bank"
      },
      {
        "id": uuidv4(),
        "code": "CHSX",
        "bank_name": "Chandigarh State Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "CHTX",
        "bank_name": "Chitnavispura Sahakari Bank"
      },
      {
        "id": uuidv4(),
        "code": "CIDX",
        "bank_name": "Chikmagalur District Central Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "CITI",
        "bank_name": "CITI Bank"
      },
      {
        "id": uuidv4(),
        "code": "CITX",
        "bank_name": "Chitradurga District Co-operative Central Bank"
      },
      {
        "id": uuidv4(),
        "code": "CIUB",
        "bank_name": "City Union Bank"
      },
      {
        "id": uuidv4(),
        "code": "CJAX",
        "bank_name": "Citizens' Co-operative Bank Jammu"
      },
      {
        "id": uuidv4(),
        "code": "CJMX",
        "bank_name": "Karnataka Mahila Sahakari Bank"
      },
      {
        "id": uuidv4(),
        "code": "CLBL",
        "bank_name": "Capital Small Finance Bank"
      },
      {
        "id": uuidv4(),
        "code": "CMCB",
        "bank_name": "Colour Merchant's Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "CMCX",
        "bank_name": "Commercial Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "CMDX",
        "bank_name": "Coimbatore District Central Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "CMLX",
        "bank_name": "Commercial Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "CMPX",
        "bank_name": "Central Madhya Pradesh Gramin Bank"
      },
      {
        "id": uuidv4(),
        "code": "CMSV",
        "bank_name": "Chaitanya Mahila Sahakari Bank, Vijayapur"
      },
      {
        "id": uuidv4(),
        "code": "CNRB",
        "bank_name": "Canara Bank"
      },
      {
        "id": uuidv4(),
        "code": "CNSX",
        "bank_name": "Chembur Nagarik Sahakari Bank"
      },
      {
        "id": uuidv4(),
        "code": "COAS",
        "bank_name": "Coastal Local Area Bank"
      },
      {
        "id": uuidv4(),
        "code": "COCX",
        "bank_name": "Co-operative City Bank"
      },
      {
        "id": uuidv4(),
        "code": "COLX",
        "bank_name": "Coastal Local Area Bank"
      },
      {
        "id": uuidv4(),
        "code": "COMX",
        "bank_name": "Co-operative Bank of Mehsana"
      },
      {
        "id": uuidv4(),
        "code": "CONX",
        "bank_name": "Contai Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "CORP",
        "bank_name": "Corporation Bank"
      },
      {
        "id": uuidv4(),
        "code": "COSB",
        "bank_name": "Cosmos Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "CPDX",
        "bank_name": "Chandrapur District Central Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "CPSN",
        "bank_name": "Chikmagalur Pattana Sahakara Bank Niyamitha"
      },
      {
        "id": uuidv4(),
        "code": "CRBX",
        "bank_name": "Central Co-operative Bank Ara"
      },
      {
        "id": uuidv4(),
        "code": "CRES",
        "bank_name": "Credit Suisse AG"
      },
      {
        "id": uuidv4(),
        "code": "CRGB",
        "bank_name": "Chhattisgarh Rajya Gramin Bank"
      },
      {
        "id": uuidv4(),
        "code": "CRLY",
        "bank_name": "Credit Agricole Corporate and Investment Bank"
      },
      {
        "id": uuidv4(),
        "code": "CRSX",
        "bank_name": "Chhattisgarh Rajya Sahakari Bank Mydt"
      },
      {
        "id": uuidv4(),
        "code": "CRUB",
        "bank_name": "Shri Chhatrapati Rajashri Shahu Urban Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "CSBK",
        "bank_name": "Catholic Syrian Bank"
      },
      {
        "id": uuidv4(),
        "code": "CSBX",
        "bank_name": "Chartered Sahakari Bank Niyamitha"
      },
      {
        "id": uuidv4(),
        "code": "CTBA",
        "bank_name": "Commonwealth Bank of Australia"
      },
      {
        "id": uuidv4(),
        "code": "CTBX",
        "bank_name": "Citizens Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "CTCB",
        "bank_name": "Chinatrust Commercial Bank"
      },
      {
        "id": uuidv4(),
        "code": "CTOX",
        "bank_name": "Central Co-operative Bank Tonk"
      },
      {
        "id": uuidv4(),
        "code": "CTUX",
        "bank_name": "Chittorgarh Urban Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "CUBX",
        "bank_name": "Catholic Co-operative Urban Bank"
      },
      {
        "id": uuidv4(),
        "code": "CUCX",
        "bank_name": "Chiplun Urban Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "CURX",
        "bank_name": "Citizens Urban Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "CUTX",
        "bank_name": "Cuttack Central Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "CZCX",
        "bank_name": "Citizen Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "CZUX",
        "bank_name": "Churu Zila Urban Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "DAAX",
        "bank_name": "Defence Accounts Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "DAHX",
        "bank_name": "Dahod Mercantile Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "DAUX",
        "bank_name": "Dausa Urban Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "DBAX",
        "bank_name": "Dr Babasaheb Ambedkar Sahakari Bank Nasik"
      },
      {
        "id": uuidv4(),
        "code": "DBSS",
        "bank_name": "Development Bank of Singapore"
      },
      {
        "id": uuidv4(),
        "code": "DCBL",
        "bank_name": "DCB Bank"
      },
      {
        "id": uuidv4(),
        "code": "DCBX",
        "bank_name": "Dindigul Central Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "DCCX",
        "bank_name": "District Co-operative Central Bank Mahabubnagar"
      },
      {
        "id": uuidv4(),
        "code": "DCDX",
        "bank_name": "District Central Co-operative Bank Elluru"
      },
      {
        "id": uuidv4(),
        "code": "DCEX",
        "bank_name": "District Central Co-operative Bank Khammam"
      },
      {
        "id": uuidv4(),
        "code": "DCKX",
        "bank_name": "District Co-operative Central Bank Kurnool"
      },
      {
        "id": uuidv4(),
        "code": "DCMX",
        "bank_name": "District Co-operative Bank Mainpuri"
      },
      {
        "id": uuidv4(),
        "code": "DCNX",
        "bank_name": "Deccan Co-operative Urban Bank"
      },
      {
        "id": uuidv4(),
        "code": "DCPX",
        "bank_name": "District Co-operative Bank Pilibhit"
      },
      {
        "id": uuidv4(),
        "code": "DCSX",
        "bank_name": "District Co-operative Bank Shahjahanpur"
      },
      {
        "id": uuidv4(),
        "code": "DCTX",
        "bank_name": "District Co-operative Bank Teliyabagh"
      },
      {
        "id": uuidv4(),
        "code": "DCUB",
        "bank_name": "Darussalam Co-operative Urban Bank"
      },
      {
        "id": uuidv4(),
        "code": "DCUX",
        "bank_name": "Darussalam Co-operative Urban Bank"
      },
      {
        "id": uuidv4(),
        "code": "DDBX",
        "bank_name": "Dharmapuri District Central Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "DDCX",
        "bank_name": "Darjeeling District Central Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "DDDX",
        "bank_name": "Dakshin Dinajpur District Central Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "DDHX",
        "bank_name": "Dehradun District Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "DEGX",
        "bank_name": "Dena Gujarat Gramin Bank"
      },
      {
        "id": uuidv4(),
        "code": "DENS",
        "bank_name": "Delhi Nagrik Sehkari Bank"
      },
      {
        "id": uuidv4(),
        "code": "DEOB",
        "bank_name": "Deogiri Nagari Sahakari Bank Aurangabad"
      },
      {
        "id": uuidv4(),
        "code": "DEOX",
        "bank_name": "Deogiri Sahakari Bank Aurangabad"
      },
      {
        "id": uuidv4(),
        "code": "DEUT",
        "bank_name": "Deutsche Bank"
      },
      {
        "id": uuidv4(),
        "code": "DEUX",
        "bank_name": "Devika Urban Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "DEVX",
        "bank_name": "Development Co-operative Bank Kanpur"
      },
      {
        "id": uuidv4(),
        "code": "DGBX",
        "bank_name": "Telangana Grameena Bank"
      },
      {
        "id": uuidv4(),
        "code": "DHBX",
        "bank_name": "Dhanbad Central Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "DHKX",
        "bank_name": "Dhakuria Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "DHUX",
        "bank_name": "Dahod Urban Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "DIBX",
        "bank_name": "District Co-operative Bank Barabanki"
      },
      {
        "id": uuidv4(),
        "code": "DICG",
        "bank_name": "Deposit Insurance and Credit Guarantee Corporation"
      },
      {
        "id": uuidv4(),
        "code": "DICX",
        "bank_name": "District Co-operative Central Bank Visakhapatnam"
      },
      {
        "id": uuidv4(),
        "code": "DISX",
        "bank_name": "District Co-operative Bank, Sitapur"
      },
      {
        "id": uuidv4(),
        "code": "DIUX",
        "bank_name": "Dilip Urban Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "DJCX",
        "bank_name": "Deoghar Jamtara Central Co-operative Bank Deoghar"
      },
      {
        "id": uuidv4(),
        "code": "DKCL",
        "bank_name": "Deoria Kasia District Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "DKSX",
        "bank_name": "Dausa Kendriya Bank"
      },
      {
        "id": uuidv4(),
        "code": "DLSC",
        "bank_name": "Delhi State Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "DLXB",
        "bank_name": "Dhanlaxmi Bank"
      },
      {
        "id": uuidv4(),
        "code": "DMCB",
        "bank_name": "Deccan Merchants Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "DMCX",
        "bank_name": "Durgapur Mahila Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "DMKB",
        "bank_name": "Dattatraya Maharaj Kalambe Jaoli Sahakari Bank"
      },
      {
        "id": uuidv4(),
        "code": "DMKJ",
        "bank_name": "Dmk Jaoli Bank"
      },
      {
        "id": uuidv4(),
        "code": "DNDC",
        "bank_name": "Dhule And Nandurbar District Central Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "DNSB",
        "bank_name": "Dombivli Nagari Sahakari Bank"
      },
      {
        "id": uuidv4(),
        "code": "DNSX",
        "bank_name": "Deendayal Nagari Sahakari Bank"
      },
      {
        "id": uuidv4(),
        "code": "DOBX",
        "bank_name": "Dapoli Urban Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "DOHB",
        "bank_name": "Doha Bank QSC"
      },
      {
        "id": uuidv4(),
        "code": "DRGX",
        "bank_name": "Durg Rajnandgaon Gramin Bank"
      },
      {
        "id": uuidv4(),
        "code": "DSAX",
        "bank_name": "District Central Co-operative Bank, Supaul"
      },
      {
        "id": uuidv4(),
        "code": "DSBX",
        "bank_name": "Daivadnya Sahakara Bank Niyamit"
      },
      {
        "id": uuidv4(),
        "code": "DSCB",
        "bank_name": "Delhi State Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "DSHX",
        "bank_name": "District Co-operative Bank Saharanpur"
      },
      {
        "id": uuidv4(),
        "code": "DSPX",
        "bank_name": "Durgapur Steel Peoples' Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "DSUX",
        "bank_name": "Dharamvir Sambhaji Urban Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "DTCX",
        "bank_name": "District Co-operative Bank Rae Bareli"
      },
      {
        "id": uuidv4(),
        "code": "DTPX",
        "bank_name": "District Co-operative Bank Pratapgarh"
      },
      {
        "id": uuidv4(),
        "code": "DUCX",
        "bank_name": "Daund Urban Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "DUMX",
        "bank_name": "Dumka Central Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "DUNX",
        "bank_name": "Dungarpur Central Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "DURG",
        "bank_name": "Durgapur Steel Peoples Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "DVDX",
        "bank_name": "Davanagere District Central Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "DYPX",
        "bank_name": "D.y.patil Sahakari Bank Kolhapur"
      },
      {
        "id": uuidv4(),
        "code": "EBIL",
        "bank_name": "Emirates NBD Bank"
      },
      {
        "id": uuidv4(),
        "code": "ECBL",
        "bank_name": "Excellent Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "EDBX",
        "bank_name": "Ellaquai Dehati Bank"
      },
      {
        "id": uuidv4(),
        "code": "EDCX",
        "bank_name": "Erode District Central Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "EDSX",
        "bank_name": "Ernakulam District Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "EIBI",
        "bank_name": "Export Import Bank of India"
      },
      {
        "id": uuidv4(),
        "code": "ESAF",
        "bank_name": "ESAF Small Finance Bank"
      },
      {
        "id": uuidv4(),
        "code": "ESFB",
        "bank_name": "Equitas Small Finance Bank"
      },
      {
        "id": uuidv4(),
        "code": "ESMF",
        "bank_name": "Esaf Small Finance Bank"
      },
      {
        "id": uuidv4(),
        "code": "ETCX",
        "bank_name": "Etawah District Co-operative Bank Etwah"
      },
      {
        "id": uuidv4(),
        "code": "ETDX",
        "bank_name": "Etah District Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "EUCX",
        "bank_name": "Etah Urban Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "EWCX",
        "bank_name": "Etawah Urban Co-operative Bank Etawah"
      },
      {
        "id": uuidv4(),
        "code": "FCBX",
        "bank_name": "Fazilka Central Co-operative. Bank"
      },
      {
        "id": uuidv4(),
        "code": "FCCX",
        "bank_name": "Faridkot Central Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "FCOX",
        "bank_name": "District Co-operative Bank Faizabad"
      },
      {
        "id": uuidv4(),
        "code": "FDFX",
        "bank_name": "Farrukhabad District Co-operative Bank Fatehgarh"
      },
      {
        "id": uuidv4(),
        "code": "FDRL",
        "bank_name": "Federal Bank"
      },
      {
        "id": uuidv4(),
        "code": "FEKX",
        "bank_name": "Feroke Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "FGCB",
        "bank_name": "Fingrowth Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "FINF",
        "bank_name": "Fincare Small Finance Bank "
      },
      {
        "id": uuidv4(),
        "code": "FINO",
        "bank_name": "Fino Payments Bank"
      },
      {
        "id": uuidv4(),
        "code": "FINX",
        "bank_name": "Financial Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "FIRN",
        "bank_name": "Firstrand Bank"
      },
      {
        "id": uuidv4(),
        "code": "FIRX",
        "bank_name": "Firstrand Bank"
      },
      {
        "id": uuidv4(),
        "code": "FMCX",
        "bank_name": "Faiz Mercantile Co-operative Bank, Nasik"
      },
      {
        "id": uuidv4(),
        "code": "FRIX",
        "bank_name": "Faridabad Central Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "FSCX",
        "bank_name": "Fatehgrah Sahib Central Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "FSFB",
        "bank_name": "Fincare Small Finance Bank"
      },
      {
        "id": uuidv4(),
        "code": "FZCX",
        "bank_name": "Ferozepur Central Co-operative. Bank"
      },
      {
        "id": uuidv4(),
        "code": "FZSX",
        "bank_name": "Firozabad Zila d Bank"
      },
      {
        "id": uuidv4(),
        "code": "GACX",
        "bank_name": "Gujarat Ambuja Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "GADX",
        "bank_name": "Gadhinglaj Urban Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "GAMX",
        "bank_name": "Ganga Mercantile Urban Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "GANX",
        "bank_name": "Gandhidham Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "GBCB",
        "bank_name": "Greater Bombay Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "GCBX",
        "bank_name": "Guruvayur Co-operative Urban Bank"
      },
      {
        "id": uuidv4(),
        "code": "GCCX",
        "bank_name": "Gurdaspur Central Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "GCUL",
        "bank_name": "Gauhati Co-operative Urban Bank"
      },
      {
        "id": uuidv4(),
        "code": "GCUX",
        "bank_name": "Gayatri Co-operative Urban Bank"
      },
      {
        "id": uuidv4(),
        "code": "GDCB",
        "bank_name": "Gadchiroli District Central Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "GDCX",
        "bank_name": "Guntur District Co-operative Central Bank"
      },
      {
        "id": uuidv4(),
        "code": "GDDX",
        "bank_name": "Giridih Central Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "GDUX",
        "bank_name": "Godhra Urban Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "GGBK",
        "bank_name": "Gurgaon Gramin Bank"
      },
      {
        "id": uuidv4(),
        "code": "GGCX",
        "bank_name": "Gopalganj Central Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "GHPX",
        "bank_name": "Ghatal Peoples' Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "GKNX",
        "bank_name": "Ganganagar Kendriya Sahakari Bank"
      },
      {
        "id": uuidv4(),
        "code": "GMBX",
        "bank_name": "Gandhidham Mercantile Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "GMCX",
        "bank_name": "Gujarat Mercantile Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "GMUX",
        "bank_name": "Gulshan Mercantile Urban Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "GNCX",
        "bank_name": "Gandhi Co-operative Urban Bank"
      },
      {
        "id": uuidv4(),
        "code": "GNSX",
        "bank_name": "Gozaria Nagrik Sahakari Bank"
      },
      {
        "id": uuidv4(),
        "code": "GODX",
        "bank_name": "Godavari Urban Co-operative Bank Nashik"
      },
      {
        "id": uuidv4(),
        "code": "GOSX",
        "bank_name": "Gondal Nagarik Sahakari Bank"
      },
      {
        "id": uuidv4(),
        "code": "GPCX",
        "bank_name": "Gandevi People's Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "GPOX",
        "bank_name": "General Post Office"
      },
      {
        "id": uuidv4(),
        "code": "GRAX",
        "bank_name": "Grain Merchants' Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "GSBL",
        "bank_name": "Goa State Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "GSBX",
        "bank_name": "Gandhibag Sahakari Bank  Nagpur"
      },
      {
        "id": uuidv4(),
        "code": "GSCB",
        "bank_name": "Gujarat State Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "GSCX",
        "bank_name": "Gumla Simdega Central Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "GSSX",
        "bank_name": "Guardian Souharda Sahakari Bank Niyamita"
      },
      {
        "id": uuidv4(),
        "code": "GTCX",
        "bank_name": "George Town Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "GUBX",
        "bank_name": "Godavari Urban Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "GUCX",
        "bank_name": "Goa Urban Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "GUNX",
        "bank_name": "Guntur Co-operative Urban Bank"
      },
      {
        "id": uuidv4(),
        "code": "GUOX",
        "bank_name": "Gurgaon Central Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "HAMX",
        "bank_name": "Hamirpur District Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "HANX",
        "bank_name": "Hanumangarh Kendriya Sahakari Bank"
      },
      {
        "id": uuidv4(),
        "code": "HARC",
        "bank_name": "Haryana State Co-operative Apex Bank"
      },
      {
        "id": uuidv4(),
        "code": "HCBL",
        "bank_name": "HASTI Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "HCBX",
        "bank_name": "Hasti Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "HCCX",
        "bank_name": "Hazaribag Central Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "HCLX",
        "bank_name": "HCBL Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "HDCL",
        "bank_name": "Hardoi District Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "HDCX",
        "bank_name": "Hyderabad District Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "HDFC",
        "bank_name": "HDFC Bank"
      },
      {
        "id": uuidv4(),
        "code": "HGBX",
        "bank_name": "Sarva Haryana Gramin Bank"
      },
      {
        "id": uuidv4(),
        "code": "HINX",
        "bank_name": "Hindu Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "HISX",
        "bank_name": "Hisar Central Co-operative Bank Hisar"
      },
      {
        "id": uuidv4(),
        "code": "HMBX",
        "bank_name": "Himachal Pradesh Gramin Bank"
      },
      {
        "id": uuidv4(),
        "code": "HMNX",
        "bank_name": "Himatnagar Nagarik Sahakari Bank"
      },
      {
        "id": uuidv4(),
        "code": "HOCX",
        "bank_name": "Hoshiarpur Central Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "HOOX",
        "bank_name": "Hooghly District Central Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "HPCX",
        "bank_name": "Shree Parswanath Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "HPSC",
        "bank_name": "Himachal Pradesh State Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "HPSX",
        "bank_name": "Himachal Pradesh State Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "HSBC",
        "bank_name": "Hongkong & Shanghai Banking Corporation"
      },
      {
        "id": uuidv4(),
        "code": "HSBM",
        "bank_name": "Haveli Sahakari Bank"
      },
      {
        "id": uuidv4(),
        "code": "HSBX",
        "bank_name": "Harihareshwar Sahakari Bank"
      },
      {
        "id": uuidv4(),
        "code": "HSCX",
        "bank_name": "Haryana State Co-operative Apex Bank"
      },
      {
        "id": uuidv4(),
        "code": "HSDX",
        "bank_name": "Hassan District Co-operative Central Bank"
      },
      {
        "id": uuidv4(),
        "code": "HSSX",
        "bank_name": "Hindustan Shipyard Staff Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "HUBX",
        "bank_name": "Hubli Urban Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "HUCB",
        "bank_name": "Hadagali Urban Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "HUCH",
        "bank_name": "Hanamasagar Urban Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "HUCX",
        "bank_name": "Hissar Urban Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "HUSB",
        "bank_name": "Hutatma Sahakari Bank"
      },
      {
        "id": uuidv4(),
        "code": "HUTX",
        "bank_name": "Hutatma Sahakari Bank"
      },
      {
        "id": uuidv4(),
        "code": "HVBK",
        "bank_name": "Woori Bank"
      },
      {
        "id": uuidv4(),
        "code": "IBBK",
        "bank_name": "PT Bank Maybank Indonesia TBK"
      },
      {
        "id": uuidv4(),
        "code": "IBKL",
        "bank_name": "IDBI"
      },
      {
        "id": uuidv4(),
        "code": "IBKO",
        "bank_name": "Industrial Bank of Korea"
      },
      {
        "id": uuidv4(),
        "code": "ICBK",
        "bank_name": "Industrial and Commercial Bank of China"
      },
      {
        "id": uuidv4(),
        "code": "ICBL",
        "bank_name": "Industrial Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "ICHX",
        "bank_name": "Ichalkaranji Merchants Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "ICIC",
        "bank_name": "ICICI Bank"
      },
      {
        "id": uuidv4(),
        "code": "ICLL",
        "bank_name": "Indian Clearing Corporation"
      },
      {
        "id": uuidv4(),
        "code": "ICMX",
        "bank_name": "Indore Cloth Market Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "IDFB",
        "bank_name": "IDFC FIRST Bank"
      },
      {
        "id": uuidv4(),
        "code": "IDIB",
        "bank_name": "Indian Bank"
      },
      {
        "id": uuidv4(),
        "code": "IDUK",
        "bank_name": "Idukki District Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "IDUX",
        "bank_name": "Idukki District Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "ILCB",
        "bank_name": "Ilkal Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "IMCX",
        "bank_name": "Imperial Urban Co-operative Bank Jalandhar"
      },
      {
        "id": uuidv4(),
        "code": "IMPX",
        "bank_name": "Imphal Urban Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "INCX",
        "bank_name": "Indapur Urban Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "INDB",
        "bank_name": "Indusind Bank"
      },
      {
        "id": uuidv4(),
        "code": "INDX",
        "bank_name": "Independence Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "IOBA",
        "bank_name": "Indian Overseas Bank"
      },
      {
        "id": uuidv4(),
        "code": "IPCX",
        "bank_name": "Indore Premier Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "IPOS",
        "bank_name": "India Post Payments Bank"
      },
      {
        "id": uuidv4(),
        "code": "IPPB",
        "bank_name": "India Post Payments Bank"
      },
      {
        "id": uuidv4(),
        "code": "IPSX",
        "bank_name": "Indore Paraspar Sahakari Bank"
      },
      {
        "id": uuidv4(),
        "code": "ISBX",
        "bank_name": "Indraprastha Sehkari Bank"
      },
      {
        "id": uuidv4(),
        "code": "ISMX",
        "bank_name": "Indore Swayam Mahila Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "ITBL",
        "bank_name": "Irinjalakuda Town Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "ITCX",
        "bank_name": "Irinjalakuda Town Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "ITDX",
        "bank_name": "Income Tax Dept Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "IUCB",
        "bank_name": "Integral Urban Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "IUCX",
        "bank_name": "Imperial Urban Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "IXXX",
        "bank_name": "Indrayani Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "JACX",
        "bank_name": "Jain Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "JAKA",
        "bank_name": "Jammu and Kashmir Bank"
      },
      {
        "id": uuidv4(),
        "code": "JALX",
        "bank_name": "Janalaxmi Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "JAMX",
        "bank_name": "Jamia Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "JANA",
        "bank_name": "Janaseva Sahakari Bank, Pune"
      },
      {
        "id": uuidv4(),
        "code": "JANX",
        "bank_name": "Janata Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "JASB",
        "bank_name": "Janaseva Sahakari Bank (Borivli)"
      },
      {
        "id": uuidv4(),
        "code": "JASX",
        "bank_name": "Janatha Seva Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "JAUX",
        "bank_name": "Jaihind Urban Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "JBHX",
        "bank_name": "Jila Sahakari Kendriya Bank Maryadit Bhind"
      },
      {
        "id": uuidv4(),
        "code": "JBIX",
        "bank_name": "Jila d Kendriya Bank Maryadit Bilaspur"
      },
      {
        "id": uuidv4(),
        "code": "JBMX",
        "bank_name": "Jila Sahakari Kendriya Bank Maryadit Sagar"
      },
      {
        "id": uuidv4(),
        "code": "JCBX",
        "bank_name": "Janata Co-operative Bank Malegaon."
      },
      {
        "id": uuidv4(),
        "code": "JCCB",
        "bank_name": "Jaipur Central Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "JCCX",
        "bank_name": "Jalandhar Central Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "JCDX",
        "bank_name": "Jamnagar District Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "JCHX",
        "bank_name": "Jila Sahakari Kendriya Bank Mydt Chhatarpur"
      },
      {
        "id": uuidv4(),
        "code": "JCPX",
        "bank_name": "Janata Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "JCUX",
        "bank_name": "Jagruti Co-operative Urban Bank"
      },
      {
        "id": uuidv4(),
        "code": "JDCX",
        "bank_name": "Jalaun District Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "JDEX",
        "bank_name": "Jila Sahakari Kendriya Bank Mydtt Dewas"
      },
      {
        "id": uuidv4(),
        "code": "JGBX",
        "bank_name": "Jharkand Gramin Bank"
      },
      {
        "id": uuidv4(),
        "code": "JGCX",
        "bank_name": "Jogindra Central Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "JGWX",
        "bank_name": "Jila Sahakari Bank Mydt. Gwalior"
      },
      {
        "id": uuidv4(),
        "code": "JHAX",
        "bank_name": "Jharneshwar Nagrik Sahakari Bank Maryadit"
      },
      {
        "id": uuidv4(),
        "code": "JHSX",
        "bank_name": "Jila Sahakari Kendriya Bank Mydt Hoshangabad"
      },
      {
        "id": uuidv4(),
        "code": "JHUX",
        "bank_name": "Jhunjhunu Kenddriya Sahakari Bak"
      },
      {
        "id": uuidv4(),
        "code": "JIBX",
        "bank_name": "Jila Sahakari Kendriya Bank Maryadit Balaghat"
      },
      {
        "id": uuidv4(),
        "code": "JICX",
        "bank_name": "Jila Sahakari Kendriya Bank Maryadit Chhindwara"
      },
      {
        "id": uuidv4(),
        "code": "JIDX",
        "bank_name": "Jila d Kendriya Bank Mydt Damoh"
      },
      {
        "id": uuidv4(),
        "code": "JIGX",
        "bank_name": "Jila Sahakari Kendriya Bank Mydt Guna"
      },
      {
        "id": uuidv4(),
        "code": "JIKX",
        "bank_name": "Jila Sahakari Kendariya Bank Mydt Khandwa"
      },
      {
        "id": uuidv4(),
        "code": "JIMX",
        "bank_name": "Jila Sahakari Kendriya Bank Mydt Mandla"
      },
      {
        "id": uuidv4(),
        "code": "JINX",
        "bank_name": "Jind Central Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "JIOP",
        "bank_name": "Jio Payments Bank"
      },
      {
        "id": uuidv4(),
        "code": "JIOX",
        "bank_name": "Jila Sahakari Kendriya Bank Mydt Shahdol"
      },
      {
        "id": uuidv4(),
        "code": "JIRX",
        "bank_name": "Jila Sahakari Kendriya Bank Maryadit Rajgarh"
      },
      {
        "id": uuidv4(),
        "code": "JISX",
        "bank_name": "Jila Sahakari Kendriya Bank Maryadit Sidhi"
      },
      {
        "id": uuidv4(),
        "code": "JIVX",
        "bank_name": "Jivaji Sahakari Bank  Ichalkaranji"
      },
      {
        "id": uuidv4(),
        "code": "JJCX",
        "bank_name": "Jhajjar Central Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "JJHX",
        "bank_name": "Jila d Kendriya Bank Mydt Jhabua"
      },
      {
        "id": uuidv4(),
        "code": "JJSB",
        "bank_name": "Jalgaon Janata Bank"
      },
      {
        "id": uuidv4(),
        "code": "JKAX",
        "bank_name": "Jila Sahakari Kendriya Bank Mydt Ambikapur"
      },
      {
        "id": uuidv4(),
        "code": "JKCX",
        "bank_name": "Janakalyan Co-operative Bank Nashik"
      },
      {
        "id": uuidv4(),
        "code": "JKDX",
        "bank_name": "Jila Sahakari Kendriya Bank Mydt. Jabalpur"
      },
      {
        "id": uuidv4(),
        "code": "JKEX",
        "bank_name": "Jhalawar Kendriya Bank"
      },
      {
        "id": uuidv4(),
        "code": "JKHX",
        "bank_name": "Jila Kendriya Bank Maryadit Khargone"
      },
      {
        "id": uuidv4(),
        "code": "JKMX",
        "bank_name": "Jila Sahakari Kendriya Bank Maryadit Jagdalpur"
      },
      {
        "id": uuidv4(),
        "code": "JKRX",
        "bank_name": "Jilla Sahakari Kendriya Bank Mydt Raisen"
      },
      {
        "id": uuidv4(),
        "code": "JKSX",
        "bank_name": "J&k State Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "JLCX",
        "bank_name": "Jalore Central Co-operative Bank Jalore"
      },
      {
        "id": uuidv4(),
        "code": "JLDX",
        "bank_name": "Jalna District Central Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "JLNX",
        "bank_name": "Jalna Peoples Co-operative Bank Jalna"
      },
      {
        "id": uuidv4(),
        "code": "JLSX",
        "bank_name": "Jila Sahakari Kendriya Bank Mydt Vidisha"
      },
      {
        "id": uuidv4(),
        "code": "JLWX",
        "bank_name": "Jhalawar Nagrik Sahakari Bank"
      },
      {
        "id": uuidv4(),
        "code": "JMAX",
        "bank_name": "Jila Sahakari Kendriya Bank Mydt Mandsaur"
      },
      {
        "id": uuidv4(),
        "code": "JMBX",
        "bank_name": "Jila Sahakari Kendriya Bank Maryadit Betul"
      },
      {
        "id": uuidv4(),
        "code": "JMCX",
        "bank_name": "Jalna Merchants Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "JMDX",
        "bank_name": "Jila d Kendriya Bank Mydt Datia"
      },
      {
        "id": uuidv4(),
        "code": "JMHX",
        "bank_name": "Jamshedpur Urban Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "JMMX",
        "bank_name": "Jammu Central Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "JMOX",
        "bank_name": "Jila Sahakari Kendriya Bank Mydt Morena"
      },
      {
        "id": uuidv4(),
        "code": "JMPX",
        "bank_name": "Jamnagar Peoples Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "JMSX",
        "bank_name": "Jijamata Mahila Sahakari Bank"
      },
      {
        "id": uuidv4(),
        "code": "JMYX",
        "bank_name": "Jila Sahakari Kendriya Bank Mydt Durg"
      },
      {
        "id": uuidv4(),
        "code": "JNAX",
        "bank_name": "Jila Sahakari Kendriya Bank Mydt Narsinghpur"
      },
      {
        "id": uuidv4(),
        "code": "JNDX",
        "bank_name": "Junagadh Jilla Sahakari Bank"
      },
      {
        "id": uuidv4(),
        "code": "JNSX",
        "bank_name": "Janseva Nagari Sahakari Bank Marydit"
      },
      {
        "id": uuidv4(),
        "code": "JODX",
        "bank_name": "Jodhpur Central Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "JONX",
        "bank_name": "Jodhpur Nagrik Sahakari Bank"
      },
      {
        "id": uuidv4(),
        "code": "JOWX",
        "bank_name": "Jowai Co-operative Urban Bank"
      },
      {
        "id": uuidv4(),
        "code": "JPAX",
        "bank_name": "Jila Sahakari Kendriya Bank Mydt Panna"
      },
      {
        "id": uuidv4(),
        "code": "JPCB",
        "bank_name": "Jalgaon Peoples Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "JPCX",
        "bank_name": "Jalpaiguri Central Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "JRAX",
        "bank_name": "Jila Sahakari Kendriya Bank Mydt Ratlam"
      },
      {
        "id": uuidv4(),
        "code": "JRKX",
        "bank_name": "Jila Sahakari Kendriya Bank Mydt Ujjain"
      },
      {
        "id": uuidv4(),
        "code": "JRNX",
        "bank_name": "Jila Sahakari Kendriya Bank Maryadit Rajnandgaon"
      },
      {
        "id": uuidv4(),
        "code": "JRSX",
        "bank_name": "Jalore Nagrik Sahakari Bank"
      },
      {
        "id": uuidv4(),
        "code": "JSAB",
        "bank_name": "Jain Sahakari Bank"
      },
      {
        "id": uuidv4(),
        "code": "JSAX",
        "bank_name": "Janata Sahakari Bank Ajara"
      },
      {
        "id": uuidv4(),
        "code": "JSBL",
        "bank_name": "Janakalyan Sahakari Bank"
      },
      {
        "id": uuidv4(),
        "code": "JSBP",
        "bank_name": "Janata Sahakari Bank (Pune)"
      },
      {
        "id": uuidv4(),
        "code": "JSBX",
        "bank_name": "Janaseva Co-operative Bank (Nashik)"
      },
      {
        "id": uuidv4(),
        "code": "JSCX",
        "bank_name": "Jharkhand State Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "JSDX",
        "bank_name": "Jila Sahakari Kendriya Bank Mydt Dhar"
      },
      {
        "id": uuidv4(),
        "code": "JSEX",
        "bank_name": "Jila Sahakari Kendriya Bank Mydt Sehore"
      },
      {
        "id": uuidv4(),
        "code": "JSFB",
        "bank_name": "Jana Small Finance Bank"
      },
      {
        "id": uuidv4(),
        "code": "JSHX",
        "bank_name": "Jila Sahakari Kendriya Bank Mydt Shajapur"
      },
      {
        "id": uuidv4(),
        "code": "JSKX",
        "bank_name": "Jila Sahakari Kendriya Bank Maryadit Raipur"
      },
      {
        "id": uuidv4(),
        "code": "JSMX",
        "bank_name": "Janata Sahakari Bank Amravati"
      },
      {
        "id": uuidv4(),
        "code": "JSOX",
        "bank_name": "Jila Sahakari Kendriya Bank Myt Seoni"
      },
      {
        "id": uuidv4(),
        "code": "JSRX",
        "bank_name": "Jila Sahakari Kendriya Bank Mydt Rewa"
      },
      {
        "id": uuidv4(),
        "code": "JSTX",
        "bank_name": "Jila Sahakari Kendriya Bank Mydt Satna"
      },
      {
        "id": uuidv4(),
        "code": "JSVX",
        "bank_name": "Jila Sahakari Kendriya Bank Maryadit Shivpuri"
      },
      {
        "id": uuidv4(),
        "code": "JSWX",
        "bank_name": "Jansewa Urban Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "JTIX",
        "bank_name": "Jila Sahakari Kendriya Bank Mydt Tikamgarh"
      },
      {
        "id": uuidv4(),
        "code": "JTSC",
        "bank_name": "Janatha Seva Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "JTSX",
        "bank_name": "Jugalkishor Tapdiya Shree Mahesh Ucb Aurangabadltd"
      },
      {
        "id": uuidv4(),
        "code": "JUCX",
        "bank_name": "Junagadh Commercial Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "JUSX",
        "bank_name": "Jaysingpur Udgaon Sahakari Bank Jaysingpur"
      },
      {
        "id": uuidv4(),
        "code": "JVCX",
        "bank_name": "Jivan Commercial Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "JXXX",
        "bank_name": "Jampeta Co-Operative Urban Bank"
      },
      {
        "id": uuidv4(),
        "code": "KAAX",
        "bank_name": "Kadappa District Co-operative Central Bank"
      },
      {
        "id": uuidv4(),
        "code": "KACE",
        "bank_name": "Kangra Central Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "KACX",
        "bank_name": "Kachchh District Central Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "KADX",
        "bank_name": "Kasaragod District Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "KAGX",
        "bank_name": "Kagal Co-operative Bank Kagal"
      },
      {
        "id": uuidv4(),
        "code": "KAIJ",
        "bank_name": "Kallappanna Awade Ichalkaranji Janata Sahakari Bank"
      },
      {
        "id": uuidv4(),
        "code": "KALX",
        "bank_name": "Kalna Town Credit Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "KAMX",
        "bank_name": "Kamala Co-operative Bank Solapur"
      },
      {
        "id": uuidv4(),
        "code": "KANG",
        "bank_name": "Kangra Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "KANX",
        "bank_name": "Kanara District Central Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "KARB",
        "bank_name": "Karnataka Bank"
      },
      {
        "id": uuidv4(),
        "code": "KARX",
        "bank_name": "Kaira District Central Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "KASX",
        "bank_name": "Kashmir Mercantile Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "KATX",
        "bank_name": "Kattappana Urban Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "KAYX",
        "bank_name": "Kanyakumari District Central Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "KBCX",
        "bank_name": "Kanakamahalakshmi Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "KBHB",
        "bank_name": "KEB Hana Bank"
      },
      {
        "id": uuidv4(),
        "code": "KBKB",
        "bank_name": "Kookmin Bank"
      },
      {
        "id": uuidv4(),
        "code": "KBNX",
        "bank_name": "Khambhat Nagarik Sahakari Bank"
      },
      {
        "id": uuidv4(),
        "code": "KBSX",
        "bank_name": "Krishna Bhima Samruddhi Local Area Bank"
      },
      {
        "id": uuidv4(),
        "code": "KCBL",
        "bank_name": "Kapol Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "KCBX",
        "bank_name": "Kutch Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "KCCB",
        "bank_name": "Kalupur Commercial Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "KCCX",
        "bank_name": "Kancheepuram Central Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "KCDX",
        "bank_name": "Karnatak Central Co-operative Bank Dharwad"
      },
      {
        "id": uuidv4(),
        "code": "KCEX",
        "bank_name": "Kota Central Co-operative Bank Kota"
      },
      {
        "id": uuidv4(),
        "code": "KCOB",
        "bank_name": "Kangra Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "KCUB",
        "bank_name": "Khattri Co-operative Urban Bank"
      },
      {
        "id": uuidv4(),
        "code": "KCUX",
        "bank_name": "Kannur Co-operative Urban Bank"
      },
      {
        "id": uuidv4(),
        "code": "KDBX",
        "bank_name": "Karimnagar District Co-operative Central Bank"
      },
      {
        "id": uuidv4(),
        "code": "KDCB",
        "bank_name": "Kozhikode District Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "KDCX",
        "bank_name": "Kozhikode District Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "KDIX",
        "bank_name": "Shree Kadi Nagarik Sahakari Bank"
      },
      {
        "id": uuidv4(),
        "code": "KDNX",
        "bank_name": "Kodinar Nagrik Sahakari Bank"
      },
      {
        "id": uuidv4(),
        "code": "KDUX",
        "bank_name": "Kodagu District Co-operative Central Bank"
      },
      {
        "id": uuidv4(),
        "code": "KEJX",
        "bank_name": "Keonjhar Central Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "KEMX",
        "bank_name": "Kerala Mercantile Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "KESX",
        "bank_name": "Keshav Sehkari Bank"
      },
      {
        "id": uuidv4(),
        "code": "KGBX",
        "bank_name": "Kaveri Grameena Bank"
      },
      {
        "id": uuidv4(),
        "code": "KGDX",
        "bank_name": "Khagaria District Central Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "KGRB",
        "bank_name": "Kaveri Grameena Bank"
      },
      {
        "id": uuidv4(),
        "code": "KGSX",
        "bank_name": "Kashi Gomti Samyut Gramin Bank"
      },
      {
        "id": uuidv4(),
        "code": "KHAX",
        "bank_name": "Khalilabad Nagar d Bank"
      },
      {
        "id": uuidv4(),
        "code": "KHCX",
        "bank_name": "Khardah Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "KHDX",
        "bank_name": "Kheda People's Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "KHNX",
        "bank_name": "Kohinoor Sahakari Bank Ichalkaranji"
      },
      {
        "id": uuidv4(),
        "code": "KHTX",
        "bank_name": "Khurda Central Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "KHUX",
        "bank_name": "Khamgaon Urban Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "KICX",
        "bank_name": "Kaithal Central Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "KJSB",
        "bank_name": "Kalyan Janata Sahakari Bank"
      },
      {
        "id": uuidv4(),
        "code": "KJSX",
        "bank_name": "Karad Janata Sahakari Bank"
      },
      {
        "id": uuidv4(),
        "code": "KKBK",
        "bank_name": "Kotak Mahindra Bank"
      },
      {
        "id": uuidv4(),
        "code": "KKMX",
        "bank_name": "Kankaria Mainagar Nagrik Sahakari Bank"
      },
      {
        "id": uuidv4(),
        "code": "KKSX",
        "bank_name": "Kumbhi Kasari Bank Kuditre"
      },
      {
        "id": uuidv4(),
        "code": "KLGB",
        "bank_name": "Kerala Gramin Bank"
      },
      {
        "id": uuidv4(),
        "code": "KLMX",
        "bank_name": "Kollam District Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "KMCB",
        "bank_name": "Kokan Mercantile Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "KMCX",
        "bank_name": "Krishna Mercantile Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "KMNX",
        "bank_name": "Kota Mahila Nagrik Sahakari Bank"
      },
      {
        "id": uuidv4(),
        "code": "KMSX",
        "bank_name": "Kolhapur Mahila Sahakari Bank"
      },
      {
        "id": uuidv4(),
        "code": "KNBX",
        "bank_name": "Kalol Nagarik Sahakari Bank"
      },
      {
        "id": uuidv4(),
        "code": "KNCX",
        "bank_name": "Karnal Central Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "KNNX",
        "bank_name": "Sri Kannikaparameswari Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "KNPX",
        "bank_name": "Karnala Nagari Sahakari Bank Panvel"
      },
      {
        "id": uuidv4(),
        "code": "KNSB",
        "bank_name": "Kurla Nagarik Sahakari Bank"
      },
      {
        "id": uuidv4(),
        "code": "KNSX",
        "bank_name": "Kisan Nagari Sahakari Bank Maryadit Parbhani"
      },
      {
        "id": uuidv4(),
        "code": "KOBX",
        "bank_name": "Kopargaon Peoples Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "KOCX",
        "bank_name": "Konoklota Mahila Urban Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "KODX",
        "bank_name": "Kodungallur Town Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "KOEX",
        "bank_name": "KEB Hana Bank"
      },
      {
        "id": uuidv4(),
        "code": "KOLH",
        "bank_name": "Kolhapur Urban Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "KORX",
        "bank_name": "Koraput Central Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "KOSX",
        "bank_name": "Kota Nagrik d Bank Kota"
      },
      {
        "id": uuidv4(),
        "code": "KOTX",
        "bank_name": "Kodinar Taluka Co-operative Banking Union"
      },
      {
        "id": uuidv4(),
        "code": "KOYX",
        "bank_name": "Koylanchal Urban Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "KPCX",
        "bank_name": "Kolhapur District Central Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "KRCX",
        "bank_name": "Kolar And Chickballapur Dt Co-operative Central Bank"
      },
      {
        "id": uuidv4(),
        "code": "KRDX",
        "bank_name": "Krishna District Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "KRIX",
        "bank_name": "Krishnagar City Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "KRMX",
        "bank_name": "Karamana Co-operative Urban Bank"
      },
      {
        "id": uuidv4(),
        "code": "KRNX",
        "bank_name": "Karnavati Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "KRTH",
        "bank_name": "Krungthai Bank"
      },
      {
        "id": uuidv4(),
        "code": "KRTX",
        "bank_name": "Kranthi Co-operative Urban Bank"
      },
      {
        "id": uuidv4(),
        "code": "KSBK",
        "bank_name": "Kerala State Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "KSBX",
        "bank_name": "Krishna Sahakari Bank Rethare Bk"
      },
      {
        "id": uuidv4(),
        "code": "KSCB",
        "bank_name": "Karnataka State Co-operative Apex Bank"
      },
      {
        "id": uuidv4(),
        "code": "KSCX",
        "bank_name": "Kerala State Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "KSMX",
        "bank_name": "Kosamba Mercantile Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "KSNX",
        "bank_name": "Koteshwara Sahakari Bank Niyamitha"
      },
      {
        "id": uuidv4(),
        "code": "KSTX",
        "bank_name": "Kasaragod Co-operative Town Bank No 970"
      },
      {
        "id": uuidv4(),
        "code": "KSUX",
        "bank_name": "Kashipur Urban Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "KTBX",
        "bank_name": "Kottayam District Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "KTCX",
        "bank_name": "Kapurthala Central Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "KTDX",
        "bank_name": "Katihar District Central Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "KTTX",
        "bank_name": "Tumkur District Central Bank"
      },
      {
        "id": uuidv4(),
        "code": "KUBX",
        "bank_name": "Kaduthuruthy Urban Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "KUCB",
        "bank_name": "Karad Urban Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "KUCX",
        "bank_name": "Kolhapur Urban Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "KUKX",
        "bank_name": "Kukarwada Nagarik Sahakari Bank"
      },
      {
        "id": uuidv4(),
        "code": "KULX",
        "bank_name": "Kodoli Urban Co-operative Bank Kodoli"
      },
      {
        "id": uuidv4(),
        "code": "KUMX",
        "bank_name": "Kumbakonam Central Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "KUNS",
        "bank_name": "Kurmanchal Nagar Sahakari Bank"
      },
      {
        "id": uuidv4(),
        "code": "KUOB",
        "bank_name": "Konark Urban Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "KURX",
        "bank_name": "Kurukshetra Central Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "KUTX",
        "bank_name": "Kuttiady Co-operative Urban Bank"
      },
      {
        "id": uuidv4(),
        "code": "KVBL",
        "bank_name": "Karur Vysya Bank"
      },
      {
        "id": uuidv4(),
        "code": "KVCX",
        "bank_name": "Kavita Urban Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "KVGB",
        "bank_name": "Karnataka Vikas Grameena Bank"
      },
      {
        "id": uuidv4(),
        "code": "KYDX",
        "bank_name": "Kalaburagi and Yadgir District Co-operative Central Bank"
      },
      {
        "id": uuidv4(),
        "code": "LACX",
        "bank_name": "Laxmi Co-operative Bank Solapur"
      },
      {
        "id": uuidv4(),
        "code": "LATX",
        "bank_name": "Latur Urban Co-operative Bank Latur"
      },
      {
        "id": uuidv4(),
        "code": "LAVB",
        "bank_name": "Laxmi Vilas Bank"
      },
      {
        "id": uuidv4(),
        "code": "LBMX",
        "bank_name": "Laxmibai Mahila Nagrik Sahakari Bank Maradit"
      },
      {
        "id": uuidv4(),
        "code": "LCBX",
        "bank_name": "Lalbaug Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "LCCX",
        "bank_name": "Ludhiana Central Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "LDCX",
        "bank_name": "Latur District Central Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "LDPX",
        "bank_name": "Loknete Dattaji Patil Sahakari Bank"
      },
      {
        "id": uuidv4(),
        "code": "LDRX",
        "bank_name": "Langpi Dehangi Rural Bank"
      },
      {
        "id": uuidv4(),
        "code": "LECX",
        "bank_name": "LIC Employees Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "LICB",
        "bank_name": "Liluah Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "LKBL",
        "bank_name": "Lord Krishna Bank"
      },
      {
        "id": uuidv4(),
        "code": "LKCX",
        "bank_name": "Little Kancheepuram Co-operative Urban Bank"
      },
      {
        "id": uuidv4(),
        "code": "LKHX",
        "bank_name": "Lakhimpur Urban Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "LKMX",
        "bank_name": "Lokmangal Co-operative Bank Solapur"
      },
      {
        "id": uuidv4(),
        "code": "LMNX",
        "bank_name": "Laxmi Mahila Nagrik Sahakari Bank Maryadit"
      },
      {
        "id": uuidv4(),
        "code": "LNSX",
        "bank_name": "Lunawada Nagarik Sahakari Bank"
      },
      {
        "id": uuidv4(),
        "code": "LOKX",
        "bank_name": "Lokvikas Nagari Sahakari Bank Aurangabad"
      },
      {
        "id": uuidv4(),
        "code": "LONX",
        "bank_name": "Lonavala Sahakari Bank"
      },
      {
        "id": uuidv4(),
        "code": "LUCX",
        "bank_name": "Lucknow Urban Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "LULX",
        "bank_name": "Laxmi Urban Co-operative Bank Latur"
      },
      {
        "id": uuidv4(),
        "code": "MABL",
        "bank_name": "Malleshwaram Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "MACX",
        "bank_name": "Mahabhairab Co-operative Urban Bank"
      },
      {
        "id": uuidv4(),
        "code": "MADX",
        "bank_name": "Madhyanchal Gramin Bank"
      },
      {
        "id": uuidv4(),
        "code": "MAGX",
        "bank_name": "Mewar Aanchalik Gramin Bank"
      },
      {
        "id": uuidv4(),
        "code": "MAHB",
        "bank_name": "Bank of Maharashtra"
      },
      {
        "id": uuidv4(),
        "code": "MAHG",
        "bank_name": "Maharashtra Gramin Bank"
      },
      {
        "id": uuidv4(),
        "code": "MAHX",
        "bank_name": "Shree Mahalaxmi Urban Co-operative Credit Bank"
      },
      {
        "id": uuidv4(),
        "code": "MAJX",
        "bank_name": "Manjeri Co-operative Urban Bank"
      },
      {
        "id": uuidv4(),
        "code": "MAKX",
        "bank_name": "Makarpura Industrial Estate Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "MALX",
        "bank_name": "Malviya Urban Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "MAMX",
        "bank_name": "Mandvi Mercantile Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "MANX",
        "bank_name": "Mansa Nagarik Sahakari Bank"
      },
      {
        "id": uuidv4(),
        "code": "MAPX",
        "bank_name": "Maharana Pratap Co-operative Urban Bank"
      },
      {
        "id": uuidv4(),
        "code": "MASX",
        "bank_name": "Mahesh Urban Co-operative Bank Solapur"
      },
      {
        "id": uuidv4(),
        "code": "MAUX",
        "bank_name": "Mantha Urban Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "MAVX",
        "bank_name": "Shree Mahavir Sahakari Bank"
      },
      {
        "id": uuidv4(),
        "code": "MAWX",
        "bank_name": "Manipur Womens Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "MAYX",
        "bank_name": "Mayani Urban Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "MBCX",
        "bank_name": "Mugberia Central Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "MBGX",
        "bank_name": "Dakshin Bihar Gramin Bank"
      },
      {
        "id": uuidv4(),
        "code": "MBLX",
        "bank_name": "Manmandir Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "MCAB",
        "bank_name": "Meghalaya Co-operative Apex Bank"
      },
      {
        "id": uuidv4(),
        "code": "MCAX",
        "bank_name": "Mahesh Urban Co-operative Bank Ahmedpur"
      },
      {
        "id": uuidv4(),
        "code": "MCBL",
        "bank_name": "Mahanagar Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "MCBX",
        "bank_name": "Modern Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "MCCX",
        "bank_name": "Muktsar Central Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "MCDX",
        "bank_name": "Muzaffarnagar District Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "MCLX",
        "bank_name": "Mahendragarh Central Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "MCOX",
        "bank_name": "Mahesh Urban Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "MCSX",
        "bank_name": "Mattancherry Sarvajanik Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "MCUX",
        "bank_name": "Mahaveer Co-operative Urban Bank"
      },
      {
        "id": uuidv4(),
        "code": "MDBK",
        "bank_name": "Model Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "MDCB",
        "bank_name": "Mumbai District Central Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "MDCX",
        "bank_name": "Madurai District Central Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "MDEX",
        "bank_name": "Model Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "MDGX",
        "bank_name": "Rajasthan Marudhara Gramin Bank"
      },
      {
        "id": uuidv4(),
        "code": "MDIX",
        "bank_name": "Mandya District Co-operative Central Bank"
      },
      {
        "id": uuidv4(),
        "code": "MDMX",
        "bank_name": "Mann Deshi Mahila Sahakari Bank"
      },
      {
        "id": uuidv4(),
        "code": "MDPX",
        "bank_name": "Md Pawar Peoples Co-operative Bank Urun Islampur"
      },
      {
        "id": uuidv4(),
        "code": "MEDX",
        "bank_name": "District Co-operative Central Bank"
      },
      {
        "id": uuidv4(),
        "code": "MERX",
        "bank_name": "Meghalaya Rural Bank"
      },
      {
        "id": uuidv4(),
        "code": "MEUX",
        "bank_name": "Meenachil East Urban Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "MFCX",
        "bank_name": "Muzaffarpur Central Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "MFUX",
        "bank_name": "Mahatma Fule Urban Co-operative Bank,amravati"
      },
      {
        "id": uuidv4(),
        "code": "MGBX",
        "bank_name": "Maharashtra Gramin Bank"
      },
      {
        "id": uuidv4(),
        "code": "MGCB",
        "bank_name": "Mogaveera Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "MGCX",
        "bank_name": "Mansing Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "MGDX",
        "bank_name": "Magadh Central Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "MGRB",
        "bank_name": "Malwa Gramin Bank"
      },
      {
        "id": uuidv4(),
        "code": "MGSX",
        "bank_name": "Mangaldai Nagar Samabai Bank"
      },
      {
        "id": uuidv4(),
        "code": "MGUX",
        "bank_name": "Madgaum Urban Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "MHCB",
        "bank_name": "Mizuho Bank"
      },
      {
        "id": uuidv4(),
        "code": "MHCX",
        "bank_name": "Mahoba Urban Co-operative Bank Mahoba"
      },
      {
        "id": uuidv4(),
        "code": "MHEX",
        "bank_name": "Mahamedha Urban Co-operative Bank ( Under Rbi Direction)"
      },
      {
        "id": uuidv4(),
        "code": "MHLX",
        "bank_name": "Mahila Co-operative Bak"
      },
      {
        "id": uuidv4(),
        "code": "MHMX",
        "bank_name": "Shri Mahalaxmi Co-operative Bank Kolhapur"
      },
      {
        "id": uuidv4(),
        "code": "MHNX",
        "bank_name": "Mahanagar Nagrik Sahakari Bank Maryadit"
      },
      {
        "id": uuidv4(),
        "code": "MHSX",
        "bank_name": "Mahesh Sahakari Bank Pune"
      },
      {
        "id": uuidv4(),
        "code": "MHUX",
        "bank_name": "Mahesh Urbank Co-operative Bank Parli V."
      },
      {
        "id": uuidv4(),
        "code": "MIZX",
        "bank_name": "Mizoram Co-operative Apex Bank"
      },
      {
        "id": uuidv4(),
        "code": "MJCX",
        "bank_name": "Monghyr Jamui Central Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "MKPB",
        "bank_name": "Malkapur Urban Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "MKUX",
        "bank_name": "Malkapur Urban Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "MKYX",
        "bank_name": "Marketyard Commercial Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "MLCG",
        "bank_name": "Merchants Liberal Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "MLDX",
        "bank_name": "Malda District Central Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "MMCX",
        "bank_name": "Mattancherry Mahajanik Co-operative Urban Bank"
      },
      {
        "id": uuidv4(),
        "code": "MMMX",
        "bank_name": "Mahila Nagrik Sahakari Bank Maryadit Mahasamund"
      },
      {
        "id": uuidv4(),
        "code": "MNBX",
        "bank_name": "Mahila Co-operative Nagarik Bank,bharuch"
      },
      {
        "id": uuidv4(),
        "code": "MNCX",
        "bank_name": "Mansa Central Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "MNSX",
        "bank_name": "Mehsana Nagarik Sahakari Bank"
      },
      {
        "id": uuidv4(),
        "code": "MOGX",
        "bank_name": "Moga Central Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "MOUX",
        "bank_name": "Mohol Urban Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "MPCX",
        "bank_name": "Moirang Primary Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "MPDX",
        "bank_name": "Malappuram District Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "MPRX",
        "bank_name": "Madhya Pradesh Rajya Sahakari Bank Maryadit"
      },
      {
        "id": uuidv4(),
        "code": "MRBX",
        "bank_name": "Manipur Rural Bank"
      },
      {
        "id": uuidv4(),
        "code": "MRTX",
        "bank_name": "Maratha Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "MSAX",
        "bank_name": "Mansarovar Urban Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "MSBL",
        "bank_name": "Malad Sahakari Bank"
      },
      {
        "id": uuidv4(),
        "code": "MSBX",
        "bank_name": "M.s.Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "MSCI",
        "bank_name": "Maharashtra State Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "MSCX",
        "bank_name": "Manipur State Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "MSHQ",
        "bank_name": "Mashreq Bank"
      },
      {
        "id": uuidv4(),
        "code": "MSLM",
        "bank_name": "Muslim Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "MSNU",
        "bank_name": "Mehsana Urban Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "MSNX",
        "bank_name": "Mehsana District Central Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "MSOX",
        "bank_name": "Manorama Co-operative Bank Solapur"
      },
      {
        "id": uuidv4(),
        "code": "MSSX",
        "bank_name": "Merchants Souharda Sahakara Bank Niyamitha"
      },
      {
        "id": uuidv4(),
        "code": "MUBL",
        "bank_name": "Municipal Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "MUBX",
        "bank_name": "Maharaja Co-operative Urban Bank"
      },
      {
        "id": uuidv4(),
        "code": "MUCG",
        "bank_name": "Merchants Urban Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "MUCX",
        "bank_name": "Mapusa Urban Co-operative Bank of Goa"
      },
      {
        "id": uuidv4(),
        "code": "MUDX",
        "bank_name": "Madheshwari Urban Development Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "MUNX",
        "bank_name": "Mahudha Nagarik Sahakari Bank"
      },
      {
        "id": uuidv4(),
        "code": "MUPX",
        "bank_name": "Mehmadabad Urban Peoples Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "MURX",
        "bank_name": "Murshidabad District Central Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "MUSX",
        "bank_name": "Muslim Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "MVCB",
        "bank_name": "Sir M Visvesvaraya Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "MVCX",
        "bank_name": "Mahaveer Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "MVIX",
        "bank_name": "Manvi Pattana Souharda Sahakari Bank Ni"
      },
      {
        "id": uuidv4(),
        "code": "MXXX",
        "bank_name": "Maharashtra Mantralaya & Allied Offices Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "MYAX",
        "bank_name": "Meghalaya Co-operative Apex Bank"
      },
      {
        "id": uuidv4(),
        "code": "MYCX",
        "bank_name": "Mayurbhanj Central Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "MYSX",
        "bank_name": "Mysore Chamarajanagar District Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "MZCX",
        "bank_name": "Mizoram Urban Co-operative Development Bank"
      },
      {
        "id": uuidv4(),
        "code": "MZRX",
        "bank_name": "Mizoram Rural Bank"
      },
      {
        "id": uuidv4(),
        "code": "NABX",
        "bank_name": "Nandani Sahakari Bank"
      },
      {
        "id": uuidv4(),
        "code": "NACX",
        "bank_name": "Nalanda Central Co-operative Bank Nalanda"
      },
      {
        "id": uuidv4(),
        "code": "NADX",
        "bank_name": "Nadapuram Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "NAGX",
        "bank_name": "Nagaland Rural Bank"
      },
      {
        "id": uuidv4(),
        "code": "NAIX",
        "bank_name": "Nainital District Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "NALX",
        "bank_name": "National Urban Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "NANX",
        "bank_name": "Nanded District Central Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "NASX",
        "bank_name": "Nasik District Central Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "NATA",
        "bank_name": "National Australia Bank"
      },
      {
        "id": uuidv4(),
        "code": "NAUX",
        "bank_name": "Nagaur Central Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "NAVX",
        "bank_name": "Navnirman Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "NAWX",
        "bank_name": "Nawanagar Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "NBAD",
        "bank_name": "National Bank of Abu Dhabi PJSC"
      },
      {
        "id": uuidv4(),
        "code": "NBBX",
        "bank_name": "National Co-operative Bank Bangalore"
      },
      {
        "id": uuidv4(),
        "code": "NBCX",
        "bank_name": "Nalbari Urban Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "NBMX",
        "bank_name": "Nagrik Sahakari Bank, Vidisha"
      },
      {
        "id": uuidv4(),
        "code": "NBRD",
        "bank_name": "National Bank for Agriculture and Development"
      },
      {
        "id": uuidv4(),
        "code": "NCBL",
        "bank_name": "National Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "NCBX",
        "bank_name": "Nawanshahr Central Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "NCCX",
        "bank_name": "Nabadwip Co-operative Credit Bank"
      },
      {
        "id": uuidv4(),
        "code": "NCOX",
        "bank_name": "Nagnath Urban Co-operative Bank Hingoli"
      },
      {
        "id": uuidv4(),
        "code": "NCUB",
        "bank_name": "Nilambur Co-operative Urban Bank"
      },
      {
        "id": uuidv4(),
        "code": "NCUX",
        "bank_name": "Nilambur Co-operative Urban Bank"
      },
      {
        "id": uuidv4(),
        "code": "NDCB",
        "bank_name": "Naval Dockyard Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "NDCX",
        "bank_name": "Nilgiris District Central Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "NDDX",
        "bank_name": "Nadia District Central Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "NDGX",
        "bank_name": "Nashik District Girna Sahakari Bank"
      },
      {
        "id": uuidv4(),
        "code": "NDIX",
        "bank_name": "Nashik District Industrial & Mercantile Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "NDOX",
        "bank_name": "Nayagarh District Central Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "NESF",
        "bank_name": "North East Small Finance Bank"
      },
      {
        "id": uuidv4(),
        "code": "NEYX",
        "bank_name": "Neyyattinkara Co-operative Urban Bank"
      },
      {
        "id": uuidv4(),
        "code": "NGBX",
        "bank_name": "Nagar Sahakari Bank Maharajganj"
      },
      {
        "id": uuidv4(),
        "code": "NGKX",
        "bank_name": "Nagrik Sahakari Bank Maryadit Gwalior"
      },
      {
        "id": uuidv4(),
        "code": "NGNX",
        "bank_name": "Nagina Urban Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "NGRX",
        "bank_name": "Nagar Sahakari Bank"
      },
      {
        "id": uuidv4(),
        "code": "NGSB",
        "bank_name": "Nagpur Nagarik Sahakari Bank"
      },
      {
        "id": uuidv4(),
        "code": "NGSX",
        "bank_name": "Nagarik Sahakari Bank Maryadit Durg"
      },
      {
        "id": uuidv4(),
        "code": "NGUX",
        "bank_name": "Nagaur Urban Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "NICB",
        "bank_name": "New India Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "NIDX",
        "bank_name": "Nidhi Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "NILX",
        "bank_name": "Nilkanth Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "NIRX",
        "bank_name": "Nirmal Urban Co-operative Bank Nagpur"
      },
      {
        "id": uuidv4(),
        "code": "NIUX",
        "bank_name": "Nileshwar Co-operative Urban Bank"
      },
      {
        "id": uuidv4(),
        "code": "NJBK",
        "bank_name": "Nav Jeevan Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "NJCX",
        "bank_name": "Nav Jeevan Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "NJGX",
        "bank_name": "Narmada Jhabua Gramin Bank"
      },
      {
        "id": uuidv4(),
        "code": "NJMX",
        "bank_name": "Nashik Zila Mahila Vikas Sahakari Bank"
      },
      {
        "id": uuidv4(),
        "code": "NJSX",
        "bank_name": "Nasik Zila Mahila Sahakari Bank"
      },
      {
        "id": uuidv4(),
        "code": "NKGS",
        "bank_name": "NKGSB Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "NLGX",
        "bank_name": "Nalgonda Dist. Co-operative Central Bank"
      },
      {
        "id": uuidv4(),
        "code": "NLUX",
        "bank_name": "National Urban Co-operative Bank,bahraich"
      },
      {
        "id": uuidv4(),
        "code": "NMCB",
        "bank_name": "Nasik Merchants Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "NMCX",
        "bank_name": "Navi Mumbai Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "NMGB",
        "bank_name": "North Malabar Gramin Bank"
      },
      {
        "id": uuidv4(),
        "code": "NNCX",
        "bank_name": "Naroda Nagrik Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "NNSB",
        "bank_name": "Nutan Nagarik Sahakari Bank"
      },
      {
        "id": uuidv4(),
        "code": "NNSX",
        "bank_name": "Nutan Nagari Sahakari Bank Ichalkaranji"
      },
      {
        "id": uuidv4(),
        "code": "NOBX",
        "bank_name": "Noble Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "NOIX",
        "bank_name": "Noida Commercial Co-operative Bak"
      },
      {
        "id": uuidv4(),
        "code": "NOSC",
        "bank_name": "Bank of Nova Scotia"
      },
      {
        "id": uuidv4(),
        "code": "NPCX",
        "bank_name": "Nadiad Peoples Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "NPKX",
        "bank_name": "Nashik Zilha Sarkari & Parishad Karmachari Sb Nmt"
      },
      {
        "id": uuidv4(),
        "code": "NPPX",
        "bank_name": "Nabagram Peoples' Co-operative Credit Bank"
      },
      {
        "id": uuidv4(),
        "code": "NRDX",
        "bank_name": "Nasik Road Deolali Vyapari Sahakari Bank"
      },
      {
        "id": uuidv4(),
        "code": "NRMX",
        "bank_name": "Northern Railway Multi State Primary Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "NSBB",
        "bank_name": "Nagarik Sahakari Bank Bhiwandi"
      },
      {
        "id": uuidv4(),
        "code": "NSBX",
        "bank_name": "Nagrik Sahakari Bank Lucknow"
      },
      {
        "id": uuidv4(),
        "code": "NSCX",
        "bank_name": "Nagaland State Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "NSGX",
        "bank_name": "Nagar Sahakari Bank Gorakhpur"
      },
      {
        "id": uuidv4(),
        "code": "NSIX",
        "bank_name": "Nagrik Sahakari Bank Indore"
      },
      {
        "id": uuidv4(),
        "code": "NSJX",
        "bank_name": "Nagarik Sahakari Bank Maryadit,jagdalpur"
      },
      {
        "id": uuidv4(),
        "code": "NSMX",
        "bank_name": "Nagarik Samabay Bank"
      },
      {
        "id": uuidv4(),
        "code": "NSPB",
        "bank_name": "NSDL Payments Bank"
      },
      {
        "id": uuidv4(),
        "code": "NSPX",
        "bank_name": "Nishigandha Sahakari Bank"
      },
      {
        "id": uuidv4(),
        "code": "NSRX",
        "bank_name": "Nagrik Sahakari Bank"
      },
      {
        "id": uuidv4(),
        "code": "NTBL",
        "bank_name": "Nainital Bank"
      },
      {
        "id": uuidv4(),
        "code": "NUBX",
        "bank_name": "New Urban Co-operative Bank Rampur"
      },
      {
        "id": uuidv4(),
        "code": "NUCB",
        "bank_name": "Nagar Urban Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "NUCX",
        "bank_name": "Navabharat Co-operative Urban Bank"
      },
      {
        "id": uuidv4(),
        "code": "NULX",
        "bank_name": "National Urban Co-operative Bank, Pratapgarh"
      },
      {
        "id": uuidv4(),
        "code": "NVCX",
        "bank_name": "Navanagara Urban Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "NVNM",
        "bank_name": "Navnirman Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "NVSX",
        "bank_name": "Nagar Vikas Sahakari Bank"
      },
      {
        "id": uuidv4(),
        "code": "NWCX",
        "bank_name": "Nawada Central Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "ODCX",
        "bank_name": "Osmanabad District Central Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "ODGB",
        "bank_name": "Odisha Gramya Bank"
      },
      {
        "id": uuidv4(),
        "code": "OIBA",
        "bank_name": "HSBC Bank Oman S.A.O.G"
      },
      {
        "id": uuidv4(),
        "code": "OMCX",
        "bank_name": "Ojhar Merchant's Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "ONSX",
        "bank_name": "Omkar Nagreeya Sahakari Bank"
      },
      {
        "id": uuidv4(),
        "code": "ORBC",
        "bank_name": "Oriental Bank of Commerce"
      },
      {
        "id": uuidv4(),
        "code": "ORCB",
        "bank_name": "Odisha State Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "OSMX",
        "bank_name": "Osmanabad Janata Sahakari Bank"
      },
      {
        "id": uuidv4(),
        "code": "PABX",
        "bank_name": "Pallavan Grama Bank"
      },
      {
        "id": uuidv4(),
        "code": "PACX",
        "bank_name": "Pali Central Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "PADX",
        "bank_name": "Padra Nagar Nagrik Sahakari Bank"
      },
      {
        "id": uuidv4(),
        "code": "PALX",
        "bank_name": "Pali Urban Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "PANX",
        "bank_name": "Panchmahal District Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "PARX",
        "bank_name": "Parbhani District Central Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "PASX",
        "bank_name": "Paschim Banga Gramin Bank"
      },
      {
        "id": uuidv4(),
        "code": "PATX",
        "bank_name": "Pathanmthitta District Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "PAYX",
        "bank_name": "Payangadi Urban Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "PBGX",
        "bank_name": "Puduvai Bharathiar Grama Bank"
      },
      {
        "id": uuidv4(),
        "code": "PCBL",
        "bank_name": "Patan Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "PCBX",
        "bank_name": "Parshwanath Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "PCCB",
        "bank_name": "Purulia Central Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "PCCX",
        "bank_name": "Panchkula Central Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "PCLX",
        "bank_name": "Pragathi Co-operative Bank, Bangalore"
      },
      {
        "id": uuidv4(),
        "code": "PCMX",
        "bank_name": "Panchsheel Mercantile Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "PCOX",
        "bank_name": "Peoples' Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "PCPX",
        "bank_name": "Pimpri Chinchwad Sahakari Bank Maryadit,pimpri"
      },
      {
        "id": uuidv4(),
        "code": "PCSX",
        "bank_name": "Pondicherry State Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "PCTX",
        "bank_name": "Pune Cantonment Sahakari Bank"
      },
      {
        "id": uuidv4(),
        "code": "PCUX",
        "bank_name": "Pochampally Co-operative Urban Bank"
      },
      {
        "id": uuidv4(),
        "code": "PDBX",
        "bank_name": "Purnea District Central Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "PDCX",
        "bank_name": "Pune District Central Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "PDNX",
        "bank_name": "Pandyan Grama Bank"
      },
      {
        "id": uuidv4(),
        "code": "PDSX",
        "bank_name": "Priyadarshani Nagari Sahakari Bank Jalna."
      },
      {
        "id": uuidv4(),
        "code": "PDUX",
        "bank_name": "Pandharpur Urban Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "PGBX",
        "bank_name": "Pragathi Krishna Gramin Bank"
      },
      {
        "id": uuidv4(),
        "code": "PGCX",
        "bank_name": "Progressive Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "PGRX",
        "bank_name": "Progressive Urban Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "PGTX",
        "bank_name": "Pragati Co-operative Bank, Thara"
      },
      {
        "id": uuidv4(),
        "code": "PHIX",
        "bank_name": "Panihati Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "PITX",
        "bank_name": "Pithoragarh Zila Sahakari Bank"
      },
      {
        "id": uuidv4(),
        "code": "PJSB",
        "bank_name": "Gopinath Patil Parsik Janata Sahakari Bank"
      },
      {
        "id": uuidv4(),
        "code": "PKBX",
        "bank_name": "Panchkula Urban Co-operative Bank Lmited"
      },
      {
        "id": uuidv4(),
        "code": "PKDX",
        "bank_name": "Palakkad District Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "PKGB",
        "bank_name": "Karnataka Gramin Bank"
      },
      {
        "id": uuidv4(),
        "code": "PLOX",
        "bank_name": "Palamoor Co-operative Urban Bank"
      },
      {
        "id": uuidv4(),
        "code": "PLUX",
        "bank_name": "Palus Sahakari Bank"
      },
      {
        "id": uuidv4(),
        "code": "PMCB",
        "bank_name": "Punjab & Maharashtra Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "PMCX",
        "bank_name": "Pimpalgaon Merchants Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "PMEC",
        "bank_name": "Prime Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "PMNX",
        "bank_name": "Pragati Mahila Nagrik Sahakari Bank Bhilai"
      },
      {
        "id": uuidv4(),
        "code": "PNCX",
        "bank_name": "Panipat Urban Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "PNMX",
        "bank_name": "Pune Merchant's Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "PNPX",
        "bank_name": "Panipat Central Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "PNSX",
        "bank_name": "Poornawadi Nagrik Sahakari Bank"
      },
      {
        "id": uuidv4(),
        "code": "PPBX",
        "bank_name": "Pune People's Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "PPCX",
        "bank_name": "Pachora Peoples Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "PRCX",
        "bank_name": "Proddatur Co-operative Town Bank"
      },
      {
        "id": uuidv4(),
        "code": "PREX",
        "bank_name": "Prerana Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "PROX",
        "bank_name": "Progressive Mercantile Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "PRPX",
        "bank_name": "Paraspar Sahayak Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "PRSX",
        "bank_name": "Pravara Sahakari Bank"
      },
      {
        "id": uuidv4(),
        "code": "PRTH",
        "bank_name": "Prathama Bank"
      },
      {
        "id": uuidv4(),
        "code": "PRUX",
        "bank_name": "Priyadarshani Urban Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "PSBL",
        "bank_name": "Pavana Sahakari Bank"
      },
      {
        "id": uuidv4(),
        "code": "PSBX",
        "bank_name": "Pragati Sahakari Bank"
      },
      {
        "id": uuidv4(),
        "code": "PSCX",
        "bank_name": "Punjab State Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "PSIB",
        "bank_name": "Punjab & Sind Bank"
      },
      {
        "id": uuidv4(),
        "code": "PSRX",
        "bank_name": "Sri Potti Sriramulu Nellore Dccb"
      },
      {
        "id": uuidv4(),
        "code": "PSSX",
        "bank_name": "Prathamik Shikshak Sahakari Bank"
      },
      {
        "id": uuidv4(),
        "code": "PTCX",
        "bank_name": "Patiala Central Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "PTNX",
        "bank_name": "Patan Urban Co-operative Bank Patan"
      },
      {
        "id": uuidv4(),
        "code": "PTSX",
        "bank_name": "Patan Nagarik Sahakari Bank"
      },
      {
        "id": uuidv4(),
        "code": "PUBX",
        "bank_name": "People's Urban Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "PUCB",
        "bank_name": "Pandharpur Urban Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "PUCX",
        "bank_name": "Pusad Urban Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "PUDX",
        "bank_name": "Pudukottai District Central Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "PUGX",
        "bank_name": "Punjab Gramin Bank"
      },
      {
        "id": uuidv4(),
        "code": "PUNB",
        "bank_name": "Punjab National Bank"
      },
      {
        "id": uuidv4(),
        "code": "PUNX",
        "bank_name": "Pune Urban Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "PURX",
        "bank_name": "Purvanchal Gramin Bank"
      },
      {
        "id": uuidv4(),
        "code": "PUSD",
        "bank_name": "Pusad Urban Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "PUSX",
        "bank_name": "Purasawalkam Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "PUUX",
        "bank_name": "Puri Urban Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "PVAX",
        "bank_name": "Pavana Sahakari Bank"
      },
      {
        "id": uuidv4(),
        "code": "PVCX",
        "bank_name": "Purvanchal Co-operative Bank Gazipur"
      },
      {
        "id": uuidv4(),
        "code": "PVVX",
        "bank_name": "Padmashri Dr. Vitthalrao Vikhe Patil Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "PWUX",
        "bank_name": "Parwanoo Urban Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "PYCX",
        "bank_name": "Payyoli Co-operative Urban Bank"
      },
      {
        "id": uuidv4(),
        "code": "PYTM",
        "bank_name": "Paytm Payments Bank"
      },
      {
        "id": uuidv4(),
        "code": "QNBA",
        "bank_name": "Qatar National Bank"
      },
      {
        "id": uuidv4(),
        "code": "QNBX",
        "bank_name": "Qatar National Bank"
      },
      {
        "id": uuidv4(),
        "code": "QUCX",
        "bank_name": "Quilon Co-operative Urban Bank"
      },
      {
        "id": uuidv4(),
        "code": "RABO",
        "bank_name": "Rabobank International"
      },
      {
        "id": uuidv4(),
        "code": "RACX",
        "bank_name": "Rajkot Commercial Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "RAEX",
        "bank_name": "Railway Employees Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "RAJX",
        "bank_name": "Rajsamand Urban Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "RAKX",
        "bank_name": "Rajkot Peoples Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "RAMX",
        "bank_name": "Rajputana Mahila Urban Co-operative Bak"
      },
      {
        "id": uuidv4(),
        "code": "RANX",
        "bank_name": "Rander Peoples Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "RATN",
        "bank_name": "RBL Bank"
      },
      {
        "id": uuidv4(),
        "code": "RAUX",
        "bank_name": "Rajlaxmi Urban Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "RBBX",
        "bank_name": "Rajarambapu Sahakari Bank Peth"
      },
      {
        "id": uuidv4(),
        "code": "RBCX",
        "bank_name": "Reserve Bank Employees Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "RBIH",
        "bank_name": "IDRBT"
      },
      {
        "id": uuidv4(),
        "code": "RBIN",
        "bank_name": "Reserve Bank Of India"
      },
      {
        "id": uuidv4(),
        "code": "RBIP",
        "bank_name": "Reserve Bank of India"
      },
      {
        "id": uuidv4(),
        "code": "RBIS",
        "bank_name": "Reserve Bank of India"
      },
      {
        "id": uuidv4(),
        "code": "RCBX",
        "bank_name": "Raniganj Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "RCCX",
        "bank_name": "Ropar Central Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "RCDX",
        "bank_name": "Ramanathapuram District Central Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "RCMX",
        "bank_name": "Ravi Commercial Urban Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "RCUX",
        "bank_name": "Rajadhani Co-operative Urban Bank"
      },
      {
        "id": uuidv4(),
        "code": "RDCB",
        "bank_name": "Rajnandgaon District Central Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "RDCX",
        "bank_name": "Raigad District Central Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "RDNX",
        "bank_name": "Col Rd Nikam Sainik Sahakari Bank"
      },
      {
        "id": uuidv4(),
        "code": "REBX",
        "bank_name": "Rendal Sahakari Bank Rendal"
      },
      {
        "id": uuidv4(),
        "code": "RECX",
        "bank_name": "Railway Employees Co-operative Banking Society"
      },
      {
        "id": uuidv4(),
        "code": "REWX",
        "bank_name": "Rewari Central Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "RGCX",
        "bank_name": "Ramgarhia Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "RGSX",
        "bank_name": "Rajgurunagar Sahakari Bank"
      },
      {
        "id": uuidv4(),
        "code": "RHMX",
        "bank_name": "Raj Laxmi Mahila Urban Co-operative Bank Jaipur"
      },
      {
        "id": uuidv4(),
        "code": "RJCX",
        "bank_name": "Raiganj Central Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "RJJX",
        "bank_name": "Rajajinagar Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "RJNX",
        "bank_name": "Rajpipla Nagarik Sahakari Bank"
      },
      {
        "id": uuidv4(),
        "code": "RJTX",
        "bank_name": "Shri Rajkot District Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "RKCX",
        "bank_name": "Ranchi Khunti Central Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "RLUX",
        "bank_name": "Ranilaxmibai Urban Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "RMGB",
        "bank_name": "Rajasthan Marudhara Gramin Bank"
      },
      {
        "id": uuidv4(),
        "code": "RNBX",
        "bank_name": "Ranuj Nagrik Sahakari Bank"
      },
      {
        "id": uuidv4(),
        "code": "RNDX",
        "bank_name": "Ratnagiri District Central Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "RNGX",
        "bank_name": "Ranga Reddy Co-operative Urban Bank"
      },
      {
        "id": uuidv4(),
        "code": "RNSB",
        "bank_name": "Rajkot Nagarik Sahakari Bank"
      },
      {
        "id": uuidv4(),
        "code": "RNSX",
        "bank_name": "Rajdhani Nagar Sahakari Bank"
      },
      {
        "id": uuidv4(),
        "code": "ROCX",
        "bank_name": "Rohika Central Co-operative Bank Madhubani"
      },
      {
        "id": uuidv4(),
        "code": "ROHX",
        "bank_name": "Rohtak Central Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "RPUX",
        "bank_name": "Rajapur Urban Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "RRBP",
        "bank_name": "Rajarambapu Sahakari Bank"
      },
      {
        "id": uuidv4(),
        "code": "RRSX",
        "bank_name": "Ramrajya Sahakari Bank"
      },
      {
        "id": uuidv4(),
        "code": "RSBL",
        "bank_name": "Rajgurunagar Sahakari Bank"
      },
      {
        "id": uuidv4(),
        "code": "RSBX",
        "bank_name": "Raigad Sahakari Bank"
      },
      {
        "id": uuidv4(),
        "code": "RSCB",
        "bank_name": "Rajasthan State Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "RSSB",
        "bank_name": "Rajarshi Shahu Sahakari Bank"
      },
      {
        "id": uuidv4(),
        "code": "RSSX",
        "bank_name": "Rajarshi Shahu Sahakari Bank"
      },
      {
        "id": uuidv4(),
        "code": "RSUX",
        "bank_name": "Radhasoami Urban Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "RSVX",
        "bank_name": "Rajarshi Shahu Govt Servants Co-operative Bank Kolh"
      },
      {
        "id": uuidv4(),
        "code": "RUCX",
        "bank_name": "Rajasthan Urban Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "RUKX",
        "bank_name": "Shri Rukmini Sahakari Bank"
      },
      {
        "id": uuidv4(),
        "code": "RUMX",
        "bank_name": "Raipur Urban Mercantile Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "RZSX",
        "bank_name": "Rampur Zila Sahakari Bank"
      },
      {
        "id": uuidv4(),
        "code": "SABR",
        "bank_name": "SBER Bank"
      },
      {
        "id": uuidv4(),
        "code": "SABX",
        "bank_name": "Saraswati Sahakari Bank"
      },
      {
        "id": uuidv4(),
        "code": "SACB",
        "bank_name": "Shri Arihant Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "SACX",
        "bank_name": "Sarvodaya Co-operative Bank Mumbai"
      },
      {
        "id": uuidv4(),
        "code": "SADX",
        "bank_name": "Sabarkantha District Central Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "SAGX",
        "bank_name": "Saurashtra Gramin Bank"
      },
      {
        "id": uuidv4(),
        "code": "SAHE",
        "bank_name": "Sahebrao Deshmukh Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "SAHX",
        "bank_name": "Sadhana Sahakari Bank Pune"
      },
      {
        "id": uuidv4(),
        "code": "SAIX",
        "bank_name": "Sanmitra Sahakari Bank"
      },
      {
        "id": uuidv4(),
        "code": "SALX",
        "bank_name": "Salal Sarvodaya Nagarik Sahakari Bank"
      },
      {
        "id": uuidv4(),
        "code": "SAMX",
        "bank_name": "Samata Sahakari Bank"
      },
      {
        "id": uuidv4(),
        "code": "SANT",
        "bank_name": "Sant Sopankaka Sahakari Bank"
      },
      {
        "id": uuidv4(),
        "code": "SANX",
        "bank_name": "Saibaba Nagari Sahakari Bank"
      },
      {
        "id": uuidv4(),
        "code": "SAOX",
        "bank_name": "Shimoga Arecanut Mandy Merchants Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "SAPX",
        "bank_name": "Shrimant Malojiraje Sahakari Bank"
      },
      {
        "id": uuidv4(),
        "code": "SARX",
        "bank_name": "Sardarganj Mercantile Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "SASA",
        "bank_name": "Sahyadri Sahakari Bank"
      },
      {
        "id": uuidv4(),
        "code": "SASX",
        "bank_name": "S.A.S Nagar Central Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "SATX",
        "bank_name": "Adv. Shamraoji Shinde Satyashodhak Bank"
      },
      {
        "id": uuidv4(),
        "code": "SAUX",
        "bank_name": "Saidapet Co-operative Urban Bank"
      },
      {
        "id": uuidv4(),
        "code": "SAVX",
        "bank_name": "Sardar Vallabhbhai Sahakari Bank"
      },
      {
        "id": uuidv4(),
        "code": "SAWX",
        "bank_name": "Sawai Madhopur Kendriya Sahakari Bank"
      },
      {
        "id": uuidv4(),
        "code": "SBBJ",
        "bank_name": "State Bank of Bikaner and Jaipur"
      },
      {
        "id": uuidv4(),
        "code": "SBCR",
        "bank_name": "Shree Basaveshwar Urban Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "SBCX",
        "bank_name": "Sultan's Bathery Co-operative Urban Bank"
      },
      {
        "id": uuidv4(),
        "code": "SBHY",
        "bank_name": "State Bank of Hyderabad"
      },
      {
        "id": uuidv4(),
        "code": "SBIN",
        "bank_name": "State Bank of India"
      },
      {
        "id": uuidv4(),
        "code": "SBKX",
        "bank_name": "Sri Channabasavaswamy Souhardha Pattana Sahak Bank"
      },
      {
        "id": uuidv4(),
        "code": "SBLD",
        "bank_name": "Sonali Bank"
      },
      {
        "id": uuidv4(),
        "code": "SBLS",
        "bank_name": "Samarth Sahakari Bank"
      },
      {
        "id": uuidv4(),
        "code": "SBLX",
        "bank_name": "Shubhalakshmi Mahila Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "SBMX",
        "bank_name": "Sri Banashankari Mahila Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "SBMY",
        "bank_name": "State Bank of Mysore"
      },
      {
        "id": uuidv4(),
        "code": "SBNX",
        "bank_name": "Shree Bhavnagar Nagrik Sahakari Bank"
      },
      {
        "id": uuidv4(),
        "code": "SBPS",
        "bank_name": "Sri Basaveshwar Pattana Sahakari Bank"
      },
      {
        "id": uuidv4(),
        "code": "SBPX",
        "bank_name": "Sardar Bhiladwala Pardi People's Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "SBSX",
        "bank_name": "Shivajirao Bhosale Sahakari Bank"
      },
      {
        "id": uuidv4(),
        "code": "SBTR",
        "bank_name": "State Bank of Travancore"
      },
      {
        "id": uuidv4(),
        "code": "SBUJ",
        "bank_name": "Shri Bharat Urban Co-operative Bank Jaysingpur"
      },
      {
        "id": uuidv4(),
        "code": "SBUX",
        "bank_name": "Shree Balaji Urban Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "SCBL",
        "bank_name": "Standard Chartered Bank"
      },
      {
        "id": uuidv4(),
        "code": "SCBX",
        "bank_name": "Sirohi Central Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "SCCX",
        "bank_name": "Salem District Central Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "SCDX",
        "bank_name": "South Canara District Central Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "SCIX",
        "bank_name": "Social Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "SCNX",
        "bank_name": "Shri Chhani Nagrik Sahakari Bank"
      },
      {
        "id": uuidv4(),
        "code": "SCOB",
        "bank_name": "Samruddhi Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "SCOX",
        "bank_name": "Shimoga District Co-operative Central Bank"
      },
      {
        "id": uuidv4(),
        "code": "SCPX",
        "bank_name": "Sangrur Central Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "SCSX",
        "bank_name": "Sree Charan Souhardha Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "SCUX",
        "bank_name": "Sudha Co-operative Urban Bank"
      },
      {
        "id": uuidv4(),
        "code": "SDBX",
        "bank_name": "Samata Co-operative Development Bank"
      },
      {
        "id": uuidv4(),
        "code": "SDCB",
        "bank_name": "Surat District Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "SDCE",
        "bank_name": "Satara District Central Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "SDCX",
        "bank_name": "Sindhudurg District Central Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "SDHX",
        "bank_name": "Solapur Siddheshwar Sahakari Bank"
      },
      {
        "id": uuidv4(),
        "code": "SDSX",
        "bank_name": "Satara District Central Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "SDTC",
        "bank_name": "Shri D T Patil Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "SDTX",
        "bank_name": "Sambalpur District Co-operative Central Bank"
      },
      {
        "id": uuidv4(),
        "code": "SDUX",
        "bank_name": "Sri Sudha Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "SECB",
        "bank_name": "Sree Charan Souhardha Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "SEMX",
        "bank_name": "Secunderabad Mercantile Co-operative Urban Bank"
      },
      {
        "id": uuidv4(),
        "code": "SENX",
        "bank_name": "Sehore Nagrik Sahakari Bank Sehore"
      },
      {
        "id": uuidv4(),
        "code": "SEUX",
        "bank_name": "Sevalia Urban Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "SEWX",
        "bank_name": "Shri Mahila Sewa Sahakari Bank"
      },
      {
        "id": uuidv4(),
        "code": "SGBA",
        "bank_name": "Saurashtra Gramin Bank"
      },
      {
        "id": uuidv4(),
        "code": "SGCX",
        "bank_name": "Sangli District Central Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "SGDX",
        "bank_name": "Sundargarh District Central Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "SGLX",
        "bank_name": "Sangli Sahakari Bank"
      },
      {
        "id": uuidv4(),
        "code": "SGSX",
        "bank_name": "Sadguru Nagrik Sahakari Bank Maryadit"
      },
      {
        "id": uuidv4(),
        "code": "SGUX",
        "bank_name": "Sadguru Gahininath Urban Co-operative Bank Akluj"
      },
      {
        "id": uuidv4(),
        "code": "SHAX",
        "bank_name": "Shankar Nagari Sahakari Bank"
      },
      {
        "id": uuidv4(),
        "code": "SHBK",
        "bank_name": "Shinhan Bank"
      },
      {
        "id": uuidv4(),
        "code": "SHBX",
        "bank_name": "Shriram Urban Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "SHCX",
        "bank_name": "Shimla Urban Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "SHEX",
        "bank_name": "Shree Samarth Sahakari Bank Nashik"
      },
      {
        "id": uuidv4(),
        "code": "SHGX",
        "bank_name": "Shri Ganesh Sahakari Bank"
      },
      {
        "id": uuidv4(),
        "code": "SHIX",
        "bank_name": "Shivalik Small Finance Bank"
      },
      {
        "id": uuidv4(),
        "code": "SHKX",
        "bank_name": "Shikshak Sahakari Bank"
      },
      {
        "id": uuidv4(),
        "code": "SHMX",
        "bank_name": "Sanghamitra Co-operative Urban Bank"
      },
      {
        "id": uuidv4(),
        "code": "SHNX",
        "bank_name": "Shri Kanyaka Nagari Sahakari Bank"
      },
      {
        "id": uuidv4(),
        "code": "SHOX",
        "bank_name": "Sihor Mercantile Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "SHRX",
        "bank_name": "Shree Mahesh Co-operative Bank Nashik"
      },
      {
        "id": uuidv4(),
        "code": "SHSX",
        "bank_name": "Sharad Sahakari Bank"
      },
      {
        "id": uuidv4(),
        "code": "SHUB",
        "bank_name": "Shiggaon Urban Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "SHUX",
        "bank_name": "Shushruti Souharda Sahakara Bank Niyamita"
      },
      {
        "id": uuidv4(),
        "code": "SIBL",
        "bank_name": "South Indian Bank"
      },
      {
        "id": uuidv4(),
        "code": "SIBX",
        "bank_name": "Sikar Kendriya Sahakari Bank"
      },
      {
        "id": uuidv4(),
        "code": "SICX",
        "bank_name": "Sirsa Central Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "SIDB",
        "bank_name": "Small Industries Development Bank Of India"
      },
      {
        "id": uuidv4(),
        "code": "SIDC",
        "bank_name": "Sindhudurg District Central Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "SIDX",
        "bank_name": "Siddhi Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "SIGX",
        "bank_name": "Singhbhum District Central Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "SIHX",
        "bank_name": "Sihor Nagarik Sahakari Bank"
      },
      {
        "id": uuidv4(),
        "code": "SIKX",
        "bank_name": "Sikar Urban Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "SINX",
        "bank_name": "Shihori Nagarik Sahakari Bank"
      },
      {
        "id": uuidv4(),
        "code": "SIRX",
        "bank_name": "Sircilla Co-operative Urban Bank"
      },
      {
        "id": uuidv4(),
        "code": "SISX",
        "bank_name": "Sanmati Sahakari Bank"
      },
      {
        "id": uuidv4(),
        "code": "SITX",
        "bank_name": "Sitamarhi Central Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "SIWX",
        "bank_name": "Siwan Central Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "SJGX",
        "bank_name": "Sutlej Gramin Bank"
      },
      {
        "id": uuidv4(),
        "code": "SJSB",
        "bank_name": "Solapur Janata Sahakari Bank"
      },
      {
        "id": uuidv4(),
        "code": "SJSX",
        "bank_name": "Solapur Janata Sahakari Bank"
      },
      {
        "id": uuidv4(),
        "code": "SKCX",
        "bank_name": "Shrikrishna Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "SKKX",
        "bank_name": "Sikkim State Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "SKNB",
        "bank_name": "Shree Kadi Nagarik Sahakari Bank"
      },
      {
        "id": uuidv4(),
        "code": "SKNX",
        "bank_name": "Sankheda Nagarik Sahakari Bank"
      },
      {
        "id": uuidv4(),
        "code": "SKSB",
        "bank_name": "Shikshak Sahakari Bank"
      },
      {
        "id": uuidv4(),
        "code": "SKUX",
        "bank_name": "S S L S A Kurundwad Urban Bank"
      },
      {
        "id": uuidv4(),
        "code": "SLAX",
        "bank_name": "Subhadra Local Area Bank"
      },
      {
        "id": uuidv4(),
        "code": "SLCX",
        "bank_name": "Shree Laxmi Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "SMBC",
        "bank_name": "Sumitomo Mitsui Banking Corporation"
      },
      {
        "id": uuidv4(),
        "code": "SMBX",
        "bank_name": "Sampada Sahakari Bank"
      },
      {
        "id": uuidv4(),
        "code": "SMCB",
        "bank_name": "Shivalik Small Finance Bank"
      },
      {
        "id": uuidv4(),
        "code": "SMCX",
        "bank_name": "Sangamner Merchants Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "SMEX",
        "bank_name": "Sumerpur Mercantile Urban Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "SMMX",
        "bank_name": "Shree Mahalaxmi Mercantile Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "SMNB",
        "bank_name": "Smriti Nagrik Sahakari Bank"
      },
      {
        "id": uuidv4(),
        "code": "SMNX",
        "bank_name": "Shree Mahuva Nagrik Sahakari Bank"
      },
      {
        "id": uuidv4(),
        "code": "SMPX",
        "bank_name": "Shankarrao Mohite Patil Sahakri Bank"
      },
      {
        "id": uuidv4(),
        "code": "SMSX",
        "bank_name": "Soubhagya Mahila Souhardha Sahakari Bank"
      },
      {
        "id": uuidv4(),
        "code": "SMTX",
        "bank_name": "Sanmitra Urban Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "SMUX",
        "bank_name": "Shri Mahavir Urban Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "SMVC",
        "bank_name": "Sir M Visvesvaraya Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "SMWX",
        "bank_name": "Sree Subramanyeswara Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "SNAX",
        "bank_name": "Saraspur Nagarik Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "SNBK",
        "bank_name": "Saraspur Nagrik Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "SNBX",
        "bank_name": "Sarvodaya Nagrik Sahakari Bank"
      },
      {
        "id": uuidv4(),
        "code": "SNCX",
        "bank_name": "Sonepat Urban Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "SNDX",
        "bank_name": "Sind Co-operative Urban Bank"
      },
      {
        "id": uuidv4(),
        "code": "SNGX",
        "bank_name": "Sarangpur Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "SNKX",
        "bank_name": "Shramik Nagrik Sahakari Bank"
      },
      {
        "id": uuidv4(),
        "code": "SNLX",
        "bank_name": "Sarjeraodada Naik Shirala Sahakari Bank"
      },
      {
        "id": uuidv4(),
        "code": "SNPX",
        "bank_name": "Sonepat Central Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "SNSV",
        "bank_name": "Sarakari Naukarara Sahakari Bank Niyamt Vijayapura"
      },
      {
        "id": uuidv4(),
        "code": "SNSX",
        "bank_name": "Smriti Nagrik Sahakari Bank"
      },
      {
        "id": uuidv4(),
        "code": "SOBX",
        "bank_name": "Secunderabad Co-operative Urban Bank"
      },
      {
        "id": uuidv4(),
        "code": "SOGE",
        "bank_name": "Societe Generale"
      },
      {
        "id": uuidv4(),
        "code": "SOLX",
        "bank_name": "Solapur District Central Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "SONX",
        "bank_name": "Sonbhadra Nagar Sahakari Bank"
      },
      {
        "id": uuidv4(),
        "code": "SPBX",
        "bank_name": "Saptagiri Grameena Bank"
      },
      {
        "id": uuidv4(),
        "code": "SPCB",
        "bank_name": "Surat People's Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "SPCX",
        "bank_name": "Shirpur Peoples Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "SPNX",
        "bank_name": "Shree Panchganga Nagari Sahakari Bank"
      },
      {
        "id": uuidv4(),
        "code": "SPSX",
        "bank_name": "Sandur Pattana Souharda Sahakari Bank Niyamitha"
      },
      {
        "id": uuidv4(),
        "code": "SPTX",
        "bank_name": "Shripatraodada Sahakari Bank"
      },
      {
        "id": uuidv4(),
        "code": "SRCB",
        "bank_name": "Saraswat Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "SRCX",
        "bank_name": "Shree Bharat Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "SREX",
        "bank_name": "Shree Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "SRGX",
        "bank_name": "Sree Narayana Guru Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "SRHX",
        "bank_name": "Shree Dharati Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "SRSX",
        "bank_name": "Sharad Nagari Sahakari Bank"
      },
      {
        "id": uuidv4(),
        "code": "SSBL",
        "bank_name": "Satara Shakari Bank"
      },
      {
        "id": uuidv4(),
        "code": "SSBX",
        "bank_name": "Shivdaulat Sahakari Bank"
      },
      {
        "id": uuidv4(),
        "code": "SSDX",
        "bank_name": "Suco Souharda Sahakari Bank"
      },
      {
        "id": uuidv4(),
        "code": "SSHX",
        "bank_name": "Shree Sharada Sahakari Bank"
      },
      {
        "id": uuidv4(),
        "code": "SSKX",
        "bank_name": "Sadhana Sahakari Bank"
      },
      {
        "id": uuidv4(),
        "code": "SSLX",
        "bank_name": "Solapur Social Urban Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "SSNX",
        "bank_name": "Sreenidhi Souharda Sahakari Bank Niyamitha"
      },
      {
        "id": uuidv4(),
        "code": "SSOX",
        "bank_name": "Samarth Sahakari Bank"
      },
      {
        "id": uuidv4(),
        "code": "SSSX",
        "bank_name": "Sant Sopankaka Sahakari Bank"
      },
      {
        "id": uuidv4(),
        "code": "SSWX",
        "bank_name": "Sundarlal Sawaji Urban Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "STBP",
        "bank_name": "State Bank of Patiala"
      },
      {
        "id": uuidv4(),
        "code": "STCB",
        "bank_name": "SBM Bank"
      },
      {
        "id": uuidv4(),
        "code": "STCX",
        "bank_name": "State Transport Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "STDX",
        "bank_name": "Samastipur District Central Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "STRX",
        "bank_name": "Sterling Urban Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "SUBX",
        "bank_name": "Prathama UP Gramin Bank"
      },
      {
        "id": uuidv4(),
        "code": "SUCX",
        "bank_name": "Sangli Urban Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "SUDX",
        "bank_name": "Surendranagar District Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "SULX",
        "bank_name": "Sulaimani Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "SUMX",
        "bank_name": "Surat Mercantile Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "SUNB",
        "bank_name": "Surat National Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "SURX",
        "bank_name": "Siddheshwar Urban Co-operative Bank Maryadit Sillod"
      },
      {
        "id": uuidv4(),
        "code": "SURY",
        "bank_name": "Suryoday Small Finance Bank"
      },
      {
        "id": uuidv4(),
        "code": "SUSB",
        "bank_name": "Suco Souharda Sahakari Bank"
      },
      {
        "id": uuidv4(),
        "code": "SUSX",
        "bank_name": "Sirsi Urban Sahakari Bank"
      },
      {
        "id": uuidv4(),
        "code": "SUTB",
        "bank_name": "Sutex Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "SUVX",
        "bank_name": "Suvarnayug Sahakari Bank"
      },
      {
        "id": uuidv4(),
        "code": "SVAX",
        "bank_name": "Sri Vasavamba Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "SVBL",
        "bank_name": "Seva Vikas Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "SVCB",
        "bank_name": "SVC Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "SVCX",
        "bank_name": "Sarvodaya Commerical Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "SVGX",
        "bank_name": "Sivagangai District Central Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "SVMC",
        "bank_name": "Shri Vijay Mahantesh Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "SVNX",
        "bank_name": "Shivaji Nagari Sahakari Bank"
      },
      {
        "id": uuidv4(),
        "code": "SVOX",
        "bank_name": "Sarvodaya Sahakari Bank"
      },
      {
        "id": uuidv4(),
        "code": "SVRX",
        "bank_name": "Shree Vardhaman Sahakari Bank"
      },
      {
        "id": uuidv4(),
        "code": "SVSH",
        "bank_name": "Shree Veershaiv Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "SVSX",
        "bank_name": "Shri Vinayak Sahakari Bank"
      },
      {
        "id": uuidv4(),
        "code": "SWMX",
        "bank_name": "Sawai Madhopur Urban Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "SWSX",
        "bank_name": "Shree Warana Sahakari Bank"
      },
      {
        "id": uuidv4(),
        "code": "SXXX",
        "bank_name": "Sri Rama Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "SYNB",
        "bank_name": "Syndicate Bank"
      },
      {
        "id": uuidv4(),
        "code": "TACX",
        "bank_name": "Adinath Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "TADX",
        "bank_name": "Anantapur District Co-operative Central Bank"
      },
      {
        "id": uuidv4(),
        "code": "TAMX",
        "bank_name": "Anand Mercantile Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "TAPX",
        "bank_name": "Tapindu Urban Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "TASX",
        "bank_name": "Annasaheb Savant Co-operative Urban Bank Mahad"
      },
      {
        "id": uuidv4(),
        "code": "TAUB",
        "bank_name": "Ankola Urban Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "TBCX",
        "bank_name": "Bharath Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "TBDX",
        "bank_name": "Buldana District Central Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "TBHX",
        "bank_name": "Bhadran People's Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "TBMC",
        "bank_name": "Banaskantha Mercantile Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "TBMX",
        "bank_name": "Bapunagar Mahila Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "TBNS",
        "bank_name": "Becharaji Nagarik Sahakari Bank"
      },
      {
        "id": uuidv4(),
        "code": "TBPX",
        "bank_name": "Botad Peoples Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "TBSB",
        "bank_name": "Thane Bharat Sahakari Bank"
      },
      {
        "id": uuidv4(),
        "code": "TBSX",
        "bank_name": "Bihar State Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "TBTX",
        "bank_name": "Baroda Traders Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "TBUX",
        "bank_name": "Balusseri Co-operative Urban Bank"
      },
      {
        "id": uuidv4(),
        "code": "TCBX",
        "bank_name": "Co-operative Bank of Rajkot"
      },
      {
        "id": uuidv4(),
        "code": "TCCX",
        "bank_name": "Commercial Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "TCHX",
        "bank_name": "Town Co-operative Bank Hoskote"
      },
      {
        "id": uuidv4(),
        "code": "TCPX",
        "bank_name": "Tamilnadu Circle Postal Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "TCUB",
        "bank_name": "Trivandrum Co-operative Urban Bank"
      },
      {
        "id": uuidv4(),
        "code": "TCUX",
        "bank_name": "Tiruvallur Co-operative Urban Bank"
      },
      {
        "id": uuidv4(),
        "code": "TDBX",
        "bank_name": "District Co-operative Central Bank"
      },
      {
        "id": uuidv4(),
        "code": "TDCB",
        "bank_name": "Thane District Central Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "TDCX",
        "bank_name": "Thrissur District Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "TDIX",
        "bank_name": "District Co-operative Central Bank Kakinada"
      },
      {
        "id": uuidv4(),
        "code": "TDMX",
        "bank_name": "Dhanera Mercantile Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "TDPX",
        "bank_name": "Thodupuzha Urban Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "TDSX",
        "bank_name": "Nizamabad District Co-operative Central Bank"
      },
      {
        "id": uuidv4(),
        "code": "TECX",
        "bank_name": "Eenadu Co-operative Urban Bank"
      },
      {
        "id": uuidv4(),
        "code": "TEHX",
        "bank_name": "Tehri Garhwal Zila Sahakari Bank"
      },
      {
        "id": uuidv4(),
        "code": "TEMX",
        "bank_name": "Textile Manufacturers Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "TESX",
        "bank_name": "Textile Co-operative Bank of Surat"
      },
      {
        "id": uuidv4(),
        "code": "TETX",
        "bank_name": "Textile Traders Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "TFCX",
        "bank_name": "Fatehabad Central Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "TGBX",
        "bank_name": "Tripura Gramin Bank"
      },
      {
        "id": uuidv4(),
        "code": "TGCG",
        "bank_name": "Gokak Urban Co-operative Credit Bank"
      },
      {
        "id": uuidv4(),
        "code": "TGCX",
        "bank_name": "Tamluk-ghatal Central Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "TGDX",
        "bank_name": "Gondia District Central Co-operative Bank Gondia"
      },
      {
        "id": uuidv4(),
        "code": "TGMB",
        "bank_name": "Tumkur Grain Merchant's Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "TGNX",
        "bank_name": "Gandhinagar Nagrik Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "TGUX",
        "bank_name": "Gandhinagar Urban Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "THCX",
        "bank_name": "Hooghly Co-operative Credit Bank"
      },
      {
        "id": uuidv4(),
        "code": "THMX",
        "bank_name": "Halol Mercantile Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "THOX",
        "bank_name": "Thoothukudi District Central Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "THRS",
        "bank_name": "Thrissur District Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "THRX",
        "bank_name": "Raichur District Central Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "THWX",
        "bank_name": "Howrah District Central Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "TIDX",
        "bank_name": "Thiruvannamalai District Central Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "TIRX",
        "bank_name": "Tirunelveli District Central Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "TJAX",
        "bank_name": "Jaisalmer Central Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "TJBX",
        "bank_name": "Janata Co-operative Bank Sadalga"
      },
      {
        "id": uuidv4(),
        "code": "TJCX",
        "bank_name": "Thanjavur Central Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "TJDX",
        "bank_name": "Jalgaon District Central Co-operative Bank Jalgaon"
      },
      {
        "id": uuidv4(),
        "code": "TJMX",
        "bank_name": "Jaynagar Mozilpur Peoples Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "TJNX",
        "bank_name": "Jamnagar Mahila Sahakari Bank"
      },
      {
        "id": uuidv4(),
        "code": "TJSB",
        "bank_name": "TJSB Sahakari Bank"
      },
      {
        "id": uuidv4(),
        "code": "TKAX",
        "bank_name": "Karjan Nagrik Sahakari Bank"
      },
      {
        "id": uuidv4(),
        "code": "TKCX",
        "bank_name": "Kakatiya Co-operative Urban Bank"
      },
      {
        "id": uuidv4(),
        "code": "TKDX",
        "bank_name": "Kannur District Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "TKTX",
        "bank_name": "Kottakkal Co-operative Urban Bank"
      },
      {
        "id": uuidv4(),
        "code": "TKUX",
        "bank_name": "Karan Urban Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "TLPX",
        "bank_name": "Lunawada Peoples Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "TMAX",
        "bank_name": "Madanapalle Co-operative Town Bank"
      },
      {
        "id": uuidv4(),
        "code": "TMBL",
        "bank_name": "Tamilnad Mercantile Bank"
      },
      {
        "id": uuidv4(),
        "code": "TMBX",
        "bank_name": "Mangalore Catholic Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "TMCX",
        "bank_name": "Motihari Central Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "TMNX",
        "bank_name": "Mahanagar Co-operative Urban Bank"
      },
      {
        "id": uuidv4(),
        "code": "TMPX",
        "bank_name": "Midnapore Peoples Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "TMSB",
        "bank_name": "The Malad Sahakari Bank"
      },
      {
        "id": uuidv4(),
        "code": "TMSC",
        "bank_name": "Mysore Silk Cloth Merchants Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "TMSX",
        "bank_name": "Modasa Nagarik Sahakari Bank"
      },
      {
        "id": uuidv4(),
        "code": "TMTX",
        "bank_name": "Mangalore Co-operative Town Bank"
      },
      {
        "id": uuidv4(),
        "code": "TMUX",
        "bank_name": "Mahila Urban Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "TNBX",
        "bank_name": "Meghraj Nagarik Sahakari Bank"
      },
      {
        "id": uuidv4(),
        "code": "TNCB",
        "bank_name": "Nawanagar Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "TNCX",
        "bank_name": "National Central Co-operative Bank Bettiah"
      },
      {
        "id": uuidv4(),
        "code": "TNDC",
        "bank_name": "Thiruvananthapuram District Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "TNEX",
        "bank_name": "Nehrunagar Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "TNHX",
        "bank_name": "Nakodar Hindu Urban Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "TNIX",
        "bank_name": "Tamilnadu Industrial Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "TNKX",
        "bank_name": "Neela Krishna Co-operative Urban Bank"
      },
      {
        "id": uuidv4(),
        "code": "TNMX",
        "bank_name": "Nanded Merchants Co-operative Bank Nanded"
      },
      {
        "id": uuidv4(),
        "code": "TNSC",
        "bank_name": "Tamilnadu State Apex Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "TNUX",
        "bank_name": "Nandura Urban Co-operative Bank Nandura"
      },
      {
        "id": uuidv4(),
        "code": "TOCX",
        "bank_name": "Ottapalam Co-operative Urban Bank"
      },
      {
        "id": uuidv4(),
        "code": "TPCX",
        "bank_name": "Patliputra Central Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "TPDX",
        "bank_name": "Prakasam District Co-operative Central Bank"
      },
      {
        "id": uuidv4(),
        "code": "TPSC",
        "bank_name": "Punjab State Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "TPSX",
        "bank_name": "Tripura State Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "TPUX",
        "bank_name": "Urban Co-operative Bank No 1758 Perinthalmanna"
      },
      {
        "id": uuidv4(),
        "code": "TRAX",
        "bank_name": "Transport Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "TRDX",
        "bank_name": "Tiruchirapalli Dist. Cent Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "TSAB",
        "bank_name": "Telangana State Co-operative Apex Bank"
      },
      {
        "id": uuidv4(),
        "code": "TSAX",
        "bank_name": "Satana Merchants Co-operative Bank, Satana"
      },
      {
        "id": uuidv4(),
        "code": "TSBX",
        "bank_name": "Sasaram Bhabhua Central Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "TSCX",
        "bank_name": "Santragachi Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "TSDX",
        "bank_name": "District Co-operative Central Bank Srikakul"
      },
      {
        "id": uuidv4(),
        "code": "TSIX",
        "bank_name": "Shillong Co-operative Urban Bank"
      },
      {
        "id": uuidv4(),
        "code": "TSKX",
        "bank_name": "Aska Co-operative Central Bank"
      },
      {
        "id": uuidv4(),
        "code": "TSMX",
        "bank_name": "Sardargunj Mercantile Co-operative Bank Patan"
      },
      {
        "id": uuidv4(),
        "code": "TSNX",
        "bank_name": "Shoranur Co-operative Urban Bank"
      },
      {
        "id": uuidv4(),
        "code": "TSPX",
        "bank_name": "Sathamba Peoples Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "TSSB",
        "bank_name": "Satara Sahakari Bank"
      },
      {
        "id": uuidv4(),
        "code": "TSSX",
        "bank_name": "S.S.K Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "TSUX",
        "bank_name": "Saurashtra Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "TTBX",
        "bank_name": "Taliparamba Co-operative Urban Bank"
      },
      {
        "id": uuidv4(),
        "code": "TTCB",
        "bank_name": "Textile Traders Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "TTCX",
        "bank_name": "Tarn Taran Central Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "TTGX",
        "bank_name": "Tasgaon Urban Co-operative Banktasgaon"
      },
      {
        "id": uuidv4(),
        "code": "TTLX",
        "bank_name": "Textile Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "TTUX",
        "bank_name": "Tirur Urban Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "TUBX",
        "bank_name": "Trichur Urban Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "TUCL",
        "bank_name": "The Union Co-operative Bank Mahinagar"
      },
      {
        "id": uuidv4(),
        "code": "TUCX",
        "bank_name": "Tirupati Urban Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "TUDX",
        "bank_name": "Urban Co-operative Bank Dharangaon"
      },
      {
        "id": uuidv4(),
        "code": "TUMX",
        "bank_name": "Udaipur Mahila Urban Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "TUNX",
        "bank_name": "Union Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "TUOX",
        "bank_name": "Urban Co-operative Bank Saharanpur"
      },
      {
        "id": uuidv4(),
        "code": "TUPX",
        "bank_name": "Uttarsanda Peoples Co-operative Bank Uttarsanda"
      },
      {
        "id": uuidv4(),
        "code": "TURX",
        "bank_name": "Tura Urban Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "TVBX",
        "bank_name": "Vellala Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "TVDX",
        "bank_name": "District Co-operative Central Bank Vizianagaram"
      },
      {
        "id": uuidv4(),
        "code": "TVPX",
        "bank_name": "Veraval Peoples Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "TVUX",
        "bank_name": "Vita Urban Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "TYCX",
        "bank_name": "Shree Thyagaraja Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "UBBX",
        "bank_name": "Urban Co-operative Bank Basti"
      },
      {
        "id": uuidv4(),
        "code": "UBGX",
        "bank_name": "Uttar Bihar Gramin Bank"
      },
      {
        "id": uuidv4(),
        "code": "UBIN",
        "bank_name": "Union Bank of India"
      },
      {
        "id": uuidv4(),
        "code": "UCBA",
        "bank_name": "UCO Bank"
      },
      {
        "id": uuidv4(),
        "code": "UCBS",
        "bank_name": "Utkal Co-operative Banking Society"
      },
      {
        "id": uuidv4(),
        "code": "UCBX",
        "bank_name": "Urban Co-operative Bank Bareilly"
      },
      {
        "id": uuidv4(),
        "code": "UCCX",
        "bank_name": "Udaipur Central Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "UCDX",
        "bank_name": "Urban Co-operative Bank Dehradun"
      },
      {
        "id": uuidv4(),
        "code": "UCUX",
        "bank_name": "Universal Co-operative Urban Bank"
      },
      {
        "id": uuidv4(),
        "code": "UGBX",
        "bank_name": "Utkal Grameen Bank"
      },
      {
        "id": uuidv4(),
        "code": "UICX",
        "bank_name": "United India Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "UJSX",
        "bank_name": "Unjha Nagarik Sahakari Bank"
      },
      {
        "id": uuidv4(),
        "code": "UJVN",
        "bank_name": "Ujjivan Small Finance Bank"
      },
      {
        "id": uuidv4(),
        "code": "UKGX",
        "bank_name": "Uttarbanga Kshetriya Gramin Bank"
      },
      {
        "id": uuidv4(),
        "code": "UMAX",
        "bank_name": "Uma Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "UMCX",
        "bank_name": "Umreth Urban Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "UMSX",
        "bank_name": "Udaipur Mahila Samridhi Urban Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "UMUX",
        "bank_name": "Umiya Urban Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "UNAX",
        "bank_name": "Una Peoples Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "UNIX",
        "bank_name": "United Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "UNMX",
        "bank_name": "United Mercantile Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "UNSX",
        "bank_name": "Unava Nagrik Sahakari Bank"
      },
      {
        "id": uuidv4(),
        "code": "UOVB",
        "bank_name": "United Overseas Bank"
      },
      {
        "id": uuidv4(),
        "code": "UPCB",
        "bank_name": "Uttar Pradesh Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "UPCX",
        "bank_name": "Uttar Pradesh Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "UPNX",
        "bank_name": "United Puri Nimapara Central Bank"
      },
      {
        "id": uuidv4(),
        "code": "URBN",
        "bank_name": "Urban Co-operative Bank Perinthalmanna"
      },
      {
        "id": uuidv4(),
        "code": "URCX",
        "bank_name": "Urban Co-operative Bank Siddharthnagar"
      },
      {
        "id": uuidv4(),
        "code": "URDX",
        "bank_name": "Urban Co-operative Bank Budaun"
      },
      {
        "id": uuidv4(),
        "code": "URMX",
        "bank_name": "Urban Co-operative Bank Mainpuri"
      },
      {
        "id": uuidv4(),
        "code": "UROX",
        "bank_name": "Urban Co-operative Bank Rourkela"
      },
      {
        "id": uuidv4(),
        "code": "USFB",
        "bank_name": "Ujjivan Small Finance Bank"
      },
      {
        "id": uuidv4(),
        "code": "USNX",
        "bank_name": "Udham Singh Nagar District Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "UTBI",
        "bank_name": "United Bank of India"
      },
      {
        "id": uuidv4(),
        "code": "UTBX",
        "bank_name": "Uttarpara Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "UTCX",
        "bank_name": "Uttrakhand Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "UTGX",
        "bank_name": "Uttarakhand Gramin Bank"
      },
      {
        "id": uuidv4(),
        "code": "UTIB",
        "bank_name": "Axis Bank"
      },
      {
        "id": uuidv4(),
        "code": "UTKS",
        "bank_name": "Utkarsh Small Finance Bank"
      },
      {
        "id": uuidv4(),
        "code": "UTKX",
        "bank_name": "Uttarakhand State Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "UTZX",
        "bank_name": "Uttarkashi Zila Sahakari Bank"
      },
      {
        "id": uuidv4(),
        "code": "UUCB",
        "bank_name": "Udaipur Urban Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "UUCX",
        "bank_name": "Udaipur Urban Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "UXXX",
        "bank_name": "Udupi Co-operative Town Bank"
      },
      {
        "id": uuidv4(),
        "code": "VADX",
        "bank_name": "Valsad District Central Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "VAIX",
        "bank_name": "Vaishya Sahakari Bank Mumbai"
      },
      {
        "id": uuidv4(),
        "code": "VANX",
        "bank_name": "Vaishya Nagari Sahakari Bank"
      },
      {
        "id": uuidv4(),
        "code": "VARA",
        "bank_name": "Varachha Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "VASJ",
        "bank_name": "Vasai Janata Sahakari Bank"
      },
      {
        "id": uuidv4(),
        "code": "VASX",
        "bank_name": "Vyaparik Audhyogik Sahakari Bank"
      },
      {
        "id": uuidv4(),
        "code": "VAUX",
        "bank_name": "Valmiki Urban Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "VCAX",
        "bank_name": "Vaish Co-operative Adarsh Bank"
      },
      {
        "id": uuidv4(),
        "code": "VCBX",
        "bank_name": "Vishwas Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "VCCX",
        "bank_name": "Shri Veershaiv Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "VCNB",
        "bank_name": "Vaish Co-operative New Bank"
      },
      {
        "id": uuidv4(),
        "code": "VCOB",
        "bank_name": "The Vijay Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "VCOX",
        "bank_name": "Vita Merchants Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "VDCX",
        "bank_name": "Villupuram District Central Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "VDYX",
        "bank_name": "Vidyanand Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "VEDX",
        "bank_name": "Vellore District Central Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "VERX",
        "bank_name": "Veraval Mercantile Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "VGBX",
        "bank_name": "Jharkhand Rajya Gramin Bank"
      },
      {
        "id": uuidv4(),
        "code": "VHDX",
        "bank_name": "Vaishali District Central Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "VICX",
        "bank_name": "Vijay Commercial Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "VIDX",
        "bank_name": "Vidyasagar Central Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "VIJB",
        "bank_name": "Vijaya Bank"
      },
      {
        "id": uuidv4(),
        "code": "VIJX",
        "bank_name": "Vijay Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "VIKX",
        "bank_name": "Vikramaditya Nagrik Sahakari Bank"
      },
      {
        "id": uuidv4(),
        "code": "VIMX",
        "bank_name": "Viramgam Mercantile Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "VIRX",
        "bank_name": "Virudhunagar District Central Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "VISX",
        "bank_name": "Visakhapatnam Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "VJSX",
        "bank_name": "Vasai Janata Sahakari Bank"
      },
      {
        "id": uuidv4(),
        "code": "VKCX",
        "bank_name": "Vima Kamgar Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "VKSX",
        "bank_name": "Vikas Sahakari Bank Solapur"
      },
      {
        "id": uuidv4(),
        "code": "VMCX",
        "bank_name": "Vardhaman (mahila) Co-operative Urban Bank"
      },
      {
        "id": uuidv4(),
        "code": "VMMX",
        "bank_name": "Vaijapur Merchants Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "VMUX",
        "bank_name": "Vidarbha Merchants Urban Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "VNSX",
        "bank_name": "Vivekanand Nagrik Sahakari Bank Mydt"
      },
      {
        "id": uuidv4(),
        "code": "VRDX",
        "bank_name": "Vardhaman Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "VSBL",
        "bank_name": "Vishweshwar Sahakari Bank"
      },
      {
        "id": uuidv4(),
        "code": "VSBX",
        "bank_name": "Vidya Sahakari Bank"
      },
      {
        "id": uuidv4(),
        "code": "VSCX",
        "bank_name": "Vikas Souharda Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "VSSX",
        "bank_name": "Veerashaiva Sahakari Bank"
      },
      {
        "id": uuidv4(),
        "code": "VSVX",
        "bank_name": "Vaishali Shahari Vikas Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "VUCX",
        "bank_name": "Vaidyanath Urban Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "VVCX",
        "bank_name": "Vallabh Vidyanagar Commercial Bank"
      },
      {
        "id": uuidv4(),
        "code": "VVSB",
        "bank_name": "Vasai Vikas Sahakari Bank"
      },
      {
        "id": uuidv4(),
        "code": "VYAX",
        "bank_name": "Vyavsayak Sahakari Bank"
      },
      {
        "id": uuidv4(),
        "code": "VYPX",
        "bank_name": "Vyapari Sahakari Bank Maryadit Solapur"
      },
      {
        "id": uuidv4(),
        "code": "VYSA",
        "bank_name": "ING Vysya Bank"
      },
      {
        "id": uuidv4(),
        "code": "WACX",
        "bank_name": "Waghodia Urban Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "WAIX",
        "bank_name": "Wai Urban Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "WARX",
        "bank_name": "Warangal District Co-operative Central Bank"
      },
      {
        "id": uuidv4(),
        "code": "WAUX",
        "bank_name": "Wardhaman Urban Co-operative Bank Nagpur"
      },
      {
        "id": uuidv4(),
        "code": "WBSC",
        "bank_name": "West Bengal State Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "WCBX",
        "bank_name": "Women's Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "WDCX",
        "bank_name": "Wayanad District Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "WKGX",
        "bank_name": "Vidharbha Kokan Gramin Bank"
      },
      {
        "id": uuidv4(),
        "code": "WNBX",
        "bank_name": "Wana Nagirik Sahakari Bank"
      },
      {
        "id": uuidv4(),
        "code": "WPAC",
        "bank_name": "Westpac Banking Corporation"
      },
      {
        "id": uuidv4(),
        "code": "WRCX",
        "bank_name": "Warangal Urban Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "WUCX",
        "bank_name": "Washim Urban Co-operative Bank."
      },
      {
        "id": uuidv4(),
        "code": "WZUX",
        "bank_name": "Wardha Zilla Parishad Emp Urban Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "XJKG",
        "bank_name": "J&K Grameen Bank"
      },
      {
        "id": uuidv4(),
        "code": "YADX",
        "bank_name": "Yavatmal District Central Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "YAVX",
        "bank_name": "Yavatmal Urban Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "YCBX",
        "bank_name": "Yashwant Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "YDCX",
        "bank_name": "Youth Development Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "YESB",
        "bank_name": "Yes Bank"
      },
      {
        "id": uuidv4(),
        "code": "YLNX",
        "bank_name": "Yadagiri Lakshmi Narsimha Swamy Co-operative Urban Bank"
      },
      {
        "id": uuidv4(),
        "code": "YMSX",
        "bank_name": "Yavatmal Mahila Sahakari Bank"
      },
      {
        "id": uuidv4(),
        "code": "YNCX",
        "bank_name": "Yamuna Nagar Central Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "YNSX",
        "bank_name": "Yeshwant Nagari Sahakari Bank"
      },
      {
        "id": uuidv4(),
        "code": "ZBBX",
        "bank_name": "Zila Sahakari Bank Bulandshahar"
      },
      {
        "id": uuidv4(),
        "code": "ZBSX",
        "bank_name": "Zila Sahakari Bank Mathura"
      },
      {
        "id": uuidv4(),
        "code": "ZCBL",
        "bank_name": "Zoroastrian Co-operative Bank"
      },
      {
        "id": uuidv4(),
        "code": "ZIBX",
        "bank_name": "Zila Sahakari Bank Bareilly"
      },
      {
        "id": uuidv4(),
        "code": "ZILX",
        "bank_name": "Zila Sahakari Bank Unnao"
      },
      {
        "id": uuidv4(),
        "code": "ZIMX",
        "bank_name": "Zila Sahakari Bank Mirzapur"
      },
      {
        "id": uuidv4(),
        "code": "ZISX",
        "bank_name": "Zila Sahakari Bank Lucknow"
      },
      {
        "id": uuidv4(),
        "code": "ZLLX",
        "bank_name": "Zila Sahakari Bank Lalitpur"
      },
      {
        "id": uuidv4(),
        "code": "ZMMX",
        "bank_name": "Zila Sahakari Bank Moradabad"
      },
      {
        "id": uuidv4(),
        "code": "ZRNB",
        "bank_name": "Rani Channamma Mahila Sahakari Bank"
      },
      {
        "id": uuidv4(),
        "code": "ZSAX",
        "bank_name": "Zila Sahakari Bank Mau"
      },
      {
        "id": uuidv4(),
        "code": "ZSBG",
        "bank_name": "Zila Sahakari Bank Gorakhpur"
      },
      {
        "id": uuidv4(),
        "code": "ZSBL",
        "bank_name": "Zila Sahakari Bank Ghaziabad"
      },
      {
        "id": uuidv4(),
        "code": "ZSBX",
        "bank_name": "Zila Sahakari Bank Bijnor"
      },
      {
        "id": uuidv4(),
        "code": "ZSGX",
        "bank_name": "Zila Sahakari Bank Garhwal Kotdwar"
      },
      {
        "id": uuidv4(),
        "code": "ZSHX",
        "bank_name": "Zila Sahakari Bank Haridwar"
      },
      {
        "id": uuidv4(),
        "code": "ZSJX",
        "bank_name": "Zila Sahakari Bank Jhansi"
      },
      {
        "id": uuidv4(),
        "code": "ZSKX",
        "bank_name": "Zila Sahakari Bank Kanpur"
      },
      {
        "id": uuidv4(),
        "code": "ZSLX",
        "bank_name": "Zila Sahakari Bank Lakhimpur Kheri"
      },
      {
        "id": uuidv4(),
        "code": "ZSMX",
        "bank_name": "Zila Sahakari Bank Meerut"
      }
    ]

    await queryInterface.bulkInsert('BankDetail', banks, {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('BankDetail', null, {});
  }
};

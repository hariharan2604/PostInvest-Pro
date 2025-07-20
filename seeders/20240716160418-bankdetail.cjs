'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const tableName = 'BankDetail';
    const data = [
      {
        "id": "bff4ff8f-b105-4e9a-aad3-a74222b53288",
        "code": "AACX",
        "bank_name": "Akhand Anand Co.op Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "4e068687-4d5d-49e2-8abd-294b38dc620e",
        "code": "ABBL",
        "bank_name": "AB Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "46797480-fbca-4d7e-b350-b00b01f5daa2",
        "code": "ABCX",
        "bank_name": "Aurangabad District Central Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "6cb6eda7-f879-4d70-b69d-f1b13f4a25d0",
        "code": "ABDX",
        "bank_name": "Dr. Ambedkar Nagrik Sahakari Bank Mydt Gwalior",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "fe74bcb3-592c-449c-89ce-eaa938ff9f1b",
        "code": "ABEX",
        "bank_name": "Andhra Bank Employees Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "436a3011-e424-4915-8a6e-2346239de0b6",
        "code": "ABHY",
        "bank_name": "Abhyudaya Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "3f64ed3f-e818-4cfa-97a6-262f76a149d3",
        "code": "ABNA",
        "bank_name": "Royal Bank of Scotland N.V.",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "8a933093-4f40-4a46-a794-7fdbfaae1439",
        "code": "ABPB",
        "bank_name": "Aditya Birla Idea Payments Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "b647f295-cae9-4834-ad2d-a206516d2302",
        "code": "ABSB",
        "bank_name": "Abhinav Sahakari Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "7d3753b2-0359-4c8a-8b67-183fa42658a8",
        "code": "ABUX",
        "bank_name": "Abhinandan Urban Co-operative Bank Amravati",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "31c8a265-8eee-46b6-a63d-6cf29d5ee987",
        "code": "ACAX",
        "bank_name": "Assam Co-operative Apex Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "f9018aa1-029e-43d8-875e-08e224ca40f1",
        "code": "ACBX",
        "bank_name": "Adarsh Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "f47d8021-1693-45e7-a4a1-1de18ea17d6f",
        "code": "ACCX",
        "bank_name": "Ace Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "73348f2b-6c52-4a14-8294-c90e3bb7c471",
        "code": "ACKX",
        "bank_name": "Annasaheb Chougule Urban Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "b0f8d4cb-00dd-4210-a142-1380ec24a653",
        "code": "ACOX",
        "bank_name": "Amarnath Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "0d8aface-fc34-45d1-a318-287d04e3b26a",
        "code": "ACUB",
        "bank_name": "Aryapuram Co-operative Urban Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "1c3efe68-3e8e-4e1d-8217-9a23e7568453",
        "code": "ACUX",
        "bank_name": "Adarsh Co-operative Urban Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "b1e466be-644a-4137-8f32-8405c92f2826",
        "code": "ADBX",
        "bank_name": "Ahmedabad District Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "e6becb39-230e-4d5d-bf95-464df4d9b97a",
        "code": "ADCB",
        "bank_name": "Abu Dhabi Commercial Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "7b0284a1-275d-4033-8f95-2012e5fe6def",
        "code": "ADCC",
        "bank_name": "Akola District Central Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "bedbcb89-1c2a-4ebb-a446-3d1283b84acd",
        "code": "ADCX",
        "bank_name": "Shri Adinath Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "06ec0429-ca8b-43aa-b7aa-d9470d0d2dc4",
        "code": "ADDX",
        "bank_name": "Adilabad District Co-operative Central Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "b933b5b6-cc7e-47fd-938c-a9859e7c7de2",
        "code": "AGCX",
        "bank_name": "Agrasen Co-operative Urban Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "ef6f9707-0ce9-405f-82a2-ca7ba4c2a845",
        "code": "AGDX",
        "bank_name": "Agra District Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "14cea28c-e521-4aa4-a8d2-f08e9ef8bfc5",
        "code": "AGRX",
        "bank_name": "Agroha Co-operative Urban Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "e779a121-061c-4d11-b99a-b9120beb5fe2",
        "code": "AGSX",
        "bank_name": "Agrasen Nagari Sahakari Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "719712c1-6d56-4165-8b4e-bf433ef66c47",
        "code": "AGUX",
        "bank_name": "Agartala Co-operative Urban Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "052ed7bf-998f-47d5-b331-0c1bb03c2c60",
        "code": "AGVX",
        "bank_name": "Assam Gramin Vikash Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "de455b01-9d20-45a6-b7e6-9df2373962fc",
        "code": "AHDC",
        "bank_name": "Ahmednagar District Central Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "cfa87611-d6de-41c4-9a8a-e69756ea149c",
        "code": "AHMX",
        "bank_name": "Ahmednagar District Central Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "40b6f604-ea5b-4d9b-80e7-988a4bc14ce0",
        "code": "AHUX",
        "bank_name": "Ahilyadevi Urban Co-operative Bank Solapur",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "dd22a6a6-dcc4-469f-ab50-e686d193c746",
        "code": "AIRP",
        "bank_name": "Airtel Payments Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "9023876d-d60e-470c-b527-f4b11ab72ab9",
        "code": "AJAR",
        "bank_name": "Ajara Urban Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "505d88e7-1b81-4af2-9aa9-1d8f50e34f5d",
        "code": "AJHC",
        "bank_name": "Ambarnath Jai-hind Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "2585109b-44b0-455a-a76b-05a4958ef27f",
        "code": "AJKB",
        "bank_name": "Akola Janata Commercial Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "81a27305-a91c-4055-849b-3c4fab630310",
        "code": "AJMX",
        "bank_name": "Ajmer Central Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "cb6680fd-7d42-49a7-9d1f-0e45a464be58",
        "code": "AJNX",
        "bank_name": "Ajantha Urban Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "67d0c4a5-2755-47ae-aec2-9c9ee2386527",
        "code": "AJPX",
        "bank_name": "Ambajogai Peoples Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "0cdfdac2-1698-4065-8936-bb83391a369b",
        "code": "AJSX",
        "bank_name": "Ambarnath Jai-hind Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "742f937d-9431-4c37-b778-76fe44df0c2f",
        "code": "AJUX",
        "bank_name": "Ajara Urban Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "5c8d53de-e56f-46db-b36a-1efc4a7e1c1c",
        "code": "AKJB",
        "bank_name": "Akola Janata Commercial Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "a8b7bc37-7083-449a-b42b-bebcb4d0482b",
        "code": "AKKB",
        "bank_name": "Akkamahadevi Mahila Sahakari Bank Niyamit",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "4a7d5f77-e399-4c43-bd33-b2bbd327c25b",
        "code": "AKMX",
        "bank_name": "Akola Merchant Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "8d6808c8-faf8-47bb-9d10-442efabf891d",
        "code": "AKOX",
        "bank_name": "Akola Urban Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "51aee49b-9879-4009-938a-76c88a53bceb",
        "code": "ALAX",
        "bank_name": "Alavi Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "d09b6755-d21c-4228-a899-7c27d818038e",
        "code": "ALIX",
        "bank_name": "Aligarh District Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "afef357a-e9ba-406c-8493-b2dd12553ba4",
        "code": "ALLA",
        "bank_name": "Allahabad Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "9eb8e17c-feb8-4faf-ae6a-758d1e27fdb1",
        "code": "ALLX",
        "bank_name": "Allahabad District Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "c8093fa2-796b-4dc6-81c6-a0e7b073c7b8",
        "code": "ALWX",
        "bank_name": "Alwar Central Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "f365bd56-81ce-4faa-b229-0b6ebd07e303",
        "code": "AMAX",
        "bank_name": "Aman Sahakari Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "24c734d8-df38-47bd-ac52-1eafb532662b",
        "code": "AMBX",
        "bank_name": "Ambala Central Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "ceb7cc3b-6160-40e5-bbab-7f93b325d89a",
        "code": "AMCB",
        "bank_name": "Ahmedabad Mercantile Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "9ef75c7c-bd66-4aec-9acc-7f27db6036a7",
        "code": "AMCX",
        "bank_name": "Amritsar Central Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "8d1649d2-b4b2-4ccd-bda8-148219532201",
        "code": "AMDN",
        "bank_name": "Ahmednagar Merchants Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "aff84afa-ccce-4a97-9548-c9162c8035c9",
        "code": "AMMX",
        "bank_name": "Adarsh Mahila Mercantile Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "abee56fd-c545-4b44-a46f-11c7ee6e1746",
        "code": "AMNX",
        "bank_name": "Astha Mahila Nagrik Sahakari Bank Maryadit",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "9dbc1b85-2948-4190-8180-e0e0a6f0cc8f",
        "code": "AMRX",
        "bank_name": "Amreli Jilla Madhyastha Sahakari Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "e840a774-b1a0-4130-ba43-a23880da5c84",
        "code": "AMSB",
        "bank_name": "Annasaheb Magar Sahakari Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "0c30b80d-9bd3-4341-a5ca-03e0eea64068",
        "code": "AMSX",
        "bank_name": "Ambika Mahila Sahakari Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "801bcf29-e66f-420d-a927-3fce956ae5fd",
        "code": "ANBX",
        "bank_name": "Amreli Nagarik Sahakari Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "f6134cee-c66f-49fd-a6a4-7a52d5a8a625",
        "code": "ANDB",
        "bank_name": "Andhra Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "079a98d6-1fda-4718-83b0-2de7e812094f",
        "code": "ANDX",
        "bank_name": "Andarsul Urban Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "cee684da-2d72-47c6-9433-a57463e78316",
        "code": "ANMX",
        "bank_name": "Ahmednagar Merchant's Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "f11409d1-7620-488e-a61e-d7fdbc2032ca",
        "code": "ANSX",
        "bank_name": "Andaman & Nicobar State Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "86a9d527-7c50-409a-b758-76fb02a3e296",
        "code": "ANUX",
        "bank_name": "Anuradha Urban Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "5b744944-de6a-49d5-bf32-ba2d951a8e7a",
        "code": "ANZB",
        "bank_name": "Australia and New Zealand Banking Group",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "5d91a7da-0380-44d5-80b2-9256e27a02c9",
        "code": "APBL",
        "bank_name": "Andhra Pradesh State Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "336e1be2-c34e-4066-981f-6d491f993f88",
        "code": "APCX",
        "bank_name": "Alappuzha District Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "3a92ed52-a7d4-4d90-a232-e458ee560740",
        "code": "APGB",
        "bank_name": "Andhra Pragathi Grameena Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "416b80cd-6232-45da-b677-b678fadcf113",
        "code": "APGV",
        "bank_name": "Andhra Pradesh Grameena Vikas Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "e12bb017-56e5-422a-96a1-ae56ddf5f38a",
        "code": "APGX",
        "bank_name": "Andhra Pradesh Grameena Vikas Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "d8aeedf3-e441-46f8-9230-f2c7a6db35de",
        "code": "APJX",
        "bank_name": "Ap Janata Co-operative Urban Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "441b5852-081e-4c88-98b0-f874132fc6e7",
        "code": "APMC",
        "bank_name": "A.P. Mahesh Co-operative Urban Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "c28584f2-a41a-463d-a10b-caad36b5086f",
        "code": "APMX",
        "bank_name": "Ap Mahajan's Co-operative Urban Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "42996590-e0bf-44ef-9198-9825e5b1bb09",
        "code": "APNX",
        "bank_name": "Apani Sahakari Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "e910876b-b7c4-4f07-bb73-60d91e5d5210",
        "code": "APRR",
        "bank_name": "A.P. Raja Rajeswari Mahila Co-operative Urban Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "3c197695-712e-47d3-91b8-12166f489c81",
        "code": "APRX",
        "bank_name": "Arunachal Pradesh Rural Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "c964f0bf-648f-47ae-9cf4-882418e385b7",
        "code": "APSX",
        "bank_name": "P. D. Patilsaheb Sahakari Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "1877c4c5-0bc9-427b-938b-4f806a7627c5",
        "code": "ARBL",
        "bank_name": "Arvind Sahakari Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "c78a0aae-45e6-4114-8705-f330df55f162",
        "code": "ARCX",
        "bank_name": "Arunachal Pradesh State Co-operative Apex Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "95310cf4-4b80-4d31-b5b6-85034db52341",
        "code": "ARMX",
        "bank_name": "510 Army Base W/s Credit Co-operative Primary Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "af076cfa-1935-4aa4-bcd1-3875feff1971",
        "code": "ARYX",
        "bank_name": "Gramin Bank of Aryavart",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "c60d8ad7-fb3d-4c6a-8d24-fbf16c7fb336",
        "code": "ASBL",
        "bank_name": "Apna Sahakari Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "f00d778c-e7d8-479f-8e24-89c18b765354",
        "code": "ASBX",
        "bank_name": "Ahmednagar Shahar Sahakari Bank Maryadit",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "40def4ad-426c-4b84-888e-c0907a911d6c",
        "code": "ASHX",
        "bank_name": "Ashta People's Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "1c39b17a-e15f-4db6-85b0-8ead13f428ec",
        "code": "ASKX",
        "bank_name": "Arvind Sahakari Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "cf7d8aa9-e621-4329-950a-e073ed3d0a6f",
        "code": "ASNX",
        "bank_name": "Ashoknagar Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "dcba09c0-9332-4582-a802-ce2a5731b176",
        "code": "ASOX",
        "bank_name": "Associate Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "0dc654c2-f25c-4283-84ee-09f2addb7758",
        "code": "ASSX",
        "bank_name": "Ashok Sahakari Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "0b21ddf0-add8-4cdd-ba29-1efd95d35fe5",
        "code": "AUBL",
        "bank_name": "AU Small Finance Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "c29de7d8-c748-4500-8ec0-4aeb8f01549d",
        "code": "AUBX",
        "bank_name": "Angul United Central Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "2abdd2df-9134-412e-a4c0-b985031a4fa2",
        "code": "AUCB",
        "bank_name": "Almora Urban Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "c224ba5f-706f-411b-bbb8-4dfb976dc68b",
        "code": "AUCX",
        "bank_name": "Ajara Urban Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "0045b6c2-41bc-4882-82a6-b1aba983622d",
        "code": "AUGX",
        "bank_name": "Allahabad Up Gramin Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "09abc569-88db-4ad5-a5e5-57b020c96d34",
        "code": "AURX",
        "bank_name": "Aurangabad District Central Co-operative Bank. Bihar",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "11be1f76-4d9d-42e3-a268-843772a4e58e",
        "code": "AVDX",
        "bank_name": "Amravati District Central Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "d683f304-c119-47d6-b170-021de81e01ac",
        "code": "AWCX",
        "bank_name": "Alwaye Urban Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "eb0ee545-9ec6-4102-8541-497c4a548cb8",
        "code": "AWUX",
        "bank_name": "Alwar Urban Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "e9e2235a-11f8-4e30-9e51-7d90d60fe73a",
        "code": "AZAX",
        "bank_name": "Azad Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "1e8ed57a-b7a5-4aa7-8c5e-7bfe5e1b73da",
        "code": "AZPX",
        "bank_name": "Amravati Zilla Parishad Shikshak Sahakari Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "0427ecd0-df66-40d4-8a95-0603f2579885",
        "code": "AZSX",
        "bank_name": "Almora Zila d Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "aea9403a-37bd-4310-9a62-a15c459587d6",
        "code": "AZUX",
        "bank_name": "Azad Urban Co-operative Bank Hubli",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "a61046a9-5771-4153-a247-fcc544ba6f5f",
        "code": "BACB",
        "bank_name": "Bassein Catholic Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "b08065d9-6f13-4b8e-9ed3-8ec25a3f203a",
        "code": "BACX",
        "bank_name": "Bihar Awami Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "7a957684-8fc9-4321-bec1-92480de4fa9f",
        "code": "BADX",
        "bank_name": "Bankura District Central Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "86e7ed3d-be7e-4b15-904c-f122d91ab7e9",
        "code": "BAGX",
        "bank_name": "Balangir District Central Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "e7d62fce-137a-488a-b025-0975ae08c21f",
        "code": "BALB",
        "bank_name": "Bally Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "398759a5-67b7-47de-8be3-ea004ad3585e",
        "code": "BALX",
        "bank_name": "Balasinor Nagarik Sahakari Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "1e20d0a8-5063-41aa-9417-c2b405550dad",
        "code": "BANX",
        "bank_name": "Banaras Mercantile Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "cd382f25-92f5-4a16-ba1f-2dbdc981de27",
        "code": "BARA",
        "bank_name": "Baramati Sahakari Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "1ec9b080-d433-46ce-bbbf-8ad592cb73a9",
        "code": "BARB",
        "bank_name": "Bank of Baroda",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "8138fdd1-7b2b-4859-8179-fa42534733aa",
        "code": "BARC",
        "bank_name": "Barclays Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "f5bc6bd0-d60a-4d76-b30f-0c3d5ec4970b",
        "code": "BARX",
        "bank_name": "Baroda City Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "54071ae1-df3e-440f-b90a-3a8acb6ee4e4",
        "code": "BASX",
        "bank_name": "Shri Basaveshwar Sahakari Bank Nyt.bagalkot",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "6968b129-3555-490d-b367-1b895613dff8",
        "code": "BAUX",
        "bank_name": "Badagara Co-operative Urban Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "cac7f98c-b4fd-4821-bc04-3aa1af273ff2",
        "code": "BAVX",
        "bank_name": "Bavla Nagrik Sahakari Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "ad9858c6-a3c7-43ea-8c67-9bccc4831e44",
        "code": "BAWX",
        "bank_name": "Bhawanipatna Central Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "725602ef-17b3-4300-9b81-ff993ee6da23",
        "code": "BBDX",
        "bank_name": "Birbhum District Central Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "c1324c13-8380-4d04-94d6-0f38da19fe58",
        "code": "BBKM",
        "bank_name": "Bank of Bahrein and Kuwait",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "2bba73d6-a5fc-4827-b92e-0e2ac0b6fd76",
        "code": "BBLX",
        "bank_name": "Bhingar Urban Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "6de021e2-c76f-495e-b7c4-ad9cd26bf6b0",
        "code": "BBRX",
        "bank_name": "Bangalore  Bangalore Rural&ramanagara Dccb",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "66906413-efc0-4564-b89e-c54cfc99c0e2",
        "code": "BBSX",
        "bank_name": "Balasore Bhadrak Central Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "0c1cd856-901c-47ed-ab26-ac4c094c9be9",
        "code": "BBUX",
        "bank_name": "Bellad Bagewadi Urban Souharada Sahakari Bank Nyt",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "d90b3a98-58b9-4c69-866b-bd607e448d46",
        "code": "BBVX",
        "bank_name": "Bhabhar Vibhag Nagrik Sahakari Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "1991d433-bddd-44e6-9f84-e18fdc8c1e76",
        "code": "BCBM",
        "bank_name": "Bharat Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "d2adb427-dcf4-423e-9d43-38fbaf18b72d",
        "code": "BCBX",
        "bank_name": "Bantra Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "06ef7f00-f799-488a-be9d-75d5bfcc52d3",
        "code": "BCCB",
        "bank_name": "Bangalore City Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "2f3904d1-b9de-4773-bcbe-1f2440bcf699",
        "code": "BCCX",
        "bank_name": "Bathinda Central Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "7cee9179-126c-4221-9d6c-f08c397eb00e",
        "code": "BCEX",
        "bank_name": "Banswara Central Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "ec473a11-edea-4fb1-8fe7-306bfcb75e2b",
        "code": "BCEY",
        "bank_name": "Bank of Ceylon",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "46deb5b7-dbb8-4a79-873e-726b6753993c",
        "code": "BCOX",
        "bank_name": "Bapuji Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "c16647b2-e86c-48d8-aa73-f745c747409a",
        "code": "BCUB",
        "bank_name": "Bicholim Urban Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "c8e6579c-90ad-4f6b-a6b7-7fd8aab34e02",
        "code": "BCUX",
        "bank_name": "Baghat Urban Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "1393157c-ea48-4806-ae6b-9d6f78fcda8b",
        "code": "BDBB",
        "bank_name": "Bahraich District Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "90cf6792-243d-499a-9465-f4320d32bf4e",
        "code": "BDBL",
        "bank_name": "Bandhan Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "655bac8a-9adc-4fbb-a385-4a3eb1008389",
        "code": "BDBX",
        "bank_name": "Bellary District Co-operative Central Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "51309304-e7ce-427a-b5d2-63e19ab460ff",
        "code": "BDCX",
        "bank_name": "Bijapur District Central Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "5afd064f-591b-44d0-a5b9-fc4d1ca4614a",
        "code": "BDDX",
        "bank_name": "Bhadradri Co-operative Urban Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "693ab569-a524-427a-ad3c-8879d8084763",
        "code": "BDIX",
        "bank_name": "Bhandara District Central Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "a7f436ea-e1e6-4c06-b777-c533a9ca3a7c",
        "code": "BDNX",
        "bank_name": "Bhind Nagrik Sahakari Bank Mydt",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "3a2f9653-85e9-4fae-b94e-62a74fbe90c3",
        "code": "BDOX",
        "bank_name": "Banda District Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "f0943279-fd15-4193-9522-95c9a24a9c6f",
        "code": "BDUX",
        "bank_name": "Banda Urban Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "cd70b5b3-4ed6-48d9-8226-95f748206816",
        "code": "BEDX",
        "bank_name": "Beed District Central Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "f5535caa-9512-499f-9e14-dcfdb94dc3cf",
        "code": "BELX",
        "bank_name": "Belgaum District Central Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "b0d9bbcd-54b8-41dc-85f9-3d0de9aa6676",
        "code": "BERX",
        "bank_name": "Berhampore Co-operative Central Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "861d99ae-2e41-42b5-8e23-0d85c3489a40",
        "code": "BFUX",
        "bank_name": "Bhagyodaya Friends Urban Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "22221475-486e-4bf5-960d-4911ca267926",
        "code": "BGBX",
        "bank_name": "Dakshin Bihar Gramin Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "b9ef4175-6355-450b-94a1-85b0d01674e0",
        "code": "BGCX",
        "bank_name": "Balageria Central Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "c95d031e-4d8e-4b4f-8dad-2adf928579c7",
        "code": "BGGX",
        "bank_name": "Baroda Gujarat Gramin Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "ee53c452-e0d4-42d9-8894-18b2c60cc417",
        "code": "BGUX",
        "bank_name": "Begusarai Central Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "f7764b19-6c29-442c-a800-d1b57f78779e",
        "code": "BGVX",
        "bank_name": "Bangiya Gramin Vikash Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "5334e15f-3727-488f-883d-298ac27d8284",
        "code": "BHAX",
        "bank_name": "Bhagyodaya Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "f3769fe3-d0bf-47a9-8625-ebd54b074120",
        "code": "BHBX",
        "bank_name": "Bhilai Nagarik Sahakari Bank Maryadit",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "b3316ed7-b34f-4e7b-a4a5-6e9e3d2a74be",
        "code": "BHCX",
        "bank_name": "Bhuj Commercial Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "3d369437-e158-44bd-89fd-a6fb923577f5",
        "code": "BHDX",
        "bank_name": "Bhadohi Urban Co-operative Bank Gyanpur",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "780da0f9-99b7-49ce-82ec-4b8af3240ac2",
        "code": "BHEX",
        "bank_name": "Bhel Employees Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "72f2f33a-3019-46e2-9da9-72877d3dabfa",
        "code": "BHGX",
        "bank_name": "Bhagalpur Central Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "c366bb73-3305-4373-bae1-72fecac43a1d",
        "code": "BHIX",
        "bank_name": "Bhilwara Mahila Urban Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "caaf4177-356e-48e4-9e30-44458dfba6ba",
        "code": "BHJX",
        "bank_name": "Bhuj Mercentile Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "a8a965d8-6f5c-4ec1-8bd4-7afb253139c0",
        "code": "BHMX",
        "bank_name": "Brahmadeodada Mane Sahakari Bank Solapur",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "7bfc7e5f-7640-438f-8284-8db9d962aa77",
        "code": "BHOX",
        "bank_name": "Bhopal Co-operative Central Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "1d81d64c-3f47-497c-8480-d2a3cf56a795",
        "code": "BHRX",
        "bank_name": "Bharatpur Central Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "a0256819-7756-445d-9742-036006fdfdfb",
        "code": "BHSX",
        "bank_name": "Bharati Sahakari Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "29fd302b-8dbc-43a3-8355-d803383c4fa8",
        "code": "BHTX",
        "bank_name": "Bhatkal Urban Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "e7911716-789b-4b9f-8450-0bc155840880",
        "code": "BHUX",
        "bank_name": "Bhilwara Urban Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "e2147570-9e8f-4549-ab53-cb92b4a2c132",
        "code": "BHWX",
        "bank_name": "Bhiwani Central Co-operative Bank Bhiwani",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "58af9fbb-3ba1-463c-8e20-0151c9d8ab77",
        "code": "BJUX",
        "bank_name": "Bijnor Urban Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "e8037f90-6f98-4300-bdc5-1512b39987f8",
        "code": "BKCX",
        "bank_name": "Bhavasara Kshatriya Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "d98cca6f-d614-4f3a-8206-af5fdd69f50c",
        "code": "BKDN",
        "bank_name": "Dena Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "89c3acb1-5dd8-4d81-84be-b0e2639493e4",
        "code": "BKDX",
        "bank_name": "Banaskantha District Central Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "41c8f613-9508-475e-9cc7-199e22e1ee94",
        "code": "BKID",
        "bank_name": "Bank of India",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "2c49d5cf-32c0-4247-aaee-038b13fe5144",
        "code": "BKSX",
        "bank_name": "Baran Kendriya Sahakari Bank Baran",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "a9902ae6-b761-48f2-b241-8f5e4c0c197b",
        "code": "BLGX",
        "bank_name": "Shree Basaveshwar Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "f0a26ee1-5b45-4a1c-8a9b-bb2a73d4b9c4",
        "code": "BMBL",
        "bank_name": "Bharatiya Mahila Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "c0ff2ece-c39a-470e-9738-e4e4f0eda30f",
        "code": "BMCB",
        "bank_name": "Bombay Mercantile Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "99a0a9de-a5b6-450b-a602-a3917ef5ab25",
        "code": "BMCX",
        "bank_name": "Barmer Central Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "cf7a41ce-3ae3-49a3-b010-f05f5ce26a3e",
        "code": "BMPX",
        "bank_name": "Banaskantha Mercantile Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "cadeddf1-6f20-41a5-93b5-5c14059f2371",
        "code": "BMSX",
        "bank_name": "Bhagyalakshmi Mahila Sahakari Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "fba03c3f-4dab-44bc-8d2a-b9c4fc1dadb6",
        "code": "BNBX",
        "bank_name": "Betul Nagrik Sahakari Bank Mydt",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "038d86aa-7421-4239-9d49-6d398b618d44",
        "code": "BNCX",
        "bank_name": "Bhatpara Naihati Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "b4429811-32c2-4eb7-afb9-42d3b029ab88",
        "code": "BNKX",
        "bank_name": "Banki Central Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "2930e54a-fe10-4932-b1ca-8dd467d4075e",
        "code": "BNPA",
        "bank_name": "BNP Paribas Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "6fde1444-3d41-41a3-9de3-e50bb787ed38",
        "code": "BNSB",
        "bank_name": "Bhagini Nivedita Sahakari Bank Pune",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "68468c86-3550-44d5-b804-623c46d8d4b7",
        "code": "BNSX",
        "bank_name": "Bhagini Nivedita Sahakari Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "3c4fa006-f593-4750-be51-a325db1baa78",
        "code": "BOCX",
        "bank_name": "Boudh Co-operative Central Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "c035d43e-a2ec-41b2-b412-113be5cbab89",
        "code": "BODX",
        "bank_name": "Bagalkot District Central Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "257f2629-f5ac-474f-a4a1-90d39c7a8609",
        "code": "BOFA",
        "bank_name": "Bank of America",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "b7eeaf54-8d97-4a5a-8ad8-21bd30f847e3",
        "code": "BORX",
        "bank_name": "Boral Union Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "4a0629e4-8cf5-4d98-aece-fe16dc55834a",
        "code": "BOTM",
        "bank_name": "MUFG Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "b9e5afed-f1d6-4772-9518-e28e0eca880c",
        "code": "BOTX",
        "bank_name": "Shree Botad Mercantile Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "c69c70f7-ca59-45aa-8e47-abb9749ceb8a",
        "code": "BPCX",
        "bank_name": "Bhadgaon People's Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "686c2566-772f-481e-a7b4-1cee7f3c7318",
        "code": "BPSX",
        "bank_name": "Bilagi Pattana Sahakari Bank Niyamit",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "1e97e8e6-88f9-40cb-8e98-2cc6ba520ed2",
        "code": "BRCX",
        "bank_name": "Bhavana Rishi Co-operative Urban Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "21237535-e247-45a7-a9d9-ac9890e3ba6c",
        "code": "BRDX",
        "bank_name": "Baroda Central Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "bd8c6a2f-d3a2-4853-bca7-eb5297eb42f5",
        "code": "BRGX",
        "bank_name": "Baroda Rajasthan Kshetriya Gramin Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "b28fe45d-9c4a-4150-9031-f33030115d7a",
        "code": "BRMX",
        "bank_name": "Bramhapuri Urban Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "8879c624-b1ac-4a65-9943-3a131e2efdaa",
        "code": "BRSX",
        "bank_name": "Baran Nagrik Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "2e72bb85-7053-44aa-b1ce-038b27e35496",
        "code": "BRUX",
        "bank_name": "Bharuch District Central Co-operative Bank Bharuc",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "11cff5e5-e5b1-4cc8-a7b3-5cdd3e8764a2",
        "code": "BSBX",
        "bank_name": "Baramati Sahakari Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "eb0d9289-07a9-4efd-8df4-900cdd2749d9",
        "code": "BSCX",
        "bank_name": "Baidyabati Sheoraphuli Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "9001d261-d175-47d6-8e01-17c3a13297d4",
        "code": "BTCX",
        "bank_name": "Balitikuri Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "58c3ae06-7c79-4ca4-a29b-8c1b76612b53",
        "code": "BTUX",
        "bank_name": "Balotra Urban Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "930d9379-3c13-4120-8ea1-82e0e52b7c83",
        "code": "BUBX",
        "bank_name": "Bhandara Urban Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "1f422b3a-6261-4e79-8918-d3e6a4c9648e",
        "code": "BUCL",
        "bank_name": "Belur Urban Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "09e968b1-2035-4015-946f-61776f7d9f33",
        "code": "BUCX",
        "bank_name": "Beawar Urban Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "e346bf45-b017-4db3-972f-be31a021f2ad",
        "code": "BUGX",
        "bank_name": "Baroda Uttar Pradesh Gramin Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "b0542388-de1c-4140-88c4-3732936e7e21",
        "code": "BUNX",
        "bank_name": "Bundi Central Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "8f57039a-6b8b-483e-941c-86c4d1694b8e",
        "code": "BURX",
        "bank_name": "Burdwan Central Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "ef1a882c-bb42-4686-8538-b21de6a2266c",
        "code": "BUSX",
        "bank_name": "Business Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "88e8412b-4de9-4d2e-ac49-f82de4d2532d",
        "code": "BUZX",
        "bank_name": "Badaun Zila d Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "2dddba0f-62c2-4c84-9d43-ede5b546d09e",
        "code": "BVNX",
        "bank_name": "Bhavnagar District Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "c71b53b1-8cef-4675-910b-25b38ec39943",
        "code": "BVSX",
        "bank_name": "Bhavani Sahakari Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "e99d265a-82f8-4567-ad37-6c81206e0b43",
        "code": "BWCX",
        "bank_name": "Brahmawart Commercial Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "f7f25d89-e1f1-4102-ae02-a6baff7fb179",
        "code": "CALX",
        "bank_name": "Calicut Co-operative Urban Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "a9698f10-dc32-4ea6-9253-9d2b2cd401bb",
        "code": "CBHX",
        "bank_name": "Central Co-operative Bank  Bhilwara",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "5d27d691-02ae-42f8-a456-e82ec8213e8c",
        "code": "CBIN",
        "bank_name": "Central Bank of India",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "d5f6e7b1-c23d-456c-948c-beb800c0df28",
        "code": "CCBL",
        "bank_name": "Citizen Credit Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "48b7d24d-3cbb-49e6-9147-eb53057d0493",
        "code": "CCBX",
        "bank_name": "Citizen Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "fa87b375-4059-4419-96e7-d5e03da239f8",
        "code": "CCCX",
        "bank_name": "Chennai Central Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "cc5bcaf7-63ba-4dbe-ab00-f8cec31d3bde",
        "code": "CCMX",
        "bank_name": "Chanasma Commercial Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "2d12b819-b8e4-402c-9598-48b453d8e913",
        "code": "CCOB",
        "bank_name": "City Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "6f19c73a-9b93-463c-abea-0808223aa85b",
        "code": "CCUX",
        "bank_name": "Chengelpattu Co-operative Urban Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "afe7b6a9-0154-43a5-9beb-43686495eabd",
        "code": "CDCX",
        "bank_name": "Cuddalore District Central Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "ea8e0a68-088a-4f81-80cd-80e32cf9c9d7",
        "code": "CEBX",
        "bank_name": "Central Co-operative Bank Bikaner",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "12e9cfb9-a52a-4313-ab7a-d66a2ce7e865",
        "code": "CGBX",
        "bank_name": "Chhattisgarh Rajya Gramin Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "1d6ee445-beef-44db-9b69-f2ab2f2af6f1",
        "code": "CGGX",
        "bank_name": "Chaitanya Godavari Grameena Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "aaae0575-cb11-4a6f-a2c1-b0348401dee2",
        "code": "CHAS",
        "bank_name": "JP Morgan Chase Bank NA",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "c2306c91-e66b-4b68-b6a3-2062a16cd7f3",
        "code": "CHAX",
        "bank_name": "Chamoli Zila d Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "7e570b70-dd57-44f6-a6fc-278f591c47cd",
        "code": "CHBX",
        "bank_name": "Chamba Urban Co-operative Bank Chamba",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "78b63c9b-7641-48e6-9fe5-017751b1ff9e",
        "code": "CHCX",
        "bank_name": "Churu Central Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "2c3b34f4-4f7e-4d5b-b776-ad852b6c83b0",
        "code": "CHDX",
        "bank_name": "Chittoor District Co-operative Central Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "a39f53f4-c1dd-4bc1-876d-940d1bd705ba",
        "code": "CHIX",
        "bank_name": "Chikhli Urban Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "c8d65ace-435f-4ae5-b5af-f90d40623402",
        "code": "CHKX",
        "bank_name": "Chittorgarh Kendriya Sahakari Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "26a35476-6c76-482a-9820-ce467eca4f7d",
        "code": "CHPX",
        "bank_name": "Chopda Peoples Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "34f91ca4-15cb-4038-8779-6a49991564a9",
        "code": "CHRX",
        "bank_name": "Cherpalcheri Co-operative Urban Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "b117e350-f5d6-4b2d-9735-622b1a0ec35f",
        "code": "CHSX",
        "bank_name": "Chandigarh State Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "b5eba786-e528-41c4-87d4-01ab5d4d6f1c",
        "code": "CHTX",
        "bank_name": "Chitnavispura Sahakari Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "e4f9aaac-7697-47c6-aded-9ad7be94df04",
        "code": "CIDX",
        "bank_name": "Chikmagalur District Central Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "8304f707-346b-4a00-899d-3ed83708fe20",
        "code": "CITI",
        "bank_name": "CITI Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "f15d909c-28c9-42d4-baed-85fc43eedbab",
        "code": "CITX",
        "bank_name": "Chitradurga District Co-operative Central Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "1280b12a-ba2b-4302-9eaf-ea686fbb07ca",
        "code": "CIUB",
        "bank_name": "City Union Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "666caca4-499d-4d8a-a172-b9f98bcbfca0",
        "code": "CJAX",
        "bank_name": "Citizens' Co-operative Bank Jammu",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "6829d77d-0592-4fc5-bf5a-5de1a7d93010",
        "code": "CJMX",
        "bank_name": "Karnataka Mahila Sahakari Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "4f701bf7-4c4e-491c-9d87-c7df8fa951a1",
        "code": "CLBL",
        "bank_name": "Capital Small Finance Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "9b908cc1-7a60-4b8d-b585-2d9ba5f6c579",
        "code": "CMCB",
        "bank_name": "Colour Merchant's Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "c1b8337a-face-433d-b3ee-45e4f5dc98f5",
        "code": "CMCX",
        "bank_name": "Commercial Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "55d5558f-4500-408c-9cb1-3143b28d8093",
        "code": "CMDX",
        "bank_name": "Coimbatore District Central Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "9f430c57-efe9-4553-98e1-54cb53501096",
        "code": "CMLX",
        "bank_name": "Commercial Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "f9bc0756-0ce5-46d0-9336-f94c80fdfa34",
        "code": "CMPX",
        "bank_name": "Central Madhya Pradesh Gramin Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "83cfabc7-322f-4b3d-9b1e-7d8a3280d905",
        "code": "CMSV",
        "bank_name": "Chaitanya Mahila Sahakari Bank, Vijayapur",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "b22b62ec-3c56-4887-b94f-c27f580592d4",
        "code": "CNRB",
        "bank_name": "Canara Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "25d5a606-5e40-462c-aca2-2ce9081d174a",
        "code": "CNSX",
        "bank_name": "Chembur Nagarik Sahakari Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "3fd01bb1-d346-491d-88a8-237ade7b18f3",
        "code": "COAS",
        "bank_name": "Coastal Local Area Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "437afd9b-df4f-47bf-a165-a5db388d3480",
        "code": "COCX",
        "bank_name": "Co-operative City Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "29b3dcbc-0976-47e8-b736-8b0504b9f308",
        "code": "COLX",
        "bank_name": "Coastal Local Area Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "42fdf807-cd70-413d-82bd-11a8d7da2ae0",
        "code": "COMX",
        "bank_name": "Co-operative Bank of Mehsana",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "d79a6d89-4847-496f-8551-eb7f4598686b",
        "code": "CONX",
        "bank_name": "Contai Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "6e251521-13a6-49c1-a5c3-85e2c1a51db8",
        "code": "CORP",
        "bank_name": "Corporation Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "58b2f4cf-01ae-451b-8e11-2534fbac1651",
        "code": "COSB",
        "bank_name": "Cosmos Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "374fe901-46be-4c2f-b337-0f592d187cae",
        "code": "CPDX",
        "bank_name": "Chandrapur District Central Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "28847af6-cfb1-41a7-8c9f-dd160f5e245b",
        "code": "CPSN",
        "bank_name": "Chikmagalur Pattana Sahakara Bank Niyamitha",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "a71e365d-7253-413f-b230-6e09c2aafdee",
        "code": "CRBX",
        "bank_name": "Central Co-operative Bank Ara",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "f58a8013-2344-41c4-9614-d6b20e98c3ea",
        "code": "CRES",
        "bank_name": "Credit Suisse AG",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "dd48eac2-1b4c-4508-9ee3-b06ecb11696f",
        "code": "CRGB",
        "bank_name": "Chhattisgarh Rajya Gramin Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "8501d5bc-aaa0-4630-aa25-cad081aef716",
        "code": "CRLY",
        "bank_name": "Credit Agricole Corporate and Investment Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "c0354964-9c1f-4055-8368-97212871801d",
        "code": "CRSX",
        "bank_name": "Chhattisgarh Rajya Sahakari Bank Mydt",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "03087c65-90dc-45f5-b73d-0b821c75ba16",
        "code": "CRUB",
        "bank_name": "Shri Chhatrapati Rajashri Shahu Urban Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "2f7c2003-db49-4261-9bb1-e4e544171bca",
        "code": "CSBK",
        "bank_name": "Catholic Syrian Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "fd5b44a1-d2b0-4f60-b4b9-b49d567b2905",
        "code": "CSBX",
        "bank_name": "Chartered Sahakari Bank Niyamitha",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "8928b367-f762-4c48-8448-9c57893f67fa",
        "code": "CTBA",
        "bank_name": "Commonwealth Bank of Australia",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "8d1466aa-0d6b-471f-ac73-918fa19b388e",
        "code": "CTBX",
        "bank_name": "Citizens Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "57de3cad-a0d1-425f-8738-cb161bc2fe0e",
        "code": "CTCB",
        "bank_name": "Chinatrust Commercial Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "1f0668e7-62ca-4072-bb3e-7949a916d800",
        "code": "CTOX",
        "bank_name": "Central Co-operative Bank Tonk",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "e05ba9d8-39b5-427a-898d-b009c1d97f71",
        "code": "CTUX",
        "bank_name": "Chittorgarh Urban Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "67ee1672-caf3-475c-b97f-448f65ae337e",
        "code": "CUBX",
        "bank_name": "Catholic Co-operative Urban Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "7607da9c-09da-416f-85f6-c0c248aaa075",
        "code": "CUCX",
        "bank_name": "Chiplun Urban Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "817344a4-4ef2-4563-93c4-882c8749460b",
        "code": "CURX",
        "bank_name": "Citizens Urban Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "6d8f9342-5027-44d0-a91f-1b8b826f9cf8",
        "code": "CUTX",
        "bank_name": "Cuttack Central Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "09bfb6a7-f9fb-4d69-a950-0a3f9484070c",
        "code": "CZCX",
        "bank_name": "Citizen Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "58a491f5-6d1f-4db2-869b-91ae4a25659f",
        "code": "CZUX",
        "bank_name": "Churu Zila Urban Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "27cb64c1-1bf1-453f-8545-6f9fb3820bfb",
        "code": "DAAX",
        "bank_name": "Defence Accounts Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "9d99ee09-cb33-49ac-a7ec-dc5253ccb632",
        "code": "DAHX",
        "bank_name": "Dahod Mercantile Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "dcba73d4-154b-48ee-9b35-f63ef8aa90d5",
        "code": "DAUX",
        "bank_name": "Dausa Urban Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "92bf105b-3dd2-42f6-b876-d07476556bb5",
        "code": "DBAX",
        "bank_name": "Dr Babasaheb Ambedkar Sahakari Bank Nasik",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "5907b805-f84f-4c1f-a61e-6fb840ebf282",
        "code": "DBSS",
        "bank_name": "Development Bank of Singapore",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "ba044d9d-da92-4d09-8ea3-0bbfff6bc415",
        "code": "DCBL",
        "bank_name": "DCB Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "9830ee8b-df1b-46aa-af91-9d5b48f56d88",
        "code": "DCBX",
        "bank_name": "Dindigul Central Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "78c81075-faed-4574-95b4-03ce506916eb",
        "code": "DCCX",
        "bank_name": "District Co-operative Central Bank Mahabubnagar",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "99b96d91-d588-4d93-93d8-1e2dd439b8b8",
        "code": "DCDX",
        "bank_name": "District Central Co-operative Bank Elluru",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "689efb11-40e5-4129-ba8a-b50a96e48acf",
        "code": "DCEX",
        "bank_name": "District Central Co-operative Bank Khammam",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "26c6d11a-70f6-449d-a4bb-8a98f81b88c0",
        "code": "DCKX",
        "bank_name": "District Co-operative Central Bank Kurnool",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "3269f471-b973-475f-b13d-aedd3f47462a",
        "code": "DCMX",
        "bank_name": "District Co-operative Bank Mainpuri",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "bb652fbd-326a-46e6-8f18-ead133e30280",
        "code": "DCNX",
        "bank_name": "Deccan Co-operative Urban Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "8430ec63-0ef1-428e-8d5c-92dabdc175d3",
        "code": "DCPX",
        "bank_name": "District Co-operative Bank Pilibhit",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "8965049a-455d-45e9-a3a0-347eea1efd75",
        "code": "DCSX",
        "bank_name": "District Co-operative Bank Shahjahanpur",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "09cb611a-393e-4b56-aeed-aaf88e12d93b",
        "code": "DCTX",
        "bank_name": "District Co-operative Bank Teliyabagh",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "e0f52bda-1298-4c16-a5c6-364d18c4df1d",
        "code": "DCUB",
        "bank_name": "Darussalam Co-operative Urban Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "bc318f7d-d33c-46b5-bcd1-502ef4f14afb",
        "code": "DCUX",
        "bank_name": "Darussalam Co-operative Urban Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "90ef8f0c-325b-4cb2-8971-93825cc2b465",
        "code": "DDBX",
        "bank_name": "Dharmapuri District Central Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "5671cfbe-6c1a-4cee-bb41-a708e0c96a5d",
        "code": "DDCX",
        "bank_name": "Darjeeling District Central Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "b7cd85ff-e357-4ecf-85fa-ec6aad2af31c",
        "code": "DDDX",
        "bank_name": "Dakshin Dinajpur District Central Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "ea85c384-f917-40fd-a915-e51bb08031ef",
        "code": "DDHX",
        "bank_name": "Dehradun District Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "d49228de-2b87-4a48-930e-7fe460400c20",
        "code": "DEGX",
        "bank_name": "Dena Gujarat Gramin Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "0c023669-c2df-4b54-89d1-702d2c5b914b",
        "code": "DENS",
        "bank_name": "Delhi Nagrik Sehkari Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "97e95d69-57f4-4e0a-b6c6-1737b855a127",
        "code": "DEOB",
        "bank_name": "Deogiri Nagari Sahakari Bank Aurangabad",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "ed177c6e-cd1c-4aab-a597-b35fa44fcb11",
        "code": "DEOX",
        "bank_name": "Deogiri Sahakari Bank Aurangabad",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "53b708ed-649c-45f2-8c21-55daabd52d68",
        "code": "DEUT",
        "bank_name": "Deutsche Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "5eae9f41-900e-4289-9a60-0802bd0acc2c",
        "code": "DEUX",
        "bank_name": "Devika Urban Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "eb60cc70-d4b3-4db8-8459-d88b6f0a3441",
        "code": "DEVX",
        "bank_name": "Development Co-operative Bank Kanpur",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "92efe03a-2b68-4d8a-9966-8e004a4b1dfa",
        "code": "DGBX",
        "bank_name": "Telangana Grameena Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "710474af-7709-498c-b3ea-ec55aa6b6340",
        "code": "DHBX",
        "bank_name": "Dhanbad Central Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "027dbe70-9c66-4916-b411-e1be6d88c11a",
        "code": "DHKX",
        "bank_name": "Dhakuria Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "60f555f2-a333-4be3-bfe9-c1e20d460aa9",
        "code": "DHUX",
        "bank_name": "Dahod Urban Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "50cca2de-588b-444f-97b9-32d13377af0e",
        "code": "DIBX",
        "bank_name": "District Co-operative Bank Barabanki",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "3e88a09d-dca0-4d6b-ba4c-3b95b5777d8c",
        "code": "DICG",
        "bank_name": "Deposit Insurance and Credit Guarantee Corporation",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "fba629f4-add4-4120-80e8-03d1e95abf9b",
        "code": "DICX",
        "bank_name": "District Co-operative Central Bank Visakhapatnam",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "4ec49e22-e8f9-4f0e-b2af-3443b1caf034",
        "code": "DISX",
        "bank_name": "District Co-operative Bank, Sitapur",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "16675c1e-56a4-4703-877e-f4b432a448ae",
        "code": "DIUX",
        "bank_name": "Dilip Urban Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "76946446-4507-477f-bde2-160ae89aaf67",
        "code": "DJCX",
        "bank_name": "Deoghar Jamtara Central Co-operative Bank Deoghar",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "eef88f29-3e03-47bc-9a82-809547204223",
        "code": "DKCL",
        "bank_name": "Deoria Kasia District Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "c7aaef71-a63d-435b-b51a-57fbd28cf83a",
        "code": "DKSX",
        "bank_name": "Dausa Kendriya Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "ba2d9400-51bd-4ffa-92e6-fcdeffafd9fb",
        "code": "DLSC",
        "bank_name": "Delhi State Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "dbbda6c4-531a-41cd-941b-72be1f137d40",
        "code": "DLXB",
        "bank_name": "Dhanlaxmi Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "8af36fbd-963b-4c68-b89c-61589b34d0b9",
        "code": "DMCB",
        "bank_name": "Deccan Merchants Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "5ab1646d-f77e-4d7c-a23a-7266be16ca93",
        "code": "DMCX",
        "bank_name": "Durgapur Mahila Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "d43728d5-7fb5-4069-9888-4a4208c5ebb1",
        "code": "DMKB",
        "bank_name": "Dattatraya Maharaj Kalambe Jaoli Sahakari Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "6da651e8-d801-4f42-bf10-8e7e843da412",
        "code": "DMKJ",
        "bank_name": "Dmk Jaoli Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "00a2e218-2717-4ae9-b151-9e585161d5d8",
        "code": "DNDC",
        "bank_name": "Dhule And Nandurbar District Central Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "e94324f2-bc16-4ced-a241-531949eafa23",
        "code": "DNSB",
        "bank_name": "Dombivli Nagari Sahakari Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "7b615b1a-fbe3-44b8-8693-d325b2297082",
        "code": "DNSX",
        "bank_name": "Deendayal Nagari Sahakari Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "f2ff88ee-3860-4e11-9576-edfee115f8f2",
        "code": "DOBX",
        "bank_name": "Dapoli Urban Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "06ae65a6-39c8-4353-b93a-e78d77500da2",
        "code": "DOHB",
        "bank_name": "Doha Bank QSC",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "74ca68b1-4aa0-4c31-8c86-9fb4fa510755",
        "code": "DRGX",
        "bank_name": "Durg Rajnandgaon Gramin Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "d56cb2c7-bc0f-44a6-809e-a10c415ffd00",
        "code": "DSAX",
        "bank_name": "District Central Co-operative Bank, Supaul",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "0f02a37d-35f1-48bb-9c23-17c33841eb64",
        "code": "DSBX",
        "bank_name": "Daivadnya Sahakara Bank Niyamit",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "c3d3ad26-67c1-4d59-8f55-ba10a58eebe2",
        "code": "DSCB",
        "bank_name": "Delhi State Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "54405a21-9e5e-4f39-b2ef-b0ea2c3105b9",
        "code": "DSHX",
        "bank_name": "District Co-operative Bank Saharanpur",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "db4d1731-b8e8-4ee2-8ef9-becbc893c854",
        "code": "DSPX",
        "bank_name": "Durgapur Steel Peoples' Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "90c8bd05-c320-4037-b490-d9450151ea72",
        "code": "DSUX",
        "bank_name": "Dharamvir Sambhaji Urban Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "56bde9a1-1079-4ece-af87-682a7db2b216",
        "code": "DTCX",
        "bank_name": "District Co-operative Bank Rae Bareli",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "3d32fa58-8d92-443f-aeca-731f7ad49c53",
        "code": "DTPX",
        "bank_name": "District Co-operative Bank Pratapgarh",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "afe33e7b-510b-4c67-9f91-3beeb94eb1cd",
        "code": "DUCX",
        "bank_name": "Daund Urban Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "23af9a06-aade-40dd-89d6-f20972af2d40",
        "code": "DUMX",
        "bank_name": "Dumka Central Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "7986e0ce-3cb0-4bf1-83a2-9b504bbfba22",
        "code": "DUNX",
        "bank_name": "Dungarpur Central Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "7998caf4-8a26-4fe7-a561-d9a3dd0364e6",
        "code": "DURG",
        "bank_name": "Durgapur Steel Peoples Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "e6a3efdf-ec3f-4adb-aab2-66175c72e85b",
        "code": "DVDX",
        "bank_name": "Davanagere District Central Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "732cf7ee-221b-47c7-b051-a643821802a5",
        "code": "DYPX",
        "bank_name": "D.y.patil Sahakari Bank Kolhapur",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "8f11e4bf-6a1f-42fa-9f1e-84b8aa8b469c",
        "code": "EBIL",
        "bank_name": "Emirates NBD Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "fd923c2d-707c-42ce-a08f-b984712dd036",
        "code": "ECBL",
        "bank_name": "Excellent Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "81777759-2b89-466f-b10c-1cfce21b63f9",
        "code": "EDBX",
        "bank_name": "Ellaquai Dehati Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "b2070a44-b4c3-4345-a8a0-68e0cd0b89f2",
        "code": "EDCX",
        "bank_name": "Erode District Central Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "a9ba071f-8938-41fa-90ae-1fb04c2d3034",
        "code": "EDSX",
        "bank_name": "Ernakulam District Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "d901a6fd-bfaa-478e-9190-58328786f7c7",
        "code": "EIBI",
        "bank_name": "Export Import Bank of India",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "b324c84a-2269-49e5-9787-245531c91c18",
        "code": "ESAF",
        "bank_name": "ESAF Small Finance Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "9eafb238-8dbb-415a-9499-b78cdcd8fea3",
        "code": "ESFB",
        "bank_name": "Equitas Small Finance Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "23ad8ac4-de1b-48df-aa50-821aa41e7126",
        "code": "ESMF",
        "bank_name": "Esaf Small Finance Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "c7a1cf3b-fcc4-4df3-ab02-c60035f09272",
        "code": "ETCX",
        "bank_name": "Etawah District Co-operative Bank Etwah",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "f6361a43-6bf5-4d59-9f0c-3c6fd11222e5",
        "code": "ETDX",
        "bank_name": "Etah District Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "e9a2057d-6766-4376-9119-b622f9e99fef",
        "code": "EUCX",
        "bank_name": "Etah Urban Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "6fd2eb66-b88c-40fb-a69d-8158b911e8cb",
        "code": "EWCX",
        "bank_name": "Etawah Urban Co-operative Bank Etawah",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "9daab30b-58ee-4d65-886e-2efac80458d4",
        "code": "FCBX",
        "bank_name": "Fazilka Central Co-operative. Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "9b49754f-4889-4848-a019-deae9f1948de",
        "code": "FCCX",
        "bank_name": "Faridkot Central Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "3e63ff70-b917-4c85-a82f-7e6185db71d3",
        "code": "FCOX",
        "bank_name": "District Co-operative Bank Faizabad",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "67a6698e-7aee-4eb2-87c4-a3d294680ec5",
        "code": "FDFX",
        "bank_name": "Farrukhabad District Co-operative Bank Fatehgarh",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "70ead612-1fb4-418b-892e-93df845b0347",
        "code": "FDRL",
        "bank_name": "Federal Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "308ba3a7-9838-465d-b7d6-9b385f6beb3d",
        "code": "FEKX",
        "bank_name": "Feroke Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "feda8ee7-1905-4433-9af3-5d928a666bef",
        "code": "FGCB",
        "bank_name": "Fingrowth Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "76f9d86c-ba67-40a2-bb34-f065367d22e5",
        "code": "FINF",
        "bank_name": "Fincare Small Finance Bank ",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "5dfa408a-e386-4385-9132-a2221055b044",
        "code": "FINO",
        "bank_name": "Fino Payments Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "70779092-89ef-4273-b5aa-ce9c9e1c670e",
        "code": "FINX",
        "bank_name": "Financial Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "326e13b8-5d09-4d91-a4d7-a4fef7e2c16c",
        "code": "FIRN",
        "bank_name": "Firstrand Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "33064ae3-00a6-4142-b76a-3612dcc639d9",
        "code": "FIRX",
        "bank_name": "Firstrand Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "c19d9bef-78ff-4b87-9754-46411a345f49",
        "code": "FMCX",
        "bank_name": "Faiz Mercantile Co-operative Bank, Nasik",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "fde74550-bf9c-4990-85dd-b004a26d3d20",
        "code": "FRIX",
        "bank_name": "Faridabad Central Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "88a37f19-7392-4501-b4d9-46ff6ac49b12",
        "code": "FSCX",
        "bank_name": "Fatehgrah Sahib Central Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "4ba5b2cc-0781-4b71-a4f3-ddf3a6e1a693",
        "code": "FSFB",
        "bank_name": "Fincare Small Finance Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "b0eff330-d7e6-4f70-879e-042c5c833945",
        "code": "FZCX",
        "bank_name": "Ferozepur Central Co-operative. Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "5ef853ad-623e-4a18-9d9d-44b698fb301e",
        "code": "FZSX",
        "bank_name": "Firozabad Zila d Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "bad4992d-01ff-41ba-896f-99c8083f18b9",
        "code": "GACX",
        "bank_name": "Gujarat Ambuja Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "e7f6cd29-8b44-4668-b23d-865a0cfa2485",
        "code": "GADX",
        "bank_name": "Gadhinglaj Urban Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "f5305932-6f9e-41b7-a67a-851f94f05ce0",
        "code": "GAMX",
        "bank_name": "Ganga Mercantile Urban Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "4b0c2f9b-de7b-4514-b6ad-b1506566dbcc",
        "code": "GANX",
        "bank_name": "Gandhidham Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "a39af9ac-dc4e-46bf-abb6-b359bc2678d6",
        "code": "GBCB",
        "bank_name": "Greater Bombay Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "6ffe67cd-3998-4cb5-942f-80ce33c2b457",
        "code": "GCBX",
        "bank_name": "Guruvayur Co-operative Urban Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "b1519c65-91f9-42aa-acf5-b61b27a3c139",
        "code": "GCCX",
        "bank_name": "Gurdaspur Central Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "991c20bc-e213-4e1a-9a9f-b4330e30aadf",
        "code": "GCUL",
        "bank_name": "Gauhati Co-operative Urban Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "6ab01c6a-5361-4951-9308-3ac741049a24",
        "code": "GCUX",
        "bank_name": "Gayatri Co-operative Urban Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "f23150ed-c8ad-478a-8c8a-19a8c037304a",
        "code": "GDCB",
        "bank_name": "Gadchiroli District Central Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "30a2a9ea-09b8-42de-8001-065fc5cc3f1e",
        "code": "GDCX",
        "bank_name": "Guntur District Co-operative Central Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "404cda54-87d7-40a0-8031-1ab6139670a9",
        "code": "GDDX",
        "bank_name": "Giridih Central Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "167e9295-a4cc-4252-8606-bf2d7bd35076",
        "code": "GDUX",
        "bank_name": "Godhra Urban Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "781c26db-1937-46e6-b430-d109b9a4324b",
        "code": "GGBK",
        "bank_name": "Gurgaon Gramin Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "c9197fba-375a-40ef-bdba-6f1eb987cd4f",
        "code": "GGCX",
        "bank_name": "Gopalganj Central Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "9cd32256-02d7-4911-90b1-8caa39d6413c",
        "code": "GHPX",
        "bank_name": "Ghatal Peoples' Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "f2aa5a11-4998-400c-bc07-8c6c044a0cc8",
        "code": "GKNX",
        "bank_name": "Ganganagar Kendriya Sahakari Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "d07631cd-51c2-4421-a507-f46b1f7115f7",
        "code": "GMBX",
        "bank_name": "Gandhidham Mercantile Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "f0807452-193e-4eba-9522-54a7ab753ebc",
        "code": "GMCX",
        "bank_name": "Gujarat Mercantile Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "e3772c76-c3bc-4144-9f34-66c38b5d7682",
        "code": "GMUX",
        "bank_name": "Gulshan Mercantile Urban Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "41f4a5fc-80f9-4a97-a133-b4461fe4d513",
        "code": "GNCX",
        "bank_name": "Gandhi Co-operative Urban Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "ea15e770-d342-4e1c-b568-e1c7d924301a",
        "code": "GNSX",
        "bank_name": "Gozaria Nagrik Sahakari Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "a377283f-b0ef-4aaa-b8c4-c35f00a15f9c",
        "code": "GODX",
        "bank_name": "Godavari Urban Co-operative Bank Nashik",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "0a87fa6f-6464-4d05-bcca-ab622269281d",
        "code": "GOSX",
        "bank_name": "Gondal Nagarik Sahakari Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "fbb758c1-5163-41cb-8fa5-6b902eca8722",
        "code": "GPCX",
        "bank_name": "Gandevi People's Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "f621d681-0e6d-4eae-b383-fc200dc1268c",
        "code": "GPOX",
        "bank_name": "General Post Office",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "cef2deb8-6d54-422a-8a31-c4034ab7a9fb",
        "code": "GRAX",
        "bank_name": "Grain Merchants' Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "eed0a4d2-e2c3-4d8d-8c18-e7b54b959712",
        "code": "GSBL",
        "bank_name": "Goa State Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "0c5270f7-039b-4cd4-9fc9-67c77a2c0464",
        "code": "GSBX",
        "bank_name": "Gandhibag Sahakari Bank  Nagpur",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "3c7b2bca-3c2e-40ba-8af3-4fe7d4e1cc61",
        "code": "GSCB",
        "bank_name": "Gujarat State Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "4a57a5cd-2d18-4401-a7c8-05c3ec17c7bc",
        "code": "GSCX",
        "bank_name": "Gumla Simdega Central Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "2e66f4d9-486b-4c85-8efe-17bc539231e7",
        "code": "GSSX",
        "bank_name": "Guardian Souharda Sahakari Bank Niyamita",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "01a4080d-dc02-4e73-8af2-6f50a99a2899",
        "code": "GTCX",
        "bank_name": "George Town Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "ba068579-5e5c-45ca-b8f6-2d2988c76519",
        "code": "GUBX",
        "bank_name": "Godavari Urban Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "c0d82699-4b4e-42ea-aba4-2c83264d1581",
        "code": "GUCX",
        "bank_name": "Goa Urban Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "d37ad12f-b9e8-450f-bd90-8b49e9a805b7",
        "code": "GUNX",
        "bank_name": "Guntur Co-operative Urban Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "8da404df-283c-4d06-a7d7-574eb76d73a3",
        "code": "GUOX",
        "bank_name": "Gurgaon Central Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "9ba939dc-7136-423b-9bb8-80f2f5e2effe",
        "code": "HAMX",
        "bank_name": "Hamirpur District Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "3e9fc413-3995-4ef5-8c2c-1279feac55b6",
        "code": "HANX",
        "bank_name": "Hanumangarh Kendriya Sahakari Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "e66a50db-230e-4119-8b86-63df1d17ef5f",
        "code": "HARC",
        "bank_name": "Haryana State Co-operative Apex Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "164990f7-c578-4534-8536-5a3e644c28bc",
        "code": "HCBL",
        "bank_name": "HASTI Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "b55c9e6b-6123-464e-8849-a937f87c2c5e",
        "code": "HCBX",
        "bank_name": "Hasti Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "c7c7bd08-77d5-4def-bee8-cf31b48a4f07",
        "code": "HCCX",
        "bank_name": "Hazaribag Central Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "547ee484-8a5d-4978-b421-39cbc986f3cc",
        "code": "HCLX",
        "bank_name": "HCBL Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "638db963-c044-4528-bc0e-4d27f67c3c64",
        "code": "HDCL",
        "bank_name": "Hardoi District Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "c64259ab-2a77-447f-9e17-e126bf371179",
        "code": "HDCX",
        "bank_name": "Hyderabad District Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "02e327e2-255c-4e31-82e6-7c5d49d5bad2",
        "code": "HDFC",
        "bank_name": "HDFC Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "f7b7e021-5fa9-49c9-a589-3d86887603de",
        "code": "HGBX",
        "bank_name": "Sarva Haryana Gramin Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "72b2c7f4-399e-4669-be56-4f4b250e5463",
        "code": "HINX",
        "bank_name": "Hindu Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "88fa85e2-8548-4d79-811f-3a4ceb9e8e2c",
        "code": "HISX",
        "bank_name": "Hisar Central Co-operative Bank Hisar",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "084cadcb-917c-4ac1-82fe-51c70f0d7272",
        "code": "HMBX",
        "bank_name": "Himachal Pradesh Gramin Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "3c0441d0-4706-4a45-9c74-df5c2ede8c52",
        "code": "HMNX",
        "bank_name": "Himatnagar Nagarik Sahakari Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "6e2dfbee-c012-4b9e-acd2-2881712b84e2",
        "code": "HOCX",
        "bank_name": "Hoshiarpur Central Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "1e01085e-d840-4d2b-bd04-5583dc29e8b6",
        "code": "HOOX",
        "bank_name": "Hooghly District Central Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "8a63ea98-280d-4f81-b43d-d7d696d06a5d",
        "code": "HPCX",
        "bank_name": "Shree Parswanath Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "f1085ba0-54fb-485f-8b50-ce726ad32ff0",
        "code": "HPSC",
        "bank_name": "Himachal Pradesh State Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "e7f72cfd-bb2b-4d8c-96e0-2c4ab4293599",
        "code": "HPSX",
        "bank_name": "Himachal Pradesh State Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "01c92699-b9af-4ebf-9c18-33ea1519a715",
        "code": "HSBC",
        "bank_name": "Hongkong & Shanghai Banking Corporation",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "c42d867f-79cb-40de-976b-e713d7001dd2",
        "code": "HSBM",
        "bank_name": "Haveli Sahakari Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "b4ccbaa1-b098-491a-b47b-7b56dc9011c6",
        "code": "HSBX",
        "bank_name": "Harihareshwar Sahakari Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "258a8350-962b-4b80-8cdb-1ac029964e5b",
        "code": "HSCX",
        "bank_name": "Haryana State Co-operative Apex Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "ba43399d-0690-4a13-ad67-9c4da15fdc99",
        "code": "HSDX",
        "bank_name": "Hassan District Co-operative Central Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "9efec67e-e2a1-454a-8565-77db7e49871c",
        "code": "HSSX",
        "bank_name": "Hindustan Shipyard Staff Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "69599427-108b-4b8c-b2b1-675d0286e3b6",
        "code": "HUBX",
        "bank_name": "Hubli Urban Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "334a2846-e49d-4772-8498-cd0ea1d67a0f",
        "code": "HUCB",
        "bank_name": "Hadagali Urban Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "50aa062b-9ab8-4938-afb7-9279e7cf235a",
        "code": "HUCH",
        "bank_name": "Hanamasagar Urban Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "6cd527c7-8057-4561-af9f-aeb04aaa0815",
        "code": "HUCX",
        "bank_name": "Hissar Urban Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "cfeee897-37e9-41dd-a4fa-7e03a70099f2",
        "code": "HUSB",
        "bank_name": "Hutatma Sahakari Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "b753936f-52b2-4f91-970d-cde862ec8fbe",
        "code": "HUTX",
        "bank_name": "Hutatma Sahakari Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "6f5a3725-f998-4f1b-be39-77cbe590b7b5",
        "code": "HVBK",
        "bank_name": "Woori Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "adb31c74-315f-42a7-a2c5-de963cdbb530",
        "code": "IBBK",
        "bank_name": "PT Bank Maybank Indonesia TBK",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "f131bafe-b463-43d5-b374-069b4c47b76e",
        "code": "IBKL",
        "bank_name": "IDBI",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "d6648d0d-a864-4986-9f31-e2320744904c",
        "code": "IBKO",
        "bank_name": "Industrial Bank of Korea",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "dbb90c2c-b234-4a58-ba2a-b9e00aa5489f",
        "code": "ICBK",
        "bank_name": "Industrial and Commercial Bank of China",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "8286c95d-4780-483a-b64e-3b462733b709",
        "code": "ICBL",
        "bank_name": "Industrial Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "95785f62-b28d-4a88-a952-5dc7b6c1eccb",
        "code": "ICHX",
        "bank_name": "Ichalkaranji Merchants Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "3a0182ef-7f11-4f52-8cbb-3766f99f0cc6",
        "code": "ICIC",
        "bank_name": "ICICI Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "51fb27a7-3a63-4dac-b82c-b21bbbac7242",
        "code": "ICLL",
        "bank_name": "Indian Clearing Corporation",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "fd8793e2-1048-4e8a-ab75-3dddab1f2887",
        "code": "ICMX",
        "bank_name": "Indore Cloth Market Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "e9ee361a-5ab6-43db-a4a4-2637a8f6c5f8",
        "code": "IDFB",
        "bank_name": "IDFC FIRST Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "4919f2f5-2d30-4cab-b59c-22385ddfd34d",
        "code": "IDIB",
        "bank_name": "Indian Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "7fc64f5c-9f73-4324-a6a8-b61c9fc6f847",
        "code": "IDUK",
        "bank_name": "Idukki District Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "44712b19-896d-44fe-80c2-d04212425642",
        "code": "IDUX",
        "bank_name": "Idukki District Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "46428809-12e1-4735-ac85-7121271ba096",
        "code": "ILCB",
        "bank_name": "Ilkal Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "40fe6538-d87a-44ce-af47-e82aafd475d7",
        "code": "IMCX",
        "bank_name": "Imperial Urban Co-operative Bank Jalandhar",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "4d9ea1c0-0202-4768-be85-427cb4c3b3b1",
        "code": "IMPX",
        "bank_name": "Imphal Urban Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "c37c6961-e31c-439d-bfe4-e7098a2a04c8",
        "code": "INCX",
        "bank_name": "Indapur Urban Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "56ef1743-d67e-4496-8774-a5061da85363",
        "code": "INDB",
        "bank_name": "Indusind Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "a588f2a9-3fe6-4bea-8b7b-4a8466ebb12b",
        "code": "INDX",
        "bank_name": "Independence Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "841c2c36-1f22-4873-ba3c-c1c4d0284d4b",
        "code": "IOBA",
        "bank_name": "Indian Overseas Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "d91a9cfa-54c0-4165-b563-e2a0c7ccc254",
        "code": "IPCX",
        "bank_name": "Indore Premier Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "b029ca4c-8c23-47d1-b145-45ad1eaf43d2",
        "code": "IPOS",
        "bank_name": "India Post Payments Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "6242ae02-cc84-4783-a7aa-d35a15e14860",
        "code": "IPPB",
        "bank_name": "India Post Payments Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "16b79d42-5a39-4f00-b84a-9fe28a189c74",
        "code": "IPSX",
        "bank_name": "Indore Paraspar Sahakari Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "616c6724-9642-4e34-8d27-8f83eaf0181c",
        "code": "ISBX",
        "bank_name": "Indraprastha Sehkari Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "d3afcabb-f69c-4ef2-9a7e-327c76d51189",
        "code": "ISMX",
        "bank_name": "Indore Swayam Mahila Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "4b59deaf-9935-49d5-b098-442d744930ad",
        "code": "ITBL",
        "bank_name": "Irinjalakuda Town Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "d0f9feea-1d4f-4e2b-ad46-a754e995952a",
        "code": "ITCX",
        "bank_name": "Irinjalakuda Town Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "23a51ec1-56ec-4a28-8418-2e00caec1a7b",
        "code": "ITDX",
        "bank_name": "Income Tax Dept Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "319e21f5-f415-4159-9d88-f92acb4c9fff",
        "code": "IUCB",
        "bank_name": "Integral Urban Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "7ec50243-7525-4c13-adce-73d78dc36006",
        "code": "IUCX",
        "bank_name": "Imperial Urban Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "da013909-ede0-41b2-a7d9-66d6ff6b30e9",
        "code": "IXXX",
        "bank_name": "Indrayani Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "5bfc6ca5-92b8-4423-b5b0-c2f4eda698d4",
        "code": "JACX",
        "bank_name": "Jain Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "c4f80b06-16a1-4846-8c6d-444cec5899a3",
        "code": "JAKA",
        "bank_name": "Jammu and Kashmir Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "e62c93cf-1e98-4045-a572-eda640ff7dd8",
        "code": "JALX",
        "bank_name": "Janalaxmi Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "8b0e89ee-9cad-4354-a5bb-516f3a5e8e34",
        "code": "JAMX",
        "bank_name": "Jamia Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "188bab42-099d-46d3-a566-fde3a70d43fa",
        "code": "JANA",
        "bank_name": "Janaseva Sahakari Bank, Pune",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "57c95b15-8e4a-4c91-851a-c006e1eab1c9",
        "code": "JANX",
        "bank_name": "Janata Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "744008f8-b2c8-4541-beea-681d76bcdc7b",
        "code": "JASB",
        "bank_name": "Janaseva Sahakari Bank (Borivli)",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "937f0883-b0b6-4773-b3bf-858dd653bd23",
        "code": "JASX",
        "bank_name": "Janatha Seva Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "2f76a794-3f9e-40d7-b251-27df94588b8f",
        "code": "JAUX",
        "bank_name": "Jaihind Urban Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "df37049d-7cd5-49f4-bdea-dcc6499f7074",
        "code": "JBHX",
        "bank_name": "Jila Sahakari Kendriya Bank Maryadit Bhind",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "61aa5291-cc45-4e20-a4be-e482cf2386be",
        "code": "JBIX",
        "bank_name": "Jila d Kendriya Bank Maryadit Bilaspur",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "5760876c-9c5a-4254-82e3-e800169061bf",
        "code": "JBMX",
        "bank_name": "Jila Sahakari Kendriya Bank Maryadit Sagar",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "263396d6-a753-4357-982a-593958a36d6f",
        "code": "JCBX",
        "bank_name": "Janata Co-operative Bank Malegaon.",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "03626da8-ce93-40ca-8794-1535ba487a0b",
        "code": "JCCB",
        "bank_name": "Jaipur Central Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "ff0215ab-bc11-4470-bdb6-4db0d88e10d0",
        "code": "JCCX",
        "bank_name": "Jalandhar Central Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "1d8c5f54-ebbd-4c2f-800b-8267e11279d0",
        "code": "JCDX",
        "bank_name": "Jamnagar District Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "6f0e49be-5866-40e9-81dc-64d57c9d6ae7",
        "code": "JCHX",
        "bank_name": "Jila Sahakari Kendriya Bank Mydt Chhatarpur",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "205efdcb-7608-427e-9b66-dd6bc2338d14",
        "code": "JCPX",
        "bank_name": "Janata Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "955325fd-5b9b-4d7d-9285-eb0a2f894e98",
        "code": "JCUX",
        "bank_name": "Jagruti Co-operative Urban Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "89125c08-5b81-4054-ab67-2cb1e1139f4f",
        "code": "JDCX",
        "bank_name": "Jalaun District Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "6da8a167-e7cd-4747-86f7-fb9083f8a07c",
        "code": "JDEX",
        "bank_name": "Jila Sahakari Kendriya Bank Mydtt Dewas",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "8258351f-c033-4f17-846b-da647567f86c",
        "code": "JGBX",
        "bank_name": "Jharkand Gramin Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "9fff37d6-5cf3-4e63-a691-30d5e956c544",
        "code": "JGCX",
        "bank_name": "Jogindra Central Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "7be3d7ea-b5e0-4e2e-b44d-5b77dde5f2f1",
        "code": "JGWX",
        "bank_name": "Jila Sahakari Bank Mydt. Gwalior",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "3301f3fa-e652-4917-88e6-5780255610d7",
        "code": "JHAX",
        "bank_name": "Jharneshwar Nagrik Sahakari Bank Maryadit",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "037001dd-59eb-44a5-b897-3cc368f14b88",
        "code": "JHSX",
        "bank_name": "Jila Sahakari Kendriya Bank Mydt Hoshangabad",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "0ba1e65e-e660-4e22-a02b-386de27639f5",
        "code": "JHUX",
        "bank_name": "Jhunjhunu Kenddriya Sahakari Bak",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "b37d6e3d-287d-471b-992f-b9eff374afea",
        "code": "JIBX",
        "bank_name": "Jila Sahakari Kendriya Bank Maryadit Balaghat",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "c818e58d-f8c2-4c0c-9935-aacc40b5930c",
        "code": "JICX",
        "bank_name": "Jila Sahakari Kendriya Bank Maryadit Chhindwara",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "f4eb71d0-3c0d-430d-94fe-d86b62d69022",
        "code": "JIDX",
        "bank_name": "Jila d Kendriya Bank Mydt Damoh",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "9a9f5765-be1a-4775-9f53-48ecd3191893",
        "code": "JIGX",
        "bank_name": "Jila Sahakari Kendriya Bank Mydt Guna",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "f923562b-c443-474e-a5a1-686fea03f626",
        "code": "JIKX",
        "bank_name": "Jila Sahakari Kendariya Bank Mydt Khandwa",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "de67d297-51d8-4993-a133-9e0c736cf97e",
        "code": "JIMX",
        "bank_name": "Jila Sahakari Kendriya Bank Mydt Mandla",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "8a08ef31-4d17-4a4f-8960-60b2c6b4a233",
        "code": "JINX",
        "bank_name": "Jind Central Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "eb67480b-d792-4236-bf39-25858dd0fd79",
        "code": "JIOP",
        "bank_name": "Jio Payments Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "ef3fd1d0-9cf8-40bf-909e-f8af8d31732e",
        "code": "JIOX",
        "bank_name": "Jila Sahakari Kendriya Bank Mydt Shahdol",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "54d46c21-09fd-495e-9378-712280949d2f",
        "code": "JIRX",
        "bank_name": "Jila Sahakari Kendriya Bank Maryadit Rajgarh",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "9e242b99-373f-43e3-b356-8c6aa1023fb6",
        "code": "JISX",
        "bank_name": "Jila Sahakari Kendriya Bank Maryadit Sidhi",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "768326f4-5232-483a-bc6a-417ca756b328",
        "code": "JIVX",
        "bank_name": "Jivaji Sahakari Bank  Ichalkaranji",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "a09334cd-f7fd-40ed-a11b-a5e75e0f4bcf",
        "code": "JJCX",
        "bank_name": "Jhajjar Central Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "2be58b7b-882f-4cc6-b1dd-efcab1b91b02",
        "code": "JJHX",
        "bank_name": "Jila d Kendriya Bank Mydt Jhabua",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "b0d50b58-4327-433f-8d7f-d4a9a3680097",
        "code": "JJSB",
        "bank_name": "Jalgaon Janata Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "30f8a907-a979-442f-96f0-5ac147ea1d96",
        "code": "JKAX",
        "bank_name": "Jila Sahakari Kendriya Bank Mydt Ambikapur",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "a3e9fec2-172c-453d-bc34-acf9f24c312f",
        "code": "JKCX",
        "bank_name": "Janakalyan Co-operative Bank Nashik",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "56b604ad-97dd-4bd1-8e2c-72f51138fcb2",
        "code": "JKDX",
        "bank_name": "Jila Sahakari Kendriya Bank Mydt. Jabalpur",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "c88f520c-053b-4a9c-9d88-e5b0d2e06d2b",
        "code": "JKEX",
        "bank_name": "Jhalawar Kendriya Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "408114f9-cb02-43d8-9303-031d2f3f3d05",
        "code": "JKHX",
        "bank_name": "Jila Kendriya Bank Maryadit Khargone",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "279b0511-7ba8-4dbd-a270-7b08a7797132",
        "code": "JKMX",
        "bank_name": "Jila Sahakari Kendriya Bank Maryadit Jagdalpur",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "aafbc942-81c4-4677-903c-06f082595bda",
        "code": "JKRX",
        "bank_name": "Jilla Sahakari Kendriya Bank Mydt Raisen",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "0687e06d-956a-4ee0-b6d0-d84f21060181",
        "code": "JKSX",
        "bank_name": "J&k State Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "54acf0b5-9b05-4b0f-aa6f-332146804d73",
        "code": "JLCX",
        "bank_name": "Jalore Central Co-operative Bank Jalore",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "6de01706-f387-4f1e-891a-f094427020b8",
        "code": "JLDX",
        "bank_name": "Jalna District Central Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "05874963-fd70-4fb1-b62a-e82c7a8f9099",
        "code": "JLNX",
        "bank_name": "Jalna Peoples Co-operative Bank Jalna",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "ccd2baf0-9c0b-46d6-9fa4-0a80831e8872",
        "code": "JLSX",
        "bank_name": "Jila Sahakari Kendriya Bank Mydt Vidisha",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "30b4bb9e-5015-455d-9c22-4ed1e3e5ca6f",
        "code": "JLWX",
        "bank_name": "Jhalawar Nagrik Sahakari Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "350e7f64-2c02-4a76-8150-48ec61020b28",
        "code": "JMAX",
        "bank_name": "Jila Sahakari Kendriya Bank Mydt Mandsaur",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "5d2310d3-bde6-410d-897d-7a2dc4545432",
        "code": "JMBX",
        "bank_name": "Jila Sahakari Kendriya Bank Maryadit Betul",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "a3ab6990-14b9-48ab-a117-d6c9691bb0fd",
        "code": "JMCX",
        "bank_name": "Jalna Merchants Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "d032c881-577e-4d88-983b-8f6defa97db8",
        "code": "JMDX",
        "bank_name": "Jila d Kendriya Bank Mydt Datia",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "9a2bb6c8-62e4-4f0f-bc1f-9c34cef169e0",
        "code": "JMHX",
        "bank_name": "Jamshedpur Urban Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "0092459a-bc35-4c9f-944f-293ef5062ad4",
        "code": "JMMX",
        "bank_name": "Jammu Central Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "455b2ec7-88e6-4e54-808c-32178801ef42",
        "code": "JMOX",
        "bank_name": "Jila Sahakari Kendriya Bank Mydt Morena",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "4bbad82d-df60-4e76-afdf-3c8e49c3d03c",
        "code": "JMPX",
        "bank_name": "Jamnagar Peoples Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "d210e9c5-426f-459a-a08e-955beb940856",
        "code": "JMSX",
        "bank_name": "Jijamata Mahila Sahakari Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "6095119a-85f0-4680-8fbe-2c5bd2f17d16",
        "code": "JMYX",
        "bank_name": "Jila Sahakari Kendriya Bank Mydt Durg",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "3a22740a-e5d1-4f56-9b15-32e433fc6bf7",
        "code": "JNAX",
        "bank_name": "Jila Sahakari Kendriya Bank Mydt Narsinghpur",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "6d11785f-1a8e-4838-88ef-2988f54f28c4",
        "code": "JNDX",
        "bank_name": "Junagadh Jilla Sahakari Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "7fe08f8d-7359-4a1d-a971-3d4a4b30d368",
        "code": "JNSX",
        "bank_name": "Janseva Nagari Sahakari Bank Marydit",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "303aaf1f-a362-4c5a-b65f-d8232864e3b5",
        "code": "JODX",
        "bank_name": "Jodhpur Central Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "5950673c-d22b-467f-bf9d-2b0c2d1c8812",
        "code": "JONX",
        "bank_name": "Jodhpur Nagrik Sahakari Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "845c4667-cb74-4332-8a3d-a36e14eea12d",
        "code": "JOWX",
        "bank_name": "Jowai Co-operative Urban Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "68fd2de1-aadc-49cd-875b-48462325ddaf",
        "code": "JPAX",
        "bank_name": "Jila Sahakari Kendriya Bank Mydt Panna",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "1d664e92-7688-4acc-be4e-d6a7b83ffe2c",
        "code": "JPCB",
        "bank_name": "Jalgaon Peoples Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "1a735973-aa81-4a7b-b74a-91d46072b326",
        "code": "JPCX",
        "bank_name": "Jalpaiguri Central Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "96f81cc4-b252-493c-9332-b25feeeca3f5",
        "code": "JRAX",
        "bank_name": "Jila Sahakari Kendriya Bank Mydt Ratlam",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "49b12bfa-a65a-4139-b670-f5bf0e0fe61e",
        "code": "JRKX",
        "bank_name": "Jila Sahakari Kendriya Bank Mydt Ujjain",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "006609e5-a913-4085-bde7-54838f054f5f",
        "code": "JRNX",
        "bank_name": "Jila Sahakari Kendriya Bank Maryadit Rajnandgaon",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "01a5d3c7-0728-42c2-be2d-4edefa490885",
        "code": "JRSX",
        "bank_name": "Jalore Nagrik Sahakari Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "2e567b08-0269-4534-83d5-7c3a95d27ecd",
        "code": "JSAB",
        "bank_name": "Jain Sahakari Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "bef1995d-8b02-400b-ae3e-e3f39f9be378",
        "code": "JSAX",
        "bank_name": "Janata Sahakari Bank Ajara",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "4608e8af-b4d9-4f0f-b186-d39d09c57864",
        "code": "JSBL",
        "bank_name": "Janakalyan Sahakari Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "452b720e-13dc-4126-b0d7-b37c80a07a79",
        "code": "JSBP",
        "bank_name": "Janata Sahakari Bank (Pune)",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "69378b54-e05e-4599-86b4-b9ba1dcdb3d5",
        "code": "JSBX",
        "bank_name": "Janaseva Co-operative Bank (Nashik)",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "f219faed-8207-4f95-8b7c-74a01bb72a3d",
        "code": "JSCX",
        "bank_name": "Jharkhand State Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "6f4c2062-f415-462e-af31-05d1d19b0671",
        "code": "JSDX",
        "bank_name": "Jila Sahakari Kendriya Bank Mydt Dhar",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "f063b917-29b4-4710-97ae-aefed911a000",
        "code": "JSEX",
        "bank_name": "Jila Sahakari Kendriya Bank Mydt Sehore",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "37522862-35c4-47f8-bc79-85180fb74b15",
        "code": "JSFB",
        "bank_name": "Jana Small Finance Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "a24f4f05-463e-48a5-9978-7d80698a8f16",
        "code": "JSHX",
        "bank_name": "Jila Sahakari Kendriya Bank Mydt Shajapur",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "6d358983-2d98-4b78-bd72-efdf0819bf49",
        "code": "JSKX",
        "bank_name": "Jila Sahakari Kendriya Bank Maryadit Raipur",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "d46d2f71-8454-4c17-83ed-d0bebbef09e3",
        "code": "JSMX",
        "bank_name": "Janata Sahakari Bank Amravati",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "12f2ac28-37bf-458e-9135-97594ff093c9",
        "code": "JSOX",
        "bank_name": "Jila Sahakari Kendriya Bank Myt Seoni",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "4d90fcc3-02dc-4334-a66e-068c7b73a1af",
        "code": "JSRX",
        "bank_name": "Jila Sahakari Kendriya Bank Mydt Rewa",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "bf34445d-3523-4ee6-994a-779e5de54a93",
        "code": "JSTX",
        "bank_name": "Jila Sahakari Kendriya Bank Mydt Satna",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "9045a8a7-2160-478f-8f84-ab2515168c6f",
        "code": "JSVX",
        "bank_name": "Jila Sahakari Kendriya Bank Maryadit Shivpuri",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "8d79d404-d658-47f0-938b-b31176c895dc",
        "code": "JSWX",
        "bank_name": "Jansewa Urban Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "77905cbb-2f46-4f3d-abd1-f71e150fbb77",
        "code": "JTIX",
        "bank_name": "Jila Sahakari Kendriya Bank Mydt Tikamgarh",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "a74c7a36-3562-466c-b88f-b40210a2b5e9",
        "code": "JTSC",
        "bank_name": "Janatha Seva Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "65bf64e0-7386-4e26-a7ee-e18ab97673bf",
        "code": "JTSX",
        "bank_name": "Jugalkishor Tapdiya Shree Mahesh Ucb Aurangabadltd",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "5f645d39-e64f-4f64-8f7c-e05c168f133e",
        "code": "JUCX",
        "bank_name": "Junagadh Commercial Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "31554f77-5457-4009-9a65-0851fd235bdb",
        "code": "JUSX",
        "bank_name": "Jaysingpur Udgaon Sahakari Bank Jaysingpur",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "f2438f4e-6020-4e33-8883-77f5c5d12a22",
        "code": "JVCX",
        "bank_name": "Jivan Commercial Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "68070124-65a2-4467-95be-dbd9d58ce3c3",
        "code": "JXXX",
        "bank_name": "Jampeta Co-Operative Urban Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "8c9f8f3c-73b3-418d-83c1-671e3f0e6597",
        "code": "KAAX",
        "bank_name": "Kadappa District Co-operative Central Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "c3db530e-ec10-4ee4-ac07-ddba47f50a92",
        "code": "KACE",
        "bank_name": "Kangra Central Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "44d63afb-7298-431a-873a-6ae54a69d7bc",
        "code": "KACX",
        "bank_name": "Kachchh District Central Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "d66788dc-4838-45e2-ad05-9162c9c12fd9",
        "code": "KADX",
        "bank_name": "Kasaragod District Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "7f12d4aa-06f4-4c06-aaae-455ff05efc84",
        "code": "KAGX",
        "bank_name": "Kagal Co-operative Bank Kagal",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "41ecb460-fbdf-4c99-9a78-080a65981ec9",
        "code": "KAIJ",
        "bank_name": "Kallappanna Awade Ichalkaranji Janata Sahakari Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "fcd95de3-bce7-4b7f-910c-46f8f4d2d276",
        "code": "KALX",
        "bank_name": "Kalna Town Credit Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "4ab3d9b3-b637-49a7-914f-fb8824d75bb6",
        "code": "KAMX",
        "bank_name": "Kamala Co-operative Bank Solapur",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "2543b347-ba59-4ed1-9e14-9ef525ab61dc",
        "code": "KANG",
        "bank_name": "Kangra Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "3e20846c-739e-41aa-8efc-65f57a6215e7",
        "code": "KANX",
        "bank_name": "Kanara District Central Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "b2ff2fed-a757-4cec-8538-83b265bbf486",
        "code": "KARB",
        "bank_name": "Karnataka Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "f2136aa5-68fe-44ca-93c8-1d69d77ddae1",
        "code": "KARX",
        "bank_name": "Kaira District Central Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "bcdcbd5a-5a8d-4a50-bc88-fe06f323d47b",
        "code": "KASX",
        "bank_name": "Kashmir Mercantile Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "ddad3c8d-43ea-47f7-8896-e5941c801803",
        "code": "KATX",
        "bank_name": "Kattappana Urban Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "3a55f610-6073-4f7a-bd85-1c03869756b0",
        "code": "KAYX",
        "bank_name": "Kanyakumari District Central Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "8b8b33dd-69fc-46f7-92ed-11d2c1420028",
        "code": "KBCX",
        "bank_name": "Kanakamahalakshmi Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "8d66c6a3-5fc3-4c3e-a2a7-aa198c7488aa",
        "code": "KBHB",
        "bank_name": "KEB Hana Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "f245c75f-71b4-4158-b3ea-824ed3f28947",
        "code": "KBKB",
        "bank_name": "Kookmin Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "5f28b12a-168e-4d39-a810-fbf331da905b",
        "code": "KBNX",
        "bank_name": "Khambhat Nagarik Sahakari Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "3596dfa6-2e5d-4afa-be02-2fc172a3d2ab",
        "code": "KBSX",
        "bank_name": "Krishna Bhima Samruddhi Local Area Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "82c06dc3-1746-4932-8776-fdd06e93e845",
        "code": "KCBL",
        "bank_name": "Kapol Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "a2d89325-67e1-4180-8c58-f0c74c1f0337",
        "code": "KCBX",
        "bank_name": "Kutch Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "e09a9e8a-86ea-4301-af63-e65f86de4c54",
        "code": "KCCB",
        "bank_name": "Kalupur Commercial Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "8050b545-ebd5-4c1b-a407-ed91d38c1bd0",
        "code": "KCCX",
        "bank_name": "Kancheepuram Central Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "23d76b33-ee6f-4c5e-9189-451a0b897b58",
        "code": "KCDX",
        "bank_name": "Karnatak Central Co-operative Bank Dharwad",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "910836a4-e83e-4244-b797-5b9c9fb59861",
        "code": "KCEX",
        "bank_name": "Kota Central Co-operative Bank Kota",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "488b2433-a005-47a5-99bd-cbac1a3a88b9",
        "code": "KCOB",
        "bank_name": "Kangra Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "fedd2422-d4d8-4e5b-81e9-9226ea50ff37",
        "code": "KCUB",
        "bank_name": "Khattri Co-operative Urban Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "9bb2579d-36dd-4cc6-a324-36918f098073",
        "code": "KCUX",
        "bank_name": "Kannur Co-operative Urban Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "501d9431-35e0-4ef0-b9f8-5fc51d5762c9",
        "code": "KDBX",
        "bank_name": "Karimnagar District Co-operative Central Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "aa91d148-d6cd-48ba-916e-1b2df6c928a7",
        "code": "KDCB",
        "bank_name": "Kozhikode District Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "199d8ad6-1e9f-4796-8680-139c51dac4a7",
        "code": "KDCX",
        "bank_name": "Kozhikode District Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "d8195070-0869-4b59-a8c3-c62fa92c5e1a",
        "code": "KDIX",
        "bank_name": "Shree Kadi Nagarik Sahakari Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "def73e4f-53db-466e-8568-90c30985d07d",
        "code": "KDNX",
        "bank_name": "Kodinar Nagrik Sahakari Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "f2ad5286-b6f0-4f7e-968f-af2ab71661f9",
        "code": "KDUX",
        "bank_name": "Kodagu District Co-operative Central Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "01a2abdc-ee2b-4a28-9186-0b7876a2e364",
        "code": "KEJX",
        "bank_name": "Keonjhar Central Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "85e65ac3-a211-4214-841f-e979156ec40d",
        "code": "KEMX",
        "bank_name": "Kerala Mercantile Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "ffaa5476-5704-41bb-b65a-965cafeec151",
        "code": "KESX",
        "bank_name": "Keshav Sehkari Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "30374c59-bdb8-4e17-9fc9-76c3d10870b9",
        "code": "KGBX",
        "bank_name": "Kaveri Grameena Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "55326ffd-a2ce-4cbf-a19e-448343a5bd02",
        "code": "KGDX",
        "bank_name": "Khagaria District Central Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "bfa952be-f8c4-4c77-b848-ddc86640aa27",
        "code": "KGRB",
        "bank_name": "Kaveri Grameena Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "a995a6d6-3b54-44b5-8813-45518285570b",
        "code": "KGSX",
        "bank_name": "Kashi Gomti Samyut Gramin Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "20129707-26cd-440d-9b85-af46a65d44c1",
        "code": "KHAX",
        "bank_name": "Khalilabad Nagar d Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "646e6dd9-14d5-472b-bcf5-6e696c127fa7",
        "code": "KHCX",
        "bank_name": "Khardah Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "640e6b46-f7f7-4542-be4f-2ac5917d5aaf",
        "code": "KHDX",
        "bank_name": "Kheda People's Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "0bcebd68-0c0f-475c-b4b2-4c7d540136a6",
        "code": "KHNX",
        "bank_name": "Kohinoor Sahakari Bank Ichalkaranji",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "316a5e81-4952-4af9-bb32-94fef8b4f10f",
        "code": "KHTX",
        "bank_name": "Khurda Central Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "5edd2f6e-90aa-44d7-b7f3-8edd2015d4d7",
        "code": "KHUX",
        "bank_name": "Khamgaon Urban Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "d593ebfb-f9c0-4111-a9e8-94ae8d6f2e76",
        "code": "KICX",
        "bank_name": "Kaithal Central Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "7f682000-12c7-46b6-904b-269022d730be",
        "code": "KJSB",
        "bank_name": "Kalyan Janata Sahakari Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "0d61e296-3888-4622-9edd-bb8090da8a87",
        "code": "KJSX",
        "bank_name": "Karad Janata Sahakari Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "ee5faa4f-1ae6-4154-b79f-75fc216e0513",
        "code": "KKBK",
        "bank_name": "Kotak Mahindra Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "bc2230c5-9d77-49fd-a2af-f09e33a013ac",
        "code": "KKMX",
        "bank_name": "Kankaria Mainagar Nagrik Sahakari Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "960df0fe-ca8c-4950-91e4-d04d076ba3fe",
        "code": "KKSX",
        "bank_name": "Kumbhi Kasari Bank Kuditre",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "83eeabe8-24b4-4caf-896a-ebc82eb762c5",
        "code": "KLGB",
        "bank_name": "Kerala Gramin Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "9d4ce342-a638-4a75-9248-42ee1f0fb1f1",
        "code": "KLMX",
        "bank_name": "Kollam District Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "253bb798-6b45-4271-9fc0-6bc031564743",
        "code": "KMCB",
        "bank_name": "Kokan Mercantile Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "6dc54761-f32a-4670-bde6-6ae1635e4e66",
        "code": "KMCX",
        "bank_name": "Krishna Mercantile Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "1a31d816-0b74-49dd-8458-d47e301cc1a5",
        "code": "KMNX",
        "bank_name": "Kota Mahila Nagrik Sahakari Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "94ddbca8-01b3-4279-a3d3-7407bffafedb",
        "code": "KMSX",
        "bank_name": "Kolhapur Mahila Sahakari Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "f97c1b32-6104-47a7-bb50-5d8134be9b76",
        "code": "KNBX",
        "bank_name": "Kalol Nagarik Sahakari Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "20371bfa-36dc-4aab-8ff3-5edecf894cd0",
        "code": "KNCX",
        "bank_name": "Karnal Central Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "0ff57327-35b4-43f0-8d7c-8a29370f34f7",
        "code": "KNNX",
        "bank_name": "Sri Kannikaparameswari Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "4dc982c9-1448-4488-aed5-5165b9843dc9",
        "code": "KNPX",
        "bank_name": "Karnala Nagari Sahakari Bank Panvel",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "16d5e2a2-bdd8-4aa6-90ea-25d9be5461bc",
        "code": "KNSB",
        "bank_name": "Kurla Nagarik Sahakari Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "adf522ed-f7fb-4016-b3a4-e1919b5608c3",
        "code": "KNSX",
        "bank_name": "Kisan Nagari Sahakari Bank Maryadit Parbhani",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "2d70dce1-73da-4474-b8d0-f36ab2cba805",
        "code": "KOBX",
        "bank_name": "Kopargaon Peoples Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "6863bb89-159b-447c-bebd-973cf827c58a",
        "code": "KOCX",
        "bank_name": "Konoklota Mahila Urban Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "5eb8858a-35b6-4f34-8857-7d1cfe9d1bb9",
        "code": "KODX",
        "bank_name": "Kodungallur Town Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "8ec7a92a-d6cc-4e44-814d-1f92cf6bba30",
        "code": "KOEX",
        "bank_name": "KEB Hana Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "b1e2ff70-7fbe-408a-97c5-d59e86878ef2",
        "code": "KOLH",
        "bank_name": "Kolhapur Urban Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "4508db9e-f610-49ef-ac5f-567bc4509890",
        "code": "KORX",
        "bank_name": "Koraput Central Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "32606b57-e9a7-4389-8b91-57d63448908a",
        "code": "KOSX",
        "bank_name": "Kota Nagrik d Bank Kota",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "09874bfd-5ec6-4947-acf9-2379012447bd",
        "code": "KOTX",
        "bank_name": "Kodinar Taluka Co-operative Banking Union",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "478b8e9b-dc64-491a-84d8-261c23e2f5c7",
        "code": "KOYX",
        "bank_name": "Koylanchal Urban Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "3d2d2f21-ebc5-449d-86d1-6616c517f4f2",
        "code": "KPCX",
        "bank_name": "Kolhapur District Central Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "87f3f7a3-9bed-48db-9e9b-6194bf839bfd",
        "code": "KRCX",
        "bank_name": "Kolar And Chickballapur Dt Co-operative Central Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "21b55c8a-a024-4ec3-9ac8-7070402d9b5a",
        "code": "KRDX",
        "bank_name": "Krishna District Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "999a76af-6d15-4c9a-b34e-23d634ae71b6",
        "code": "KRIX",
        "bank_name": "Krishnagar City Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "bf09501d-ace7-4bd2-b174-ce1dead55d11",
        "code": "KRMX",
        "bank_name": "Karamana Co-operative Urban Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "a3c5bf1b-c079-4940-b55c-f842d322b09e",
        "code": "KRNX",
        "bank_name": "Karnavati Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "4d725e28-9be7-4982-9fc5-6afeafb67d05",
        "code": "KRTH",
        "bank_name": "Krungthai Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "bc416e98-601f-4e95-937d-a37ee29d3c9c",
        "code": "KRTX",
        "bank_name": "Kranthi Co-operative Urban Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "979c6d36-2d80-41a8-84e3-a067e68a03d4",
        "code": "KSBK",
        "bank_name": "Kerala State Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "209bc7f6-84c1-4540-a1ba-931ff8a711b7",
        "code": "KSBX",
        "bank_name": "Krishna Sahakari Bank Rethare Bk",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "517fb124-744f-4cea-be29-bde97e6f4ec0",
        "code": "KSCB",
        "bank_name": "Karnataka State Co-operative Apex Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "f25675e6-5e0b-4ec9-8a66-ebf276ca8a94",
        "code": "KSCX",
        "bank_name": "Kerala State Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "d8270061-6bb9-4759-89bf-bf34166071c0",
        "code": "KSMX",
        "bank_name": "Kosamba Mercantile Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "395460fd-df7c-4271-a810-6f8825750992",
        "code": "KSNX",
        "bank_name": "Koteshwara Sahakari Bank Niyamitha",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "09fbab8e-7548-4207-9d95-e7a4bf7edd4e",
        "code": "KSTX",
        "bank_name": "Kasaragod Co-operative Town Bank No 970",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "9053572b-c1af-42e0-af05-cf3589fc6fbf",
        "code": "KSUX",
        "bank_name": "Kashipur Urban Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "7cbf218b-7d52-45db-b699-b66aa5a5fcdb",
        "code": "KTBX",
        "bank_name": "Kottayam District Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "bcad2561-3aa0-4bf9-9f52-9b143bf0a5f4",
        "code": "KTCX",
        "bank_name": "Kapurthala Central Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "6f826e79-c36d-4de4-b38a-9a8256f0ae95",
        "code": "KTDX",
        "bank_name": "Katihar District Central Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "778ef86f-566c-4847-af95-3dd5e1a66580",
        "code": "KTTX",
        "bank_name": "Tumkur District Central Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "8f2946b0-5673-4126-9546-08714ab54b53",
        "code": "KUBX",
        "bank_name": "Kaduthuruthy Urban Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "ebc0e868-2193-46a5-a5fb-d1347ba81441",
        "code": "KUCB",
        "bank_name": "Karad Urban Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "9b90e8c4-b5fc-4069-a7e8-edfa7539927a",
        "code": "KUCX",
        "bank_name": "Kolhapur Urban Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "da6190d5-0341-4953-9c3b-9fd5c93a2ed1",
        "code": "KUKX",
        "bank_name": "Kukarwada Nagarik Sahakari Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "dbd80ab5-85a4-4dbc-b8b5-2633454d7d3b",
        "code": "KULX",
        "bank_name": "Kodoli Urban Co-operative Bank Kodoli",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "cf3ab524-100b-468c-8986-d9b3d7a52654",
        "code": "KUMX",
        "bank_name": "Kumbakonam Central Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "99064441-761d-4883-949c-754766eb62f6",
        "code": "KUNS",
        "bank_name": "Kurmanchal Nagar Sahakari Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "2b9f3909-8435-4fbf-b340-c8901e29684f",
        "code": "KUOB",
        "bank_name": "Konark Urban Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "5941741d-913a-4cde-8426-0b0e6fd52d0b",
        "code": "KURX",
        "bank_name": "Kurukshetra Central Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "4631404b-78fc-4c82-88b8-60665a37be92",
        "code": "KUTX",
        "bank_name": "Kuttiady Co-operative Urban Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "f8d06bf3-8441-48cb-9f9a-447e131eb1fb",
        "code": "KVBL",
        "bank_name": "Karur Vysya Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "7e056e87-3964-4484-a059-e68e7c4e0515",
        "code": "KVCX",
        "bank_name": "Kavita Urban Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "2081c547-c863-4144-ab26-95e9e57a36a7",
        "code": "KVGB",
        "bank_name": "Karnataka Vikas Grameena Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "406d37a2-be04-40f9-bb49-2d6c64de8e5e",
        "code": "KYDX",
        "bank_name": "Kalaburagi and Yadgir District Co-operative Central Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "57a4af94-893e-47ef-b5ae-b2a8730393ac",
        "code": "LACX",
        "bank_name": "Laxmi Co-operative Bank Solapur",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "23f1e6ec-e7d6-483a-a4c0-aef3d120fa0e",
        "code": "LATX",
        "bank_name": "Latur Urban Co-operative Bank Latur",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "eacac623-e887-470c-acd9-dd1fb12df3e0",
        "code": "LAVB",
        "bank_name": "Laxmi Vilas Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "91fedf8a-2055-4b2f-97e2-be6cd334a2e2",
        "code": "LBMX",
        "bank_name": "Laxmibai Mahila Nagrik Sahakari Bank Maradit",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "ba502536-bc86-4cb4-8c60-ef07667410e1",
        "code": "LCBX",
        "bank_name": "Lalbaug Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "1721a319-6bac-4d5b-8cf7-71d06a352197",
        "code": "LCCX",
        "bank_name": "Ludhiana Central Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "a1795182-d4fb-4506-bd9f-c6d0060c53aa",
        "code": "LDCX",
        "bank_name": "Latur District Central Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "a2103d72-6557-4d36-a413-6ae7423ea4b2",
        "code": "LDPX",
        "bank_name": "Loknete Dattaji Patil Sahakari Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "c4db1d8d-7639-46f6-a146-42c8e0b24a57",
        "code": "LDRX",
        "bank_name": "Langpi Dehangi Rural Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "b4784b3a-f1dd-489b-b32f-aff857966c88",
        "code": "LECX",
        "bank_name": "LIC Employees Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "2712cc62-91f1-43c7-b4cf-08978d933ac3",
        "code": "LICB",
        "bank_name": "Liluah Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "491c6761-cf92-4642-af26-9e452cc8e9be",
        "code": "LKBL",
        "bank_name": "Lord Krishna Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "0b557bc6-9dd4-438d-8166-7a6a51eb98e8",
        "code": "LKCX",
        "bank_name": "Little Kancheepuram Co-operative Urban Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "d4a0060f-6e23-484a-a9e6-bf8433739651",
        "code": "LKHX",
        "bank_name": "Lakhimpur Urban Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "6fac990c-1ccf-4bf6-9ee7-a30797f3e29d",
        "code": "LKMX",
        "bank_name": "Lokmangal Co-operative Bank Solapur",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "e513672b-6e51-4551-bca7-0730588d3023",
        "code": "LMNX",
        "bank_name": "Laxmi Mahila Nagrik Sahakari Bank Maryadit",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "f5fd2cd0-a6c6-4047-ab93-5ddb2c96db69",
        "code": "LNSX",
        "bank_name": "Lunawada Nagarik Sahakari Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "9da8ee02-ba3e-422e-aa4c-d8feabfe7e58",
        "code": "LOKX",
        "bank_name": "Lokvikas Nagari Sahakari Bank Aurangabad",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "e9d5f488-f2be-49d7-bd48-c44dfde56fdc",
        "code": "LONX",
        "bank_name": "Lonavala Sahakari Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "18ef0908-7df5-4b36-b141-f119160424d2",
        "code": "LUCX",
        "bank_name": "Lucknow Urban Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "4a915d03-c5c1-4796-90ad-54a421ddf1a4",
        "code": "LULX",
        "bank_name": "Laxmi Urban Co-operative Bank Latur",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "faee5f26-c1e7-4de0-a317-19ab91073ba4",
        "code": "MABL",
        "bank_name": "Malleshwaram Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "bf11b297-72bf-46bd-8dd2-3d20353ababb",
        "code": "MACX",
        "bank_name": "Mahabhairab Co-operative Urban Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "e1cee6cb-2bee-4141-bd96-7a395efdca11",
        "code": "MADX",
        "bank_name": "Madhyanchal Gramin Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "94e1dc40-69b8-40fa-abd5-2e84aa4b9c0b",
        "code": "MAGX",
        "bank_name": "Mewar Aanchalik Gramin Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "9923ad98-cf07-40f0-8d7a-5df6978c9724",
        "code": "MAHB",
        "bank_name": "Bank of Maharashtra",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "80a5c5a5-5bcf-4a07-93bd-709931c2a7a5",
        "code": "MAHG",
        "bank_name": "Maharashtra Gramin Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "54169b15-f8d6-45a5-b518-754c5b393fae",
        "code": "MAHX",
        "bank_name": "Shree Mahalaxmi Urban Co-operative Credit Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "3198a79c-26d9-4e3b-8c0f-14dcd932f6d5",
        "code": "MAJX",
        "bank_name": "Manjeri Co-operative Urban Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "f4091a9f-ee6d-4be6-9aa1-2cfdce211154",
        "code": "MAKX",
        "bank_name": "Makarpura Industrial Estate Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "10329451-1c36-439f-9b07-e05138a9d5d3",
        "code": "MALX",
        "bank_name": "Malviya Urban Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "5094769c-5c06-45c9-9042-3f9ae0736912",
        "code": "MAMX",
        "bank_name": "Mandvi Mercantile Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "bbf979cc-be93-47a8-9b8e-7758bb1d3624",
        "code": "MANX",
        "bank_name": "Mansa Nagarik Sahakari Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "2cc93da9-01af-44dc-893c-331f4c2db69d",
        "code": "MAPX",
        "bank_name": "Maharana Pratap Co-operative Urban Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "ab7a024f-6d9e-4e72-bad9-6fe07eec7fce",
        "code": "MASX",
        "bank_name": "Mahesh Urban Co-operative Bank Solapur",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "71fcd626-9999-4dec-af80-f5aae85924ae",
        "code": "MAUX",
        "bank_name": "Mantha Urban Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "d851be10-16b8-4167-8e02-66d04b457b26",
        "code": "MAVX",
        "bank_name": "Shree Mahavir Sahakari Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "d84f9cc5-1707-4073-af3e-00ac56e7e763",
        "code": "MAWX",
        "bank_name": "Manipur Womens Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "abfdc064-7c57-4a23-a6bc-d90e7891ebf3",
        "code": "MAYX",
        "bank_name": "Mayani Urban Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "cd484ad8-90c9-447d-8da4-b1d45e3a6758",
        "code": "MBCX",
        "bank_name": "Mugberia Central Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "4bd4971a-9cb1-4cdb-bbbd-8830b164c1e0",
        "code": "MBGX",
        "bank_name": "Dakshin Bihar Gramin Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "9985b288-dc8c-4ad3-af5a-61ff3b7beadb",
        "code": "MBLX",
        "bank_name": "Manmandir Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "5f492e78-3e4b-4960-9b83-1eb206986be5",
        "code": "MCAB",
        "bank_name": "Meghalaya Co-operative Apex Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "56615688-c501-402b-b19b-3b6f4ecae0cc",
        "code": "MCAX",
        "bank_name": "Mahesh Urban Co-operative Bank Ahmedpur",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "98e970ee-21ca-4413-ab45-0c7d1e9c0e56",
        "code": "MCBL",
        "bank_name": "Mahanagar Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "decf4ced-f73f-473a-9606-6071b43630f5",
        "code": "MCBX",
        "bank_name": "Modern Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "ef211acd-a9d6-4f9a-920d-7a5ac0b24826",
        "code": "MCCX",
        "bank_name": "Muktsar Central Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "63967e93-b789-4cee-b59b-7131ad6b979a",
        "code": "MCDX",
        "bank_name": "Muzaffarnagar District Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "264b35e6-aff3-4cf0-b746-0320afe22de1",
        "code": "MCLX",
        "bank_name": "Mahendragarh Central Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "e7f89d2e-c72a-4976-be0a-d4d733855db1",
        "code": "MCOX",
        "bank_name": "Mahesh Urban Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "88535b5f-3cf7-458f-818e-16c4d7e68736",
        "code": "MCSX",
        "bank_name": "Mattancherry Sarvajanik Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "fa1a0f01-20ad-4586-b255-d409b1deb8d5",
        "code": "MCUX",
        "bank_name": "Mahaveer Co-operative Urban Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "260e4386-566c-45c2-8c62-296d87c34710",
        "code": "MDBK",
        "bank_name": "Model Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "bbf20377-7296-4db2-a5a3-4a54d16dcd9b",
        "code": "MDCB",
        "bank_name": "Mumbai District Central Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "899fc6cb-e010-42b2-a701-380d0ba066aa",
        "code": "MDCX",
        "bank_name": "Madurai District Central Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "87e7b813-7401-497d-93f3-15892fe6ba7c",
        "code": "MDEX",
        "bank_name": "Model Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "c2210259-2b91-43d0-982d-42711c997540",
        "code": "MDGX",
        "bank_name": "Rajasthan Marudhara Gramin Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "93b1c4d1-5fb6-46d6-a988-61d08815f290",
        "code": "MDIX",
        "bank_name": "Mandya District Co-operative Central Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "d991b418-3765-449d-9dc8-32675ea59494",
        "code": "MDMX",
        "bank_name": "Mann Deshi Mahila Sahakari Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "4162fc8a-58f5-43b8-96fc-5fe37669ce6a",
        "code": "MDPX",
        "bank_name": "Md Pawar Peoples Co-operative Bank Urun Islampur",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "a61e7608-8f92-46b6-ae01-3b6a41c14ec4",
        "code": "MEDX",
        "bank_name": "District Co-operative Central Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "4452a6db-d8e3-4075-b16c-504d1ac4d549",
        "code": "MERX",
        "bank_name": "Meghalaya Rural Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "f08572ff-4116-42d8-9f12-8420e7a8813e",
        "code": "MEUX",
        "bank_name": "Meenachil East Urban Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "40eff7ed-7c2f-43bf-af01-76d0a287e764",
        "code": "MFCX",
        "bank_name": "Muzaffarpur Central Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "85b4a59e-8916-4362-82eb-f2fa2df13de5",
        "code": "MFUX",
        "bank_name": "Mahatma Fule Urban Co-operative Bank,amravati",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "0195ec04-d4dd-4120-a338-bc49ae500a7a",
        "code": "MGBX",
        "bank_name": "Maharashtra Gramin Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "0e8c021d-39d2-4ed6-92ec-c7bf95bec4c6",
        "code": "MGCB",
        "bank_name": "Mogaveera Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "653098c6-c97b-4f1d-8c82-6cd3de1b0273",
        "code": "MGCX",
        "bank_name": "Mansing Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "9efbb7d1-395c-4613-807e-da47bc11d8e9",
        "code": "MGDX",
        "bank_name": "Magadh Central Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "7b6e62a7-caff-4d21-9812-0d2d16ee59d1",
        "code": "MGRB",
        "bank_name": "Malwa Gramin Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "f1f05c52-e005-4b83-bfc7-e23315c5240d",
        "code": "MGSX",
        "bank_name": "Mangaldai Nagar Samabai Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "a097a09e-4928-43c7-ad73-29cb1134bb2b",
        "code": "MGUX",
        "bank_name": "Madgaum Urban Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "2f84feaa-7657-45aa-b0e4-9e22f950aca5",
        "code": "MHCB",
        "bank_name": "Mizuho Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "5d11ab64-5493-4585-b019-0f433302f6ee",
        "code": "MHCX",
        "bank_name": "Mahoba Urban Co-operative Bank Mahoba",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "7eaff819-ba21-44b7-8cda-fa3280c92353",
        "code": "MHEX",
        "bank_name": "Mahamedha Urban Co-operative Bank ( Under Rbi Direction)",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "454b780e-eb66-4a93-a4f2-c0b2ae812c8e",
        "code": "MHLX",
        "bank_name": "Mahila Co-operative Bak",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "02932cd5-56f7-46ca-83e1-982bd4b2756c",
        "code": "MHMX",
        "bank_name": "Shri Mahalaxmi Co-operative Bank Kolhapur",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "be53dec2-6921-4280-ba27-099142384e56",
        "code": "MHNX",
        "bank_name": "Mahanagar Nagrik Sahakari Bank Maryadit",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "5cedbe4e-9b27-4cdd-a4b7-5ca3d93a7824",
        "code": "MHSX",
        "bank_name": "Mahesh Sahakari Bank Pune",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "117bd476-a544-42db-9a52-562a380726d3",
        "code": "MHUX",
        "bank_name": "Mahesh Urbank Co-operative Bank Parli V.",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "bb92f984-ca2e-4094-be0d-59d44fc064e5",
        "code": "MIZX",
        "bank_name": "Mizoram Co-operative Apex Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "3bfcc01e-dded-46b5-99ae-6e62bc9bfcc1",
        "code": "MJCX",
        "bank_name": "Monghyr Jamui Central Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "1365f73e-d608-4ff2-986a-50d8f8c6e35b",
        "code": "MKPB",
        "bank_name": "Malkapur Urban Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "d250fc48-1c21-450e-8754-672ae3e2f21a",
        "code": "MKUX",
        "bank_name": "Malkapur Urban Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "b28811c5-1fce-4b2a-8db0-a2af481ce6f8",
        "code": "MKYX",
        "bank_name": "Marketyard Commercial Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "5ecb9616-ccb5-44aa-8277-69bcbd38163f",
        "code": "MLCG",
        "bank_name": "Merchants Liberal Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "970e20f6-8bb9-4fcf-a795-fc3cae71cb88",
        "code": "MLDX",
        "bank_name": "Malda District Central Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "b98ca498-f16d-4cdd-8c61-1b930da30970",
        "code": "MMCX",
        "bank_name": "Mattancherry Mahajanik Co-operative Urban Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "d8193b6b-2561-4072-a750-397cef1a088b",
        "code": "MMMX",
        "bank_name": "Mahila Nagrik Sahakari Bank Maryadit Mahasamund",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "9c79aec6-e71a-4c90-aed8-10b6597fa52b",
        "code": "MNBX",
        "bank_name": "Mahila Co-operative Nagarik Bank,bharuch",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "9dba7364-cb81-409a-8da6-8909eba09b99",
        "code": "MNCX",
        "bank_name": "Mansa Central Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "0fda5e2c-780d-4b1b-a85b-deaa77e4a87c",
        "code": "MNSX",
        "bank_name": "Mehsana Nagarik Sahakari Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "60e6381f-bb69-488f-9b07-ad04544118e0",
        "code": "MOGX",
        "bank_name": "Moga Central Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "7bc3d5a1-9668-474e-aa77-dc81ffb4859e",
        "code": "MOUX",
        "bank_name": "Mohol Urban Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "bd79dcef-6f9a-4876-8c72-00b469885a2d",
        "code": "MPCX",
        "bank_name": "Moirang Primary Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "65554c2f-be3c-4ef0-a8d8-5cd4a03817fb",
        "code": "MPDX",
        "bank_name": "Malappuram District Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "57da309a-c86f-45a2-9050-af73f5b3ef2b",
        "code": "MPRX",
        "bank_name": "Madhya Pradesh Rajya Sahakari Bank Maryadit",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "a179ccca-5fce-4862-b51d-849787c6f270",
        "code": "MRBX",
        "bank_name": "Manipur Rural Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "514018ff-9b13-4d77-915f-28d234ee6e5c",
        "code": "MRTX",
        "bank_name": "Maratha Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "bab482c8-0810-4651-ab5b-64fa9e5300be",
        "code": "MSAX",
        "bank_name": "Mansarovar Urban Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "7179cab4-af46-41ff-88f5-8b4d20e032ab",
        "code": "MSBL",
        "bank_name": "Malad Sahakari Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "c10f7626-ec05-4f32-829e-1d5579c6253b",
        "code": "MSBX",
        "bank_name": "M.s.Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "dcd23bf5-916a-48a4-87ed-4aaaafbd9272",
        "code": "MSCI",
        "bank_name": "Maharashtra State Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "b4a8014f-3f27-4682-a67f-233fd430978b",
        "code": "MSCX",
        "bank_name": "Manipur State Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "414ef795-e015-4ce0-b6b1-152438baf983",
        "code": "MSHQ",
        "bank_name": "Mashreq Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "2f6ca9bc-ccaa-44b9-a864-964cd1f1409c",
        "code": "MSLM",
        "bank_name": "Muslim Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "86fc2d84-cb9b-4893-b8c3-6fd133858c71",
        "code": "MSNU",
        "bank_name": "Mehsana Urban Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "f6f5b289-0394-402e-9b86-801b67d47f9a",
        "code": "MSNX",
        "bank_name": "Mehsana District Central Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "cc054cb9-8745-46f2-92c9-4332aad71dcb",
        "code": "MSOX",
        "bank_name": "Manorama Co-operative Bank Solapur",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "dbe1fccf-019c-45c2-8ea2-1df5fab61ee5",
        "code": "MSSX",
        "bank_name": "Merchants Souharda Sahakara Bank Niyamitha",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "3810a097-fdcf-4d9a-82ba-accb6e9e76cd",
        "code": "MUBL",
        "bank_name": "Municipal Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "a6d9f44a-2968-4842-84c9-83975722714f",
        "code": "MUBX",
        "bank_name": "Maharaja Co-operative Urban Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "d42317e6-ba6f-48d2-87f4-4c8c5a59d1ac",
        "code": "MUCG",
        "bank_name": "Merchants Urban Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "f22bb747-99ef-4770-bd53-d863b82fe9e7",
        "code": "MUCX",
        "bank_name": "Mapusa Urban Co-operative Bank of Goa",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "e1a06f36-411b-4741-8226-7ece40cce9c5",
        "code": "MUDX",
        "bank_name": "Madheshwari Urban Development Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "79af3df3-ca72-4c6c-acca-764a3116dbbb",
        "code": "MUNX",
        "bank_name": "Mahudha Nagarik Sahakari Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "e3f42f33-adb6-48dc-abb1-b6b31b340c65",
        "code": "MUPX",
        "bank_name": "Mehmadabad Urban Peoples Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "05165a21-098c-46e4-9477-e0bcaa4254e8",
        "code": "MURX",
        "bank_name": "Murshidabad District Central Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "39e736d0-5315-40d8-8525-1b44b6141f48",
        "code": "MUSX",
        "bank_name": "Muslim Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "327f538b-3ec7-4502-be5a-babbe820f358",
        "code": "MVCB",
        "bank_name": "Sir M Visvesvaraya Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "cb042cfa-2183-41a6-853a-ff8805e171b7",
        "code": "MVCX",
        "bank_name": "Mahaveer Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "5e388eae-9430-4f52-a247-85e08be98657",
        "code": "MVIX",
        "bank_name": "Manvi Pattana Souharda Sahakari Bank Ni",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "81c3de04-8fa9-421b-bcef-0c1705db1fd4",
        "code": "MXXX",
        "bank_name": "Maharashtra Mantralaya & Allied Offices Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "969bce7d-8453-4f7a-b663-98dbdcf80516",
        "code": "MYAX",
        "bank_name": "Meghalaya Co-operative Apex Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "b39eca60-f6a5-425e-a4e6-07022b8f1670",
        "code": "MYCX",
        "bank_name": "Mayurbhanj Central Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "f76ddf41-e0c0-4f45-9576-bc32ade67b48",
        "code": "MYSX",
        "bank_name": "Mysore Chamarajanagar District Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "0800488b-c705-4fc7-a207-e0e2028aede5",
        "code": "MZCX",
        "bank_name": "Mizoram Urban Co-operative Development Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "701e5d62-31a2-4f4c-83de-2769d2d7fdd4",
        "code": "MZRX",
        "bank_name": "Mizoram Rural Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "63806ac5-4a3f-4d80-851b-bb316f490ad9",
        "code": "NABX",
        "bank_name": "Nandani Sahakari Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "65560932-7fa3-4d0d-8327-2e32ac41fc4d",
        "code": "NACX",
        "bank_name": "Nalanda Central Co-operative Bank Nalanda",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "d5e33d77-f92f-4ce4-9a8c-84effdf42645",
        "code": "NADX",
        "bank_name": "Nadapuram Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "2d2754c3-0801-419e-87b6-fd4758f76113",
        "code": "NAGX",
        "bank_name": "Nagaland Rural Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "1603da8a-2125-421d-8823-c38151712b74",
        "code": "NAIX",
        "bank_name": "Nainital District Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "aa3ad64c-5aac-42d6-aac5-7ec2fe6eb135",
        "code": "NALX",
        "bank_name": "National Urban Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "ce7315b9-a1c9-418a-8451-ec265b31ed40",
        "code": "NANX",
        "bank_name": "Nanded District Central Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "0568cf8b-4cba-46e5-a832-6fd3f3a8df2c",
        "code": "NASX",
        "bank_name": "Nasik District Central Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "17659d7b-02cc-469b-a79d-14bd21fd8330",
        "code": "NATA",
        "bank_name": "National Australia Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "dedebdfb-603d-4a27-bb60-eb78a35131db",
        "code": "NAUX",
        "bank_name": "Nagaur Central Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "3cdd1fd4-a0ef-48a7-80af-fac986b330be",
        "code": "NAVX",
        "bank_name": "Navnirman Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "eab0e329-fdb9-492d-99ae-a98b38569a6c",
        "code": "NAWX",
        "bank_name": "Nawanagar Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "6846c722-e958-4bc4-85e4-18c6233c8fe5",
        "code": "NBAD",
        "bank_name": "National Bank of Abu Dhabi PJSC",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "2bb55e84-f85d-4fa1-88fb-c8c5433ea9e2",
        "code": "NBBX",
        "bank_name": "National Co-operative Bank Bangalore",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "8b041976-19dd-4654-bfa2-6f937aa905b7",
        "code": "NBCX",
        "bank_name": "Nalbari Urban Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "1550d486-8ed7-4b7b-a0ad-649862dda4a9",
        "code": "NBMX",
        "bank_name": "Nagrik Sahakari Bank, Vidisha",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "39323401-3c9f-4f71-a110-889a972f56b5",
        "code": "NBRD",
        "bank_name": "National Bank for Agriculture and Development",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "fefeb7bc-a2f5-4c1c-9749-7c5d87a4a77f",
        "code": "NCBL",
        "bank_name": "National Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "34a4b8fa-958b-476b-af0f-eeadd2f619d6",
        "code": "NCBX",
        "bank_name": "Nawanshahr Central Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "f26f81c8-461f-4df5-99e7-72303a9fa8c5",
        "code": "NCCX",
        "bank_name": "Nabadwip Co-operative Credit Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "a1a318e8-2d88-4606-958c-724667a09ae9",
        "code": "NCOX",
        "bank_name": "Nagnath Urban Co-operative Bank Hingoli",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "3f9a4d62-2674-4723-9ba0-30d98dce919c",
        "code": "NCUB",
        "bank_name": "Nilambur Co-operative Urban Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "c6bb32e0-1f51-4340-8e97-047e3c6c96ae",
        "code": "NCUX",
        "bank_name": "Nilambur Co-operative Urban Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "28b9a8cc-53a4-4e8f-9b93-46d192f6d4de",
        "code": "NDCB",
        "bank_name": "Naval Dockyard Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "dc46ef9f-c222-40b6-8539-c2e1ce00832e",
        "code": "NDCX",
        "bank_name": "Nilgiris District Central Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "9675f76b-b7d0-4978-ad39-e1f841cdcbf6",
        "code": "NDDX",
        "bank_name": "Nadia District Central Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "8b33f6e7-0968-4e48-a755-abbb62f7d155",
        "code": "NDGX",
        "bank_name": "Nashik District Girna Sahakari Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "0e1a05ac-9d94-439b-b4ed-99345c7a149f",
        "code": "NDIX",
        "bank_name": "Nashik District Industrial & Mercantile Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "ade0fcd2-6fb0-4ac9-8a64-efc62d11c806",
        "code": "NDOX",
        "bank_name": "Nayagarh District Central Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "5ab363e5-91e6-454b-9bed-d21ed5f3809f",
        "code": "NESF",
        "bank_name": "North East Small Finance Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "490df512-62b9-4a44-b604-a2e1f97b4746",
        "code": "NEYX",
        "bank_name": "Neyyattinkara Co-operative Urban Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "23b33f8a-4b18-4875-8ba7-2fdd4cd55db4",
        "code": "NGBX",
        "bank_name": "Nagar Sahakari Bank Maharajganj",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "eb4afa0e-5186-4a2e-b79d-54d7ce1611a2",
        "code": "NGKX",
        "bank_name": "Nagrik Sahakari Bank Maryadit Gwalior",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "6cc09017-7a9e-42b8-ab2b-359d62f8c9df",
        "code": "NGNX",
        "bank_name": "Nagina Urban Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "6e5112eb-e286-4355-a92a-fbf9f3912ad0",
        "code": "NGRX",
        "bank_name": "Nagar Sahakari Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "90a89779-3a6a-42cc-9c32-c1314a231e56",
        "code": "NGSB",
        "bank_name": "Nagpur Nagarik Sahakari Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "f1b36928-5f27-49db-b910-890c8ab07cc0",
        "code": "NGSX",
        "bank_name": "Nagarik Sahakari Bank Maryadit Durg",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "02bce351-6d22-4a62-947f-8840dedbe32e",
        "code": "NGUX",
        "bank_name": "Nagaur Urban Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "e87c625f-0c07-4ba0-a3d3-aca0bf5452a9",
        "code": "NICB",
        "bank_name": "New India Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "f02c6357-6c5a-47ba-abb5-e4274bd76d43",
        "code": "NIDX",
        "bank_name": "Nidhi Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "9bc1d2f8-ef0f-4413-a8b1-1a4d2cff4132",
        "code": "NILX",
        "bank_name": "Nilkanth Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "6c712efb-3d50-42f7-87c4-e1fd60b695c6",
        "code": "NIRX",
        "bank_name": "Nirmal Urban Co-operative Bank Nagpur",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "02b55c34-b91e-492c-9ba5-5ccc4dff1edd",
        "code": "NIUX",
        "bank_name": "Nileshwar Co-operative Urban Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "c5b31437-afd3-4d8c-9a5a-6646b31475ed",
        "code": "NJBK",
        "bank_name": "Nav Jeevan Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "7d95572a-849b-461a-a245-c62735eeab84",
        "code": "NJCX",
        "bank_name": "Nav Jeevan Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "c9581559-c80a-4686-9dd4-656fd915d9b1",
        "code": "NJGX",
        "bank_name": "Narmada Jhabua Gramin Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "14d89495-97f6-41de-bb79-6b959fe52579",
        "code": "NJMX",
        "bank_name": "Nashik Zila Mahila Vikas Sahakari Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "f38a28de-be94-486d-8bc4-7b4883e2a963",
        "code": "NJSX",
        "bank_name": "Nasik Zila Mahila Sahakari Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "fafe2993-2eb2-4972-9813-b1e7c2c3f368",
        "code": "NKGS",
        "bank_name": "NKGSB Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "eb80914d-56e1-42e1-bca6-64ef5ff71881",
        "code": "NLGX",
        "bank_name": "Nalgonda Dist. Co-operative Central Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "5500bd43-f6b7-4697-8597-d143302331ef",
        "code": "NLUX",
        "bank_name": "National Urban Co-operative Bank,bahraich",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "6db69056-6c55-4990-b309-8d55de669053",
        "code": "NMCB",
        "bank_name": "Nasik Merchants Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "a5a3979a-6ad1-477a-8371-9ebda8a58346",
        "code": "NMCX",
        "bank_name": "Navi Mumbai Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "6fa286a1-0bf5-4276-bde1-6e5eb6800de2",
        "code": "NMGB",
        "bank_name": "North Malabar Gramin Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "06efb273-4ee3-4913-8047-0dfa0cd6755e",
        "code": "NNCX",
        "bank_name": "Naroda Nagrik Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "52124bfc-07b3-4238-8220-ade9d2f33fa1",
        "code": "NNSB",
        "bank_name": "Nutan Nagarik Sahakari Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "1b23eb63-929e-47ac-9621-e826702ee843",
        "code": "NNSX",
        "bank_name": "Nutan Nagari Sahakari Bank Ichalkaranji",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "8485fae6-10b4-4df2-a29f-346d5ace1966",
        "code": "NOBX",
        "bank_name": "Noble Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "faf2c3ee-4eba-4d8d-92be-9c6889443995",
        "code": "NOIX",
        "bank_name": "Noida Commercial Co-operative Bak",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "f6f2bea5-abe9-4dc5-ba8f-e045e42ebd5c",
        "code": "NOSC",
        "bank_name": "Bank of Nova Scotia",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "74d50c3a-6084-4b90-85e9-af5e026ded45",
        "code": "NPCX",
        "bank_name": "Nadiad Peoples Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "dcfd7350-534e-46b9-b1e7-2c74d7052b6f",
        "code": "NPKX",
        "bank_name": "Nashik Zilha Sarkari & Parishad Karmachari Sb Nmt",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "40de35ca-c256-4795-bdf7-1deae91ed189",
        "code": "NPPX",
        "bank_name": "Nabagram Peoples' Co-operative Credit Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "3abc8d4b-3bbc-4828-b931-e4855f3e9025",
        "code": "NRDX",
        "bank_name": "Nasik Road Deolali Vyapari Sahakari Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "0781be8d-3b76-407f-b9d0-7b439f622c29",
        "code": "NRMX",
        "bank_name": "Northern Railway Multi State Primary Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "25f2f20b-6e09-487d-914b-e66ebd4c33d4",
        "code": "NSBB",
        "bank_name": "Nagarik Sahakari Bank Bhiwandi",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "b9e88c52-3919-4df3-b24a-1fa3cd52b95c",
        "code": "NSBX",
        "bank_name": "Nagrik Sahakari Bank Lucknow",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "47aa183d-59b1-4aad-b45d-dbbabe3e83b5",
        "code": "NSCX",
        "bank_name": "Nagaland State Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "d4e996cb-d6fd-430f-b27b-172e2ad64b2b",
        "code": "NSGX",
        "bank_name": "Nagar Sahakari Bank Gorakhpur",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "4dd35461-f3dc-471c-906f-57dcfe8acd87",
        "code": "NSIX",
        "bank_name": "Nagrik Sahakari Bank Indore",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "bcd5563d-0f08-49eb-b127-c09b3369045d",
        "code": "NSJX",
        "bank_name": "Nagarik Sahakari Bank Maryadit,jagdalpur",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "8732c2be-28e5-4d23-b1bb-20ffa09665ac",
        "code": "NSMX",
        "bank_name": "Nagarik Samabay Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "8b7aa15c-022d-4075-bc9c-66081596a515",
        "code": "NSPB",
        "bank_name": "NSDL Payments Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "36e6a0cb-5f24-40de-af96-2e7c02ed2fbd",
        "code": "NSPX",
        "bank_name": "Nishigandha Sahakari Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "fbc298d0-76af-4d1c-9462-96bee14976f1",
        "code": "NSRX",
        "bank_name": "Nagrik Sahakari Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "81d8542d-2308-44ea-8de5-10afd15990ac",
        "code": "NTBL",
        "bank_name": "Nainital Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "7ec35c2c-4b7b-46b1-971e-685dc0ac7000",
        "code": "NUBX",
        "bank_name": "New Urban Co-operative Bank Rampur",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "036be268-c86c-4791-8303-338f883e5aa1",
        "code": "NUCB",
        "bank_name": "Nagar Urban Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "5c79aee7-58c9-4b7b-b374-179f0715c751",
        "code": "NUCX",
        "bank_name": "Navabharat Co-operative Urban Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "fe46edc5-0a4d-4ee8-94a9-07d3b7938c77",
        "code": "NULX",
        "bank_name": "National Urban Co-operative Bank, Pratapgarh",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "c6e61895-e52f-459c-8607-71765ece05ae",
        "code": "NVCX",
        "bank_name": "Navanagara Urban Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "a35b0b28-2732-4ff5-8298-0ceb1acd83ab",
        "code": "NVNM",
        "bank_name": "Navnirman Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "600fae8c-a8af-4a3d-a98b-5cd3e0128ed0",
        "code": "NVSX",
        "bank_name": "Nagar Vikas Sahakari Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "1de316dd-c8ba-4be3-92b4-143c7bed6f07",
        "code": "NWCX",
        "bank_name": "Nawada Central Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "c4710847-bdca-46c9-b1f9-50c8930016bd",
        "code": "ODCX",
        "bank_name": "Osmanabad District Central Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "74746554-8d0a-459f-b355-3e8e90a55384",
        "code": "ODGB",
        "bank_name": "Odisha Gramya Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "5d382712-c7de-4fb1-95cf-c3f29ee0fdc6",
        "code": "OIBA",
        "bank_name": "HSBC Bank Oman S.A.O.G",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "b2da26ae-c736-41e8-bf84-378fe3577c70",
        "code": "OMCX",
        "bank_name": "Ojhar Merchant's Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "d07d6d9c-aadc-4bdc-828b-23969b0e447f",
        "code": "ONSX",
        "bank_name": "Omkar Nagreeya Sahakari Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "fd780140-928d-4117-b0d8-82502ea0d8a4",
        "code": "ORBC",
        "bank_name": "Oriental Bank of Commerce",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "0c63bd8e-1910-466d-8e0f-950c1ea1c299",
        "code": "ORCB",
        "bank_name": "Odisha State Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "81c41494-b29c-460a-871e-83c1a9b1bc36",
        "code": "OSMX",
        "bank_name": "Osmanabad Janata Sahakari Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "f94d27e9-f9e9-4dc9-a4c2-1e18092e81ed",
        "code": "PABX",
        "bank_name": "Pallavan Grama Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "19452cf9-0b8e-4aa0-aad7-274b7f85a780",
        "code": "PACX",
        "bank_name": "Pali Central Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "cbf4ff03-794e-4fce-a00b-b4e9ac3cae88",
        "code": "PADX",
        "bank_name": "Padra Nagar Nagrik Sahakari Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "c31dac0e-2fc5-4bb5-82e6-990b07a6ad8a",
        "code": "PALX",
        "bank_name": "Pali Urban Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "a125ceaa-0b60-4190-a71f-051652ea6ee9",
        "code": "PANX",
        "bank_name": "Panchmahal District Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "9f55eb78-1903-4c25-af44-9e0a6783a298",
        "code": "PARX",
        "bank_name": "Parbhani District Central Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "bcf74dea-4e65-4cce-b36e-20ec0c345bb6",
        "code": "PASX",
        "bank_name": "Paschim Banga Gramin Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "a4ec9a79-c4ed-4bb0-a663-ad6bdf651929",
        "code": "PATX",
        "bank_name": "Pathanmthitta District Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "e98b2fe2-bb69-4f55-b895-34fbdc002aa5",
        "code": "PAYX",
        "bank_name": "Payangadi Urban Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "02192ac3-b823-434c-8119-3165f6ec4c30",
        "code": "PBGX",
        "bank_name": "Puduvai Bharathiar Grama Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "28ad987c-2636-47a3-845c-897327f63f24",
        "code": "PCBL",
        "bank_name": "Patan Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "c31b7722-4b6e-4646-acb3-60591fbedf0f",
        "code": "PCBX",
        "bank_name": "Parshwanath Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "51862859-57a4-4987-8a8a-3e87d412046a",
        "code": "PCCB",
        "bank_name": "Purulia Central Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "fad00144-dcf9-485c-81cc-9315ff3328b9",
        "code": "PCCX",
        "bank_name": "Panchkula Central Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "32f559ee-27c1-45d1-aeb6-fbd1eca41574",
        "code": "PCLX",
        "bank_name": "Pragathi Co-operative Bank, Bangalore",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "6b7635e4-94df-4a51-86c7-77eb218d0f72",
        "code": "PCMX",
        "bank_name": "Panchsheel Mercantile Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "abfa3d54-e80d-4a88-b1d6-a3d7fb1080bb",
        "code": "PCOX",
        "bank_name": "Peoples' Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "82fd4422-00f2-4662-ad70-353d5341248f",
        "code": "PCPX",
        "bank_name": "Pimpri Chinchwad Sahakari Bank Maryadit,pimpri",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "8ee9459f-a9dc-48f0-8528-6f5d0261e622",
        "code": "PCSX",
        "bank_name": "Pondicherry State Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "87781944-d0d1-47a7-811d-702e3714e15a",
        "code": "PCTX",
        "bank_name": "Pune Cantonment Sahakari Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "8107fe6f-1d33-4022-be7f-947f78fed7d4",
        "code": "PCUX",
        "bank_name": "Pochampally Co-operative Urban Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "269c0080-4acb-4dce-a240-418f2120736c",
        "code": "PDBX",
        "bank_name": "Purnea District Central Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "f9c8ee27-50bf-4da3-9ffd-14d29c870bff",
        "code": "PDCX",
        "bank_name": "Pune District Central Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "9af72c96-f8d2-4b92-9641-f5c75798a9d4",
        "code": "PDNX",
        "bank_name": "Pandyan Grama Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "4496ae5b-3278-4a59-a6ca-8445fd064887",
        "code": "PDSX",
        "bank_name": "Priyadarshani Nagari Sahakari Bank Jalna.",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "4aadc0f8-1a86-4bbf-a065-2b53681e5388",
        "code": "PDUX",
        "bank_name": "Pandharpur Urban Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "747c65a7-e88f-46ce-a2d8-3ea233699c7b",
        "code": "PGBX",
        "bank_name": "Pragathi Krishna Gramin Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "fe1bc742-53d7-45aa-b569-38ad785e95e8",
        "code": "PGCX",
        "bank_name": "Progressive Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "60631bf5-6806-4bae-b220-d25298c891db",
        "code": "PGRX",
        "bank_name": "Progressive Urban Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "e1b8ce17-5c29-48d1-96fd-3c1d860b293f",
        "code": "PGTX",
        "bank_name": "Pragati Co-operative Bank, Thara",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "4785ac63-cc5d-4537-abee-cd0411edaab9",
        "code": "PHIX",
        "bank_name": "Panihati Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "e9e7cfbf-63aa-4e70-add0-1098c3d35bde",
        "code": "PITX",
        "bank_name": "Pithoragarh Zila Sahakari Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "089f0ef5-5103-49c6-9be5-c4654223de25",
        "code": "PJSB",
        "bank_name": "Gopinath Patil Parsik Janata Sahakari Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "51873afe-2eec-4e1c-8855-ed98dc7b71f9",
        "code": "PKBX",
        "bank_name": "Panchkula Urban Co-operative Bank Lmited",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "e2a1df31-ce23-43d3-ba67-e7bc5d816ce2",
        "code": "PKDX",
        "bank_name": "Palakkad District Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "a944f4e7-3af7-4745-83ae-adafbd519e5f",
        "code": "PKGB",
        "bank_name": "Karnataka Gramin Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "8131f0cd-0c8a-40d1-822b-3f1c80121081",
        "code": "PLOX",
        "bank_name": "Palamoor Co-operative Urban Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "c31c62c4-0a7b-4577-a0f4-702070cb9f03",
        "code": "PLUX",
        "bank_name": "Palus Sahakari Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "2b960649-713c-404f-9069-93ca061d12ee",
        "code": "PMCB",
        "bank_name": "Punjab & Maharashtra Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "b6515a15-c533-4308-a081-63b164e35b88",
        "code": "PMCX",
        "bank_name": "Pimpalgaon Merchants Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "cf0f49e6-7871-4e04-b3e0-9d1aa441c692",
        "code": "PMEC",
        "bank_name": "Prime Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "78aa8825-c130-49e2-bc9e-3b9ef349c1bd",
        "code": "PMNX",
        "bank_name": "Pragati Mahila Nagrik Sahakari Bank Bhilai",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "b18bd6d2-94e5-4b04-82f4-ce75dd2636f4",
        "code": "PNCX",
        "bank_name": "Panipat Urban Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "effba1a4-869e-486b-af13-d629eaa2d3bf",
        "code": "PNMX",
        "bank_name": "Pune Merchant's Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "8d8ba9a2-5314-48ea-9fd7-d9f300915cee",
        "code": "PNPX",
        "bank_name": "Panipat Central Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "11316a47-0d04-48f6-9ec5-cd933631ec65",
        "code": "PNSX",
        "bank_name": "Poornawadi Nagrik Sahakari Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "5c5428fb-c286-455f-9082-d3be66a49f07",
        "code": "PPBX",
        "bank_name": "Pune People's Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "77ac8d47-0db2-4dcc-9099-136eab17a7ba",
        "code": "PPCX",
        "bank_name": "Pachora Peoples Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "62d6081f-373d-4cc8-80a3-04e8e9ed38a4",
        "code": "PRCX",
        "bank_name": "Proddatur Co-operative Town Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "02c7e0c9-f6e2-413c-91fa-a8e5e81b6f57",
        "code": "PREX",
        "bank_name": "Prerana Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "cb509555-a7dd-4bef-95a1-8995ce7a44d6",
        "code": "PROX",
        "bank_name": "Progressive Mercantile Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "8f82b73a-ea7f-41d0-aef5-a03d7627a4d2",
        "code": "PRPX",
        "bank_name": "Paraspar Sahayak Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "2de0c216-36f2-45e5-885b-cbe3f36988b9",
        "code": "PRSX",
        "bank_name": "Pravara Sahakari Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "39b48bfa-939b-46d7-aed8-728cb4080dfb",
        "code": "PRTH",
        "bank_name": "Prathama Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "8dd98791-5fe8-4fe0-86f9-92050701d4aa",
        "code": "PRUX",
        "bank_name": "Priyadarshani Urban Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "64973986-78e6-47d5-84d8-ce1c7ae3e9f2",
        "code": "PSBL",
        "bank_name": "Pavana Sahakari Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "6defba33-7aa5-4864-8c88-fa9564e2ad03",
        "code": "PSBX",
        "bank_name": "Pragati Sahakari Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "f910038a-6eaf-4e7d-899b-2e15f730e99d",
        "code": "PSCX",
        "bank_name": "Punjab State Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "6c14931e-fbb6-416b-86b4-23122828970d",
        "code": "PSIB",
        "bank_name": "Punjab & Sind Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "e2d4f745-31f1-437e-98ac-7439d237a608",
        "code": "PSRX",
        "bank_name": "Sri Potti Sriramulu Nellore Dccb",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "36c9ea3f-0cb1-4b56-86bf-825f820be1f3",
        "code": "PSSX",
        "bank_name": "Prathamik Shikshak Sahakari Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "5a9b0879-2081-4d72-8efb-94360f070c25",
        "code": "PTCX",
        "bank_name": "Patiala Central Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "e225bb8d-cd9d-4993-8dd1-6be17f08e016",
        "code": "PTNX",
        "bank_name": "Patan Urban Co-operative Bank Patan",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "28331595-71ad-4450-a1bc-977a260bd48f",
        "code": "PTSX",
        "bank_name": "Patan Nagarik Sahakari Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "64029b4e-15af-432d-b5ac-773feaadca75",
        "code": "PUBX",
        "bank_name": "People's Urban Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "f6c3acb5-82d8-4a62-a7f8-dcbd70d781da",
        "code": "PUCB",
        "bank_name": "Pandharpur Urban Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "c8d1af74-b83b-4b71-8e50-833e8959d110",
        "code": "PUCX",
        "bank_name": "Pusad Urban Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "4fe4955e-8911-4833-bc99-cb275e38eeb0",
        "code": "PUDX",
        "bank_name": "Pudukottai District Central Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "618ac206-cc61-4d3f-b058-76ef1d647461",
        "code": "PUGX",
        "bank_name": "Punjab Gramin Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "45178d45-0904-4e65-87cf-ea0bdcb07599",
        "code": "PUNB",
        "bank_name": "Punjab National Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "4110e4a1-ba9b-4925-b94f-a6495448167e",
        "code": "PUNX",
        "bank_name": "Pune Urban Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "3fc4069b-95b0-4c67-aa72-1de92971b00a",
        "code": "PURX",
        "bank_name": "Purvanchal Gramin Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "06678ce3-e32a-4341-8c19-7ec1794e2356",
        "code": "PUSD",
        "bank_name": "Pusad Urban Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "a0ae2b71-dfa2-4e4e-811b-cdbb786604da",
        "code": "PUSX",
        "bank_name": "Purasawalkam Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "810daaa4-70b4-4865-aff6-309bc1acf990",
        "code": "PUUX",
        "bank_name": "Puri Urban Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "31aaddee-e11a-42e5-8bad-9e5fee02b1c2",
        "code": "PVAX",
        "bank_name": "Pavana Sahakari Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "9344f90a-ebcd-41e4-b066-079de6c52b1b",
        "code": "PVCX",
        "bank_name": "Purvanchal Co-operative Bank Gazipur",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "e3a50e51-4440-468e-8fc7-3f177d7b65e6",
        "code": "PVVX",
        "bank_name": "Padmashri Dr. Vitthalrao Vikhe Patil Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "f60a6020-4e91-4554-82e7-8ee7b8cefad5",
        "code": "PWUX",
        "bank_name": "Parwanoo Urban Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "7187a28f-f0a6-421a-959f-ae111f766adb",
        "code": "PYCX",
        "bank_name": "Payyoli Co-operative Urban Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "bed38dde-5087-40b5-ba98-1a4186ba0bf6",
        "code": "PYTM",
        "bank_name": "Paytm Payments Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "3093d7df-a5c4-4330-a5fe-1c09753af70b",
        "code": "QNBA",
        "bank_name": "Qatar National Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "32af2eff-398d-4aa5-bda0-31a89934a685",
        "code": "QNBX",
        "bank_name": "Qatar National Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "665652f7-6af5-4279-a409-a22157978ce4",
        "code": "QUCX",
        "bank_name": "Quilon Co-operative Urban Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "3299ebf4-10d3-4711-a196-69842aee57c7",
        "code": "RABO",
        "bank_name": "Rabobank International",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "c7777de2-e3e0-4efe-a1e8-3df78cbe1c4c",
        "code": "RACX",
        "bank_name": "Rajkot Commercial Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "60602b23-ffe1-48b3-a57b-e2728c91ef8a",
        "code": "RAEX",
        "bank_name": "Railway Employees Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "fe98a726-6326-4c27-abc8-dc500d628805",
        "code": "RAJX",
        "bank_name": "Rajsamand Urban Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "77c63769-a90f-4160-92cb-724e65a21035",
        "code": "RAKX",
        "bank_name": "Rajkot Peoples Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "83388ac2-e5b4-416e-a1e3-def6617e2b05",
        "code": "RAMX",
        "bank_name": "Rajputana Mahila Urban Co-operative Bak",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "60be9a5c-251d-4721-a08d-6cb61236828e",
        "code": "RANX",
        "bank_name": "Rander Peoples Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "f8a04bff-2872-4bf5-9c73-43f3b0543d95",
        "code": "RATN",
        "bank_name": "RBL Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "92d55c14-fe34-4188-8cc0-4f04fc34cd37",
        "code": "RAUX",
        "bank_name": "Rajlaxmi Urban Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "17bb885a-631f-4861-80bc-1e8c2b5972c6",
        "code": "RBBX",
        "bank_name": "Rajarambapu Sahakari Bank Peth",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "d2a82b59-4c3e-46da-8d2a-78131e5fd3f3",
        "code": "RBCX",
        "bank_name": "Reserve Bank Employees Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "07a1e6eb-926d-4693-b1ac-f3984d74010a",
        "code": "RBIH",
        "bank_name": "IDRBT",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "dba32621-03cd-4fd6-9a34-e8ffde6083c9",
        "code": "RBIN",
        "bank_name": "Reserve Bank Of India",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "6c0c2103-da44-4a45-a823-f60aa0e7db08",
        "code": "RBIP",
        "bank_name": "Reserve Bank of India",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "5cf647a6-71e9-4387-9442-2d4307f91c92",
        "code": "RBIS",
        "bank_name": "Reserve Bank of India",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "73a5616d-59c3-4e74-8e5a-602ca4807c06",
        "code": "RCBX",
        "bank_name": "Raniganj Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "addca5e5-f81e-4338-816c-018dd63b6ada",
        "code": "RCCX",
        "bank_name": "Ropar Central Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "cbe3603d-e605-4dac-9d11-8a017592de2a",
        "code": "RCDX",
        "bank_name": "Ramanathapuram District Central Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "f38f5745-5822-45f0-bd73-3c9ff93970a6",
        "code": "RCMX",
        "bank_name": "Ravi Commercial Urban Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "8ef21b88-1510-4c36-b862-4b50e71c1a3a",
        "code": "RCUX",
        "bank_name": "Rajadhani Co-operative Urban Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "31636999-f351-418d-9e7b-28a0be6a3b89",
        "code": "RDCB",
        "bank_name": "Rajnandgaon District Central Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "4c184c3d-b768-44f0-843e-a7902945bc5f",
        "code": "RDCX",
        "bank_name": "Raigad District Central Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "f17d5229-da5e-4f79-b199-2b83f480d6ca",
        "code": "RDNX",
        "bank_name": "Col Rd Nikam Sainik Sahakari Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "af92fc41-3da4-4ba6-84a8-b3070c3e3a6d",
        "code": "REBX",
        "bank_name": "Rendal Sahakari Bank Rendal",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "569dfe34-32e7-4484-a6f5-6b8db5bac5d3",
        "code": "RECX",
        "bank_name": "Railway Employees Co-operative Banking Society",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "4891fd1a-faed-46e7-bb0f-33702b94f083",
        "code": "REWX",
        "bank_name": "Rewari Central Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "51639172-7c8f-452a-81aa-0958e732f0bd",
        "code": "RGCX",
        "bank_name": "Ramgarhia Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "999fd491-afd0-474b-875f-60a092d2d663",
        "code": "RGSX",
        "bank_name": "Rajgurunagar Sahakari Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "241b9456-0641-4f6e-b6b8-b66b6ef4e4d0",
        "code": "RHMX",
        "bank_name": "Raj Laxmi Mahila Urban Co-operative Bank Jaipur",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "8b39e3c5-3dfb-4344-8835-5e8c9fde902e",
        "code": "RJCX",
        "bank_name": "Raiganj Central Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "38e592ea-f699-4afe-9853-eab905b7c0b8",
        "code": "RJJX",
        "bank_name": "Rajajinagar Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "ab876e07-b1b3-4105-b782-58fdbd6bf129",
        "code": "RJNX",
        "bank_name": "Rajpipla Nagarik Sahakari Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "0b9f06d2-fac5-4d1f-9799-ad896e984250",
        "code": "RJTX",
        "bank_name": "Shri Rajkot District Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "c398f42a-3ea8-4233-bf84-ffa4b74f8b3f",
        "code": "RKCX",
        "bank_name": "Ranchi Khunti Central Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "31ce9460-baa1-436e-b8e5-819658b18d64",
        "code": "RLUX",
        "bank_name": "Ranilaxmibai Urban Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "25decae9-03bd-4916-9289-1c5221e276f7",
        "code": "RMGB",
        "bank_name": "Rajasthan Marudhara Gramin Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "966f8088-081c-4dee-8ce3-82d35a6c5cd5",
        "code": "RNBX",
        "bank_name": "Ranuj Nagrik Sahakari Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "2ca66209-c972-4f38-a712-cbcc3e8fc049",
        "code": "RNDX",
        "bank_name": "Ratnagiri District Central Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "04739702-e1dc-4004-bdeb-087dcc963895",
        "code": "RNGX",
        "bank_name": "Ranga Reddy Co-operative Urban Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "f5377a4e-9a28-486b-bbb5-691481c4df46",
        "code": "RNSB",
        "bank_name": "Rajkot Nagarik Sahakari Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "6dbf7fd7-facc-49e8-a990-9769bcd4c748",
        "code": "RNSX",
        "bank_name": "Rajdhani Nagar Sahakari Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "fd733797-9bac-4227-ab95-8c492ecfb314",
        "code": "ROCX",
        "bank_name": "Rohika Central Co-operative Bank Madhubani",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "8b991c52-401f-4e00-92dd-a51f3c371056",
        "code": "ROHX",
        "bank_name": "Rohtak Central Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "001391d8-8518-4e90-9b4e-2436621be99b",
        "code": "RPUX",
        "bank_name": "Rajapur Urban Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "130b5d7f-6129-45c9-a2a5-c494145831a4",
        "code": "RRBP",
        "bank_name": "Rajarambapu Sahakari Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "e4a19047-e551-4f21-a2c6-0f88c3be6b8c",
        "code": "RRSX",
        "bank_name": "Ramrajya Sahakari Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "d33ee3e5-13ef-4506-afd0-049ebbe5ab59",
        "code": "RSBL",
        "bank_name": "Rajgurunagar Sahakari Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "379918a3-3805-4abe-8413-ab80ea4bf605",
        "code": "RSBX",
        "bank_name": "Raigad Sahakari Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "b591116c-c168-49fa-b7df-95cdaa6fb524",
        "code": "RSCB",
        "bank_name": "Rajasthan State Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "6cbe1f21-e0cc-45d3-a8a4-7feac0066786",
        "code": "RSSB",
        "bank_name": "Rajarshi Shahu Sahakari Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "7cada14f-2c2d-4c44-a28d-51fc8c97e70e",
        "code": "RSSX",
        "bank_name": "Rajarshi Shahu Sahakari Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "050ed8a8-5e2e-47fd-8dad-f70d8eb74602",
        "code": "RSUX",
        "bank_name": "Radhasoami Urban Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "2b2cd927-e604-4bec-b81f-3e6eb9df6723",
        "code": "RSVX",
        "bank_name": "Rajarshi Shahu Govt Servants Co-operative Bank Kolh",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "d2916b69-e715-4b69-b756-3e5ee7493fc4",
        "code": "RUCX",
        "bank_name": "Rajasthan Urban Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "4faefbc3-0835-4f79-b429-1db56204d439",
        "code": "RUKX",
        "bank_name": "Shri Rukmini Sahakari Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "a3036a31-3f10-452e-95a8-52600e513a70",
        "code": "RUMX",
        "bank_name": "Raipur Urban Mercantile Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "698bb2fd-4eb8-4257-95d9-42c1ba9a399f",
        "code": "RZSX",
        "bank_name": "Rampur Zila Sahakari Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "7fa27a20-8eef-418c-97aa-f2ee839d754b",
        "code": "SABR",
        "bank_name": "SBER Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "04249e34-755a-4e28-85ea-56f4d4ef25e8",
        "code": "SABX",
        "bank_name": "Saraswati Sahakari Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "60e828a0-ca13-4cc6-b451-d289502845fc",
        "code": "SACB",
        "bank_name": "Shri Arihant Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "dbe2c60a-615d-4562-9202-272f96f44c61",
        "code": "SACX",
        "bank_name": "Sarvodaya Co-operative Bank Mumbai",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "f68f9c36-44ad-4524-abac-51af76cd72db",
        "code": "SADX",
        "bank_name": "Sabarkantha District Central Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "e295a5fc-49f5-4483-a066-efde25623315",
        "code": "SAGX",
        "bank_name": "Saurashtra Gramin Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "fa6c8a76-41fe-417a-a1a8-702d5539b7a0",
        "code": "SAHE",
        "bank_name": "Sahebrao Deshmukh Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "bc666dd5-c8c6-4443-a8af-6b23e52c47ec",
        "code": "SAHX",
        "bank_name": "Sadhana Sahakari Bank Pune",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "592654d0-7237-4ea0-97e1-8fd7627d092e",
        "code": "SAIX",
        "bank_name": "Sanmitra Sahakari Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "05175fa1-dbca-47bb-b535-40bbe0fb3ace",
        "code": "SALX",
        "bank_name": "Salal Sarvodaya Nagarik Sahakari Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "7f34f152-f8bc-4731-b2c1-812f215ca5eb",
        "code": "SAMX",
        "bank_name": "Samata Sahakari Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "2bb5449e-d4bd-4b7e-9282-0caa9478cab2",
        "code": "SANT",
        "bank_name": "Sant Sopankaka Sahakari Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "b414ff6a-10bd-4ba6-8752-10df6f9ee75a",
        "code": "SANX",
        "bank_name": "Saibaba Nagari Sahakari Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "8492f8e6-5179-48c8-ab06-29d00acfd8d5",
        "code": "SAOX",
        "bank_name": "Shimoga Arecanut Mandy Merchants Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "e36e5b3c-50c0-4717-9f45-4d1628f980b8",
        "code": "SAPX",
        "bank_name": "Shrimant Malojiraje Sahakari Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "3dab9706-fd43-477c-81c8-91d633c64d0b",
        "code": "SARX",
        "bank_name": "Sardarganj Mercantile Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "cd6063d8-a8d0-4116-9d0c-f89199735ae5",
        "code": "SASA",
        "bank_name": "Sahyadri Sahakari Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "7e1cbec3-63d3-4435-a9c2-0eac3045c8a3",
        "code": "SASX",
        "bank_name": "S.A.S Nagar Central Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "5375b26f-fdae-4818-822f-a1873b1fa2eb",
        "code": "SATX",
        "bank_name": "Adv. Shamraoji Shinde Satyashodhak Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "6a369b26-5430-499b-abf7-9511d48cb1d0",
        "code": "SAUX",
        "bank_name": "Saidapet Co-operative Urban Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "2d926fdc-a7af-448a-9cd5-ee5ec774f466",
        "code": "SAVX",
        "bank_name": "Sardar Vallabhbhai Sahakari Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "d3c1cd76-8f94-43ac-b9de-de5cf0310e6a",
        "code": "SAWX",
        "bank_name": "Sawai Madhopur Kendriya Sahakari Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "8f1c40cd-4cef-4cd2-9957-b6855445542a",
        "code": "SBBJ",
        "bank_name": "State Bank of Bikaner and Jaipur",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "6068eb30-0a7c-4369-9244-9a532dfe213e",
        "code": "SBCR",
        "bank_name": "Shree Basaveshwar Urban Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "3b01dee5-75e7-4c3a-a27f-2b6e0ab673b5",
        "code": "SBCX",
        "bank_name": "Sultan's Bathery Co-operative Urban Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "ca34f3a9-5858-4cf5-bb75-9e9bb2883414",
        "code": "SBHY",
        "bank_name": "State Bank of Hyderabad",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "9666da80-ec4a-44ab-930b-2486197da43a",
        "code": "SBIN",
        "bank_name": "State Bank of India",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "269fb636-6f95-4e0d-8aa7-4dad46ddf5b3",
        "code": "SBKX",
        "bank_name": "Sri Channabasavaswamy Souhardha Pattana Sahak Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "a19dc0e9-0560-491c-80b0-deab69992571",
        "code": "SBLD",
        "bank_name": "Sonali Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "35c49b6c-a126-4701-bca8-edcdb2548a51",
        "code": "SBLS",
        "bank_name": "Samarth Sahakari Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "4b54c734-f98f-4528-9ac7-0440e128ad8a",
        "code": "SBLX",
        "bank_name": "Shubhalakshmi Mahila Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "ec50d60f-1daa-4acc-a11e-38deff90e203",
        "code": "SBMX",
        "bank_name": "Sri Banashankari Mahila Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "692bdb0f-f529-488c-b8a5-749a82676fb4",
        "code": "SBMY",
        "bank_name": "State Bank of Mysore",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "084e2b5e-db97-4bc1-90cf-b3f714329c44",
        "code": "SBNX",
        "bank_name": "Shree Bhavnagar Nagrik Sahakari Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "e7c3045b-4f8b-4b54-a3c6-223c1f4c0b43",
        "code": "SBPS",
        "bank_name": "Sri Basaveshwar Pattana Sahakari Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "6abd1992-35f4-43d5-a755-c25b00eda03d",
        "code": "SBPX",
        "bank_name": "Sardar Bhiladwala Pardi People's Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "1d3752aa-3581-45b6-91cd-ece637912fe4",
        "code": "SBSX",
        "bank_name": "Shivajirao Bhosale Sahakari Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "6bbfe367-21ce-489c-babf-225bdefa4278",
        "code": "SBTR",
        "bank_name": "State Bank of Travancore",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "17bf2e12-1a79-456d-9087-bfeff55c813c",
        "code": "SBUJ",
        "bank_name": "Shri Bharat Urban Co-operative Bank Jaysingpur",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "b34cd6bf-ca51-4e5d-9c82-dc373fd37940",
        "code": "SBUX",
        "bank_name": "Shree Balaji Urban Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "786e0901-ff1f-4db4-aa51-1e7d89370177",
        "code": "SCBL",
        "bank_name": "Standard Chartered Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "3482c263-fabe-4f1b-a95d-28553af28add",
        "code": "SCBX",
        "bank_name": "Sirohi Central Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "28f9315c-a082-445c-b32a-b6360e6decc7",
        "code": "SCCX",
        "bank_name": "Salem District Central Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "f8813efc-65e5-44e8-abf9-db71e26fef0c",
        "code": "SCDX",
        "bank_name": "South Canara District Central Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "0fb70a7d-dbec-4282-aa17-499512d8adb5",
        "code": "SCIX",
        "bank_name": "Social Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "f489fe82-0f52-4ad5-9640-7040965d8a03",
        "code": "SCNX",
        "bank_name": "Shri Chhani Nagrik Sahakari Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "6d475067-70d8-48e2-b8aa-c683f685f138",
        "code": "SCOB",
        "bank_name": "Samruddhi Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "0483194c-8838-4ec0-892e-88668b763403",
        "code": "SCOX",
        "bank_name": "Shimoga District Co-operative Central Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "9e1342b0-0b3f-4017-b3e0-214bbbfc31cc",
        "code": "SCPX",
        "bank_name": "Sangrur Central Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "3cf93890-db6e-4cbe-a96c-4af0dc451075",
        "code": "SCSX",
        "bank_name": "Sree Charan Souhardha Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "29cebb77-ea4e-4d9f-b5cb-dbc3a60f3637",
        "code": "SCUX",
        "bank_name": "Sudha Co-operative Urban Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "a79404a1-76c1-489a-b22a-8a0aec2cdf59",
        "code": "SDBX",
        "bank_name": "Samata Co-operative Development Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "388a24c9-764d-441d-9e80-545fe475375c",
        "code": "SDCB",
        "bank_name": "Surat District Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "c663a039-8644-42eb-ab35-6c9e0433510e",
        "code": "SDCE",
        "bank_name": "Satara District Central Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "6da776d4-572d-4a5c-bf67-8fb2cff53c3f",
        "code": "SDCX",
        "bank_name": "Sindhudurg District Central Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "41911ab5-8c80-4037-85d0-1f60ab7cfd37",
        "code": "SDHX",
        "bank_name": "Solapur Siddheshwar Sahakari Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "f00abe0b-5970-46a0-8aa9-081134613aa7",
        "code": "SDSX",
        "bank_name": "Satara District Central Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "9b9b05d1-3d10-46f5-9515-b4063472ad84",
        "code": "SDTC",
        "bank_name": "Shri D T Patil Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "316ed4ba-9222-4382-b844-c36aa0131f44",
        "code": "SDTX",
        "bank_name": "Sambalpur District Co-operative Central Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "19987a3d-b461-41ea-8ee8-b78c824f6097",
        "code": "SDUX",
        "bank_name": "Sri Sudha Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "e58dbaf0-0141-4c49-9189-94b5dc245d25",
        "code": "SECB",
        "bank_name": "Sree Charan Souhardha Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "3f0f2b09-ffcf-4927-bc3c-a546c87287d8",
        "code": "SEMX",
        "bank_name": "Secunderabad Mercantile Co-operative Urban Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "cd073f13-5d8e-4fbe-b90a-3f4f54a493d9",
        "code": "SENX",
        "bank_name": "Sehore Nagrik Sahakari Bank Sehore",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "2d515f3c-f8b6-445e-8153-21ef5b24f356",
        "code": "SEUX",
        "bank_name": "Sevalia Urban Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "6b96d0e1-00e5-4ab8-9a60-020d4f0594ab",
        "code": "SEWX",
        "bank_name": "Shri Mahila Sewa Sahakari Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "777b416a-85e5-4579-96f7-fdc306914359",
        "code": "SGBA",
        "bank_name": "Saurashtra Gramin Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "fa3e9519-258a-40aa-99ae-7f24b96ab867",
        "code": "SGCX",
        "bank_name": "Sangli District Central Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "81dc698d-218b-4a59-9f61-79f2cb006e1c",
        "code": "SGDX",
        "bank_name": "Sundargarh District Central Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "9e506af0-edff-4173-b7a3-cc4555097d7f",
        "code": "SGLX",
        "bank_name": "Sangli Sahakari Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "bb3ffccd-5048-4e85-9f96-cd9b3578336a",
        "code": "SGSX",
        "bank_name": "Sadguru Nagrik Sahakari Bank Maryadit",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "56588734-df58-4c82-8ca8-ef1664035946",
        "code": "SGUX",
        "bank_name": "Sadguru Gahininath Urban Co-operative Bank Akluj",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "a5bf1edd-7d18-415b-9deb-5545916b50f1",
        "code": "SHAX",
        "bank_name": "Shankar Nagari Sahakari Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "15a50990-5a99-4622-a919-a930609cbf92",
        "code": "SHBK",
        "bank_name": "Shinhan Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "40dea527-478d-41a2-b56a-86a3e03bf2c3",
        "code": "SHBX",
        "bank_name": "Shriram Urban Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "b6bc2a7d-3d77-4e9b-a2b3-8c29e88ec104",
        "code": "SHCX",
        "bank_name": "Shimla Urban Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "34037ff2-1573-4703-804b-32dd0c294a9a",
        "code": "SHEX",
        "bank_name": "Shree Samarth Sahakari Bank Nashik",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "9c01c008-2fda-4be4-b38f-410a16cfc617",
        "code": "SHGX",
        "bank_name": "Shri Ganesh Sahakari Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "5decd118-a771-457c-8305-dbddd78ac507",
        "code": "SHIX",
        "bank_name": "Shivalik Small Finance Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "af6398b4-c101-4dc1-8e3b-3b4b4ce6af23",
        "code": "SHKX",
        "bank_name": "Shikshak Sahakari Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "8e3a4dc9-edc2-44af-a1cf-85935eb2cf70",
        "code": "SHMX",
        "bank_name": "Sanghamitra Co-operative Urban Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "22a52dec-fdbc-4748-8002-620c740d5e3e",
        "code": "SHNX",
        "bank_name": "Shri Kanyaka Nagari Sahakari Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "579abbba-34c0-48d8-9121-994dc4682b4b",
        "code": "SHOX",
        "bank_name": "Sihor Mercantile Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "22d108e0-bfc7-4bdc-bdfb-80b7e46d71ec",
        "code": "SHRX",
        "bank_name": "Shree Mahesh Co-operative Bank Nashik",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "52677d38-dfcd-4c73-92cb-d648fd053ecf",
        "code": "SHSX",
        "bank_name": "Sharad Sahakari Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "bfa673a9-cfcd-418c-b3c3-a8edaf22b799",
        "code": "SHUB",
        "bank_name": "Shiggaon Urban Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "c4c628f7-4b61-451d-a27c-6ba1256a6565",
        "code": "SHUX",
        "bank_name": "Shushruti Souharda Sahakara Bank Niyamita",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "3cd5fe87-b5d4-4c9a-b467-a502f11b4c65",
        "code": "SIBL",
        "bank_name": "South Indian Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "16561e6a-8be2-4fe9-abb5-c7af585866c3",
        "code": "SIBX",
        "bank_name": "Sikar Kendriya Sahakari Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "6b92ce2c-0666-4b00-a528-f27df6f01f78",
        "code": "SICX",
        "bank_name": "Sirsa Central Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "fd9f44b4-00d8-4232-be63-1d8c6a2dcb3c",
        "code": "SIDB",
        "bank_name": "Small Industries Development Bank Of India",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "14986633-8bac-44fb-913d-c8269ccb1345",
        "code": "SIDC",
        "bank_name": "Sindhudurg District Central Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "a9ab5a5c-d63e-446e-885e-df00dbe6c978",
        "code": "SIDX",
        "bank_name": "Siddhi Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "e42215a9-063e-4e2e-9243-b5cb72fbb047",
        "code": "SIGX",
        "bank_name": "Singhbhum District Central Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "e13adae8-3fed-4694-b826-7c4a6e0402a6",
        "code": "SIHX",
        "bank_name": "Sihor Nagarik Sahakari Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "6b5dfc11-f16a-45fd-b35b-4d20b1e30c73",
        "code": "SIKX",
        "bank_name": "Sikar Urban Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "73df25f3-18a5-41e9-b029-6040da94b1d7",
        "code": "SINX",
        "bank_name": "Shihori Nagarik Sahakari Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "d49df7eb-82e5-4b8f-ba68-628325fac35f",
        "code": "SIRX",
        "bank_name": "Sircilla Co-operative Urban Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "e0fb73a6-3608-4852-8fbc-39a4555942d4",
        "code": "SISX",
        "bank_name": "Sanmati Sahakari Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "20474acc-fdc7-41c8-b26f-7b25366d1c37",
        "code": "SITX",
        "bank_name": "Sitamarhi Central Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "994d1af1-0ecd-47bd-b9ce-35022b557c2f",
        "code": "SIWX",
        "bank_name": "Siwan Central Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "6932d558-2d8a-4bf3-be4d-4b7880d4489a",
        "code": "SJGX",
        "bank_name": "Sutlej Gramin Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "c31c491e-18e5-4bf5-a951-9c38890b845c",
        "code": "SJSB",
        "bank_name": "Solapur Janata Sahakari Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "d32c0080-a6a8-4d7f-b761-cd0e6e88ab88",
        "code": "SJSX",
        "bank_name": "Solapur Janata Sahakari Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "62f71293-8f2a-4bc0-8d74-42fe719cd750",
        "code": "SKCX",
        "bank_name": "Shrikrishna Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "ac0734b6-af09-4776-a5d9-897a2538d761",
        "code": "SKKX",
        "bank_name": "Sikkim State Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "ca0af4d1-aad5-4236-b31a-59a8668643df",
        "code": "SKNB",
        "bank_name": "Shree Kadi Nagarik Sahakari Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "361a7c8e-5e19-400e-ac55-4c1130d8ac0a",
        "code": "SKNX",
        "bank_name": "Sankheda Nagarik Sahakari Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "3e1aed63-416c-4c2d-886a-86107f0e26c6",
        "code": "SKSB",
        "bank_name": "Shikshak Sahakari Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "c73a472a-2069-4306-904a-4db62136732b",
        "code": "SKUX",
        "bank_name": "S S L S A Kurundwad Urban Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "01c6caf4-3da6-426a-bf32-cd795cb5f38d",
        "code": "SLAX",
        "bank_name": "Subhadra Local Area Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "0c0912ad-bfad-4f5c-8bc0-c42634a13567",
        "code": "SLCX",
        "bank_name": "Shree Laxmi Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "5a738a7a-7f4c-4d78-87fc-21dc5c8dc252",
        "code": "SMBC",
        "bank_name": "Sumitomo Mitsui Banking Corporation",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "edd12065-f55f-4ef6-b765-274a3ac83664",
        "code": "SMBX",
        "bank_name": "Sampada Sahakari Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "c95b7833-e1a7-44fb-82b7-0ad05c1feb32",
        "code": "SMCB",
        "bank_name": "Shivalik Small Finance Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "00d0f67f-4fed-46f5-a2cd-bcda310363bc",
        "code": "SMCX",
        "bank_name": "Sangamner Merchants Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "10255589-89da-4015-a80c-1f2af232f4ca",
        "code": "SMEX",
        "bank_name": "Sumerpur Mercantile Urban Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "78dab7fb-3275-40d8-9d95-1eabe4d17195",
        "code": "SMMX",
        "bank_name": "Shree Mahalaxmi Mercantile Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "e8404ccd-df20-4ad5-87e6-582ca36f7fb8",
        "code": "SMNB",
        "bank_name": "Smriti Nagrik Sahakari Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "5d94a1a4-3edb-40fd-a2b6-c3a5360bc396",
        "code": "SMNX",
        "bank_name": "Shree Mahuva Nagrik Sahakari Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "7b1eb520-b69e-4e87-8a5a-1134191b51ea",
        "code": "SMPX",
        "bank_name": "Shankarrao Mohite Patil Sahakri Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "09c06830-35af-4f0a-9b91-f1c2ca2c7d17",
        "code": "SMSX",
        "bank_name": "Soubhagya Mahila Souhardha Sahakari Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "9c404da7-b607-4a9e-a0b6-283486e04724",
        "code": "SMTX",
        "bank_name": "Sanmitra Urban Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "011d9d14-1006-41e0-8b31-dfc13d23ef5a",
        "code": "SMUX",
        "bank_name": "Shri Mahavir Urban Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "3107593f-1649-4205-99f9-8a932903f138",
        "code": "SMVC",
        "bank_name": "Sir M Visvesvaraya Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "ad72afc8-e2e8-4d64-b069-a5b87af9f56e",
        "code": "SMWX",
        "bank_name": "Sree Subramanyeswara Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "b04f2cbb-7d65-477d-bf25-46bac3c59642",
        "code": "SNAX",
        "bank_name": "Saraspur Nagarik Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "bee37915-27a2-4abe-bad5-b3b4959527a1",
        "code": "SNBK",
        "bank_name": "Saraspur Nagrik Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "c7179739-976e-45f7-a892-50870a105019",
        "code": "SNBX",
        "bank_name": "Sarvodaya Nagrik Sahakari Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "24b08d9d-be10-4ee4-a972-dc457a8c6fc0",
        "code": "SNCX",
        "bank_name": "Sonepat Urban Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "9aa863cb-9461-4cee-a6c9-442f988d28bc",
        "code": "SNDX",
        "bank_name": "Sind Co-operative Urban Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "150acc92-47dd-416c-8464-7c2c30c57316",
        "code": "SNGX",
        "bank_name": "Sarangpur Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "80891e0e-f518-45db-be6a-2d91b4ff058f",
        "code": "SNKX",
        "bank_name": "Shramik Nagrik Sahakari Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "1e8434e3-aa80-460c-be14-2ba014ddfa61",
        "code": "SNLX",
        "bank_name": "Sarjeraodada Naik Shirala Sahakari Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "6319fbb5-92c9-4591-aba5-94c8e35ac780",
        "code": "SNPX",
        "bank_name": "Sonepat Central Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "0dcb59c3-7cca-4e94-8a7f-31eb1ca65990",
        "code": "SNSV",
        "bank_name": "Sarakari Naukarara Sahakari Bank Niyamt Vijayapura",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "bcde38b0-22f1-4636-94c8-03184b297b3c",
        "code": "SNSX",
        "bank_name": "Smriti Nagrik Sahakari Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "04415e1d-6555-41b7-ae83-aaea0d6de66c",
        "code": "SOBX",
        "bank_name": "Secunderabad Co-operative Urban Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "3282b740-6036-4929-8576-ef9a2cab923b",
        "code": "SOGE",
        "bank_name": "Societe Generale",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "999855a1-bbe5-455a-82b8-17bfb3cfcf47",
        "code": "SOLX",
        "bank_name": "Solapur District Central Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "56980a71-269c-4b35-9f03-222909b3c460",
        "code": "SONX",
        "bank_name": "Sonbhadra Nagar Sahakari Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "ce8713c1-1eaa-4695-8b3a-531509482a2e",
        "code": "SPBX",
        "bank_name": "Saptagiri Grameena Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "37844fb5-1df6-489a-9d49-0b3c4201c1ea",
        "code": "SPCB",
        "bank_name": "Surat People's Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "661797d0-0505-4cb5-8959-903e39484b4c",
        "code": "SPCX",
        "bank_name": "Shirpur Peoples Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "b6ebb4b5-d438-4a82-8963-f6f27316dca3",
        "code": "SPNX",
        "bank_name": "Shree Panchganga Nagari Sahakari Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "60cfe645-3a7a-4340-9b93-24a405b29284",
        "code": "SPSX",
        "bank_name": "Sandur Pattana Souharda Sahakari Bank Niyamitha",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "c2431284-3929-4430-bd3c-a808da1e08b6",
        "code": "SPTX",
        "bank_name": "Shripatraodada Sahakari Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "6f2c1ddd-91d1-477d-ac74-7f072b4b2aac",
        "code": "SRCB",
        "bank_name": "Saraswat Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "9bb678d9-799c-4760-966b-2128820b1fab",
        "code": "SRCX",
        "bank_name": "Shree Bharat Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "b4780d0a-cfeb-44a9-be85-0fd4f089d9ae",
        "code": "SREX",
        "bank_name": "Shree Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "cd73f5b8-8333-4d54-aa27-fb79253b30d9",
        "code": "SRGX",
        "bank_name": "Sree Narayana Guru Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "b2f6c1bd-68fa-43e9-8ffa-32b1ff282e81",
        "code": "SRHX",
        "bank_name": "Shree Dharati Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "857efa6a-8359-413f-94f6-3d5934aa6d14",
        "code": "SRSX",
        "bank_name": "Sharad Nagari Sahakari Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "5d504123-06b9-4a63-a3ac-572a55eaeed7",
        "code": "SSBL",
        "bank_name": "Satara Shakari Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "94ce3001-d32e-4551-a090-aca1b49ede80",
        "code": "SSBX",
        "bank_name": "Shivdaulat Sahakari Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "4f0cd00a-e508-4f9b-8b90-fea03318aa69",
        "code": "SSDX",
        "bank_name": "Suco Souharda Sahakari Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "551a3a20-a768-4dae-8939-5f2d946646d2",
        "code": "SSHX",
        "bank_name": "Shree Sharada Sahakari Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "6bf527b1-169f-4fef-a9e4-c7e03abc49a2",
        "code": "SSKX",
        "bank_name": "Sadhana Sahakari Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "0e284217-b1d2-4cc2-9fba-ceeee57a7cfe",
        "code": "SSLX",
        "bank_name": "Solapur Social Urban Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "2a4d5954-cbe5-48ce-a9f0-fe1a0a3fff45",
        "code": "SSNX",
        "bank_name": "Sreenidhi Souharda Sahakari Bank Niyamitha",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "cf13497d-ea70-49ca-9fc1-0fbb3b6828c3",
        "code": "SSOX",
        "bank_name": "Samarth Sahakari Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "4f4f3428-afd1-4378-bb7f-348da9903dd3",
        "code": "SSSX",
        "bank_name": "Sant Sopankaka Sahakari Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "8e530399-3aaf-4bff-86e8-6cd8ec43a8d4",
        "code": "SSWX",
        "bank_name": "Sundarlal Sawaji Urban Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "a669b539-369f-4d83-8969-0e3dd5d453ad",
        "code": "STBP",
        "bank_name": "State Bank of Patiala",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "deef784e-9d10-43fb-b4cc-8d45309bc994",
        "code": "STCB",
        "bank_name": "SBM Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "a1872467-4e83-4467-801f-1f585a8f555a",
        "code": "STCX",
        "bank_name": "State Transport Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "332a5721-385e-4be1-8f5d-721511482380",
        "code": "STDX",
        "bank_name": "Samastipur District Central Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "3d1b01a8-b705-43a3-858a-23ff2633aedd",
        "code": "STRX",
        "bank_name": "Sterling Urban Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "fa3daee4-d99d-4d41-8c0f-e496ee571379",
        "code": "SUBX",
        "bank_name": "Prathama UP Gramin Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "3cf74ec8-4d75-4317-ac34-69ea6eb2401a",
        "code": "SUCX",
        "bank_name": "Sangli Urban Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "c88c7253-2653-4cf6-aa9f-a4eaa7752877",
        "code": "SUDX",
        "bank_name": "Surendranagar District Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "2b1e2865-d809-4e40-8d28-54fab5c46c3a",
        "code": "SULX",
        "bank_name": "Sulaimani Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "d827a986-9fc8-4f2b-99b6-08db24bedb74",
        "code": "SUMX",
        "bank_name": "Surat Mercantile Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "a38aaf9c-afd4-43a6-98b6-bab1583b60fd",
        "code": "SUNB",
        "bank_name": "Surat National Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "ddf00669-4599-43af-8235-b6ecdaf2194b",
        "code": "SURX",
        "bank_name": "Siddheshwar Urban Co-operative Bank Maryadit Sillod",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "f5ec1fc7-9b8a-4ead-b5e0-f9b729cd0d1b",
        "code": "SURY",
        "bank_name": "Suryoday Small Finance Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "b4d26dec-e9cc-4b62-b63a-4273b8a56ffe",
        "code": "SUSB",
        "bank_name": "Suco Souharda Sahakari Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "b7f2ce91-c24a-4dd0-b196-5e52d6a27bac",
        "code": "SUSX",
        "bank_name": "Sirsi Urban Sahakari Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "64c2ea6b-071a-4dcf-92c3-b1291fa11aaf",
        "code": "SUTB",
        "bank_name": "Sutex Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "a90fd54b-6a64-45b4-8517-ffc2eb92ad55",
        "code": "SUVX",
        "bank_name": "Suvarnayug Sahakari Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "3e9db07a-63de-45be-a8e8-751f071c28a3",
        "code": "SVAX",
        "bank_name": "Sri Vasavamba Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "5f9b3376-3fdc-4570-b5fe-0f624d3010a7",
        "code": "SVBL",
        "bank_name": "Seva Vikas Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "f6f7ab82-abfb-44a1-80dc-e366454535b8",
        "code": "SVCB",
        "bank_name": "SVC Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "03e87fbf-adb3-4ace-8631-dddf73a43ea3",
        "code": "SVCX",
        "bank_name": "Sarvodaya Commerical Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "6bbe6d97-0f0f-4ac5-9877-f9ed9e4b76b1",
        "code": "SVGX",
        "bank_name": "Sivagangai District Central Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "ce2c93d4-72be-44b6-9607-b8654fd2a6a8",
        "code": "SVMC",
        "bank_name": "Shri Vijay Mahantesh Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "4cbf4546-d413-4d6a-ae2d-56707de16393",
        "code": "SVNX",
        "bank_name": "Shivaji Nagari Sahakari Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "3cff4168-366c-45b9-85ee-51a8226e5fc6",
        "code": "SVOX",
        "bank_name": "Sarvodaya Sahakari Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "43d25be4-d56e-4249-9f4a-2da309288391",
        "code": "SVRX",
        "bank_name": "Shree Vardhaman Sahakari Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "5f6b8768-8190-443b-8d0b-d68a8396b4c3",
        "code": "SVSH",
        "bank_name": "Shree Veershaiv Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "0aa190ab-84cf-49cb-9489-33623f76e76b",
        "code": "SVSX",
        "bank_name": "Shri Vinayak Sahakari Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "26d10acf-077f-487a-a539-4ddf96e79ba0",
        "code": "SWMX",
        "bank_name": "Sawai Madhopur Urban Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "a3c23348-9333-4bc2-a580-a0b9eca99c04",
        "code": "SWSX",
        "bank_name": "Shree Warana Sahakari Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "fa3992c5-5636-4db1-a442-c06a43a3ae91",
        "code": "SXXX",
        "bank_name": "Sri Rama Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "34c92214-759c-4b9d-abe3-48a86b6a5a3e",
        "code": "SYNB",
        "bank_name": "Syndicate Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "5a3da501-a5d8-47f6-877b-7e62e5c7320f",
        "code": "TACX",
        "bank_name": "Adinath Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "c572c5ae-1bdc-4a90-8ebe-dd3c40e815db",
        "code": "TADX",
        "bank_name": "Anantapur District Co-operative Central Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "2915d672-2182-4025-b19b-5eb0a08da846",
        "code": "TAMX",
        "bank_name": "Anand Mercantile Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "76ef840a-9a27-4dc1-b950-a8fce8b30ef2",
        "code": "TAPX",
        "bank_name": "Tapindu Urban Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "433975dd-f586-4b2a-a24a-d9f83b40c70b",
        "code": "TASX",
        "bank_name": "Annasaheb Savant Co-operative Urban Bank Mahad",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "9e58f396-c126-4202-a942-5bbfc2b6e565",
        "code": "TAUB",
        "bank_name": "Ankola Urban Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "6cfcdbd4-8450-4fea-94b9-a04c37d581d7",
        "code": "TBCX",
        "bank_name": "Bharath Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "1245b8f3-92fe-4c83-bebb-7a21554f6e43",
        "code": "TBDX",
        "bank_name": "Buldana District Central Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "cbd7cf73-bac2-43b5-91a1-d36a88b30ac8",
        "code": "TBHX",
        "bank_name": "Bhadran People's Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "07208751-fdfb-4e27-a77b-dadc98528774",
        "code": "TBMC",
        "bank_name": "Banaskantha Mercantile Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "f8ca8e5c-2712-4681-9155-d2e12675e49e",
        "code": "TBMX",
        "bank_name": "Bapunagar Mahila Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "c54d9429-8fdf-46b6-abea-748d4412aeb2",
        "code": "TBNS",
        "bank_name": "Becharaji Nagarik Sahakari Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "a41560b4-3951-4358-a0ae-0ec2b1c681ba",
        "code": "TBPX",
        "bank_name": "Botad Peoples Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "ba710351-065d-4131-aff1-ddd329ddd3aa",
        "code": "TBSB",
        "bank_name": "Thane Bharat Sahakari Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "5ba06d48-1f93-44b4-ad93-82d15fa71fc5",
        "code": "TBSX",
        "bank_name": "Bihar State Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "2013b290-db4b-41fe-bc19-6ef6d5907d9f",
        "code": "TBTX",
        "bank_name": "Baroda Traders Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "b135eb08-1f57-40e0-bf0e-0a7a1e072be0",
        "code": "TBUX",
        "bank_name": "Balusseri Co-operative Urban Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "46c92a95-1585-4d11-99f8-24556cbdc62e",
        "code": "TCBX",
        "bank_name": "Co-operative Bank of Rajkot",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "f02ead6b-89a3-4b3f-8d51-706549c0c478",
        "code": "TCCX",
        "bank_name": "Commercial Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "b00d3a31-8d63-4f37-b92d-23c4a20e954b",
        "code": "TCHX",
        "bank_name": "Town Co-operative Bank Hoskote",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "8ef8d811-a1c8-4255-a723-1ec4b26380f3",
        "code": "TCPX",
        "bank_name": "Tamilnadu Circle Postal Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "0c1c5fd0-3cca-4460-ab6b-2ee256ef7825",
        "code": "TCUB",
        "bank_name": "Trivandrum Co-operative Urban Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "28657f0d-4184-47d7-81ad-027f920d4af6",
        "code": "TCUX",
        "bank_name": "Tiruvallur Co-operative Urban Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "93d8b416-3ea2-4032-8f76-d4aef04768d5",
        "code": "TDBX",
        "bank_name": "District Co-operative Central Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "996f20cd-74e2-4cd8-b79e-bf043ffd230e",
        "code": "TDCB",
        "bank_name": "Thane District Central Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "06fbdd28-fb26-4b04-a122-a7e00dc4d71b",
        "code": "TDCX",
        "bank_name": "Thrissur District Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "927ae10d-3b59-45a7-a298-a0adf909b3f7",
        "code": "TDIX",
        "bank_name": "District Co-operative Central Bank Kakinada",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "45b94782-a092-473a-a0c7-67336bf8f81a",
        "code": "TDMX",
        "bank_name": "Dhanera Mercantile Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "a6a242c4-3f10-41a9-8202-b6ac5a92bbd1",
        "code": "TDPX",
        "bank_name": "Thodupuzha Urban Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "3694b490-02cf-48bb-9782-ef853069a701",
        "code": "TDSX",
        "bank_name": "Nizamabad District Co-operative Central Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "edb98d51-2e5f-4496-9c19-9a1f46cabaa9",
        "code": "TECX",
        "bank_name": "Eenadu Co-operative Urban Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "dc329bd8-41e4-4dcc-9478-f1448587a49e",
        "code": "TEHX",
        "bank_name": "Tehri Garhwal Zila Sahakari Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "77655cbd-db15-4574-a99d-e7cd2ce77df9",
        "code": "TEMX",
        "bank_name": "Textile Manufacturers Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "4a7b6d09-cbc7-4b09-8dee-527dacc2f65d",
        "code": "TESX",
        "bank_name": "Textile Co-operative Bank of Surat",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "10aa8f4a-ef17-4398-8cf5-9c35cc1ab7e8",
        "code": "TETX",
        "bank_name": "Textile Traders Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "5f7471e4-bcf5-4ac8-8ae7-fa5ccaf579d0",
        "code": "TFCX",
        "bank_name": "Fatehabad Central Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "7ba90473-debe-47a8-81d8-a4db6ffdf227",
        "code": "TGBX",
        "bank_name": "Tripura Gramin Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "7ca4c088-4d32-492a-bfa6-187f4883c7ad",
        "code": "TGCG",
        "bank_name": "Gokak Urban Co-operative Credit Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "c0ca2064-a877-40c8-a6fb-bec57b3c3e91",
        "code": "TGCX",
        "bank_name": "Tamluk-ghatal Central Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "2b1c9441-ce61-4836-a001-38719bd82ff9",
        "code": "TGDX",
        "bank_name": "Gondia District Central Co-operative Bank Gondia",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "16fbeb54-fccc-4709-825b-05ecd7a0f9a1",
        "code": "TGMB",
        "bank_name": "Tumkur Grain Merchant's Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "02a7ae55-8b07-4eef-9c0c-9d7fd2b82c0a",
        "code": "TGNX",
        "bank_name": "Gandhinagar Nagrik Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "1c738ac3-12a8-4340-998f-667ecd775da8",
        "code": "TGUX",
        "bank_name": "Gandhinagar Urban Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "d5ddae26-2388-42bd-8f14-3dffac5781bc",
        "code": "THCX",
        "bank_name": "Hooghly Co-operative Credit Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "129f50c7-f511-4207-8208-d0bdc7150fcb",
        "code": "THMX",
        "bank_name": "Halol Mercantile Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "fc93d861-a718-4007-9cec-ff0e91b0870f",
        "code": "THOX",
        "bank_name": "Thoothukudi District Central Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "950a48dd-1115-469c-8ed3-48325cdbf805",
        "code": "THRS",
        "bank_name": "Thrissur District Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "f1e3b219-30a0-45b2-9353-f2654eebda7c",
        "code": "THRX",
        "bank_name": "Raichur District Central Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "daaf75c9-07ca-484b-9018-bea5fdca3ecc",
        "code": "THWX",
        "bank_name": "Howrah District Central Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "0dcbc52f-d317-43b7-b1bb-8bda4d0efde4",
        "code": "TIDX",
        "bank_name": "Thiruvannamalai District Central Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "85443f49-912c-4b46-8d3c-3875edf2786c",
        "code": "TIRX",
        "bank_name": "Tirunelveli District Central Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "ef0879cc-9e93-4a15-9dd1-a8329ccb1b0f",
        "code": "TJAX",
        "bank_name": "Jaisalmer Central Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "bcb1e098-bf91-4d83-af97-84222ca1a2f1",
        "code": "TJBX",
        "bank_name": "Janata Co-operative Bank Sadalga",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "de863b85-f345-4e81-82df-8b832f6049d3",
        "code": "TJCX",
        "bank_name": "Thanjavur Central Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "0e116885-aee3-4561-9ce2-53dcf86cd197",
        "code": "TJDX",
        "bank_name": "Jalgaon District Central Co-operative Bank Jalgaon",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "63a36946-ad67-4cf8-84ea-d3375706c837",
        "code": "TJMX",
        "bank_name": "Jaynagar Mozilpur Peoples Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "ccb5ccb9-aed7-4699-a84a-c2658b308842",
        "code": "TJNX",
        "bank_name": "Jamnagar Mahila Sahakari Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "4e7ae005-595f-4fa6-8363-a8b499321eee",
        "code": "TJSB",
        "bank_name": "TJSB Sahakari Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "ae43b68e-3547-46ef-8b09-a3664ea3e8b6",
        "code": "TKAX",
        "bank_name": "Karjan Nagrik Sahakari Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "babe35d8-cdb5-43d6-8745-8ee2250204f0",
        "code": "TKCX",
        "bank_name": "Kakatiya Co-operative Urban Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "0540fd3e-10a5-411a-a51f-9dad0cfe7985",
        "code": "TKDX",
        "bank_name": "Kannur District Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "4e8a6f08-39b3-430f-a095-b3aba6f524e3",
        "code": "TKTX",
        "bank_name": "Kottakkal Co-operative Urban Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "b05c5cb3-645d-4d05-8e3a-426267fb14c4",
        "code": "TKUX",
        "bank_name": "Karan Urban Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "dccb24d9-5448-4d06-9c54-5a2dfb24964c",
        "code": "TLPX",
        "bank_name": "Lunawada Peoples Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "b0114102-4e23-4dfb-bb5f-cf5e98a8cf18",
        "code": "TMAX",
        "bank_name": "Madanapalle Co-operative Town Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "b2b35182-149c-43ec-bcc2-6bb6822ad7a4",
        "code": "TMBL",
        "bank_name": "Tamilnad Mercantile Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "37f155b9-cf77-44ec-9113-cb905bda6da4",
        "code": "TMBX",
        "bank_name": "Mangalore Catholic Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "1dc17454-dc32-4a9e-91df-13fae5d0e304",
        "code": "TMCX",
        "bank_name": "Motihari Central Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "3299dc87-f899-4410-abfe-77237af4c507",
        "code": "TMNX",
        "bank_name": "Mahanagar Co-operative Urban Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "029d8f20-087f-4f75-ada9-d8c3eeb2b359",
        "code": "TMPX",
        "bank_name": "Midnapore Peoples Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "5ed1df3e-9581-453c-a902-f686316374fe",
        "code": "TMSB",
        "bank_name": "The Malad Sahakari Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "a7834b54-f293-4e4b-a7a6-2fd8608eb97a",
        "code": "TMSC",
        "bank_name": "Mysore Silk Cloth Merchants Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "f1083edd-1527-414a-a915-35675facf94d",
        "code": "TMSX",
        "bank_name": "Modasa Nagarik Sahakari Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "58da3c42-4b39-4893-9f26-11f11a183ed2",
        "code": "TMTX",
        "bank_name": "Mangalore Co-operative Town Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "ffe56fd6-46ba-47fe-a6bc-697d19a33be4",
        "code": "TMUX",
        "bank_name": "Mahila Urban Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "01ba85cd-0021-4c20-b374-8e2b9dd65efd",
        "code": "TNBX",
        "bank_name": "Meghraj Nagarik Sahakari Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "59158bb5-fb8b-4989-bc28-81cf9c233085",
        "code": "TNCB",
        "bank_name": "Nawanagar Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "048417f4-a6d5-4188-b14d-848909240398",
        "code": "TNCX",
        "bank_name": "National Central Co-operative Bank Bettiah",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "780c2bd7-fda1-4525-bb6c-eba0dfe30e2e",
        "code": "TNDC",
        "bank_name": "Thiruvananthapuram District Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "cd675ccb-25f1-4f2f-b8b1-e8b08297c321",
        "code": "TNEX",
        "bank_name": "Nehrunagar Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "714e1e67-b5a7-4bad-ae0f-f8ed65706990",
        "code": "TNHX",
        "bank_name": "Nakodar Hindu Urban Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "9fa71dd1-d8ae-4099-85f0-485df85009bb",
        "code": "TNIX",
        "bank_name": "Tamilnadu Industrial Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "63d84df4-e3b6-49e5-9b7b-6e81955a1198",
        "code": "TNKX",
        "bank_name": "Neela Krishna Co-operative Urban Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "5d0669d7-a6cb-4b2a-98a0-7b429109d14e",
        "code": "TNMX",
        "bank_name": "Nanded Merchants Co-operative Bank Nanded",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "9d3a81ba-c482-4646-a241-2c074b6b5ed4",
        "code": "TNSC",
        "bank_name": "Tamilnadu State Apex Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "e64574b7-dc58-46e0-8af7-e9f950e49669",
        "code": "TNUX",
        "bank_name": "Nandura Urban Co-operative Bank Nandura",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "ae3e7be9-364d-4c70-a936-fc7788f41c86",
        "code": "TOCX",
        "bank_name": "Ottapalam Co-operative Urban Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "89719f9e-9b3d-4d7b-a5af-8b6327972967",
        "code": "TPCX",
        "bank_name": "Patliputra Central Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "fd9ed328-ed7e-421e-9b17-492ba95f5363",
        "code": "TPDX",
        "bank_name": "Prakasam District Co-operative Central Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "3d5e55d1-3a55-402b-bafa-ec2d1bed576a",
        "code": "TPSC",
        "bank_name": "Punjab State Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "f3cf16a6-3220-4444-a6b9-3969813db53f",
        "code": "TPSX",
        "bank_name": "Tripura State Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "afcc2164-327c-4b5d-aa1c-deec7019457e",
        "code": "TPUX",
        "bank_name": "Urban Co-operative Bank No 1758 Perinthalmanna",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "b19045f4-970d-4224-83ce-ebe2b3614ca3",
        "code": "TRAX",
        "bank_name": "Transport Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "6f558b25-5bba-4881-a000-cb6d0ba29153",
        "code": "TRDX",
        "bank_name": "Tiruchirapalli Dist. Cent Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "d6e56a15-b20a-4d07-9941-b65c0ec41cf4",
        "code": "TSAB",
        "bank_name": "Telangana State Co-operative Apex Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "47dd18db-ce41-4348-96a6-6bd4d781de22",
        "code": "TSAX",
        "bank_name": "Satana Merchants Co-operative Bank, Satana",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "2b3194d0-0125-49bb-9618-6d531686d690",
        "code": "TSBX",
        "bank_name": "Sasaram Bhabhua Central Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "2c5a94a0-3563-49dd-be62-02216676382f",
        "code": "TSCX",
        "bank_name": "Santragachi Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "549660f0-2fd9-4413-a2be-a52fc536b04f",
        "code": "TSDX",
        "bank_name": "District Co-operative Central Bank Srikakul",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "97ea3865-85fa-4f92-b5e7-ed9822943fe4",
        "code": "TSIX",
        "bank_name": "Shillong Co-operative Urban Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "81a18514-2df4-4fc2-925d-dce1e6b85059",
        "code": "TSKX",
        "bank_name": "Aska Co-operative Central Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "3bb945d5-e77b-4ffe-b913-746635b868f0",
        "code": "TSMX",
        "bank_name": "Sardargunj Mercantile Co-operative Bank Patan",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "7549b285-b64c-4f88-bc8d-ab405c21ad7e",
        "code": "TSNX",
        "bank_name": "Shoranur Co-operative Urban Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "b3b157f1-e0bf-412f-b990-2dd3e152d50a",
        "code": "TSPX",
        "bank_name": "Sathamba Peoples Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "407d4185-1c19-4d82-8715-b16b4521b59d",
        "code": "TSSB",
        "bank_name": "Satara Sahakari Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "3cfc8929-022f-40b2-ac43-c86a0362db5e",
        "code": "TSSX",
        "bank_name": "S.S.K Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "e93dbdd0-ee43-4bfb-8031-a11cba969137",
        "code": "TSUX",
        "bank_name": "Saurashtra Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "1432c2a7-3ed1-452d-b36d-fda8cadf58dc",
        "code": "TTBX",
        "bank_name": "Taliparamba Co-operative Urban Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "3670279e-259f-44f5-811b-ee1111b0b39d",
        "code": "TTCB",
        "bank_name": "Textile Traders Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "faeda4a2-c91e-4815-984c-64cfacb42420",
        "code": "TTCX",
        "bank_name": "Tarn Taran Central Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "2d185d55-fbd0-438c-9991-1914578646c2",
        "code": "TTGX",
        "bank_name": "Tasgaon Urban Co-operative Banktasgaon",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "9d4e7247-db21-430a-af4d-32d762bd1d8f",
        "code": "TTLX",
        "bank_name": "Textile Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "f95537f0-99f4-46af-b9f2-70c7cc0a6d6f",
        "code": "TTUX",
        "bank_name": "Tirur Urban Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "490dd363-4ae0-483d-a40b-3f6a6cc94591",
        "code": "TUBX",
        "bank_name": "Trichur Urban Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "7f1db17e-9325-4f76-8126-a17da88139ab",
        "code": "TUCL",
        "bank_name": "The Union Co-operative Bank Mahinagar",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "cbb23731-7488-4d2a-b652-4548a5022d23",
        "code": "TUCX",
        "bank_name": "Tirupati Urban Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "8c7ef6bc-3ca2-4c76-ae6b-96bca461fac4",
        "code": "TUDX",
        "bank_name": "Urban Co-operative Bank Dharangaon",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "535bb2fb-1220-4ffd-9046-baf43b7e0e4e",
        "code": "TUMX",
        "bank_name": "Udaipur Mahila Urban Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "d8b584eb-c196-48c9-b77c-130ebfdb07c1",
        "code": "TUNX",
        "bank_name": "Union Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "64e234ec-505e-411d-8efd-f945b6e22183",
        "code": "TUOX",
        "bank_name": "Urban Co-operative Bank Saharanpur",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "cdc9bfee-a2d8-4ea5-ad8e-cbcc299c6aca",
        "code": "TUPX",
        "bank_name": "Uttarsanda Peoples Co-operative Bank Uttarsanda",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "dfe0e169-6ddb-48a9-98b0-3a3bb83de6a1",
        "code": "TURX",
        "bank_name": "Tura Urban Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "015b308d-e8aa-454a-86ae-6abb54f7a83e",
        "code": "TVBX",
        "bank_name": "Vellala Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "7dba5f84-82db-47fe-b80f-65696a14adbe",
        "code": "TVDX",
        "bank_name": "District Co-operative Central Bank Vizianagaram",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "17283276-391b-4d72-8e6b-f65892cd51dd",
        "code": "TVPX",
        "bank_name": "Veraval Peoples Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "f66de673-f494-4c7e-bdcb-9c6d061b909c",
        "code": "TVUX",
        "bank_name": "Vita Urban Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "23c61753-f255-4682-8de3-85abd322db75",
        "code": "TYCX",
        "bank_name": "Shree Thyagaraja Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "ba5e2d8d-5439-4257-b3d2-5ca1ed48f549",
        "code": "UBBX",
        "bank_name": "Urban Co-operative Bank Basti",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "e4725b37-38ef-43f5-af13-a7f15b3f344a",
        "code": "UBGX",
        "bank_name": "Uttar Bihar Gramin Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "94d00cd9-8532-4a69-a746-3f12d06fdfb8",
        "code": "UBIN",
        "bank_name": "Union Bank of India",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "69826ccd-852f-421b-9502-2f13b9c4ba6e",
        "code": "UCBA",
        "bank_name": "UCO Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "eba5dea6-a9fe-4139-a45b-143499b8f66a",
        "code": "UCBS",
        "bank_name": "Utkal Co-operative Banking Society",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "2e75e2e7-0ec4-4921-acad-48c6fbd828aa",
        "code": "UCBX",
        "bank_name": "Urban Co-operative Bank Bareilly",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "b7a95698-7cd8-4974-bb70-c078ab8603bb",
        "code": "UCCX",
        "bank_name": "Udaipur Central Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "5c842dc0-d375-4b2f-bb27-51fa4f5328f2",
        "code": "UCDX",
        "bank_name": "Urban Co-operative Bank Dehradun",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "f5bad237-42aa-4053-bbc5-49926600cc46",
        "code": "UCUX",
        "bank_name": "Universal Co-operative Urban Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "3e379d2b-2a3d-41df-be21-b9366b36a845",
        "code": "UGBX",
        "bank_name": "Utkal Grameen Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "0bb0ecdf-0714-4180-b121-39418db5787d",
        "code": "UICX",
        "bank_name": "United India Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "7b45c258-ba36-4e31-966b-c7208c394e2c",
        "code": "UJSX",
        "bank_name": "Unjha Nagarik Sahakari Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "07e79af1-b226-490c-b368-7896ca020fd6",
        "code": "UJVN",
        "bank_name": "Ujjivan Small Finance Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "3dbe4054-13fe-4ccc-9745-c3e259ddc3a8",
        "code": "UKGX",
        "bank_name": "Uttarbanga Kshetriya Gramin Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "85c72c7a-667b-4de5-a6d6-cb7f8f0099c5",
        "code": "UMAX",
        "bank_name": "Uma Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "2c2b0e84-fe6a-4c9f-a60a-d352414dbbfe",
        "code": "UMCX",
        "bank_name": "Umreth Urban Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "d69f44c6-5183-4bea-b45a-ca9f0a56987c",
        "code": "UMSX",
        "bank_name": "Udaipur Mahila Samridhi Urban Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "d3a47ecf-7b28-4d9e-8b14-685028075fb7",
        "code": "UMUX",
        "bank_name": "Umiya Urban Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "c71f0a26-6c83-44ef-a84d-250a59e9182c",
        "code": "UNAX",
        "bank_name": "Una Peoples Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "f779367d-b114-4d7b-8b44-1d0ff64cf8fc",
        "code": "UNIX",
        "bank_name": "United Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "3a056900-86fd-48b4-802d-8bb6124a489d",
        "code": "UNMX",
        "bank_name": "United Mercantile Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "f978ea56-a66b-487c-9c73-a8b07d12cd89",
        "code": "UNSX",
        "bank_name": "Unava Nagrik Sahakari Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "e011b3d7-73c6-4dca-8c2c-c6221b283833",
        "code": "UOVB",
        "bank_name": "United Overseas Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "3f67cfb0-a094-455c-9453-5545f77e3023",
        "code": "UPCB",
        "bank_name": "Uttar Pradesh Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "bf7f3b8e-fb95-45ca-a4c1-0b7839825c4c",
        "code": "UPCX",
        "bank_name": "Uttar Pradesh Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "0cc4172f-47a3-487b-84c1-c2d04f8333da",
        "code": "UPNX",
        "bank_name": "United Puri Nimapara Central Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "6f038059-3824-4cce-b92f-2b6751be9e3a",
        "code": "URBN",
        "bank_name": "Urban Co-operative Bank Perinthalmanna",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "bb4c3efb-a423-44fe-85d5-36fe11d4a74d",
        "code": "URCX",
        "bank_name": "Urban Co-operative Bank Siddharthnagar",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "fc4f14a8-6b61-428c-a1c0-d6f9d5bfef0e",
        "code": "URDX",
        "bank_name": "Urban Co-operative Bank Budaun",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "0e11fde7-3610-4ff2-bc75-cb6f31393cbb",
        "code": "URMX",
        "bank_name": "Urban Co-operative Bank Mainpuri",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "32820666-df6b-4d89-b417-2565c9aa957c",
        "code": "UROX",
        "bank_name": "Urban Co-operative Bank Rourkela",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "a1ef54a5-d436-4927-9e02-2a13ac05662c",
        "code": "USFB",
        "bank_name": "Ujjivan Small Finance Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "7ef2ed21-25e5-4353-a92f-0733ccb4ba37",
        "code": "USNX",
        "bank_name": "Udham Singh Nagar District Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "b2c23dfc-c904-45cc-bb84-fa1bfec22fdc",
        "code": "UTBI",
        "bank_name": "United Bank of India",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "0c4fe2d8-df92-4540-b28d-505dba75593f",
        "code": "UTBX",
        "bank_name": "Uttarpara Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "2c030f4e-bd98-4b43-89d8-3132da7488c1",
        "code": "UTCX",
        "bank_name": "Uttrakhand Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "ad2138e1-e56b-4f81-a0cd-a2e4f226c32b",
        "code": "UTGX",
        "bank_name": "Uttarakhand Gramin Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "e812bccb-5013-4ac4-99e2-cbcc44f8b2ae",
        "code": "UTIB",
        "bank_name": "Axis Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "8be39bb8-85f8-47cc-a374-b59d8f870a5e",
        "code": "UTKS",
        "bank_name": "Utkarsh Small Finance Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "2d8c53d5-8bfe-472e-90f5-2cc80fbc2500",
        "code": "UTKX",
        "bank_name": "Uttarakhand State Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "1ee01351-3788-4e12-8bf6-c176095e555c",
        "code": "UTZX",
        "bank_name": "Uttarkashi Zila Sahakari Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "18f65ebc-ff12-4069-822b-4e2808f4df06",
        "code": "UUCB",
        "bank_name": "Udaipur Urban Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "e3f756ed-1bc9-481a-b2c0-5ef66f76255c",
        "code": "UUCX",
        "bank_name": "Udaipur Urban Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "cbf82a3f-4072-4eee-9de4-2d45c1ea55cf",
        "code": "UXXX",
        "bank_name": "Udupi Co-operative Town Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "ec118dbf-9c42-4a87-8ce9-6e56ead91a0b",
        "code": "VADX",
        "bank_name": "Valsad District Central Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "9723df17-8884-4ffc-91c2-38ebcd985fde",
        "code": "VAIX",
        "bank_name": "Vaishya Sahakari Bank Mumbai",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "04e19e56-7259-44e4-b911-689a6d21937a",
        "code": "VANX",
        "bank_name": "Vaishya Nagari Sahakari Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "27da1219-cb8f-45d4-a7d7-c06749f9d19d",
        "code": "VARA",
        "bank_name": "Varachha Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "31457720-91c5-4788-96e6-3714486bc1b6",
        "code": "VASJ",
        "bank_name": "Vasai Janata Sahakari Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "c9145bfb-d9b6-4ce7-af02-78e510133d0d",
        "code": "VASX",
        "bank_name": "Vyaparik Audhyogik Sahakari Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "ca1d40aa-b568-49c2-b79d-7090dd652483",
        "code": "VAUX",
        "bank_name": "Valmiki Urban Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "8bdd6846-4bd9-463d-af43-4cae39f57447",
        "code": "VCAX",
        "bank_name": "Vaish Co-operative Adarsh Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "3cbe93a0-b334-4689-95ec-f748cde0c3ca",
        "code": "VCBX",
        "bank_name": "Vishwas Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "43c0e4e4-5a4f-4fe0-922f-e2d6099afc5a",
        "code": "VCCX",
        "bank_name": "Shri Veershaiv Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "3bf4b1cb-3841-467a-a672-ae57f3a60e28",
        "code": "VCNB",
        "bank_name": "Vaish Co-operative New Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "a8f46346-f197-4a4b-aa7b-fc78bcffae41",
        "code": "VCOB",
        "bank_name": "The Vijay Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "adfe71ab-8413-4fda-a0e5-5441fc7f52a4",
        "code": "VCOX",
        "bank_name": "Vita Merchants Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "e64cd036-aa72-4939-9860-34901bdd8a29",
        "code": "VDCX",
        "bank_name": "Villupuram District Central Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "203c6717-da12-4719-9b93-16e1a293a2cc",
        "code": "VDYX",
        "bank_name": "Vidyanand Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "c9eb9f30-0885-4a87-9e89-e78613f07f20",
        "code": "VEDX",
        "bank_name": "Vellore District Central Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "38b7a039-6138-49bf-9b9e-58e1d63af751",
        "code": "VERX",
        "bank_name": "Veraval Mercantile Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "353c0dab-c05b-4f28-b9e3-d2881b338764",
        "code": "VGBX",
        "bank_name": "Jharkhand Rajya Gramin Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "31f1f2ea-294d-403a-a155-1dedde28e832",
        "code": "VHDX",
        "bank_name": "Vaishali District Central Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "5c24f8f2-4d15-42b6-9f99-96ffe1e33418",
        "code": "VICX",
        "bank_name": "Vijay Commercial Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "5efbd681-db87-41be-8328-dd8251f4ff53",
        "code": "VIDX",
        "bank_name": "Vidyasagar Central Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "c3196278-eb67-4343-9207-adf76a094b9d",
        "code": "VIJB",
        "bank_name": "Vijaya Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "458cb640-a718-4771-8c18-3952617970b4",
        "code": "VIJX",
        "bank_name": "Vijay Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "85355056-d0ac-4119-af67-46c6065ff5b0",
        "code": "VIKX",
        "bank_name": "Vikramaditya Nagrik Sahakari Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "1b2cb7f4-38a2-4ab0-9ad2-ec51a3c16969",
        "code": "VIMX",
        "bank_name": "Viramgam Mercantile Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "96eee75e-2d67-40e3-bee7-170507d3bf76",
        "code": "VIRX",
        "bank_name": "Virudhunagar District Central Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "808b022a-f2fc-4a49-ae19-73dc41614d20",
        "code": "VISX",
        "bank_name": "Visakhapatnam Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "81c46e9f-5824-4770-9db4-dd2f12f63894",
        "code": "VJSX",
        "bank_name": "Vasai Janata Sahakari Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "41c9efce-46c0-4fa7-8952-453b0ded8d55",
        "code": "VKCX",
        "bank_name": "Vima Kamgar Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "dabb3370-b3db-4be0-87a5-35eb79d85759",
        "code": "VKSX",
        "bank_name": "Vikas Sahakari Bank Solapur",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "02767f7e-5d8a-4450-a348-e47a86d56d53",
        "code": "VMCX",
        "bank_name": "Vardhaman (mahila) Co-operative Urban Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "bb45b274-2dec-4e18-8d55-c4985fc21eab",
        "code": "VMMX",
        "bank_name": "Vaijapur Merchants Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "f0bf70cb-679d-4328-96cb-e2415fa1dbfb",
        "code": "VMUX",
        "bank_name": "Vidarbha Merchants Urban Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "8def9215-05ed-4b49-a328-dea40bd102ab",
        "code": "VNSX",
        "bank_name": "Vivekanand Nagrik Sahakari Bank Mydt",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "8d0581f1-2831-476c-9eee-6f8dcb680292",
        "code": "VRDX",
        "bank_name": "Vardhaman Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "2c8dd543-2e31-4eaf-9ab0-fe5d8c5c0353",
        "code": "VSBL",
        "bank_name": "Vishweshwar Sahakari Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "ee7e4408-dbba-495e-9775-2d96208aa7e7",
        "code": "VSBX",
        "bank_name": "Vidya Sahakari Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "954b7460-8b56-4c66-bc3f-eae71e29ac38",
        "code": "VSCX",
        "bank_name": "Vikas Souharda Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "a7bde3b2-965c-4465-a9dc-4efd05cadbad",
        "code": "VSSX",
        "bank_name": "Veerashaiva Sahakari Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "34c90bd9-f01b-482d-98ad-76c83357e4a8",
        "code": "VSVX",
        "bank_name": "Vaishali Shahari Vikas Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "d9e41c96-5033-4dc8-a750-c05447603ca8",
        "code": "VUCX",
        "bank_name": "Vaidyanath Urban Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "a3a7d532-b33b-443a-9400-4b4543cb6215",
        "code": "VVCX",
        "bank_name": "Vallabh Vidyanagar Commercial Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "2dc67aba-084c-4399-8d48-a92d611ef9f0",
        "code": "VVSB",
        "bank_name": "Vasai Vikas Sahakari Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "a02286f5-ede5-4af4-8d2b-73e7237c38b2",
        "code": "VYAX",
        "bank_name": "Vyavsayak Sahakari Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "09a8d131-dce6-406c-9efd-d3982e2a28d9",
        "code": "VYPX",
        "bank_name": "Vyapari Sahakari Bank Maryadit Solapur",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "093ac32e-aebf-41ff-a65b-3fc95c191523",
        "code": "VYSA",
        "bank_name": "ING Vysya Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "65cb09fc-8224-40e2-8760-b87589719b85",
        "code": "WACX",
        "bank_name": "Waghodia Urban Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "5d985794-46ed-4034-a9aa-ded4bb049763",
        "code": "WAIX",
        "bank_name": "Wai Urban Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "976ee8f8-2829-44e0-98e0-3e5e15211f35",
        "code": "WARX",
        "bank_name": "Warangal District Co-operative Central Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "053e5ce0-37fa-469c-8c3e-bdd3e9a4b146",
        "code": "WAUX",
        "bank_name": "Wardhaman Urban Co-operative Bank Nagpur",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "79294fbe-dc81-49f6-a3c4-6bcfdf126081",
        "code": "WBSC",
        "bank_name": "West Bengal State Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "f5f2c1fa-9864-42b2-8a1a-741e81f1201e",
        "code": "WCBX",
        "bank_name": "Women's Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "bddc4bcb-e020-40bb-b92f-bde754b26f3c",
        "code": "WDCX",
        "bank_name": "Wayanad District Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "d53710df-fc1a-49ab-936c-ce97cc7441fb",
        "code": "WKGX",
        "bank_name": "Vidharbha Kokan Gramin Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "60667f1b-24a9-4c8e-999d-342c4976c476",
        "code": "WNBX",
        "bank_name": "Wana Nagirik Sahakari Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "7da93d17-2fe4-433c-b62f-df921199173b",
        "code": "WPAC",
        "bank_name": "Westpac Banking Corporation",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "c4d8d807-accd-478b-bd14-dd3a7c229506",
        "code": "WRCX",
        "bank_name": "Warangal Urban Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "ed6d1604-23ce-421e-94d1-70ec7c8bb975",
        "code": "WUCX",
        "bank_name": "Washim Urban Co-operative Bank.",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "00aab899-6343-4b46-b76b-0387c7c2f31e",
        "code": "WZUX",
        "bank_name": "Wardha Zilla Parishad Emp Urban Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "78f10559-ec7f-4851-9c89-349867a8b719",
        "code": "XJKG",
        "bank_name": "J&K Grameen Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "6c10f337-470c-43bc-8708-7e7df335b348",
        "code": "YADX",
        "bank_name": "Yavatmal District Central Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "f447067f-2994-4b7f-8614-83893739fce9",
        "code": "YAVX",
        "bank_name": "Yavatmal Urban Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "e1ba4e28-afe6-44e2-a22b-4a9b2d5f1120",
        "code": "YCBX",
        "bank_name": "Yashwant Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "30da2eb6-5d39-4dca-982a-54e591a3106b",
        "code": "YDCX",
        "bank_name": "Youth Development Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "0f6ce84a-6ca5-4e06-bd17-e04e3908e276",
        "code": "YESB",
        "bank_name": "Yes Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "667575ae-3c34-4eb9-b220-22d614ac5fcf",
        "code": "YLNX",
        "bank_name": "Yadagiri Lakshmi Narsimha Swamy Co-operative Urban Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "924776e3-6764-4b72-ad70-59a62d70564b",
        "code": "YMSX",
        "bank_name": "Yavatmal Mahila Sahakari Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "a8115d23-53c2-4c7c-9003-e77c95376ce6",
        "code": "YNCX",
        "bank_name": "Yamuna Nagar Central Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "1dd15d45-bebe-4fd0-9403-9bafe8721152",
        "code": "YNSX",
        "bank_name": "Yeshwant Nagari Sahakari Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "5ffde8c0-9c7b-4e99-be98-3938984d8915",
        "code": "ZBBX",
        "bank_name": "Zila Sahakari Bank Bulandshahar",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "7461e221-9536-416a-999d-25e05a3acb42",
        "code": "ZBSX",
        "bank_name": "Zila Sahakari Bank Mathura",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "ed3f6700-b345-4b35-949e-d9c74c90f547",
        "code": "ZCBL",
        "bank_name": "Zoroastrian Co-operative Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "2aa50a64-4df5-444b-b5ec-b43a9229af4c",
        "code": "ZIBX",
        "bank_name": "Zila Sahakari Bank Bareilly",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "eeb9fe55-80d6-4541-be11-fe86d0cf7cf8",
        "code": "ZILX",
        "bank_name": "Zila Sahakari Bank Unnao",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "136fdef8-e5fd-4125-a393-668c5ab31ecc",
        "code": "ZIMX",
        "bank_name": "Zila Sahakari Bank Mirzapur",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "adb63b5d-8768-480f-8c51-8019b1a6cac5",
        "code": "ZISX",
        "bank_name": "Zila Sahakari Bank Lucknow",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "343a19d7-3a9e-4a2a-ba31-85039acae598",
        "code": "ZLLX",
        "bank_name": "Zila Sahakari Bank Lalitpur",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "b9569105-3fec-48d5-a736-77db7e6a90b4",
        "code": "ZMMX",
        "bank_name": "Zila Sahakari Bank Moradabad",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "f4164fa2-61b6-4284-a3a9-255a50e5a712",
        "code": "ZRNB",
        "bank_name": "Rani Channamma Mahila Sahakari Bank",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "a5cade84-5322-4337-81b9-cf9ceaefbdfc",
        "code": "ZSAX",
        "bank_name": "Zila Sahakari Bank Mau",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "15675391-572d-45b9-8819-e4ccddcaaed5",
        "code": "ZSBG",
        "bank_name": "Zila Sahakari Bank Gorakhpur",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "df324e10-d3cf-40f0-bc78-595ac951af17",
        "code": "ZSBL",
        "bank_name": "Zila Sahakari Bank Ghaziabad",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "db922697-dc10-4485-8213-fc9eb7598ba2",
        "code": "ZSBX",
        "bank_name": "Zila Sahakari Bank Bijnor",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "d4d43588-38df-40d2-a9d0-a09d29cf6bb2",
        "code": "ZSGX",
        "bank_name": "Zila Sahakari Bank Garhwal Kotdwar",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "d41d81c8-0e97-44f3-a09d-79fd874813c6",
        "code": "ZSHX",
        "bank_name": "Zila Sahakari Bank Haridwar",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "26db78c5-408c-466d-9e4c-eef42341685f",
        "code": "ZSJX",
        "bank_name": "Zila Sahakari Bank Jhansi",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "04e40be4-39b1-436c-b90d-061993ccfa3d",
        "code": "ZSKX",
        "bank_name": "Zila Sahakari Bank Kanpur",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "69cda90e-8f59-42ab-be2f-7bd448bb387b",
        "code": "ZSLX",
        "bank_name": "Zila Sahakari Bank Lakhimpur Kheri",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "e903bf81-e4b2-4066-811e-2c5446e9aa56",
        "code": "ZSMX",
        "bank_name": "Zila Sahakari Bank Meerut",
        "createdAt": new Date(),
        "updatedAt": new Date()
      }
    ]

    for (const item of data) {
      const exists = await queryInterface.rawSelect(
        tableName,
        {
          where: { id: item.id }
        },
        ['id']
      );

      if (!exists) {
        await queryInterface.bulkInsert(tableName, [item], {});
      }
    }
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('BankDetail', null, {});
  }
};

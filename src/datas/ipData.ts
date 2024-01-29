import { ISwitchIp } from "../models/models";

// export const ipData:ISwitchIp[] = [
//     {
//         "id": "f6ff26c7-201a-4c35-a8d9-39330fcfefd8",
//         "ip_address": "172.16.60.112",
//         "area": {
//             "name": "Xirdalan-1",
//             "prefix": "60"
//         }
//     },z
//     {
//         "id": "63cb9fb0-0343-4621-bf47-4682c7a17853",
//         "ip_address": "172.16.60.241",
//         "area": {
//             "name": "Xirdalan-1",
//             "prefix": "60"
//         }
//     },
//     {
//         "id": "966f02c5-2e23-4925-b151-a0f1714b8c9d",
//         "ip_address": "172.16.94.2",
//         "area": {
//             "name": "Xetai - (Natiq Aliyev)",
//             "prefix": "94"
//         }
//     },
//     {
//         "id": "255ea90e-1be6-49a5-8317-7ed9d4987b08",
//         "ip_address": "172.16.90.34",
//         "area": {
//             "name": "Yeni Baki",
//             "prefix": "90"
//         }
//     },
//     {
//         "id": "037b9035-8525-45d0-ade3-24f178fd982e",
//         "ip_address": "172.16.61.10",
//         "area": {
//             "name": "Xirdalan-2",
//             "prefix": "60"
//         }
//     },
//     {
//         "id": "0e387d3a-e29b-4a2f-85a2-4b24f049d587",
//         "ip_address": "172.16.80.17",
//         "area": {
//             "name": "Qara_Qarayev",
//             "prefix": "80"
//         }
//     },
//     {
//         "id": "8730d18c-e1ef-4cf5-bb84-651e52cbcfa5",
//         "ip_address": "172.16.80.9",
//         "area": {
//             "name": "Qara_Qarayev",
//             "prefix": "80"
//         }
//     },
//     {
//         "id": "7d5c51a6-0fca-439b-8be6-0a8ca38f59de",
//         "ip_address": "172.16.80.183",
//         "area": {
//             "name": "Qara_Qarayev",
//             "prefix": "80"
//         }
//     },
//     {
//         "id": "591699ed-d14a-4a99-8ee4-95e67f562ae7",
//         "ip_address": "172.16.90.30",
//         "area": {
//             "name": "Yeni Baki",
//             "prefix": "90"
//         }
//     },
//     {
//         "id": "bdfb84d1-8ad6-440f-822d-4578e9d866ec",
//         "ip_address": "172.16.31.8",
//         "area": {
//             "name": "Bileceri",
//             "prefix": "31"
//         }
//     },
//     {
//         "id": "13be7b8d-14d3-4f07-8b05-d6e794800543",
//         "ip_address": "172.16.76.7",
//         "area": {
//             "name": "Jasmin",
//             "prefix": "70"
//         }
//     },
//     {
//         "id": "60a78a4a-147b-4d82-a871-13a56d21f70e",
//         "ip_address": "172.16.76.6",
//         "area": {
//             "name": "Jasmin",
//             "prefix": "70"
//         }
//     },
//     {
//         "id": "babe15d8-a2fb-4a31-9cdd-d7bf24d60bb6",
//         "ip_address": "172.16.31.105",
//         "area": {
//             "name": "Bileceri",
//             "prefix": "31"
//         }
//     },
//     {
//         "id": "c7663e0c-5cde-4dc4-9262-fecae7c06041",
//         "ip_address": "172.16.73.1",
//         "area": {
//             "name": "Insaatcilar",
//             "prefix": "73"
//         }
//     },
//     {
//         "id": "f18ef322-7e12-4cd1-bd65-9369c8dfced2",
//         "ip_address": "172.16.78.6",
//         "area": {
//             "name": "Saray_Jasmin",
//             "prefix": "78"
//         }
//     },
//     {
//         "id": "15339038-b448-4018-ba2b-3bb753fde901",
//         "ip_address": "172.16.90.62",
//         "area": {
//             "name": "Yeni Baki",
//             "prefix": "90"
//         }
//     },
//     {
//         "id": "3db96377-8f0b-496a-9729-9296eb0d0ca6",
//         "ip_address": "172.16.80.5",
//         "area": {
//             "name": "Qara_Qarayev",
//             "prefix": "80"
//         }
//     },
//     {
//         "id": "d36c9802-a7cd-4b78-b058-188647efffef",
//         "ip_address": "172.16.99.186",
//         "area": {
//             "name": "Yeni-Guneshli",
//             "prefix": "99"
//         }
//     },
//     {
//         "id": "cf189067-7e45-4dd3-992b-6d6c28c2faf5",
//         "ip_address": "172.16.97.3",
//         "area": {
//             "name": "Elnet MTK_(M.Hadi)",
//             "prefix": "97"
//         }
//     },
//     {
//         "id": "40cebb25-7a02-4c9d-a06e-06614e3b0119",
//         "ip_address": "172.16.60.238",
//         "area": {
//             "name": "Telecom_Invest",
//             "prefix": "20"
//         }
//     },
//     {
//         "id": "13a9a484-b86b-48f6-855e-d9a2bebb009c",
//         "ip_address": "172.16.60.197",
//         "area": {
//             "name": "Xirdalan-1",
//             "prefix": "60"
//         }
//     },
//     {
//         "id": "fa980ebc-a50f-4a6b-b583-db15bf11c9ba",
//         "ip_address": "172.16.90.58",
//         "area": {
//             "name": "Yeni Baki",
//             "prefix": "90"
//         }
//     },
//     {
//         "id": "cadc41b2-a9fe-4e11-8eaa-aa7fed9e719b",
//         "ip_address": "172.16.90.61",
//         "area": {
//             "name": "Yeni Baki",
//             "prefix": "90"
//         }
//     },
//     {
//         "id": "3604d327-f22e-45c0-bf9d-5f6ec9690a89",
//         "ip_address": "172.16.80.24",
//         "area": {
//             "name": "Qara_Qarayev",
//             "prefix": "80"
//         }
//     },
//     {
//         "id": "417096f2-3141-4722-b9e9-9ff34420bc7c",
//         "ip_address": "172.16.80.20",
//         "area": {
//             "name": "Qara_Qarayev",
//             "prefix": "80"
//         }
//     },
//     {
//         "id": "bb15a8ca-bb8d-4407-8d6c-e5f6799d5476",
//         "ip_address": "172.16.78.5",
//         "area": {
//             "name": "Saray_Jasmin",
//             "prefix": "78"
//         }
//     },
//     {
//         "id": "ee1a1feb-9dc5-4bb9-ae71-401082591bb8",
//         "ip_address": "172.16.70.59",
//         "area": {
//             "name": "Elchin_Eziz (Talibli)",
//             "prefix": "70"
//         }
//     },
//     {
//         "id": "d2b539bb-f990-4c54-bf1b-4b0abc602fb5",
//         "ip_address": "172.16.90.181",
//         "area": {
//             "name": "Yeni Baki",
//             "prefix": "90"
//         }
//     },
//     {
//         "id": "3e0af024-3f88-4968-8605-4ebf6d4d0a25",
//         "ip_address": "172.16.90.183",
//         "area": {
//             "name": "Yeni Baki",
//             "prefix": "90"
//         }
//     },
//     {
//         "id": "02583acb-d8c1-4141-8a44-57675c49b8e5",
//         "ip_address": "172.16.90.76",
//         "area": {
//             "name": "Yeni Baki",
//             "prefix": "90"
//         }
//     },
//     {
//         "id": "e7c216fc-8a54-42b4-aa2f-bfd2fc3232b6",
//         "ip_address": "172.16.90.95",
//         "area": {
//             "name": "Yeni Baki",
//             "prefix": "90"
//         }
//     },
//     {
//         "id": "0ac3530b-2d14-46e4-adf3-bf9423be3814",
//         "ip_address": "172.16.90.150",
//         "area": {
//             "name": "Yeni Baki",
//             "prefix": "90"
//         }
//     },
//     {
//         "id": "35e083c5-d802-44f8-8081-893a0c74ec77",
//         "ip_address": "172.16.90.157",
//         "area": {
//             "name": "Yeni Baki",
//             "prefix": "90"
//         }
//     },
//     {
//         "id": "ffd1b9b8-9858-4680-b6c2-204fa838005e",
//         "ip_address": "172.16.90.97",
//         "area": {
//             "name": "Yeni Baki",
//             "prefix": "90"
//         }
//     },
//     {
//         "id": "ed84b764-fe0e-4121-ac90-06e1b612399e",
//         "ip_address": "172.16.90.83",
//         "area": {
//             "name": "Yeni Baki",
//             "prefix": "90"
//         }
//     },
//     {
//         "id": "67254601-a7db-4613-9219-84ffbc494d77",
//         "ip_address": "172.16.90.156",
//         "area": {
//             "name": "Yeni Baki",
//             "prefix": "90"
//         }
//     },
//     {
//         "id": "b657d155-2440-49f3-afef-6e9b566de9cc",
//         "ip_address": "172.16.90.75",
//         "area": {
//             "name": "Yeni Baki",
//             "prefix": "90"
//         }
//     },
//     {
//         "id": "4b64bab4-a5fb-475c-ad6b-c87f0fbdaf2f",
//         "ip_address": "172.16.90.69",
//         "area": {
//             "name": "Yeni Baki",
//             "prefix": "90"
//         }
//     },
//     {
//         "id": "583eaa2a-fb30-455c-b0fb-7533f557ed0a",
//         "ip_address": "172.16.90.151",
//         "area": {
//             "name": "Yeni Baki",
//             "prefix": "90"
//         }
//     },
//     {
//         "id": "e7fe2e99-dfe8-4f6c-847a-552476436a75",
//         "ip_address": "172.16.90.159",
//         "area": {
//             "name": "Yeni Baki",
//             "prefix": "90"
//         }
//     },
//     {
//         "id": "9e984e23-61e8-4d4b-8afc-cea0a7d09e66",
//         "ip_address": "172.16.90.67",
//         "area": {
//             "name": "Yeni Baki",
//             "prefix": "90"
//         }
//     },
//     {
//         "id": "ad62e9e3-6d05-46be-9e38-64cbc4c0d6bf",
//         "ip_address": "172.16.90.78",
//         "area": {
//             "name": "Yeni Baki",
//             "prefix": "90"
//         }
//     },
//     {
//         "id": "7d25975b-2a4a-4b3b-b7a4-4f29ae9ebb99",
//         "ip_address": "172.16.90.63",
//         "area": {
//             "name": "Yeni Baki",
//             "prefix": "90"
//         }
//     },
//     {
//         "id": "ab9bfba9-0b5b-46ba-82a7-141756187bd7",
//         "ip_address": "172.16.90.180",
//         "area": {
//             "name": "Yeni Baki",
//             "prefix": "90"
//         }
//     },
//     {
//         "id": "67dff2cb-d56e-4237-a252-8c1852b3f0d7",
//         "ip_address": "172.16.90.74",
//         "area": {
//             "name": "Yeni Baki",
//             "prefix": "90"
//         }
//     },
//     {
//         "id": "80970d0f-7956-46da-9053-ca445f463651",
//         "ip_address": "172.16.90.70",
//         "area": {
//             "name": "Yeni Baki",
//             "prefix": "90"
//         }
//     },
//     {
//         "id": "6739f67d-fdb6-48ce-af89-f34928532166",
//         "ip_address": "172.16.90.71",
//         "area": {
//             "name": "Yeni Baki",
//             "prefix": "90"
//         }
//     },
//     {
//         "id": "12496991-46d8-4c0c-a0d1-0b2d2e3627a3",
//         "ip_address": "172.16.90.60",
//         "area": {
//             "name": "Yeni Baki",
//             "prefix": "90"
//         }
//     },
//     {
//         "id": "44170094-47dd-4f4e-8328-b78746d9ddd8",
//         "ip_address": "172.16.90.64",
//         "area": {
//             "name": "Yeni Baki",
//             "prefix": "90"
//         }
//     },
//     {
//         "id": "26a02fe6-4085-48a7-988f-fcc49b35fb0e",
//         "ip_address": "172.16.90.21",
//         "area": {
//             "name": "Yeni Baki",
//             "prefix": "90"
//         }
//     },
//     {
//         "id": "86407def-ee7e-497d-97a3-33f6bf1a7562",
//         "ip_address": "172.16.90.65",
//         "area": {
//             "name": "Yeni Baki",
//             "prefix": "90"
//         }
//     },
//     {
//         "id": "cbd145cb-57b2-42b0-829d-a00170f76b68",
//         "ip_address": "172.16.70.11",
//         "area": {
//             "name": "Elchin_Eziz (Talibli)",
//             "prefix": "70"
//         }
//     },
//     {
//         "id": "0eafc57e-8368-497e-8e4c-9eabc4fa664f",
//         "ip_address": "172.16.80.3",
//         "area": {
//             "name": "Qara_Qarayev",
//             "prefix": "80"
//         }
//     },
//     {
//         "id": "b3e6b8d2-77c4-4937-b111-105e4131d7bc",
//         "ip_address": "172.16.80.207",
//         "area": {
//             "name": "Qara_Qarayev",
//             "prefix": "80"
//         }
//     },
//     {
//         "id": "3791bb94-dfb0-4f2d-af87-56ad5dbd0624",
//         "ip_address": "172.16.90.242",
//         "area": {
//             "name": "Yeni Baki",
//             "prefix": "90"
//         }
//     },
//     {
//         "id": "4f66f645-5bca-449f-a1b0-cb58729a2235",
//         "ip_address": "172.16.80.65",
//         "area": {
//             "name": "Qara_Qarayev",
//             "prefix": "80"
//         }
//     },
//     {
//         "id": "9a4f2462-e9ea-4dfd-a1d6-dfbad27bb2ab",
//         "ip_address": "172.16.80.11",
//         "area": {
//             "name": "Qara_Qarayev",
//             "prefix": "80"
//         }
//     },
//     {
//         "id": "eea9ea59-8d14-474f-bb65-27e379af66a3",
//         "ip_address": "172.16.80.96",
//         "area": {
//             "name": "Qara_Qarayev",
//             "prefix": "80"
//         }
//     },
//     {
//         "id": "19b2a758-184a-4340-b3f9-ba807f7e68fc",
//         "ip_address": "172.16.90.80",
//         "area": {
//             "name": "Yeni Baki",
//             "prefix": "90"
//         }
//     },
//     {
//         "id": "308026f4-e45a-42b8-a9a5-0c90d679c40c",
//         "ip_address": "172.16.90.247",
//         "area": {
//             "name": "Yeni Baki",
//             "prefix": "90"
//         }
//     },
//     {
//         "id": "98e6a10e-25bc-4b55-96a0-ad702513d9b9",
//         "ip_address": "172.16.55.5",
//         "area": {
//             "name": "Movsum Senani",
//             "prefix": "55"
//         }
//     },
//     {
//         "id": "3f29763a-aa3d-43dd-98ce-8bf35f7827d1",
//         "ip_address": "172.16.80.14",
//         "area": {
//             "name": "Qara_Qarayev",
//             "prefix": "80"
//         }
//     },
//     {
//         "id": "eeb8c93c-dca5-4efd-b4f0-87ddda155913",
//         "ip_address": "172.16.90.217",
//         "area": {
//             "name": "Yeni Baki",
//             "prefix": "90"
//         }
//     },
//     {
//         "id": "5c9160d4-05cc-419d-889e-8bba01d9dbee",
//         "ip_address": "172.16.60.26",
//         "area": {
//             "name": "Xirdalan-1",
//             "prefix": "60"
//         }
//     },
//     {
//         "id": "0db33898-fc8a-43fb-ad32-e9f19bdd1696",
//         "ip_address": "172.16.55.1",
//         "area": {
//             "name": "Movsum Senani",
//             "prefix": "55"
//         }
//     },
//     {
//         "id": "7a07b38b-4555-49a4-b0ca-a442b80ecf5b",
//         "ip_address": "172.16.55.4",
//         "area": {
//             "name": "Movsum Senani",
//             "prefix": "55"
//         }
//     },
//     {
//         "id": "bea939ac-26ba-469b-a005-384d06f62d75",
//         "ip_address": "172.16.80.7",
//         "area": {
//             "name": "Qara_Qarayev",
//             "prefix": "80"
//         }
//     },
//     {
//         "id": "83b922f1-20f2-4385-b206-a271572371a5",
//         "ip_address": "172.16.90.82",
//         "area": {
//             "name": "Yeni Baki",
//             "prefix": "90"
//         }
//     },
//     {
//         "id": "3819d585-1a62-4f7b-bb02-1e7306fd6cad",
//         "ip_address": "172.16.80.18",
//         "area": {
//             "name": "Qara_Qarayev",
//             "prefix": "80"
//         }
//     },
//     {
//         "id": "1d4ed19e-a722-459e-9d85-2f1bd9e0ad28",
//         "ip_address": "172.16.90.224",
//         "area": {
//             "name": "Yeni Baki",
//             "prefix": "90"
//         }
//     },
//     {
//         "id": "3ba31b7e-7914-444f-be07-e2d063f4414c",
//         "ip_address": "172.16.82.45",
//         "area": {
//             "name": "Mir-Celal_1D",
//             "prefix": "82"
//         }
//     },
//     {
//         "id": "5e480387-53cf-44c6-98ef-37b83211c06a",
//         "ip_address": "172.16.90.81",
//         "area": {
//             "name": "Yeni Baki",
//             "prefix": "90"
//         }
//     },
//     {
//         "id": "e02a162f-5941-430a-8eb9-502f278ba22e",
//         "ip_address": "172.16.80.64",
//         "area": {
//             "name": "Qara_Qarayev",
//             "prefix": "80"
//         }
//     },
//     {
//         "id": "302ffacf-dcf8-4d10-a2bd-c9c477d6eb0f",
//         "ip_address": "172.16.80.13",
//         "area": {
//             "name": "Qara_Qarayev",
//             "prefix": "80"
//         }
//     },
//     {
//         "id": "561f9ec8-f64f-4d0c-aee8-7f965d80271b",
//         "ip_address": "172.16.80.16",
//         "area": {
//             "name": "Qara_Qarayev",
//             "prefix": "80"
//         }
//     },
//     {
//         "id": "fad98c56-ec40-4b39-9469-0c5fa13a21e5",
//         "ip_address": "172.16.99.178",
//         "area": {
//             "name": "Yeni-Guneshli",
//             "prefix": "99"
//         }
//     },
//     {
//         "id": "cb8905ae-7f0b-4f8a-a36f-e6a4ddf49602",
//         "ip_address": "172.16.90.38",
//         "area": {
//             "name": "Yeni Baki",
//             "prefix": "90"
//         }
//     },
//     {
//         "id": "6fdec7b5-5411-4ccc-956c-6055a84f8d58",
//         "ip_address": "172.16.99.24",
//         "area": {
//             "name": "Yeni-Guneshli",
//             "prefix": "99"
//         }
//     },
//     {
//         "id": "e3ecbb0a-fd95-418f-8541-4e5ffe9ab4a6",
//         "ip_address": "172.16.99.21",
//         "area": {
//             "name": "Yeni-Guneshli",
//             "prefix": "99"
//         }
//     },
//     {
//         "id": "83539553-131c-4c30-8bfd-641e7b62ee6e",
//         "ip_address": "172.16.99.4",
//         "area": {
//             "name": "Yeni-Guneshli",
//             "prefix": "99"
//         }
//     },
//     {
//         "id": "e674cacb-c048-4a53-848c-24a9c83d7268",
//         "ip_address": "172.16.70.89",
//         "area": {
//             "name": "Elchin_Eziz (Talibli)",
//             "prefix": "70"
//         }
//     },
//     {
//         "id": "c191294e-438a-4e5f-8a5b-b79b41b6afc7",
//         "ip_address": "172.16.90.18",
//         "area": {
//             "name": "Yeni Baki",
//             "prefix": "90"
//         }
//     },
//     {
//         "id": "84681170-2cb8-4bc9-bf2e-7a97850c92b4",
//         "ip_address": "172.16.40.9",
//         "area": {
//             "name": "Zerdabi_74A",
//             "prefix": "40"
//         }
//     },
//     {
//         "id": "5d035bd8-84c3-469d-9682-d0828067686f",
//         "ip_address": "172.16.99.22",
//         "area": {
//             "name": "Yeni-Guneshli",
//             "prefix": "99"
//         }
//     },
//     {
//         "id": "485c8b99-52d5-441d-9c75-5dfed744d162",
//         "ip_address": "172.16.92.5",
//         "area": {
//             "name": "Nargile",
//             "prefix": "92"
//         }
//     },
//     {
//         "id": "40f712d7-feba-4961-a696-c43ef998257f",
//         "ip_address": "172.16.99.7",
//         "area": {
//             "name": "Yeni-Guneshli",
//             "prefix": "99"
//         }
//     },
//     {
//         "id": "3b072a22-12fb-45d2-8149-764ca29e4103",
//         "ip_address": "172.16.99.23",
//         "area": {
//             "name": "Yeni-Guneshli",
//             "prefix": "99"
//         }
//     },
//     {
//         "id": "6fbab4ef-fd4a-41c9-8aa3-f6cc8d261623",
//         "ip_address": "172.16.99.203",
//         "area": {
//             "name": "Yeni-Guneshli",
//             "prefix": "99"
//         }
//     },
//     {
//         "id": "b092a9d7-c0ec-467c-ac23-70c64f396d75",
//         "ip_address": "172.16.99.18",
//         "area": {
//             "name": "Yeni-Guneshli",
//             "prefix": "99"
//         }
//     },
//     {
//         "id": "9ed3b5ee-391c-49e5-b3d5-692b31aabeaf",
//         "ip_address": "172.16.99.6",
//         "area": {
//             "name": "Yeni-Guneshli",
//             "prefix": "99"
//         }
//     },
//     {
//         "id": "6e159ad6-22a4-4d51-bfaf-7f70ca80355a",
//         "ip_address": "172.16.99.5",
//         "area": {
//             "name": "Yeni-Guneshli",
//             "prefix": "99"
//         }
//     },
//     {
//         "id": "ebfba3b0-19d1-4c00-9a1a-fb06896ed714",
//         "ip_address": "172.16.99.14",
//         "area": {
//             "name": "Yeni-Guneshli",
//             "prefix": "99"
//         }
//     },
//     {
//         "id": "fa7db53a-bd82-4f0c-b8d6-a40356d502a7",
//         "ip_address": "172.16.99.13",
//         "area": {
//             "name": "Yeni-Guneshli",
//             "prefix": "99"
//         }
//     },
//     {
//         "id": "a5902868-52ad-42b1-858e-e8d0c7cfedc2",
//         "ip_address": "172.16.99.121",
//         "area": {
//             "name": "Yeni-Guneshli",
//             "prefix": "99"
//         }
//     },
//     {
//         "id": "58c499ce-7bb3-4b82-990e-f2499145fe61",
//         "ip_address": "172.16.99.19",
//         "area": {
//             "name": "Yeni-Guneshli",
//             "prefix": "99"
//         }
//     },
//     {
//         "id": "d3e4ce9f-7c48-4708-a5e5-49213bd31a3f",
//         "ip_address": "172.16.60.27",
//         "area": {
//             "name": "Xirdalan-1",
//             "prefix": "60"
//         }
//     },
//     {
//         "id": "6ed0d14b-5cdf-4a51-9462-71cebab7182b",
//         "ip_address": "172.16.75.38",
//         "area": {
//             "name": "Neshriyyat",
//             "prefix": "75"
//         }
//     },
//     {
//         "id": "bcf47a2d-9d03-4cf9-8d16-4df777723db5",
//         "ip_address": "10.3.24.2",
//         "area": {
//             "name": "Telecom_Invest",
//             "prefix": "20"
//         }
//     },
//     {
//         "id": "74f1233a-010f-4159-b0c8-83134d1309dd",
//         "ip_address": "172.16.99.26",
//         "area": {
//             "name": "Yeni-Guneshli",
//             "prefix": "99"
//         }
//     },
//     {
//         "id": "45f20e9c-c6be-44cf-b01d-ee391f4daccb",
//         "ip_address": "172.16.97.1",
//         "area": {
//             "name": "Elnet MTK_(M.Hadi)",
//             "prefix": "97"
//         }
//     },
//     {
//         "id": "c233efb4-8e40-4686-86ab-2604a3589cad",
//         "ip_address": "172.16.73.99",
//         "area": {
//             "name": "Insaatcilar",
//             "prefix": "73"
//         }
//     },
//     {
//         "id": "9aa52e56-812d-4ccd-a4fb-e0df791ec933",
//         "ip_address": "172.16.72.5",
//         "area": {
//             "name": "Kristal Elimler",
//             "prefix": "72"
//         }
//     },
//     {
//         "id": "5d9c866f-4015-445f-9f74-ee347e0a099c",
//         "ip_address": "172.16.60.216",
//         "area": {
//             "name": "Xirdalan-1",
//             "prefix": "60"
//         }
//     },
//     {
//         "id": "89e9e095-dee4-4e11-91b5-dc8d1c91f73e",
//         "ip_address": "172.16.93.153",
//         "area": {
//             "name": "Telnov",
//             "prefix": "93"
//         }
//     },
//     {
//         "id": "86a9a4e6-9961-4fda-bdf6-0b687f9ddf14",
//         "ip_address": "172.16.80.8",
//         "area": {
//             "name": "Qara_Qarayev",
//             "prefix": "80"
//         }
//     },
//     {
//         "id": "cf3efa29-0e7a-48fe-aa87-d3a90aeffb0b",
//         "ip_address": "172.16.93.103",
//         "area": {
//             "name": "Telnov",
//             "prefix": "93"
//         }
//     },
//     {
//         "id": "ec228124-0c49-4d5d-904f-8b6637415e41",
//         "ip_address": "172.16.72.7",
//         "area": {
//             "name": "Kristal Elimler",
//             "prefix": "72"
//         }
//     },
//     {
//         "id": "b755fd07-e12e-4eb8-ab01-97f620795d57",
//         "ip_address": "172.16.40.18",
//         "area": {
//             "name": "Zerdabi_74A",
//             "prefix": "40"
//         }
//     },
//     {
//         "id": "3f303742-a8d5-4976-ac4c-409cf99c0c78",
//         "ip_address": "172.16.93.13",
//         "area": {
//             "name": "Telnov",
//             "prefix": "93"
//         }
//     },
//     {
//         "id": "595ed0f9-4ffc-41f4-b61a-7e0389a85abc",
//         "ip_address": "172.16.72.3",
//         "area": {
//             "name": "Kristal Elimler",
//             "prefix": "72"
//         }
//     },
//     {
//         "id": "2d4bc694-df2e-4e88-8f4b-fce404218b4d",
//         "ip_address": "172.16.72.6",
//         "area": {
//             "name": "Kristal Elimler",
//             "prefix": "72"
//         }
//     },
//     {
//         "id": "a9beb277-929d-4a58-bc9d-e4e5c18ba203",
//         "ip_address": "172.16.73.140",
//         "area": {
//             "name": "Insaatcilar",
//             "prefix": "73"
//         }
//     },
//     {
//         "id": "782d8761-10bb-40e8-89db-8f8d6ec2e0b3",
//         "ip_address": "172.16.72.8",
//         "area": {
//             "name": "Kristal Elimler",
//             "prefix": "72"
//         }
//     },
//     {
//         "id": "39118ad6-8bc7-478a-a907-b7c282c8edc4",
//         "ip_address": "172.16.93.1",
//         "area": {
//             "name": "Telnov",
//             "prefix": "93"
//         }
//     },
//     {
//         "id": "387e5197-18ad-4fe1-8bed-1e54191392a3",
//         "ip_address": "172.16.93.6",
//         "area": {
//             "name": "Telnov",
//             "prefix": "93"
//         }
//     },
//     {
//         "id": "5af1230d-16c1-4d8e-b538-04877a0a2617",
//         "ip_address": "172.16.93.23",
//         "area": {
//             "name": "Telnov",
//             "prefix": "93"
//         }
//     },
//     {
//         "id": "d107f37b-55f3-4651-b884-e1a6e398691a",
//         "ip_address": "172.16.93.200",
//         "area": {
//             "name": "Telnov",
//             "prefix": "93"
//         }
//     },
//     {
//         "id": "d4be49b6-ea04-42d4-9c7d-5745c3dc2bf8",
//         "ip_address": "172.16.72.4",
//         "area": {
//             "name": "Kristal Elimler",
//             "prefix": "72"
//         }
//     },
//     {
//         "id": "3e73dafb-0868-473c-b69b-374863e41fc1",
//         "ip_address": "172.16.93.21",
//         "area": {
//             "name": "Telnov",
//             "prefix": "93"
//         }
//     },
//     {
//         "id": "b2984b7b-acee-4167-8f1f-57c8ecd1f7be",
//         "ip_address": "172.16.72.1",
//         "area": {
//             "name": "Kristal Elimler",
//             "prefix": "72"
//         }
//     },
//     {
//         "id": "6315f6b8-39f8-4f7a-beb7-afc7e0489269",
//         "ip_address": "172.16.40.17",
//         "area": {
//             "name": "Zerdabi_74A",
//             "prefix": "40"
//         }
//     },
//     {
//         "id": "d818c16f-d9a8-47ef-9ebd-48bb48be29a6",
//         "ip_address": "172.16.70.170",
//         "area": {
//             "name": "Dadash Bunyadzade (Kamran)",
//             "prefix": "70"
//         }
//     },
//     {
//         "id": "2942de54-c653-4199-952f-204b2003531f",
//         "ip_address": "172.16.90.44",
//         "area": {
//             "name": "Yeni Baki",
//             "prefix": "90"
//         }
//     },
//     {
//         "id": "7f13a866-a048-4306-9577-1cddd6a2016a",
//         "ip_address": "172.16.40.19",
//         "area": {
//             "name": "Zerdabi_74A",
//             "prefix": "40"
//         }
//     },
//     {
//         "id": "d66c4b37-592d-4f28-bdc9-4af50c2ac9c6",
//         "ip_address": "172.16.40.71",
//         "area": {
//             "name": "Zerdabi_74A",
//             "prefix": "40"
//         }
//     },
//     {
//         "id": "bea81592-dc16-494c-98cd-15f2520e64da",
//         "ip_address": "172.16.40.14",
//         "area": {
//             "name": "Zerdabi_74A",
//             "prefix": "40"
//         }
//     },
//     {
//         "id": "153dbad7-df14-4699-a28e-0b124158cab4",
//         "ip_address": "172.16.50.169",
//         "area": {
//             "name": "Hesen Eliyev",
//             "prefix": "50"
//         }
//     },
//     {
//         "id": "f33f98cf-1261-49b3-b0e2-33fc7f87d0cb",
//         "ip_address": "172.16.99.1",
//         "area": {
//             "name": "Yeni-Guneshli",
//             "prefix": "99"
//         }
//     },
//     {
//         "id": "b3ab702f-8b33-4905-acea-b3e6f6ab92e3",
//         "ip_address": "172.16.40.1",
//         "area": {
//             "name": "Zerdabi_74A",
//             "prefix": "40"
//         }
//     },
//     {
//         "id": "f609632a-0bd3-4ab7-b093-86875f1b2639",
//         "ip_address": "172.16.40.56",
//         "area": {
//             "name": "Zerdabi_74A",
//             "prefix": "40"
//         }
//     },
//     {
//         "id": "bd0783de-b825-40a3-9e28-612d11ddd01a",
//         "ip_address": "172.16.54.242",
//         "area": {
//             "name": "Semed Vurgun",
//             "prefix": "54"
//         }
//     },
//     {
//         "id": "c4486da4-76b1-40bb-a043-7c29fe8a8ba1",
//         "ip_address": "172.16.60.118",
//         "area": {
//             "name": "Xirdalan-1",
//             "prefix": "60"
//         }
//     },
//     {
//         "id": "a8494a98-b55f-4e28-95f9-3225de5edf4a",
//         "ip_address": "172.16.31.7",
//         "area": {
//             "name": "Bileceri",
//             "prefix": "31"
//         }
//     },
//     {
//         "id": "fc8bbd85-e4e9-45f7-b218-e43fcf0a532c",
//         "ip_address": "172.16.31.41",
//         "area": {
//             "name": "Bileceri",
//             "prefix": "31"
//         }
//     },
//     {
//         "id": "20bfac3a-8902-4c14-a10f-78a8bea502e5",
//         "ip_address": "172.16.31.82",
//         "area": {
//             "name": "Bileceri",
//             "prefix": "31"
//         }
//     },
//     {
//         "id": "24c5e26d-d19e-4981-ba79-6ea5cf40ffc0",
//         "ip_address": "172.16.54.241",
//         "area": {
//             "name": "Semed Vurgun",
//             "prefix": "54"
//         }
//     },
//     {
//         "id": "9163444d-7447-4202-a764-f0a49d3e6e25",
//         "ip_address": "172.16.31.131",
//         "area": {
//             "name": "Bileceri",
//             "prefix": "31"
//         }
//     },
//     {
//         "id": "b92f5c0b-7808-4ddb-8703-81e9f283235e",
//         "ip_address": "172.16.80.21",
//         "area": {
//             "name": "Qara_Qarayev",
//             "prefix": "80"
//         }
//     },
//     {
//         "id": "c7d5d3d4-5e98-4866-98b5-4a336fbacad6",
//         "ip_address": "172.16.92.66",
//         "area": {
//             "name": "Nargile",
//             "prefix": "92"
//         }
//     },
//     {
//         "id": "55380656-8a3b-4866-ac17-0490c4a65585",
//         "ip_address": "172.16.31.168",
//         "area": {
//             "name": "Bileceri",
//             "prefix": "31"
//         }
//     },
//     {
//         "id": "8b95d73b-f9b5-4652-aca5-e810c3a46d40",
//         "ip_address": "172.16.31.31",
//         "area": {
//             "name": "Bileceri",
//             "prefix": "31"
//         }
//     },
//     {
//         "id": "723cda34-5d1a-4a5d-9548-75beed72e250",
//         "ip_address": "172.16.53.15",
//         "area": {
//             "name": "Koroglu_Rehimov",
//             "prefix": "53"
//         }
//     },
//     {
//         "id": "9ce7ce2c-a41f-40a6-9329-f26cb574bd6f",
//         "ip_address": "172.16.31.40",
//         "area": {
//             "name": "Bileceri",
//             "prefix": "31"
//         }
//     },
//     {
//         "id": "aa685b28-9124-45a1-89f0-8ae9e626d9b5",
//         "ip_address": "172.16.31.1",
//         "area": {
//             "name": "Bileceri",
//             "prefix": "31"
//         }
//     },
//     {
//         "id": "e58f18d5-4edc-4000-8d35-2d2e5fb694b0",
//         "ip_address": "172.16.31.187",
//         "area": {
//             "name": "Bileceri",
//             "prefix": "31"
//         }
//     },
//     {
//         "id": "32c08f49-8880-4254-aab1-0677efd1d458",
//         "ip_address": "172.16.75.1",
//         "area": {
//             "name": "Neshriyyat",
//             "prefix": "75"
//         }
//     },
//     {
//         "id": "b3ca1f23-c9bd-45b9-b22c-ca2a2d5aa124",
//         "ip_address": "172.16.90.24",
//         "area": {
//             "name": "Yeni Baki",
//             "prefix": "90"
//         }
//     },
//     {
//         "id": "0c9e10b6-fecc-4d46-9ffc-6663a558e5fc",
//         "ip_address": "172.16.31.2",
//         "area": {
//             "name": "Bileceri",
//             "prefix": "31"
//         }
//     },
//     {
//         "id": "79ea3389-f510-4fcb-bede-f788d3069132",
//         "ip_address": "172.16.42.177",
//         "area": {
//             "name": "Sherifzade158",
//             "prefix": "42"
//         }
//     },
//     {
//         "id": "5474c21c-2f98-457b-8838-dd1ade44322b",
//         "ip_address": "172.16.91.1",
//         "area": {
//             "name": "Xudu_Memmedov",
//             "prefix": "91"
//         }
//     },
//     {
//         "id": "b03b0e42-1f95-4e1b-bcf2-e125b8557917",
//         "ip_address": "172.16.60.136",
//         "area": {
//             "name": "Xirdalan-1",
//             "prefix": "60"
//         }
//     },
//     {
//         "id": "17b03b6f-b15d-4e0c-b5e3-3ade454fff34",
//         "ip_address": "172.16.80.181",
//         "area": {
//             "name": "Qara_Qarayev",
//             "prefix": "80"
//         }
//     },
//     {
//         "id": "583bc6fb-3332-46aa-a6f8-1613ee9baeed",
//         "ip_address": "10.3.25.8",
//         "area": {
//             "name": "Telecom_Invest",
//             "prefix": "20"
//         }
//     },
//     {
//         "id": "ddfc9c19-0bdc-4345-b0e2-3c5e1f3acbbb",
//         "ip_address": "172.16.47.6",
//         "area": {
//             "name": "Bayil",
//             "prefix": "47"
//         }
//     },
//     {
//         "id": "d51948a0-6dbc-4661-87ce-be4a42a62935",
//         "ip_address": "172.16.60.62",
//         "area": {
//             "name": "Xirdalan-1",
//             "prefix": "60"
//         }
//     },
//     {
//         "id": "66d71851-7436-4de8-a516-feacb5e48c52",
//         "ip_address": "172.16.90.131",
//         "area": {
//             "name": "Yeni Baki",
//             "prefix": "90"
//         }
//     },
//     {
//         "id": "937e6d7c-ac15-4c32-a07b-ef780e307fcc",
//         "ip_address": "172.16.40.50",
//         "area": {
//             "name": "Zerdabi_74A",
//             "prefix": "40"
//         }
//     },
//     {
//         "id": "f246fffa-bb4e-4395-83d3-3670f202b337",
//         "ip_address": "172.16.60.121",
//         "area": {
//             "name": "Xirdalan-1",
//             "prefix": "60"
//         }
//     },
//     {
//         "id": "500dc965-c445-4b03-a124-cc56856c79bb",
//         "ip_address": "10.3.24.3",
//         "area": {
//             "name": "Telecom_Invest",
//             "prefix": "20"
//         }
//     },
//     {
//         "id": "ac1d2e36-7fcb-4a39-85a8-e29b186f99b8",
//         "ip_address": "172.16.61.243",
//         "area": {
//             "name": "Xirdalan-2",
//             "prefix": "60"
//         }
//     },
//     {
//         "id": "84a7988c-2ba3-4690-af44-8b126850ef2e",
//         "ip_address": "172.16.93.22",
//         "area": {
//             "name": "Telnov",
//             "prefix": "93"
//         }
//     },
//     {
//         "id": "53558a57-c004-4af6-b355-c91bff174829",
//         "ip_address": "172.16.60.199",
//         "area": {
//             "name": "Xirdalan-1",
//             "prefix": "60"
//         }
//     },
//     {
//         "id": "6c3cca55-41b4-48bd-8e44-ac76067585ab",
//         "ip_address": "172.16.92.1",
//         "area": {
//             "name": "Nargile",
//             "prefix": "92"
//         }
//     },
//     {
//         "id": "ebbb90e1-7c1e-4f49-8d4c-86fce8050e31",
//         "ip_address": "172.16.32.1",
//         "area": {
//             "name": "Hollywood",
//             "prefix": "32"
//         }
//     },
//     {
//         "id": "df2fe900-ffc3-44a8-a623-9ab870f9e953",
//         "ip_address": "172.16.60.70",
//         "area": {
//             "name": "Xirdalan-1",
//             "prefix": "60"
//         }
//     },
//     {
//         "id": "45f8d463-119c-4ca4-9c6a-e0b188ad78d2",
//         "ip_address": "172.16.60.148",
//         "area": {
//             "name": "Xirdalan-1",
//             "prefix": "60"
//         }
//     },
//     {
//         "id": "2350d734-1647-44c6-8fa6-66be5407a327",
//         "ip_address": "172.16.93.17",
//         "area": {
//             "name": "Telnov",
//             "prefix": "93"
//         }
//     },
//     {
//         "id": "b0754ff6-01c5-4052-9cf2-238a8d0dfcc4",
//         "ip_address": "172.16.60.6",
//         "area": {
//             "name": "Xirdalan-1",
//             "prefix": "60"
//         }
//     },
//     {
//         "id": "502ce360-f8f6-40e9-88b6-abf243fd596f",
//         "ip_address": "172.16.31.10",
//         "area": {
//             "name": "Bileceri",
//             "prefix": "31"
//         }
//     },
//     {
//         "id": "491d9a46-36f1-4da0-9743-8b87c96e24ab",
//         "ip_address": "172.16.60.85",
//         "area": {
//             "name": "Xirdalan-1",
//             "prefix": "60"
//         }
//     },
//     {
//         "id": "9a1ba953-29ea-42a6-ad5a-e748ddea534a",
//         "ip_address": "172.16.60.90",
//         "area": {
//             "name": "Xirdalan-1",
//             "prefix": "60"
//         }
//     },
//     {
//         "id": "794ed5cc-8caf-4277-b622-919a4b6c3a28",
//         "ip_address": "172.16.60.53",
//         "area": {
//             "name": "Xirdalan-1",
//             "prefix": "60"
//         }
//     },
//     {
//         "id": "b9708f74-2a77-42f5-9fec-f6167da2f4b0",
//         "ip_address": "172.16.60.240",
//         "area": {
//             "name": "Xirdalan-1",
//             "prefix": "60"
//         }
//     },
//     {
//         "id": "6d4f4d62-819a-4d36-89fa-210b64b1e483",
//         "ip_address": "172.16.60.133",
//         "area": {
//             "name": "Xirdalan-1",
//             "prefix": "60"
//         }
//     },
//     {
//         "id": "f0df00d9-d0dd-4101-94c7-c462da65fb2b",
//         "ip_address": "172.16.60.198",
//         "area": {
//             "name": "Xirdalan-1",
//             "prefix": "60"
//         }
//     },
//     {
//         "id": "b8494c1b-b93a-4162-8aad-08c1a0ff4334",
//         "ip_address": "172.16.60.3",
//         "area": {
//             "name": "Xirdalan-1",
//             "prefix": "60"
//         }
//     },
//     {
//         "id": "54deb663-566e-492f-98c6-09bbb8a9d549",
//         "ip_address": "172.16.60.202",
//         "area": {
//             "name": "Xirdalan-1",
//             "prefix": "60"
//         }
//     },
//     {
//         "id": "77073c37-6416-4cfb-8df8-109c782bdf2f",
//         "ip_address": "172.16.60.95",
//         "area": {
//             "name": "Xirdalan-1",
//             "prefix": "60"
//         }
//     },
//     {
//         "id": "dd94fb09-ac61-418a-8418-f8068438733e",
//         "ip_address": "172.16.60.235",
//         "area": {
//             "name": "Xirdalan-1",
//             "prefix": "60"
//         }
//     },
//     {
//         "id": "1b9535e4-c5b3-4e97-a93c-9ee849337ae3",
//         "ip_address": "172.16.60.5",
//         "area": {
//             "name": "Xirdalan-1",
//             "prefix": "60"
//         }
//     },
//     {
//         "id": "c1a71aeb-f414-4696-9c39-2542ab6bbe45",
//         "ip_address": "172.16.60.203",
//         "area": {
//             "name": "Xirdalan-1",
//             "prefix": "60"
//         }
//     },
//     {
//         "id": "a5ea11af-bed7-421a-8d99-6dec36385977",
//         "ip_address": "172.16.60.52",
//         "area": {
//             "name": "Xirdalan-1",
//             "prefix": "60"
//         }
//     },
//     {
//         "id": "b96e1645-6de8-4309-afce-03664585d04f",
//         "ip_address": "172.16.60.122",
//         "area": {
//             "name": "Xirdalan-1",
//             "prefix": "60"
//         }
//     },
//     {
//         "id": "ad6f8c24-a6f1-44a7-9312-23571b1f5a46",
//         "ip_address": "172.16.60.66",
//         "area": {
//             "name": "Xirdalan-1",
//             "prefix": "60"
//         }
//     },
//     {
//         "id": "8b927d4d-b201-4384-bd24-3393cb770495",
//         "ip_address": "172.16.60.94",
//         "area": {
//             "name": "Xirdalan-1",
//             "prefix": "60"
//         }
//     },
//     {
//         "id": "ead4b06e-2e01-4493-a980-b5c38a664d3e",
//         "ip_address": "172.16.60.88",
//         "area": {
//             "name": "Xirdalan-1",
//             "prefix": "60"
//         }
//     },
//     {
//         "id": "08f31ab7-d353-489f-ae76-b42d20b943f4",
//         "ip_address": "172.16.60.236",
//         "area": {
//             "name": "Xirdalan-1",
//             "prefix": "60"
//         }
//     },
//     {
//         "id": "d69be66c-765b-4735-be85-cada0d407e0c",
//         "ip_address": "172.16.60.111",
//         "area": {
//             "name": "Xirdalan-1",
//             "prefix": "60"
//         }
//     },
//     {
//         "id": "631c4fd3-927d-4634-836c-9a407825a5e3",
//         "ip_address": "172.16.60.25",
//         "area": {
//             "name": "Xirdalan-1",
//             "prefix": "60"
//         }
//     },
//     {
//         "id": "191f30e0-7f0f-405c-b182-8ff240457215",
//         "ip_address": "10.3.21.15",
//         "area": {
//             "name": "Telecom_Invest",
//             "prefix": "20"
//         }
//     },
//     {
//         "id": "4a121683-b1ff-4dc5-8c44-92cb333aa657",
//         "ip_address": "172.16.60.214",
//         "area": {
//             "name": "Xirdalan-1",
//             "prefix": "60"
//         }
//     },
//     {
//         "id": "fac198c4-b123-4f6a-b379-02592287f37a",
//         "ip_address": "172.16.70.17",
//         "area": {
//             "name": "Jasmin",
//             "prefix": "70"
//         }
//     },
//     {
//         "id": "21c4b46f-5236-43a2-a844-7c43e835c6b2",
//         "ip_address": "172.16.60.242",
//         "area": {
//             "name": "Xirdalan-1",
//             "prefix": "60"
//         }
//     },
//     {
//         "id": "aab17fe7-cc07-4214-8296-570822d2415b",
//         "ip_address": "172.16.60.14",
//         "area": {
//             "name": "Xirdalan-1",
//             "prefix": "60"
//         }
//     },
//     {
//         "id": "72094233-c6cd-4bba-99dc-42209aa9a3ab",
//         "ip_address": "172.16.60.93",
//         "area": {
//             "name": "Xirdalan-1",
//             "prefix": "60"
//         }
//     },
//     {
//         "id": "177fcbf4-760f-4f82-beed-01130f9b93ba",
//         "ip_address": "172.16.60.30",
//         "area": {
//             "name": "Xirdalan-1",
//             "prefix": "60"
//         }
//     },
//     {
//         "id": "db8dc5ad-5a59-446e-8b13-8f63c883adfc",
//         "ip_address": "172.16.60.250",
//         "area": {
//             "name": "Xirdalan-1",
//             "prefix": "60"
//         }
//     },
//     {
//         "id": "57c6caa0-0b90-49e3-b10b-2202fbf61866",
//         "ip_address": "172.16.93.2",
//         "area": {
//             "name": "Telnov",
//             "prefix": "93"
//         }
//     },
//     {
//         "id": "6ac5fc64-e5c1-40ff-ad28-e164ef4db6f2",
//         "ip_address": "172.16.72.2",
//         "area": {
//             "name": "Kristal Elimler",
//             "prefix": "72"
//         }
//     },
//     {
//         "id": "f7202cd9-39d1-4da7-8182-ee3fc2996d82",
//         "ip_address": "172.16.60.101",
//         "area": {
//             "name": "Xirdalan-1",
//             "prefix": "60"
//         }
//     },
//     {
//         "id": "ff2a9f06-8ef3-43d9-a137-be780d61498f",
//         "ip_address": "172.16.93.99",
//         "area": {
//             "name": "Telnov",
//             "prefix": "93"
//         }
//     },
//     {
//         "id": "470c40cb-d22b-4bfb-a5df-aab32cd34aa9",
//         "ip_address": "172.16.60.92",
//         "area": {
//             "name": "Xirdalan-1",
//             "prefix": "60"
//         }
//     },
//     {
//         "id": "c1f88d9d-280c-4f6d-bfa8-fbd2deecc77c",
//         "ip_address": "172.16.60.29",
//         "area": {
//             "name": "Xirdalan-1",
//             "prefix": "60"
//         }
//     },
//     {
//         "id": "f38abe3c-eae0-4ee6-8cd0-c15cbdae5ceb",
//         "ip_address": "172.16.60.75",
//         "area": {
//             "name": "Xirdalan-1",
//             "prefix": "60"
//         }
//     },
//     {
//         "id": "75bd3c45-39f6-4d81-a498-833c28ada1c4",
//         "ip_address": "172.16.99.40",
//         "area": {
//             "name": "Yeni-Guneshli",
//             "prefix": "99"
//         }
//     },
//     {
//         "id": "2129aac9-1c57-4e3a-9665-2d5493718a3f",
//         "ip_address": "172.16.70.167",
//         "area": {
//             "name": "Sherur",
//             "prefix": "70"
//         }
//     },
//     {
//         "id": "9d012bd2-b5cb-45d6-959c-8cb3465fbcf1",
//         "ip_address": "172.16.70.211",
//         "area": {
//             "name": "Sherur",
//             "prefix": "70"
//         }
//     },
//     {
//         "id": "89fc50b9-0a8e-44ce-acb8-b38b3c6c8e9f",
//         "ip_address": "172.16.70.163",
//         "area": {
//             "name": "Sherur",
//             "prefix": "70"
//         }
//     },
//     {
//         "id": "4ac979ab-2833-41a0-a70a-730425082a0e",
//         "ip_address": "172.16.70.77",
//         "area": {
//             "name": "Sherur",
//             "prefix": "70"
//         }
//     },
//     {
//         "id": "71656347-8bb1-495a-b8e5-c8451c77d60f",
//         "ip_address": "172.16.90.33",
//         "area": {
//             "name": "Yeni Baki",
//             "prefix": "90"
//         }
//     },
//     {
//         "id": "a6e8702f-a13f-4454-a418-dfb4eada0c6b",
//         "ip_address": "172.16.99.16",
//         "area": {
//             "name": "Yeni-Guneshli",
//             "prefix": "99"
//         }
//     },
//     {
//         "id": "46aa621f-5f59-4c80-8b3e-161c3f95bae3",
//         "ip_address": "172.16.61.103",
//         "area": {
//             "name": "Xirdalan-2",
//             "prefix": "60"
//         }
//     },
//     {
//         "id": "93613112-54a5-4f24-8602-b3d0ed490879",
//         "ip_address": "172.16.70.205",
//         "area": {
//             "name": "Dadash Bunyadzade (Kamran)",
//             "prefix": "70"
//         }
//     },
//     {
//         "id": "6dbc13d5-b96d-415e-9aad-2727ecc145e5",
//         "ip_address": "10.3.22.5",
//         "area": {
//             "name": "Telecom_Invest",
//             "prefix": "20"
//         }
//     },
//     {
//         "id": "9bbafc66-07a5-4c95-965e-377b4cc3b7fc",
//         "ip_address": "172.16.93.3",
//         "area": {
//             "name": "Telnov",
//             "prefix": "93"
//         }
//     },
//     {
//         "id": "2ec959fc-a482-450a-bc1f-35e0ff1758b1",
//         "ip_address": "172.16.40.36",
//         "area": {
//             "name": "Zerdabi_74A",
//             "prefix": "40"
//         }
//     },
//     {
//         "id": "66064dc9-e330-44a4-b742-32385c9021e1",
//         "ip_address": "172.16.61.1",
//         "area": {
//             "name": "Xirdalan-2",
//             "prefix": "60"
//         }
//     },
//     {
//         "id": "4e846340-0998-4ceb-bf72-7a00289aca13",
//         "ip_address": "172.16.70.213",
//         "area": {
//             "name": "Sherur",
//             "prefix": "70"
//         }
//     },
//     {
//         "id": "de0de123-a29b-42fe-b386-94dad9529194",
//         "ip_address": "172.16.70.45",
//         "area": {
//             "name": "Sherur",
//             "prefix": "70"
//         }
//     },
//     {
//         "id": "292c5f01-115f-4dda-b00e-30d3d0b95c0e",
//         "ip_address": "172.16.99.9",
//         "area": {
//             "name": "Yeni-Guneshli",
//             "prefix": "99"
//         }
//     },
//     {
//         "id": "f1fa09df-1889-4907-a56f-180a807b9363",
//         "ip_address": "172.16.70.215",
//         "area": {
//             "name": "Sherur",
//             "prefix": "70"
//         }
//     },
//     {
//         "id": "5f404da4-fffb-4067-938b-559de913e33e",
//         "ip_address": "172.16.70.7",
//         "area": {
//             "name": "Sherur",
//             "prefix": "70"
//         }
//     },
//     {
//         "id": "5db0e47c-6bd6-4cb0-8a8a-b90d6afd5c46",
//         "ip_address": "172.16.99.3",
//         "area": {
//             "name": "Yeni-Guneshli",
//             "prefix": "99"
//         }
//     },
//     {
//         "id": "e7469e86-e9c5-4646-9b8c-b3e97f2f1ffa",
//         "ip_address": "172.16.70.2",
//         "area": {
//             "name": "Elchin_Eziz (Talibli)",
//             "prefix": "70"
//         }
//     },
//     {
//         "id": "5bf09e3c-fa02-46e2-8285-f0cd7ce13416",
//         "ip_address": "172.16.99.20",
//         "area": {
//             "name": "Yeni-Guneshli",
//             "prefix": "99"
//         }
//     },
//     {
//         "id": "78bb7a46-be13-4781-a5c0-b26cc2ca6e00",
//         "ip_address": "172.16.70.5",
//         "area": {
//             "name": "Elchin_Eziz (Talibli)",
//             "prefix": "70"
//         }
//     },
//     {
//         "id": "98184d03-0761-43b9-984e-73a0b4477429",
//         "ip_address": "172.16.70.214",
//         "area": {
//             "name": "Elchin_Eziz (Talibli)",
//             "prefix": "70"
//         }
//     },
//     {
//         "id": "84e67b1a-429b-49ba-b600-274b4be65427",
//         "ip_address": "172.16.70.201",
//         "area": {
//             "name": "Elchin_Eziz (Talibli)",
//             "prefix": "70"
//         }
//     },
//     {
//         "id": "c3a98c7d-6bbf-47f3-bea8-1adf477d07f7",
//         "ip_address": "172.16.61.32",
//         "area": {
//             "name": "Xirdalan-2",
//             "prefix": "60"
//         }
//     },
//     {
//         "id": "a46a1c03-b7b1-4516-94da-834d21da35da",
//         "ip_address": "172.16.70.62",
//         "area": {
//             "name": "Elchin_Eziz (Talibli)",
//             "prefix": "70"
//         }
//     },
//     {
//         "id": "6468a322-d257-48ac-adaf-2c2a00f4a312",
//         "ip_address": "172.16.70.200",
//         "area": {
//             "name": "Elchin_Eziz (Talibli)",
//             "prefix": "70"
//         }
//     },
//     {
//         "id": "c8d6c740-a25a-452e-98e3-ae8dc1c081e5",
//         "ip_address": "172.16.70.44",
//         "area": {
//             "name": "Elchin_Eziz (Talibli)",
//             "prefix": "70"
//         }
//     },
//     {
//         "id": "a068c224-1d3d-4d02-a305-c37b8351bca2",
//         "ip_address": "172.16.70.4",
//         "area": {
//             "name": "Elchin_Eziz (Talibli)",
//             "prefix": "70"
//         }
//     },
//     {
//         "id": "03ac38b9-a92c-4a0b-a860-cb1516201bcf",
//         "ip_address": "172.16.70.207",
//         "area": {
//             "name": "Xiyabani_(Nuray)",
//             "prefix": "70"
//         }
//     },
//     {
//         "id": "874f33de-dc56-4483-a5c8-0e2436a203dc",
//         "ip_address": "172.16.61.97",
//         "area": {
//             "name": "Xirdalan-2",
//             "prefix": "60"
//         }
//     },
//     {
//         "id": "79fb85e4-f0cb-4218-9efd-e06d3641a9eb",
//         "ip_address": "172.16.70.70",
//         "area": {
//             "name": "Elchin_Eziz (Talibli)",
//             "prefix": "70"
//         }
//     },
//     {
//         "id": "ad62491d-07da-41e9-bac8-5eee75eaf95d",
//         "ip_address": "172.16.70.219",
//         "area": {
//             "name": "Elchin_Eziz (Talibli)",
//             "prefix": "70"
//         }
//     },
//     {
//         "id": "1ba80dcc-5ea3-4202-b609-880ced2569ce",
//         "ip_address": "172.16.70.58",
//         "area": {
//             "name": "Elchin_Eziz (Talibli)",
//             "prefix": "70"
//         }
//     },
//     {
//         "id": "df7d5f06-0f95-4946-9151-9a738b57120f",
//         "ip_address": "172.16.61.96",
//         "area": {
//             "name": "Xirdalan-2",
//             "prefix": "60"
//         }
//     },
//     {
//         "id": "2c38dbf0-647e-4d91-93bc-c790781c4465",
//         "ip_address": "172.16.61.2",
//         "area": {
//             "name": "Xirdalan-2",
//             "prefix": "60"
//         }
//     },
//     {
//         "id": "c1aa56e6-7c5e-4650-bb93-d735a1a4d208",
//         "ip_address": "172.16.61.104",
//         "area": {
//             "name": "Xirdalan-2",
//             "prefix": "60"
//         }
//     },
//     {
//         "id": "52e7e128-bf5d-4068-8d60-6a7cd83a59f1",
//         "ip_address": "10.3.25.3",
//         "area": {
//             "name": "Telecom_Invest",
//             "prefix": "20"
//         }
//     },
//     {
//         "id": "9ec85482-f340-4bb1-a0ad-eb65e41fe7bb",
//         "ip_address": "172.16.70.14",
//         "area": {
//             "name": "Elchin_Eziz (Talibli)",
//             "prefix": "70"
//         }
//     },
//     {
//         "id": "d6f73154-b1de-4fa8-ac2a-fd9890c23105",
//         "ip_address": "172.16.90.23",
//         "area": {
//             "name": "Yeni Baki",
//             "prefix": "90"
//         }
//     },
//     {
//         "id": "b703ea5f-c5e6-4d39-bc8a-5a53c248130a",
//         "ip_address": "172.16.61.39",
//         "area": {
//             "name": "Xirdalan-2",
//             "prefix": "60"
//         }
//     },
//     {
//         "id": "dbddd924-ffd1-41be-aa24-526771581787",
//         "ip_address": "172.16.60.33",
//         "area": {
//             "name": "Xirdalan-1",
//             "prefix": "60"
//         }
//     },
//     {
//         "id": "255cf6b3-81f3-408f-8366-f8405bab5401",
//         "ip_address": "172.16.60.44",
//         "area": {
//             "name": "Xirdalan-1",
//             "prefix": "60"
//         }
//     },
//     {
//         "id": "c821e5df-a78b-406d-9044-fa739ac4bb97",
//         "ip_address": "172.16.60.135",
//         "area": {
//             "name": "Xirdalan-1",
//             "prefix": "60"
//         }
//     },
//     {
//         "id": "cb154d21-f4b0-4d03-8017-870b375568c0",
//         "ip_address": "172.16.70.1",
//         "area": {
//             "name": "Sherur",
//             "prefix": "70"
//         }
//     },
//     {
//         "id": "21d79ebe-1379-4641-8552-d7bf086bc59f",
//         "ip_address": "172.16.61.245",
//         "area": {
//             "name": "Xirdalan-2",
//             "prefix": "60"
//         }
//     },
//     {
//         "id": "de95e2f3-75a4-40e2-bd2a-2745bd316ce4",
//         "ip_address": "172.16.61.108",
//         "area": {
//             "name": "Xirdalan-2",
//             "prefix": "60"
//         }
//     },
//     {
//         "id": "722443b3-761e-4c79-ac16-91dccda0d476",
//         "ip_address": "172.16.90.28",
//         "area": {
//             "name": "Yeni Baki",
//             "prefix": "90"
//         }
//     },
//     {
//         "id": "2ce927d0-8969-40fb-94af-972939288bcf",
//         "ip_address": "172.16.93.19",
//         "area": {
//             "name": "Telnov",
//             "prefix": "93"
//         }
//     },
//     {
//         "id": "1ec2f151-2650-4f74-a5d3-08bde6048d67",
//         "ip_address": "172.16.60.244",
//         "area": {
//             "name": "Xirdalan-1",
//             "prefix": "60"
//         }
//     },
//     {
//         "id": "b3eedaba-9b9e-4c03-b4f3-faeaf8a9e74a",
//         "ip_address": "172.16.70.37",
//         "area": {
//             "name": "Elchin_Eziz (Talibli)",
//             "prefix": "70"
//         }
//     },
//     {
//         "id": "1a2df2e0-95a6-4152-b336-33d367517142",
//         "ip_address": "10.3.21.3",
//         "area": {
//             "name": "Telecom_Invest",
//             "prefix": "20"
//         }
//     },
//     {
//         "id": "2e89e0f8-657e-4ef4-8672-8e86ef0b6aef",
//         "ip_address": "172.16.90.22",
//         "area": {
//             "name": "Yeni Baki",
//             "prefix": "90"
//         }
//     },
//     {
//         "id": "1acefddf-a27c-40eb-bd04-fb790f574046",
//         "ip_address": "10.3.21.2",
//         "area": {
//             "name": "Telecom_Invest",
//             "prefix": "20"
//         }
//     },
//     {
//         "id": "cdb55ab5-efa7-48d6-9a2a-801eeff7169d",
//         "ip_address": "10.3.24.7",
//         "area": {
//             "name": "Telecom_Invest",
//             "prefix": "20"
//         }
//     },
//     {
//         "id": "5e3a0e3b-b0e2-4e88-83f5-db953958d00b",
//         "ip_address": "172.16.90.15",
//         "area": {
//             "name": "Yeni Baki",
//             "prefix": "90"
//         }
//     },
//     {
//         "id": "63b659eb-ff76-4434-83aa-e78482fda40e",
//         "ip_address": "172.16.80.12",
//         "area": {
//             "name": "Qara_Qarayev",
//             "prefix": "80"
//         }
//     },
//     {
//         "id": "c8fa7bfc-74b7-4849-aa0d-ea5401161766",
//         "ip_address": "10.3.24.5",
//         "area": {
//             "name": "Telecom_Invest",
//             "prefix": "20"
//         }
//     },
//     {
//         "id": "e1cb50e6-22f4-41a8-a24c-927102c4a6a6",
//         "ip_address": "10.3.21.14",
//         "area": {
//             "name": "Telecom_Invest",
//             "prefix": "20"
//         }
//     },
//     {
//         "id": "465e405c-0e6c-4c01-9dcb-bba48e448204",
//         "ip_address": "172.16.80.4",
//         "area": {
//             "name": "Qara_Qarayev",
//             "prefix": "80"
//         }
//     },
//     {
//         "id": "5b5ffc45-1969-4aa3-947f-36dcdf4a6f5d",
//         "ip_address": "10.3.25.5",
//         "area": {
//             "name": "Telecom_Invest",
//             "prefix": "20"
//         }
//     },
//     {
//         "id": "957dcd91-17ca-4e96-a82d-8a49bc1a40bb",
//         "ip_address": "10.3.24.4",
//         "area": {
//             "name": "Telecom_Invest",
//             "prefix": "20"
//         }
//     },
//     {
//         "id": "56da1d21-5f0d-44e1-97fe-39a58a69dcfc",
//         "ip_address": "10.3.25.4",
//         "area": {
//             "name": "Telecom_Invest",
//             "prefix": "20"
//         }
//     },
//     {
//         "id": "a4f41ab5-dad4-4c67-8611-12e2dd94b8ab",
//         "ip_address": "10.3.23.8",
//         "area": {
//             "name": "Telecom_Invest",
//             "prefix": "20"
//         }
//     },
//     {
//         "id": "1e7fb9fd-2ab1-4396-8ce4-08aacedfa6ce",
//         "ip_address": "172.16.70.18",
//         "area": {
//             "name": "Jasmin",
//             "prefix": "70"
//         }
//     },
//     {
//         "id": "a14a3f9a-517e-41ea-a78e-dfa77b2e3fc4",
//         "ip_address": "10.3.22.2",
//         "area": {
//             "name": "Telecom_Invest",
//             "prefix": "20"
//         }
//     },
//     {
//         "id": "84c76060-77ea-4023-9195-f26341517949",
//         "ip_address": "10.3.20.2",
//         "area": {
//             "name": "Telecom_Invest",
//             "prefix": "20"
//         }
//     },
//     {
//         "id": "3fb6b9c5-e444-4827-9572-6441bf1d0ac3",
//         "ip_address": "10.3.22.3",
//         "area": {
//             "name": "Telecom_Invest",
//             "prefix": "20"
//         }
//     },
//     {
//         "id": "ddf4996d-56f5-451e-be04-79e4097e670d",
//         "ip_address": "172.16.60.35",
//         "area": {
//             "name": "Xirdalan-1",
//             "prefix": "60"
//         }
//     },
//     {
//         "id": "23f860c5-b4c3-4d75-9257-61473327ce11",
//         "ip_address": "172.16.90.250",
//         "area": {
//             "name": "Yeni Baki",
//             "prefix": "90"
//         }
//     },
//     {
//         "id": "376f2a90-36f6-4722-b277-6bdb91c15f26",
//         "ip_address": "172.16.90.43",
//         "area": {
//             "name": "Yeni Baki",
//             "prefix": "90"
//         }
//     },
//     {
//         "id": "e0192d6f-f012-4d36-95db-96dad3975316",
//         "ip_address": "172.16.97.2",
//         "area": {
//             "name": "Elnet MTK_(M.Hadi)",
//             "prefix": "97"
//         }
//     },
//     {
//         "id": "42407bb3-aa04-4ceb-a14d-a5c8089e0a4a",
//         "ip_address": "172.16.80.6",
//         "area": {
//             "name": "Qara_Qarayev",
//             "prefix": "80"
//         }
//     },
//     {
//         "id": "6862f9fe-9f75-423d-87cb-cbb0daa74e24",
//         "ip_address": "172.16.90.72",
//         "area": {
//             "name": "Yeni Baki",
//             "prefix": "90"
//         }
//     },
//     {
//         "id": "0b769441-f99d-4f08-8e5f-225dec37eeb0",
//         "ip_address": "172.16.60.102",
//         "area": {
//             "name": "Xirdalan-1",
//             "prefix": "60"
//         }
//     },
//     {
//         "id": "030be9fc-5ba3-47a1-8692-63e24df17788",
//         "ip_address": "172.16.90.29",
//         "area": {
//             "name": "Yeni Baki",
//             "prefix": "90"
//         }
//     },
//     {
//         "id": "4adfc9f2-06cc-440d-aaea-5bc6aa80813c",
//         "ip_address": "172.16.99.17",
//         "area": {
//             "name": "Yeni-Guneshli",
//             "prefix": "99"
//         }
//     },
//     {
//         "id": "ebee9fb4-b08a-4176-bc7e-99b312d3011c",
//         "ip_address": "172.16.73.125",
//         "area": {
//             "name": "Insaatcilar",
//             "prefix": "73"
//         }
//     },
//     {
//         "id": "b1ad7a0d-aef4-4568-b0a1-c5d41c0befcc",
//         "ip_address": "172.16.93.4",
//         "area": {
//             "name": "Telnov",
//             "prefix": "93"
//         }
//     },
//     {
//         "id": "32e0380d-9ac1-46ce-a628-4289a147d877",
//         "ip_address": "172.16.93.31",
//         "area": {
//             "name": "Telnov",
//             "prefix": "93"
//         }
//     },
//     {
//         "id": "52218a86-245d-412d-b289-649a66b8c691",
//         "ip_address": "172.16.93.30",
//         "area": {
//             "name": "Telnov",
//             "prefix": "93"
//         }
//     },
//     {
//         "id": "d2966991-71ef-42b2-a154-7e910cdb9d78",
//         "ip_address": "172.16.93.15",
//         "area": {
//             "name": "Telnov",
//             "prefix": "93"
//         }
//     },
//     {
//         "id": "12af76d8-0842-42f4-9841-3c5395eaa4a3",
//         "ip_address": "172.16.61.239",
//         "area": {
//             "name": "Xirdalan-2",
//             "prefix": "60"
//         }
//     },
//     {
//         "id": "1a62d466-f2f0-44c6-ba66-b1c2ee17df48",
//         "ip_address": "172.16.93.32",
//         "area": {
//             "name": "Telnov",
//             "prefix": "93"
//         }
//     },
//     {
//         "id": "fc547d4b-ad59-4a28-acb6-db7a7c3433ec",
//         "ip_address": "172.16.90.35",
//         "area": {
//             "name": "Yeni Baki",
//             "prefix": "90"
//         }
//     },
//     {
//         "id": "0c532a33-8a10-4dab-a483-f881c92b16f1",
//         "ip_address": "172.16.61.106",
//         "area": {
//             "name": "Xirdalan-2",
//             "prefix": "60"
//         }
//     },
//     {
//         "id": "a4685260-545f-46e3-affd-f0fb27dfa60c",
//         "ip_address": "172.16.31.4",
//         "area": {
//             "name": "Bileceri",
//             "prefix": "31"
//         }
//     },
//     {
//         "id": "5df54dd5-2843-414b-b720-6f936018ab40",
//         "ip_address": "172.16.70.222",
//         "area": {
//             "name": "Jasmin",
//             "prefix": "70"
//         }
//     },
//     {
//         "id": "577aeafa-2a94-4922-b52f-58b35a41b545",
//         "ip_address": "172.16.99.12",
//         "area": {
//             "name": "Yeni-Guneshli",
//             "prefix": "99"
//         }
//     },
//     {
//         "id": "df557570-e91a-43ff-965c-9d6acae219c8",
//         "ip_address": "172.16.31.9",
//         "area": {
//             "name": "Bileceri",
//             "prefix": "31"
//         }
//     },
//     {
//         "id": "e78ad282-86d6-495e-ba39-be1fb5181401",
//         "ip_address": "172.16.61.105",
//         "area": {
//             "name": "Xirdalan-2",
//             "prefix": "60"
//         }
//     },
//     {
//         "id": "76dffb7f-f757-457c-8401-8f3822df3d6d",
//         "ip_address": "172.16.70.21",
//         "area": {
//             "name": "Jasmin",
//             "prefix": "70"
//         }
//     },
//     {
//         "id": "60173fc8-741c-4662-a0b6-acbe983333e4",
//         "ip_address": "172.16.99.100",
//         "area": {
//             "name": "Yeni-Guneshli",
//             "prefix": "99"
//         }
//     },
//     {
//         "id": "fd02a73b-74a7-4e5e-9a80-5fc5abd97ce4",
//         "ip_address": "172.16.70.20",
//         "area": {
//             "name": "Jasmin",
//             "prefix": "70"
//         }
//     },
//     {
//         "id": "f3029f1c-69ed-4327-a163-9dd19ea86170",
//         "ip_address": "172.16.93.94",
//         "area": {
//             "name": "Telnov",
//             "prefix": "93"
//         }
//     },
//     {
//         "id": "a69b1b2c-ca7e-46f0-9b8b-b2e7bcecb4ee",
//         "ip_address": "172.16.93.34",
//         "area": {
//             "name": "Telnov",
//             "prefix": "93"
//         }
//     },
//     {
//         "id": "68522f0e-5996-47ff-a638-ae55c8a8aee0",
//         "ip_address": "172.16.70.39",
//         "area": {
//             "name": "Elchin_Eziz (Talibli)",
//             "prefix": "70"
//         }
//     },
//     {
//         "id": "9853a4fe-0572-4599-abb8-c73bb956ae86",
//         "ip_address": "172.16.70.35",
//         "area": {
//             "name": "Elchin_Eziz (Talibli)",
//             "prefix": "70"
//         }
//     },
//     {
//         "id": "70425407-1dda-4810-ab8e-00dd3775a122",
//         "ip_address": "172.16.90.53",
//         "area": {
//             "name": "Yeni Baki",
//             "prefix": "90"
//         }
//     },
//     {
//         "id": "60c69315-fed2-4bf4-b850-c9617d85bd36",
//         "ip_address": "172.16.93.20",
//         "area": {
//             "name": "Telnov",
//             "prefix": "93"
//         }
//     },
//     {
//         "id": "000d3a6e-7d13-4436-825e-716ae3c779d4",
//         "ip_address": "172.16.70.49",
//         "area": {
//             "name": "Sherur",
//             "prefix": "70"
//         }
//     },
//     {
//         "id": "676569c0-9ac0-4400-abcf-6634f0f45d95",
//         "ip_address": "172.16.92.37",
//         "area": {
//             "name": "Nargile",
//             "prefix": "92"
//         }
//     },
//     {
//         "id": "dffcee10-65ec-4b5c-a84e-e7535dd868fa",
//         "ip_address": "172.16.46.1",
//         "area": {
//             "name": "Hesen Eliyev_7B",
//             "prefix": "46"
//         }
//     },
//     {
//         "id": "b66854c2-b26f-428b-8fb6-83caeeb548d6",
//         "ip_address": "172.16.70.36",
//         "area": {
//             "name": "Elchin_Eziz (Talibli)",
//             "prefix": "70"
//         }
//     },
//     {
//         "id": "67ac4752-f795-4058-b4a0-5b311e084d95",
//         "ip_address": "172.16.93.33",
//         "area": {
//             "name": "Telnov",
//             "prefix": "93"
//         }
//     },
//     {
//         "id": "2a49c7da-465f-46b8-9e5b-0d373fcd3639",
//         "ip_address": "172.16.70.46",
//         "area": {
//             "name": "Elchin_Eziz (Talibli)",
//             "prefix": "70"
//         }
//     },
//     {
//         "id": "b037cff6-8a5b-4d2d-8c7d-3cbf2590681a",
//         "ip_address": "172.16.60.99",
//         "area": {
//             "name": "Xirdalan-1",
//             "prefix": "60"
//         }
//     },
//     {
//         "id": "0e7f2de2-1b5b-44b6-be5b-d34e027f2e62",
//         "ip_address": "172.16.90.36",
//         "area": {
//             "name": "Yeni Baki",
//             "prefix": "90"
//         }
//     },
//     {
//         "id": "cb700289-b78c-4125-9a82-b34788f50868",
//         "ip_address": "172.16.60.249",
//         "area": {
//             "name": "Xirdalan-1",
//             "prefix": "60"
//         }
//     },
//     {
//         "id": "4039e6bf-2b94-4206-9288-d019209c853e",
//         "ip_address": "172.16.60.7",
//         "area": {
//             "name": "Xirdalan-1",
//             "prefix": "60"
//         }
//     },
//     {
//         "id": "130fcd08-c2d8-4997-b893-62f7bb90711f",
//         "ip_address": "172.16.93.210",
//         "area": {
//             "name": "Telnov",
//             "prefix": "93"
//         }
//     },
//     {
//         "id": "0b3305f3-8685-4378-a8f2-0384c9b01d86",
//         "ip_address": "172.16.70.34",
//         "area": {
//             "name": "Elchin_Eziz (Talibli)",
//             "prefix": "70"
//         }
//     },
//     {
//         "id": "ec316329-fd1f-490d-b0f2-3cb678dd1b72",
//         "ip_address": "172.16.70.40",
//         "area": {
//             "name": "Elchin_Eziz (Talibli)",
//             "prefix": "70"
//         }
//     },
//     {
//         "id": "333a5e07-2451-46c1-b9e3-d2e16ba363a8",
//         "ip_address": "172.16.75.2",
//         "area": {
//             "name": "Neshriyyat",
//             "prefix": "75"
//         }
//     },
//     {
//         "id": "6b895699-fae5-4ee2-b18a-c5140e41a524",
//         "ip_address": "172.16.90.37",
//         "area": {
//             "name": "Yeni Baki",
//             "prefix": "90"
//         }
//     },
//     {
//         "id": "86a9e9c7-d347-4488-89dc-002d5e1f7864",
//         "ip_address": "172.16.61.98",
//         "area": {
//             "name": "Xirdalan-2",
//             "prefix": "60"
//         }
//     },
//     {
//         "id": "8fefa515-8298-40ae-a5f4-95b9f2e8ec8f",
//         "ip_address": "172.16.90.84",
//         "area": {
//             "name": "Yeni Baki",
//             "prefix": "90"
//         }
//     },
//     {
//         "id": "e36c64cf-a8b9-476f-84f8-968db1d64454",
//         "ip_address": "172.16.60.11",
//         "area": {
//             "name": "Xirdalan-1",
//             "prefix": "60"
//         }
//     },
//     {
//         "id": "87f886fe-48d7-4ab0-a634-f38fbae34fbb",
//         "ip_address": "172.16.90.25",
//         "area": {
//             "name": "Yeni Baki",
//             "prefix": "90"
//         }
//     },
//     {
//         "id": "216e0d3c-bcca-4af4-9f57-518e951de5ba",
//         "ip_address": "172.16.47.1",
//         "area": {
//             "name": "Bayil",
//             "prefix": "47"
//         }
//     },
//     {
//         "id": "19b33795-877d-485b-b4f2-57c3926b20ce",
//         "ip_address": "172.16.78.4",
//         "area": {
//             "name": "Saray_Jasmin",
//             "prefix": "78"
//         }
//     },
//     {
//         "id": "f84e2950-960d-462f-a625-ab4f175cf64e",
//         "ip_address": "172.16.90.125",
//         "area": {
//             "name": "Yeni Baki",
//             "prefix": "90"
//         }
//     },
//     {
//         "id": "92e4d377-e0d4-4c95-afe7-1807183cb743",
//         "ip_address": "172.16.70.48",
//         "area": {
//             "name": "Jasmin",
//             "prefix": "70"
//         }
//     },
//     {
//         "id": "22ef2295-fc62-408b-9ab8-bb00f8c9e056",
//         "ip_address": "172.16.90.27",
//         "area": {
//             "name": "Yeni Baki",
//             "prefix": "90"
//         }
//     },
//     {
//         "id": "c022e789-f482-4457-8bc4-f53ee8fd7e2f",
//         "ip_address": "172.16.90.153",
//         "area": {
//             "name": "Yeni Baki",
//             "prefix": "90"
//         }
//     },
//     {
//         "id": "e903731f-09ff-4e41-bc70-1bbc9c20ea7f",
//         "ip_address": "172.16.70.168",
//         "area": {
//             "name": "Elchin_Eziz (Talibli)",
//             "prefix": "70"
//         }
//     },
//     {
//         "id": "f03e4a25-8923-4e15-be5e-59dd4e5a0ad9",
//         "ip_address": "172.16.78.2",
//         "area": {
//             "name": "Saray_Jasmin",
//             "prefix": "78"
//         }
//     },
//     {
//         "id": "667ce6c7-cb03-4297-bbc2-2a5ca71baf04",
//         "ip_address": "172.16.77.1",
//         "area": {
//             "name": "AVD - SAFARI",
//             "prefix": "77"
//         }
//     },
//     {
//         "id": "9fd65c66-28f6-4801-b368-704320db309e",
//         "ip_address": "172.16.55.2",
//         "area": {
//             "name": "Movsum Senani",
//             "prefix": "55"
//         }
//     },
//     {
//         "id": "cb41da11-adfe-4773-8545-7d9317e98985",
//         "ip_address": "172.16.80.110",
//         "area": {
//             "name": "Qara_Qarayev",
//             "prefix": "80"
//         }
//     },
//     {
//         "id": "31e2642c-c564-42ef-99aa-975ec2600ee9",
//         "ip_address": "172.16.78.1",
//         "area": {
//             "name": "Saray_Jasmin",
//             "prefix": "78"
//         }
//     },
//     {
//         "id": "c26dfb99-3bef-4795-bec0-65aad74ff072",
//         "ip_address": "172.16.80.23",
//         "area": {
//             "name": "Qara_Qarayev",
//             "prefix": "80"
//         }
//     },
//     {
//         "id": "558b91d8-6668-4b1c-8b32-8928e433f70a",
//         "ip_address": "172.16.77.13",
//         "area": {
//             "name": "AVD - SAFARI",
//             "prefix": "77"
//         }
//     },
//     {
//         "id": "1e665563-1517-4a4f-8228-a4bb65625307",
//         "ip_address": "172.16.90.220",
//         "area": {
//             "name": "Yeni Baki",
//             "prefix": "90"
//         }
//     },
//     {
//         "id": "7cc88e9b-c6e3-4772-a7d9-23bd6e6a207a",
//         "ip_address": "172.16.73.2",
//         "area": {
//             "name": "Insaatcilar",
//             "prefix": "73"
//         }
//     },
//     {
//         "id": "3414dadc-b4f8-40e7-91f6-678540cca1b7",
//         "ip_address": "172.16.31.101",
//         "area": {
//             "name": "Bileceri",
//             "prefix": "31"
//         }
//     },
//     {
//         "id": "5f934761-42b8-4f3e-9cb4-c1ae8510cc24",
//         "ip_address": "172.16.70.19",
//         "area": {
//             "name": "Sherur",
//             "prefix": "70"
//         }
//     },
//     {
//         "id": "69682054-8f87-4e98-be97-23047b46b76b",
//         "ip_address": "172.16.80.22",
//         "area": {
//             "name": "Qara_Qarayev",
//             "prefix": "80"
//         }
//     },
//     {
//         "id": "79a1ad30-d645-4887-9894-b5f3035efcd5",
//         "ip_address": "172.16.60.113",
//         "area": {
//             "name": "Xirdalan-1",
//             "prefix": "60"
//         }
//     },
//     {
//         "id": "aba1c1a3-c17b-44ca-b5a2-f66011515ccb",
//         "ip_address": "172.16.70.66",
//         "area": {
//             "name": "Jasmin",
//             "prefix": "70"
//         }
//     },
//     {
//         "id": "2601b608-9c03-48c8-b90e-b3b230c13c46",
//         "ip_address": "172.16.60.74",
//         "area": {
//             "name": "Xirdalan-1",
//             "prefix": "60"
//         }
//     },
//     {
//         "id": "a1db5cc2-acae-47b7-bd42-162892d86954",
//         "ip_address": "172.16.76.4",
//         "area": {
//             "name": "Jasmin",
//             "prefix": "70"
//         }
//     },
//     {
//         "id": "73902d0d-9beb-4661-9641-5cca648c8a9d",
//         "ip_address": "172.16.99.27",
//         "area": {
//             "name": "Yeni-Guneshli",
//             "prefix": "99"
//         }
//     },
//     {
//         "id": "84b5f9df-0c44-455d-9ff0-168a2182df2a",
//         "ip_address": "172.16.60.126",
//         "area": {
//             "name": "Xirdalan-1",
//             "prefix": "60"
//         }
//     },
//     {
//         "id": "aee632e1-0ec2-4c99-a355-caea364b6955",
//         "ip_address": "172.16.90.1",
//         "area": {
//             "name": "Yeni Baki",
//             "prefix": "90"
//         }
//     },
//     {
//         "id": "dde792e2-c3cb-4e5b-ae4a-57aa0d9867e9",
//         "ip_address": "172.16.43.5",
//         "area": {
//             "name": "Torpaq",
//             "prefix": "43"
//         }
//     },
//     {
//         "id": "42b35f13-f35a-4418-a2c5-7fa2f5e6c827",
//         "ip_address": "172.16.77.11",
//         "area": {
//             "name": "AVD - SAFARI",
//             "prefix": "77"
//         }
//     },
//     {
//         "id": "618118d8-c28d-4b49-beb1-081597e944b9",
//         "ip_address": "172.16.60.89",
//         "area": {
//             "name": "Xirdalan-1",
//             "prefix": "60"
//         }
//     },
//     {
//         "id": "b2300b8c-d51e-40f5-a200-c4720fc4dd88",
//         "ip_address": "172.16.76.5",
//         "area": {
//             "name": "Jasmin",
//             "prefix": "70"
//         }
//     },
//     {
//         "id": "7e954131-f2c6-450b-b2f7-ea50dee9c759",
//         "ip_address": "172.16.99.2",
//         "area": {
//             "name": "Yeni-Guneshli",
//             "prefix": "99"
//         }
//     },
//     {
//         "id": "88014d7d-f94c-40aa-96f7-9268abc1fcde",
//         "ip_address": "172.16.77.12",
//         "area": {
//             "name": "AVD - SAFARI",
//             "prefix": "77"
//         }
//     },
//     {
//         "id": "55d20804-5917-41bd-9011-028af0ac5864",
//         "ip_address": "172.16.97.4",
//         "area": {
//             "name": "Elnet MTK_(M.Hadi)",
//             "prefix": "97"
//         }
//     },
//     {
//         "id": "64db2604-35b5-43c6-bf41-c21e1ef5971e",
//         "ip_address": "172.16.60.109",
//         "area": {
//             "name": "Xirdalan-1",
//             "prefix": "60"
//         }
//     },
//     {
//         "id": "dd7c6e6a-68e3-426a-a99c-e80545b037da",
//         "ip_address": "172.16.80.1",
//         "area": {
//             "name": "Qara_Qarayev",
//             "prefix": "80"
//         }
//     },
//     {
//         "id": "e6d8dcbb-0827-425d-8f38-1af674e83076",
//         "ip_address": "172.16.60.1",
//         "area": {
//             "name": "Xirdalan-1",
//             "prefix": "60"
//         }
//     },
//     {
//         "id": "66da1e03-6144-4552-8216-e624b8a73f9d",
//         "ip_address": "172.16.60.4",
//         "area": {
//             "name": "Xirdalan-1",
//             "prefix": "60"
//         }
//     },
//     {
//         "id": "a0f896cc-199f-4039-9eae-267b7db42774",
//         "ip_address": "172.16.90.120",
//         "area": {
//             "name": "Yeni Baki",
//             "prefix": "90"
//         }
//     },
//     {
//         "id": "e0a87795-e8ae-493d-9e64-d219e52ecf99",
//         "ip_address": "172.16.78.3",
//         "area": {
//             "name": "Saray_Jasmin",
//             "prefix": "78"
//         }
//     },
//     {
//         "id": "8babda0d-9c38-43ee-9b9c-e20a8e2336c2",
//         "ip_address": "172.16.60.12",
//         "area": {
//             "name": "Xirdalan-1",
//             "prefix": "60"
//         }
//     },
//     {
//         "id": "acb5c3e3-cdd6-4999-897c-af809ba2c61b",
//         "ip_address": "172.16.60.155",
//         "area": {
//             "name": "Xirdalan-1",
//             "prefix": "60"
//         }
//     },
//     {
//         "id": "7308be80-6e76-414f-b145-69c816876d66",
//         "ip_address": "172.16.70.3",
//         "area": {
//             "name": "Sherur",
//             "prefix": "70"
//         }
//     },
//     {
//         "id": "9d26de33-0f1b-467c-a5d8-89e2ed643a41",
//         "ip_address": "172.16.60.60",
//         "area": {
//             "name": "Xirdalan-1",
//             "prefix": "60"
//         }
//     },
//     {
//         "id": "10550bfe-723f-46d2-86e0-d94562a3c88b",
//         "ip_address": "172.16.60.18",
//         "area": {
//             "name": "Xirdalan-1",
//             "prefix": "60"
//         }
//     },
//     {
//         "id": "e4bb3e22-9de2-4173-9ebc-82eb492ae3eb",
//         "ip_address": "172.16.60.123",
//         "area": {
//             "name": "Xirdalan-1",
//             "prefix": "60"
//         }
//     },
//     {
//         "id": "5d92e172-ea64-499d-b531-c59d758dc765",
//         "ip_address": "172.16.60.78",
//         "area": {
//             "name": "Xirdalan-1",
//             "prefix": "60"
//         }
//     },
//     {
//         "id": "f34b291d-d221-4c02-830b-348f18d259ee",
//         "ip_address": "172.16.60.163",
//         "area": {
//             "name": "Xirdalan-1",
//             "prefix": "60"
//         }
//     },
//     {
//         "id": "04e25423-dd75-4742-8c2f-aef0dd27bb88",
//         "ip_address": "172.16.61.183",
//         "area": {
//             "name": "Xirdalan-2",
//             "prefix": "60"
//         }
//     },
//     {
//         "id": "65b2c087-1e18-423a-bfb3-471b88b16da9",
//         "ip_address": "172.16.60.128",
//         "area": {
//             "name": "Xirdalan-1",
//             "prefix": "60"
//         }
//     },
//     {
//         "id": "2bd6263c-2367-4a37-a494-87ae1e0e8900",
//         "ip_address": "172.16.70.8",
//         "area": {
//             "name": "Sherur",
//             "prefix": "70"
//         }
//     },
//     {
//         "id": "8ffd71e0-9b6c-41d5-8bcc-f33e678da159",
//         "ip_address": "172.16.60.110",
//         "area": {
//             "name": "Xirdalan-1",
//             "prefix": "60"
//         }
//     },
//     {
//         "id": "ece2fc5e-1d4b-44da-8786-d86a262cfbeb",
//         "ip_address": "172.16.61.174",
//         "area": {
//             "name": "Xirdalan-2",
//             "prefix": "60"
//         }
//     },
//     {
//         "id": "c33f8ab7-bdc4-4273-a716-070b9a48a866",
//         "ip_address": "172.16.99.88",
//         "area": {
//             "name": "Yeni-Guneshli",
//             "prefix": "99"
//         }
//     },
//     {
//         "id": "279dec70-6d51-40ba-ab5c-355189b61f00",
//         "ip_address": "172.16.70.30",
//         "area": {
//             "name": "Jasmin",
//             "prefix": "70"
//         }
//     },
//     {
//         "id": "47124c5d-202a-435b-a61b-8917f232e7b0",
//         "ip_address": "172.16.93.16",
//         "area": {
//             "name": "Telnov",
//             "prefix": "93"
//         }
//     },
//     {
//         "id": "f9b2d20a-c4db-41a2-9c8b-b313316b882d",
//         "ip_address": "172.16.90.20",
//         "area": {
//             "name": "Yeni Baki",
//             "prefix": "90"
//         }
//     },
//     {
//         "id": "c2a57b5d-017f-46e2-870f-855253d7e8f0",
//         "ip_address": "172.16.90.6",
//         "area": {
//             "name": "Yeni Baki",
//             "prefix": "90"
//         }
//     },
//     {
//         "id": "85ae8217-2189-4fef-b454-67aaa0f09a2b",
//         "ip_address": "172.16.70.32",
//         "area": {
//             "name": "Sherur",
//             "prefix": "70"
//         }
//     },
//     {
//         "id": "cb984e83-ce29-40d9-b6e6-9b54ddd937ba",
//         "ip_address": "172.16.80.225",
//         "area": {
//             "name": "Qara_Qarayev",
//             "prefix": "80"
//         }
//     },
//     {
//         "id": "0d89527d-eb5c-4460-b0cb-5dca92d6a0e9",
//         "ip_address": "172.16.99.60",
//         "area": {
//             "name": "Yeni-Guneshli",
//             "prefix": "99"
//         }
//     },
//     {
//         "id": "8d9d1548-0756-4731-88ca-61fd12be3029",
//         "ip_address": "172.16.99.172",
//         "area": {
//             "name": "Yeni-Guneshli",
//             "prefix": "99"
//         }
//     },
//     {
//         "id": "7edd8c39-e0e5-4200-b17d-ff6bbcc606fb",
//         "ip_address": "172.16.40.2",
//         "area": {
//             "name": "Zerdabi_74A",
//             "prefix": "40"
//         }
//     },
//     {
//         "id": "109d014e-163c-40a4-9768-755ac3520868",
//         "ip_address": "172.16.61.175",
//         "area": {
//             "name": "Xirdalan-2",
//             "prefix": "60"
//         }
//     },
//     {
//         "id": "87280d00-8080-40bb-867f-3813c5d73fea",
//         "ip_address": "172.16.99.8",
//         "area": {
//             "name": "Yeni-Guneshli",
//             "prefix": "99"
//         }
//     },
//     {
//         "id": "e974715e-a7ad-4749-9fb7-7dd5b7a894c2",
//         "ip_address": "172.16.60.161",
//         "area": {
//             "name": "Xirdalan-1",
//             "prefix": "60"
//         }
//     },
//     {
//         "id": "f870f1f5-041b-4107-9fdc-a71e9065e05f",
//         "ip_address": "172.16.93.11",
//         "area": {
//             "name": "Telnov",
//             "prefix": "93"
//         }
//     },
//     {
//         "id": "ba4a5522-4d70-4f1a-b1dd-2ef4ad92fa1f",
//         "ip_address": "172.16.60.178",
//         "area": {
//             "name": "Xirdalan-1",
//             "prefix": "60"
//         }
//     },
//     {
//         "id": "3a637855-976b-40fd-b4d9-ccc0588bba12",
//         "ip_address": "172.16.52.216",
//         "area": {
//             "name": "Azadliq",
//             "prefix": "52"
//         }
//     },
//     {
//         "id": "f409ca9d-014e-41d8-8c16-b5b1fa983c74",
//         "ip_address": "172.16.90.124",
//         "area": {
//             "name": "Yeni Baki",
//             "prefix": "90"
//         }
//     },
//     {
//         "id": "3c5b5a31-f373-49f5-8056-2bf355c4abab",
//         "ip_address": "172.16.60.184",
//         "area": {
//             "name": "Xirdalan-1",
//             "prefix": "60"
//         }
//     },
//     {
//         "id": "e1aa67f6-fbe9-4b60-a301-e5f0f308e7d1",
//         "ip_address": "172.16.61.177",
//         "area": {
//             "name": "Xirdalan-2",
//             "prefix": "60"
//         }
//     },
//     {
//         "id": "1960156c-4b6c-4058-bcae-7403a418ad3d",
//         "ip_address": "172.16.61.142",
//         "area": {
//             "name": "Xirdalan-2",
//             "prefix": "60"
//         }
//     },
//     {
//         "id": "8b15caaa-f7f3-4b64-8917-23773daeac59",
//         "ip_address": "172.16.61.209",
//         "area": {
//             "name": "Xirdalan-2",
//             "prefix": "60"
//         }
//     },
//     {
//         "id": "a351939f-cfff-47d2-9d3a-f80226d2c0e2",
//         "ip_address": "172.16.61.201",
//         "area": {
//             "name": "Xirdalan-2",
//             "prefix": "60"
//         }
//     },
//     {
//         "id": "de31362c-3603-4510-a538-af65f8703860",
//         "ip_address": "172.16.90.3",
//         "area": {
//             "name": "Yeni Baki",
//             "prefix": "90"
//         }
//     },
//     {
//         "id": "ffeb9f2a-480e-4ce6-8901-7bc14077c199",
//         "ip_address": "172.16.61.192",
//         "area": {
//             "name": "Xirdalan-2",
//             "prefix": "60"
//         }
//     },
//     {
//         "id": "6e0add4b-4ea9-4f71-9381-deefb7048817",
//         "ip_address": "172.16.70.16",
//         "area": {
//             "name": "Sherur",
//             "prefix": "70"
//         }
//     },
//     {
//         "id": "c9d6ef5a-9797-4a2f-b6bf-ab72f711f2f0",
//         "ip_address": "172.16.80.60",
//         "area": {
//             "name": "Qara_Qarayev",
//             "prefix": "80"
//         }
//     },
//     {
//         "id": "30bdb640-9eb4-4f07-b548-31cd74c82f5a",
//         "ip_address": "172.16.61.233",
//         "area": {
//             "name": "Xirdalan-2",
//             "prefix": "60"
//         }
//     },
//     {
//         "id": "7f6b5442-08f6-425c-835d-09f2db4a090b",
//         "ip_address": "172.16.60.125",
//         "area": {
//             "name": "Xirdalan-1",
//             "prefix": "60"
//         }
//     },
//     {
//         "id": "00bb30a5-57b0-4ffa-bcdb-82690a64e64a",
//         "ip_address": "172.16.90.11",
//         "area": {
//             "name": "Yeni Baki",
//             "prefix": "90"
//         }
//     },
//     {
//         "id": "67228b80-f6e1-444c-b8c0-7067f192e55e",
//         "ip_address": "172.16.60.71",
//         "area": {
//             "name": "Xirdalan-1",
//             "prefix": "60"
//         }
//     },
//     {
//         "id": "b09d7487-4d55-40ab-8bf3-8caebebb109f",
//         "ip_address": "172.16.60.67",
//         "area": {
//             "name": "Xirdalan-1",
//             "prefix": "60"
//         }
//     },
//     {
//         "id": "8f8ea364-8efa-4706-96e5-d250f68734ce",
//         "ip_address": "172.16.60.58",
//         "area": {
//             "name": "Xirdalan-1",
//             "prefix": "60"
//         }
//     },
//     {
//         "id": "bd5aec60-90db-47f1-84f1-256411cd1ca5",
//         "ip_address": "172.16.60.130",
//         "area": {
//             "name": "Xirdalan-1",
//             "prefix": "60"
//         }
//     },
//     {
//         "id": "d7a993e0-626b-4881-8a21-a25e3946d2d2",
//         "ip_address": "172.16.61.173",
//         "area": {
//             "name": "Xirdalan-2",
//             "prefix": "60"
//         }
//     },
//     {
//         "id": "913fa635-b2d9-4d9f-86d9-ea6781731f3b",
//         "ip_address": "172.16.70.28",
//         "area": {
//             "name": "Sherur",
//             "prefix": "70"
//         }
//     },
//     {
//         "id": "468f410c-9a97-4229-b327-f9920bda5540",
//         "ip_address": "172.16.60.68",
//         "area": {
//             "name": "Xirdalan-1",
//             "prefix": "60"
//         }
//     },
//     {
//         "id": "c0e7ba40-96bf-40ee-99ad-d5b8ff40d1a7",
//         "ip_address": "172.16.80.186",
//         "area": {
//             "name": "Qara_Qarayev",
//             "prefix": "80"
//         }
//     },
//     {
//         "id": "02a46837-fb75-40cd-ba8d-3d481535d0d9",
//         "ip_address": "172.16.61.34",
//         "area": {
//             "name": "Xirdalan-2",
//             "prefix": "60"
//         }
//     },
//     {
//         "id": "4ba831b3-be12-463d-8550-cbfbe0f923a7",
//         "ip_address": "172.16.93.110",
//         "area": {
//             "name": "Telnov",
//             "prefix": "93"
//         }
//     },
//     {
//         "id": "6bad3739-fedc-41c0-8cd4-218894763ad6",
//         "ip_address": "172.16.60.217",
//         "area": {
//             "name": "Xirdalan-1",
//             "prefix": "60"
//         }
//     },
//     {
//         "id": "bb4152d5-7e98-46a5-8074-8ebe3e71c9eb",
//         "ip_address": "172.16.61.172",
//         "area": {
//             "name": "Xirdalan-2",
//             "prefix": "60"
//         }
//     },
//     {
//         "id": "9a661d84-8185-44e5-9962-52078de54e40",
//         "ip_address": "172.16.80.2",
//         "area": {
//             "name": "Qara_Qarayev",
//             "prefix": "80"
//         }
//     },
//     {
//         "id": "b8a8abf8-3f2c-4cee-b94b-3ed94cefb82b",
//         "ip_address": "172.16.60.56",
//         "area": {
//             "name": "Xirdalan-1",
//             "prefix": "60"
//         }
//     },
//     {
//         "id": "15025952-e42d-427f-b5db-5868fff43b3f",
//         "ip_address": "172.16.80.228",
//         "area": {
//             "name": "Qara_Qarayev",
//             "prefix": "80"
//         }
//     },
//     {
//         "id": "636e2729-ca7b-4566-bd75-bcbc115c1a29",
//         "ip_address": "172.16.90.121",
//         "area": {
//             "name": "Yeni Baki",
//             "prefix": "90"
//         }
//     },
//     {
//         "id": "70a54eed-7556-4d05-bb84-7fa7dfe0043e",
//         "ip_address": "172.16.90.4",
//         "area": {
//             "name": "Yeni Baki",
//             "prefix": "90"
//         }
//     },
//     {
//         "id": "123de7f1-59e4-4d8a-94bb-6139d1aeecc8",
//         "ip_address": "172.16.60.182",
//         "area": {
//             "name": "Xirdalan-1",
//             "prefix": "60"
//         }
//     },
//     {
//         "id": "45faec4d-3981-4054-a22f-06dc89570c2c",
//         "ip_address": "172.16.91.17",
//         "area": {
//             "name": "Xudu_Memmedov",
//             "prefix": "91"
//         }
//     },
//     {
//         "id": "9d53768b-f1ea-4f8a-af01-ceca7f6d34be",
//         "ip_address": "172.16.90.42",
//         "area": {
//             "name": "Yeni Baki",
//             "prefix": "90"
//         }
//     },
//     {
//         "id": "22d3819c-3a67-4beb-87ed-2ea7f0e127dd",
//         "ip_address": "172.16.92.95",
//         "area": {
//             "name": "Nargile",
//             "prefix": "92"
//         }
//     },
//     {
//         "id": "a75ba62e-c43c-4af0-bc37-4fcf351a52b0",
//         "ip_address": "172.16.60.59",
//         "area": {
//             "name": "Xirdalan-1",
//             "prefix": "60"
//         }
//     },
//     {
//         "id": "eda009bd-8578-4c3f-9398-f15fc9142893",
//         "ip_address": "172.16.60.42",
//         "area": {
//             "name": "Xirdalan-1",
//             "prefix": "60"
//         }
//     },
//     {
//         "id": "6336b210-5ba4-42c2-beed-86e73e1f4140",
//         "ip_address": "172.16.60.49",
//         "area": {
//             "name": "Xirdalan-1",
//             "prefix": "60"
//         }
//     },
//     {
//         "id": "4b117394-a706-4cb6-a36c-e843ed4840cb",
//         "ip_address": "172.16.60.43",
//         "area": {
//             "name": "Xirdalan-1",
//             "prefix": "60"
//         }
//     },
//     {
//         "id": "77bea7c6-9086-42d9-80e9-2bc9c09e5a2e",
//         "ip_address": "172.16.90.56",
//         "area": {
//             "name": "Yeni Baki",
//             "prefix": "90"
//         }
//     },
//     {
//         "id": "a88ee857-765d-4427-873a-622968746a41",
//         "ip_address": "172.16.60.54",
//         "area": {
//             "name": "Xirdalan-1",
//             "prefix": "60"
//         }
//     },
//     {
//         "id": "1e6e3f32-21c2-4b0d-994a-07abf07c183c",
//         "ip_address": "172.16.60.247",
//         "area": {
//             "name": "Xirdalan-1",
//             "prefix": "60"
//         }
//     },
//     {
//         "id": "d49123e6-b493-4ee2-90bd-eb037cceeef8",
//         "ip_address": "172.16.60.190",
//         "area": {
//             "name": "Xirdalan-1",
//             "prefix": "60"
//         }
//     },
//     {
//         "id": "52d92e7d-bf4a-4b67-ae89-3fa0a4e52c70",
//         "ip_address": "172.16.60.129",
//         "area": {
//             "name": "Xirdalan-1",
//             "prefix": "60"
//         }
//     },
//     {
//         "id": "1f127fae-fb8d-493f-a0d1-8cdbc984ddad",
//         "ip_address": "172.16.60.164",
//         "area": {
//             "name": "Xirdalan-1",
//             "prefix": "60"
//         }
//     },
//     {
//         "id": "4b3bab50-c2b1-4907-9c28-4bd1ce336e1f",
//         "ip_address": "172.16.60.17",
//         "area": {
//             "name": "Xirdalan-1",
//             "prefix": "60"
//         }
//     },
//     {
//         "id": "345b2c84-9652-4b44-a9d5-b457bb181777",
//         "ip_address": "172.16.60.21",
//         "area": {
//             "name": "Xirdalan-1",
//             "prefix": "60"
//         }
//     },
//     {
//         "id": "f92ce75e-cd47-41b1-9ea3-54eddfb8936b",
//         "ip_address": "172.16.60.22",
//         "area": {
//             "name": "Xirdalan-1",
//             "prefix": "60"
//         }
//     },
//     {
//         "id": "1bb63de3-7039-445f-a87a-2cfb014395e1",
//         "ip_address": "172.16.60.83",
//         "area": {
//             "name": "Xirdalan-1",
//             "prefix": "60"
//         }
//     },
//     {
//         "id": "a4be437b-2f12-4b86-9c26-4c6729fdaee0",
//         "ip_address": "172.16.60.81",
//         "area": {
//             "name": "Xirdalan-1",
//             "prefix": "60"
//         }
//     },
//     {
//         "id": "3b3c63e8-c60d-44b7-a137-0512fb46afcd",
//         "ip_address": "172.16.60.79",
//         "area": {
//             "name": "Xirdalan-1",
//             "prefix": "60"
//         }
//     },
//     {
//         "id": "15e4c9dd-bd52-495a-8a2b-08fe59362034",
//         "ip_address": "172.16.60.65",
//         "area": {
//             "name": "Xirdalan-1",
//             "prefix": "60"
//         }
//     },
//     {
//         "id": "89608d8f-dfce-47da-ac67-1f1020384db4",
//         "ip_address": "172.16.60.69",
//         "area": {
//             "name": "Xirdalan-1",
//             "prefix": "60"
//         }
//     },
//     {
//         "id": "0b77b74d-4f8c-41c9-8d8c-2c4392812cd5",
//         "ip_address": "172.16.60.120",
//         "area": {
//             "name": "Xirdalan-1",
//             "prefix": "60"
//         }
//     },
//     {
//         "id": "93ffb98d-789b-4a01-86ae-f33eed5b250d",
//         "ip_address": "172.16.60.63",
//         "area": {
//             "name": "Xirdalan-1",
//             "prefix": "60"
//         }
//     },
//     {
//         "id": "642ef342-e505-4dc1-b14a-af2b38a19931",
//         "ip_address": "172.16.60.61",
//         "area": {
//             "name": "Xirdalan-1",
//             "prefix": "60"
//         }
//     },
//     {
//         "id": "e816f5c2-be16-4eef-8c60-a91ea339de58",
//         "ip_address": "172.16.60.13",
//         "area": {
//             "name": "Xirdalan-1",
//             "prefix": "60"
//         }
//     },
//     {
//         "id": "1c2f6c04-2493-4162-8f8f-92b2d05d0fe1",
//         "ip_address": "172.16.60.48",
//         "area": {
//             "name": "Xirdalan-1",
//             "prefix": "60"
//         }
//     },
//     {
//         "id": "c151896c-6146-4698-85c6-b8ade104c71b",
//         "ip_address": "172.16.61.212",
//         "area": {
//             "name": "Xirdalan-2",
//             "prefix": "60"
//         }
//     },
//     {
//         "id": "72887283-b9bd-4d34-b5ab-fa456a99761d",
//         "ip_address": "172.16.60.47",
//         "area": {
//             "name": "Xirdalan-1",
//             "prefix": "60"
//         }
//     },
//     {
//         "id": "01cdcd10-8de1-4297-9854-53d19204663c",
//         "ip_address": "172.16.60.46",
//         "area": {
//             "name": "Xirdalan-1",
//             "prefix": "60"
//         }
//     },
//     {
//         "id": "917e8bbd-b5f2-4dee-b934-295fdd409a78",
//         "ip_address": "172.16.60.132",
//         "area": {
//             "name": "Xirdalan-1",
//             "prefix": "60"
//         }
//     },
//     {
//         "id": "431c0c4d-3d2e-4afe-884b-1a2a8c9d1e48",
//         "ip_address": "172.16.60.116",
//         "area": {
//             "name": "Xirdalan-1",
//             "prefix": "60"
//         }
//     },
//     {
//         "id": "73b930f7-2a0d-41da-95af-a7ddbc447737",
//         "ip_address": "172.16.60.82",
//         "area": {
//             "name": "Xirdalan-1",
//             "prefix": "60"
//         }
//     },
//     {
//         "id": "6a6144ab-754c-4b97-84cb-097207d8f9fa",
//         "ip_address": "172.16.60.51",
//         "area": {
//             "name": "Xirdalan-1",
//             "prefix": "60"
//         }
//     },
//     {
//         "id": "5b8726a0-1c65-42b1-9346-901f27938e97",
//         "ip_address": "172.16.90.13",
//         "area": {
//             "name": "Yeni Baki",
//             "prefix": "90"
//         }
//     },
//     {
//         "id": "b659618d-9c52-418a-b9be-3f3a6beda005",
//         "ip_address": "172.16.61.220",
//         "area": {
//             "name": "Xirdalan-2",
//             "prefix": "60"
//         }
//     },
//     {
//         "id": "cf3da4e8-0a56-4032-a97b-1895cdeaa221",
//         "ip_address": "172.16.61.226",
//         "area": {
//             "name": "Xirdalan-2",
//             "prefix": "60"
//         }
//     },
//     {
//         "id": "c2dc306a-a252-4561-b728-e5622969cb21",
//         "ip_address": "172.16.93.10",
//         "area": {
//             "name": "Telnov",
//             "prefix": "93"
//         }
//     },
//     {
//         "id": "290bd19a-ffc6-41ea-b44b-4cf4d5d311a4",
//         "ip_address": "172.16.70.172",
//         "area": {
//             "name": "Elchin_Eziz (Talibli)",
//             "prefix": "70"
//         }
//     },
//     {
//         "id": "c1b9d061-0209-481e-8c1c-73362865e404",
//         "ip_address": "172.16.90.103",
//         "area": {
//             "name": "Yeni Baki",
//             "prefix": "90"
//         }
//     },
//     {
//         "id": "b5334a4c-1540-43ad-9372-32c22fb8d08e",
//         "ip_address": "172.16.60.28",
//         "area": {
//             "name": "Xirdalan-1",
//             "prefix": "60"
//         }
//     },
//     {
//         "id": "e5297db0-6cdd-4142-942a-611865cfedcf",
//         "ip_address": "172.16.61.150",
//         "area": {
//             "name": "Xirdalan-2",
//             "prefix": "60"
//         }
//     },
//     {
//         "id": "ffd863c7-8342-496a-af88-e966f68e2cd7",
//         "ip_address": "172.16.99.79",
//         "area": {
//             "name": "Yeni-Guneshli",
//             "prefix": "99"
//         }
//     },
//     {
//         "id": "05c63956-c529-4bae-9c64-0881727d97b2",
//         "ip_address": "172.16.80.15",
//         "area": {
//             "name": "Qara_Qarayev",
//             "prefix": "80"
//         }
//     },
//     {
//         "id": "54f41b2c-db88-46cb-a197-8d43d3bc8c70",
//         "ip_address": "172.16.61.215",
//         "area": {
//             "name": "Xirdalan-2",
//             "prefix": "60"
//         }
//     },
//     {
//         "id": "b471c442-4685-4b7b-aa70-e093e54b4d43",
//         "ip_address": "172.16.60.72",
//         "area": {
//             "name": "Xirdalan-1",
//             "prefix": "60"
//         }
//     },
//     {
//         "id": "58ee40dc-2b89-4771-b17a-0d82d2f11b65",
//         "ip_address": "172.16.60.73",
//         "area": {
//             "name": "Xirdalan-1",
//             "prefix": "60"
//         }
//     },
//     {
//         "id": "98c5e765-b2d0-4075-b3f2-32d79c441657",
//         "ip_address": "172.16.99.158",
//         "area": {
//             "name": "Yeni-Guneshli",
//             "prefix": "99"
//         }
//     },
//     {
//         "id": "2a97615e-9211-4e97-a446-f3136bab7958",
//         "ip_address": "172.16.61.45",
//         "area": {
//             "name": "Xirdalan-2",
//             "prefix": "60"
//         }
//     },
//     {
//         "id": "fd6b235e-ee78-484c-9ee1-80c32f6475ff",
//         "ip_address": "172.16.61.159",
//         "area": {
//             "name": "Xirdalan-2",
//             "prefix": "60"
//         }
//     },
//     {
//         "id": "c2416ac1-e71c-4a87-bc57-4374d6b028e6",
//         "ip_address": "172.16.61.20",
//         "area": {
//             "name": "Xirdalan-2",
//             "prefix": "60"
//         }
//     },
//     {
//         "id": "72445d65-49a7-4fda-87aa-c4a56d0b76e9",
//         "ip_address": "172.16.61.171",
//         "area": {
//             "name": "Xirdalan-2",
//             "prefix": "60"
//         }
//     },
//     {
//         "id": "1b90e5f5-b3b4-4fb4-a812-74c1b1d416ec",
//         "ip_address": "172.16.73.123",
//         "area": {
//             "name": "Insaatcilar",
//             "prefix": "73"
//         }
//     },
//     {
//         "id": "af52af4b-6d6c-459a-aaa5-22537ac4eb19",
//         "ip_address": "172.16.90.41",
//         "area": {
//             "name": "Yeni Baki",
//             "prefix": "90"
//         }
//     },
//     {
//         "id": "4272f3ec-eb38-4f42-94a4-54b62bc19b90",
//         "ip_address": "172.16.99.223",
//         "area": {
//             "name": "Yeni-Guneshli",
//             "prefix": "99"
//         }
//     },
//     {
//         "id": "4f7be645-8d33-41ac-9e1f-933c352b7d1c",
//         "ip_address": "172.16.31.161",
//         "area": {
//             "name": "Bileceri",
//             "prefix": "31"
//         }
//     },
//     {
//         "id": "95d2f47e-a096-43e9-8e2b-2082dad6c341",
//         "ip_address": "172.16.60.180",
//         "area": {
//             "name": "Xirdalan-1",
//             "prefix": "60"
//         }
//     },
//     {
//         "id": "76ffef35-0b46-4b4c-8096-4f2f2b11fa74",
//         "ip_address": "172.16.80.10",
//         "area": {
//             "name": "Qara_Qarayev",
//             "prefix": "80"
//         }
//     },
//     {
//         "id": "5b6af651-e0c4-4e86-b0c7-e956e8908542",
//         "ip_address": "172.16.70.29",
//         "area": {
//             "name": "Sherur",
//             "prefix": "70"
//         }
//     },
//     {
//         "id": "9d20b270-9522-47ec-880b-356f494cc52d",
//         "ip_address": "172.16.70.24",
//         "area": {
//             "name": "Sherur",
//             "prefix": "70"
//         }
//     },
//     {
//         "id": "bc8f406e-142c-4b43-89e1-2f0a878c8eb5",
//         "ip_address": "172.16.47.2",
//         "area": {
//             "name": "Bayil",
//             "prefix": "47"
//         }
//     },
//     {
//         "id": "37c2452a-f07c-4d57-9b95-6b92e45eee22",
//         "ip_address": "172.16.47.4",
//         "area": {
//             "name": "Bayil",
//             "prefix": "47"
//         }
//     },
//     {
//         "id": "159637d4-4ba4-4fa3-b942-ee11a48bb450",
//         "ip_address": "172.16.55.3",
//         "area": {
//             "name": "Movsum Senani",
//             "prefix": "55"
//         }
//     },
//     {
//         "id": "da27f5e2-a9a9-4fbe-92de-3359ad29219b",
//         "ip_address": "172.16.99.10",
//         "area": {
//             "name": "Yeni-Guneshli",
//             "prefix": "99"
//         }
//     },
//     {
//         "id": "d9075b35-e47e-4cb1-b233-df7d634cc0d4",
//         "ip_address": "172.16.70.27",
//         "area": {
//             "name": "Sherur",
//             "prefix": "70"
//         }
//     },
//     {
//         "id": "f8f23631-916c-49e6-82e6-40bb50e18c08",
//         "ip_address": "172.16.47.7",
//         "area": {
//             "name": "Bayil",
//             "prefix": "47"
//         }
//     },
//     {
//         "id": "842b5ea1-c530-4401-8b4f-0011b331c6a9",
//         "ip_address": "172.16.60.107",
//         "area": {
//             "name": "Xirdalan-1",
//             "prefix": "60"
//         }
//     },
//     {
//         "id": "f18034cf-9c42-4b25-b0bc-90dca9e7fc76",
//         "ip_address": "172.16.60.55",
//         "area": {
//             "name": "Xirdalan-1",
//             "prefix": "60"
//         }
//     },
//     {
//         "id": "81812482-d0dd-44fb-902b-7f28946d8c7b",
//         "ip_address": "172.16.60.23",
//         "area": {
//             "name": "Xirdalan-1",
//             "prefix": "60"
//         }
//     },
//     {
//         "id": "0b276db8-2b1a-41a8-8f7f-f2a87e6b6a85",
//         "ip_address": "172.16.60.86",
//         "area": {
//             "name": "Xirdalan-1",
//             "prefix": "60"
//         }
//     },
//     {
//         "id": "61c7bfaa-e17a-4942-bf89-26d67c95a2d4",
//         "ip_address": "172.16.60.77",
//         "area": {
//             "name": "Xirdalan-1",
//             "prefix": "60"
//         }
//     },
//     {
//         "id": "1d734771-5b54-422f-ae47-8b674a0a324f",
//         "ip_address": "172.16.90.57",
//         "area": {
//             "name": "Yeni Baki",
//             "prefix": "90"
//         }
//     },
//     {
//         "id": "2674aa52-de57-41ae-9d3f-92834aeb3f69",
//         "ip_address": "172.16.99.11",
//         "area": {
//             "name": "Yeni-Guneshli",
//             "prefix": "99"
//         }
//     },
//     {
//         "id": "85354f92-b6f7-4bd0-8334-cda5cfdea4c2",
//         "ip_address": "172.16.60.57",
//         "area": {
//             "name": "Xirdalan-1",
//             "prefix": "60"
//         }
//     },
//     {
//         "id": "22a19d54-0ff9-405a-9c55-d32b3d29d923",
//         "ip_address": "172.16.60.248",
//         "area": {
//             "name": "Xirdalan-1",
//             "prefix": "60"
//         }
//     },
//     {
//         "id": "58aad38f-8c0f-4b0d-81cc-75ea9ac56bb4",
//         "ip_address": "172.16.99.153",
//         "area": {
//             "name": "Yeni-Guneshli",
//             "prefix": "99"
//         }
//     },
//     {
//         "id": "b5fe2199-b12a-4b1e-a2c9-7afda37f6791",
//         "ip_address": "172.16.61.151",
//         "area": {
//             "name": "Xirdalan-2",
//             "prefix": "60"
//         }
//     },
//     {
//         "id": "b519f1b0-2c42-47e5-9401-1babd0969906",
//         "ip_address": "172.16.61.170",
//         "area": {
//             "name": "Xirdalan-2",
//             "prefix": "60"
//         }
//     },
//     {
//         "id": "7f76e0df-6ad6-47d4-8d84-5ac56dfda6a0",
//         "ip_address": "172.16.60.117",
//         "area": {
//             "name": "Xirdalan-1",
//             "prefix": "60"
//         }
//     },
//     {
//         "id": "e5bd9f5f-77e0-4026-a77d-9c371731f01a",
//         "ip_address": "172.16.90.2",
//         "area": {
//             "name": "Yeni Baki",
//             "prefix": "90"
//         }
//     },
//     {
//         "id": "fc396183-6341-4a5b-a668-73b66906b47e",
//         "ip_address": "172.16.90.7",
//         "area": {
//             "name": "Yeni Baki",
//             "prefix": "90"
//         }
//     },
//     {
//         "id": "680ea806-7275-404b-9d5d-81f13dce939b",
//         "ip_address": "172.16.90.90",
//         "area": {
//             "name": "Yeni Baki",
//             "prefix": "90"
//         }
//     },
//     {
//         "id": "1c86104e-4f5e-4e59-a18b-d6cf6cac72cb",
//         "ip_address": "172.16.80.117",
//         "area": {
//             "name": "Qara_Qarayev",
//             "prefix": "80"
//         }
//     },
//     {
//         "id": "ddcb0426-4761-4291-a40e-2a40e22646cc",
//         "ip_address": "172.16.31.19",
//         "area": {
//             "name": "Bileceri",
//             "prefix": "31"
//         }
//     },
//     {
//         "id": "30c2fe66-eae1-485c-b444-582b83f132b8",
//         "ip_address": "172.16.80.174",
//         "area": {
//             "name": "Qara_Qarayev",
//             "prefix": "80"
//         }
//     },
//     {
//         "id": "60524492-b353-4eb4-ab77-762d8167482f",
//         "ip_address": "172.16.60.119",
//         "area": {
//             "name": "Xirdalan-1",
//             "prefix": "60"
//         }
//     },
//     {
//         "id": "61f40069-6dcd-410f-bc17-b04e9f9ba2cc",
//         "ip_address": "172.16.70.13",
//         "area": {
//             "name": "Xiyabani_(Nuray)",
//             "prefix": "70"
//         }
//     },
//     {
//         "id": "9414fd67-3fd9-4814-8997-556656d51adb",
//         "ip_address": "172.16.60.91",
//         "area": {
//             "name": "Xirdalan-1",
//             "prefix": "60"
//         }
//     },
//     {
//         "id": "26520d35-a73d-4c14-9af8-9fb441eb25de",
//         "ip_address": "172.16.60.16",
//         "area": {
//             "name": "Xirdalan-1",
//             "prefix": "60"
//         }
//     },
//     {
//         "id": "a48b910f-1c45-49c1-b1d7-7d9260ebb6e9",
//         "ip_address": "172.16.70.12",
//         "area": {
//             "name": "Sherur",
//             "prefix": "70"
//         }
//     },
//     {
//         "id": "7acf596a-07cf-4387-b5bb-c9ecd145bd85",
//         "ip_address": "172.16.90.122",
//         "area": {
//             "name": "Yeni Baki",
//             "prefix": "90"
//         }
//     },
//     {
//         "id": "0a3f5e5b-6a1f-4ec4-8e45-46de3efd2bf4",
//         "ip_address": "172.16.60.80",
//         "area": {
//             "name": "Xirdalan-1",
//             "prefix": "60"
//         }
//     },
//     {
//         "id": "057a84cb-2aa9-4b88-8a2c-d52871303f47",
//         "ip_address": "172.16.60.84",
//         "area": {
//             "name": "Xirdalan-1",
//             "prefix": "60"
//         }
//     },
//     {
//         "id": "a7d6f498-6690-49c4-a54f-2ced8648dd8e",
//         "ip_address": "172.16.90.5",
//         "area": {
//             "name": "Yeni Baki",
//             "prefix": "90"
//         }
//     },
//     {
//         "id": "c873ab80-3aad-4912-a433-d7f37a93f6f5",
//         "ip_address": "172.16.60.181",
//         "area": {
//             "name": "Xirdalan-1",
//             "prefix": "60"
//         }
//     },
//     {
//         "id": "a3811c03-b009-484b-ac38-e6dde33cb5d6",
//         "ip_address": "172.16.80.161",
//         "area": {
//             "name": "Qara_Qarayev",
//             "prefix": "80"
//         }
//     },
//     {
//         "id": "cf6707fd-8f34-4677-bc22-05dc0ff4a85b",
//         "ip_address": "172.16.80.230",
//         "area": {
//             "name": "Qara_Qarayev",
//             "prefix": "80"
//         }
//     },
//     {
//         "id": "325c3ed5-c2be-4a37-b6f7-146288b19676",
//         "ip_address": "172.16.99.184",
//         "area": {
//             "name": "Yeni-Guneshli",
//             "prefix": "99"
//         }
//     },
//     {
//         "id": "0d2ed892-b037-4024-9799-6de7dd01dfe4",
//         "ip_address": "172.16.60.191",
//         "area": {
//             "name": "Xirdalan-1",
//             "prefix": "60"
//         }
//     },
//     {
//         "id": "8feea409-2b6e-4358-b3d5-ccee948fdb76",
//         "ip_address": "172.16.47.5",
//         "area": {
//             "name": "Bayil",
//             "prefix": "47"
//         }
//     },
//     {
//         "id": "de0189a8-4b1f-4100-9b96-e4ccd5407ede",
//         "ip_address": "172.16.60.41",
//         "area": {
//             "name": "Xirdalan-1",
//             "prefix": "60"
//         }
//     },
//     {
//         "id": "ae802482-1087-4122-a746-aa9ce6f2362a",
//         "ip_address": "172.16.80.19",
//         "area": {
//             "name": "Qara_Qarayev",
//             "prefix": "80"
//         }
//     },
//     {
//         "id": "3b87b531-5654-4a2e-8a78-03a76dcc0ed7",
//         "ip_address": "172.16.53.205",
//         "area": {
//             "name": "Koroglu_Rehimov",
//             "prefix": "53"
//         }
//     },
//     {
//         "id": "7cad1391-f0cf-437e-a9b6-6c99ff89316d",
//         "ip_address": "172.16.60.100",
//         "area": {
//             "name": "Xirdalan-1",
//             "prefix": "60"
//         }
//     },
//     {
//         "id": "906a299b-e880-45e8-882c-610d89b7b6fc",
//         "ip_address": "172.16.61.176",
//         "area": {
//             "name": "Xirdalan-2",
//             "prefix": "60"
//         }
//     },
//     {
//         "id": "cdf1f78d-b3ab-46e4-92ad-8eb6b0d2d6bf",
//         "ip_address": "172.16.60.115",
//         "area": {
//             "name": "Xirdalan-1",
//             "prefix": "60"
//         }
//     },
//     {
//         "id": "871cebee-fff2-4649-910c-b37fd699654a",
//         "ip_address": "172.16.60.196",
//         "area": {
//             "name": "Xirdalan-1",
//             "prefix": "60"
//         }
//     },
//     {
//         "id": "5171af2a-392c-4071-8890-74908669eb03",
//         "ip_address": "172.16.60.19",
//         "area": {
//             "name": "Xirdalan-1",
//             "prefix": "60"
//         }
//     },
//     {
//         "id": "f8de3fd1-67b3-492c-871f-746056c57c0a",
//         "ip_address": "172.16.60.50",
//         "area": {
//             "name": "Xirdalan-1",
//             "prefix": "60"
//         }
//     },
//     {
//         "id": "f8fd6ed7-ea2b-4c58-a888-4a17c745ceac",
//         "ip_address": "172.16.60.24",
//         "area": {
//             "name": "Xirdalan-1",
//             "prefix": "60"
//         }
//     },
//     {
//         "id": "0d950c38-6319-4db2-8ea5-1d179590f891",
//         "ip_address": "172.16.60.40",
//         "area": {
//             "name": "Xirdalan-1",
//             "prefix": "60"
//         }
//     },
//     {
//         "id": "b222ff8a-79fe-4a04-aef7-cf3b6a96c988",
//         "ip_address": "172.16.60.179",
//         "area": {
//             "name": "Xirdalan-1",
//             "prefix": "60"
//         }
//     },
//     {
//         "id": "cd9a11e4-ac3d-4db7-b814-6c75f0b1b107",
//         "ip_address": "172.16.61.211",
//         "area": {
//             "name": "Xirdalan-2",
//             "prefix": "60"
//         }
//     },
//     {
//         "id": "9d8b093d-2f99-40d0-b933-c82ac401e722",
//         "ip_address": "172.16.61.218",
//         "area": {
//             "name": "Xirdalan-2",
//             "prefix": "60"
//         }
//     },
//     {
//         "id": "bd1d6129-e44e-40f7-bfdd-ea4d95e02fc0",
//         "ip_address": "172.16.61.189",
//         "area": {
//             "name": "Xirdalan-2",
//             "prefix": "60"
//         }
//     },
//     {
//         "id": "ed02a37b-c066-4271-87fc-18509396d838",
//         "ip_address": "172.16.60.9",
//         "area": {
//             "name": "Xirdalan-1",
//             "prefix": "60"
//         }
//     },
//     {
//         "id": "bb4fe82e-912e-450f-becb-8bd8b941385d",
//         "ip_address": "172.16.70.15",
//         "area": {
//             "name": "Sherur",
//             "prefix": "70"
//         }
//     },
//     {
//         "id": "47a4b1ca-11e0-4db2-abb2-a82674065531",
//         "ip_address": "172.16.70.31",
//         "area": {
//             "name": "Jasmin",
//             "prefix": "70"
//         }
//     },
//     {
//         "id": "fdd1fa62-567e-4650-9db4-15a55c3c2c55",
//         "ip_address": "172.16.61.144",
//         "area": {
//             "name": "Xirdalan-2",
//             "prefix": "60"
//         }
//     },
//     {
//         "id": "23723315-74d4-43d0-8fc1-df40da515bf1",
//         "ip_address": "172.16.90.46",
//         "area": {
//             "name": "Yeni Baki",
//             "prefix": "90"
//         }
//     },
//     {
//         "id": "52dd1e1c-9d9e-4fae-993e-6017a682ce65",
//         "ip_address": "172.16.90.50",
//         "area": {
//             "name": "Yeni Baki",
//             "prefix": "90"
//         }
//     },
//     {
//         "id": "de766f69-4847-4f05-94f6-2e9f3f18fcbd",
//         "ip_address": "172.16.73.106",
//         "area": {
//             "name": "Insaatcilar",
//             "prefix": "73"
//         }
//     },
//     {
//         "id": "730d14fa-292e-49aa-bc7f-bb33133827f4",
//         "ip_address": "172.16.76.3",
//         "area": {
//             "name": "Jasmin",
//             "prefix": "70"
//         }
//     },
//     {
//         "id": "440333de-4bfa-48e8-9300-1716d3849af6",
//         "ip_address": "172.16.90.9",
//         "area": {
//             "name": "Yeni Baki",
//             "prefix": "90"
//         }
//     },
//     {
//         "id": "652267be-abf2-4091-ac99-0eca8254c1f1",
//         "ip_address": "172.16.81.57",
//         "area": {
//             "name": "MirCelal-63",
//             "prefix": "81"
//         }
//     },
//     {
//         "id": "eb286c6d-83cf-4c81-aae1-159d4c477347",
//         "ip_address": "172.16.90.48",
//         "area": {
//             "name": "Yeni Baki",
//             "prefix": "90"
//         }
//     },
//     {
//         "id": "b059a35d-697e-4e8c-8364-3e0a04eb34de",
//         "ip_address": "172.16.75.80",
//         "area": {
//             "name": "Neshriyyat",
//             "prefix": "75"
//         }
//     },
//     {
//         "id": "9e738173-8099-44f1-a624-714987eaed01",
//         "ip_address": "172.16.43.95",
//         "area": {
//             "name": "Torpaq",
//             "prefix": "43"
//         }
//     },
//     {
//         "id": "cf42e977-425d-4a52-aeaa-1fd53a1b4b20",
//         "ip_address": "172.16.81.150",
//         "area": {
//             "name": "MirCelal-63",
//             "prefix": "81"
//         }
//     },
//     {
//         "id": "b93d8dee-b3ec-4ab3-b115-90a56fa155b4",
//         "ip_address": "172.16.70.111",
//         "area": {
//             "name": "Dadash Bunyadzade (Kamran)",
//             "prefix": "70"
//         }
//     },
//     {
//         "id": "fc280cc7-fe82-4539-ae63-cdfaa5fb9566",
//         "ip_address": "172.16.50.219",
//         "area": {
//             "name": "Telecom_Invest",
//             "prefix": "20"
//         }
//     },
//     {
//         "id": "7a0312ba-decf-466d-a965-70e59f540cb4",
//         "ip_address": "172.16.90.102",
//         "area": {
//             "name": "Yeni Baki",
//             "prefix": "90"
//         }
//     },
//     {
//         "id": "6b5b6558-1f4d-46ae-9c14-a83755f559d2",
//         "ip_address": "172.16.90.164",
//         "area": {
//             "name": "Yeni Baki",
//             "prefix": "90"
//         }
//     },
//     {
//         "id": "af4f9055-5339-49e6-b01c-6a3c2a80237c",
//         "ip_address": "172.16.92.105",
//         "area": {
//             "name": "Nargile",
//             "prefix": "92"
//         }
//     },
//     {
//         "id": "c143288e-896b-4d26-82c2-294c32d03ca9",
//         "ip_address": "172.16.90.19",
//         "area": {
//             "name": "Yeni Baki",
//             "prefix": "90"
//         }
//     },
//     {
//         "id": "dfb2ceeb-9363-45c8-a2e5-6cf37063d793",
//         "ip_address": "172.16.90.55",
//         "area": {
//             "name": "Yeni Baki",
//             "prefix": "90"
//         }
//     },
//     {
//         "id": "fc520f15-ab85-48c4-bfa3-c3a6cbaa8e50",
//         "ip_address": "172.16.60.124",
//         "area": {
//             "name": "Xirdalan-1",
//             "prefix": "60"
//         }
//     },
//     {
//         "id": "20846cad-ecfa-451a-b12c-253cb5f8a4af",
//         "ip_address": "172.16.90.77",
//         "area": {
//             "name": "Yeni Baki",
//             "prefix": "90"
//         }
//     },
//     {
//         "id": "e99351fe-9ef5-4799-b36b-db26962be76f",
//         "ip_address": "172.16.90.10",
//         "area": {
//             "name": "Yeni Baki",
//             "prefix": "90"
//         }
//     },
//     {
//         "id": "f004ade3-75c7-4ada-80cc-4d0e2d886aca",
//         "ip_address": "172.16.81.117",
//         "area": {
//             "name": "MirCelal-63",
//             "prefix": "81"
//         }
//     },
//     {
//         "id": "4c2a6614-1c35-4108-a5f4-90ad79ee9b8c",
//         "ip_address": "172.16.81.102",
//         "area": {
//             "name": "MirCelal-63",
//             "prefix": "81"
//         }
//     },
//     {
//         "id": "38f5609f-e260-428a-9c57-1f7ab65003d7",
//         "ip_address": "172.16.70.94",
//         "area": {
//             "name": "Sherur",
//             "prefix": "70"
//         }
//     },
//     {
//         "id": "e9bad10e-abe7-4283-ad6e-507e15e0876f",
//         "ip_address": "172.16.47.3",
//         "area": {
//             "name": "Bayil",
//             "prefix": "47"
//         }
//     },
//     {
//         "id": "221b84c3-2c61-4244-a537-dab393a62c3d",
//         "ip_address": "172.16.90.45",
//         "area": {
//             "name": "Yeni Baki",
//             "prefix": "90"
//         }
//     },
//     {
//         "id": "49dc799a-493f-4d6e-a7e0-f194cc155d96",
//         "ip_address": "172.16.94.94",
//         "area": {
//             "name": "Xetai - (Natiq Aliyev)",
//             "prefix": "94"
//         }
//     },
//     {
//         "id": "8d6d2e5c-fda7-4927-8187-1425dfa56364",
//         "ip_address": "172.16.76.2",
//         "area": {
//             "name": "Jasmin",
//             "prefix": "70"
//         }
//     },
//     {
//         "id": "ded8ca9a-2974-487b-aeac-a0105e9c87c2",
//         "ip_address": "172.16.70.33",
//         "area": {
//             "name": "Elchin_Eziz (Talibli)",
//             "prefix": "70"
//         }
//     },
//     {
//         "id": "ae71a68d-2e8f-44de-aa75-afc3360795c1",
//         "ip_address": "172.16.81.80",
//         "area": {
//             "name": "MirCelal-63",
//             "prefix": "81"
//         }
//     },
//     {
//         "id": "84496214-baff-446f-9506-e04b6e7fdef1",
//         "ip_address": "172.16.45.1",
//         "area": {
//             "name": "Sherifzade 110_Kristal",
//             "prefix": "45"
//         }
//     },
//     {
//         "id": "2b426ac5-095d-468a-bb4c-8964198c4186",
//         "ip_address": "172.16.81.100",
//         "area": {
//             "name": "MirCelal-63",
//             "prefix": "81"
//         }
//     },
//     {
//         "id": "dc11e3ee-eb6e-4a24-825b-b699e6cc2095",
//         "ip_address": "172.16.90.8",
//         "area": {
//             "name": "Yeni Baki",
//             "prefix": "90"
//         }
//     },
//     {
//         "id": "73725bec-a8bc-4cf1-868a-d9deded39ab9",
//         "ip_address": "172.16.91.20",
//         "area": {
//             "name": "Xudu_Memmedov",
//             "prefix": "91"
//         }
//     },
//     {
//         "id": "3fa58d1a-0f64-4f30-8ca5-54064aa5c7fe",
//         "ip_address": "172.16.80.80",
//         "area": {
//             "name": "Qara_Qarayev",
//             "prefix": "80"
//         }
//     },
//     {
//         "id": "ae43d70e-77f5-41b7-a3fe-4bfab272ffd8",
//         "ip_address": "172.16.93.5",
//         "area": {
//             "name": "Telnov",
//             "prefix": "93"
//         }
//     },
//     {
//         "id": "335f662b-c2cd-4b60-9f6f-cf2d28d50c94",
//         "ip_address": "172.16.96.233",
//         "area": {
//             "name": "Turan MTK",
//             "prefix": "96"
//         }
//     },
//     {
//         "id": "f384d0c3-da13-4df7-a9d0-4f65b2e6ef94",
//         "ip_address": "172.16.90.54",
//         "area": {
//             "name": "Yeni Baki",
//             "prefix": "90"
//         }
//     },
//     {
//         "id": "4d6dedc9-f87e-463f-b0d8-1b84b03173ff",
//         "ip_address": "172.16.90.12",
//         "area": {
//             "name": "Yeni Baki",
//             "prefix": "90"
//         }
//     },
//     {
//         "id": "9fe35a16-3695-4001-b4c1-939c60b34a48",
//         "ip_address": "172.16.70.248",
//         "area": {
//             "name": "Elchin_Eziz (Talibli)",
//             "prefix": "70"
//         }
//     },
//     {
//         "id": "9094ee74-a073-4603-98f9-d15a510f48af",
//         "ip_address": "172.16.90.26",
//         "area": {
//             "name": "Yeni Baki",
//             "prefix": "90"
//         }
//     },
//     {
//         "id": "2e6b2d9e-cea4-4863-aa54-920d09efa183",
//         "ip_address": "172.16.81.101",
//         "area": {
//             "name": "MirCelal-63",
//             "prefix": "81"
//         }
//     },
//     {
//         "id": "0980cdaf-3f68-46bd-b7b2-ed19098e14cc",
//         "ip_address": "172.16.81.81",
//         "area": {
//             "name": "MirCelal-63",
//             "prefix": "81"
//         }
//     },
//     {
//         "id": "cb37d6cb-0ccc-4388-aaca-594c79b61318",
//         "ip_address": "172.16.75.164",
//         "area": {
//             "name": "Neshriyyat",
//             "prefix": "75"
//         }
//     },
//     {
//         "id": "840ac7be-230d-4c65-a7d8-5216ad82df6d",
//         "ip_address": "172.16.60.37",
//         "area": {
//             "name": "Xirdalan-1",
//             "prefix": "60"
//         }
//     },
//     {
//         "id": "d8d780e9-8a21-4783-b8a8-29185b238176",
//         "ip_address": "172.16.71.2",
//         "area": {
//             "name": "Huseyn Cavid",
//             "prefix": "71"
//         }
//     },
//     {
//         "id": "52044e07-9cfa-4314-acaf-f4ef036a554e",
//         "ip_address": "172.16.82.54",
//         "area": {
//             "name": "Mir-Celal_1D",
//             "prefix": "82"
//         }
//     },
//     {
//         "id": "5d3a3208-7774-47c4-8b30-076da7bfebee",
//         "ip_address": "172.16.93.102",
//         "area": {
//             "name": "Telnov",
//             "prefix": "93"
//         }
//     },
//     {
//         "id": "48a3fe67-e6d9-4925-9d62-cfe7115686ae",
//         "ip_address": "172.16.42.239",
//         "area": {
//             "name": "Sherifzade158",
//             "prefix": "42"
//         }
//     },
//     {
//         "id": "f64ac9d2-db73-49fc-b3f3-c099ce25ff54",
//         "ip_address": "172.16.60.38",
//         "area": {
//             "name": "Xirdalan-1",
//             "prefix": "60"
//         }
//     },
//     {
//         "id": "42d77fb8-9ec7-412c-b152-0e111381fd26",
//         "ip_address": "172.16.90.51",
//         "area": {
//             "name": "Yeni Baki",
//             "prefix": "90"
//         }
//     },
//     {
//         "id": "5757fd83-f05e-4839-b624-d4767776fabe",
//         "ip_address": "172.16.93.159",
//         "area": {
//             "name": "Telnov",
//             "prefix": "93"
//         }
//     },
//     {
//         "id": "3caade20-97d9-4811-95d6-9af3cbbbbbda",
//         "ip_address": "172.16.73.107",
//         "area": {
//             "name": "Insaatcilar",
//             "prefix": "73"
//         }
//     },
//     {
//         "id": "a084cd42-6ada-4b67-a70d-d3c860be5ba2",
//         "ip_address": "172.16.42.1",
//         "area": {
//             "name": "Sherifzade158",
//             "prefix": "42"
//         }
//     },
//     {
//         "id": "7149f1d8-2f30-4b9f-bd50-2f94f3dac79d",
//         "ip_address": "172.16.43.138",
//         "area": {
//             "name": "Torpaq",
//             "prefix": "43"
//         }
//     },
//     {
//         "id": "f3c48b8e-dfbc-4674-b96c-d0de569a6eae",
//         "ip_address": "172.16.42.149",
//         "area": {
//             "name": "Sherifzade158",
//             "prefix": "42"
//         }
//     },
//     {
//         "id": "3e83e7c0-7dbc-4d14-86ba-88300ee2a151",
//         "ip_address": "172.16.70.151",
//         "area": {
//             "name": "Sherur",
//             "prefix": "70"
//         }
//     },
//     {
//         "id": "408da174-1edd-4aaa-b108-401596f8c2dd",
//         "ip_address": "172.16.70.244",
//         "area": {
//             "name": "Elchin_Eziz (Talibli)",
//             "prefix": "70"
//         }
//     },
//     {
//         "id": "29181c56-21c3-49e7-8ea0-334865bb4a43",
//         "ip_address": "172.16.96.236",
//         "area": {
//             "name": "Turan MTK",
//             "prefix": "96"
//         }
//     },
//     {
//         "id": "59980cec-2363-4226-8487-2b74aa63a523",
//         "ip_address": "172.16.30.100",
//         "area": {
//             "name": "Zerdabi_89",
//             "prefix": "30"
//         }
//     },
//     {
//         "id": "0809f24e-64a0-4ee2-a080-70f44171796c",
//         "ip_address": "172.16.90.115",
//         "area": {
//             "name": "Yeni Baki",
//             "prefix": "90"
//         }
//     },
//     {
//         "id": "5c3945ce-f351-4162-bf13-8ad7faad5f8f",
//         "ip_address": "172.16.30.1",
//         "area": {
//             "name": "Zerdabi_89",
//             "prefix": "30"
//         }
//     },
//     {
//         "id": "a8af9828-2723-4ce3-8c76-191073a76663",
//         "ip_address": "172.16.60.230",
//         "area": {
//             "name": "Xirdalan-1",
//             "prefix": "60"
//         }
//     },
//     {
//         "id": "eba591b3-0b5b-425b-ae86-1ac64d27ec8b",
//         "ip_address": "172.16.51.125",
//         "area": {
//             "name": "Clock Tower",
//             "prefix": "51"
//         }
//     },
//     {
//         "id": "07a80404-69cf-4064-bab1-ee59d04c952c",
//         "ip_address": "172.16.43.130",
//         "area": {
//             "name": "Torpaq",
//             "prefix": "43"
//         }
//     },
//     {
//         "id": "d4e377cb-5913-4e2f-a7e4-92e9615ad672",
//         "ip_address": "172.16.70.113",
//         "area": {
//             "name": "Sherur",
//             "prefix": "70"
//         }
//     },
//     {
//         "id": "eced2d7a-7790-4592-9d96-ea032c70866d",
//         "ip_address": "10.3.20.4",
//         "area": {
//             "name": "Telecom_Invest",
//             "prefix": "20"
//         }
//     },
//     {
//         "id": "ca471c8e-7698-4872-8942-be302256cd3d",
//         "ip_address": "172.16.90.31",
//         "area": {
//             "name": "Yeni Baki",
//             "prefix": "90"
//         }
//     },
//     {
//         "id": "05f40b3b-3e6b-40a7-9135-f5071d317f04",
//         "ip_address": "172.16.73.110",
//         "area": {
//             "name": "Insaatcilar",
//             "prefix": "73"
//         }
//     },
//     {
//         "id": "0addf621-cc59-4775-bd1e-b928253057ea",
//         "ip_address": "172.16.81.45",
//         "area": {
//             "name": "MirCelal-63",
//             "prefix": "81"
//         }
//     },
//     {
//         "id": "15647b95-794c-4795-a6df-11deb600a73e",
//         "ip_address": "172.16.70.183",
//         "area": {
//             "name": "Sherur",
//             "prefix": "70"
//         }
//     },
//     {
//         "id": "0f669bd9-6bd1-482f-9b5f-f0991c1c527c",
//         "ip_address": "10.3.21.6",
//         "area": {
//             "name": "Telecom_Invest",
//             "prefix": "20"
//         }
//     },
//     {
//         "id": "dd9ee8b2-bed6-423b-8440-ac73ea3d8c7b",
//         "ip_address": "172.16.91.2",
//         "area": {
//             "name": "Xudu_Memmedov",
//             "prefix": "91"
//         }
//     },
//     {
//         "id": "7e626d51-6147-4e68-a96c-e501119cb526",
//         "ip_address": "172.16.44.1",
//         "area": {
//             "name": "Azinko",
//             "prefix": "44"
//         }
//     },
//     {
//         "id": "a55f4914-4af4-4567-8483-2d1bdeb46e14",
//         "ip_address": "172.16.90.166",
//         "area": {
//             "name": "Yeni Baki",
//             "prefix": "90"
//         }
//     },
//     {
//         "id": "ff71e722-9f23-4ebe-b447-01866202dfc6",
//         "ip_address": "172.16.60.8",
//         "area": {
//             "name": "Xirdalan-1",
//             "prefix": "60"
//         }
//     },
//     {
//         "id": "8a7e77d4-fda7-443f-859e-1036d9833710",
//         "ip_address": "172.16.70.107",
//         "area": {
//             "name": "Sherur",
//             "prefix": "70"
//         }
//     },
//     {
//         "id": "1f833897-a1ee-45fa-8f0c-63ec6433109f",
//         "ip_address": "172.16.30.85",
//         "area": {
//             "name": "Zerdabi_89",
//             "prefix": "30"
//         }
//     },
//     {
//         "id": "e383a267-ac3e-4060-aa3e-94115cb93e02",
//         "ip_address": "172.16.50.161",
//         "area": {
//             "name": "Hesen Eliyev",
//             "prefix": "50"
//         }
//     },
//     {
//         "id": "1da64633-ca93-4c9f-a935-cc1625cec43b",
//         "ip_address": "172.16.70.126",
//         "area": {
//             "name": "Xiyabani_(Nuray)",
//             "prefix": "70"
//         }
//     },
//     {
//         "id": "0876858e-38c2-4faa-952b-6122595869b6",
//         "ip_address": "172.16.43.136",
//         "area": {
//             "name": "Torpaq",
//             "prefix": "43"
//         }
//     },
//     {
//         "id": "92378b87-25e3-4b41-9771-87e61a5dcff5",
//         "ip_address": "172.16.90.230",
//         "area": {
//             "name": "Yeni Baki",
//             "prefix": "90"
//         }
//     },
//     {
//         "id": "4514c2eb-b615-421f-9ec6-6a2ace89361c",
//         "ip_address": "172.16.70.6",
//         "area": {
//             "name": "Sherur",
//             "prefix": "70"
//         }
//     },
//     {
//         "id": "ffaebf4b-1e70-4956-bd41-257b28b79fb5",
//         "ip_address": "172.16.41.94",
//         "area": {
//             "name": "XDMX_(S.Mehdiyev)",
//             "prefix": "41"
//         }
//     },
//     {
//         "id": "142ad15b-60d1-4d05-9174-19a5fc79d587",
//         "ip_address": "172.16.90.39",
//         "area": {
//             "name": "Yeni Baki",
//             "prefix": "90"
//         }
//     },
//     {
//         "id": "68e6f059-a315-4377-ba2a-501eef8d2b86",
//         "ip_address": "172.16.54.176",
//         "area": {
//             "name": "Semed Vurgun",
//             "prefix": "54"
//         }
//     },
//     {
//         "id": "d8d55822-7f7e-4341-9605-8f2d5b226a7e",
//         "ip_address": "172.16.43.135",
//         "area": {
//             "name": "Torpaq",
//             "prefix": "43"
//         }
//     },
//     {
//         "id": "690f0d52-1200-45d6-bfcd-1d41454b8c8e",
//         "ip_address": "172.16.92.194",
//         "area": {
//             "name": "Nargile",
//             "prefix": "92"
//         }
//     },
//     {
//         "id": "f6abc511-4e35-44b3-bcfc-43debfda3cba",
//         "ip_address": "172.16.90.239",
//         "area": {
//             "name": "Yeni Baki",
//             "prefix": "90"
//         }
//     },
//     {
//         "id": "ba8b9e53-6d48-453b-8b6c-bbabdfa2fd19",
//         "ip_address": "172.16.43.139",
//         "area": {
//             "name": "Torpaq",
//             "prefix": "43"
//         }
//     },
//     {
//         "id": "f6f94905-fa4e-4011-bde4-bf98a72a7cf5",
//         "ip_address": "172.16.53.1",
//         "area": {
//             "name": "Koroglu_Rehimov",
//             "prefix": "53"
//         }
//     },
//     {
//         "id": "458c81be-b516-4856-a517-0f9d3fe94b30",
//         "ip_address": "172.16.30.73",
//         "area": {
//             "name": "Zerdabi_89",
//             "prefix": "30"
//         }
//     },
//     {
//         "id": "7a2e751f-c800-42e5-929a-db105028b268",
//         "ip_address": "172.16.91.108",
//         "area": {
//             "name": "Xudu_Memmedov",
//             "prefix": "91"
//         }
//     },
//     {
//         "id": "4c7e79af-3581-494e-bad8-53809518d12f",
//         "ip_address": "172.16.53.202",
//         "area": {
//             "name": "Koroglu_Rehimov",
//             "prefix": "53"
//         }
//     },
//     {
//         "id": "2f5b6a9c-81b2-4b31-8af1-03dfb156b49f",
//         "ip_address": "172.16.77.10",
//         "area": {
//             "name": "AVD - SAFARI",
//             "prefix": "77"
//         }
//     },
//     {
//         "id": "6796c8df-5cc0-4f0a-bc8e-8399bd989383",
//         "ip_address": "172.16.81.1",
//         "area": {
//             "name": "MirCelal-63",
//             "prefix": "81"
//         }
//     },
//     {
//         "id": "d3a019e2-0e1c-4ca6-9521-6787c04a130e",
//         "ip_address": "172.16.70.177",
//         "area": {
//             "name": "Sherur",
//             "prefix": "70"
//         }
//     },
//     {
//         "id": "91d41544-43c0-412a-92a2-19abb2d97e05",
//         "ip_address": "172.16.70.108",
//         "area": {
//             "name": "Sherur",
//             "prefix": "70"
//         }
//     },
//     {
//         "id": "cbb49d5e-29f9-46cb-a8c0-c201e0333a4c",
//         "ip_address": "172.16.70.95",
//         "area": {
//             "name": "Sherur",
//             "prefix": "70"
//         }
//     },
//     {
//         "id": "6b5a92c8-cb77-4ee1-bc34-28ea9831d028",
//         "ip_address": "172.16.90.100",
//         "area": {
//             "name": "Yeni Baki",
//             "prefix": "90"
//         }
//     },
//     {
//         "id": "0c2c8542-b878-4468-bbfa-7a3ca27f71c1",
//         "ip_address": "172.16.92.191",
//         "area": {
//             "name": "Nargile",
//             "prefix": "92"
//         }
//     },
//     {
//         "id": "52dc795a-ea99-437f-ba06-f546ac57a712",
//         "ip_address": "172.16.92.192",
//         "area": {
//             "name": "Nargile",
//             "prefix": "92"
//         }
//     },
//     {
//         "id": "4f59dfc2-82d2-4221-afbd-ca36e624a7c8",
//         "ip_address": "172.16.44.22",
//         "area": {
//             "name": "Azinko",
//             "prefix": "44"
//         }
//     },
//     {
//         "id": "2e27df8f-eb8c-4196-9ffd-a20d6f4ef14f",
//         "ip_address": "172.16.82.55",
//         "area": {
//             "name": "Mir-Celal_1D",
//             "prefix": "82"
//         }
//     },
//     {
//         "id": "b2aa3028-e089-4af3-a8dc-0d51641e98e4",
//         "ip_address": "172.16.70.106",
//         "area": {
//             "name": "Sherur",
//             "prefix": "70"
//         }
//     },
//     {
//         "id": "4eaa4af8-6c21-4bbd-9482-80461a8d2489",
//         "ip_address": "172.16.90.223",
//         "area": {
//             "name": "Yeni Baki",
//             "prefix": "90"
//         }
//     },
//     {
//         "id": "79ed7bf7-9595-42cd-b7a5-a104fca35605",
//         "ip_address": "172.16.92.198",
//         "area": {
//             "name": "Nargile",
//             "prefix": "92"
//         }
//     },
//     {
//         "id": "65a07a24-51d1-4b11-80ed-3cac967d3c00",
//         "ip_address": "172.16.70.182",
//         "area": {
//             "name": "Sherur",
//             "prefix": "70"
//         }
//     },
//     {
//         "id": "b2c8ed27-9968-49c1-8b1f-ad76c40aabf6",
//         "ip_address": "172.16.70.109",
//         "area": {
//             "name": "Sherur",
//             "prefix": "70"
//         }
//     },
//     {
//         "id": "3fac106c-a94a-4965-bd73-f5b2ad19198b",
//         "ip_address": "172.16.70.112",
//         "area": {
//             "name": "Sherur",
//             "prefix": "70"
//         }
//     },
//     {
//         "id": "605b2032-da30-4a04-9e06-82e6fb75f091",
//         "ip_address": "172.16.95.1",
//         "area": {
//             "name": "Turan MTK",
//             "prefix": "96"
//         }
//     },
//     {
//         "id": "e04291d2-8317-4e5b-8fad-f4acee9515bc",
//         "ip_address": "172.16.50.76",
//         "area": {
//             "name": "Hesen Eliyev",
//             "prefix": "50"
//         }
//     },
//     {
//         "id": "651ddab7-bb69-44db-b78a-ca55177a67a2",
//         "ip_address": "172.16.30.79",
//         "area": {
//             "name": "Zerdabi_89",
//             "prefix": "30"
//         }
//     },
//     {
//         "id": "27387929-9d35-4498-9a9f-848931441471",
//         "ip_address": "172.16.70.240",
//         "area": {
//             "name": "Dadash Bunyadzade (Kamran)",
//             "prefix": "70"
//         }
//     },
//     {
//         "id": "3b8e2355-3501-4579-8f47-7153b72bb0ba",
//         "ip_address": "172.16.90.240",
//         "area": {
//             "name": "Yeni Baki",
//             "prefix": "90"
//         }
//     },
//     {
//         "id": "8715e7db-1a1f-4991-b510-e90392dcf1eb",
//         "ip_address": "172.16.70.246",
//         "area": {
//             "name": "Elchin_Eziz (Talibli)",
//             "prefix": "70"
//         }
//     },
//     {
//         "id": "827ba660-461f-4d73-b759-2be0e72c4e86",
//         "ip_address": "172.16.75.35",
//         "area": {
//             "name": "Neshriyyat",
//             "prefix": "75"
//         }
//     },
//     {
//         "id": "e8c25521-6df9-41f4-b574-de21eec7ca0f",
//         "ip_address": "172.16.70.117",
//         "area": {
//             "name": "Esed_Ehmedov_(Arabachi)",
//             "prefix": "70"
//         }
//     },
//     {
//         "id": "6eaae91a-ff98-459d-b3fd-19001e5a8efa",
//         "ip_address": "172.16.70.181",
//         "area": {
//             "name": "Sherur",
//             "prefix": "70"
//         }
//     },
//     {
//         "id": "dd8734cf-9409-4159-9793-85b0e8b5df42",
//         "ip_address": "172.16.90.145",
//         "area": {
//             "name": "Yeni Baki",
//             "prefix": "90"
//         }
//     },
//     {
//         "id": "c9b081da-3c73-4c95-a5a9-8cb0f743c958",
//         "ip_address": "172.16.81.44",
//         "area": {
//             "name": "MirCelal-63",
//             "prefix": "81"
//         }
//     },
//     {
//         "id": "5a81fdbc-cae1-440b-8334-3eb356c60a5d",
//         "ip_address": "172.16.50.1",
//         "area": {
//             "name": "Hesen Eliyev",
//             "prefix": "50"
//         }
//     },
//     {
//         "id": "c4a6bf2d-62f4-40b7-afe3-06e79fe3b242",
//         "ip_address": "10.3.21.7",
//         "area": {
//             "name": "Telecom_Invest",
//             "prefix": "20"
//         }
//     },
//     {
//         "id": "aa4a86fd-cb6b-4fe0-83f4-fcc2f864d2a3",
//         "ip_address": "172.16.50.151",
//         "area": {
//             "name": "Hesen Eliyev",
//             "prefix": "50"
//         }
//     },
//     {
//         "id": "0bb04fef-5763-4686-8686-f2042d20264a",
//         "ip_address": "172.16.50.173",
//         "area": {
//             "name": "Hesen Eliyev",
//             "prefix": "50"
//         }
//     },
//     {
//         "id": "2c6cad1d-15c5-4f83-a534-e7882e7f909f",
//         "ip_address": "172.16.70.129",
//         "area": {
//             "name": "Esed_Ehmedov_(Arabachi)",
//             "prefix": "70"
//         }
//     },
//     {
//         "id": "50c10bf2-3ff8-4089-acb0-beb97b68049d",
//         "ip_address": "172.16.70.185",
//         "area": {
//             "name": "Xiyabani_(Nuray)",
//             "prefix": "70"
//         }
//     },
//     {
//         "id": "0d7b359e-f1e9-4e86-8fa1-2fd8d0114e17",
//         "ip_address": "172.16.70.116",
//         "area": {
//             "name": "Esed_Ehmedov_(Arabachi)",
//             "prefix": "70"
//         }
//     },
//     {
//         "id": "d5bf6ce8-90ff-4a34-8885-28c64277e1a8",
//         "ip_address": "172.16.74.11",
//         "area": {
//             "name": "Telecom_Invest",
//             "prefix": "20"
//         }
//     },
//     {
//         "id": "4aaeee87-ef63-4eaa-9b1b-d4f3f82ef0e7",
//         "ip_address": "172.16.90.47",
//         "area": {
//             "name": "Yeni Baki",
//             "prefix": "90"
//         }
//     },
//     {
//         "id": "f357d7cf-60b3-4396-a49c-07e924e9ff80",
//         "ip_address": "172.16.73.114",
//         "area": {
//             "name": "Insaatcilar",
//             "prefix": "73"
//         }
//     },
//     {
//         "id": "2b79ab6c-fab7-4cae-8104-212cf30d37a8",
//         "ip_address": "172.16.82.48",
//         "area": {
//             "name": "Mir-Celal_1D",
//             "prefix": "82"
//         }
//     },
//     {
//         "id": "7ed58d68-fe4a-4b19-93c9-1bcf1a01fb8d",
//         "ip_address": "172.16.70.115",
//         "area": {
//             "name": "Esed_Ehmedov_(Arabachi)",
//             "prefix": "70"
//         }
//     },
//     {
//         "id": "cf8556fd-66bf-4ea7-955f-ca49f34cd161",
//         "ip_address": "172.16.90.127",
//         "area": {
//             "name": "Yeni Baki",
//             "prefix": "90"
//         }
//     },
//     {
//         "id": "f3ab8130-ccb9-4f84-ac7a-3d727952f22f",
//         "ip_address": "172.16.61.231",
//         "area": {
//             "name": "Xirdalan-2",
//             "prefix": "60"
//         }
//     },
//     {
//         "id": "6ea899b7-522e-4792-b4f2-990ee2db15de",
//         "ip_address": "172.16.81.40",
//         "area": {
//             "name": "MirCelal-63",
//             "prefix": "81"
//         }
//     },
//     {
//         "id": "5a82434e-0c2f-4e86-89ce-e8477409aa8e",
//         "ip_address": "172.16.81.41",
//         "area": {
//             "name": "MirCelal-63",
//             "prefix": "81"
//         }
//     },
//     {
//         "id": "09754d7c-1cca-4a2d-99a5-e01eda15ece8",
//         "ip_address": "172.16.70.247",
//         "area": {
//             "name": "Elchin_Eziz (Talibli)",
//             "prefix": "70"
//         }
//     },
//     {
//         "id": "f6fdad90-fd87-47d9-a0d4-2a93c1a94885",
//         "ip_address": "172.16.50.59",
//         "area": {
//             "name": "Hesen Eliyev",
//             "prefix": "50"
//         }
//     },
//     {
//         "id": "4dbfdab0-59a8-4b64-8fd6-418c7ce6bd52",
//         "ip_address": "172.16.96.1",
//         "area": {
//             "name": "Turan MTK",
//             "prefix": "96"
//         }
//     },
//     {
//         "id": "d7e26d95-afa1-4a69-8fbf-c0f8a21985ec",
//         "ip_address": "172.16.44.23",
//         "area": {
//             "name": "Azinko",
//             "prefix": "44"
//         }
//     },
//     {
//         "id": "c4e96803-5062-4f20-a463-76ef0acac7e6",
//         "ip_address": "172.16.96.235",
//         "area": {
//             "name": "Turan MTK",
//             "prefix": "96"
//         }
//     },
//     {
//         "id": "4fbdc7c3-a118-44e9-9905-832cdae10f7c",
//         "ip_address": "172.16.73.117",
//         "area": {
//             "name": "Insaatcilar",
//             "prefix": "73"
//         }
//     },
//     {
//         "id": "1242047c-6cae-4948-899b-8f3d95f01a06",
//         "ip_address": "172.16.50.150",
//         "area": {
//             "name": "Hesen Eliyev",
//             "prefix": "50"
//         }
//     },
//     {
//         "id": "201fe6bf-9c1d-40fe-8e7d-ac1f803e8eca",
//         "ip_address": "172.16.50.157",
//         "area": {
//             "name": "Hesen Eliyev",
//             "prefix": "50"
//         }
//     },
//     {
//         "id": "4ca36c3b-ef61-4617-9b17-8356fd1207cd",
//         "ip_address": "172.16.51.121",
//         "area": {
//             "name": "Clock Tower",
//             "prefix": "51"
//         }
//     },
//     {
//         "id": "97273632-0fab-477a-82fe-d04bc3a38984",
//         "ip_address": "10.3.21.4",
//         "area": {
//             "name": "Telecom_Invest",
//             "prefix": "20"
//         }
//     },
//     {
//         "id": "2f3a0403-e8d3-4d3c-970f-7385fb95e35a",
//         "ip_address": "10.3.25.6",
//         "area": {
//             "name": "Telecom_Invest",
//             "prefix": "20"
//         }
//     },
//     {
//         "id": "fb2b2c99-7849-46a5-aae9-6a351690f1cc",
//         "ip_address": "10.3.25.7",
//         "area": {
//             "name": "Telecom_Invest",
//             "prefix": "20"
//         }
//     },
//     {
//         "id": "5fc20c91-5c6a-47f4-84f0-d69f2f5e1912",
//         "ip_address": "10.3.23.6",
//         "area": {
//             "name": "Telecom_Invest",
//             "prefix": "20"
//         }
//     },
//     {
//         "id": "19b6654a-b91f-4472-9262-ffd4b948e033",
//         "ip_address": "172.16.73.128",
//         "area": {
//             "name": "Insaatcilar",
//             "prefix": "73"
//         }
//     },
//     {
//         "id": "10f11993-eeb3-45bd-9916-4da37a257016",
//         "ip_address": "172.16.50.174",
//         "area": {
//             "name": "Hesen Eliyev",
//             "prefix": "50"
//         }
//     },
//     {
//         "id": "e060a5b9-3fef-4b34-9572-940ac6208c17",
//         "ip_address": "172.16.70.133",
//         "area": {
//             "name": "Dadash Bunyadzade (Kamran)",
//             "prefix": "70"
//         }
//     },
//     {
//         "id": "211935d2-ef4d-462d-a478-6f93dbe0e3ef",
//         "ip_address": "172.16.54.1",
//         "area": {
//             "name": "Semed Vurgun",
//             "prefix": "54"
//         }
//     },
//     {
//         "id": "03bf1a0c-f999-46ad-8230-a253600e9686",
//         "ip_address": "172.16.50.147",
//         "area": {
//             "name": "Hesen Eliyev",
//             "prefix": "50"
//         }
//     },
//     {
//         "id": "888615da-1a28-4349-acc3-196f94d6f063",
//         "ip_address": "10.3.22.4",
//         "area": {
//             "name": "Telecom_Invest",
//             "prefix": "20"
//         }
//     },
//     {
//         "id": "0da5529a-71ed-4b65-aa0d-d547dd1094ab",
//         "ip_address": "172.16.50.154",
//         "area": {
//             "name": "Hesen Eliyev",
//             "prefix": "50"
//         }
//     },
//     {
//         "id": "4bc5a50b-2fe8-4a1b-94e5-95f647318d57",
//         "ip_address": "172.16.51.122",
//         "area": {
//             "name": "Clock Tower",
//             "prefix": "51"
//         }
//     },
//     {
//         "id": "7b170360-cad6-4d53-8b63-1f380d540dda",
//         "ip_address": "172.16.33.1",
//         "area": {
//             "name": "Telecom_Invest",
//             "prefix": "20"
//         }
//     },
//     {
//         "id": "b73f856b-2c2d-4e03-9a94-32402266cf14",
//         "ip_address": "172.16.82.49",
//         "area": {
//             "name": "Mir-Celal_1D",
//             "prefix": "82"
//         }
//     },
//     {
//         "id": "e90a2820-5b4f-4d50-ab5c-6b6068b29e6a",
//         "ip_address": "172.16.74.1",
//         "area": {
//             "name": "Telecom_Invest",
//             "prefix": "20"
//         }
//     },
//     {
//         "id": "ce051df8-dfcb-4df6-827a-e3f46340b344",
//         "ip_address": "172.16.95.231",
//         "area": {
//             "name": "Turan MTK",
//             "prefix": "96"
//         }
//     },
//     {
//         "id": "8aea59c5-9e2e-4d04-ac2e-3b9fa02ff4e1",
//         "ip_address": "172.16.90.249",
//         "area": {
//             "name": "Yeni Baki",
//             "prefix": "90"
//         }
//     },
//     {
//         "id": "9b06546e-f39d-4911-bc41-17a014d8d177",
//         "ip_address": "172.16.30.88",
//         "area": {
//             "name": "Zerdabi_89",
//             "prefix": "30"
//         }
//     },
//     {
//         "id": "44f20c3f-a570-4a3d-be48-4a8a1d8de371",
//         "ip_address": "172.16.51.123",
//         "area": {
//             "name": "Clock Tower",
//             "prefix": "51"
//         }
//     },
//     {
//         "id": "e90b022a-586f-47ae-b54f-050f4f40b68c",
//         "ip_address": "172.16.90.228",
//         "area": {
//             "name": "Yeni Baki",
//             "prefix": "90"
//         }
//     },
//     {
//         "id": "4c01cc1a-6f6b-40bb-8910-cac9fef7e1fb",
//         "ip_address": "172.16.53.204",
//         "area": {
//             "name": "Koroglu_Rehimov",
//             "prefix": "53"
//         }
//     },
//     {
//         "id": "070f19cc-38f8-4992-9a92-e085f6853ba2",
//         "ip_address": "10.3.23.2",
//         "area": {
//             "name": "Telecom_Invest",
//             "prefix": "20"
//         }
//     },
//     {
//         "id": "ecefb77b-f2f4-479a-9f83-0c173d773599",
//         "ip_address": "172.16.30.74",
//         "area": {
//             "name": "Zerdabi_89",
//             "prefix": "30"
//         }
//     },
//     {
//         "id": "f7a80a76-2f39-4823-bebc-8363b1f3c462",
//         "ip_address": "172.16.50.166",
//         "area": {
//             "name": "Hesen Eliyev",
//             "prefix": "50"
//         }
//     },
//     {
//         "id": "4ee47ec5-eff6-4145-bb5b-2f16ec44faf2",
//         "ip_address": "172.16.52.1",
//         "area": {
//             "name": "Azadliq",
//             "prefix": "52"
//         }
//     },
//     {
//         "id": "68ca6287-4cfe-42a0-b283-04de4b4ea687",
//         "ip_address": "172.16.53.206",
//         "area": {
//             "name": "Koroglu_Rehimov",
//             "prefix": "53"
//         }
//     },
//     {
//         "id": "e2499ac7-bae3-4a1a-9e99-b4e2972e9708",
//         "ip_address": "172.16.90.237",
//         "area": {
//             "name": "Yeni Baki",
//             "prefix": "90"
//         }
//     },
//     {
//         "id": "fa384655-209e-4152-be5b-75adb4d17c91",
//         "ip_address": "172.16.50.160",
//         "area": {
//             "name": "Hesen Eliyev",
//             "prefix": "50"
//         }
//     },
//     {
//         "id": "bf0f44b2-4ed9-47c4-a570-2453d342c644",
//         "ip_address": "172.16.30.78",
//         "area": {
//             "name": "Zerdabi_89",
//             "prefix": "30"
//         }
//     },
//     {
//         "id": "ba0396cf-6873-433b-95af-aa8804a8f064",
//         "ip_address": "172.16.73.118",
//         "area": {
//             "name": "Insaatcilar",
//             "prefix": "73"
//         }
//     },
//     {
//         "id": "c2a107d7-f14b-4b24-bc7b-96f365e3f786",
//         "ip_address": "172.16.70.245",
//         "area": {
//             "name": "Elchin_Eziz (Talibli)",
//             "prefix": "70"
//         }
//     },
//     {
//         "id": "d367dc5e-7764-41ab-ba98-f91a592ef966",
//         "ip_address": "172.16.30.84",
//         "area": {
//             "name": "Zerdabi_89",
//             "prefix": "30"
//         }
//     },
//     {
//         "id": "ffffaa61-acfb-431f-9930-71c478619448",
//         "ip_address": "172.16.92.103",
//         "area": {
//             "name": "Nargile",
//             "prefix": "92"
//         }
//     },
//     {
//         "id": "eb593f50-db4d-480a-83a1-632adedd4c93",
//         "ip_address": "10.3.24.6",
//         "area": {
//             "name": "Telecom_Invest",
//             "prefix": "20"
//         }
//     },
//     {
//         "id": "09e4eb95-f45d-43f5-95cf-dc7527380853",
//         "ip_address": "172.16.70.171",
//         "area": {
//             "name": "Elchin_Eziz (Talibli)",
//             "prefix": "70"
//         }
//     },
//     {
//         "id": "931d78c6-bc7f-4561-956c-a40e6a6059ff",
//         "ip_address": "172.16.90.162",
//         "area": {
//             "name": "Yeni Baki",
//             "prefix": "90"
//         }
//     },
//     {
//         "id": "17458045-271e-460e-b9c7-8cdf799ee0aa",
//         "ip_address": "172.16.30.77",
//         "area": {
//             "name": "Zerdabi_89",
//             "prefix": "30"
//         }
//     },
//     {
//         "id": "2565e9f1-01c0-41b2-93f0-b7ee2ef4275e",
//         "ip_address": "172.16.70.119",
//         "area": {
//             "name": "Esed_Ehmedov_(Arabachi)",
//             "prefix": "70"
//         }
//     },
//     {
//         "id": "048b884c-c50f-4216-a3d9-79a4e5099242",
//         "ip_address": "172.16.70.114",
//         "area": {
//             "name": "Esed_Ehmedov_(Arabachi)",
//             "prefix": "70"
//         }
//     },
//     {
//         "id": "deab60be-0345-4a3d-8ebb-2bdeda8407d5",
//         "ip_address": "172.16.81.43",
//         "area": {
//             "name": "MirCelal-63",
//             "prefix": "81"
//         }
//     },
//     {
//         "id": "734b3977-4a25-4c41-b2ec-ffb82032858c",
//         "ip_address": "172.16.50.171",
//         "area": {
//             "name": "Hesen Eliyev",
//             "prefix": "50"
//         }
//     },
//     {
//         "id": "a4e6239a-2daa-4792-bb99-29b1483fe019",
//         "ip_address": "172.16.30.90",
//         "area": {
//             "name": "Zerdabi_89",
//             "prefix": "30"
//         }
//     },
//     {
//         "id": "7941d28b-125b-45f8-ac8a-c5d92626e46c",
//         "ip_address": "172.16.90.68",
//         "area": {
//             "name": "Yeni Baki",
//             "prefix": "90"
//         }
//     },
//     {
//         "id": "9b895d02-64a1-462b-985b-fcf58d0c6653",
//         "ip_address": "172.16.50.155",
//         "area": {
//             "name": "Hesen Eliyev",
//             "prefix": "50"
//         }
//     },
//     {
//         "id": "66524387-3745-408f-9066-109f10bfb54e",
//         "ip_address": "172.16.71.1",
//         "area": {
//             "name": "Huseyn Cavid",
//             "prefix": "71"
//         }
//     },
//     {
//         "id": "cb2923da-e0c1-488b-9d82-5051db2b4a86",
//         "ip_address": "172.16.44.21",
//         "area": {
//             "name": "Azinko",
//             "prefix": "44"
//         }
//     },
//     {
//         "id": "cc1c67dd-805b-4af4-aee6-db2b51bd56e7",
//         "ip_address": "10.3.23.5",
//         "area": {
//             "name": "Telecom_Invest",
//             "prefix": "20"
//         }
//     },
//     {
//         "id": "7f0c0172-0c83-44bc-8609-93bb1c970327",
//         "ip_address": "172.16.90.227",
//         "area": {
//             "name": "Yeni Baki",
//             "prefix": "90"
//         }
//     },
//     {
//         "id": "4e6a9556-8158-44de-b68f-d7a1afec2056",
//         "ip_address": "172.16.73.127",
//         "area": {
//             "name": "Insaatcilar",
//             "prefix": "73"
//         }
//     },
//     {
//         "id": "e978d6da-be95-4aff-8f6c-6271b174d5fd",
//         "ip_address": "172.16.30.101",
//         "area": {
//             "name": "Zerdabi_89",
//             "prefix": "30"
//         }
//     },
//     {
//         "id": "295df290-c1a3-4115-bd97-bbb459f4379b",
//         "ip_address": "172.16.92.190",
//         "area": {
//             "name": "Nargile",
//             "prefix": "92"
//         }
//     },
//     {
//         "id": "00b7da0c-ad7d-4d5c-b9de-c28418d8b132",
//         "ip_address": "172.16.73.111",
//         "area": {
//             "name": "Insaatcilar",
//             "prefix": "73"
//         }
//     },
//     {
//         "id": "e0e9e73a-4c7a-4fae-ba52-3c1832821ea9",
//         "ip_address": "172.16.50.170",
//         "area": {
//             "name": "Hesen Eliyev",
//             "prefix": "50"
//         }
//     },
//     {
//         "id": "86ea39da-ad4a-4c85-975d-d76e99ddb79d",
//         "ip_address": "172.16.91.112",
//         "area": {
//             "name": "Xudu_Memmedov",
//             "prefix": "91"
//         }
//     },
//     {
//         "id": "d0ad1905-48a8-4716-af0f-5cc9fabfaf1a",
//         "ip_address": "172.16.30.103",
//         "area": {
//             "name": "Zerdabi_89",
//             "prefix": "30"
//         }
//     },
//     {
//         "id": "513aafe8-0092-445a-bc38-9133c726c59d",
//         "ip_address": "172.16.30.81",
//         "area": {
//             "name": "Zerdabi_89",
//             "prefix": "30"
//         }
//     },
//     {
//         "id": "238742d2-7685-4a89-a335-057a9c69ede7",
//         "ip_address": "172.16.41.92",
//         "area": {
//             "name": "XDMX_(S.Mehdiyev)",
//             "prefix": "41"
//         }
//     },
//     {
//         "id": "5f054558-a19a-46e1-bc3e-db06e43fb0ab",
//         "ip_address": "172.16.90.165",
//         "area": {
//             "name": "Yeni Baki",
//             "prefix": "90"
//         }
//     },
//     {
//         "id": "65dc5ed2-1a99-4a5f-941f-76236ac689ac",
//         "ip_address": "172.16.31.3",
//         "area": {
//             "name": "Bileceri",
//             "prefix": "31"
//         }
//     },
//     {
//         "id": "d372e868-7080-44cd-9380-ce60ca860111",
//         "ip_address": "172.16.82.47",
//         "area": {
//             "name": "Mir-Celal_1D",
//             "prefix": "82"
//         }
//     },
//     {
//         "id": "e2599ba8-222d-46bd-a8bd-294c57feb21b",
//         "ip_address": "172.16.92.193",
//         "area": {
//             "name": "Nargile",
//             "prefix": "92"
//         }
//     },
//     {
//         "id": "4f79946e-7d95-4219-abfa-f6acaa3ea1f5",
//         "ip_address": "172.16.90.200",
//         "area": {
//             "name": "Yeni Baki",
//             "prefix": "90"
//         }
//     },
//     {
//         "id": "9deb0231-8d73-437c-8992-75895077db55",
//         "ip_address": "172.16.73.115",
//         "area": {
//             "name": "Insaatcilar",
//             "prefix": "73"
//         }
//     },
//     {
//         "id": "63002467-361d-406d-8488-324f2e45f87c",
//         "ip_address": "172.16.73.108",
//         "area": {
//             "name": "Insaatcilar",
//             "prefix": "73"
//         }
//     },
//     {
//         "id": "c867f8ac-9db0-4f52-822c-6064fa8113aa",
//         "ip_address": "172.16.94.1",
//         "area": {
//             "name": "Xetai - (Natiq Aliyev)",
//             "prefix": "94"
//         }
//     },
//     {
//         "id": "d3ff1752-0d57-42e6-b558-92b997d9d06c",
//         "ip_address": "172.16.90.167",
//         "area": {
//             "name": "Yeni Baki",
//             "prefix": "90"
//         }
//     },
//     {
//         "id": "cc8c521a-8a46-4a7b-86b0-20d9c0156bc8",
//         "ip_address": "172.16.51.124",
//         "area": {
//             "name": "Clock Tower",
//             "prefix": "51"
//         }
//     },
//     {
//         "id": "5d326775-76a7-49d0-9944-3aa9d541a66c",
//         "ip_address": "172.16.30.83",
//         "area": {
//             "name": "Zerdabi_89",
//             "prefix": "30"
//         }
//     },
//     {
//         "id": "b8290e16-902e-4b8e-b640-0a9a00471f0b",
//         "ip_address": "172.16.43.131",
//         "area": {
//             "name": "Torpaq",
//             "prefix": "43"
//         }
//     },
//     {
//         "id": "1ef25af7-f9ba-4a6c-a00d-0cb046a07aab",
//         "ip_address": "172.16.50.153",
//         "area": {
//             "name": "Hesen Eliyev",
//             "prefix": "50"
//         }
//     },
//     {
//         "id": "3d5a337a-25c9-4ccd-942a-29f6b2d8c511",
//         "ip_address": "172.16.43.1",
//         "area": {
//             "name": "Torpaq",
//             "prefix": "43"
//         }
//     },
//     {
//         "id": "501fe8bd-c6d2-4b6c-8571-1e81a8c1668b",
//         "ip_address": "172.16.54.2",
//         "area": {
//             "name": "Semed Vurgun",
//             "prefix": "54"
//         }
//     },
//     {
//         "id": "78b7fee2-5645-4bd5-81c4-9eb55175be56",
//         "ip_address": "172.16.70.125",
//         "area": {
//             "name": "Sherur",
//             "prefix": "70"
//         }
//     },
//     {
//         "id": "9c99d793-9f8b-4568-a12c-ff366a7b8441",
//         "ip_address": "172.16.70.128",
//         "area": {
//             "name": "Esed_Ehmedov_(Arabachi)",
//             "prefix": "70"
//         }
//     },
//     {
//         "id": "be649235-030a-4d27-a0ed-0364f014e1d6",
//         "ip_address": "10.3.25.2",
//         "area": {
//             "name": "Telecom_Invest",
//             "prefix": "20"
//         }
//     },
//     {
//         "id": "71a94b70-aa5f-44fe-aa92-c51203e99be3",
//         "ip_address": "172.16.70.90",
//         "area": {
//             "name": "Sherur",
//             "prefix": "70"
//         }
//     },
//     {
//         "id": "fcca4a7b-6f06-4513-8a31-edfe7cbd3f82",
//         "ip_address": "172.16.77.15",
//         "area": {
//             "name": "AVD - SAFARI",
//             "prefix": "77"
//         }
//     },
//     {
//         "id": "dae489cf-098f-4f07-b95a-f79ba0037462",
//         "ip_address": "172.16.50.163",
//         "area": {
//             "name": "Hesen Eliyev",
//             "prefix": "50"
//         }
//     },
//     {
//         "id": "aef26871-5d5b-4e7d-8365-5f79b9a27805",
//         "ip_address": "172.16.77.14",
//         "area": {
//             "name": "AVD - SAFARI",
//             "prefix": "77"
//         }
//     },
//     {
//         "id": "b4b05cb5-4824-4403-af1e-55c252783db7",
//         "ip_address": "172.16.93.25",
//         "area": {
//             "name": "Telnov",
//             "prefix": "93"
//         }
//     },
//     {
//         "id": "496ea607-a15c-4c87-bc59-afc0bc3a0d40",
//         "ip_address": "172.16.50.172",
//         "area": {
//             "name": "Hesen Eliyev",
//             "prefix": "50"
//         }
//     },
//     {
//         "id": "152323bc-8b5a-46a5-932d-a4282d0a56bd",
//         "ip_address": "172.16.40.38",
//         "area": {
//             "name": "Zerdabi_74A",
//             "prefix": "40"
//         }
//     },
//     {
//         "id": "a343b467-d35d-4ae5-9131-34de18e9bcff",
//         "ip_address": "172.16.30.86",
//         "area": {
//             "name": "Zerdabi_89",
//             "prefix": "30"
//         }
//     },
//     {
//         "id": "839d0f80-d5fb-454d-b5bb-7bf76604a083",
//         "ip_address": "172.16.50.156",
//         "area": {
//             "name": "Hesen Eliyev",
//             "prefix": "50"
//         }
//     },
//     {
//         "id": "d24f9c50-4aac-461a-b2ec-e2822005c985",
//         "ip_address": "172.16.75.34",
//         "area": {
//             "name": "Neshriyyat",
//             "prefix": "75"
//         }
//     },
//     {
//         "id": "9658e4ee-2590-40a3-92d8-a07215debb8e",
//         "ip_address": "172.16.92.196",
//         "area": {
//             "name": "Nargile",
//             "prefix": "92"
//         }
//     },
//     {
//         "id": "cf037c66-eb9d-48dd-9acf-9ccc1484645b",
//         "ip_address": "172.16.50.162",
//         "area": {
//             "name": "Hesen Eliyev",
//             "prefix": "50"
//         }
//     },
//     {
//         "id": "557b1710-5f6a-4c80-841f-0043c606733c",
//         "ip_address": "172.16.70.180",
//         "area": {
//             "name": "Xiyabani_(Nuray)",
//             "prefix": "70"
//         }
//     },
//     {
//         "id": "89c73b02-be69-4be2-b7ac-48555bcd0bec",
//         "ip_address": "172.16.41.1",
//         "area": {
//             "name": "XDMX_(S.Mehdiyev)",
//             "prefix": "41"
//         }
//     },
//     {
//         "id": "af696e1d-ce6e-4942-8019-67f1a4cb8451",
//         "ip_address": "172.16.70.190",
//         "area": {
//             "name": "Xiyabani_(Nuray)",
//             "prefix": "70"
//         }
//     },
//     {
//         "id": "c4caac92-50f4-4a93-8f9d-c0c5763e41c8",
//         "ip_address": "172.16.70.127",
//         "area": {
//             "name": "Xiyabani_(Nuray)",
//             "prefix": "70"
//         }
//     },
//     {
//         "id": "0f881050-3f4c-4fe0-b7de-21e37911851c",
//         "ip_address": "172.16.90.245",
//         "area": {
//             "name": "Yeni Baki",
//             "prefix": "90"
//         }
//     },
//     {
//         "id": "e96a418e-9296-4665-af41-31e8a8769d9a",
//         "ip_address": "172.16.70.164",
//         "area": {
//             "name": "Elchin_Eziz (Talibli)",
//             "prefix": "70"
//         }
//     },
//     {
//         "id": "2ab2f751-a5fa-488c-953a-b4de4f2a9772",
//         "ip_address": "172.16.50.164",
//         "area": {
//             "name": "Hesen Eliyev",
//             "prefix": "50"
//         }
//     },
//     {
//         "id": "986392dd-e820-42c8-adca-fd50886d0f58",
//         "ip_address": "172.16.70.123",
//         "area": {
//             "name": "Elchin_Eziz (Talibli)",
//             "prefix": "70"
//         }
//     },
//     {
//         "id": "050ff264-cfde-41c6-80a5-d5c5ee3a75d2",
//         "ip_address": "172.16.70.140",
//         "area": {
//             "name": "Sherur",
//             "prefix": "70"
//         }
//     },
//     {
//         "id": "fab7dce2-4f0d-4fe7-9eb2-05faaac81aa6",
//         "ip_address": "172.16.41.91",
//         "area": {
//             "name": "XDMX_(S.Mehdiyev)",
//             "prefix": "41"
//         }
//     },
//     {
//         "id": "ba3276e2-4da2-4434-bc93-5ff9b9fe020d",
//         "ip_address": "172.16.70.98",
//         "area": {
//             "name": "Sherur",
//             "prefix": "70"
//         }
//     },
//     {
//         "id": "2fadf6c9-e08c-46c0-a0a9-5960c5632bb9",
//         "ip_address": "172.16.70.186",
//         "area": {
//             "name": "Sherur",
//             "prefix": "70"
//         }
//     },
//     {
//         "id": "563c690b-e792-4005-a4e9-fb8bc32b9e3e",
//         "ip_address": "172.16.70.184",
//         "area": {
//             "name": "Xiyabani_(Nuray)",
//             "prefix": "70"
//         }
//     },
//     {
//         "id": "aedf486b-c99a-49cd-9e25-693f87cbbc6b",
//         "ip_address": "10.3.20.3",
//         "area": {
//             "name": "Telecom_Invest",
//             "prefix": "20"
//         }
//     },
//     {
//         "id": "8742e5a5-c6f1-4aed-a76c-d43339d5b18a",
//         "ip_address": "10.3.23.4",
//         "area": {
//             "name": "Telecom_Invest",
//             "prefix": "20"
//         }
//     },
//     {
//         "id": "4adfc54c-023b-4824-84f2-bc0577484e1c",
//         "ip_address": "172.16.43.143",
//         "area": {
//             "name": "Torpaq",
//             "prefix": "43"
//         }
//     },
//     {
//         "id": "84b861f7-b1a1-445d-b4c9-f0a6e0b7de26",
//         "ip_address": "172.16.75.30",
//         "area": {
//             "name": "Neshriyyat",
//             "prefix": "75"
//         }
//     },
//     {
//         "id": "64aee86d-02d8-44fc-ae1b-093944a26df5",
//         "ip_address": "172.16.50.165",
//         "area": {
//             "name": "Hesen Eliyev",
//             "prefix": "50"
//         }
//     },
//     {
//         "id": "b9adf77d-12e9-4eca-b925-9daaec433461",
//         "ip_address": "172.16.30.89",
//         "area": {
//             "name": "Zerdabi_89",
//             "prefix": "30"
//         }
//     },
//     {
//         "id": "910afb07-0fd8-4938-be27-8d56e645af97",
//         "ip_address": "172.16.50.158",
//         "area": {
//             "name": "Hesen Eliyev",
//             "prefix": "50"
//         }
//     },
//     {
//         "id": "7bfff947-73ad-4e10-84ef-61f4eaab6043",
//         "ip_address": "172.16.70.243",
//         "area": {
//             "name": "Elchin_Eziz (Talibli)",
//             "prefix": "70"
//         }
//     },
//     {
//         "id": "3370b26a-6d3b-4cc8-80d5-ccfba4139f77",
//         "ip_address": "172.16.93.111",
//         "area": {
//             "name": "Telnov",
//             "prefix": "93"
//         }
//     },
//     {
//         "id": "329c9bd8-7dd7-46a2-a776-c65648a2c5ac",
//         "ip_address": "172.16.50.152",
//         "area": {
//             "name": "Hesen Eliyev",
//             "prefix": "50"
//         }
//     },
//     {
//         "id": "4b7ee73f-f79d-4c79-b0c0-a4c8ce642d88",
//         "ip_address": "172.16.73.116",
//         "area": {
//             "name": "Insaatcilar",
//             "prefix": "73"
//         }
//     },
//     {
//         "id": "6bd03536-e4d3-4ad3-aa08-80c9a10ae803",
//         "ip_address": "172.16.70.124",
//         "area": {
//             "name": "Elchin_Eziz (Talibli)",
//             "prefix": "70"
//         }
//     },
//     {
//         "id": "8920b6e2-c634-4c24-bffa-056a5ec8fe3f",
//         "ip_address": "172.16.42.62",
//         "area": {
//             "name": "Sherifzade158",
//             "prefix": "42"
//         }
//     },
//     {
//         "id": "67708e5b-0ec8-4c0a-beb1-8409851368f7",
//         "ip_address": "172.16.75.3",
//         "area": {
//             "name": "Neshriyyat",
//             "prefix": "75"
//         }
//     },
//     {
//         "id": "1066f7fa-99da-472c-b071-95096eabf8cd",
//         "ip_address": "172.16.54.3",
//         "area": {
//             "name": "Semed Vurgun",
//             "prefix": "54"
//         }
//     },
//     {
//         "id": "3cff8385-b20a-4d58-9826-0d1186e668f1",
//         "ip_address": "172.16.53.2",
//         "area": {
//             "name": "Koroglu_Rehimov",
//             "prefix": "53"
//         }
//     },
//     {
//         "id": "134be519-3737-4522-842e-1b2250a1cd80",
//         "ip_address": "172.16.43.140",
//         "area": {
//             "name": "Torpaq",
//             "prefix": "43"
//         }
//     },
//     {
//         "id": "2d5001e7-3d06-449f-b2d6-3df14f3cb98b",
//         "ip_address": "172.16.90.212",
//         "area": {
//             "name": "Yeni Baki",
//             "prefix": "90"
//         }
//     },
//     {
//         "id": "353af30e-fe62-4086-b6c0-b15651ed6ca8",
//         "ip_address": "172.16.50.60",
//         "area": {
//             "name": "Hesen Eliyev",
//             "prefix": "50"
//         }
//     },
//     {
//         "id": "41e656d2-d7a7-49cd-bbbd-c677202af616",
//         "ip_address": "172.16.93.100",
//         "area": {
//             "name": "Telnov",
//             "prefix": "93"
//         }
//     },
//     {
//         "id": "b4b96bb0-d4c6-4b80-8258-2c558e6a20e6",
//         "ip_address": "172.16.30.76",
//         "area": {
//             "name": "Zerdabi_89",
//             "prefix": "30"
//         }
//     },
//     {
//         "id": "f09f666e-01e7-4fc1-b672-c5bd93a641d3",
//         "ip_address": "172.16.47.10",
//         "area": {
//             "name": "Bayil",
//             "prefix": "47"
//         }
//     },
//     {
//         "id": "e50b297f-e860-4f92-ac02-0b028fdd016d",
//         "ip_address": "172.16.93.254",
//         "area": {
//             "name": "Telnov",
//             "prefix": "93"
//         }
//     },
//     {
//         "id": "21ab8272-b036-4611-9967-9fd1cccb2e2f",
//         "ip_address": "172.16.90.147",
//         "area": {
//             "name": "Yeni Baki",
//             "prefix": "90"
//         }
//     },
//     {
//         "id": "2cd89baa-bd45-4966-819c-fc934db0d224",
//         "ip_address": "172.16.60.36",
//         "area": {
//             "name": "Xirdalan-1",
//             "prefix": "60"
//         }
//     },
//     {
//         "id": "06a55369-7b67-4888-aa64-f2e8658b2a24",
//         "ip_address": "172.16.50.159",
//         "area": {
//             "name": "Hesen Eliyev",
//             "prefix": "50"
//         }
//     },
//     {
//         "id": "7b5c2236-cdd5-48ba-8c75-7576d4b0c77c",
//         "ip_address": "172.16.30.102",
//         "area": {
//             "name": "Zerdabi_89",
//             "prefix": "30"
//         }
//     },
//     {
//         "id": "e1a7012d-a8e7-45c4-bfce-7030e2c4eab6",
//         "ip_address": "172.16.73.112",
//         "area": {
//             "name": "Insaatcilar",
//             "prefix": "73"
//         }
//     },
//     {
//         "id": "f306f1c5-1b10-4ddc-b37d-be6518c51485",
//         "ip_address": "10.3.23.3",
//         "area": {
//             "name": "Telecom_Invest",
//             "prefix": "20"
//         }
//     },
//     {
//         "id": "d3419521-1d5b-446d-b831-e87d602fba05",
//         "ip_address": "172.16.73.119",
//         "area": {
//             "name": "Insaatcilar",
//             "prefix": "73"
//         }
//     },
//     {
//         "id": "7622fceb-9cc3-40de-a735-7f55612c423c",
//         "ip_address": "172.16.90.99",
//         "area": {
//             "name": "Yeni Baki",
//             "prefix": "90"
//         }
//     },
//     {
//         "id": "42d35afe-6494-4307-a268-a6a0faec6594",
//         "ip_address": "10.3.22.6",
//         "area": {
//             "name": "Telecom_Invest",
//             "prefix": "20"
//         }
//     },
//     {
//         "id": "333462fe-d04c-4364-a6bb-8fa615201ea6",
//         "ip_address": "172.16.30.105",
//         "area": {
//             "name": "Zerdabi_89",
//             "prefix": "30"
//         }
//     },
//     {
//         "id": "f3712cde-7229-45a4-b4ca-49b3d4dda358",
//         "ip_address": "172.16.90.49",
//         "area": {
//             "name": "Yeni Baki",
//             "prefix": "90"
//         }
//     },
//     {
//         "id": "2d3e1a93-0860-40e9-8da1-cd8f30622ac0",
//         "ip_address": "172.16.92.195",
//         "area": {
//             "name": "Nargile",
//             "prefix": "92"
//         }
//     },
//     {
//         "id": "eeed8ae5-202b-438b-a47f-b1459b3c5c17",
//         "ip_address": "172.16.73.121",
//         "area": {
//             "name": "Insaatcilar",
//             "prefix": "73"
//         }
//     },
//     {
//         "id": "3992d243-a350-48c2-9f46-6573cc2b2205",
//         "ip_address": "172.16.54.4",
//         "area": {
//             "name": "Semed Vurgun",
//             "prefix": "54"
//         }
//     },
//     {
//         "id": "c1502be3-5349-4356-b2c0-adc28e8294f3",
//         "ip_address": "172.16.92.199",
//         "area": {
//             "name": "Nargile",
//             "prefix": "92"
//         }
//     },
//     {
//         "id": "5e60e7e6-4d75-4aca-95b0-1c1c5e019c74",
//         "ip_address": "172.16.42.148",
//         "area": {
//             "name": "Sherifzade158",
//             "prefix": "42"
//         }
//     },
//     {
//         "id": "88f07013-b210-41d9-9c49-8e475c1d3e29",
//         "ip_address": "172.16.30.87",
//         "area": {
//             "name": "Zerdabi_89",
//             "prefix": "30"
//         }
//     },
//     {
//         "id": "9586de84-e2a8-4941-ad05-b8c646075941",
//         "ip_address": "172.16.42.145",
//         "area": {
//             "name": "Sherifzade158",
//             "prefix": "42"
//         }
//     },
//     {
//         "id": "685e27a5-4230-46cd-91b2-50d03f94f0d1",
//         "ip_address": "172.16.30.104",
//         "area": {
//             "name": "Zerdabi_89",
//             "prefix": "30"
//         }
//     },
//     {
//         "id": "eeca4a61-bece-4cd7-b257-932d6be453cf",
//         "ip_address": "172.16.90.219",
//         "area": {
//             "name": "Yeni Baki",
//             "prefix": "90"
//         }
//     },
//     {
//         "id": "d435d8a2-103d-40b6-9237-77f625336d24",
//         "ip_address": "172.16.30.72",
//         "area": {
//             "name": "Zerdabi_89",
//             "prefix": "30"
//         }
//     },
//     {
//         "id": "9b50384f-093a-4422-ae1e-14fdf0cbf2db",
//         "ip_address": "172.16.73.120",
//         "area": {
//             "name": "Insaatcilar",
//             "prefix": "73"
//         }
//     },
//     {
//         "id": "ef946cc1-88c7-4eb2-be18-8d9a5c39310a",
//         "ip_address": "172.16.70.118",
//         "area": {
//             "name": "Esed_Ehmedov_(Arabachi)",
//             "prefix": "70"
//         }
//     },
//     {
//         "id": "c1cef26e-7f48-4e68-b605-4a19dd84d46e",
//         "ip_address": "172.16.51.1",
//         "area": {
//             "name": "Clock Tower",
//             "prefix": "51"
//         }
//     },
//     {
//         "id": "a2ec96e4-b36b-4f4a-83c6-57f366688e1f",
//         "ip_address": "172.16.82.1",
//         "area": {
//             "name": "Mir-Celal_1D",
//             "prefix": "82"
//         }
//     },
//     {
//         "id": "7e327a13-30a8-4b99-898e-f111d23fcb33",
//         "ip_address": "172.16.90.213",
//         "area": {
//             "name": "Yeni Baki",
//             "prefix": "90"
//         }
//     },
//     {
//         "id": "252d2ec3-5f86-4422-b39e-55bf7f2a6c09",
//         "ip_address": "172.16.90.246",
//         "area": {
//             "name": "Yeni Baki",
//             "prefix": "90"
//         }
//     },
//     {
//         "id": "d8264baf-eb13-4b2b-aa1f-7f85f217ba59",
//         "ip_address": "172.16.75.37",
//         "area": {
//             "name": "Neshriyyat",
//             "prefix": "75"
//         }
//     },
//     {
//         "id": "d979913d-88c2-4484-88c3-62e9536e9dea",
//         "ip_address": "10.3.21.5",
//         "area": {
//             "name": "Telecom_Invest",
//             "prefix": "20"
//         }
//     },
//     {
//         "id": "153cd8b6-ee58-4332-93c4-24315baf974e",
//         "ip_address": "172.16.70.241",
//         "area": {
//             "name": "Sherur",
//             "prefix": "70"
//         }
//     },
//     {
//         "id": "b404a6e4-13c1-4d1f-ac9b-0d66316f5a1e",
//         "ip_address": "172.16.54.229",
//         "area": {
//             "name": "Semed Vurgun",
//             "prefix": "54"
//         }
//     },
//     {
//         "id": "d23986cf-c80c-4189-b2bb-89de0db3cf27",
//         "ip_address": "172.16.61.31",
//         "area": {
//             "name": "Xirdalan-2",
//             "prefix": "60"
//         }
//     },
//     {
//         "id": "952945c9-5675-4cd1-8a36-dea1fcd54682",
//         "ip_address": "172.16.96.96",
//         "area": {
//             "name": "Turan MTK",
//             "prefix": "96"
//         }
//     },
//     {
//         "id": "3235a439-4978-493c-bc6b-e0b8d1430ad0",
//         "ip_address": "172.16.91.11",
//         "area": {
//             "name": "Xudu_Memmedov",
//             "prefix": "91"
//         }
//     },
//     {
//         "id": "1271056f-e734-475e-9e53-1d2082ac0a60",
//         "ip_address": "172.16.53.13",
//         "area": {
//             "name": "Koroglu_Rehimov",
//             "prefix": "53"
//         }
//     },
//     {
//         "id": "1515b0ee-466e-499a-84d8-3706c28c7a43",
//         "ip_address": "172.16.90.17",
//         "area": {
//             "name": "Yeni Baki",
//             "prefix": "90"
//         }
//     },
//     {
//         "id": "4063d6c7-d7fd-4a5f-a091-93d67a0339b0",
//         "ip_address": "172.16.61.207",
//         "area": {
//             "name": "Xirdalan-2",
//             "prefix": "60"
//         }
//     },
//     {
//         "id": "67e11fd6-0aab-496d-bf8b-ab2df32d2479",
//         "ip_address": "172.16.91.12",
//         "area": {
//             "name": "Xudu_Memmedov",
//             "prefix": "91"
//         }
//     },
//     {
//         "id": "1dd85db6-fb00-432c-86bf-19d66d62dc41",
//         "ip_address": "172.16.91.15",
//         "area": {
//             "name": "Xudu_Memmedov",
//             "prefix": "91"
//         }
//     },
//     {
//         "id": "4eea1750-2911-4b75-9142-cbbe8b7a80d7",
//         "ip_address": "172.16.90.32",
//         "area": {
//             "name": "Yeni Baki",
//             "prefix": "90"
//         }
//     },
//     {
//         "id": "4f427b06-dd36-496f-9e62-05a70c593e23",
//         "ip_address": "172.16.53.10",
//         "area": {
//             "name": "Koroglu_Rehimov",
//             "prefix": "53"
//         }
//     },
//     {
//         "id": "803ef339-d989-40ad-aa76-781f99867c67",
//         "ip_address": "172.16.91.13",
//         "area": {
//             "name": "Xudu_Memmedov",
//             "prefix": "91"
//         }
//     },
//     {
//         "id": "f5250b17-553c-49e9-8a0b-eac677d9d27b",
//         "ip_address": "172.16.91.14",
//         "area": {
//             "name": "Xudu_Memmedov",
//             "prefix": "91"
//         }
//     },
//     {
//         "id": "7ec9a593-68a1-4c13-8679-6c872a113bb4",
//         "ip_address": "172.16.91.16",
//         "area": {
//             "name": "Xudu_Memmedov",
//             "prefix": "91"
//         }
//     },
//     {
//         "id": "64e4416e-e1b1-48d1-8daa-cf51b5a6a143",
//         "ip_address": "172.16.71.11",
//         "area": {
//             "name": "Huseyn Cavid",
//             "prefix": "71"
//         }
//     },
//     {
//         "id": "afa47509-6c01-45aa-921f-2204d2172067",
//         "ip_address": "172.16.71.10",
//         "area": {
//             "name": "Huseyn Cavid",
//             "prefix": "71"
//         }
//     },
//     {
//         "id": "4aa3a3be-2fc4-4976-940c-33aed56cfc00",
//         "ip_address": "172.16.90.14",
//         "area": {
//             "name": "Yeni Baki",
//             "prefix": "90"
//         }
//     },
//     {
//         "id": "3d336e77-6c28-4f21-9bc2-c9a0fc943b34",
//         "ip_address": "172.16.71.12",
//         "area": {
//             "name": "Huseyn Cavid",
//             "prefix": "71"
//         }
//     },
//     {
//         "id": "b30ccd7d-416b-4e25-a016-674c2fbf2a54",
//         "ip_address": "172.16.91.10",
//         "area": {
//             "name": "Xudu_Memmedov",
//             "prefix": "91"
//         }
//     },
//     {
//         "id": "43127a28-2479-4a11-9253-373186a3e0a5",
//         "ip_address": "172.16.53.12",
//         "area": {
//             "name": "Koroglu_Rehimov",
//             "prefix": "53"
//         }
//     },
//     {
//         "id": "740ba9bd-5c1d-4808-95b2-ab847592594d",
//         "ip_address": "172.16.90.16",
//         "area": {
//             "name": "Yeni Baki",
//             "prefix": "90"
//         }
//     },
//     {
//         "id": "f6af72ce-4c59-4f2d-9a3f-8cbe87166549",
//         "ip_address": "172.16.92.162",
//         "area": {
//             "name": "Nargile",
//             "prefix": "92"
//         }
//     },
//     {
//         "id": "4335317d-2fbe-4110-929a-4348f6c31fe4",
//         "ip_address": "172.16.73.90",
//         "area": {
//             "name": "Insaatcilar",
//             "prefix": "73"
//         }
//     },
//     {
//         "id": "f6befa73-3dfd-4097-a579-d4a72a7202ee",
//         "ip_address": "172.16.50.218",
//         "area": {
//             "name": "Hesen Eliyev",
//             "prefix": "50"
//         }
//     },
//     {
//         "id": "48148db8-cb62-4206-b568-bad8596cf41c",
//         "ip_address": "172.16.52.189",
//         "area": {
//             "name": "Azadliq",
//             "prefix": "52"
//         }
//     }
// ]

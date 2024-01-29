// // import React, { useState } from 'react';
// import axios, { AxiosResponse } from 'axios';
// import { ISwitchIp } from '../../models/models';
// import Select from 'react-select';
// import { useEffect, useState } from 'react';


// interface PropsOption {
//     ip: ISwitchIp
//   };

// const IpAdress = ({ip}: PropsOption) => {
//   const [selectOptions, setSelectOptions] = useState<{ value: string; label: string }[]>([{ value: "173.25.25.25", label: "173.25.25.25" }]);

//   const {BASE_URL} = process.env;

//   useEffect(() => {

//     const callSendGetRequest = () => {
//         sendGetRequest()
//     }
//     callSendGetRequest()

//     // eslint-disable-next-line
// }, [])
//   const sendGetRequest = async () => {

//     try {

//         // dispatch(changeSpinnerDisplay("flex"))
//         const response: AxiosResponse = await axios.get(`${BASE_URL}/switch/switches/?fields=ip_address,id`);
//         // dispatch(changeSpinnerDisplay("none"))

//         // You can access the response data using response.data
//         const newIpAddresses: PropsOption[] = response.data.map((element: { ip_address: string; id: string; ip_address_label: string; }) => ({
//             ip_address: element.ip_address,
//             id: element.id,
//             ip_address_label: element.ip_address,
//         }));

//         // Sort the IP addresses in ascending order
//         // newIpAddresses.sort((a: { ip_address: string }, b: { ip_address: string }) => {
//         //     // Split IP addresses by dots and compare each part
//         //     const ipA = a.ip_address.split('.').map(Number);
//         //     const ipB = b.ip_address.split('.').map(Number);

//         //     for (let i = 0; i < 4; i++) {
//         //         if (ipA[i] < ipB[i]) {
//         //             return -1;
//         //         }
//         //         if (ipA[i] > ipB[i]) {
//         //             return 1;
//         //         }
//         //     }
//         //     return 0;
//         // });
//   return (
//     <div className='ip-dropdown'>
//         {/* <p>{ip.ip_address}</p> */}
//         <Select options={selectOptions}/>
//     </div>
//   )
// }

// export default IpAdress

// import axios, { AxiosResponse } from 'axios';
// import { ISwitchIp } from '../../models/models';
// import Select from 'react-select';
// import { useEffect, useState } from 'react';
// import { HOST_URL } from '../../utils/Api/api';

// // interface PropsOption {
// //   ip: ISwitchIp;
// // }

// const IpAdress = () => {
//   // const [switchDetailsDisplay, setSwitchDetailsDisplay] = useState<React.CSSProperties>({ display: "none" })
//   const [selectOptions, setSelectOptions] = useState<{ value: string; label: string }[]>([
//     { value: "173.25.25.25", label: "173.25.25.25" },
//   ]);
//    const [selectedIpAddress, setSelectedIpAddress] = useState<ISwitchIp>({ ip_address: "172.16.70.1", id: "cb154d21-f4b0-4d03-8017-870b375568c0", ip_address_label: "172.16.70.1" });

//   // const { HOST_URL } = process.env;

//   useEffect(() => {
//     const callSendGetRequest = () => {
//       sendGetRequest();
//     };
//     callSendGetRequest();

//     // eslint-disable-next-line
//   }, []);

//   const sendGetRequest = async () => {
//     try {
//       const response: AxiosResponse = await axios.get(`${HOST_URL}/switch/switches/?fields=ip_address,id`);


//       const newIpAddresses: ISwitchIp[] = response.data.map((element: { ip_address: string; id: string; ip_address_label: string }) => ({
//         ip_address: element.ip_address,
//         id: element.id,
//         ip_address_label: element.ip_address,
//       }));

//       // Sort the IP addresses in ascending order
//       newIpAddresses.sort((a: { ip_address: string }, b: { ip_address: string }) => {
//           // Split IP addresses by dots and compare each part
//           const ipA = a.ip_address.split('.').map(Number);
//           const ipB = b.ip_address.split('.').map(Number);

//           for (let i = 0; i < 4; i++) {
//               if (ipA[i] < ipB[i]) {
//                   return -1;
//               }
//               if (ipA[i] > ipB[i]) {
//                   return 1;
//               }
//           }
//           return 0;
//       });
//       setSelectedIpAddress({
//         'ip_address': newIpAddresses[0].ip_address,
//         'id': newIpAddresses[0].id,
//         'ip_address_label': newIpAddresses[0].ip_address_label,
//     });
      
      
//     } catch (error) {
//       console.error('Error fetching IP addresses:', error);
//     }
//   };
//   const handleOnChange = async (selectedOption: { label: string, value: string } | null) => {
//     setSelectedIpAddress({
//         "ip_address": selectedOption ? selectedOption.label : "172.25.25.25",
//         "id": selectedOption ? selectedOption.value : "mdskfdsdskfdsfs",
//         "ip_address_label": selectedOption ? selectedOption.label : "172.25.25.25",
//     });
//     // const switch_data = await getSwitchDetails(selectedOption ? selectedOption.value : "saflkdsamflkfdsaokfkma")
//     // if (switch_data.data) {
//     //     setSwitchData(switch_data)
//     //     setSwitchDetailsDisplay({ display: 'block' })
//     // }
// };
//   return (
//     <div className='ip-dropdown'>
//       {/* <p>{ip.ip_address}</p> */}
//       <Select value={selectOptions[0]} options={selectOptions}  classNamePrefix="select" onChange={handleOnChange}/>
//     </div>
//   );
// };

// export default IpAdress;


import axios, { AxiosResponse } from 'axios';
import Select from 'react-select';
import { useEffect, useState } from 'react';
import { HOST_URL } from '../../utils/Api/api';
import { ISwitchIp } from '../../models/models';

const IpAdress = () => {
  const [selectOptions, setSelectOptions] = useState<{ value: string; label: string }[]>([
    { value: "173.25.25.25", label: "173.25.25.25" },
  ]);

  const [selectedIpAddress, setSelectedIpAddress] = useState<ISwitchIp>({
    ip_address: "172.16.70.1",
    id: "cb154d21-f4b0-4d03-8017-870b375568c0",
    ip_address_label: "172.16.70.1",
  });

  useEffect(() => {
    const callSendGetRequest = () => {
      sendGetRequest();
    };

    callSendGetRequest();
  }, []);

  const sendGetRequest = async () => {
    try {
      const response: AxiosResponse = await axios.get(`${HOST_URL}/switch/switches/?fields=ip_address,id`);

      const newIpAddresses: ISwitchIp[] = response.data.map((element: { ip_address: string; id: string; ip_address_label: string }) => ({
        ip_address: element.ip_address,
        id: element.id,
        ip_address_label: element.ip_address,
      }));

      newIpAddresses.sort((a: { ip_address: string }, b: { ip_address: string }) => {
        const ipA = a.ip_address.split('.').map(Number);
        const ipB = b.ip_address.split('.').map(Number);

        for (let i = 0; i < 4; i++) {
          if (ipA[i] < ipB[i]) {
            return -1;
          }
          if (ipA[i] > ipB[i]) {
            return 1;
          }
        }
        return 0;
      });

      setSelectedIpAddress({
        ip_address: newIpAddresses[0].ip_address,
        id: newIpAddresses[0].id,
        ip_address_label: newIpAddresses[0].ip_address_label,
      });
    } catch (error) {
      console.error('Error fetching IP addresses:', error);
    }
  };

  const handleOnChange = async (selectedOption: { label: string; value: string } | null) => {
    setSelectedIpAddress({
      ip_address: selectedOption ? selectedOption.label : "172.25.25.25",
      id: selectedOption ? selectedOption.value : "mdskfdsdskfdsfs",
      ip_address_label: selectedOption ? selectedOption.label : "172.25.25.25",
    });
  };

  return (
    <div className='ip-dropdown'>
      <Select value={selectOptions[0]} options={selectOptions} classNamePrefix="select" onChange={handleOnChange}/>
    </div>
  );
};

export default IpAdress;

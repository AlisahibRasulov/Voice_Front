export interface ISwitchIp {
    id:string;
    ip_address:string;
    ip_address_label: string;
  
  };


  export interface ISwitchInfo {
    id:string;
    area:{
        name:string;
        prefix:string;
      };
    ip_address:string;
    username:null;
    mac_address:null;
    product_model:null;
    device_type:string;
    status:boolean;
    description:string;
    switch_is_working:number;
    backup: string;
    created_date: string; 
    updated_date: string; 
    switch_model: string | null;
    area_address: string;


  };

  
//   {
//     "id": "f6ff26c7-201a-4c35-a8d9-39330fcfefd8",
//     "area": {
//         "name": "Xirdalan-1",
//         "prefix": "60"
//     },
//     "ip_address": "172.16.60.112",
//     "username": null,
//     "mac_address": null,
//     "product_model": null,
//     "device_type": "cisco_ios_telnet",
//     "status": false,
//     "description": "From python.",
//     "switch_is_working": 1,
//     "backup": "Building configuration...\n\nCurrent configuration : 8409 bytes\n!\nversion 12.2\nno service pad\nservice timestamps debug datetime msec\nservice timestamps log datetime msec\nservice password-encryption\nservice unsupported-transceiver\n!\nhostname Xirdalan_60.112\n!\nboot-start-marker\nboot-end-marker\n!\nenable secret 5 $1$N/y2$yBjRqCvO6ReIW93656f2v/\n!\nno aaa new-model\nswitch 1 provision ws-c3750v2-48ts\nsystem mtu routing 1500\nvtp mode transparent\nip subnet-zero\n!\n!\n!\n!\ncrypto pki trustpoint TP-self-signed-718179072\n enrollment selfsigned\n subject-name cn=IOS-Self-Signed-Certificate-718179072\n revocation-check none\n rsakeypair TP-self-signed-718179072\n!\n!\ncrypto pki certificate chain TP-self-signed-718179072\n certificate self-signed 01\n  30820246 308201AF A0030201 02020101 300D0609 2A864886 F70D0101 04050030 \n  30312E30 2C060355 04031325 494F532D 53656C66 2D536967 6E65642D 43657274 \n  69666963 6174652D 37313831 37393037 32301E17 0D393330 33303130 30303131 \n  305A170D 32303031 30313030 30303030 5A303031 2E302C06 03550403 1325494F \n  532D5365 6C662D53 69676E65 642D4365 72746966 69636174 652D3731 38313739 \n  30373230 819F300D 06092A86 4886F70D 01010105 0003818D 00308189 02818100 \n  9A50748C 6BA7DA96 613AA156 097C4E80 E6D3BDD7 2EFE6CE5 6389DB18 861578B2 \n  0B1FADAA FC0001DB FB631627 E6931653 E70E9FD2 BE549868 499493BD A9471A70 \n  99142CFF 364661BF 3D22A878 1D5A3CB3 0CC48668 26BDD44D 14967162 73B85BB8 \n  ABCFBD51 3ED469A6 48E15AF1 2A9FF9F4 8600ACC8 C880D45B 613B141D 03A733FF \n  02030100 01A37030 6E300F06 03551D13 0101FF04 05300301 01FF301B 0603551D \n  11041430 12821058 69726461 6C616E5F 36302E31 31322E30 1F060355 1D230418 \n  30168014 22DD5ACB 02E03B84 774BBA16 19E1EC05 428FD9DB 301D0603 551D0E04 \n  16041422 DD5ACB02 E03B8477 4BBA1619 E1EC0542 8FD9DB30 0D06092A 864886F7 \n  0D010104 05000381 81003921 663E19F3 954B4DA3 50A87B57 C576EB02 1EA957D8 \n  C8D88071 6146A9BA 3AE2F0FF 138D9BB2 CA594196 C283B50E AC6455E2 8DF8BD02 \n  CEE4082D 787B07A2 A790040E 37435086 EC93E003 D4174473 72DE6D30 B15E7C9F \n  50BBDB4E A7374E65 1BCB56D2 DA0E6E6D 68EDBD19 412B318D 518D9EBF 9A042584 \n  FBC444CC E821E60D 4479\n  quit\n!\n!\n!\n!\n!\nspanning-tree mode pvst\nspanning-tree extend system-id\n!\nvlan internal allocation policy ascending\n!\nvlan 600\n name MGMT\n!\nvlan 669\n name VOICE\n!\nvlan 2967\n name ACCESS\n!\n!\n!\ninterface FastEthernet1/0/1\n switchport access vlan 2967\n switchport mode access\n spanning-tree portfast\n!\ninterface FastEthernet1/0/2\n switchport access vlan 2967\n switchport mode access\n spanning-tree portfast\n!\ninterface FastEthernet1/0/3\n switchport access vlan 2967\n switchport mode access\n spanning-tree portfast\n!\ninterface FastEthernet1/0/4\n switchport access vlan 2967\n switchport mode access\n spanning-tree portfast\n!\ninterface FastEthernet1/0/5\n switchport access vlan 2967\n switchport mode access\n spanning-tree portfast\n!\ninterface FastEthernet1/0/6\n switchport access vlan 2967\n switchport mode access\n spanning-tree portfast\n!\ninterface FastEthernet1/0/7\n switchport access vlan 2967\n switchport mode access\n spanning-tree portfast\n!\ninterface FastEthernet1/0/8\n switchport access vlan 2967\n switchport mode access\n spanning-tree portfast\n!\ninterface FastEthernet1/0/9\n switchport access vlan 2967\n switchport mode access\n spanning-tree portfast\n!\ninterface FastEthernet1/0/10\n switchport access vlan 2967\n switchport mode access\n spanning-tree portfast\n!\ninterface FastEthernet1/0/11\n switchport access vlan 2967\n switchport mode access\n spanning-tree portfast\n!\ninterface FastEthernet1/0/12\n switchport access vlan 2967\n switchport mode access\n spanning-tree portfast\n!\ninterface FastEthernet1/0/13\n switchport access vlan 2967\n switchport mode access\n spanning-tree portfast\n!\ninterface FastEthernet1/0/14\n switchport access vlan 2967\n switchport mode access\n spanning-tree portfast\n!\ninterface FastEthernet1/0/15\n switchport access vlan 2967\n switchport mode access\n spanning-tree portfast\n!\ninterface FastEthernet1/0/16\n switchport access vlan 2967\n switchport mode access\n spanning-tree portfast\n!\ninterface FastEthernet1/0/17\n switchport access vlan 2967\n switchport mode access\n spanning-tree portfast\n!\ninterface FastEthernet1/0/18\n switchport access vlan 2967\n switchport mode access\n spanning-tree portfast\n!\ninterface FastEthernet1/0/19\n switchport access vlan 2967\n switchport mode access\n spanning-tree portfast\n!\ninterface FastEthernet1/0/20\n switchport access vlan 2967\n switchport mode access\n spanning-tree portfast\n!\ninterface FastEthernet1/0/21\n switchport access vlan 2967\n switchport mode access\n spanning-tree portfast\n!\ninterface FastEthernet1/0/22\n switchport access vlan 2967\n switchport mode access\n spanning-tree portfast\n!\ninterface FastEthernet1/0/23\n switchport access vlan 2967\n switchport mode access\n spanning-tree portfast\n!\ninterface FastEthernet1/0/24\n switchport access vlan 2967\n switchport mode access\n spanning-tree portfast\n!\ninterface FastEthernet1/0/25\n switchport access vlan 2967\n switchport mode access\n spanning-tree portfast\n!\ninterface FastEthernet1/0/26\n switchport access vlan 2967\n switchport mode access\n spanning-tree portfast\n!\ninterface FastEthernet1/0/27\n switchport access vlan 2967\n switchport mode access\n spanning-tree portfast\n!\ninterface FastEthernet1/0/28\n switchport access vlan 2967\n switchport mode access\n spanning-tree portfast\n!\ninterface FastEthernet1/0/29\n switchport access vlan 2967\n switchport mode access\n spanning-tree portfast\n!\ninterface FastEthernet1/0/30\n switchport access vlan 2967\n switchport mode access\n spanning-tree portfast\n!\ninterface FastEthernet1/0/31\n switchport access vlan 2967\n switchport mode access\n spanning-tree portfast\n!\ninterface FastEthernet1/0/32\n switchport access vlan 2967\n switchport mode access\n spanning-tree portfast\n!\ninterface FastEthernet1/0/33\n switchport access vlan 2967\n switchport mode access\n spanning-tree portfast\n!\ninterface FastEthernet1/0/34\n switchport access vlan 2967\n switchport mode access\n spanning-tree portfast\n!\ninterface FastEthernet1/0/35\n switchport access vlan 2967\n switchport mode access\n spanning-tree portfast\n!\ninterface FastEthernet1/0/36\n switchport access vlan 2967\n switchport mode access\n spanning-tree portfast\n!\ninterface FastEthernet1/0/37\n switchport access vlan 2967\n switchport mode access\n spanning-tree portfast\n!\ninterface FastEthernet1/0/38\n switchport access vlan 2967\n switchport mode access\n spanning-tree portfast\n!\ninterface FastEthernet1/0/39\n switchport access vlan 2967\n switchport mode access\n spanning-tree portfast\n!\ninterface FastEthernet1/0/40\n switchport access vlan 2967\n switchport mode access\n spanning-tree portfast\n!\ninterface FastEthernet1/0/41\n switchport access vlan 2967\n switchport mode access\n spanning-tree portfast\n!\ninterface FastEthernet1/0/42\n switchport access vlan 2967\n switchport mode access\n spanning-tree portfast\n!\ninterface FastEthernet1/0/43\n switchport access vlan 2967\n switchport mode access\n spanning-tree portfast\n!\ninterface FastEthernet1/0/44\n switchport access vlan 2967\n switchport mode access\n spanning-tree portfast\n!\ninterface FastEthernet1/0/45\n switchport access vlan 2967\n switchport mode access\n spanning-tree portfast\n!\ninterface FastEthernet1/0/46\n switchport access vlan 2967\n switchport mode access\n spanning-tree portfast\n!\ninterface FastEthernet1/0/47\n switchport access vlan 2967\n switchport mode access\n spanning-tree portfast\n!\ninterface FastEthernet1/0/48\n switchport access vlan 2967\n switchport mode access\n spanning-tree portfast\n!\ninterface GigabitEthernet1/0/1\n description **From_Sw_60.203**\n switchport trunk encapsulation dot1q\n switchport mode trunk\n ip dhcp snooping trust\n!\ninterface GigabitEthernet1/0/2\n switchport trunk encapsulation dot1q\n switchport mode trunk\n ip dhcp snooping trust\n!\ninterface GigabitEthernet1/0/3\n switchport trunk encapsulation dot1q\n switchport trunk allowed vlan 600,669,2967,3143\n switchport mode trunk\n ip dhcp snooping trust\n!\ninterface GigabitEthernet1/0/4\n switchport trunk encapsulation dot1q\n switchport trunk allowed vlan 600,669,2967,3143\n switchport mode trunk\n ip dhcp snooping trust\n!\ninterface Vlan1\n no ip address\n!\ninterface Vlan600\n ip address 172.16.60.112 255.255.255.0\n!\nip default-gateway 172.16.60.1\nip classless\nip http server\nip http secure-server\n!\nsnmp-server community telecominvest RO\n!\ncontrol-plane\n!\n!\nline con 0\n password 7 041A053A40245F7A29\n login\nline vty 0 4\n password 7 041A053A40245F7A29\n login\nline vty 5 15\n password 7 041A053A40245F7A29\n login\n!\nend\n",
//     "created_date": "2023-12-15T15:06:41.617354+04:00",
//     "updated_date": "2024-01-09T17:21:42.359794+04:00",
//     "switch_model": null,
//     "area_address": "4ac710da-4e78-4cc9-b5fd-61dab6285bbb"
// }

//   {
//     "id": "e50b297f-e860-4f92-ac02-0b028fdd016d",
//     "ip_address": "172.16.93.254",
//     "area": {
//         "name": "Telnov",
//         "prefix": "93"
//     }
// },
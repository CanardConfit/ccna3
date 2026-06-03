const quizData = [
    {
        "title": "1. Which design feature will limit the size of a failure domain in an enterprise network?",
        "text": "",
        "images": [],
        "options": [
            "the purchase of enterprise equipment that is designed for large traffic volume",
            "the installation of redundant power supplies",
            "the use of a collapsed core design",
            "the use of the building switch block approach"
        ],
        "correct": [3],
        "explanation": "To best limit the size of a failure domain, routers or multilayer switches are deployed in pairs using the building switch block approach. The failure of a single device should not bring the network down.",
        "id": 1
    },
    {
        "title": "2. Which two things should a network administrator modify on a router to perform password recovery? (Choose two.)",
        "text": "",
        "images": [],
        "options": [
            "the system image file",
            "the NVRAM file system",
            "the configuration register value",
            "the startup configuration file",
            "system ROM"
        ],
        "correct": [2, 3],
        "explanation": "To perform password recovery, the administrator changes the configuration register value (typically 0x2142) to ignore the startup configuration file, then saves the new password to the startup configuration.",
        "id": 2
    },
    {
        "title": "3. What type of network uses one common infrastructure to carry voice, data, and video signals?",
        "text": "",
        "images": [],
        "options": ["borderless", "converged", "managed", "switched"],
        "correct": [1],
        "explanation": "A converged network has only one physical network to install and manage, carrying voice, video, and data together.",
        "id": 3
    },
    {
        "title": "4. What are three advantages of using private IP addresses and NAT? (Choose three.)",
        "text": "",
        "images": [],
        "options": [
            "hides private LAN addressing from outside devices that are connected to the Internet",
            "permits LAN expansion without additional public IP addresses",
            "reduces CPU usage on customer routers",
            "creates multiple public IP addresses",
            "improves the performance of the router that is connected to the Internet",
            "conserves registered public IP addresses"
        ],
        "correct": [0, 1, 5],
        "explanation": "Private addresses are not visible from the Internet, can be used freely internally, and NAT conserves registered public IP addresses while allowing LAN expansion.",
        "id": 4
    },
    {
        "title": "5. Which two scenarios are examples of remote access VPNs? (Choose two.)",
        "text": "",
        "images": [],
        "options": [
            "All users at a large branch office can access company resources through a single VPN connection.",
            "A small branch office with three employees has a Cisco ASA that is used to create a VPN connection to the HQ.",
            "A toy manufacturer has a permanent VPN connection to one of its parts suppliers.",
            "A mobile sales agent is connecting to the company network via the Internet connection at a hotel.",
            "An employee who is working from home uses VPN client software on a laptop in order to connect to the company network."
        ],
        "correct": [3, 4],
        "explanation": "Remote access VPNs connect individual users via a VPN client installed on the user device. Site-to-site VPNs use gateways to connect entire networks.",
        "id": 5
    },
    {
        "title": "6. What are three benefits of cloud computing? (Choose three.)",
        "text": "",
        "images": [],
        "options": [
            "It utilizes end-user clients to do a substantial amount of data preprocessing and storage.",
            "It uses open-source software for distributed processing of large datasets.",
            "It streamlines the IT operations of an organization by subscribing only to needed services.",
            "It enables access to organizational data anywhere and at any time.",
            "It turns raw data into meaningful information by discovering patterns and relationships.",
            "It eliminates or reduces the need for onsite IT equipment, maintenance, and management."
        ],
        "correct": [2, 3, 5],
        "explanation": "Cloud computing provides access to data anytime/anywhere, streamlines IT operations through subscription services, and reduces the need for onsite IT equipment.",
        "id": 6
    },
    {
        "title": "7. What is a characteristic of a single-area OSPF network?",
        "text": "",
        "images": [],
        "options": [
            "All routers share a common forwarding database.",
            "All routers have the same neighbor table.",
            "All routers are in the backbone area.",
            "All routers have the same routing table."
        ],
        "correct": [2],
        "explanation": "In single-area OSPF all routers are in one area, which should be the backbone (Area 0). Neighbor and routing tables are unique to each router.",
        "id": 7
    },
    {
        "title": "8. What is a WAN?",
        "text": "",
        "images": [],
        "options": [
            "a network infrastructure that spans a limited physical area such as a city",
            "a network infrastructure that provides access to other networks over a large geographic area",
            "a network infrastructure that provides access in a small geographic area",
            "a network infrastructure designed to provide data storage, retrieval, and replication"
        ],
        "correct": [1],
        "explanation": "A WAN spans a relatively large geographic area and interconnects remote users, networks, and sites.",
        "id": 8
    },
    {
        "title": "9. A network administrator has been tasked with creating a disaster recovery plan. As part of this plan, the administrator is looking for a backup site for all of the data on the company servers. What service or technology would support this requirement?",
        "text": "",
        "images": [],
        "options": ["data center", "virtualization", "dedicated servers", "software defined networking"],
        "correct": [0],
        "explanation": "A data center is a facility used for storage and processing of data, serving as a backup site for disaster recovery plans.",
        "id": 9
    },
    {
        "title": "10. Which type of OSPF packet is used by a router to discover neighbor routers and establish neighbor adjacency?",
        "text": "",
        "images": [],
        "options": ["link-state update", "hello", "database description", "link-state request"],
        "correct": [1],
        "explanation": "The Hello packet (OSPF Type 1) is used to discover neighbors and establish neighbor adjacencies.",
        "id": 10
    },
    {
        "title": "11. Which two statements are characteristics of a virus? (Choose two.)",
        "text": "",
        "images": [],
        "options": [
            "A virus has an enabling vulnerability, a propagation mechanism, and a payload.",
            "A virus can be dormant and then activate at a specific time or date.",
            "A virus provides the attacker with sensitive data, such as passwords.",
            "A virus replicates itself by independently exploiting vulnerabilities in networks.",
            "A virus typically requires end-user activation."
        ],
        "correct": [1, 4],
        "explanation": "A virus typically requires end-user activation and can lie dormant before activating at a specific time/date.",
        "id": 11
    },
    {
        "title": "12. Which public WAN access technology utilizes copper telephone lines to provide access to subscribers that are multiplexed into a single T3 link connection?",
        "text": "",
        "images": [],
        "options": ["ISDN", "DSL", "cable", "dialup"],
        "correct": [1],
        "explanation": "DSL uses existing copper telephone lines; a DSLAM multiplexes multiple DSL subscribers into a high-capacity backhaul such as a T3 link.",
        "id": 12
    },
    {
        "title": "13. A customer needs a metropolitan area WAN connection that provides high-speed, dedicated bandwidth between two sites. Which type of WAN connection would best fulfill this need?",
        "text": "",
        "images": [],
        "options": ["packet-switched network", "Ethernet WAN", "circuit-switched network", "MPLS"],
        "correct": [1],
        "explanation": "Ethernet WAN provides high-speed dedicated bandwidth. MPLS, circuit-switched, and packet-switched networks support lower speeds.",
        "id": 13
    },
    {
        "title": "14. A company has contracted with a network security firm to help identify the vulnerabilities of the corporate network. The firm sends a team to perform penetration tests to the company network. Why would the team use debuggers?",
        "text": "",
        "images": [],
        "options": [
            "to detect installed tools within files and directories that provide threat actors remote access and control over a computer or network",
            "to reverse engineer binary files when writing exploits and when analyzing malware",
            "to obtain specially designed operating systems preloaded with tools optimized for hacking",
            "to detect any evidence of a hack or malware in a computer or network"
        ],
        "correct": [1],
        "explanation": "Debuggers reverse engineer binary files, used for writing exploits and analyzing malware (e.g., GDB, WinDbg, IDA Pro).",
        "id": 14
    },
    {
        "title": "15. Consider the following output for an ACL that has been applied to a router via the access-class in command. What can a network administrator determine from the output that is shown?",
        "text": "Standard IP access list 2<br>10 permit 192.168.10.0, wildcard bits 0.0.0.255 (2 matches)<br>20 deny any (1 match)",
        "images": [],
        "options": [
            "Two devices connected to the router have IP addresses of 192.168.10.x.",
            "Two devices were able to use SSH or Telnet to gain access to the router.",
            "Traffic from one device was not allowed to come into one router port and be routed outbound a different router port.",
            "Traffic from two devices was allowed to enter one router port and be routed outbound to a different router port."
        ],
        "correct": [1],
        "explanation": "The access-class command is used only on VTY ports (Telnet/SSH). The 2 matches indicate two devices were allowed access through the VTY ports.",
        "id": 15
    },
    {
        "title": "16. What command would be used as part of configuring NAT or PAT to clear dynamic entries before the timeout has expired?",
        "text": "",
        "images": [],
        "options": ["clear ip dhcp", "clear ip nat translation", "clear access-list counters", "clear ip pat statistics"],
        "correct": [1],
        "explanation": "The clear ip nat translation command manually clears dynamic NAT entries before the 24-hour timeout expires.",
        "id": 16
    },
    {
        "title": "17. What are two characteristics of video traffic? (Choose two.)",
        "text": "",
        "images": [],
        "options": [
            "Video traffic consumes less network resources than voice traffic consumes.",
            "Video traffic latency should not exceed 400 ms.",
            "Video traffic is more resilient to loss than voice traffic is.",
            "Video traffic requires a minimum of 30 kbs of bandwidth.",
            "Video traffic is unpredictable and inconsistent."
        ],
        "correct": [1, 4],
        "explanation": "Video is unpredictable, inconsistent, and bursty, and its latency should not exceed 400 ms. It is less resilient to loss than voice and needs more bandwidth.",
        "id": 17
    },
    {
        "title": "18. Refer to the exhibit. A technician is configuring R2 for static NAT to allow the client to access the web server. What is a possible reason that the client PC cannot access the web server?",
        "text": "",
        "images": ["https://itexamanswers.net/wp-content/uploads/2016/02/2017-06-26_224429.jpg"],
        "options": [
            "The IP NAT statement is incorrect.",
            "Interface Fa0/1 should be identified as the outside NAT interface.",
            "Interface S0/0/0 should be identified as the outside NAT interface.",
            "The configuration is missing a valid access control list."
        ],
        "correct": [2],
        "explanation": "Interface S0/0/0 should be identified as the outside NAT interface using the R2(config-if)# ip nat outside command.",
        "id": 18
    },
    {
        "title": "19. In setting up a small office network, the network administrator decides to assign private IP addresses dynamically to workstations and mobile devices. Which feature must be enabled on the company router in order for office devices to access the internet?",
        "text": "",
        "images": [],
        "options": ["UPnP", "MAC filtering", "NAT", "QoS"],
        "correct": [2],
        "explanation": "NAT converts private addresses to internet-routable addresses, allowing office devices to access the internet.",
        "id": 19
    },
    {
        "title": "20. A data center has recently updated a physical server to host multiple operating systems on a single CPU. The data center can now provide each customer with a separate web server without having to allocate an actual discrete server for each customer. What is the networking trend that is being implemented by the data center in this situation?",
        "text": "",
        "images": [],
        "options": ["online collaboration", "BYOD", "virtualization", "maintaining communication integrity"],
        "correct": [2],
        "explanation": "Virtualization runs several operating systems in parallel on a single CPU.",
        "id": 20
    },
    {
        "title": "21. Refer to the exhibit. Which address or addresses represent the inside global address?",
        "text": "",
        "images": ["https://itexamanswers.net/wp-content/uploads/2016/02/2017-06-26_224149.jpg"],
        "options": ["192.168.0.100", "10.1.1.2", "any address in the 10.1.1.0 network", "209.165.20.25"],
        "correct": [3],
        "explanation": "The inside global address is the address of an internal host as seen from the outside network, here 209.165.20.25 (the router's outside interface address).",
        "id": 21
    },
    {
        "title": "22. Which two IPsec protocols are used to provide data integrity?",
        "text": "",
        "images": [],
        "options": ["MD5", "DH", "AES", "SHA", "RSA"],
        "correct": [0, 3],
        "explanation": "MD5 and SHA provide data integrity. AES provides confidentiality, DH is for key exchange, and RSA is for authentication.",
        "id": 22
    },
    {
        "title": "23. If an outside host does not have the Cisco AnyConnect client preinstalled, how would the host gain access to the client image?",
        "text": "",
        "images": [],
        "options": [
            "The Cisco AnyConnect client is installed by default on most major operating systems.",
            "The host initiates a clientless VPN connection using a compliant web browser to download the client.",
            "The host initiates a clientless connection to a TFTP server to download the client.",
            "The host initiates a clientless connection to an FTP server to download the client."
        ],
        "correct": [1],
        "explanation": "The remote user initiates a clientless SSL VPN connection via a compliant web browser, then downloads and installs the AnyConnect client.",
        "id": 23
    },
    {
        "title": "24. A company is considering updating the campus WAN connection. Which two WAN options are examples of the private WAN architecture? (Choose two.)",
        "text": "",
        "images": [],
        "options": ["leased line", "cable", "digital subscriber line", "Ethernet WAN", "municipal Wi-Fi"],
        "correct": [0, 3],
        "explanation": "Private WAN infrastructure includes leased lines and Ethernet WAN. DSL, cable, and municipal Wi-Fi are public WAN infrastructure.",
        "id": 24
    },
    {
        "title": "25. Which type of QoS marking is applied to Ethernet frames?",
        "text": "",
        "images": [],
        "options": ["IP precedence", "DSCP", "ToS", "CoS"],
        "correct": [3],
        "explanation": "CoS marking allows a Layer 2 Ethernet frame to be marked with eight levels of priority (0-7).",
        "id": 25
    },
    {
        "title": "26. Refer to the exhibit. Routers R1 and R2 are connected via a serial link. One router is configured as the NTP master, and the other is an NTP client. Which two pieces of information can be obtained from the partial output of the show ntp associations detail command on R2? (Choose two.)",
        "text": "",
        "images": ["https://itexamanswers.net/wp-content/uploads/2017/03/2017-03-11_115313.jpg"],
        "options": [
            "Both routers are configured to use NTPv2.",
            "Router R1 is the master, and R2 is the client",
            "The IP address of R2 is 192.168.1.2.",
            "Router R2 is the master, and R1 is the client",
            "The IP address of R1 is 192.168.1.2"
        ],
        "correct": [1, 4],
        "explanation": "The show ntp associations command reveals the IP address of the NTP master (R1 at 192.168.1.2), with R2 as the client.",
        "id": 26
    },
    {
        "title": "27. Refer to the exhibit. The network administrator that has the IP address of 10.0.70.23/25 needs to have access to the corporate FTP server (10.0.54.5/28). The FTP server is also a web server that is accessible to all internal employees on networks within the 10.x.x.x address. No other traffic should be allowed to this server. Which extended ACL would be used to filter this traffic, and how would this ACL be applied? (Choose two.)",
        "text": "",
        "images": ["https://itexamanswers.net/wp-content/uploads/2015/06/i209858v1n1_209858.png"],
        "options": [
            "R1(config)# interface s0/0/0<br>R1(config-if)# ip access-group 105 out<br>R2(config)# interface gi0/0<br>R2(config-if)# ip access-group 105 in",
            "access-list 105 permit tcp host 10.0.70.23 host 10.0.54.5 eq 20<br>access-list 105 permit tcp host 10.0.70.23 host 10.0.54.5 eq 21<br>access-list 105 permit tcp 10.0.0.0 0.255.255.255 host 10.0.54.5 eq www<br>access-list 105 deny ip any host 10.0.54.5<br>access-list 105 permit ip any any",
            "access-list 105 permit ip host 10.0.70.23 host 10.0.54.5<br>access-list 105 permit tcp any host 10.0.54.5 eq www<br>access-list 105 permit ip any any",
            "R1(config)# interface gi0/0<br>R1(config-if)# ip access-group 105 out",
            "access-list 105 permit tcp host 10.0.54.5 any eq www<br>access-list 105 permit tcp host 10.0.70.23 host 10.0.54.5 eq 20<br>access-list 105 permit tcp host 10.0.70.23 host 10.0.54.5 eq 21"
        ],
        "correct": [1, 3],
        "explanation": "The ACL allows host 10.0.70.23 FTP access and HTTP access from any 10.x.x.x host, denies all other traffic to the server, and permits everything else. It is best placed closest to the server (R1 gi0/0 out).",
        "id": 27
    },
    {
        "title": "28. Refer to the exhibit. If the network administrator created a standard ACL that allows only devices that connect to the R2 G0/0 network access to the devices on the R1 G0/1 interface, how should the ACL be applied?",
        "text": "",
        "images": ["https://itexamanswers.net/wp-content/uploads/2016/02/i282157v1n1_282156.png"],
        "options": [
            "inbound on the R2 G0/0 interface",
            "outbound on the R1 G0/1 interface",
            "inbound on the R1 G0/1 interface",
            "outbound on the R2 S0/0/1 interface"
        ],
        "correct": [1],
        "explanation": "Standard ACLs filter on source IP only, so they are placed closest to the destination. The destination is the R1 G0/1 network, so apply it outbound on R1 G0/1.",
        "id": 28
    },
    {
        "title": "29. Which is a characteristic of a Type 2 hypervisor?",
        "text": "",
        "images": [],
        "options": [
            "does not require management console software",
            "has direct access to server hardware resources",
            "best suited for enterprise environments",
            "installs directly on hardware"
        ],
        "correct": [0],
        "explanation": "Type 2 hypervisors are hosted on an underlying OS, do not require a management console, and do not have direct access to hardware.",
        "id": 29
    },
    {
        "title": "30. What are the two types of VPN connections? (Choose two.)",
        "text": "",
        "images": [],
        "options": ["PPPoE", "Frame Relay", "site-to-site", "remote access", "leased line"],
        "correct": [2, 3],
        "explanation": "The two VPN connection types are site-to-site and remote access. PPPoE, leased lines, and Frame Relay are WAN technologies.",
        "id": 30
    },
    {
        "title": "31. Refer to the exhibit. What three conclusions can be drawn from the displayed output? (Choose three.)",
        "text": "",
        "images": ["https://itexamanswers.net/wp-content/uploads/2017/07/i212860v1n1_212860-1.png"],
        "options": [
            "The DR can be reached through the GigabitEthernet 0/0 interface.",
            "There have been 9 seconds since the last hello packet sent.",
            "This interface is using the default priority.",
            "The router ID values were not the criteria used to select the DR and the BDR.",
            "The router ID on the DR router is 3.3.3.3",
            "The BDR has three neighbors."
        ],
        "correct": [0, 1, 3],
        "explanation": "The DR is reachable through Gi0/0; with a 10 second Hello interval and 'Hello due in 00:00:01', 9 seconds have elapsed; and R3 is a DROTHER due to priority 0, so router ID was not the deciding factor.",
        "id": 31
    },
    {
        "title": "32. Refer to the exhibit. A network administrator is configuring an ACL to limit the connection to R1 vty lines to only the IT group workstations in the network 192.168.22.0/28. The administrator verifies the successful Telnet connections from a workstation with IP 192.168.22.5 to R1 before the ACL is applied. However, after the ACL is applied to the interface Fa0/0, Telnet connections are denied. What is the cause of the connection failure?",
        "text": "",
        "images": ["https://itexamanswers.net/wp-content/uploads/2015/06/i209884v1n1_209884.png"],
        "options": [
            "The enable secret password is not configured on R1.",
            "The IT group network is included in the deny statement.",
            "The permit ACE specifies a wrong port number.",
            "The permit ACE should specify protocol ip instead of tcp.",
            "The login command has not been entered for vty lines."
        ],
        "correct": [1],
        "explanation": "The deny ACE range 192.168.20.0 0.0.3.255 covers 192.168.20.0-192.168.23.255, which includes the IT group network 192.168.22.0/28. The order of deny and permit should be switched.",
        "id": 32
    },
    {
        "title": "33. What functionality does mGRE provide to the DMVPN technology?",
        "text": "",
        "images": [],
        "options": [
            "It allows the creation of dynamically allocated tunnels through a permanent tunnel source at the hub and dynamically allocated tunnel destinations at the spokes.",
            "It provides secure transport of private information over public networks, such as the Internet.",
            "It is a Cisco software solution for building multiple VPNs in an easy, dynamic, and scalable manner.",
            "It creates a distributed mapping database of public IP addresses for all VPN tunnel spokes."
        ],
        "correct": [0],
        "explanation": "mGRE allows dynamic creation of multiple spoke tunnels from one permanent VPN hub. NHRP handles address mapping and IPsec handles encryption.",
        "id": 33
    },
    {
        "title": "34. What is used to pre-populate the adjacency table on Cisco devices that use CEF to process packets?",
        "text": "",
        "images": [],
        "options": ["the FIB", "the routing table", "the ARP table", "the DSP"],
        "correct": [2],
        "explanation": "The CEF adjacency table is pre-populated by the ARP table, while the FIB is pre-populated by the routing table.",
        "id": 34
    },
    {
        "title": "35. What command would be used as part of configuring NAT or PAT to display information about NAT configuration parameters and the number of addresses in the pool?",
        "text": "",
        "images": [],
        "options": ["show running-config", "show ip nat statistics", "show ip cache", "show version"],
        "correct": [1],
        "explanation": "show ip nat statistics displays NAT configuration parameters, active translations, and address pool details including total addresses and allocations.",
        "id": 35
    },
    {
        "title": "36. What is a purpose of establishing a network baseline?",
        "text": "",
        "images": [],
        "options": [
            "It provides a statistical average for network performance.",
            "It creates a point of reference for future network evaluations.",
            "It manages the performance of network devices.",
            "It checks the security configuration of network devices."
        ],
        "correct": [1],
        "explanation": "A baseline establishes normal performance and creates a reference point to compare with future performance to detect abnormal situations.",
        "id": 36
    },
    {
        "type": "matching",
        "title": "37. Match the type of WAN device or service to the description. (Not all options are used.)",
        "text": "",
        "pairs": [
            { "left": "CPE", "right": "devices and inside wiring that are located on the enterprise edge and connect to a carrier link" },
            { "left": "DCE", "right": "devices that provide an interface for customers to connect to within the WAN cloud" },
            { "left": "DTE", "right": "customer devices that pass the data from a customer network for transmission over the WAN" },
            { "left": "local loop", "right": "a physical connection from the customer to the service provider POP" }
        ],
        "distractors": ["service provider facility taht connects the CPE to the provider network", "location where the responsibility for the connection changes from the customer to the service provider"],
        "explanation": "CPE is on the enterprise edge, DCE provides the WAN cloud interface, DTE passes customer data, and the local loop physically connects the customer to the provider POP.",
        "id": 37
    },
    {
        "title": "38. Which statement describes a characteristic of standard IPv4 ACLs?",
        "text": "",
        "images": [],
        "options": [
            "They filter traffic based on source IP addresses only.",
            "They can be created with a number but not with a name.",
            "They are configured in the interface configuration mode.",
            "They can be configured to filter traffic based on both source IP addresses and source ports."
        ],
        "correct": [0],
        "explanation": "Standard IPv4 ACLs filter on source IP addresses only. Both standard and extended ACLs can be named or numbered and are configured in global configuration mode.",
        "id": 38
    },
    {
        "title": "39. Refer to the exhibit. R1 is configured for NAT as displayed. What is wrong with the configuration?",
        "text": "",
        "images": ["https://itexamanswers.net/wp-content/uploads/2016/02/i212258v1n1_212258-2.jpg"],
        "options": [
            "NAT-POOL2 is not bound to ACL 1.",
            "Interface Fa0/0 should be identified as an outside NAT interface.",
            "The NAT pool is incorrect.",
            "Access-list 1 is misconfigured."
        ],
        "correct": [0],
        "explanation": "NAT-POOL2 must be bound to ACL 1 using R1(config)# ip nat inside source list 1 pool NAT-POOL2.",
        "id": 39
    },
    {
        "title": "40. Refer to the exhibit. What method can be used to enable an OSPF router to advertise a default route to neighboring OSPF routers?",
        "text": "",
        "images": ["https://itexamanswers.net/wp-content/uploads/2017/07/p53-1-1.png"],
        "options": [
            "Use a static route pointing to the ISP and redistribute it.",
            "Use the redistribute static command on R0-A.",
            "Use the default-information originate command on ISP.",
            "Use the default-information originate command on R0-A."
        ],
        "correct": [3],
        "explanation": "The edge router R0-A (ASBR) must be configured with a default static route and the default-information originate command to advertise the default route.",
        "id": 40
    },
    {
        "title": "41. A company has contracted with a network security firm to help identify the vulnerabilities of the corporate network. The firm sends a team to perform penetration tests to the company network. Why would the team use applications such as John the Ripper, THC Hydra, RainbowCrack, and Medusa?",
        "text": "",
        "images": [],
        "options": [
            "to capture and analyze packets within traditional Ethernet LANs or WLANs",
            "to probe and test the robustness of a firewall by using specially created forged packets",
            "to make repeated guesses in order to crack a password"
        ],
        "correct": [2],
        "explanation": "These applications are password crackers that make repeated guesses or bypass encryption to recover passwords.",
        "id": 41
    },
    {
        "title": "42. What are two syntax rules for writing a JSON array? (Choose two.)",
        "text": "",
        "images": [],
        "options": [
            "Each value in the array is separated by a comma.",
            "The array can include only one value type.",
            "A space must separate each value in the array.",
            "A semicolon separates the key and list of values.",
            "Values are enclosed in square brackets."
        ],
        "correct": [0, 4],
        "explanation": "A JSON array is enclosed in square brackets [ ] with values separated by commas.",
        "id": 42
    },
    {
        "title": "43. What is a characteristic of a Trojan horse as it relates to network security?",
        "text": "",
        "images": [],
        "options": [
            "An electronic dictionary is used to obtain a password to be used to infiltrate a key network device.",
            "Malware is contained in a seemingly legitimate executable program.",
            "Extreme quantities of data are sent to a particular network device interface.",
            "Too much information is destined for a particular memory block, causing additional memory areas to be affected."
        ],
        "correct": [1],
        "explanation": "A Trojan horse carries out malicious operations under the guise of a legitimate program.",
        "id": 43
    },
    {
        "title": "44. An attacker is redirecting traffic to a false default gateway in an attempt to intercept the data traffic of a switched network. What type of attack could achieve this?",
        "text": "",
        "images": [],
        "options": ["TCP SYN flood", "DNS tunneling", "DHCP spoofing", "ARP cache poisoning"],
        "correct": [2],
        "explanation": "In DHCP spoofing, an attacker sets up a fake DHCP server to force clients to use a false default gateway. DHCP snooping mitigates this.",
        "id": 44
    },
    {
        "title": "45. A company is developing a security policy for secure communication. In the exchange of critical messages between a headquarters office and a branch office, a hash value should only be recalculated with a predetermined code, thus ensuring the validity of data source. Which aspect of secure communications is addressed?",
        "text": "",
        "images": [],
        "options": ["data integrity", "non-repudiation", "origin authentication", "data confidentiality"],
        "correct": [2],
        "explanation": "Origin authentication guarantees the message is not a forgery and actually comes from whom it states.",
        "id": 45
    },
    {
        "title": "46. A company has contracted with a network security firm to help identify the vulnerabilities of the corporate network. The firm sends a team to perform penetration tests to the company network. Why would the team use packet sniffers?",
        "text": "",
        "images": [],
        "options": [
            "to detect installed tools within files and directories that provide threat actors remote access and control over a computer or network",
            "to detect any evidence of a hack or malware in a computer or network",
            "to probe and test the robustness of a firewall by using specially created forged packets",
            "to capture and analyze packets within traditional Ethernet LANs or WLANs"
        ],
        "correct": [3],
        "explanation": "Packet sniffers (e.g., Wireshark, Tcpdump) capture, monitor, and analyze network data exchanges in real-time.",
        "id": 46
    },
    {
        "title": "47. An administrator is configuring single-area OSPF on a router. One of the networks that must be advertised is 172.20.0.0 255.255.252.0. What wildcard mask would the administrator use in the OSPF network statement?",
        "text": "",
        "images": [],
        "options": ["0.0.15.255", "0.0.3.255", "0.0.7.255", "0.0.1.255"],
        "correct": [1],
        "explanation": "255.255.255.255 minus 255.255.252.0 equals 0.0.3.255.",
        "id": 47
    },
    {
        "type": "matching",
        "title": "48. Match the HTTP method with the RESTful operation.",
        "text": "",
        "pairs": [
            { "left": "POST", "right": "Create" },
            { "left": "GET", "right": "Read" },
            { "left": "PUT/PATCH", "right": "Update/Replace/Modify" },
            { "left": "DELETE", "right": "Delete" }
        ],
        "distractors": [],
        "explanation": "POST creates, GET reads, PUT/PATCH updates, and DELETE deletes (CRUD operations).",
        "id": 48
    },
    {
        "title": "49. Refer to the exhibit. What is the OSPF cost to reach the West LAN 172.16.2.0/24 from East?",
        "text": "",
        "images": ["https://itexamanswers.net/wp-content/uploads/2020/01/49.png"],
        "options": ["782", "74", "128", "65"],
        "correct": [3],
        "explanation": "The serial (T1) link cost is 64 and the GigabitEthernet interface cost is 1, totaling 65.",
        "id": 49
    },
    {
        "title": "50. What is one reason to use the ip ospf priority command when the OSPF routing protocol is in use?",
        "text": "",
        "images": [],
        "options": [
            "to activate the OSPF neighboring process",
            "to influence the DR/BDR election process",
            "to provide a backdoor for connectivity during the convergence process",
            "to streamline and speed up the convergence process"
        ],
        "correct": [1],
        "explanation": "OSPF priority (0-255) influences the DR/BDR election. The higher the priority, the more likely the router becomes DR; priority 0 prevents it from becoming DR/BDR.",
        "id": 50
    },
    {
        "title": "51. An ACL is applied inbound on a router interface. The ACL consists of a single entry. If a packet with a source address of 172.18.20.14, a destination address of 172.18.20.40, and a protocol of 21 is received on the interface, is the packet permitted or denied?",
        "text": "access-list 210 permit tcp 172.18.20.0 0.0.0.31 172.18.20.32 0.0.0.31 eq ftp",
        "images": [],
        "options": ["permitted", "denied"],
        "correct": [0],
        "explanation": "Source 172.18.20.14 is within 172.18.20.0-31, destination 172.18.20.40 is within 172.18.20.32-63, and protocol 21 matches eq ftp, so the packet is permitted.",
        "id": 51
    },
    {
        "title": "52. What is a characteristic of the two-tier spine-leaf topology of the Cisco ACI fabric architecture?",
        "text": "",
        "images": [],
        "options": [
            "The spine and leaf switches are always linked through core switches.",
            "The spine switches attach to the leaf switches and attach to each other for redundancy.",
            "The leaf switches always attach to the spines and they are interlinked through a trunk line.",
            "The leaf switches always attach to the spines, but they never attach to each other."
        ],
        "correct": [3],
        "explanation": "Every leaf switch connects to every spine switch, but leaf switches never connect directly to each other, ensuring all devices are one hop away.",
        "id": 52
    },
    {
        "title": "53. Which two scenarios would result in a duplex mismatch? (Choose two.)",
        "text": "",
        "images": [],
        "options": [
            "connecting a device with autonegotiation to another that is manually set to full-duplex",
            "starting and stopping a router interface during a normal operation",
            "connecting a device with an interface running at 100 Mbps to another with an interface running at 1000 Mbps",
            "configuring dynamic routing incorrectly",
            "manually setting the two connected devices to different duplex modes"
        ],
        "correct": [0, 4],
        "explanation": "A mismatch occurs when both ends are manually set to different modes, or one end autonegotiates while the other is fixed at full-duplex (the autonegotiating end defaults to half-duplex).",
        "id": 53
    },
    {
        "title": "54. A network technician is configuring SNMPv3 and has set a security level of auth. What is the effect of this setting?",
        "text": "",
        "images": [],
        "options": [
            "authenticates a packet by a string match of the username or community string",
            "authenticates a packet by using either the HMAC with MD5 method or the SHA method",
            "authenticates a packet by using either the HMAC MD5 or HMAC SHA algorithms and encrypts the packet with either the DES, 3DES or AES algorithms",
            "authenticates a packet by using the SHA algorithm only"
        ],
        "correct": [1],
        "explanation": "The auth security level uses either HMAC with MD5 or SHA. The priv level adds encryption.",
        "id": 54
    },
    {
        "title": "55. What are two types of attacks used on DNS open resolvers? (Choose two.)",
        "text": "",
        "images": [],
        "options": ["amplification and reflection", "resource utilization", "fast flux", "ARP poisoning", "cushioning"],
        "correct": [0, 1],
        "explanation": "DNS open resolver attacks include cache poisoning, amplification and reflection, and resource utilization (DoS).",
        "id": 55
    },
    {
        "title": "56. An ACL is applied inbound on a router interface. The ACL consists of a single entry. If a packet with a source address of 192.168.101.45, a destination address of 64.100.40.4, and a protocol of 23 is received on the interface, is the packet permitted or denied?",
        "text": "Case 1: <br> access-list 101 permit udp 192.168.100.0 0.0.2.255 64.100.40.0 0.0.0.15 eq telnet",
        "images": [],
        "options": ["permitted", "denied"],
        "correct": [1],
        "explanation": "The ACL permits UDP but Telnet (23) is TCP, and the source 192.168.101.45 does not match the range. The implicit deny applies.",
        "id": 56
    },
    {
        "title": "56. An ACL is applied inbound on a router interface. The ACL consists of a single entry. If a packet with a source address of 192.168.100.219, a destination address of 64.100.40.10, and a protocol of 54 is received on the interface, is the packet permitted or denied?",
        "text": "Case 2: <br> access-list 101 permit udp 192.168.100.0 0.0.2.255 64.100.40.0 0.0.0.15 eq telnet",
        "images": [],
        "options": ["permitted", "denied"],
        "correct": [1],
        "explanation": "Protocol 54 does not match eq telnet, so the packet is discarded by the implicit deny.",
        "id": 57
    },
    {
        "title": "57. Which type of resources are required for a Type 1 hypervisor?",
        "text": "",
        "images": [],
        "options": ["a dedicated VLAN", "a management console", "a host operating system", "a server running VMware Fusion"],
        "correct": [1],
        "explanation": "Type 1 (bare metal) hypervisors install directly on hardware and require a management console to manage VMs. VMware Fusion is a Type 2 hypervisor.",
        "id": 58
    },
    {
        "title": "58. In JSON, what is held within square brackets [ ]?",
        "text": "",
        "images": [],
        "options": ["nested values", "key/value pairs", "an object", "an array"],
        "correct": [3],
        "explanation": "Square brackets [ ] hold arrays (ordered lists of values). Curly braces { } hold objects.",
        "id": 59
    },
    {
        "title": "59. What are three components used in the query portion of a typical RESTful API request? (Choose three.)",
        "text": "",
        "images": [],
        "options": ["resources", "protocol", "API server", "format", "key", "parameters"],
        "correct": [3, 4, 5],
        "explanation": "The query portion includes format (JSON, XML, etc.), key (authentication), and parameters (query information).",
        "id": 60
    },
    {
        "title": "60. A user reports that when the corporate web page URL is entered on a web browser, an error message indicates that the page cannot be displayed. The help-desk technician asks the user to enter the IP address of the web server to see if the page can be displayed. Which troubleshooting method is being used by the technician?",
        "text": "",
        "images": [],
        "options": ["top-down", "bottom-up", "divide-and-conquer", "substitution"],
        "correct": [2],
        "explanation": "By testing the IP address vs the URL, the technician uses divide-and-conquer to isolate whether it is a DNS issue or a lower-layer connectivity issue.",
        "id": 61
    },
    {
        "title": "61. Which protocol provides authentication, integrity, and confidentiality services and is a type of VPN?",
        "text": "",
        "images": [],
        "options": ["MD5", "AES", "IPsec", "ESP"],
        "correct": [2],
        "explanation": "IPsec provides authentication, integrity, access control, and confidentiality, and supports both remote-access and site-to-site VPNs.",
        "id": 62
    },
    {
        "title": "62. Which statement describes a characteristic of Cisco Catalyst 2960 switches?",
        "text": "",
        "images": [],
        "options": [
            "They are best used as distribution layer switches.",
            "New Cisco Catalyst 2960-C switches support PoE pass-through.",
            "They are modular switches.",
            "They do not support an active switched virtual interface (SVI) with IOS versions prior to 15.x."
        ],
        "correct": [1],
        "explanation": "New Catalyst 2960-C switches support PoE pass-through. The 2960 series are fixed-configuration access layer switches.",
        "id": 63
    },
    {
        "title": "63. Which component of the ACI architecture translates application policies into network programming?",
        "text": "",
        "images": [],
        "options": [
            "the hypervisor",
            "the Application Policy Infrastructure Controller",
            "the Nexus 9000 switch",
            "the Application Network Profile endpoints"
        ],
        "correct": [1],
        "explanation": "The APIC is the centralized controller that translates high-level application policies into the network programming required to configure the fabric.",
        "id": 64
    },
    {
        "title": "64. Which two pieces of information should be included in a logical topology diagram of a network? (Choose two.)",
        "text": "",
        "images": [],
        "options": [
            "device type",
            "cable specification",
            "interface identifier",
            "OS/IOS version",
            "connection type",
            "cable type and identifier"
        ],
        "correct": [2, 4],
        "explanation": "Interface identifier and connection type belong in a logical topology diagram. Device type, OS/IOS version, and cable details belong in a physical topology diagram.",
        "id": 65
    },
    {
        "title": "65. Refer to the exhibit. A PC at address 10.1.1.45 is unable to access the Internet. What is the most likely cause of the problem?",
        "text": "",
        "images": ["https://itexamanswers.net/wp-content/uploads/2017/06/41.jpg"],
        "options": [
            "The NAT pool has been exhausted.",
            "The wrong netmask was used on the NAT pool.",
            "Access-list 1 has not been configured properly.",
            "The inside and outside interfaces have been configured backwards."
        ],
        "correct": [0],
        "explanation": "The statistics show 2 of 2 addresses allocated (100%), so the NAT pool is out of global addresses for new clients.",
        "id": 66
    },
    {
        "title": "66. What are two benefits of using SNMP traps? (Choose two.)",
        "text": "",
        "images": [],
        "options": [
            "They eliminate the need for some periodic polling requests.",
            "They reduce the load on network and agent resources.",
            "They limit access for management systems only.",
            "They can provide statistics on TCP/IP packets that flow through Cisco devices.",
            "They can passively listen for exported NetFlow datagrams."
        ],
        "correct": [0, 1],
        "explanation": "Traps are unsolicited messages sent when events occur, eliminating continuous polling and reducing network and agent resource usage.",
        "id": 67
    },
    {
        "title": "67. Which statement accurately describes a characteristic of IPsec?",
        "text": "",
        "images": [],
        "options": [
            "IPsec works at the application layer and protects all application data.",
            "IPsec is a framework of standards developed by Cisco that relies on OSI algorithms.",
            "IPsec is a framework of proprietary standards that depend on Cisco specific algorithms.",
            "IPsec works at the transport layer and protects data at the network layer.",
            "IPsec is a framework of open standards that relies on existing algorithms."
        ],
        "correct": [4],
        "explanation": "IPsec is a framework of open standards that relies on existing algorithms to provide confidentiality, integrity, authentication, and secure key exchange.",
        "id": 68
    },
    {
        "title": "68. In a large enterprise network, which two functions are performed by routers at the distribution layer? (Choose two.)",
        "text": "",
        "images": [],
        "options": [
            "connect users to the network",
            "provide a high-speed network backbone",
            "connect remote networks",
            "provide Power over Ethernet to devices",
            "provide data traffic security"
        ],
        "correct": [2, 4],
        "explanation": "Distribution layer routers connect remote networks and provide data traffic security. The core provides the backbone; the access layer connects users and provides PoE.",
        "id": 69
    },
    {
        "title": "69. Which two statements describe the use of asymmetric algorithms? (Choose two.)",
        "text": "",
        "images": [],
        "options": [
            "Public and private keys may be used interchangeably.",
            "If a public key is used to encrypt the data, a public key must be used to decrypt the data.",
            "If a private key is used to encrypt the data, a public key must be used to decrypt the data.",
            "If a public key is used to encrypt the data, a private key must be used to decrypt the data.",
            "If a private key is used to encrypt the data, a private key must be used to decrypt the data."
        ],
        "correct": [2, 3],
        "explanation": "Asymmetric algorithms use a matched key pair: if a public key encrypts, the private key decrypts, and vice versa.",
        "id": 70
    },
    {
        "title": "70. Refer to the exhibit. A network administrator has deployed QoS and has configured the network to mark traffic on the VoIP phones as well as the Layer 2 and Layer 3 switches. Where should initial marking occur to establish the trust boundary?",
        "text": "",
        "images": ["https://itexamanswers.net/wp-content/uploads/2015/06/i290000v1n1_Trust-Boundary2.jpg"],
        "options": ["Trust Boundary 4", "Trust Boundary 3", "Trust Boundary 1", "Trust Boundary 2"],
        "correct": [2],
        "explanation": "Traffic should be marked as close to the source as possible. Traffic marked on VoIP phones is considered trusted as it enters the enterprise network.",
        "id": 71
    },
    {
        "title": "71. What are two benefits of extending access layer connectivity to users through a wireless medium? (Choose two.)",
        "text": "",
        "images": [],
        "options": [
            "reduced costs",
            "decreased number of critical points of failure",
            "increased flexibility",
            "increased bandwidth availability",
            "increased network management options"
        ],
        "correct": [0, 2],
        "explanation": "Wireless access provides increased flexibility and reduced costs, but does not increase bandwidth or decrease points of failure.",
        "id": 72
    },
    {
        "title": "72. What are two purposes of launching a reconnaissance attack on a network? (Choose two.)",
        "text": "",
        "images": [],
        "options": [
            "to scan for accessibility",
            "to retrieve and modify data",
            "to gather information about the network and devices",
            "to prevent other users from accessing the system",
            "to escalate access privileges"
        ],
        "correct": [0, 2],
        "explanation": "Reconnaissance attacks gather information about a network and scan for access. Retrieving/modifying data and escalating privileges are access attacks.",
        "id": 73
    },
    {
        "title": "73. A group of users on the same network are all complaining about their computers running slowly. After investigating, the technician determines that these computers are part of a zombie network. Which type of malware is used to control these computers?",
        "text": "",
        "images": [],
        "options": ["botnet", "spyware", "virus", "rootkit"],
        "correct": [0],
        "explanation": "A botnet is a network of infected zombie computers controlled by a hacker to attack other computers or steal data.",
        "id": 74
    },
    {
        "title": "74. An ACL is applied inbound on a router interface. The ACL consists of a single entry. If a packet with a source address of 10.1.1.201, a destination address of 192.31.7.45, and a protocol of 23 is received on the interface, is the packet permitted or denied?",
        "text": "access-list 101 permit tcp 10.1.1.0 0.0.0.255 host 192.31.7.45 eq dns",
        "images": [],
        "options": ["permitted", "denied"],
        "correct": [1],
        "explanation": "The ACL permits DNS (port 53) but protocol 23 is Telnet, so it does not match and is dropped by the implicit deny.",
        "id": 75
    },
    {
        "title": "75. Refer to the exhibit. From which location did this router load the IOS?",
        "text": "",
        "images": ["https://itexamanswers.net/wp-content/uploads/2015/05/i208382v1n1_208382.png"],
        "options": ["flash memory", "NVRAM", "RAM", "ROM", "a TFTP server"],
        "correct": [0],
        "explanation": "The System image file line shows 'flash:...', indicating the IOS was loaded from flash memory.",
        "id": 76
    },
    {
        "title": "76. Refer to the exhibit. Which data format is used to represent the data for network automation applications?",
        "text": "",
        "images": ["https://itexamanswers.net/wp-content/uploads/2019/12/i349058v2n1_347058.png"],
        "options": ["XML", "YAML", "HTML", "JSON"],
        "correct": [3],
        "explanation": "JSON encloses key/value pairs in braces { } with keys in double quotes and a colon separating keys from values.",
        "id": 77
    },
    {
        "title": "77. What QoS step must occur before packets can be marked?",
        "text": "",
        "images": [],
        "options": ["classifying", "shaping", "queuing", "policing"],
        "correct": [0],
        "explanation": "Classification analyzes traffic flows to determine the class before the packet can be marked.",
        "id": 78
    },
    {
        "title": "78. What is the main function of a hypervisor?",
        "text": "",
        "images": [],
        "options": [
            "It is used to create and manage multiple VM instances on a host machine.",
            "It is a device that filters and checks security credentials.",
            "It is a device that synchronizes a group of sensors.",
            "It is software used to coordinate and prepare data for analysis.",
            "It is used by ISPs to monitor cloud computing resources."
        ],
        "correct": [0],
        "explanation": "A hypervisor is software used to create and manage multiple VM instances.",
        "id": 79
    },
    {
        "title": "79. A company needs to interconnect several branch offices across a metropolitan area. The network engineer is seeking a solution that provides high-speed converged traffic, including voice, video, and data on the same network infrastructure. The company also wants easy integration to their existing LAN infrastructure. Which technology should be recommended?",
        "text": "",
        "images": [],
        "options": ["Frame Relay", "Ethernet WAN", "VSAT", "ISDN"],
        "correct": [1],
        "explanation": "Ethernet WAN connects easily to existing Ethernet LANs and provides a switched, high-bandwidth Layer 2 network for data, voice, and video.",
        "id": 80
    },
    {
        "title": "80. Refer to the exhibit. As traffic is forwarded out an egress interface with QoS treatment, which congestion avoidance technique is used?",
        "text": "",
        "images": ["https://itexamanswers.net/wp-content/uploads/2015/06/i288031v1n1_Traffic_Policing.png"],
        "options": ["traffic shaping", "weighted random early detection", "classification and marking", "traffic policing"],
        "correct": [3],
        "explanation": "Traffic policing drops traffic when it reaches a configured maximum rate, creating a saw-tooth output rate. Shaping buffers and smooths traffic.",
        "id": 81
    },
    {
        "title": "81. An ACL is applied inbound on a router interface. The ACL consists of a single entry. If a packet with a source address of 10.1.3.8, a destination address of 10.10.3.8, and a protocol of 53 is received on the interface, is the packet permitted or denied?",
        "text": "access-list 101 permit tcp 10.1.1.0 0.0.0.255 host 10.1.3.8 eq dns",
        "images": [],
        "options": ["permitted", "denied"],
        "correct": [1],
        "explanation": "Source 10.1.3.8 is outside 10.1.1.0-255 and the destination is not host 10.1.3.8, so it is dropped by the implicit deny.",
        "id": 82
    },
    {
        "title": "82. Refer to the exhibit. What is the purpose of the command marked with an arrow shown in the partial configuration output of a Cisco broadband router?",
        "text": "",
        "images": ["https://itexamanswers.net/wp-content/uploads/2016/02/2017-06-26_224832-1.png"],
        "options": [
            "defines which addresses are allowed into the router",
            "defines which addresses can be translated",
            "defines which addresses are assigned to a NAT pool",
            "defines which addresses are allowed out of the router"
        ],
        "correct": [1],
        "explanation": "The access-list used with ip nat inside source identifies the inside local traffic eligible for translation.",
        "id": 83
    },
    {
        "title": "83. If a router has two interfaces and is routing both IPv4 and IPv6 traffic, how many ACLs could be created and applied to it?",
        "text": "",
        "images": [],
        "options": ["12", "4", "8", "16", "6"],
        "correct": [2],
        "explanation": "Using the 'three Ps' (per protocol, per direction, per interface): 2 interfaces x 2 protocols x 2 directions = 8.",
        "id": 84
    },
    {
        "title": "84. Refer to the exhibit. An administrator first configured an extended ACL as shown by the output of the show access-lists command, then edited it with: no 20 / 5 permit tcp any any eq 22 / 20 deny udp any any. Which two conclusions can be drawn from this new configuration? (Choose two.)",
        "text": "Router(config)# ip access-list extended 101<br>Router(config-ext-nacl)# no 20<br>Router(config-ext-nacl)# 5 permit tcp any any eq 22<br>Router(config-ext-nacl)# 20 deny udp any any",
        "images": ["https://itexamanswers.net/wp-content/uploads/2019/12/i241882v4n1_241882.png"],
        "options": [
            "TFTP packets will be permitted.",
            "Ping packets will be permitted.",
            "Telnet packets will be permitted.",
            "SSH packets will be permitted.",
            "All TCP and UDP packets will be denied."
        ],
        "correct": [1, 3],
        "explanation": "After editing: 5 permit tcp any any eq ssh, 10 deny tcp any any, 20 deny udp any any, 30 permit icmp any any. Only SSH and ICMP (ping) packets are permitted.",
        "id": 85
    },
    {
        "title": "85. Which troubleshooting approach is more appropriate for a seasoned network administrator rather than a less-experienced network administrator?",
        "text": "",
        "images": [],
        "options": [
            "a less-structured approach based on an educated guess",
            "an approach comparing working and nonworking components to spot significant differences",
            "a structured approach starting with the physical layer and moving up through the layers of the OSI model until the cause of the problem is identified",
            "an approach that starts with the end-user applications and moves down through the layers of the OSI model until the cause of the problem has been identified"
        ],
        "correct": [0],
        "explanation": "The educated guess approach suits seasoned technicians who rely on extensive experience. Structured approaches are safer for less-experienced admins.",
        "id": 86
    },
    {
        "title": "86. Refer to the exhibit. Many employees are wasting company time accessing social media on their work computers. The company wants to stop this access. What is the best ACL type and placement to use in this situation?",
        "text": "",
        "images": ["https://itexamanswers.net/wp-content/uploads/2019/12/i350685v1n1_C3M4-Diagram.jpg"],
        "options": [
            "extended ACL outbound on R2 WAN interface towards the internet",
            "standard ACL outbound on R2 WAN interface towards the internet",
            "standard ACL outbound on R2 S0/0/0",
            "extended ACLs inbound on R1 G0/0 and G0/1"
        ],
        "correct": [3],
        "explanation": "Extended ACLs are needed to filter by destination/port and should be placed close to the source: inbound on R1 G0/0 and G0/1.",
        "id": 87
    },
    {
        "title": "87. Refer to the exhibit. An administrator is trying to configure PAT on R1, but PC-A is unable to access the Internet. Based on the debug output, what is most likely the cause of the problem?",
        "text": "",
        "images": ["https://itexamanswers.net/wp-content/uploads/2016/02/2017-03-09_142831.png"],
        "options": [
            "The inside and outside NAT interfaces have been configured backwards",
            "The inside global address is not on the same subnet as the ISP",
            "The address on Fa0/0 should be 64.100.0.1.",
            "The NAT source access list matches the wrong address range."
        ],
        "correct": [1],
        "explanation": "The translated address is on the 209.165.201.0 subnet but the ISP-facing interface is in 209.165.200.224/27, so return packets cannot be routed back.",
        "id": 88
    },
    {
        "title": "88. Why is QoS an important issue in a converged network that combines voice, video, and data communications?",
        "text": "",
        "images": [],
        "options": [
            "Data communications must be given the first priority.",
            "Voice and video communications are more sensitive to latency.",
            "Legacy equipment is unable to transmit voice and video without QoS.",
            "Data communications are sensitive to jitter."
        ],
        "correct": [1],
        "explanation": "Without QoS, time-sensitive voice and video packets are dropped as often as email and web traffic, degrading their quality.",
        "id": 89
    },
    {
        "title": "89. Which statement describes a VPN?",
        "text": "",
        "images": [],
        "options": [
            "VPNs use logical connections to create public networks through the Internet.",
            "VPNs use open source virtualization software to create the tunnel through the Internet.",
            "VPNs use dedicated physical connections to transfer data between remote users.",
            "VPNs use virtual connections to create a private network through a public network."
        ],
        "correct": [3],
        "explanation": "A VPN uses virtual connections routed through a public network to create a private network.",
        "id": 90
    },
    {
        "title": "90. In which OSPF state is the DR/BDR election conducted?",
        "text": "",
        "images": [],
        "options": ["ExStart", "Init", "Two-Way", "Exchange"],
        "correct": [2],
        "explanation": "The DR/BDR election is conducted during the Two-Way state once bidirectional communication is confirmed.",
        "id": 91
    },
    {
        "title": "91. Two corporations have just completed a merger. The network engineer has been asked to connect the two corporate networks without the expense of leased lines. Which solution would be the most cost effective method of providing a proper and secure connection between the two corporate networks?",
        "text": "",
        "images": [],
        "options": [
            "Cisco Secure Mobility Clientless SSL VPN",
            "Frame Relay",
            "remote access VPN using IPsec",
            "Cisco AnyConnect Secure Mobility Client with SSL",
            "site-to-site VPN"
        ],
        "correct": [4],
        "explanation": "A site-to-site VPN statically interconnects entire networks and is more cost effective than leased lines or Frame Relay.",
        "id": 92
    },
    {
        "title": "92. What is the final operational state that will form between an OSPF DR and a DROTHER once the routers reach convergence?",
        "text": "",
        "images": [],
        "options": ["loading", "established", "full", "two-way"],
        "correct": [2],
        "explanation": "A DROTHER forms a full adjacency with the DR and BDR; the Full state indicates the databases are identical.",
        "id": 93
    },
    {
        "title": "93. Refer to the exhibit. If the switch reboots and all routers have to re-establish OSPF adjacencies, which routers will become the new DR and BDR?",
        "text": "Case 1",
        "images": ["https://itexamanswers.net/wp-content/uploads/2020/01/i255837v1n1_255837.gif"],
        "options": [
            "Router R3 will become the DR and router R1 will become the BDR.",
            "Router R4 will become the DR and router R3 will become the BDR.",
            "Router R1 will become the DR and router R2 will become the BDR.",
            "Router R3 will become the DR and router R2 will become the BDR."
        ],
        "correct": [0],
        "explanation": "R3 and R1 have the highest priority; R3 has the higher router ID, so R3 becomes DR and R1 becomes BDR.",
        "id": 94
    },
    {
        "title": "93. Refer to the exhibit. If the switch reboots and all routers have to re-establish OSPF adjacencies, which routers will become the new DR and BDR?",
        "text": "Case 2",
        "images": ["https://itexamanswers.net/wp-content/uploads/2020/01/2021-11-22_102145.jpg"],
        "options": [
            "Router R2 will become the DR and router R4 will become the BDR.",
            "Router R1 will become the DR and router R3 will become the BDR.",
            "Router R4 will become the DR and router R3 will become the BDR.",
            "Router R3 will become the DR and router R2 will become the BDR."
        ],
        "correct": [1],
        "explanation": "Based on priority then router ID, R1 becomes the DR and R3 becomes the BDR.",
        "id": 95
    },
    {
        "title": "94. Which type of server would be used to keep a historical record of messages from monitored network devices?",
        "text": "",
        "images": [],
        "options": ["DNS", "print", "DHCP", "syslog", "authentication"],
        "correct": [3],
        "explanation": "A syslog server is a centralized location for logged messages from monitored network devices.",
        "id": 96
    },
    {
        "title": "95. When QoS is implemented in a converged network, which two factors can be controlled to improve network performance for real-time traffic? (Choose two.)",
        "text": "",
        "images": [],
        "options": ["packet addressing", "delay", "jitter", "packet routing", "link speed"],
        "correct": [1, 2],
        "explanation": "Delay (latency) and jitter (variation in delay) must be controlled to support real-time voice and video traffic.",
        "id": 97
    },
    {
        "title": "96. In which step of gathering symptoms does the network engineer determine if the problem is at the core, distribution, or access layer of the network?",
        "text": "",
        "images": [],
        "options": ["Determine ownership.", "Determine the symptoms.", "Narrow the scope.", "Document the symptoms.", "Gather information."],
        "correct": [2],
        "explanation": "In the 'narrow the scope' step, the engineer determines whether the problem is at the core, distribution, or access layer.",
        "id": 98
    },
    {
        "title": "97. What protocol sends periodic advertisements between connected Cisco devices in order to learn device name, IOS version, and the number and type of interfaces?",
        "text": "",
        "images": [],
        "options": ["CDP", "SNMP", "NTP", "LLDP"],
        "correct": [0],
        "explanation": "CDP is a Cisco proprietary Layer 2 protocol that sends periodic advertisements to connected Cisco neighbors. LLDP is the vendor-neutral equivalent.",
        "id": 99
    },
    {
        "title": "98. An administrator is configuring single-area OSPF on a router. One of the networks that must be advertised is 192.168.0.0 255.255.252.0. What wildcard mask would the administrator use in the OSPF network statement?",
        "text": "",
        "images": [],
        "options": ["0.0.0.127", "0.0.0.31", "0.0.3.255", "0.0.0.63"],
        "correct": [2],
        "explanation": "255.255.255.255 minus 255.255.252.0 equals 0.0.3.255.",
        "id": 100
    },
    {
        "title": "99. Refer to the exhibit. An administrator configures an ACL to prevent devices on the 192.168.1.0 subnet from accessing the server at 10.1.1.5 (access-list 100 deny ip 192.168.1.0 0.0.0.255 host 10.1.1.5 / permit ip any any). Where should the administrator place this ACL for the most efficient use of network resources?",
        "text": "access-list 100 deny ip 192.168.1.0 0.0.0.255 host 10.1.1.5 <br>access-list 100 permit ip any any",
        "images": ["https://itexamanswers.net/wp-content/uploads/2020/01/2020-06-13_113133.jpg"],
        "options": [
            "inbound on router A Fa0/0",
            "outbound on router B Fa0/0",
            "outbound on router A Fa0/1",
            "inbound on router B Fa0/1"
        ],
        "correct": [0],
        "explanation": "This is an extended ACL and should be placed close to the source: inbound on Router A Fa0/0, discarding the unwanted traffic immediately.",
        "id": 101
    },
    {
        "title": "100. Which type of OSPFv2 packet is used to forward OSPF link change information?",
        "text": "",
        "images": [],
        "options": ["link-state acknowledgment", "link-state update", "hello", "database description"],
        "correct": [1],
        "explanation": "The Link-State Update (LSU) packet announces new routing information and forwards OSPF link changes, flooding LSAs throughout an area.",
        "id": 102
    },
    {
        "title": "101. What protocol synchronizes with a private master clock or with a publicly available server on the internet?",
        "text": "",
        "images": [],
        "options": ["MPLS", "CBWFQ", "TFTP", "NTP"],
        "correct": [3],
        "explanation": "NTP synchronizes device software clocks with a private master clock or a publicly available NTP server on the internet.",
        "id": 103
    },
    {
        "title": "102. Which type of VPN allows multicast and broadcast traffic over a secure site-to-site VPN?",
        "text": "",
        "images": [],
        "options": ["dynamic multipoint VPN", "SSL VPN", "IPsec virtual tunnel interface", "GRE over IPsec"],
        "correct": [3],
        "explanation": "GRE supports multicast and broadcast traffic; GRE over IPsec encapsulates these frames into GRE packets that IPsec then encrypts.",
        "id": 104
    },
    {
        "title": "103. An OSPF router has three directly connected networks; 10.0.0.0/16, 10.1.0.0/16, and 10.2.0.0/16. Which OSPF network command would advertise only the 10.1.0.0 network to neighbors?",
        "text": "",
        "images": [],
        "options": [
            "router(config-router)# network 10.1.0.0 0.0.255.255 area 0",
            "router(config-router)# network 10.1.0.0 0.0.15.255 area 0",
            "router(config-router)# network 10.1.0.0 255.255.255.0 area 0",
            "router(config-router)# network 10.1.0.0 0.0.0.0 area 0"
        ],
        "correct": [0],
        "explanation": "The wildcard 0.0.255.255 matches the first 16 bits exactly, advertising only the 10.1.0.0/16 network.",
        "id": 105
    },
    {
        "title": "104. Refer to the exhibit. Which sequence of commands should be used to configure router A for OSPF?",
        "text": "",
        "images": ["https://itexamanswers.net/wp-content/uploads/2021/02/i386046n1v2-1613220070.9736.gif"],
        "options": [
            "router ospf 1<br>network 192.168.10.0 area 0",
            "router ospf 1<br>network 192.168.10.0",
            "router ospf 1<br>network 192.168.10.64 255.255.255.192<br>network 192.168.10.192 255.255.255.252",
            "router ospf 1<br>network 192.168.10.64 0.0.0.63 area 0<br>network 192.168.10.192 0.0.0.3 area 0"
        ],
        "correct": [3],
        "explanation": "OSPF network statements use wildcard masks (0.0.0.63 for /26, 0.0.0.3 for /30) and an area ID (area 0).",
        "id": 106
    },
    {
        "title": "105. An administrator is configuring single-area OSPF on a router. One of the networks that must be advertised is 192.168.0.0 255.255.254.0. What wildcard mask would the administrator use in the OSPF network statement?",
        "text": "",
        "images": [],
        "options": ["0.0.7.255", "0.0.1.255", "0.0.3.255", "0.0.15.255"],
        "correct": [1],
        "explanation": "255.255.255.255 minus 255.255.254.0 equals 0.0.1.255.",
        "id": 107
    },
    {
        "title": "106. How does virtualization help with disaster recovery within a data center?",
        "text": "Case 1",
        "images": [],
        "options": [
            "improvement of business practices",
            "supply of consistent air flow",
            "support of live migration",
            "guarantee of power"
        ],
        "correct": [2],
        "explanation": "Live migration allows moving a virtual server to another virtual server, possibly in a different location.",
        "id": 108
    },
    {
        "title": "106. How does virtualization help with disaster recovery within a data center?",
        "text": "Case 2",
        "images": [],
        "options": [
            "Less energy is consumed.",
            "Server provisioning is faster.",
            "Hardware at the recovery site does not have to be identical to production equipment.",
            "Power is always provided."
        ],
        "correct": [2],
        "explanation": "Virtualization provides hardware abstraction, so the recovery site no longer needs hardware identical to production.",
        "id": 109
    },
    {
        "title": "107. How does virtualization help with disaster recovery within a data center?",
        "text": "Case 1",
        "images": [],
        "options": [
            "Hardware does not have to be identical.",
            "Power is always provided.",
            "Less energy is consumed.",
            "Server provisioning is faster."
        ],
        "correct": [0],
        "explanation": "Virtualization provides hardware independence, so the disaster recovery site does not need the exact equipment used in production. (Both phrasings appear as the marked correct answer.)",
        "id": 110
    },
    {
        "title": "107. How does virtualization help with disaster recovery within a data center?",
        "text": "Case 2",
        "images": [],
        "options": [
            "Hardware at the recovery site does not have to be identical to production equipment.",
            "Power is always provided.",
            "Less energy is consumed.",
            "Server provisioning is faster."
        ],
        "correct": [0],
        "explanation": "Virtualization provides hardware independence, so the disaster recovery site does not need the exact equipment used in production. (Both phrasings appear as the marked correct answer.)",
        "id": 216
    },
    {
        "title": "108. Refer to the exhibit. Which devices exist in the failure domain when switch S3 loses power?",
        "text": "",
        "images": ["https://itexamanswers.net/wp-content/uploads/2015/05/i278658v1n1_222708-1.png"],
        "options": ["S4 and PC_2", "PC_3 and AP_2", "AP_2 and AP_1", "PC_3 and PC_2", "S1 and S4"],
        "correct": [1],
        "explanation": "A failure domain is the area of the network impacted when a critical device fails. PC_3 and AP_2 are affected when S3 loses power.",
        "id": 111
    },
    {
        "title": "109. Which set of access control entries would allow all users on the 192.168.10.0/24 network to access a web server that is located at 172.17.80.1, but would not allow them to use Telnet?",
        "text": "",
        "images": [],
        "options": [
            "access-list 103 deny tcp host 192.168.10.0 any eq 23<br>access-list 103 permit tcp host 192.168.10.1 eq 80",
            "access-list 103 permit tcp 192.168.10.0 0.0.0.255 host 172.17.80.1 eq 80<br>access-list 103 deny tcp 192.168.10.0 0.0.0.255 any eq 23",
            "access-list 103 permit tcp 192.168.10.0 0.0.0.255 any eq 80<br>access-list 103 deny tcp 192.168.10.0 0.0.0.255 any eq 23",
            "access-list 103 permit 192.168.10.0 0.0.0.255 host 172.17.80.1<br>access-list 103 deny tcp 192.168.10.0 0.0.0.255 any eq telnet"
        ],
        "correct": [1],
        "explanation": "An extended ACL must permit HTTP (port 80) to the specific server and deny Telnet (port 23) from the source subnet.",
        "id": 112
    },
    {
        "title": "110. Refer to the exhibit. A network administrator needs to add an ACE to the TRAFFIC-CONTROL ACL that will deny IP traffic from the subnet 172.23.16.0/20. Which ACE will meet this requirement?",
        "text": "",
        "images": ["https://itexamanswers.net/wp-content/uploads/2020/01/110.jpg"],
        "options": [
            "5 deny 172.23.16.0 0.0.15.255",
            "5 deny 172.23.16.0 0.0.255.255",
            "15 deny 172.23.16.0 0.0.15.255",
            "30 deny 172.23.16.0 0.0.15.255"
        ],
        "correct": [0],
        "explanation": "The /20 wildcard mask is 0.0.15.255, and sequence number 5 places the ACE in the correct position during ACL evaluation.",
        "id": 113
    },
    {
        "title": "111. Which step in the link-state routing process is described by a router building a link-state database based on received LSAs?",
        "text": "",
        "images": [],
        "options": [
            "executing the SPF algorithm",
            "building the topology table",
            "selecting the router ID",
            "declaring a neighbor to be inaccessible"
        ],
        "correct": [1],
        "explanation": "Building the topology table (LSDB) uses LSAs received from neighbors to represent the network topology.",
        "id": 114
    },
    {
        "title": "112. What protocol uses agents, that reside on managed devices, to collect and store information about the device and its operation?",
        "text": "",
        "images": [],
        "options": ["SYSLOG", "TFTP", "CBWFQ", "SNMP"],
        "correct": [3],
        "explanation": "SNMP uses agents on managed devices to collect and store device information in the MIB.",
        "id": 115
    },
    {
        "title": "113. An administrator is configuring single-area OSPF on a router. One of the networks that must be advertised is 10.27.27.0 255.255.255.0. What wildcard mask would the administrator use in the OSPF network statement?",
        "text": "",
        "images": [],
        "options": ["0.0.0.63", "0.0.0.255", "0.0.0.31", "0.0.0.15"],
        "correct": [1],
        "explanation": "255.255.255.255 minus 255.255.255.0 equals 0.0.0.255.",
        "id": 116
    },
    {
        "title": "114. When will an OSPF-enabled router transition from the Down state to the Init state?",
        "text": "",
        "images": [],
        "options": [
            "when an OSPF-enabled interface becomes active",
            "as soon as the router starts",
            "when the router receives a hello packet from a neighbor router",
            "as soon as the DR/BDR election process is complete"
        ],
        "correct": [0],
        "explanation": "When an OSPF-enabled interface becomes active, it transitions from Down to Init and starts sending Hello packets.",
        "id": 117
    },
    {
        "title": "115. What type of traffic is described as having a high volume of data per packet?",
        "text": "",
        "images": [],
        "options": ["data", "video", "voice"],
        "correct": [1],
        "explanation": "Video has a higher volume of data per packet than voice, with larger and more variable packet sizes.",
        "id": 118
    },
    {
        "title": "116. What protocol is a vendor-neutral Layer 2 protocol that advertises the identity and capabilities of the host device to other connected network devices?",
        "text": "",
        "images": [],
        "options": ["LLDP", "NTP", "TFTP", "SNMP"],
        "correct": [0],
        "explanation": "LLDP is a vendor-neutral Layer 2 neighbor discovery protocol that advertises a device's identity and capabilities.",
        "id": 119
    },
    {
        "title": "117. Which step in the link-state routing process is described by a router running an algorithm to determine the best path to each destination?",
        "text": "",
        "images": [],
        "options": [
            "building the topology table",
            "selecting the router ID",
            "declaring a neighbor to be inaccessible",
            "executing the SPF algorithm"
        ],
        "correct": [3],
        "explanation": "Executing the SPF (Dijkstra) algorithm against the LSDB creates the SPF tree, determining the best path to every destination.",
        "id": 120
    },
    {
        "title": "118. Refer to the exhibit. Which conclusion can be drawn from this OSPF multiaccess network?",
        "text": "",
        "images": ["https://itexamanswers.net/wp-content/uploads/2017/07/i247459v1n1_Item-247459-1.png"],
        "options": [
            "If the DR stops producing Hello packets, a BDR will be elected, and then it promotes itself to assume the role of DR.",
            "With an election of the DR, the number of adjacencies is reduced from 6 to 3.",
            "When a DR is elected all other non-DR routers become DROTHER.",
            "All DROTHER routers will send LSAs to the DR and BDR to multicast 224.0.0.5."
        ],
        "correct": [1],
        "explanation": "Without a DR election the required adjacencies would be n(n-1)/2 = 6; with the election this is reduced to 3. DROTHERs use 224.0.0.6.",
        "id": 121
    },
    {
        "title": "119. Refer to the exhibit. The network administrator has an IP address of 192.168.11.10 and needs access to manage R1. What is the best ACL type and placement to use in this situation?",
        "text": "",
        "images": ["https://itexamanswers.net/wp-content/uploads/2019/12/i350680v1n1_C3M4-Diagram.jpg"],
        "options": [
            "extended ACL outbound on R2 WAN interface towards the internet",
            "standard ACL inbound on R1 vty lines",
            "extended ACLs inbound on R1 G0/0 and G0/1",
            "extended ACL outbound on R2 S0/0/1"
        ],
        "correct": [1],
        "explanation": "Managing R1 means restricting access on the vty lines, which is done with a standard ACL applied to the vty lines.",
        "id": 122
    },
    {
        "title": "120. Which type of VPN connects using the Transport Layer Security (TLS) feature?",
        "text": "",
        "images": [],
        "options": ["SSL VPN", "IPsec virtual tunnel interface", "GRE over IPsec", "dynamic multipoint VPN"],
        "correct": [0],
        "explanation": "An SSL VPN connects using TLS, the newer version of SSL (often written SSL/TLS).",
        "id": 123
    },
    {
        "title": "121. Which group of APIs are used by an SDN controller to communicate with various applications?",
        "text": "",
        "images": [],
        "options": ["eastbound APIs", "westbound APIs", "northbound APIs", "southbound APIs"],
        "correct": [2],
        "explanation": "Northbound APIs communicate with upstream applications; southbound APIs communicate with downstream network elements.",
        "id": 124
    },
    {
        "title": "122. A company has consolidated a number of servers and it is looking for a program or firmware to create and control virtual machines which have access to all the hardware of the consolidated servers. What service or technology would support this requirement?",
        "text": "",
        "images": [],
        "options": ["Cisco ACI", "software defined networking", "Type-1 hypervisor", "APIC-EM"],
        "correct": [2],
        "explanation": "A Type-1 (bare metal) hypervisor installs directly on hardware, giving VMs direct access to all hardware resources—ideal for server consolidation.",
        "id": 125
    },
    {
        "title": "123. What command would be used as part of configuring NAT or PAT to identify inside local addresses that are to be translated?",
        "text": "",
        "images": [],
        "options": [
            "ip nat inside source list 24 interface serial 0/1/0 overload",
            "ip nat inside source list 14 pool POOL-STAT overload",
            "access-list 10 permit 172.19.89.0 0.0.0.255",
            "ip nat inside source list ACCTNG pool POOL-STAT"
        ],
        "correct": [2],
        "explanation": "A standard ACL identifies (permits) the inside local addresses eligible for translation.",
        "id": 126
    },
    {
        "title": "124. Anycompany has decided to reduce its environmental footprint by reducing energy costs, moving to a smaller facility, and promoting telecommuting. What service or technology would support this requirement?",
        "text": "",
        "images": [],
        "options": ["Cloud services", "Data center", "APIC-EM", "Cisco ACI"],
        "correct": [0],
        "explanation": "Cloud services reduce onsite IT equipment, energy costs, and facility size while enabling telecommuting via anywhere/anytime access.",
        "id": 127
    },
    {
        "title": "125. Refer to the exhibit. An administrator is trying to back up the running configuration to a USB drive and enters 'copy usbflash0:/R1-config running-config'. After connecting the USB drive to a PC, the running configuration was not properly backed up. What is the problem?",
        "text": "",
        "images": ["https://itexamanswers.net/wp-content/uploads/2020/01/i208111v6n1_Question-8.png"],
        "options": [
            "The file already exists on the USB drive and cannot be overwritten.",
            "The drive was not properly formatted with the FAT16 file system.",
            "There is no space left on the USB drive.",
            "The USB drive is not recognized by the router.",
            "The command that the administrator used was incorrect."
        ],
        "correct": [4],
        "explanation": "The command was reversed. To back up, the command should be 'copy running-config usbflash0:/R1-config' (source then destination).",
        "id": 128
    },
    {
        "title": "126. Which three types of VPNs are examples of enterprise-managed site-to-site VPNs? (Choose three.)",
        "text": "",
        "images": [],
        "options": [
            "Layer 3 MPLS VPN",
            "IPsec VPN",
            "Cisco Dynamic Multipoint VPN",
            "GRE over IPsec VPN",
            "clientless SSL VPN",
            "client-based IPsec VPN"
        ],
        "correct": [1, 2, 3],
        "explanation": "IPsec VPN, GRE over IPsec, and Cisco DMVPN are enterprise-managed site-to-site VPNs. MPLS is provider-managed; clientless SSL and client-based IPsec are remote access.",
        "id": 129
    },
    {
        "title": "127. Refer to the exhibit. Employees on 192.168.11.0/24 work on critically sensitive information and are not allowed access off their network. What is the best ACL type and placement to use in this situation?",
        "text": "",
        "images": ["https://itexamanswers.net/wp-content/uploads/2020/01/i350782v1n1_C3M4-Diagram-1.jpg"],
        "options": [
            "standard ACL inbound on R1 vty lines",
            "extended ACL inbound on R1 G0/0",
            "standard ACL inbound on R1 G0/1",
            "extended ACL inbound on R3 S0/0/1"
        ],
        "correct": [2],
        "explanation": "Filtering by source IP (192.168.11.0/24) uses a standard ACL placed close to the source: inbound on R1 G0/1.",
        "id": 130
    },
    {
        "title": "128. In an OSPF network which two statements describe the link-state database (LSDB)? (Choose two.)",
        "text": "",
        "images": [],
        "options": [
            "It can be viewed by using the show ip ospf database command.",
            "A neighbor table is created based on the LSDB.",
            "It contains a list of only the best routes to a particular network.",
            "It contains a list of all neighbor routers to which a router has established bidirectional communication.",
            "All routers within an area have an identical link-state database."
        ],
        "correct": [0, 4],
        "explanation": "The LSDB is the topology table; all routers in an area have an identical LSDB, viewable with show ip ospf database.",
        "id": 131
    },
    {
        "title": "129. In an OSPF network which OSPF structure is used to create the neighbor table on a router?",
        "text": "",
        "images": [],
        "options": ["adjacency database", "link-state database", "routing table", "forwarding database"],
        "correct": [0],
        "explanation": "The adjacency database creates and maintains the neighbor table (viewable with show ip ospf neighbor).",
        "id": 132
    },
    {
        "title": "130. What protocol is used in a system that consists of three elements--a manager, agents, and an information database?",
        "text": "",
        "images": [],
        "options": ["MPLS", "SYSLOG", "SNMP", "TFTP"],
        "correct": [2],
        "explanation": "SNMP consists of an SNMP manager, SNMP agents, and the Management Information Base (MIB).",
        "id": 133
    },
    {
        "title": "131. What type of traffic is described as not resilient to loss?",
        "text": "",
        "images": [],
        "options": ["data", "video", "voice"],
        "correct": [1],
        "explanation": "Compared to voice, video is less resilient to loss and has a higher volume of data per packet.",
        "id": 134
    },
    {
        "title": "132. Refer to the exhibit. Router R1 is configured with static NAT. Addressing is correctly configured, but there is no connectivity between the web server and users on the Internet. What is a possible reason for this lack of connectivity?",
        "text": "",
        "images": ["https://itexamanswers.net/wp-content/uploads/2020/01/i212256v1n3_212256.png"],
        "options": [
            "Interface Fa0/0 should be configured with the command ip nat outside.",
            "The inside global address is incorrect.",
            "The router NAT configuration has an incorrect inside local address.",
            "The NAT configuration on interface S0/0/1 is incorrect."
        ],
        "correct": [2],
        "explanation": "The static NAT inside local address points to the router's Fa0/0 IP instead of the web server's actual private IP, so NAT does not work for the server.",
        "id": 135
    },
    {
        "title": "133. Which type of API would be used to allow authorized salespeople of an organization access to internal sales data from their mobile devices?",
        "text": "",
        "images": [],
        "options": ["open", "partner", "public", "private"],
        "correct": [3],
        "explanation": "Private (internal) APIs are used only within an organization for internal access to data and services.",
        "id": 136
    },
    {
        "title": "134. Refer to the exhibit. Which data format is used to represent the data for network automation applications?",
        "text": "",
        "images": ["https://itexamanswers.net/wp-content/uploads/2020/01/i349060v2n1_347060.png"],
        "options": ["XML", "HTML", "YAML", "JSON"],
        "correct": [0],
        "explanation": "XML encloses data within a related set of tags <tag>data</tag>.",
        "id": 137
    },
    {
        "title": "135. An ACL is applied inbound on a router interface. The ACL consists of a single entry. If a packet with a source address of 198.133.219.100, a destination address of 198.133.219.170, and a protocol of 23 is received on the interface, is the packet permitted or denied?",
        "text": "access-list 101 permit udp 192.168.100.32 0.0.0.7 host 198.133.219.76 eq telnet",
        "images": [],
        "options": ["permitted", "denied"],
        "correct": [1],
        "explanation": "The source and destination addresses do not match the ACE, so the packet is dropped by the implicit deny.",
        "id": 138
    },
    {
        "title": "136. Refer to the exhibit. If no router ID was manually configured, what would router R1 use as its OSPF router ID?",
        "text": "",
        "images": ["https://itexamanswers.net/wp-content/uploads/2020/01/i254795v1n1_254795.gif"],
        "options": ["10.0.0.1", "10.1.0.1", "192.168.1.100", "209.165.201.1"],
        "correct": [2],
        "explanation": "Without a manual router ID, the router uses the highest IPv4 address of any loopback interface (192.168.1.100).",
        "id": 139
    },
    {
        "title": "137. What protocol is a vendor-neutral Layer 2 protocol that advertises the identity and capabilities of the host device to other connected network devices?",
        "text": "",
        "images": [],
        "options": ["NTP", "LLDP", "SNMP", "MPLS"],
        "correct": [1],
        "explanation": "LLDP is a vendor-neutral Layer 2 discovery protocol that advertises device identity and capabilities.",
        "id": 140
    },
    {
        "title": "138. Which type of VPN uses a hub-and-spoke configuration to establish a full mesh topology?",
        "text": "",
        "images": [],
        "options": ["MPLS VPN", "GRE over IPsec", "IPsec virtual tunnel interface", "dynamic multipoint VPN"],
        "correct": [3],
        "explanation": "DMVPN uses a hub-and-spoke configuration to dynamically establish what becomes a full mesh topology.",
        "id": 141
    },
    {
        "title": "139. What is a characteristic of the REST API?",
        "text": "",
        "images": [],
        "options": [
            "evolved into what became SOAP",
            "used for exchanging XML structured information over HTTP or SMTP",
            "considered slow, complex, and rigid",
            "most widely used API for web services"
        ],
        "correct": [3],
        "explanation": "REST accounts for over 80% of API types used for web services, making it the most widely used.",
        "id": 142
    },
    {
        "title": "141. A student, doing a summer semester of study overseas, has taken hundreds of pictures on a smartphone and wants to back them up in case of loss. What service or technology would support this requirement?",
        "text": "",
        "images": [],
        "options": ["Cisco ACI", "cloud services", "software defined networking", "dedicated servers"],
        "correct": [1],
        "explanation": "Cloud services provide on-demand storage accessible anywhere, anytime, ideal for backing up data while abroad.",
        "id": 143
    },
    {
        "title": "142. Consider the following access list that allows IP phone configuration file transfers from a particular host to a TFTP server. Which method would allow the network administrator to modify the ACL and include FTP transfers from any source IP address?",
        "text": "R1(config)# access-list 105 permit udp host 10.0.70.23 host 10.0.54.5 range 1024 5000<br>R1(config)# access-list 105 deny ip any any<br>R1(config)# interface gi0/0<br>R1(config-if)# ip access-group 105 out",
        "images": [],
        "options": [
            "R1(config)# interface gi0/0<br>R1(config-if)# no ip access-group 105 out<br>R1(config)# access-list 105 permit tcp any host 10.0.54.5 eq 20<br>R1(config)# access-list 105 permit tcp any host 10.0.54.5 eq 21<br>R1(config)# interface gi0/0<br>R1(config-if)# ip access-group 105 out",
            "R1(config)# access-list 105 permit tcp any host 10.0.54.5 eq 20<br>R1(config)# access-list 105 permit tcp any host 10.0.54.5 eq 21",
            "R1(config)# interface gi0/0<br>R1(config-if)# no ip access-group 105 out<br>R1(config)# no access-list 105<br>R1(config)# access-list 105 permit udp host 10.0.70.23 host 10.0.54.5 range 1024 5000<br>R1(config)# access-list 105 permit tcp any host 10.0.54.5 eq 20<br>R1(config)# access-list 105 permit tcp any host 10.0.54.5 eq 21<br>R1(config)# access-list 105 deny ip any any<br>R1(config)# interface gi0/0<br>R1(config-if)# ip access-group 105 out",
            "R1(config)# access-list 105 permit udp host 10.0.70.23 host 10.0.54.5 range 1024 5000<br>R1(config)# access-list 105 permit tcp any host 10.0.54.5 eq 20<br>R1(config)# access-list 105 permit tcp any host 10.0.54.5 eq 21<br>R1(config)# access-list 105 deny ip any any"
        ],
        "correct": [2],
        "explanation": "Because new entries append after the existing deny statement, the ACL must be removed and recreated with the new entries placed before the final deny.",
        "id": 144
    },
    {
        "title": "143. Which three statements are generally considered to be best practices in the placement of ACLs? (Choose three.)",
        "text": "",
        "images": [],
        "options": [
            "Filter unwanted traffic before it travels onto a low-bandwidth link.",
            "Place standard ACLs close to the destination IP address of the traffic.",
            "Place standard ACLs close to the source IP address of the traffic.",
            "Place extended ACLs close to the destination IP address of the traffic.",
            "Place extended ACLs close to the source IP address of the traffic.",
            "For every inbound ACL placed on an interface, there should be a matching outbound ACL."
        ],
        "correct": [0, 1, 4],
        "explanation": "Extended ACLs go close to the source; standard ACLs go close to the destination; and filtering unwanted traffic before low-bandwidth links preserves bandwidth.",
        "id": 145
    },
    {
        "type": "matching",
        "title": "144. Match the term to the web link http://www.buycarsfromus.com/2020models/ford/suv.html#Escape component. (Not all options are used.)",
        "text": "",
        "pairs": [
            { "left": "protocol", "right": "http" },
            { "left": "Uniform Resource Name (URN)", "right": "www.buycarsfromus.com/2020models/ford/suv.html" },
            { "left": "Uniform Resource Locator (URL)", "right": "http://www.buycarsfromus.com/2020models/ford/suv.html" },
            { "left": "Uniform Resource Identifier (URI)", "right": "http://www.buycarsfromus.com/2020models/ford/suv.html#Escape" },
            { "left": "fragment", "right": "#Escape" }
        ],
        "distractors_left": ["page information"],
        "explanation": "The protocol is http, the URN is the name portion, the URL adds the protocol, the URI is the complete identifier including the fragment, and the fragment is #Escape.",
        "id": 146
    },
    {
        "title": "145. What command would be used as part of configuring NAT or PAT to display all static translations that have been configured?",
        "text": "",
        "images": [],
        "options": ["show ip nat translations", "show ip pat translations", "show ip cache", "show running-config"],
        "correct": [0],
        "explanation": "show ip nat translations displays all active translation table entries, including all configured static translations.",
        "id": 147
    },
    {
        "title": "146. A network administrator modified an OSPF-enabled router to have a hello timer setting of 20 seconds. What is the new dead interval time setting by default?",
        "text": "",
        "images": [],
        "options": ["40 seconds", "60 seconds", "80 seconds", "100 seconds"],
        "correct": [2],
        "explanation": "The default dead interval is four times the hello interval, so 20 x 4 = 80 seconds.",
        "id": 148
    },
    {
        "title": "147. Which type of VPN is the preferred choice for support and ease of deployment for remote access?",
        "text": "",
        "images": [],
        "options": ["SSL VPN", "GRE over IPsec", "dynamic multipoint VPN", "IPsec virtual tunnel interface"],
        "correct": [0],
        "explanation": "SSL VPN offers low connection complexity (often just a web browser), making it preferred for ease of deployment for remote access.",
        "id": 149
    },
    {
        "title": "148. What type of traffic is described as predictable and smooth?",
        "text": "",
        "images": [],
        "options": ["video", "data", "voice"],
        "correct": [2],
        "explanation": "Voice traffic is predictable and smooth, with known arrival times and consistent bandwidth requirements.",
        "id": 150
    },
    {
        "title": "149. Which queuing mechanism has no provision for prioritizing or buffering but simply forwards packets in the order they arrive?",
        "text": "",
        "images": [],
        "options": ["FIFO", "LLQ", "CBWFQ", "WFQ"],
        "correct": [0],
        "explanation": "FIFO (first-in, first-out) forwards packets in the order they arrive with no concept of priority or classes.",
        "id": 151
    },
    {
        "title": "150. Refer to the exhibit. A network administrator has configured OSPFv2 on the two Cisco routers. The routers are unable to form a neighbor adjacency. What should be done to fix the problem on router R2?",
        "text": "",
        "images": ["https://itexamanswers.net/wp-content/uploads/2017/03/p56.png"],
        "options": [
            "Implement the command no passive-interface Serial0/1.",
            "Implement the command network 192.168.2.6 0.0.0.0 area 0 on router R2.",
            "Change the router-id of router R2 to 2.2.2.2.",
            "Implement the command network 192.168.3.1 0.0.0.0 area 0 on router R2."
        ],
        "correct": [0],
        "explanation": "Serial0/1 on R2 is configured as a passive interface, suppressing Hello packets. Removing the passive-interface configuration allows the adjacency to form.",
        "id": 152
    },
    {
        "title": "151. A network administrator is troubleshooting an OSPF problem that involves neighbor adjacency. What should the administrator do?",
        "text": "",
        "images": [],
        "options": [
            "Make sure that the router priority is unique on each router.",
            "Make sure that the DR/BDR election is complete.",
            "Make sure that the router ID is included in the hello packet.",
            "Make sure that the hello and dead interval timers are the same on all routers."
        ],
        "correct": [3],
        "explanation": "Hello and dead interval timers must be identical on connected interfaces for routers to form an adjacency.",
        "id": 153
    },
    {
        "title": "152. Refer to the exhibit. Internet privileges for an employee have been revoked because of abuse but the employee still needs access to company resources. What is the best ACL type and placement to use in this situation?",
        "text": "",
        "images": ["https://itexamanswers.net/wp-content/uploads/2019/12/i350685v1n1_C3M4-Diagram.jpg"],
        "options": [
            "standard ACL inbound on R2 WAN interface connecting to the internet",
            "standard ACL outbound on R2 WAN interface towards the internet",
            "standard ACL inbound on R1 G0/0",
            "standard ACL outbound on R1 G0/0"
        ],
        "correct": [1],
        "explanation": "A standard ACL filters on source IP and is placed close to the destination (the internet), so it is applied outbound on the R2 WAN interface.",
        "id": 154
    },
    {
        "title": "153. An ACL is applied inbound on a router interface. The ACL consists of a single entry. If a packet with a source address of 192.168.10.244, a destination address of 172.17.200.56, and a protocol of 80 is received on the interface, is the packet permitted or denied?",
        "text": "access-list 100 permit tcp 192.168.10.0 0.0.0.255 172.17.200.0 0.0.0.255 eq www",
        "images": [],
        "options": ["permitted", "denied"],
        "correct": [0],
        "explanation": "Source, destination, and protocol 80 (www) all match the ACE, so the packet is permitted.",
        "id": 155
    },
    {
        "title": "154. A company has contracted with a network security firm to help identify the vulnerabilities of the corporate network. The firm sends a team to perform penetration tests to the company network. Why would the team use applications such as Nmap, SuperScan, and Angry IP Scanner?",
        "text": "",
        "images": [],
        "options": [
            "to detect installed tools within files and directories that provide threat actors remote access and control over a computer or network",
            "to detect any evidence of a hack or malware in a computer or network",
            "to reverse engineer binary files when writing exploits and when analyzing malware",
            "to probe network devices, servers, and hosts for open TCP or UDP ports"
        ],
        "correct": [3],
        "explanation": "These are network scanning tools used to probe devices for active IP addresses and open TCP/UDP ports.",
        "id": 156
    },
    {
        "title": "155. What command would be used as part of configuring NAT or PAT to display any dynamic PAT translations that have been created by traffic?",
        "text": "",
        "images": [],
        "options": ["show ip pat translations", "show ip cache", "show running-config", "show ip nat translations"],
        "correct": [3],
        "explanation": "show ip nat translations displays static, dynamic NAT, and dynamic PAT translations created by traffic.",
        "id": 157
    },
    {
        "title": "156. An administrator is configuring single-area OSPF on a router. One of the networks that must be advertised is 172.16.91.0 255.255.255.192. What wildcard mask would the administrator use in the OSPF network statement?",
        "text": "",
        "images": [],
        "options": ["0.0.31.255", "0.0.0.63", "0.0.15.255", "0.0.7.255"],
        "correct": [1],
        "explanation": "255.255.255.255 minus 255.255.255.192 equals 0.0.0.63.",
        "id": 158
    },
    {
        "title": "157. What type of traffic is described as requiring latency to be no more than 400 milliseconds (ms)?",
        "text": "",
        "images": [],
        "options": ["video", "data", "voice"],
        "correct": [0],
        "explanation": "Video traffic requires one-way latency of no more than 400 ms. Voice requires no more than 150 ms.",
        "id": 159
    },
    {
        "title": "158. Refer to the exhibit. Which two configurations would be used to create and apply a standard access list on R1, so that only the 10.0.70.0/25 network devices are allowed to access the internal database server? (Choose two.)",
        "text": "",
        "images": ["https://itexamanswers.net/wp-content/uploads/2020/06/ccna-5.0-s2-43.jpg"],
        "options": [
            "R1(config)# interface GigabitEthernet0/0<br>R1(config-if)# ip access-group 5 out",
            "R1(config)# access-list 5 permit 10.0.54.0 0.0.1.255",
            "R1(config)# interface Serial0/0/0<br>R1(config-if)# ip access-group 5 in",
            "R1(config)# access-list 5 permit 10.0.70.0 0.0.0.127",
            "R1(config)# access-list 5 permit any"
        ],
        "correct": [0, 3],
        "explanation": "The /25 wildcard mask is 0.0.0.127, and a standard ACL is placed close to the destination: outbound on R1 GigabitEthernet0/0.",
        "id": 160
    },
    {
        "title": "159. A network administrator is writing a standard ACL that will deny any traffic from the 172.16.0.0/16 network, but permit all other traffic. Which two commands should be used? (Choose two.)",
        "text": "",
        "images": [],
        "options": [
            "Router(config)# access-list 95 deny 172.16.0.0 255.255.0.0",
            "Router(config)# access-list 95 permit any",
            "Router(config)# access-list 95 host 172.16.0.0",
            "Router(config)# access-list 95 deny 172.16.0.0 0.0.255.255",
            "Router(config)# access-list 95 172.16.0.0 255.255.255.255",
            "Router(config)# access-list 95 deny any"
        ],
        "correct": [1, 3],
        "explanation": "Deny the /16 with wildcard 0.0.255.255, then permit any to allow all other traffic.",
        "id": 161
    },
    {
        "title": "160. Refer to the exhibit. The company has decided that no traffic initiating from any other existing or future network can be transmitted to the Research and Development network, and no traffic from R&D can be transmitted to any other networks. The administrator decided extended ACLs are better suited. Based on the information given, what will the network administrator do?",
        "text": "",
        "images": ["https://itexamanswers.net/wp-content/uploads/2020/06/temp-1593110686.3832.png"],
        "options": [
            "One ACL will be placed on the R1 Gi0/0 interface and one ACL will be placed on the R2 Gi0/0 interface.",
            "Only a numbered ACL will work for this situation.",
            "One ACL will be placed on the R2 Gi0/0 interface and one ACL will be placed on the R2 S0/0/0 interface.",
            "Two ACLs (one in each direction) will be placed on the R2 Gi0/0 interface."
        ],
        "correct": [3],
        "explanation": "An inbound ACL on R2 Gi0/0 filters traffic from R&D, and an outbound ACL on the same interface blocks traffic destined to R&D. One interface supports one inbound and one outbound ACL.",
        "id": 162
    },
    {
        "title": "161. What protocol uses smaller stratum numbers to indicate that the server is closer to the authorized time source than larger stratum numbers?",
        "text": "",
        "images": [],
        "options": ["TFTP", "SYSLOG", "NTP", "MPLS"],
        "correct": [2],
        "explanation": "NTP uses a hierarchy of stratum levels; smaller stratum numbers are closer to the authoritative time source.",
        "id": 163
    },
    {
        "title": "162. Refer to the exhibit. If no router ID was manually configured, what would router Branch1 use as its OSPF router ID?",
        "text": "",
        "images": ["https://itexamanswers.net/wp-content/uploads/2020/06/2020-06-28_210428.jpg"],
        "options": ["10.0.0.1", "10.1.0.1", "192.168.1.100", "209.165.201.1"],
        "correct": [2],
        "explanation": "Without a manual router ID, the router selects the highest IPv4 address of its loopback interfaces (192.168.1.100).",
        "id": 164
    },
    {
        "type": "matching",
        "title": "163. Match the HTTP method with the RESTful operation.",
        "text": "",
        "pairs": [
            { "left": "POST", "right": "create" },
            { "left": "GET", "right": "read" },
            { "left": "PUT/PATCH", "right": "update" },
            { "left": "DELETE", "right": "delete" }
        ],
        "distractors": [],
        "explanation": "POST creates, GET reads, PUT/PATCH updates, and DELETE deletes (CRUD operations).",
        "id": 165
    },
    {
        "title": "164. Refer to the exhibit. A web designer reports that the web server web-s1.cisco.com is not reachable through a web browser. The technician uses command line utilities to verify the problem. Which two things can be determined about the problem? (Choose two.)",
        "text": "",
        "images": ["https://itexamanswers.net/wp-content/uploads/2020/01/i286191v1n1_15178.jpg"],
        "options": [
            "The web server at 192.168.0.10 is reachable from the source host.",
            "DNS cannot resolve the IP address for the server web-s1.cisco.com.",
            "A router is down between the source host and the server web-s1.cisco.com.",
            "There is a problem with the web server software on web-s1.cisco.com.",
            "The default gateway between the source host and the server at 192.168.0.10 is down."
        ],
        "correct": [0, 1],
        "explanation": "The ping to the IP succeeds (server is reachable) but the ping to the domain name fails, indicating a DNS resolution issue.",
        "id": 166
    },
    {
        "title": "165. What type of traffic is described as tending to be unpredictable, inconsistent, and bursty?",
        "text": "",
        "images": [],
        "options": ["video", "voice", "data"],
        "correct": [0],
        "explanation": "Video traffic is unpredictable, inconsistent, and bursty because packet number and size vary with content.",
        "id": 167
    },
    {
        "type": "matching",
        "title": "166. Match the functions to the corresponding layers. (Not all options are used.)",
        "text": "",
        "pairs": [
            { "left": "provides network access to the user", "right": "access layer" },
            { "left": "represents the network edge", "right": "access layer" },
            { "left": "implements network access policy", "right": "distribution layer" },
            { "left": "establishes Layer 3 routing boundaries", "right": "distribution layer" },
            { "left": "provides high-speed backbone connectivity", "right": "core layer" },
            { "left": "functions as an aggregator for all the campus blocks", "right": "core layer" }
        ],
        "distractors_left": ["implements personal firewalls on the client computers"],
        "explanation": "The access layer connects users at the network edge, the distribution layer implements policy and Layer 3 boundaries, and the core layer provides high-speed backbone connectivity and aggregation.",
        "id": 168
    },
    {
        "title": "167. What type of traffic is described as consisting of traffic that requires a higher priority if interactive?",
        "text": "",
        "images": [],
        "options": ["voice", "data", "video"],
        "correct": [1],
        "explanation": "Data traffic priority depends on whether it is interactive and mission-critical; if so, it should be prioritized.",
        "id": 169
    },
    {
        "title": "168. Which type of VPN provides a flexible option to connect a central site with branch sites?",
        "text": "",
        "images": [],
        "options": ["IPsec virtual tunnel interface", "MPLS VPN", "dynamic multipoint VPN", "GRE over IPsec"],
        "correct": [2],
        "explanation": "DMVPN simplifies tunnel configuration and provides a flexible option to connect a central site with branch sites.",
        "id": 170
    },
    {
        "title": "169. A company has contracted with a network security firm to help identify the vulnerabilities of the corporate network. The firm sends a team to perform penetration tests to the company network. Why would the team use fuzzers?",
        "text": "",
        "images": [],
        "options": [
            "to discover security vulnerabilities of a computer",
            "to detect any evidence of a hack or malware in a computer or network",
            "to reverse engineer binary files when writing exploits and when analyzing malware",
            "to detect installed tools within files and directories that provide threat actors remote access and control over a computer or network"
        ],
        "correct": [0],
        "explanation": "Fuzzers discover security vulnerabilities by feeding random/unexpected input to find weaknesses or crashes (e.g., Skipfish, Wapiti, W3af).",
        "id": 171
    },
    {
        "title": "170. Refer to the exhibit. A network administrator has configured a standard ACL to permit only the two LAN networks attached to R1 to access the network that connects to R2 G0/1 interface, but not the G0/0 interface. When following the best practices, in what location should the standard ACL be applied?",
        "text": "",
        "images": ["https://itexamanswers.net/wp-content/uploads/2020/01/i282155v1n2_282152.png"],
        "options": ["R1 S0/0/0 outbound", "R2 G0/0 outbound", "R2 S0/0/1 outbound", "R1 S0/0/0 inbound", "R2 G0/1 inbound"],
        "correct": [1],
        "explanation": "A standard ACL is placed close to the destination. Applying it outbound on R2 G0/0 prevents R1 LAN traffic from that network while still allowing access to G0/1.",
        "id": 172
    },
    {
        "title": "171. Two OSPF-enabled routers are connected over a point-to-point link. During the ExStart state, which router will be chosen as the first one to send DBD packets?",
        "text": "",
        "images": [],
        "options": [
            "the router with the highest router ID",
            "the router with the lowest IP address on the connecting interface",
            "the router with the highest IP address on the connecting interface",
            "the router with the lowest router ID"
        ],
        "correct": [0],
        "explanation": "The router with the higher router ID sends DBD packets first during the Exchange state.",
        "id": 173
    },
    {
        "title": "172. Which step in the link-state routing process is described by a router sending Hello packets out all of the OSPF-enabled interfaces?",
        "text": "",
        "images": [],
        "options": [
            "exchanging link-state advertisements",
            "electing the designated router",
            "injecting the default route",
            "establishing neighbor adjacencies"
        ],
        "correct": [3],
        "explanation": "Sending Hello packets out OSPF-enabled interfaces is how routers discover neighbors and establish neighbor adjacencies.",
        "id": 174
    },
    {
        "title": "173. A company has contracted with a network security firm to help identify the vulnerabilities of the corporate network. The firm sends a team to perform penetration tests to the company network. Why would the team use forensic tools?",
        "text": "",
        "images": [],
        "options": [
            "to obtain specially designed operating systems preloaded with tools optimized for hacking",
            "to detect any evidence of a hack or malware in a computer or network",
            "to detect installed tools within files and directories that provide threat actors remote access and control over a computer or network",
            "to reverse engineer binary files when writing exploits and when analyzing malware"
        ],
        "correct": [1],
        "explanation": "Forensic tools sniff out evidence of previous hacks or malware in a computer (e.g., Sleuth Kit, Helix, Maltego, Encase).",
        "id": 175
    },
    {
        "title": "174. Refer to the exhibit. A network administrator has configured OSPFv2 on the two Cisco routers but PC1 is unable to connect to PC2. What is the most likely problem?",
        "text": "",
        "images": ["https://itexamanswers.net/wp-content/uploads/2019/12/i285134v1n1_285134.png"],
        "options": [
            "Interface Fa0/0 has not been activated for OSPFv2 on router R2.",
            "Interface Fa0/0 is configured as a passive-interface on router R2.",
            "Interface S0/0 is configured as a passive-interface on router R2.",
            "Interface s0/0 has not been activated for OSPFv2 on router R2."
        ],
        "correct": [0],
        "explanation": "The LAN network on R2 Fa0/0 is not advertised in OSPFv2, so the remote network is unreachable. The serial adjacency is up.",
        "id": 176
    },
    {
        "title": "175. ABCTech is investigating the use of automation for some of its products. In order to control and test these products, the programmers require Windows, Linux, and MAC OS on their computers. What service or technology would support this requirement?",
        "text": "",
        "images": [],
        "options": ["dedicated servers", "software defined networking", "virtualization", "Cisco ACI"],
        "correct": [2],
        "explanation": "Virtualization separates the OS from hardware, allowing multiple operating systems to run on a single platform via a hypervisor.",
        "id": 177
    },
    {
        "title": "176. A network engineer has noted that some expected network route entries are not displayed in the routing table. Which two commands will provide additional information about the state of router adjacencies, timer intervals, and the area ID? (Choose two.)",
        "text": "",
        "images": [],
        "options": ["show ip protocols", "show ip ospf neighbor", "show running-configuration", "show ip ospf interface", "show ip route ospf"],
        "correct": [1, 3],
        "explanation": "show ip ospf neighbor and show ip ospf interface display adjacency state, timer intervals, and area ID details.",
        "id": 178
    },
    {
        "title": "177. Which type of VPN involves the forwarding of traffic over the backbone through the use of labels distributed among core routers?",
        "text": "",
        "images": [],
        "options": ["MPLS VPN", "GRE over IPsec", "IPsec virtual tunnel interface", "dynamic multipoint VPN"],
        "correct": [0],
        "explanation": "MPLS forwards traffic through the backbone using labels distributed among core routers to determine the next hop.",
        "id": 179
    },
    {
        "title": "178. Which type of VPN involves a nonsecure tunneling protocol being encapsulated by IPsec?",
        "text": "",
        "images": [],
        "options": ["SSL VPN", "dynamic multipoint VPN", "GRE over IPsec", "IPsec virtual tunnel interface"],
        "correct": [2],
        "explanation": "GRE is a non-secure tunneling protocol; its packets are encapsulated into IPsec packets for encryption and authentication.",
        "id": 180
    },
    {
        "title": "179. A company has contracted with a network security firm to help identify the vulnerabilities of the corporate network. The firm sends a team to perform penetration tests to the company network. Why would the team use hacking operation systems?",
        "text": "",
        "images": [],
        "options": [
            "to detect any evidence of a hack or malware in a computer or network",
            "to obtain specially designed operating systems preloaded with tools optimized for hacking",
            "to encode data, using algorithm schemes, to prevent unauthorized access to the encrypted data",
            "to reverse engineer binary files when writing exploits and when analyzing malware"
        ],
        "correct": [1],
        "explanation": "Hacking operating systems (e.g., Kali Linux, Knoppix, BackBox) come preloaded with tools optimized for hacking.",
        "id": 181
    },
    {
        "title": "180. What command would be used as part of configuring NAT or PAT to identify an interface as part of the external global network?",
        "text": "",
        "images": [],
        "options": ["ip pat inside", "access-list 10 permit 172.19.89.0 0.0.0.255", "ip nat inside", "ip nat outside"],
        "correct": [3],
        "explanation": "The ip nat outside command designates an interface as connected to the external global network.",
        "id": 182
    },
    {
        "title": "181. To avoid purchasing new hardware, a company wants to take advantage of idle system resources and consolidate the number of servers while allowing for multiple operating systems on a single hardware platform. What service or technology would support this requirement?",
        "text": "",
        "images": [],
        "options": ["data center", "cloud services", "virtualization", "dedicated servers"],
        "correct": [2],
        "explanation": "Server virtualization uses idle resources, consolidates servers, and allows multiple operating systems on a single hardware platform.",
        "id": 183
    },
    {
        "title": "182. Which type of VPN routes packets through virtual tunnel interfaces for encryption and forwarding?",
        "text": "",
        "images": [],
        "options": ["MPLS VPN", "IPsec virtual tunnel interface", "dynamic multipoint VPN", "GRE over IPsec"],
        "correct": [1],
        "explanation": "IPsec VTI applies IPsec settings to a virtual interface; packets routed to the VTI are encrypted and forwarded, natively supporting multicast.",
        "id": 184
    },
    {
        "title": "183. Which step in the link-state routing process is described by a router flooding link-state and cost information about each directly connected link?",
        "text": "",
        "images": [],
        "options": [
            "building the topology table",
            "selecting the router ID",
            "exchanging link-state advertisements",
            "injecting the default route"
        ],
        "correct": [2],
        "explanation": "Exchanging link-state advertisements (LSAs) floods state and cost information about directly connected links to neighbors.",
        "id": 185
    },
    {
        "title": "184. What type of traffic is described as using either TCP or UDP depending on the need for error recovery?",
        "text": "",
        "images": [],
        "options": ["video", "voice", "data"],
        "correct": [2],
        "explanation": "Data traffic uses TCP or UDP depending on requirements; loss-intolerant data uses TCP for error recovery.",
        "id": 186
    },
    {
        "title": "185. Refer to the exhibit. The company CEO demands that one ACL be created to permit email traffic to the internet and deny FTP access. What is the best ACL type and placement to use in this situation?",
        "text": "",
        "images": ["https://itexamanswers.net/wp-content/uploads/2020/07/What-is-the-best-ACL-type-and-placement-to-use-in-this-situation.jpg"],
        "options": [
            "extended ACL outbound on R2 WAN interface towards the internet",
            "standard ACL outbound on R2 S0/0/0",
            "extended ACL inbound on R2 S0/0/0",
            "standard ACL inbound on R2 WAN interface connecting to the internet"
        ],
        "correct": [0],
        "explanation": "An extended ACL is needed to filter by application/port, and placing it outbound on the R2 WAN interface lets one ACL inspect all internal traffic before it reaches the internet.",
        "id": 187
    },
    {
        "title": "186. What command would be used as part of configuring NAT or PAT to define a pool of addresses for translation?",
        "text": "",
        "images": [],
        "options": [
            "ip nat inside source static 172.19.89.13 198.133.219.65",
            "ip nat inside source list 24 interface serial 0/1/0 overload",
            "ip nat pool POOL-STAT 64.100.14.17 64.100.14.30 netmask 255.255.255.240",
            "ip nat outside"
        ],
        "correct": [2],
        "explanation": "The ip nat pool command defines the pool of public addresses used for translation, requiring a name, start/end address, and netmask.",
        "id": 188
    },
    {
        "title": "187. What is the name of the layer in the Cisco borderless switched network design that is considered to be the backbone used for high-speed connectivity and fault isolation?",
        "text": "",
        "images": [],
        "options": ["data link", "access", "core", "network", "network access"],
        "correct": [2],
        "explanation": "The core layer is the backbone, with high-speed redundant connections for connectivity and fault isolation.",
        "id": 189
    },
    {
        "title": "188. An ACL is applied inbound on a router interface. The ACL consists of a single entry. If a packet with a source address of 172.18.20.40, a destination address of 10.33.19.2, and a protocol of 21 is received on the interface, is the packet permitted or denied?",
        "text": "access-list 210 permit tcp 172.18.20.0 0.0.0.47 any eq ftp",
        "images": [],
        "options": ["permitted", "denied"],
        "correct": [0],
        "explanation": "Protocol 21 matches eq ftp, the source matches the range (0.0.0.47), and 'any' matches the destination, so the packet is permitted.",
        "id": 190
    },
    {
        "title": "189. What type of traffic is described as consisting of traffic that gets a lower priority if it is not mission-critical?",
        "text": "",
        "images": [],
        "options": ["video", "data", "voice"],
        "correct": [1],
        "explanation": "Data traffic that is not mission-critical and not interactive is assigned a lower priority, receiving leftover bandwidth.",
        "id": 191
    },
    {
        "title": "190. Which OSPF table is identical on all converged routers within the same OSPF area?",
        "text": "",
        "images": [],
        "options": ["routing", "neighbor", "adjacency", "topology"],
        "correct": [3],
        "explanation": "The topology table (LSDB) must be identical on all converged routers within an OSPF area. Neighbor and routing tables are unique.",
        "id": 192
    },
    {
        "title": "191. An ACL is applied inbound on a router interface. The ACL consists of a single entry. If a packet with a source address of 192.168.10.45, a destination address of 10.10.3.27, and a protocol of 80 is received on the interface, is the packet permitted or denied?",
        "text": "access-list 100 permit tcp 192.168.10.0 0.0.0.255 any eq www",
        "images": [],
        "options": ["permitted", "denied"],
        "correct": [0],
        "explanation": "Source matches 192.168.10.0/24, destination matches 'any', and protocol 80 matches www (TCP), so the packet is permitted.",
        "id": 193
    },
    {
        "title": "192. What protocol allows the manager to poll agents to access information from the agent MIB?",
        "text": "",
        "images": [],
        "options": ["CBWFQ", "SYSLOG", "TFTP", "SNMP"],
        "correct": [3],
        "explanation": "SNMP allows the manager to poll agents and query the MIB using 'get' requests.",
        "id": 194
    },
    {
        "type": "matching",
        "title": "193. Match each component of a WAN connection to its description. (Not all options are used.)",
        "text": "Case 1",
        "pairs": [
            { "left": "Customer premises equipement", "right": "devices and inside wiring located on the enterprise edge and which connect to a carrier link" },
            { "left": "Data communications equipment", "right": "devices that put data on the local loop" },
            { "left": "Data Terminal Equipement", "right": "customer devices that pass data from a customer network or host computer for transmission over the WAN" },
            { "left": "Demarcation point", "right": "a point that is established in a building or complex to separate customer equipment from service provider equipement" }
        ],
        "distractors": ["the point of presence that is the local service provider facility or building that connects the CPE to the provider network"],
        "explanation": "WAN components: CPE on the enterprise edge, DCE provides the WAN cloud interface, DTE passes customer data, and the local loop connects the customer to the provider POP. (Reconstructed from Topic 7.2.3; verify against the original image.)",
        "id": 195
    },
    {
        "type": "matching",
        "title": "193. Match each component of a WAN connection to its description. (Not all options are used.)",
        "text": "Case 2",
        "pairs": [
            { "left": "Data communications equipment", "right": "device that is used to communicate with the provider" },
            { "left": "Customer premises equipement", "right": "devices and inside wiring located on the enterprise edge owner or leased from service provider" },
            { "left": "Demarcation point", "right": "a point that is established in a building or complex to separate customer equipment from service provider equipment" },
            { "left": "Data Terminal Equipement", "right": "device that connects LANs to the WAN communication device" },
        ],
        "distractors": ["the point of presence that is the local service provider facility or building that connects the CPE to the provider network"],
        "explanation": "WAN components: CPE on the enterprise edge, DCE provides the WAN cloud interface, DTE passes customer data, and the local loop connects the customer to the provider POP. (Reconstructed from Topic 7.2.3; verify against the original image.)",
        "id": 215
    },
    {
        "title": "194. What type of traffic is described as being able to tolerate a certain amount of latency, jitter, and loss without any noticeable effects?",
        "text": "",
        "images": [],
        "options": ["voice", "video", "data"],
        "correct": [0],
        "explanation": "Voice can tolerate latency up to 150 ms, jitter up to 30 ms, and loss up to 1% without noticeable effects.",
        "id": 196
    },
    {
        "title": "195. What term describes adding a value to the packet header, as close to the source as possible, so that the packet matches a defined policy?",
        "text": "",
        "images": [],
        "options": ["policing", "traffic marking", "weighted random early detection (WRED)", "traffic shaping", "tail drop"],
        "correct": [1],
        "explanation": "Traffic marking adds a value (CoS or DSCP) to the packet header so devices can apply forwarding policies; it should be done close to the source.",
        "id": 197
    },
    {
        "title": "196. Which three traffic-related factors would influence selecting a particular WAN link type? (Choose three.)",
        "text": "",
        "images": [],
        "options": ["cost of the link", "amount of traffic", "distance between sites", "reliability", "security needs", "type of traffic"],
        "correct": [1, 4, 5],
        "explanation": "Traffic-related factors include the type of traffic, amount of traffic, quality requirements, and security requirements.",
        "id": 198
    },
    {
        "title": "197. What command would be used as part of configuring NAT or PAT to link the inside local addresses to the pool of addresses available for PAT translation?",
        "text": "",
        "images": [],
        "options": [
            "ip nat inside source list ACCTNG pool POOL-STAT",
            "ip nat translation timeout 36000",
            "ip nat inside source list 14 pool POOL-STAT overload",
            "ip nat inside source static 172.19.89.13 198.133.219.65"
        ],
        "correct": [2],
        "explanation": "The 'overload' keyword links inside local addresses to the pool for PAT translation.",
        "id": 199
    },
    {
        "title": "198. What protocol is a vendor-neutral Layer 2 discovery protocol that must be configured separately to transmit and receive information packets?",
        "text": "",
        "images": [],
        "options": ["SNMP", "MPLS", "LLDP", "NTP"],
        "correct": [2],
        "explanation": "LLDP is vendor-neutral and requires separate configuration to transmit and receive (lldp transmit / lldp receive).",
        "id": 200
    },
    {
        "title": "199. An ACL is applied inbound on a router interface. The ACL consists of a single entry. If a packet with a source address of 172.18.20.55, a destination address of 172.18.20.3, and a protocol of 21 is received on the interface, is the packet permitted or denied?",
        "text": "access-list 210 permit tcp 172.18.20.0 0.0.0.31 172.18.20.32 0.0.0.31 eq ftp",
        "images": [],
        "options": ["permitted", "denied"],
        "correct": [1],
        "explanation": "Source 172.18.20.55 is outside 172.18.20.0-31 and destination 172.18.20.3 is outside 172.18.20.32-63, so the packet is denied.",
        "id": 201
    },
    {
        "title": "200. Refer to the exhibit. Corporate policy demands that access to the server network be restricted to internal employees only. What is the best ACL type and placement to use in this situation?",
        "text": "",
        "images": ["https://itexamanswers.net/wp-content/uploads/2020/10/i350786v1n1_C3M4-Diagram.jpg"],
        "options": [
            "extended ACL outbound on R2 S0/0/1",
            "standard ACL outbound on R2 S0/0/0",
            "standard ACL inbound on R2 WAN interface connecting to the internet",
            "extended ACL inbound on R2 S0/0/0"
        ],
        "correct": [0],
        "explanation": "An extended ACL filters by source and destination, and an outbound ACL on R2 S0/0/1 acts as a single choke point for traffic arriving from multiple inbound interfaces destined to the server network.",
        "id": 202
    },
    {
        "title": "201. A technician is working on a Layer 2 switch and notices that a %CDP-4-DUPLEX_MISMATCH message keeps appearing for port G0/5. What command should the technician issue on the switch to start the troubleshooting process?",
        "text": "",
        "images": [],
        "options": ["show cdp neighbors", "show ip interface brief", "show interface g0/5", "show cdp"],
        "correct": [2],
        "explanation": "show interface g0/5 shows detailed info including the duplex mode, helping identify the mismatch.",
        "id": 203
    },
    {
        "title": "202. Which virtual resource would be installed on a network server to provide direct access to hardware resources?",
        "text": "",
        "images": [],
        "options": ["VMware Fusion", "a management console", "a dedicated VLAN", "a Type 1 hypervisor"],
        "correct": [3],
        "explanation": "A Type 1 hypervisor is installed directly on the hardware and has direct access to hardware resources.",
        "id": 204
    },
    {
        "title": "203. Refer to the exhibit. A network administrator has configured a standard ACL to permit only the two LAN networks attached to R1 to access the network that connects to R2 G0/1 interface. When following the best practices, in what location should the standard ACL be applied?",
        "text": "",
        "images": ["https://itexamanswers.net/wp-content/uploads/2020/01/i282155v1n2_282152.png"],
        "options": ["R2 G0/1 inbound", "R2 S0/0/1 outbound", "R1 S0/0/0 outbound", "R2 G0/1 outbound", "R2 G0/0 outbound"],
        "correct": [3],
        "explanation": "A standard ACL is placed close to the destination. The destination is the network on R2 G0/1, so apply it outbound on R2 G0/1.",
        "id": 205
    },
    {
        "title": "204. Which OSPF database is identical on all converged routers within the same OSPF area?",
        "text": "",
        "images": [],
        "options": ["neighbor", "forwarding", "link-state", "adjacency"],
        "correct": [2],
        "explanation": "The link-state database lists all routers within an area and is identical across all OSPF routers in that area.",
        "id": 206
    },
    {
        "title": "205. What are two features to consider when creating a named ACL? (Choose two.)",
        "text": "",
        "images": [],
        "options": [
            "Use alphanumeric characters if needed.",
            "Use special characters, such as ! or * to show the importance of the ACL.",
            "Modify the ACL using a text editor.",
            "Be descriptive when creating the ACL name.",
            "Use a space for ease of reading to separate the name from the description"
        ],
        "correct": [0, 3],
        "explanation": "Named ACLs can contain alphanumeric characters, should be descriptive, cannot contain spaces or punctuation, and are best written in capital letters.",
        "id": 207
    },
    {
        "type": "matching",
        "title": "206. Match the RESTful API method to CRUD function.",
        "text": "",
        "pairs": [
            { "left": "POST", "right": "Create" },
            { "left": "GET", "right": "Read" },
            { "left": "PUT/PATCH", "right": "Update" },
            { "left": "DELETE", "right": "Delete" }
        ],
        "distractors": [],
        "explanation": "POST = Create, GET = Read, PUT/PATCH = Update, DELETE = Delete.",
        "id": 208
    },
    {
        "title": "207. What type of traffic is described as requiring at least 384 Kbps of bandwidth?",
        "text": "",
        "images": [],
        "options": ["voice", "data", "video"],
        "correct": [2],
        "explanation": "Video requires at least 384 Kbps of bandwidth, while voice requires a minimum of 30 Kbps.",
        "id": 209
    },
    {
        "title": "208. Which step in the link-state routing process is described by a router inserting best paths into the routing table?",
        "text": "",
        "images": [],
        "options": [
            "declaring a neighbor to be inaccessible",
            "executing the SPF algorithm",
            "load balancing equal-cost paths",
            "choosing the best route"
        ],
        "correct": [3],
        "explanation": "Choosing the best route inserts the shortest paths from the SPF tree into the routing table (subject to administrative distance).",
        "id": 210
    },
    {
        "title": "209. Anycompany has decided to reduce its environmental footprint by reducing energy costs, moving to a smaller facility, and promoting telecommuting. What service or technology would support this requirement?",
        "text": "",
        "images": [],
        "options": ["data center", "virtualization", "cloud services", "dedicated servers"],
        "correct": [2],
        "explanation": "Cloud services reduce onsite IT equipment, energy costs, and facility size while enabling telecommuting.",
        "id": 211
    },
    {
        "title": "210. Which QoS technique smooths packet output rate?",
        "text": "",
        "images": [],
        "options": ["policing", "shaping", "weighted random early detection", "Integrated Services (IntServ)", "marking"],
        "correct": [1],
        "explanation": "Traffic shaping buffers excess packets and schedules them over time, smoothing the output rate. Policing drops excess traffic immediately.",
        "id": 212
    },
    {
        "title": "211. Refer to the exhibit. The company has provided IP phones to employees on the 192.168.10.0/24 network and the voice traffic will need priority over data traffic. What is the best ACL type and placement to use in this situation?",
        "text": "",
        "images": ["https://itexamanswers.net/wp-content/uploads/2019/12/i350679v1n1_C3M4-Diagram.jpg"],
        "options": [
            "extended ACL inbound on R1 G0/0",
            "extended ACL outbound on R2 WAN interface towards the internet",
            "extended ACL outbound on R2 S0/0/1",
            "extended ACLs inbound on R1 G0/0 and G0/1"
        ],
        "correct": [0],
        "explanation": "An extended ACL placed close to the source (inbound on R1 G0/0) filters and prioritizes the voice traffic from the 192.168.10.0/24 network.",
        "id": 213
    },
    {
        "title": "212. A network technician is configuring SNMPv3 and has set a security level of SNMPv3 authPriv. What is a feature of using this level?",
        "text": "",
        "images": [],
        "options": [
            "authenticates a packet by using the SHA algorithm only",
            "authenticates a packet by a string match of the username or community string",
            "authenticates a packet by using either the HMAC with MD5 method or the SHA method",
            "authenticates a packet by using either the HMAC MD5 or HMAC SHA algorithms and a username"
        ],
        "correct": [3],
        "explanation": "The authPriv level combines authentication (HMAC-MD5 or HMAC-SHA with a username) and encryption (DES, 3DES, or AES) for the highest protection.",
        "id": 214
    }
];
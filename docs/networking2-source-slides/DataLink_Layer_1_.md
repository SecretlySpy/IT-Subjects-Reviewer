Data Link Layer

The Data Link Layer
ïData link layer is responsible for carrying a
packet ( called frame) from one hop to the
next hop.
ïSpecific responsibilities of the data link layer
include framing, addressing, flow control,
error control, and media access control.

Outlines
ïPacketizing
ïPacketsâ Function
ïPacketsâ Components
ïError Detection
ïParity Check
ïCycle Redundancy Check
ïChecksum
ïMultiple Access Methods

Packetizing

How Networks Send Data
ïTo send data over a network, the data is
broken down into small, manageable
packets , each wrapped with the essential
information needed to get it from its source
to the correct destination .
ïIn the sender, data is disassembled in small
chunks.
ïThen it reassemble in the proper order when
it reaches its destination.

Packetsâ Function in Network Communications
| ïNetworks  |          | cannot  | operate   | if  computers  |        | put      |
| ---------- | -------- | ------- | --------- | -------------- | ------ | -------- |
| large      | amounts  |         | of  data  | on  the        | cable  | at  the  |
same time.

Packetsâ Function in Network Communications
| ïThere  |     | are  | two  | reasons  |     | why  | putting  |     | large  |     |
| ------- | --- | ---- | ---- | -------- | --- | ---- | -------- | --- | ------ | --- |
chunks of data on the cable at one time slows
down the network:
Large amounts of data sent as one large unit
1.
|     | tie          | up  | the  | network   |                 | and           | make  |             | timely  |     |
| --- | ------------ | --- | ---- | --------- | --------------- | ------------- | ----- | ----------- | ------- | --- |
|     | interaction  |     |      | and       | communications  |               |       | impossible  |         |     |
|     | because      |     | one  | computer  |                 | is  flooding  |       | the         | cable   |     |
with data.
|     | The  | impact  |     | of  retransmitting  |     |     | large  | units  |     | of  |
| --- | ---- | ------- | --- | ------------------- | --- | --- | ------ | ------ | --- | --- |
2.
data further multiplies network traffic.

Packetsâ Function in Network Communications
| ïThese    | effects  |      | are     | minimized    |             | when  | the      | large  |
| --------- | -------- | ---- | ------- | ------------ | ----------- | ----- | -------- | ------ |
| data      | units    |      | are     | reformatted  |             | into  | smaller  |        |
| packages  |          | for  | better  |              | management  |       | of       | error  |
correction in transmission.

Packetsâ Components
Packets contents are based on the protocol
used , but they basically contain:
ï§ Source address
ï§ Destination address
ï§ Data to be sent ( files & messages)
ï§ Other information like:
ï§ Giving instructions to the network on how to send data
ï§ Telling the receiving computer how to collect and
arrange packets.
ï§ Checking data from errors (determine the need to
resend the data)

A Typical data packet on the
Network
error-
checking
component

Error Detection

Accuracy of the Transmitted Data
ïData can be corrupted during transmission.
| ïFor  | reliable  | communication,  | errors  | must  | be  |
| ----- | --------- | --------------- | ------- | ----- | --- |
detected and corrected.

Single-Bit Error
ïIn a single-bit error, only one bit in the data
unit has changed. (0 â 1 or 1 â 0)

Burst Error
ïTwo or more bits in the data unit have
changed
ïBurst error does not necessarily mean that
the errors occur in consecutive bits
Corrupted Bits = 4 bits

Error Detection
ïError detection uses the concept of
redundancy, which means adding extra
(redundant) bits for detecting errors at the
destination

Error Detection Methods
:Three types of redundancy checks
Error
Detection
Methods
Cycle
Parity Check Redundancy Checksum
Check

Parity Check
ïThe most common and least expensive
ïa parity bit (extra bit)is added to every
1âs
data unit so that the total number of is
even or odd.
ïSimple parity check can detect single bit
errors.
ïIt can detect burst errors only if the total
number of errors in each data unit is odd.

Parity Check
Sende Receiv
|     | r     |     |      | er  | 1 0 1 | 0 1 0 0 |     |
| --- | ----- | --- | ---- | --- | ----- | ------- | --- |
| 1 0 | 1 0 1 | 0 0 | Data |     |       |         |     |
Yes  , Drop parity
bit & accept data
Reject Data
|     |     |     |     | No  |     | Even |     |
| --- | --- | --- | --- | --- | --- | ---- | --- |
?
Calculate Parity
bit
Count bits
|     | 1 1 | 0 1 0 | 1 0 0 |     |     |         |       |
| --- | --- | ----- | ----- | --- | --- | ------- | ----- |
|     |     |       |       |     | 1   | 1 0 1 0 | 1 0 0 |
Data + Redundancy Bits
The Medium

Cyclic Redundancy Check (CRC)
ï
Used for error checking
ï
Before sending data ,some calculation are
done on the data packets to generate a CRC
number
ï
When data is received , the same calculation
is done again to find out if the CRC number is
the same .
ï
If CRC the same : data is correct
ï
If CRC are different : data has a problem and need
to be sent again.
ï
CRC Can detect single bit & burst errors.

Checksum
ï
to generate an error-detection character
appended to the data.
ï
This calculation is applied in both the
sender side and the receiver side
ï
A match between receiver checksum and
transmitted checksum indicates good data.
ï
A mismatch indicates an error has occurred.
ï
Capable of detecting single or burst
errors.
ï
It is simple to implement in either
hardware or software.

Multiple Access Methods

Multiple Access Methods
ïWhen nodes or stations are connected and
use a common link (cable or Air) , called a
multipoint or broadcast link, we need a
multiple-access protocol to coordinate access
to the link.
ïIt is a set of rules that defines how a stations
puts data onto the link and takes data from
the link .

Multiple Access Methods
ïMany formal protocols have been devised to
handle access to a shared links. We
categorize them into three groups.
Multiple
Access
Protocols
Random
Controlled
Access Channelizati
Access
protocols on protocol
Protocol
Ex: Polling
Ex: FDMA,
and Token Ex: CSMA/CD
TDMA, and
passing and CSMA/CA
CDMA

CONTROLLED ACCESS
In controlled access, the stations consult one another
to find which station has the right to send.
A station cannot send unless it has been authorized
by other stations.
In these access methods, no contention and no
collision take place.

Polling Access Method
ïIn this access method, one station is
designated as the primary device and the
other are secondary stations.
ïAll access to the network is controlled by the
primary station.
ïThe primary queries (polls) each of the
secondary stations in turn, if it has
information to be transmitted.
ïOnly when it is polled does the secondary
have access to the communication channel.

Token-Passing Access Method
ï
In this access method, a
special type of packet, called a
token, circulates around a
cable ring from station to
station .
ï
When any station on the ring
needs to send data across the
network, it must wait for a free
token.
ï
When a free token is detected,
the station will take control of
it if the station has data to
send.

Random Access Methods
In random access or contention methods, no station is
superior to another station and none is assigned the
control over another (i.e. each station has the right to the
medium without being controlled by any other station).
It is named contention method because stations on the
network contend, or compete, for an opportunity to send
data.

Carrier-Sense Multiple Access
ï
| In  this  |     | way  |     | of  | methods,  |     | each  |     |
| --------- | --- | ---- | --- | --- | --------- | --- | ----- | --- |
station first listen to the cable
| (or  | check  |     | the  |     | state  | of  |     | the  |
| ---- | ------ | --- | ---- | --- | ------ | --- | --- | ---- |
cable ) before sending.
| ï When       |      | the   |        | station  |          | "senses"  |         |      |
| ------------ | ---- | ----- | ------ | -------- | -------- | --------- | ------- | ---- |
| that         | the  |       | cable  |          | is       | free      | (that   |      |
| there        |      | is    | no     | traffic  |          | on        |         | the  |
| cable)       |      | it    | can    |          | send     | a         | frame.  |      |
| Once         |      | the   |        |          | station  |           |         | has  |
| transmitted  |      |       |        | frame    |          | on        |         | the  |
| cable,       |      | no    | other  |          | station  |           |         | can  |
| transmit     |      |       | data   |          | until    |           |         | the  |
| original     |      | data  |        | has      | reached  |           |         | its  |
| destination  |      |       |        | and      | the      | cable     |         | is   |
free again.

Collisions
ïEven though each station listens for network traffic
before it attempts to transmit, an access conflict -
collision- will happen if more than one station tries to
send at the same time.
ïWhen a collision happened, the frames will be either
destroyed or modified
ïThe collisions occur because it takes time for signals
to propagate through the link.
ïTwo specialized methods of collision management
have been developed to improve performance:
ïCollision Detection (CD)
ïCollision Avoidance (CA).

Carrier-Sense Multiple Access With
Collision Detection (CSMA/CD)
ïThe carrier-sense multiple access with collision
detection (CSMA/CD) adds a procedure to handle a
collision.
ïIn this method, a station monitors the medium after it
sends a frame to see if the transmission was
successful. If so, the station is finished. If, however,
there is a collision, the frame is sent again.
ïIn the case of collision, the two stations involved stop
transmitting for a random period of time and then
attempt to retransmit.
ïEach station determines its own waiting period; this
reduces the chance that the computers will once again
transmit simultaneously.

Carrier-Sense Multiple Access With
Collision Avoidance (CSMA/CA)
ïThe Carrier-Sense Multiple Access With
Collision Avoidance (CSMA/CA) differs from
the previous method in that there is no
collision.
ïEach station signals its intent to transmit
before it actually transmits data.

CHANNELIZATION
ïChannelization is a multiple-access method in
which the available bandwidth of a link is
shared in time, frequency, or through code,
between different stations.
ïUsed for wireless communications.

Frequency-Division Multiple Access
ïIn frequency-division multiple access
(FDMA), the available bandwidth is divided
into frequency bands.
ïEach station is allocated a band to send its
data. In other words, each band is reserved
for a specific station, and it belongs to the
station all the time.

Time-division Multiple Access
ïIn time-division multiple access (TDMA), the
stations share the bandwidth of the channel
in time.
ïEach station is allocated a time slot during
which it can send data.
ïEach station transmits its data in is assigned
time slot.

Code-Division Multiple Access
ïIn the code-division multiple access (CDMA),
each station assigned a code that used to
send its data.
ïCDMA differs from FDMA because only one
channel occupies the entire bandwidth of the
link.
ïIt differs from TDMA because all stations can
send data simultaneously; there is no
timesharing.

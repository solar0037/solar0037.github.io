---
layout: post
title: "OSTEP Review: Part 3 (Persistence)"
---

## Persistence

Ah, another source of headache. I had to study all of part 3 alone, unlike part 1 and 2, since my professor did not address persistence in their OS class. Thankfully, most chapters became easier upon reading it again. Some of the ideas sounded similar to those of memory virtualization. Though where do RAID level numbers come from? Like 0, 1, 4, 5, ... they feel as odd as database normalization form numbers.

Note: I am not reading this whole chapter, and I will focus on projects now on that can help me get a job.

### Key Concepts

- **Canonical Device**: A canonical device consists of an interface and its internal structure. The OS can control the device by reading and writing these registers: status, command, and data. To improve efficiency, we utilize interrupts and DMA (Direct Memory Access). The OS can interact with the device by using either explicit I/O instructions or memory-mapped I/O. Different types of devices can fit into the OS with the help of device drivers.
- **Hard Disk Drive (HDD)**: A mechanical storage device consisting of plates and a needle. The I/O time of a hard disk is the sum of seek time, rotation time, and transfer time. Seek is finding the correct sector, rotation is finding the correct track, and transfer is reading/writing data. The rate of I/O, which is useful for comparing different products, is the size of the transfer divided by the time it took. The disk scheduler decides which I/O request to do next by disk scheduling algorithms.
- **Redundant Arrays of Inexpensive Disks (RAIDs)**: A method of using multiple disks as a whole in order to build reliable systems. Different levels of RAIDs with their own trade-offs are evaluated on their capacity, reliability, and performance. RAIDs utilize striping, mirroring, and parity bits in order to meet that criteria.
- **UNIX File Systems**: Never type `rm -rf /`.
- **File System Implementation**: An example file system consists of a  superblock, bitmaps for data and inodes respectively, an inode table, and user data. The superblock contains metadata about the disk, such as the number of inodes and data blocks. The bitmap indicates which inode/data blocks are currently in use. An inode (index node) contains metadata of the data block it is pointing to. A directory is a special type of file that maps names to inode numbers.
- **Fast File System (FFS)**: Treat the disk like it's a disk. Consider locality and amortization when allocating data on disk.
- **FSCK (File System Check)**: A Linux tool that scans the entire disk to recover from crashes. Used in early systems, but was very slow due to scanning the whole thing.
- **Journaling**: An alternative method that writes logs before updating blocks, similar to database transactions. Used in modern systems such as ext3, ext4, XFS and NTFS. It adds a little write overhead to greatly reduce recovery time.

---
layout: post
title: "OSTEP Review: Part 1 (Virtualization)"
---

I've been reading [OSTEP (Operating Systems: Three Easy Pieces)](https://pages.cs.wisc.edu/~remzi/OSTEP/), starting from my OS class last year. I've decided to write a review (or summary?) of the chapters. Since there is an infinite amount of good resource on the internet, this isn't going to be a full summary, which would be pointless. Instead, I'm going to write my own experience and my own definitions of the main concepts.

## Virtualization

Process scheduling was the one of the easiest parts in this book. It is simple, direct, and easy to understand. I already knew basic scheduling algorithms such as FIFO, SJF and RR, so it wasn't a big problem.

However, memory management was a real challenge for me. Even though I'm familiar with C/C++ and the fundamental address space model, the concept of paging was very puzzling to me. When I read chapter 20 for the first time, I couldn't tell the difference between page table, page table entry, page directory and page frame number. The abbreviations (PT, PTE, PD, PFN, and so on) also made me want to rage quit. After reviewing this part multiple times, I was finally prepared for my exam.

### Key Concepts

- **Process**: A running program, also called a job. It can have three states: ready, running and blocked.
- **Process API**: Consists of fork(), wait() and exec(). These system calls are combined to run various tasks.
- **Limited Direct Execution (LDE)**: Processes shouldn't run directly on the CPU. Instead, the OS provides system calls to the process, which are handled by a trap handler. The OS also starts a timer to interrupt processes, in order to regain control after some time.
- **Scheduling**: The CPU schedules processes to optimize turnaround time and/or response time, which are often a trade-off to one another. There are algorithms like FIFO, SJF and RR.
- **Multi-Level Feedback Queue (MLFQ)**: A scheduling algorithm that learns from the past to predict the future. Processes move up and down levels according to their priority.
- **Proportional Share Scheduler**: Another type of scheduler which ensures that each process gets a certain percentage of CPU time, instead of optimizing turnaround/response time.
- **Multiprocessor Scheduling**: The rise of multicore CPUs introduced a new challenge to scheduling, such as cache coherence between cores. One metric is cache affinity, which means that a process should remain on the same processor as long as possible. Another metric is scalability, which can be achieved by using multiple queues (one per core). The imbalance of the number of jobs between queues is called load imbalance, which can be solved by moving jobs between queues.
- **Memory Virtualization**: In order to load multiple processes onto memory, the OS needs to make an abstraction of the memory, so that each process has their own address space separated from others. An address space consists of code, data, stack and heap.
- **Memory API**: Library calls such as malloc(), free() and calloc() are provided to dynamically allocate memory on the heap. Programmers should never use the underlying system calls: brk() and sbrk().
- **Address Translation**: The hardware translates a virtual address into a physical address, to access data in the actual memory.
- **Base and Bounds**: An approach that uses a base register to indicate the starting position of an address space and a bounds register to remember its size. Suffers from memory inefficiency due to the large, unused space between stack and heap.
- **Segmentation**: Code, stack, heap are segmented to have their own base and bounds registers in order to minimize the free chunk gap.
- **Free Space Management**: Most allocators place extra information in a header block to track free memory chunks. Therefore, when memory is freed, it can be merged with other free chunks of memory. Various strategies exist for choosing a chunk for the requested memory size.
- **Paging**: A different type of method which splits up address space into fixed-size units called pages. Physical memory is also split into same-sized units called page frames. A page table is used per process to translate virtual address into physical address.
- **Translation-Lookaside Buffer (TLB)**: A hardware cache that helps address translation.
- **Hybrid Approach of Paging and Segments**: Used to alleviate the problem of page tables being too big. Each segment is given its own page table.
- **Multi-Level Page Table**: Introduces a new meta-structure called page directory to keep track of unused pages (equally divided sections) of a page table. Pages that consists of only invalid entries are not allocated, thus saving memory space.

---
layout: post
title: "OSTEP Review: Part 2 (Concurrency)"
---

## Concurrency

This chapter surely was a headache. At first, I felt like my brain was deadlocked, but I was finally able to resolve it. When reading the producer/consumer problem, I wasn't able to know that a thread goes from blocked to ready state when it's woken up (it's lowkey apparent but not written explicitly). Therefore it was hard to understand the first issue where a second thread sneaks in, grabs the data (buffer), so the original one is left without buffers to consume. Reading the entire thing again after some time solved the problem.

The reason semaphores was the most interesting to read was the ability to replace locks and condition variables by simply modifying an integer variable. But why do philosophers have to share forks at the dining table? eww (if you don't get it, take a look at the dining philosophers problem)

### Key Concepts

- **Thread**: A new abstraction for a single running program. A multi-threaded program has more than one point of execution within a program. Threads share the same address space, but have one stack for each.
- **Critical Section**: A piece of code that accesses a shared resource, usually a variable or a data structure.
- **Race Condition (or Data Race)**: This happens when multiple threads enter the critical section at the same time. Both attempt to update the shared data structure, resulting in an undesirable outcome.
- **Indeterminism**: Something we usually do not expect from computer systems. An indeterminate program consists of one or more race conditions, thus making the output vary on each run.
- **Mutual Exclusion**: A property that guarantees that only a single thread enters a critical section at a time.
- **Thread API**: The pthread libaray provides thread creation, building mutual exclusion via locks, and signaling and waiting via condition variables.
- **Lock**: Locks ensure that any critical section executes as if it were an atomic instruction. Both hardware and OS support is needed to achieve mutual exclusion, fairness, and performance.
- **Locked Data Structures**: Making data structures thread-safe is easy, but scalability is another problem.
- **Condition Variable**: This is used to signal another thread that is sleeping when a certain condition is met, hence the name 'condition' variable.
- **Semaphore**: An integer object used alone as a synchronization primitive, invented by Dijkstra.
- **Deadlock**: A situation where no threads can proceed because each thread is waiting for another thread to release a lock. Four conditions are needed for a deadlock to occur: mutual exclusion, hold-and-wait, no preemption, and circular wait.
- **Livelock**: A rare situation where threads repeatedly run through some code (try to grab a lock but fail) but are not progressing. They are essentially doing something but not doing anything at all.
- **Event-Based Concurrency**: I did not understand this. To be updated in the distant future.

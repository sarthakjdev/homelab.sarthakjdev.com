# Rescuing and Mounting a Lost Partition on Ubuntu

When faced with the challenge of an undetected and inaccessible partition, adopting a systematic approach is crucial to diagnose and rectify the issue. This document outlines the methodology I followed to detect, consolidate, and finally mount a previously inaccessible partition within Ubuntu.

## Contents

1. Problem Statement
2. Diagnosis
3. Solution Implementation
4. Conclusion

### 1. Problem Statement

Upon inspecting system storage using the `df -H` command, a discrepancy in the reported disk space was evident. Approximately 200GB of space was not accounted for, leading to the suspicion of a lost partition.

### 2. Diagnosis

For a deeper exploration:

**Tool Used**: `parted`
```bash
sudo parted -l
```

**Outcome**: The `parted` tool confirmed a 200GB free space, cementing the hypothesis of a missing partition.

### 3. Solution Implementation

With the issue pinpointed, the next steps involved recovery and reorganization.

**Step 1**: Identify and Remove Unnecessary Partitions

A previously allocated 8GB swap space, no longer needed, was identified. It was removed to free up additional space.

```bash
sudo swapoff /dev/sdX#  # Swap partition location
sudo parted
(parted) rm #
(parted) quit
```

**Step 2**: Consolidate Free Space

With the swap space removed, the next objective was to expand the main partition to utilize the freed-up space.

```bash
sudo parted
(parted) resizepart #  # Number of the partition to be extended
(parted) quit
```

**Step 3**: Decide on a Mount Point 

`/mnt/hdd0` was chosen as the desired mount point.

**Step 4**: Mount the Consolidated Partition

```bash
sudo mkdir /mnt/hdd0
sudo mount /dev/sdX# /mnt/hdd0
```

**Step 5**: Ensure Persistence

To keep the mounted partition accessible across reboots:

```plaintext
UUID=YOUR_UUID_HERE /mnt/hdd0 ext4 defaults 0 2
```
This was added to `/etc/fstab`.

**Step 6**: Assign Permissions

To ensure unobstructed access:

```bash
sudo chown $USER:$USER /mnt/hdd0
sudo chmod 755 /mnt/hdd0
```

### 4. Conclusion

Through a well-defined and methodical approach, not only was the missing partition detected and accessed, but unnecessary partitions were also identified and removed. This optimized the storage layout and fully utilized available resources. Such exercises reiterate the essence of thorough system audits and the pivotal role of diagnostic tools, emphasizing a structured mindset when troubleshooting intricate system administration challenges.

---